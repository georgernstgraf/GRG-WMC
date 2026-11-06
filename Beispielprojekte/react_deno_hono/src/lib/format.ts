export function formatPrice(value: number): string {
    return new Intl.NumberFormat("de-AT", {
        style: "currency",
        currency: "EUR",
    }).format(value);
}

export function formatCategory(category: string): string {
    return category === "Zubehoer" ? "Zubehör" : category;
}
