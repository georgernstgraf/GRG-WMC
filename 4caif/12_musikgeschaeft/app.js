// 1) APPLICATION STATE
class Artikel {
    constructor(name, price, category, emoji) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.emoji = emoji;
    }
}

class Bestellung {
    constructor(items, subtotal, discount, total, createdAtText) {
        this.items = items;
        this.subtotal = subtotal;
        this.discount = discount;
        this.total = total;
        this.createdAtText = createdAtText;
    }
}

const SALES_STORAGE_KEY = 'musikgeschaeft-sales-log';

function loadSalesFromStorage() {
    const salesText = localStorage.getItem(SALES_STORAGE_KEY);

    if (salesText === null) {
        return [];
    }

    const rawSales = JSON.parse(salesText);

    return rawSales.map(function (saleObject) {
        return new Bestellung(
            saleObject.items,
            saleObject.subtotal,
            saleObject.discount,
            saleObject.total,
            saleObject.createdAtText
        );
    });
}

const state = {
    products: [
        new Artikel('Vintage E-Gitarre', 749, 'Instrument', '🎸'),
        new Artikel('Stage Keyboard', 1190, 'Instrument', '🎹'),
        new Artikel('Studio Mikrofon', 229, 'Zubehör', '🎤'),
        new Artikel('Analog Synth', 980, 'Instrument', '🎛️'),
        new Artikel('Drum Pad', 399, 'Instrument', '🥁'),
        new Artikel('Bass Combo', 540, 'Zubehör', '🔊'),
        new Artikel('Capo Deluxe', 24, 'Zubehör', '🪕'),
        new Artikel('Pedal Echo', 149, 'Zubehör', '🦶'),
        new Artikel('Studio Kopfhörer', 179, 'Zubehör', '🎧')
    ],
    cart: [],
    salesLog: loadSalesFromStorage()
};

// 2) STATE ACCESSORS/MUTATORS
function saveSalesToStorage() {
    localStorage.setItem(SALES_STORAGE_KEY, JSON.stringify(state.salesLog));
}

function addProductToCart(productObject) {
    state.cart.push(productObject);
}

function clearCartInState() {
    state.cart = [];
}

function getCartSubtotal() {
    let subtotal = 0;

    for (const productObject of state.cart) {
        subtotal = subtotal + productObject.price;
    }

    return subtotal;
}

function getCartDiscount() {
    if (state.cart.length >= 3) {
        return getCartSubtotal() * 0.1;
    }

    return 0;
}

function getCartTotal() {
    return getCartSubtotal() - getCartDiscount();
}

function buyCartInState() {
    if (state.cart.length === 0) {
        return;
    }

    const itemNames = state.cart.map(function (productObject) {
        return productObject.name;
    });

    const saleObject = new Bestellung(
        itemNames,
        getCartSubtotal(),
        getCartDiscount(),
        getCartTotal(),
        new Date().toLocaleString('de-AT')
    );

    state.salesLog.unshift(saleObject);
    saveSalesToStorage();
    clearCartInState();
}

function getTotalRevenue() {
    let totalRevenue = 0;

    for (const saleObject of state.salesLog) {
        totalRevenue = totalRevenue + saleObject.total;
    }

    return totalRevenue;
}

// 3) DOM NODE REFERENCES
const instrumentSummary = document.getElementById('instrument-summary');
const dealText = document.getElementById('deal-text');
const shopGrid = document.getElementById('shop-grid');
const cartList = document.getElementById('cart-list');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDiscount = document.getElementById('cart-discount');
const cartTotal = document.getElementById('cart-total');
const buyBtn = document.getElementById('buy-btn');
const cancelBtn = document.getElementById('cancel-btn');
const salesLog = document.getElementById('sales-log');
const salesSummary = document.getElementById('sales-summary');

// 4) DOM NODE CREATION FUNCTIONS
function createProductElement(productObject) {
    const article = document.createElement('article');
    article.classList.add('shop-card');

    const emoji = document.createElement('p');
    emoji.classList.add('shop-emoji');
    emoji.textContent = productObject.emoji;

    const title = document.createElement('h3');
    title.textContent = productObject.name;

    const category = document.createElement('p');
    category.classList.add('shop-category');
    category.textContent = productObject.category;

    const price = document.createElement('p');
    price.classList.add('shop-price');
    price.textContent = productObject.price.toFixed(2) + ' Euro';

    const hint = document.createElement('p');
    hint.classList.add('tap-hint');
    hint.textContent = 'Tippen oder klicken zum Hinzufügen';

    article.addEventListener('click', function () {
        onProductCardPressed(productObject);
    });

    article.append(emoji, title, category, price, hint);

    return article;
}

function createCartElement(productObject) {
    const listItem = document.createElement('li');
    listItem.textContent = productObject.name + ' - ' + productObject.price.toFixed(2) + ' Euro';

    return listItem;
}

function createSaleElement(saleObject) {
    const listItem = document.createElement('li');

    const title = document.createElement('p');
    title.classList.add('sale-title');
    title.textContent = saleObject.createdAtText + ' - ' + saleObject.total.toFixed(2) + ' Euro';

    const items = document.createElement('p');
    items.textContent = saleObject.items.join(', ');

    listItem.append(title, items);

    return listItem;
}

// 5) RENDER FUNCTIONS
function render() {
    shopGrid.innerHTML = '';
    cartList.innerHTML = '';
    salesLog.innerHTML = '';

    for (const productObject of state.products) {
        shopGrid.append(createProductElement(productObject));
    }

    if (state.cart.length === 0) {
        const emptyCartItem = document.createElement('li');
        emptyCartItem.classList.add('empty-text');
        emptyCartItem.textContent = 'Noch kein Artikel im Warenkorb';
        cartList.append(emptyCartItem);
    } else {
        for (const productObject of state.cart) {
            cartList.append(createCartElement(productObject));
        }
    }

    if (state.salesLog.length === 0) {
        const emptySaleItem = document.createElement('li');
        emptySaleItem.classList.add('empty-text');
        emptySaleItem.textContent = 'Noch keine Verkäufe vorhanden';
        salesLog.append(emptySaleItem);
    } else {
        for (const saleObject of state.salesLog) {
            salesLog.append(createSaleElement(saleObject));
        }
    }

    instrumentSummary.textContent = 'Artikel im Shop: ' + state.products.length;
    dealText.textContent = 'Fancy Feature: Ab 3 Artikeln gibt es automatisch 10 % Bundle-Rabatt.';
    cartSubtotal.textContent = 'Zwischensumme: ' + getCartSubtotal().toFixed(2) + ' Euro';
    cartDiscount.textContent = 'Rabatt: -' + getCartDiscount().toFixed(2) + ' Euro';
    cartTotal.textContent = 'Gesamt: ' + getCartTotal().toFixed(2) + ' Euro';
    salesSummary.textContent = 'Eingenommen gesamt: ' + getTotalRevenue().toFixed(2) + ' Euro';
}

// 6) EVENT HANDLERS
function onProductCardPressed(productObject) {
    addProductToCart(productObject);
    render();
}

function onBuyBtnPressed() {
    buyCartInState();
    render();
}

function onCancelBtnPressed() {
    clearCartInState();
    render();
}

// 7) INIT BINDINGS
buyBtn.addEventListener('click', onBuyBtnPressed);
cancelBtn.addEventListener('click', onCancelBtnPressed);

// 8) INITIAL RENDERING
render();
