import { assertEquals } from "@std/assert";
import type { Product } from "../api/types.ts";
import { cartReducer, cartTotals, toOrderItems } from "./cartReducer.ts";

const gitarre: Product = {
    id: "gitarre",
    name: "Gitarre",
    price: 100,
    category: "Instrument",
    emoji: "🎸",
};

const kabel: Product = {
    id: "kabel",
    name: "Kabel",
    price: 10,
    category: "Zubehoer",
    emoji: "🔌",
};

Deno.test("add legt eine neue Zeile an", () => {
    const state = cartReducer([], { type: "add", product: gitarre });
    assertEquals(state, [{ product: gitarre, quantity: 1 }]);
});

Deno.test("add erhöht die Menge eines vorhandenen Produkts", () => {
    let state = cartReducer([], { type: "add", product: gitarre });
    state = cartReducer(state, { type: "add", product: gitarre });
    assertEquals(state, [{ product: gitarre, quantity: 2 }]);
});

Deno.test("decrement verringert und entfernt bei Menge 1", () => {
    let state = cartReducer([], { type: "add", product: gitarre });
    state = cartReducer(state, { type: "add", product: gitarre });
    state = cartReducer(state, { type: "decrement", productId: "gitarre" });
    assertEquals(state, [{ product: gitarre, quantity: 1 }]);

    state = cartReducer(state, { type: "decrement", productId: "gitarre" });
    assertEquals(state, []);
});

Deno.test("remove entfernt gezielt eine Zeile", () => {
    const state = cartReducer(
        [
            { product: gitarre, quantity: 1 },
            { product: kabel, quantity: 2 },
        ],
        { type: "remove", productId: "gitarre" },
    );

    assertEquals(state, [{ product: kabel, quantity: 2 }]);
});

Deno.test("cartTotals rabattiert ab drei Artikeln", () => {
    const totals = cartTotals([
        { product: gitarre, quantity: 2 },
        { product: kabel, quantity: 1 },
    ]);

    assertEquals(totals.itemCount, 3);
    assertEquals(totals.subtotal, 210);
    assertEquals(totals.discount, 21);
    assertEquals(totals.total, 189);
    assertEquals(totals.nextDiscountIn, 0);
});

Deno.test("cartTotals ohne Rabatt unter drei Artikeln", () => {
    const totals = cartTotals([
        { product: gitarre, quantity: 1 },
        { product: kabel, quantity: 1 },
    ]);

    assertEquals(totals.discount, 0);
    assertEquals(totals.total, 110);
    assertEquals(totals.nextDiscountIn, 1);
});

Deno.test("toOrderItems wiederholt Produkt-IDs passend zur Menge", () => {
    const items = toOrderItems([
        { product: gitarre, quantity: 2 },
        { product: kabel, quantity: 1 },
    ]);

    assertEquals(items, ["gitarre", "gitarre", "kabel"]);
});
