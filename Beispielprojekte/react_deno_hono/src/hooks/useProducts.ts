import { useEffect, useState } from "react";
import { listProducts } from "../api/client.ts";
import type { Product } from "../api/types.ts";

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export function useProducts(category?: string): ProductsState {
    const [state, setState] = useState<ProductsState>({
        products: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        const controller = new AbortController();
        let aktiv = true;

        setState({ products: [], loading: true, error: null });

        listProducts(category, controller.signal)
            .then((products) => {
                if (aktiv) {
                    setState({ products, loading: false, error: null });
                }
            })
            .catch((err: unknown) => {
                if (!aktiv || controller.signal.aborted) {
                    return;
                }

                const message = err instanceof Error
                    ? err.message
                    : "Unbekannter Fehler";
                setState({ products: [], loading: false, error: message });
            });

        return () => {
            aktiv = false;
            controller.abort();
        };
    }, [category]);

    return state;
}
