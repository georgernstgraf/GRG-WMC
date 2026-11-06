import { useMemo, useState } from "react";
import type { Product } from "../api/types.ts";
import { ProductCard } from "../components/ProductCard.tsx";
import { ProductGridSkeleton } from "../components/ProductGridSkeleton.tsx";
import { useProducts } from "../hooks/useProducts.ts";

const CATEGORIES = [
    { label: "Alle", value: undefined },
    { label: "Instrumente", value: "Instrument" },
    { label: "Zubehör", value: "Zubehoer" },
] as const;

interface CatalogPageProps {
    onAdd: (product: Product) => void;
}

export function CatalogPage({ onAdd }: CatalogPageProps) {
    const [kategorie, setKategorie] = useState<string | undefined>(undefined);
    const { products, loading, error } = useProducts(kategorie);
    const sortiert = useMemo(
        () => [...products].sort((a, b) => a.name.localeCompare(b.name, "de")),
        [products],
    );

    return (
        <main className="container page">
            <section className="hero">
                <p className="eyebrow">Deno · React · Hono</p>
                <h1>Bühne frei für dein Setup.</h1>
                <p className="hero-copy">
                    Handverlesene Instrumente und Studio-Equipment. Ab drei
                    Artikeln gibt es 10 % Rabatt – direkt im Warenkorb sichtbar.
                </p>
                <div className="hero-facts">
                    <span>Live aus der Hono-API</span>
                    <span>10 % ab 3 Artikeln</span>
                    <span>React 19 + Deno</span>
                </div>
            </section>

            <section aria-labelledby="catalog-title">
                <div className="catalog-head">
                    <div>
                        <h2 id="catalog-title">Katalog</h2>
                        <p className="muted">
                            {loading
                                ? "Wird geladen …"
                                : `${sortiert.length} Artikel`}
                        </p>
                    </div>

                    <div
                        className="category-filter"
                        role="toolbar"
                        aria-label="Kategorie wählen"
                    >
                        {CATEGORIES.map((entry) => (
                            <button
                                key={entry.label}
                                type="button"
                                className={entry.value === kategorie
                                    ? "active"
                                    : ""}
                                aria-pressed={entry.value === kategorie}
                                onClick={() => setKategorie(entry.value)}
                            >
                                {entry.label}
                            </button>
                        ))}
                    </div>
                </div>

                {error !== null && (
                    <article className="error-card">
                        <h3>Die API antwortet nicht</h3>
                        <p>{error}</p>
                        <p>
                            Starte die Referenz-API mit{" "}
                            <code>deno task api</code> und lade die Seite neu.
                        </p>
                    </article>
                )}

                {loading && <ProductGridSkeleton />}

                {!loading && error === null && sortiert.length === 0 && (
                    <p className="empty-state">
                        Keine Artikel in dieser Kategorie.
                    </p>
                )}

                {!loading && error === null && sortiert.length > 0 && (
                    <div className="product-grid">
                        {sortiert.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAdd={onAdd}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
