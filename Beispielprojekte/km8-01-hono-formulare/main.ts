import { createApp } from "./src/app.ts";

// Einstiegspunkt: HTTP-Server (Standard-Port 8000, per PORT überschreibbar,
// z. B. PORT=8123 deno task start).
// Der Server wird erst hier gestartet — so bleiben die Tests netzfrei
// und rufen die App direkt über app.request(...) auf.
const port = Number(Deno.env.get("PORT") ?? "8000");

Deno.serve({ port }, createApp().fetch);
