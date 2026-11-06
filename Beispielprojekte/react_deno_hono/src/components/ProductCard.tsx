import type { Product } from "../api/types.ts";
import { formatCategory, formatPrice } from "../lib/format.ts";

interface ProductCardProps {
    product: Product;
    onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="product-art" aria-hidden="true">
                {product.emoji}
            </div>
            <p className="product-category">
                {formatCategory(product.category)}
            </p>
            <h3>{product.name}</h3>
            <p className="product-price">{formatPrice(product.price)}</p>
            <button type="button" onClick={() => onAdd(product)}>
                In den Warenkorb
            </button>
        </article>
    );
}
