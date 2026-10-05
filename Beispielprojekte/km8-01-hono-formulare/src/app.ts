import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import {
    type FormFehler,
    kursOptionen,
    listAnmeldungen,
    pruefe,
    speichere,
} from "./anmeldungen.ts";

export function createApp(): Hono {
    const app = new Hono();

    // GET-Formular: Die Suche hängt den Begriff an die URL (?q=...).
    // Genau dafür ist GET gedacht — lesen, nichts verändern.
    app.get("/suche", (c) => {
        const begriff = c.req.query("q") ?? "";

        return c.html(sucheSeite(begriff));
    });

    // EIN Endpunkt, ZWEI Clients: Der Content-Type entscheidet,
    // was zurückkommt. Der Browser (Formular) erwartet HTML und wird
    // per 303 weitergeleitet; ein JSON-Client bekommt JSON.
    app.post("/anmeldung", async (c) => {
        const contentTyp = c.req.header("content-type") ?? "";
        const istJson = contentTyp.includes("application/json");

        const eingabe = istJson
            ? await c.req.json().catch(() => ({}))
            : await c.req.parseBody();

        const fehler = pruefe(eingabe as Record<string, unknown>);

        if (istJson) {
            if (fehler.length > 0) {
                return c.json({ fehler }, 400);
            }

            return c.json(speichere(eingabe as Record<string, unknown>), 201);
        }

        if (fehler.length > 0) {
            return c.html(
                fehlerSeite(fehler),
                400,
            );
        }

        // Redirect-after-POST (303): Der Browser holt danach /danke mit GET.
        // Drückt man F5, wird die Bestätigungsseite neu geladen — nicht die
        // Anmeldung erneut abgeschickt.
        return c.redirect("/danke", 303);
    });

    app.get("/danke", serveStatic({ path: "./static/danke.html" }));

    app.get("/api/anmeldungen", (c) => c.json(listAnmeldungen()));

    // Statische Seiten: / liefert das Formular, alles andere aus ./static.
    app.get("/", serveStatic({ path: "./static/anmeldung.html" }));
    app.use("/*", serveStatic({ root: "./static" }));

    return app;
}

function sucheSeite(begriff: string): string {
    const treffer = kursOptionen().filter((kurs) => kurs.includes(begriff));

    return seite(
        "Suche",
        `<h1>Suche</h1>
        <p>Suchbegriff aus dem Query-String: <code>${
            escapeHtml(begriff)
        }</code></p>
        <p>Treffer: ${
            treffer.length === 0 ? "keine" : treffer.map(escapeHtml).join(", ")
        }</p>
        <p><a href="/">Zurück zum Formular</a></p>`,
    );
}

function fehlerSeite(fehler: FormFehler[]): string {
    const liste = fehler
        .map((f) =>
            `<li><strong>${escapeHtml(f.feld)}</strong>: ${
                escapeHtml(f.meldung)
            }</li>`
        )
        .join("");

    return seite(
        "Anmeldung nicht möglich",
        `<h1>Anmeldung nicht möglich</h1>
        <ul class="fehler">${liste}</ul>
        <p>So sendet der Server ein <strong>400</strong> für das Formular — die
        Eingaben bleiben im Body erhalten und können erneut geprüft werden.</p>
        <p><a href="/">Zurück zum Formular</a></p>`,
    );
}

function seite(titel: string, inhalt: string): string {
    return `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(titel)}</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <main class="page">${inhalt}</main>
</body>
</html>`;
}

function escapeHtml(wert: string): string {
    return wert
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}
