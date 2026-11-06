import { useCart } from "../state/CartContext.tsx";
import { ThemeToggle } from "./ThemeToggle.tsx";

interface HeaderProps {
    onOpenCart: () => void;
}

export function Header({ onOpenCart }: HeaderProps) {
    const { totals } = useCart();

    return (
        <header className="site-header">
            <div className="container header-inner">
                <a className="brand" href="/" aria-label="Klangraum Startseite">
                    <span className="brand-mark" aria-hidden="true">K</span>
                    <span className="brand-text">Klangraum</span>
                </a>

                <div className="header-actions">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="cart-button"
                        onClick={onOpenCart}
                    >
                        <span aria-hidden="true">🛒</span>
                        <span className="cart-label">Warenkorb</span>
                        {totals.itemCount > 0 && (
                            <span className="cart-badge">
                                {totals.itemCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
