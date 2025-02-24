import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("*", serveStatic({ root: "./static" }));

Deno.serve(app.fetch);
