import { Hono } from "hono";
import {
    cancelOrder,
    createOrder,
    findOrder,
    findProduct,
    getStats,
    listOrders,
    listProducts,
    MusicStoreError,
} from "../data/musicstore.ts";

const api = new Hono();

// GET /api/products?category=Zubehoer
api.get("/products", (c) => {
    const category = c.req.query("category");
    return c.json(listProducts(category));
});

// GET /api/products/:id
api.get("/products/:id", (c) => {
    const product = findProduct(c.req.param("id"));

    if (product === undefined) {
        return c.json({ error: "Produkt nicht gefunden" }, 404);
    }

    return c.json(product);
});

// GET /api/orders — Verkaufslog
api.get("/orders", (c) => c.json(listOrders()));

// GET /api/orders/:id
api.get("/orders/:id", (c) => {
    const order = findOrder(c.req.param("id"));

    if (order === undefined) {
        return c.json({ error: "Bestellung nicht gefunden" }, 404);
    }

    return c.json(order);
});

// POST /api/orders { items: string[] }
api.post("/orders", async (c) => {
    let body: unknown;

    try {
        body = await c.req.json();
    } catch {
        return c.json({ error: "Ungueltiger JSON-Body" }, 400);
    }

    const items = (body as { items?: unknown } | null)?.items;

    if (
        !Array.isArray(items) ||
        items.length === 0 ||
        items.some((item) => typeof item !== "string")
    ) {
        return c.json(
            {
                error:
                    "Feld 'items' muss ein nicht-leeres Array von Produkt-IDs sein",
            },
            400,
        );
    }

    try {
        const order = createOrder(items as string[]);
        return c.json(order, 201);
    } catch (err) {
        if (err instanceof MusicStoreError) {
            return c.json({ error: err.message }, 400);
        }

        throw err;
    }
});

// DELETE /api/orders/:id — Storno
api.delete("/orders/:id", (c) => {
    const removed = cancelOrder(c.req.param("id"));

    if (!removed) {
        return c.json({ error: "Bestellung nicht gefunden" }, 404);
    }

    return c.body(null, 204);
});

// GET /api/stats
api.get("/stats", (c) => c.json(getStats()));

export default api;
