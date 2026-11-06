import type { Order, Product } from "./types.ts";

// In der Entwicklung liefert der Vite-Proxy `/api`.
// Für Produktions-Builds kann VITE_API_BASE eine absolute URL setzen.
const meta = import.meta as ImportMeta & {
    env?: { VITE_API_BASE?: string };
};
const API_BASE = (meta.env?.VITE_API_BASE ?? "/api").replace(/\/$/, "");

export class ApiError extends Error {
    readonly status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}

async function fehlerText(response: Response): Promise<string> {
    try {
        const body = await response.json() as { error?: unknown };

        if (typeof body.error === "string") {
            return body.error;
        }
    } catch {
        // Kein JSON-Body – Standardtext verwenden.
    }

    return `Anfrage fehlgeschlagen (${response.status})`;
}

export async function listProducts(
    category?: string,
    signal?: AbortSignal,
): Promise<Product[]> {
    const query = category === undefined
        ? ""
        : `?category=${encodeURIComponent(category)}`;
    const response = await fetch(`${API_BASE}/products${query}`, { signal });

    if (!response.ok) {
        throw new ApiError(await fehlerText(response), response.status);
    }

    return await response.json() as Product[];
}

export async function createOrder(productIds: string[]): Promise<Order> {
    const response = await fetch(`${API_BASE}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: productIds }),
    });

    if (!response.ok) {
        throw new ApiError(await fehlerText(response), response.status);
    }

    return await response.json() as Order;
}
