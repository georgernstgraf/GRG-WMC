// Datenvertrag der Hono-Referenz-API (`Beispielprojekte/hono_on_deno`).
// Bewusst als eigenständige Kopie: Der Client kennt die API über JSON,
// nicht über einen Import des Server-Quellcodes.

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    emoji: string;
}

export interface OrderItem {
    productId: string;
    name: string;
    price: number;
}

export interface Order {
    id: string;
    items: OrderItem[];
    subtotal: number;
    discount: number;
    total: number;
    createdAt: string;
}
