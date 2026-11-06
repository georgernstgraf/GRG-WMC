import type { Product } from "../api/types.ts";

export interface CartLine {
    product: Product;
    quantity: number;
}

export type CartAction =
    | { type: "add"; product: Product }
    | { type: "decrement"; productId: string }
    | { type: "remove"; productId: string }
    | { type: "clear" };

// Muss zur Referenz-API passen (dort: DISCOUNT_MIN_ITEMS / DISCOUNT_RATE).
export const DISCOUNT_MIN_ITEMS = 3;
export const DISCOUNT_RATE = 0.1;

function round2(value: number): number {
    return Math.round(value * 100) / 100;
}

export function cartReducer(state: CartLine[], action: CartAction): CartLine[] {
    switch (action.type) {
        case "add": {
            const vorhanden = state.some((line) =>
                line.product.id === action.product.id
            );

            if (vorhanden) {
                return state.map((line) =>
                    line.product.id === action.product.id
                        ? { ...line, quantity: line.quantity + 1 }
                        : line
                );
            }

            return [...state, { product: action.product, quantity: 1 }];
        }

        case "decrement": {
            const line = state.find((entry) =>
                entry.product.id === action.productId
            );

            if (line === undefined) {
                return state;
            }

            if (line.quantity <= 1) {
                return state.filter((entry) =>
                    entry.product.id !== action.productId
                );
            }

            return state.map((entry) =>
                entry.product.id === action.productId
                    ? { ...entry, quantity: entry.quantity - 1 }
                    : entry
            );
        }

        case "remove":
            return state.filter((line) => line.product.id !== action.productId);

        case "clear":
            return [];
    }
}

export interface CartTotals {
    itemCount: number;
    subtotal: number;
    discount: number;
    total: number;
    nextDiscountIn: number;
}

export function cartTotals(lines: CartLine[]): CartTotals {
    const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = round2(
        lines.reduce(
            (sum, line) => sum + line.product.price * line.quantity,
            0,
        ),
    );
    const discount = itemCount >= DISCOUNT_MIN_ITEMS
        ? round2(subtotal * DISCOUNT_RATE)
        : 0;

    return {
        itemCount,
        subtotal,
        discount,
        total: round2(subtotal - discount),
        nextDiscountIn: Math.max(0, DISCOUNT_MIN_ITEMS - itemCount),
    };
}

// Die API erwartet die Produkt-IDs einzeln, Duplikate inklusive.
export function toOrderItems(lines: CartLine[]): string[] {
    return lines.flatMap((line) =>
        Array.from({ length: line.quantity }, () => line.product.id)
    );
}
