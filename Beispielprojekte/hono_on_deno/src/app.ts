import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/deno";
import api from "./routes/api.ts";
import {
    ClientModuleError,
    isDevelopment,
    transpileClientFile,
} from "./transpile.ts";

const INDEX_HTML_URL = new URL("../static/index.html", import.meta.url);
let indexHtml: string | undefined;

async function readIndexHtml(): Promise<string> {
    if (indexHtml === undefined) {
        indexHtml = await Deno.readTextFile(INDEX_HTML_URL);
    }

    return indexHtml;
}

export function createApp(): Hono {
    const app = new Hono();

    app.use("*", logger());

    // 1) JSON-API
    app.route("/api", api);

    // 2) Client-TypeScript on demand zu JavaScript transpilieren
    app.get("/client/:path{.+\\.ts$}", async (c) => {
        const filePath = c.req.param("path");

        try {
            const js = await transpileClientFile(filePath);

            return c.body(js, 200, {
                "Content-Type": "application/javascript; charset=utf-8",
                "Cache-Control": isDevelopment()
                    ? "no-cache"
                    : "public, max-age=31536000",
            });
        } catch (err) {
            if (err instanceof ClientModuleError) {
                return c.text(err.message, err.status);
            }

            const message = err instanceof Error ? err.message : String(err);
            return c.text(`Transpilation Error: ${message}`, 500);
        }
    });

    // 3) Statische Assets (HTML, CSS, Bilder)
    app.get("/", serveStatic({ path: "./static/index.html" }));
    app.use("/*", serveStatic({ root: "./static" }));

    // 4) SPA-Fallback: API bekommt JSON-404, alles andere index.html
    app.notFound(async (c) => {
        if (c.req.path.startsWith("/api/")) {
            return c.json({ error: "Endpunkt nicht gefunden" }, 404);
        }

        return c.html(await readIndexHtml());
    });

    return app;
}
