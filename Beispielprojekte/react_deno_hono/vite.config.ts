import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite läuft unter Deno (`deno task dev`), nicht unter Node.
// Der Proxy macht `/api` im Dev-Server same-origin zur Hono-Referenz.
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            "/api": {
                target: "http://localhost:8000",
                changeOrigin: true,
            },
        },
    },
    optimizeDeps: {
        include: ["react/jsx-runtime"],
    },
});
