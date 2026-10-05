import { assertEquals } from "@std/assert";
import { createApp } from "../src/app.ts";

// Formularkörper genau so bauen, wie der Browser ihn schickt:
// application/x-www-form-urlencoded (Leerzeichen als "+", @ als %40 …).
function formularkoerper(daten: Record<string, string>): string {
    return new URLSearchParams(daten).toString();
}

Deno.test("GET / liefert das Anmeldeformular", async () => {
    const res = await createApp().request("/");

    assertEquals(res.status, 200);
    assertEquals((await res.text()).includes("<form"), true);
});

Deno.test("POST /anmeldung (Formular) leitet mit 303 auf /danke", async () => {
    const res = await createApp().request("/anmeldung", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formularkoerper({
            name: "Ada Lovelace",
            email: "ada@example.org",
            kurs: "typescript",
            agb: "on",
        }),
    });

    assertEquals(res.status, 303);
    assertEquals(res.headers.get("location"), "/danke");
});

Deno.test("POST /anmeldung (ungültig) liefert 400", async () => {
    const res = await createApp().request("/anmeldung", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formularkoerper({
            name: "A",
            email: "keine-mail",
            kurs: "",
            agb: "",
        }),
    });

    assertEquals(res.status, 400);
});

Deno.test("POST /anmeldung (JSON) liefert 201 und JSON", async () => {
    const res = await createApp().request("/anmeldung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Grace Hopper",
            email: "grace@example.org",
            kurs: "react",
            agb: true,
        }),
    });

    assertEquals(res.status, 201);
    const daten = await res.json();
    assertEquals(daten.name, "Grace Hopper");
});

Deno.test("GET /api/anmeldungen listet gespeicherte Anmeldungen", async () => {
    await createApp().request("/anmeldung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Test Person",
            email: "test@example.org",
            kurs: "html-css",
            agb: true,
        }),
    });

    const res = await createApp().request("/api/anmeldungen");
    const liste = await res.json() as unknown[];

    assertEquals(res.status, 200);
    assertEquals(liste.length >= 1, true);
});

Deno.test("GET /suche übernimmt den Begriff aus dem Query-String", async () => {
    const res = await createApp().request("/suche?q=typescript");
    const html = await res.text();

    assertEquals(res.status, 200);
    assertEquals(html.includes("typescript"), true);
});
