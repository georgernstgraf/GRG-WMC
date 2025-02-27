import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { HTTPException } from "hono/http-exception";

const errorPages = {
    400: `<html><body><h1>400 Bad Request</h1></body></html>`,
    403: `<html><body><h1>403 Forbidden</h1></body></html>`,
    404: `<html><body><h1>404 Not Found</h1></body></html>`,
    500: `<html><body><h1>500 Internal Error</h1></body></html>`,
};

const app = new Hono();

// Serve static files
app.use("/static/*", serveStatic({ root: "./public" }));

// Routes
app.get("/", (c) => c.text("Welcome!"));

app.get("/admin", (c) => {
    const isAuthenticated = false;
    if (!isAuthenticated) {
        throw new HTTPException(403, { message: "Access denied" });
    }
    return c.text("Admin Dashboard");
});

// Error handling
app.onError((err, c) => {
    if (err instanceof HTTPException) {
        const status = err.status;
        const page = errorPages[status] || errorPages[500];
        return c.html(page, status);
    }
    console.error(err);
    return c.html(errorPages[500], 500);
});

// 404 handler
app.all("*", (c) => c.html(errorPages[404], 404));

// Start server
Deno.serve({ port: 8000 }, app.fetch);
