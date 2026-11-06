import {
    createContext,
    type ReactNode,
    useContext,
    useMemo,
    useReducer,
} from "react";
import type { Product } from "../api/types.ts";
import {
    type CartLine,
    cartReducer,
    type CartTotals,
    cartTotals,
} from "./cartReducer.ts";

interface CartContextValue {
    lines: CartLine[];
    totals: CartTotals;
    add: (product: Product) => void;
    decrement: (productId: string) => void;
    remove: (productId: string) => void;
    clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [lines, dispatch] = useReducer(cartReducer, []);
    const totals = useMemo(() => cartTotals(lines), [lines]);

    const value = useMemo<CartContextValue>(
        () => ({
            lines,
            totals,
            add: (product) => dispatch({ type: "add", product }),
            decrement: (productId) =>
                dispatch({ type: "decrement", productId }),
            remove: (productId) => dispatch({ type: "remove", productId }),
            clear: () => dispatch({ type: "clear" }),
        }),
        [lines, totals],
    );

    return <CartContext.Provider value={value}>{children}
    </CartContext.Provider>;
}

export function useCart(): CartContextValue {
    const value = useContext(CartContext);

    if (value === null) {
        throw new Error(
            "useCart muss innerhalb von <CartProvider> verwendet werden",
        );
    }

    return value;
}
