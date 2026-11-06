import { assertEquals, assertExists } from "@std/assert";
import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import type { Product } from "../api/types.ts";
import { jsonResponse, stubFetch } from "../test/fetch.ts";
import { CatalogPage } from "./CatalogPage.tsx";

const products: Product[] = [
    {
        id: "gitarre",
        name: "Gitarre",
        price: 100,
        category: "Instrument",
        emoji: "🎸",
    },
    {
        id: "kabel",
        name: "Kabel",
        price: 10,
        category: "Zubehoer",
        emoji: "🔌",
    },
];

Deno.test.afterEach(cleanup);

Deno.test("Katalog rendert Produkte und meldet Klicks", async () => {
    const restore = stubFetch(() => jsonResponse(products));

    try {
        const added: Product[] = [];
        render(<CatalogPage onAdd={(product) => added.push(product)} />);

        await screen.findByRole("heading", { name: "Gitarre" });
        assertEquals(
            screen.getAllByRole("heading", { level: 3 }).length,
            2,
        );

        const buttons = screen.getAllByRole("button", {
            name: "In den Warenkorb",
        });
        const first = buttons[0];
        assertExists(first);
        fireEvent.click(first);

        assertEquals(added[0]?.id, "gitarre");
    } finally {
        restore();
    }
});

Deno.test("Kategorie-Filter fragt die API mit Kategorie ab", async () => {
    const urls: string[] = [];
    const restore = stubFetch((input) => {
        urls.push(String(input));
        return jsonResponse(products);
    });

    try {
        render(<CatalogPage onAdd={() => {}} />);
        await screen.findByRole("heading", { name: "Gitarre" });

        fireEvent.click(screen.getByRole("button", { name: "Zubehör" }));

        await waitFor(() => {
            assertEquals(urls.at(-1), "/api/products?category=Zubehoer");
        });
    } finally {
        restore();
    }
});

Deno.test("Katalog zeigt einen API-Fehler an", async () => {
    const restore = stubFetch(() =>
        jsonResponse({ error: "Serverfehler" }, 500)
    );

    try {
        render(<CatalogPage onAdd={() => {}} />);
        await screen.findByRole("heading", {
            name: "Die API antwortet nicht",
        });
        assertExists(screen.getByText("Serverfehler"));
    } finally {
        restore();
    }
});
