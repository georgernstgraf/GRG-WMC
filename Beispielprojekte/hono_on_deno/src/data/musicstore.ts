// In-Memory-Datenhaltung fuer die Musikgeschaeft-Referenz-API.
// Bewusst ohne DB: Seed-Daten leben nur im Prozess und werden bei jedem
// Neustart zurueckgesetzt. Ein spaeterer Umbau auf SQLite (jsr:@db/sqlite)
// betrifft nur dieses Modul.

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

export const DISCOUNT_MIN_ITEMS = 3;
export const DISCOUNT_RATE = 0.1;

export class MusicStoreError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MusicStoreError";
    }
}

const products: Product[] = [
    {
        id: "vintage-e-gitarre",
        name: "Vintage E-Gitarre",
        price: 749,
        category: "Instrument",
        emoji: "\u{1F3B8}",
    },
    {
        id: "stage-keyboard",
        name: "Stage Keyboard",
        price: 1190,
        category: "Instrument",
        emoji: "\u{1F3B9}",
    },
    {
        id: "studio-mikrofon",
        name: "Studio Mikrofon",
        price: 229,
        category: "Zubehoer",
        emoji: "\u{1F3A4}",
    },
    {
        id: "analog-synth",
        name: "Analog Synth",
        price: 980,
        category: "Instrument",
        emoji: "\u{1F39B}\u{FE0F}",
    },
    {
        id: "drum-pad",
        name: "Drum Pad",
        price: 399,
        category: "Instrument",
        emoji: "\u{1F941}",
    },
    {
        id: "bass-combo",
        name: "Bass Combo",
        price: 540,
        category: "Zubehoer",
        emoji: "\u{1F50A}",
    },
    {
        id: "capo-deluxe",
        name: "Capo Deluxe",
        price: 24,
        category: "Zubehoer",
        emoji: "\u{1FA95}",
    },
    {
        id: "pedal-echo",
        name: "Pedal Echo",
        price: 149,
        category: "Zubehoer",
        emoji: "\u{1F9B6}",
    },
    {
        id: "studio-kopfhoerer",
        name: "Studio Kopfhoerer",
        price: 179,
        category: "Zubehoer",
        emoji: "\u{1F3A7}",
    },
];

const orders: Order[] = [];

function round2(value: number): number {
    return Math.round(value * 100) / 100;
}

export function listProducts(category?: string): Product[] {
    if (category === undefined || category === "") {
        return [...products];
    }

    return products.filter((product) => product.category === category);
}

export function findProduct(id: string): Product | undefined {
    return products.find((product) => product.id === id);
}

export function listOrders(): Order[] {
    return [...orders];
}

export function findOrder(id: string): Order | undefined {
    return orders.find((order) => order.id === id);
}

export function createOrder(productIds: string[]): Order {
    if (productIds.length === 0) {
        throw new MusicStoreError("Der Warenkorb ist leer");
    }

    const items: OrderItem[] = productIds.map((productId) => {
        const product = findProduct(productId);

        if (product === undefined) {
            throw new MusicStoreError(`Unbekanntes Produkt: ${productId}`);
        }

        return {
            productId: product.id,
            name: product.name,
            price: product.price,
        };
    });

    const subtotal = round2(
        items.reduce((sum, item) => sum + item.price, 0),
    );
    const discount = items.length >= DISCOUNT_MIN_ITEMS
        ? round2(subtotal * DISCOUNT_RATE)
        : 0;
    const total = round2(subtotal - discount);

    const order: Order = {
        id: crypto.randomUUID(),
        items,
        subtotal,
        discount,
        total,
        createdAt: new Date().toISOString(),
    };

    orders.unshift(order);
    return order;
}

export function cancelOrder(id: string): boolean {
    const index = orders.findIndex((order) => order.id === id);

    if (index === -1) {
        return false;
    }

    orders.splice(index, 1);
    return true;
}

export function getStats(): {
    orderCount: number;
    revenue: number;
    productCount: number;
} {
    const revenue = round2(
        orders.reduce((sum, order) => sum + order.total, 0),
    );

    return {
        orderCount: orders.length,
        revenue,
        productCount: products.length,
    };
}
