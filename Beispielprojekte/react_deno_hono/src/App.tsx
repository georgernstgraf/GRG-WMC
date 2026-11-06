import { useState } from "react";
import type { Product } from "./api/types.ts";
import { CartDrawer } from "./components/CartDrawer.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";
import { Header } from "./components/Header.tsx";
import { useTransientMessage } from "./hooks/useTransientMessage.ts";
import { CatalogPage } from "./pages/CatalogPage.tsx";
import { CartProvider, useCart } from "./state/CartContext.tsx";

export function App() {
    return (
        <ErrorBoundary>
            <CartProvider>
                <AppShell />
            </CartProvider>
        </ErrorBoundary>
    );
}

function AppShell() {
    const { add } = useCart();
    const [cartOpen, setCartOpen] = useState(false);
    const [toast, setToast] = useTransientMessage();

    function handleAdd(product: Product) {
        add(product);
        setToast(`${product.name} im Warenkorb`);
    }

    return (
        <>
            <Header onOpenCart={() => setCartOpen(true)} />
            <CatalogPage onAdd={handleAdd} />
            <footer className="site-footer">
                <div className="container">
                    <span>Klangraum · WMC-Referenzprojekt</span>
                    <span>React 19 · Vite 8 auf Deno · Hono-API</span>
                </div>
            </footer>
            <CartDrawer
                open={cartOpen}
                onClose={() => setCartOpen(false)}
            />
            {toast !== null && (
                <div className="toast" role="status" aria-live="polite">
                    {toast}
                </div>
            )}
        </>
    );
}
