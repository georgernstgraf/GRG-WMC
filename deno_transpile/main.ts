import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { bundle } from "@deno/emit";
import denoConfig from "./deno.json" with { type: "json" };

const app = new Hono();
const isDev = true;
const importMap = {
    imports: denoConfig.imports,
};

app.get("/:path{.+\\.ts$}", async (c) => {
    const filePath = `./src/${c.req.param("path")}`;
    // prepend "src/"
    console.log(`Transpiling ${filePath}`);

    try {
        const result = await bundle(filePath, {
            importMap,
            minify: !isDev,
            type: "module",
        });
        const js = result.code;

        if (!js) throw new Error("Bundling did not produce JavaScript output");

        return c.body(js, 200, {
            "Content-Type": "application/javascript; charset=utf-8",
            "Cache-Control": isDev ? "no-cache" : "public, max-age=31536000",
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return c.text(`Transpilation Error: ${message}`, 500);
    }
});

app.use("/*", serveStatic({ root: "./static" }));

Deno.serve(app.fetch);
