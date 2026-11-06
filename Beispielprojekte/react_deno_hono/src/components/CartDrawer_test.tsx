import { assertEquals, assertExists, assertStringIncludes } from "@std/assert";
import {
    cleanup,
    fireEvent,
    render,
    screen,
    within,
} from "@testing-library/react";
import { type ReactNode, useEffect, useRef } from "react";
import type { Product } from "../api/types.ts";
import { CartProvider, useCart } from "../state/CartContext.tsx";
import { jsonResponse, stubFetch } from "../test/fetch.ts";
import { CartDrawer } from "./CartDrawer.tsx";

const gitarre: Product = {
    id: "gitarre",
    name: "Gitarre",
    price: 100,
    category: "Instrument",
    emoji: "🎸",
};

function SeededCart(
    { product, children }: { product: Product; children: ReactNode },
) {
    const { add } = useCart();
    const seeded = useRef(false);

    useEffect(() => {
        if (seeded.current) {
            return;
        }

        seeded.current = true;
        add(product);
    }, [add, product]);

    return <>{children}</>;
}

function renderDrawer() {
    return render(
        <CartProvider>
            <SeededCart product={gitarre}>
                <CartDrawer open onClose={() => {}} />
            </SeededCart>
        </CartProvider>,
    );
}

Deno.test.afterEach(cleanup);

Deno.test("Warenkorb zeigt Menge und Rabatt ab drei Artikeln", () => {
    renderDrawer();
    const group = screen.getByRole("toolbar", { name: "Menge für Gitarre" });

    fireEvent.click(
        within(group).getByRole("button", { name: "Gitarre erhöhen" }),
    );
    fireEvent.click(
        within(group).getByRole("button", { name: "Gitarre erhöhen" }),
    );

    assertEquals(within(group).getByText("3").textContent, "3");
    assertExists(screen.getByText("10 % Rabatt aktiv – gut gemacht!"));
});

Deno.test("Checkout sendet die Bestellung und zeigt die Bestätigung", async () => {
    let body = "";
    const restore = stubFetch((_input, init) => {
        body = String(init?.body ?? "");
        return jsonResponse({
            id: "order-12345678",
            items: [],
            subtotal: 100,
            discount: 0,
            total: 100,
            createdAt: "2026-11-06T00:00:00.000Z",
        }, 201);
    });

    try {
        renderDrawer();
        fireEvent.click(
            screen.getByRole("button", { name: "Jetzt bestellen" }),
        );

        await screen.findByRole("heading", { name: "Bestellung bestätigt" });
        assertEquals(JSON.parse(body), { items: ["gitarre"] });
    } finally {
        restore();
    }
});

Deno.test("Checkout zeigt API-Fehler als Alert", async () => {
    const restore = stubFetch(() =>
        jsonResponse({ error: "Lagerfehler" }, 500)
    );

    try {
        renderDrawer();
        fireEvent.click(
            screen.getByRole("button", { name: "Jetzt bestellen" }),
        );

        const alert = await screen.findByRole("alert");
        assertStringIncludes(alert.textContent ?? "", "Lagerfehler");
    } finally {
        restore();
    }
});
