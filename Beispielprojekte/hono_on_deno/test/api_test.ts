import { assertEquals } from "@std/assert";
import { createApp } from "../src/app.ts";
import type { Order, Product } from "../src/data/musicstore.ts";

const app = createApp();

Deno.test("GET /api/products liefert alle Artikel", async () => {
    const response = await app.request("/api/products");

    assertEquals(response.status, 200);

    const products = await response.json() as Product[];
    assertEquals(products.length, 9);
});

Deno.test("GET /api/products filtert nach Kategorie", async () => {
    const response = await app.request("/api/products?category=Zubehoer");

    assertEquals(response.status, 200);

    const products = await response.json() as Product[];
    assertEquals(products.length, 5);
    assertEquals(products.every((p) => p.category === "Zubehoer"), true);
});

Deno.test("GET /api/products/:id liefert 404 bei unbekannter ID", async () => {
    const response = await app.request("/api/products/gibt-es-nicht");

    assertEquals(response.status, 404);
});

Deno.test("POST /api/orders ohne Rabatt bei unter 3 Artikeln", async () => {
    const response = await app.request("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: ["capo-deluxe", "pedal-echo"] }),
    });

    assertEquals(response.status, 201);

    const order = await response.json() as Order;
    assertEquals(order.subtotal, 173);
    assertEquals(order.discount, 0);
    assertEquals(order.total, 173);
});

Deno.test("POST /api/orders gewaehrt 10% Rabatt ab 3 Artikeln", async () => {
    const response = await app.request("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            items: ["capo-deluxe", "pedal-echo", "studio-kopfhoerer"],
        }),
    });

    assertEquals(response.status, 201);

    const order = await response.json() as Order;
    assertEquals(order.subtotal, 352);
    assertEquals(order.discount, 35.2);
    assertEquals(order.total, 316.8);
});

Deno.test("POST /api/orders weist ungueltige Bodies ab", async () => {
    const response = await app.request("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [] }),
    });

    assertEquals(response.status, 400);
});

Deno.test("POST /api/orders weist unbekannte Produkte ab", async () => {
    const response = await app.request("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: ["gibt-es-nicht"] }),
    });

    assertEquals(response.status, 400);
});

Deno.test("DELETE /api/orders/:id storniert eine Bestellung", async () => {
    const createResponse = await app.request("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: ["drum-pad"] }),
    });
    const order = await createResponse.json() as Order;

    const deleteResponse = await app.request(`/api/orders/${order.id}`, {
        method: "DELETE",
    });
    assertEquals(deleteResponse.status, 204);

    const getResponse = await app.request(`/api/orders/${order.id}`);
    assertEquals(getResponse.status, 404);
});

Deno.test("GET /api/unbekannt liefert JSON-404", async () => {
    const response = await app.request("/api/unbekannt");

    assertEquals(response.status, 404);
    assertEquals(response.headers.get("content-type")?.includes("json"), true);
});
