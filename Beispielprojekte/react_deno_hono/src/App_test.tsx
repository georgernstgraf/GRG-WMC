import { assertExists } from "@std/assert";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { Product } from "./api/types.ts";
import { App } from "./App.tsx";
import { jsonResponse, stubFetch } from "./test/fetch.ts";

const gitarre: Product = {
    id: "gitarre",
    name: "Gitarre",
    price: 100,
    category: "Instrument",
    emoji: "🎸",
};

Deno.test.afterEach(cleanup);

Deno.test("App legt ein Produkt in den Warenkorb", async () => {
    const restore = stubFetch(() => jsonResponse([gitarre]));

    try {
        render(<App />);
        await screen.findByRole("heading", { name: "Gitarre" });

        fireEvent.click(
            screen.getByRole("button", { name: "In den Warenkorb" }),
        );
        fireEvent.click(screen.getByRole("button", { name: /^Warenkorb/ }));

        const group = await screen.findByRole("toolbar", {
            name: "Menge für Gitarre",
        });
        assertExists(group);
    } finally {
        restore();
    }
});
