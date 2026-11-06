import { assertEquals, assertRejects } from "@std/assert";
import { jsonResponse, stubFetch } from "../test/fetch.ts";
import { ApiError, createOrder, listProducts } from "./client.ts";

Deno.test("listProducts ruft /api/products auf", async () => {
    let requested = "";
    const restore = stubFetch((input) => {
        requested = String(input);
        return jsonResponse([]);
    });

    try {
        const products = await listProducts();
        assertEquals(products, []);
        assertEquals(requested, "/api/products");
    } finally {
        restore();
    }
});

Deno.test("listProducts kodiert den Kategorie-Filter", async () => {
    let requested = "";
    const restore = stubFetch((input) => {
        requested = String(input);
        return jsonResponse([]);
    });

    try {
        await listProducts("Zubehör & mehr");
        assertEquals(
            requested,
            "/api/products?category=Zubeh%C3%B6r%20%26%20mehr",
        );
    } finally {
        restore();
    }
});

Deno.test("createOrder sendet POST mit den Produkt-IDs", async () => {
    let method = "";
    let body = "";
    const restore = stubFetch((_input, init) => {
        method = init?.method ?? "";
        body = String(init?.body ?? "");
        return jsonResponse({
            id: "order-1",
            items: [],
            subtotal: 100,
            discount: 0,
            total: 100,
            createdAt: "2026-11-06T00:00:00.000Z",
        }, 201);
    });

    try {
        const order = await createOrder(["gitarre", "gitarre"]);
        assertEquals(method, "POST");
        assertEquals(JSON.parse(body), { items: ["gitarre", "gitarre"] });
        assertEquals(order.id, "order-1");
    } finally {
        restore();
    }
});

Deno.test("API-Fehler werden als ApiError mit Servertext geworfen", async () => {
    const restore = stubFetch(() =>
        jsonResponse({ error: "Unbekanntes Produkt" }, 400)
    );

    try {
        const error = await assertRejects(
            () => createOrder(["unbekannt"]),
            ApiError,
            "Unbekanntes Produkt",
        );
        assertEquals((error as ApiError).status, 400);
    } finally {
        restore();
    }
});
