import { useEffect, useRef, useState } from "react";
import { createOrder } from "../api/client.ts";
import type { Order } from "../api/types.ts";
import { formatPrice } from "../lib/format.ts";
import { useCart } from "../state/CartContext.tsx";
import { toOrderItems } from "../state/cartReducer.ts";

interface CartDrawerProps {
    open: boolean;
    onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { lines, totals, add, decrement, remove, clear } = useCart();
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [order, setOrder] = useState<Order | null>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (dialog === null) {
            return;
        }

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    useEffect(() => {
        if (open) {
            setError(null);
            setOrder(null);
        }
    }, [open]);

    async function handleCheckout() {
        if (lines.length === 0) {
            return;
        }

        setSubmitting(true);
        setError(null);

        try {
            const created = await createOrder(toOrderItems(lines));
            setOrder(created);
            clear();
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Bestellung fehlgeschlagen",
            );
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <dialog
            ref={dialogRef}
            className="cart-dialog"
            aria-labelledby="cart-title"
            onClose={onClose}
            onClick={(event) => {
                if (event.target === dialogRef.current) {
                    onClose();
                }
            }}
        >
            <article>
                <header className="cart-header">
                    <h2 id="cart-title">
                        {order === null ? "Warenkorb" : "Bestellung bestätigt"}
                    </h2>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                        aria-label="Warenkorb schließen"
                    >
                        ✕
                    </button>
                </header>

                {order !== null && (
                    <div className="order-confirmation">
                        <p className="order-check" aria-hidden="true">🎉</p>
                        <p>Danke! Deine Bestellung ist eingegangen.</p>
                        <dl className="totals">
                            <div>
                                <dt>Zwischensumme</dt>
                                <dd>{formatPrice(order.subtotal)}</dd>
                            </div>
                            {order.discount > 0 && (
                                <div>
                                    <dt>Rabatt</dt>
                                    <dd>−{formatPrice(order.discount)}</dd>
                                </div>
                            )}
                            <div className="total">
                                <dt>Gesamt</dt>
                                <dd>{formatPrice(order.total)}</dd>
                            </div>
                        </dl>
                        <p className="order-id">
                            Bestellnummer: <code>{order.id.slice(0, 8)}</code>
                        </p>
                        <button type="button" onClick={onClose}>
                            Weiter einkaufen
                        </button>
                    </div>
                )}

                {order === null && lines.length === 0 && (
                    <div className="cart-empty">
                        <p className="cart-empty-icon" aria-hidden="true">🎧</p>
                        <p>Dein Warenkorb ist noch leer.</p>
                        <button type="button" onClick={onClose}>
                            Katalog ansehen
                        </button>
                    </div>
                )}

                {order === null && lines.length > 0 && (
                    <>
                        <ul className="cart-lines">
                            {lines.map((line) => (
                                <li
                                    className="cart-line"
                                    key={line.product.id}
                                >
                                    <span
                                        className="cart-line-art"
                                        aria-hidden="true"
                                    >
                                        {line.product.emoji}
                                    </span>
                                    <div className="cart-line-info">
                                        <strong>{line.product.name}</strong>
                                        <span>
                                            {formatPrice(line.product.price)}
                                        </span>
                                    </div>
                                    <div
                                        className="quantity"
                                        role="toolbar"
                                        aria-label={`Menge für ${line.product.name}`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                decrement(line.product.id)}
                                            aria-label={`${line.product.name} verringern`}
                                        >
                                            −
                                        </button>
                                        <span aria-live="polite">
                                            {line.quantity}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => add(line.product)}
                                            aria-label={`${line.product.name} erhöhen`}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-button"
                                        onClick={() => remove(line.product.id)}
                                        aria-label={`${line.product.name} entfernen`}
                                    >
                                        Entfernen
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="cart-summary">
                            {totals.nextDiscountIn > 0
                                ? (
                                    <p className="discount-hint">
                                        Noch {totals.nextDiscountIn}{" "}
                                        Artikel bis 10 % Rabatt.
                                    </p>
                                )
                                : (
                                    <p className="discount-hint active">
                                        10 % Rabatt aktiv – gut gemacht!
                                    </p>
                                )}

                            <dl className="totals">
                                <div>
                                    <dt>Zwischensumme</dt>
                                    <dd>{formatPrice(totals.subtotal)}</dd>
                                </div>
                                {totals.discount > 0 && (
                                    <div>
                                        <dt>Rabatt (10 %)</dt>
                                        <dd>−{formatPrice(totals.discount)}</dd>
                                    </div>
                                )}
                                <div className="total">
                                    <dt>Gesamt</dt>
                                    <dd>{formatPrice(totals.total)}</dd>
                                </div>
                            </dl>

                            {error !== null && (
                                <p className="form-error" role="alert">
                                    {error}
                                    <br />
                                    <small>
                                        Läuft die API?{" "}
                                        <code>deno task api</code>
                                    </small>
                                </p>
                            )}

                            <button
                                type="button"
                                className="checkout-button"
                                onClick={handleCheckout}
                                disabled={submitting}
                                aria-busy={submitting}
                            >
                                {submitting
                                    ? "Wird bestellt …"
                                    : "Jetzt bestellen"}
                            </button>
                        </div>
                    </>
                )}
            </article>
        </dialog>
    );
}
