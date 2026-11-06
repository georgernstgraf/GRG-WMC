export function ProductGridSkeleton() {
    return (
        <div className="product-grid" aria-hidden="true">
            {Array.from(
                { length: 6 },
                (_, index) => (
                    <article className="product-card skeleton" key={index}>
                        <div className="skeleton-art" />
                        <div className="skeleton-line" />
                        <div className="skeleton-line short" />
                        <div className="skeleton-button" />
                    </article>
                ),
            )}
        </div>
    );
}
