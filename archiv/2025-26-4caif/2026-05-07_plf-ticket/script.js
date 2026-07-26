// ============================================================
// NAVBAR TOGGLE (vorgegeben — nicht Teil der Prüfung)
// ============================================================
const navbarTabs = document.querySelectorAll('.navbar-tab');
const views = document.querySelectorAll('.view');

for (const tab of navbarTabs) {
    tab.addEventListener('click', function () {
        for (const t of navbarTabs) {
            t.classList.remove('active');
        }
        tab.classList.add('active');

        const targetId = tab.getAttribute('data-view');
        for (const view of views) {
            view.classList.remove('active');
        }
        document.getElementById(targetId).classList.add('active');
    });
}

// ============================================================
// KLASSEN (vorgegeben)
// ============================================================

class Ziel {
    #name;
    #preis;
    #typ;
    #emoji;

    constructor(name, preis, typ, emoji) {
        this.#name = name;
        this.#preis = preis;
        this.#typ = typ;
        this.#emoji = emoji;
    }

    get name() { return this.#name; }
    get preis() { return this.#preis; }
    get typ() { return this.#typ; }
    get emoji() { return this.#emoji; }
}

class Ticket {
    #ziel;
    #anzahl;
    #summe;
    #gegeben;

    constructor(ziel, anzahl, gegeben) {
        this.#ziel = ziel;
        this.#anzahl = anzahl;
        this.#summe = ziel.preis * anzahl;
        this.#gegeben = gegeben;
    }

    get ziel() { return this.#ziel; }
    get anzahl() { return this.#anzahl; }
    get summe() { return this.#summe; }
    get gegeben() { return this.#gegeben; }
    get restgeld() { return this.#gegeben - this.#summe; }
}

// ============================================================
// 1. APPLICATION STATE (vorgegeben)
//    Holds the state of the application — single source of truth
// ============================================================

const state = {
    ziele: [
        new Ziel('Bregenz', 85, 'Intercity', '🏔️'),
        new Ziel('Eisenstadt', 12, 'Regional', '🏰'),
        new Ziel('Graz', 35, 'Regional', '🎓'),
        new Ziel('Innsbruck', 75, 'Intercity', '⛰️'),
        new Ziel('Klagenfurt', 55, 'Intercity', '🐉'),
        new Ziel('Linz', 38, 'Regional', '🏭'),
        new Ziel('Salzburg', 65, 'Intercity', '🎵'),
        new Ziel('St. Pölten', 14, 'Regional', '🏛️')
    ],
    eingeworfen: 0,
    ausgewaehltesZiel: null,
    anzahlPersonen: 1,
    ticketLog: []
};

// ============================================================
// 2. STATE ACCESSORS / MUTATORS
//    Functions that read or change the state
// ============================================================

// AUFGABE 2: getTotalEinnahmen(tickets) — 10 Punkte
// Berechne die Gesamtsumme aller Ticket-Summen im übergebenen Array.
function getTotalEinnahmen(tickets) {
    // TODO: Dein Code hier
}

// AUFGABE 3: getByTyp(ziele, typ) — 15 Punkte
// Gib ein neues Array zurück, das nur die Ziele des
// angegebenen Typs enthält. Nutze .filter().
function getByTyp(ziele, typ) {
    // TODO: Dein Code hier
}

// AUFGABE 4a: sortByPreisAsc(ziele) — 8 Punkte
// Sortiere die Ziele aufsteigend nach Preis.
// Nutze .sort() mit einem Comparator.
function sortByPreisAsc(ziele) {
    // TODO: Dein Code hier
}

// AUFGABE 4b: sortByPreisDesc(ziele) — 7 Punkte
// Sortiere die Ziele absteigend nach Preis.
function sortByPreisDesc(ziele) {
    // TODO: Dein Code hier
}

// AUFGABE 5a: einwerfen(betrag) — 5 Punkte
// Erhöhe state.eingeworfen um den übergebenen Betrag.
function einwerfen(betrag) {
    // TODO: Dein Code hier
}

// AUFGABE 5b: resetEingabe() — 5 Punkte
// Setze state.eingeworfen auf 0, state.ausgewaehltesZiel auf null
// und state.anzahlPersonen auf 1.
function resetEingabe() {
    // TODO: Dein Code hier
}

// ============================================================
// 3. DOM NODE REFS (vorgegeben)
//    Static references to DOM nodes
// ============================================================

const zielGrid = document.getElementById('ziel-grid');
const summaryText = document.getElementById('ziel-summary');
const guthabenText = document.getElementById('guthaben-text');
const preisText = document.getElementById('preis-text');
const ticketInfoEl = document.getElementById('ticket-info');
const ticketLogEl = document.getElementById('ticket-log');
const ticketSummary = document.getElementById('ticket-summary');
const anzahlInput = document.getElementById('anzahl-input');

const btnAll = document.getElementById('btn-all');
const btnRegional = document.getElementById('btn-regional');
const btnIntercity = document.getElementById('btn-intercity');
const btnSortAsc = document.getElementById('btn-sort-asc');
const btnSortDesc = document.getElementById('btn-sort-desc');

// ============================================================
// 4. DOM NODE CREATION FN'S
//    Dynamic creation of DOM nodes
// ============================================================

// AUFGABE 1: createZielElement(ziel) — 25 Punkte
// Erstelle ein <article> Element mit der Klasse "ziel-card"
// und folgenden Kindern:
//   - <p class="ziel-emoji"> mit ziel.emoji
//   - <h3> mit ziel.name
//   - <p class="ziel-typ"> mit ziel.typ
//   - <p class="ziel-preis"> mit ziel.preis.toFixed(2) + " Euro"
function createZielElement(ziel) {
    // TODO: Dein Code hier
}

// ============================================================
// 5. RENDER FN
//    Render the application state to the DOM
// ============================================================

// renderZiele ist vorgegeben — nicht Teil der Prüfung
function renderZiele(ziele) {
    zielGrid.innerHTML = '';

    for (const ziel of ziele) {
        zielGrid.append(createZielElement(ziel));
    }

    summaryText.textContent = 'Fahrziele: ' + ziele.length;
}

// AUFGABE 5c: renderTicketInfo() — 5 Punkte
// Lies zuerst anzahlInput.valueAsNumber und speichere es in state.anzahlPersonen.
// Zeige das Guthaben (state.eingeworfen) in guthabenText an.
// Zeige den Gesamtpreis in preisText an (ziel.preis * anzahlPersonen),
// oder "—" wenn kein Ziel ausgewählt ist.
function renderTicketInfo() {
    // TODO: Dein Code hier
}

// ============================================================
// 6. EVENT HANDLERS
//    Functions that handle user interaction
// ============================================================

// AUFGABE 6a: onFilterAlle() — 4 Punkte
// Zeige alle Ziele an.
function onFilterAlle() {
    // TODO: Dein Code hier
}

// AUFGABE 6b: onFilterRegional() — 4 Punkte
// Zeige nur Regional-Ziele an.
function onFilterRegional() {
    // TODO: Dein Code hier
}

// AUFGABE 6c: onFilterIntercity() — 4 Punkte
// Zeige nur Intercity-Ziele an.
function onFilterIntercity() {
    // TODO: Dein Code hier
}

// AUFGABE 6d: onSortAsc() — 4 Punkte
// Zeige alle Ziele aufsteigend nach Preis sortiert.
function onSortAsc() {
    // TODO: Dein Code hier
}

// AUFGABE 6e: onSortDesc() — 4 Punkte
// Zeige alle Ziele absteigend nach Preis sortiert.
function onSortDesc() {
    // TODO: Dein Code hier
}

// ============================================================
// 7. INIT BINDINGS
//    Bind event handlers to DOM elements
// ============================================================

// AUFGABE 7: Event Listener — 12 Punkte
// Verknüpfe die Buttons und Inputs mit addEventListener und rufe die
// entsprechenden on*-Funktionen auf:
//   btnAll       -> onFilterAlle
//   btnRegional  -> onFilterRegional
//   btnIntercity -> onFilterIntercity
//   btnSortAsc   -> onSortAsc
//   btnSortDesc  -> onSortDesc
//   anzahlInput  -> renderTicketInfo (Event: "input")

// TODO: addEventListener-Aufrufe hier

// ============================================================
// 8. INITIAL RENDER (vorgegeben)
//    Render the initial state of the application
// ============================================================
renderZiele(state.ziele);

// ============================================================
// BONUS: TICKETKAUF INTERAKTION — +10 Punkte
// ============================================================
// 1. Beim Klick auf eine Zielkarte (in createZielElement)
//    soll state.ausgewaehltesZiel auf das Ziel gesetzt werden
//    und renderTicketInfo() aufgerufen werden.
// 2. Der Einwerfen-Button (#einwerfen-btn) soll den Betrag aus
//    dem Input (#betrag-input) lesen, einwerfen() aufrufen und
//    renderTicketInfo() aufrufen.
// 3. Der Kaufen-Button (#kaufen-btn) soll ein neues Ticket
//    erstellen, es ins ticketLog pushen, den Restgeld-Betrag
//    anzeigen, resetEingabe() und renderTicketInfo() aufrufen.
// 4. Der Reset-Button (#reset-btn) soll resetEingabe() und
//    renderTicketInfo() aufrufen.

// TODO: Bonus-Code hier
