class TicketAutomat {
    #einnahmenGesamt;
    #eingeworfen;
    #anzahlPersonen;
    #ziel;
    #ausgabe;
    constructor(initialGeld) {
        this.einnahmenGesamt = initialGeld;
        this.ausgabe = 'Willkommen';
        this.#eingeworfen = 0;
        this.#ziel = undefined;
    }
    einwerfen(geld) {
        if (isNaN(geld)) {
            throw new Error("please don't NaN with me");
        }
        if (geld < 0) {
            throw new Error('Ich geb nix her!');
        }
        this.#eingeworfen += geld;
        this.calcFehlend();
    }
    zielEinstellen(ziel) {
        const preis = zieleUndPreise[ziel];
        if (preis == undefined) {
            throw new Error('Dorthin fahre ich nicht');
        }
        this.#ziel = ziel;
        this.calcFehlend();
    }
    calcFehlend() {
        const fehlend = this.gesamtPreis - this.eingeworfen;
        this.ausgabe =
            fehlend <= 0
                ? 'Ticket kann gekauft werden'
                : `Es fehlen noch € ${fehlend}`;
    }
    set einnahmenGesamt(was) {
        this.#einnahmenGesamt = was;
    }
    get einnahmenGesamt() {
        return this.#einnahmenGesamt;
    }
    get eingeworfen() {
        return this.#eingeworfen;
    }
    get ziel() {
        return this.#ziel;
    }
    get gesamtPreis() {
        return zieleUndPreise[this.#ziel] * this.#anzahlPersonen;
    }
    get ausgabe() {
        return this.#ausgabe;
    }
    set ausgabe(text) {
        this.#ausgabe = text;
    }
    get anzahl() {
        return this.#anzahlPersonen;
    }
    set anzahl(formInput) {
        console.log('set anzahl');
        console.log(formInput);
        if (isNaN(formInput)) {
            throw new Error("please don't NaN with me");
        }
        if (formInput < 1 || formInput > 10) {
            throw new Error('falsche Anzahl Personen');
        }
        this.#anzahlPersonen = formInput;
        this.calcFehlend();
    }
    ticketKaufen() {
        // wirft evtl. einen Fehler
        const ticket = new Ticket(
            this.#anzahlPersonen,
            this.#ziel,
            this.#eingeworfen
        );
        // Guthaben zurücksetzen
        this.#eingeworfen = 0;

        this.#einnahmenGesamt += ticket.summe;
        this.ausgabe = ticket.toString();
        return ticket;
    }
}

class Ticket {
    #anzahlPersonen;
    #ziel;
    #gegeben;
    #summe;
    constructor(anzahl, ziel, gegeben) {
        this.#anzahlPersonen = anzahl;
        this.#ziel = ziel;
        this.#gegeben = gegeben;
        this.#summe = zieleUndPreise[this.#ziel] * this.#anzahlPersonen;
        if (this.#gegeben < this.#summe) {
            throw new Error('nicht genug gegeben');
        }
    }
    get summe() {
        return this.#summe;
    }
    toString() {
        return `===============================
=== Fahrkarte nach ${this.#ziel} ===
===============================
Einzelpreis: € ${zieleUndPreise[this.#ziel]}.-
Anzahl der Fahrgäste: ${this.#anzahlPersonen}
===============================
Summe: € ${this.#summe}.-
===============================
gegeben: € ${this.#gegeben}.-
Restgeld: € ${this.#gegeben - this.#summe},-
===============================`;
    }
}

// State
// 1.APPLICATION STATE;
// 2.STATE ACCESSORS / MUTATORS FN'S
const state = new TicketAutomat(100);
const zieleUndPreise = {
    Bregenz: 90,
    Eisenstadt: 13,
    Graz: 40,
    Innsbruck: 80,
    Klagenfurt: 60,
    Linz: 40,
    Salzburg: 60,
    'St. Pölten': 15
};
// 3.DOM Node Refs
const einwerfenInput = document.getElementById('einwerfenBetrag');
const einwerfenButton = document.getElementById('einwerfenButton');
const zielSelect = document.getElementById('ziel');
const anzahlPersonenInput = document.getElementById('anzahlPersonen');
const fahrpreisSpan = document.getElementById('fahrpreis');
const guthabenSpan = document.getElementById('guthaben');
const ticketAusgabeTextarea = document.getElementById('ticketAusgabe');
const einnahmenSpan = document.getElementById('einnahmen');
const ticketKaufen = document.getElementById('ticketKaufen');
const resetBtn = document.getElementById('reset');
// Static references to DOM nodes needed after the start of the application;
// 4.DOM Node Creation Fn's
// no need for this
// Dynamic creation of DOM nodes needed upon user interaction
// Here we will possibly create a function that will create a new item;

// 5.RENDER FN
function render() {
    anzahlPersonenInput.valueAsNumber = automat.anzahl;
    const aus = automat.ausgabe;
    console.log(aus, new Date().getUTCMilliseconds());
    ticketAusgabeTextarea.textContent = automat.ausgabe;
    guthabenSpan.textContent = automat.eingeworfen;
    fahrpreisSpan.textContent = automat.gesamtPreis;
    einnahmenSpan.textContent = automat.einnahmenGesamt;
    fahrpreisSpan.textContent = automat.gesamtPreis;
}
// These functions will render the application state to the DOM
// IMPORTANT TAKEAWAY: The state drives the UI, any state change should trigger a re - render of the UI;

// 6.EVENT HANDLERS
// These functions handle user interaction e.g.button clicks, key presses etc.
// These functions will call the state mutators and then call the render function
//     The naming convention for the event handlers is on < Event >
//         Here we will create a functions that will handle e.g.a "click" event on a button.
function onEinwurf() {
    const geld = einwerfenInput.valueAsNumber;
    try {
        automat.einwerfen(geld);
        einwerfenInput.value = '';
    } catch (err) {
        automat.ausgabe = err.message;
    } finally {
        render();
    }
}
function onZielSelect() {
    automat.zielEinstellen(zielSelect.value);
    render();
}
function onTicketKaufen() {
    try {
        automat.ticketKaufen();
    } catch (e) {
        automat.ausgabe = e.message;
    } finally {
        render();
    }
}
function onAnzahlChange() {
    const x = new Date();
    console.log(
        `onAnzahlChange fired ${x.getUTCMinutes()}:${x.getUTCSeconds()}:${x.getUTCMilliseconds()}`
    );
    try {
        automat.anzahl = anzahlPersonenInput.valueAsNumber;
    } catch (e) {
        automat.ausgabe = e.message;
    } finally {
        render();
    }
}
function onReset() {
    automat.anzahl = 1;
    render();
}
// 7.INIT BINDINGS
// These are the initial bindings of the event handlers, i.e.register the handlers of Pt. 6 with the DOM Node Refs of;
// Pt. 3;
const automat = new TicketAutomat(150);
einwerfenInput.addEventListener('keyup', (e) => {
    if (e.key != 'Enter') {
        return;
    }
    onEinwurf();
});
einwerfenButton.addEventListener('click', () => {
    onEinwurf();
});
zielSelect.addEventListener('change', onZielSelect);
anzahlPersonenInput.addEventListener('change', onAnzahlChange);
ticketKaufen.addEventListener('click', onTicketKaufen);
resetBtn.addEventListener('click', onReset);

// 8.INITIAL RENDER
// Here will call the render function (Pt. 5) to render the initial state of the application;
zielSelect.innerHTML = Object.keys(zieleUndPreise)
    .map((e) => `<option value="${e}">${e}</option>`)
    .join('\n');
automat.zielEinstellen(zielSelect.value);
automat.anzahl = anzahlPersonenInput.valueAsNumber;
render();
