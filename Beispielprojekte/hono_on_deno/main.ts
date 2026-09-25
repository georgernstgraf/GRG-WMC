import { createApp } from "./src/app.ts";

Deno.serve(createApp().fetch);
