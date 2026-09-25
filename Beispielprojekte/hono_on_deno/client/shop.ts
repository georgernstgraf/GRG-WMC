// 1) APPLICATION STATE
interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    emoji: string;
}

interface OrderItem {
    productId: string;
    name: string;
    price: number;
}

interface Order {
    id: string;
    items: OrderItem[];
    subtotal: number;
    discount: number;
    total: number;
    createdAt: string;
}

interface ShopState {
    products: Product[];
    cart: Product[];
    orders: Order[];
}

const state: ShopState = {
    products: [],
    cart: [],
    orders: [],
};

// 2) STATE ACCESSORS/MUTATORS
function setProductsInState(products: Product[]): void {
    state.products = products;
}

function setOrdersInState(orders: Order[]): void {
    state.orders = orders;
}

function addProductToCart(product: Product): void {
    state.cart.push(product);
}

function clearCartInState(): void {
    state.cart = [];
}

function getCartSubtotal(): number {
    return state.cart.reduce((sum, product) => sum + product.price, 0);
}

function getCartDiscount(): number {
    if (state.cart.length >= 3) {
        return getCartSubtotal() * 0.1;
    }

    return 0;
}

function getCartTotal(): number {
    return getCartSubtotal() - getCartDiscount();
}

// 3) API CLIENT
async function loadProducts(): Promise<Product[]> {
    const response = await fetch("/api/products");

    if (!response.ok) {
        throw new Error("Produkte konnten nicht geladen werden");
    }

    return await response.json() as Product[];
}

async function loadOrders(): Promise<Order[]> {
    const response = await fetch("/api/orders");

    if (!response.ok) {
        throw new Error("Bestellungen konnten nicht geladen werden");
    }

    return await response.json() as Order[];
}

async function submitOrder(productIds: string[]): Promise<Order> {
    const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: productIds }),
    });

    if (!response.ok) {
        const problem = await response.json().catch(() => null) as
            | { error?: string }
            | null;
        throw new Error(problem?.error ?? "Bestellung fehlgeschlagen");
    }

    return await response.json() as Order;
}

async function deleteOrder(orderId: string): Promise<void> {
    const response = await fetch(`/api/orders/${orderId}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Storno fehlgeschlagen");
    }
}

// 4) DOM NODE REFERENCES
function getRequiredElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);

    if (!(element instanceof HTMLElement)) {
        throw new Error("Missing HTML element: " + id);
    }

    return element as T;
}

const instrumentSummary = getRequiredElement<HTMLElement>("instrument-summary");
const dealText = getRequiredElement<HTMLElement>("deal-text");
const shopGrid = getRequiredElement<HTMLElement>("shop-grid");
const cartList = getRequiredElement<HTMLElement>("cart-list");
const cartSubtotal = getRequiredElement<HTMLElement>("cart-subtotal");
const cartDiscount = getRequiredElement<HTMLElement>("cart-discount");
const cartTotal = getRequiredElement<HTMLElement>("cart-total");
const buyBtn = getRequiredElement<HTMLButtonElement>("buy-btn");
const cancelBtn = getRequiredElement<HTMLButtonElement>("cancel-btn");
const salesLog = getRequiredElement<HTMLElement>("sales-log");
const salesSummary = getRequiredElement<HTMLElement>("sales-summary");
const statusText = getRequiredElement<HTMLElement>("status-text");

// 5) DOM NODE CREATION FUNCTIONS
function createProductElement(product: Product): HTMLElement {
    const article = document.createElement("article");
    article.classList.add("shop-card");

    const emoji = document.createElement("p");
    emoji.classList.add("shop-emoji");
    emoji.textContent = product.emoji;

    const title = document.createElement("h3");
    title.textContent = product.name;

    const category = document.createElement("p");
    category.classList.add("shop-category");
    category.textContent = product.category;

    const price = document.createElement("p");
    price.classList.add("shop-price");
    price.textContent = product.price.toFixed(2) + " Euro";

    const hint = document.createElement("p");
    hint.classList.add("tap-hint");
    hint.textContent = "Tippen oder klicken zum Hinzufuegen";

    article.addEventListener("click", () => onProductCardPressed(product));
    article.append(emoji, title, category, price, hint);

    return article;
}

function createCartElement(product: Product): HTMLLIElement {
    const listItem = document.createElement("li");
    listItem.textContent = product.name + " - " +
        product.price.toFixed(2) + " Euro";

    return listItem;
}

function createSaleElement(order: Order): HTMLLIElement {
    const listItem = document.createElement("li");

    const title = document.createElement("p");
    title.classList.add("sale-title");
    title.textContent = new Date(order.createdAt).toLocaleString("de-AT") +
        " - " + order.total.toFixed(2) + " Euro";

    const items = document.createElement("p");
    items.textContent = order.items.map((item) => item.name).join(", ");

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.classList.add("storno-btn");
    cancelButton.textContent = "Storno";
    cancelButton.addEventListener("click", () => {
        void onOrderCancelPressed(order.id);
    });

    listItem.append(title, items, cancelButton);

    return listItem;
}

// 6) RENDER FUNCTIONS
function render(): void {
    shopGrid.innerHTML = "";
    cartList.innerHTML = "";
    salesLog.innerHTML = "";

    for (const product of state.products) {
        shopGrid.append(createProductElement(product));
    }

    if (state.cart.length === 0) {
        const emptyCartItem = document.createElement("li");
        emptyCartItem.classList.add("empty-text");
        emptyCartItem.textContent = "Noch kein Artikel im Warenkorb";
        cartList.append(emptyCartItem);
    } else {
        for (const product of state.cart) {
            cartList.append(createCartElement(product));
        }
    }

    if (state.orders.length === 0) {
        const emptySaleItem = document.createElement("li");
        emptySaleItem.classList.add("empty-text");
        emptySaleItem.textContent = "Noch keine Verkaeufe vorhanden";
        salesLog.append(emptySaleItem);
    } else {
        for (const order of state.orders) {
            salesLog.append(createSaleElement(order));
        }
    }

    instrumentSummary.textContent = "Artikel im Shop: " + state.products.length;
    dealText.textContent =
        "Fancy Feature: Ab 3 Artikeln gibt es automatisch 10 % Bundle-Rabatt.";
    cartSubtotal.textContent = "Zwischensumme: " +
        getCartSubtotal().toFixed(2) + " Euro";
    cartDiscount.textContent = "Rabatt: -" + getCartDiscount().toFixed(2) +
        " Euro";
    cartTotal.textContent = "Gesamt: " + getCartTotal().toFixed(2) + " Euro";
    salesSummary.textContent = "Bestellungen: " + state.orders.length;
}

// 7) EVENT HANDLERS
function onProductCardPressed(product: Product): void {
    addProductToCart(product);
    render();
}

async function onBuyBtnPressed(): Promise<void> {
    if (state.cart.length === 0) {
        statusText.textContent = "Der Warenkorb ist leer.";
        return;
    }

    const productIds = state.cart.map((product) => product.id);

    try {
        await submitOrder(productIds);
        clearCartInState();
        setOrdersInState(await loadOrders());
        statusText.textContent = "Bestellung abgeschlossen.";
        render();
    } catch (err) {
        statusText.textContent = err instanceof Error
            ? err.message
            : "Bestellung fehlgeschlagen";
    }
}

function onCancelBtnPressed(): void {
    clearCartInState();
    statusText.textContent = "Warenkorb geleert.";
    render();
}

async function onOrderCancelPressed(orderId: string): Promise<void> {
    try {
        await deleteOrder(orderId);
        setOrdersInState(await loadOrders());
        statusText.textContent = "Bestellung storniert.";
        render();
    } catch (err) {
        statusText.textContent = err instanceof Error
            ? err.message
            : "Storno fehlgeschlagen";
    }
}

// 8) INIT BINDINGS
buyBtn.addEventListener("click", () => {
    void onBuyBtnPressed();
});
cancelBtn.addEventListener("click", onCancelBtnPressed);

// 9) INITIAL RENDERING
async function init(): Promise<void> {
    try {
        setProductsInState(await loadProducts());
        setOrdersInState(await loadOrders());
        statusText.textContent = "Daten vom Hono-API geladen.";
    } catch (err) {
        statusText.textContent = err instanceof Error
            ? err.message
            : "Laden fehlgeschlagen";
    }

    render();
}

void init();
