// ============================================================
// MUSTERLÖSUNG — nicht für Schüler bestimmt
// ============================================================

// AUFGABE 1: createZielElement(ziel) — 25 Punkte
function createZielElement(ziel) {
    const article = document.createElement("article");
    article.classList.add("ziel-card");

    const emojiP = document.createElement("p");
    emojiP.classList.add("ziel-emoji");
    emojiP.textContent = ziel.emoji;

    const nameH3 = document.createElement("h3");
    nameH3.textContent = ziel.name;

    const typP = document.createElement("p");
    typP.classList.add("ziel-typ");
    typP.textContent = ziel.typ;

    const preisP = document.createElement("p");
    preisP.classList.add("ziel-preis");
    preisP.textContent = ziel.preis.toFixed(2) + " Euro";

    article.append(emojiP, nameH3, typP, preisP);

    return article;
}

// AUFGABE 2: getTotalEinnahmen(tickets) — 10 Punkte
function getTotalEinnahmen(tickets) {
    let total = 0;
    for (const ticket of tickets) {
        total += ticket.summe;
    }
    return total;
}

// AUFGABE 3: getByTyp(ziele, typ) — 15 Punkte
function getByTyp(ziele, typ) {
    return ziele.filter(z => z.typ === typ);
}

// AUFGABE 4a: sortByPreisAsc(ziele) — 8 Punkte
function sortByPreisAsc(ziele) {
    return [...ziele].sort((a, b) => a.preis - b.preis);
}

// AUFGABE 4b: sortByPreisDesc(ziele) — 7 Punkte
function sortByPreisDesc(ziele) {
    return [...ziele].sort((a, b) => b.preis - a.preis);
}

// AUFGABE 5a: einwerfen(betrag) — 5 Punkte
function einwerfen(betrag) {
    state.eingeworfen += betrag;
}

// AUFGABE 5b: resetEingabe() — 5 Punkte
function resetEingabe() {
    state.eingeworfen = 0;
    state.ausgewaehltesZiel = null;
    state.anzahlPersonen = 1;
}

// AUFGABE 5c: renderTicketInfo() — 5 Punkte
function renderTicketInfo() {
    state.anzahlPersonen = anzahlInput.valueAsNumber;
    guthabenText.textContent = state.eingeworfen + " Euro";
    if (state.ausgewaehltesZiel) {
        preisText.textContent = (state.ausgewaehltesZiel.preis * state.anzahlPersonen) + " Euro";
    } else {
        preisText.textContent = "—";
    }
}

// AUFGABE 6a: onFilterAlle() — 4 Punkte
function onFilterAlle() {
    renderZiele(state.ziele);
}

// AUFGABE 6b: onFilterRegional() — 4 Punkte
function onFilterRegional() {
    renderZiele(getByTyp(state.ziele, "Regional"));
}

// AUFGABE 6c: onFilterIntercity() — 4 Punkte
function onFilterIntercity() {
    renderZiele(getByTyp(state.ziele, "Intercity"));
}

// AUFGABE 6d: onSortAsc() — 4 Punkte
function onSortAsc() {
    renderZiele(sortByPreisAsc(state.ziele));
}

// AUFGABE 6e: onSortDesc() — 4 Punkte
function onSortDesc() {
    renderZiele(sortByPreisDesc(state.ziele));
}

// AUFGABE 7: Event Listener — 12 Punkte
btnAll.addEventListener("click", onFilterAlle);
btnRegional.addEventListener("click", onFilterRegional);
btnIntercity.addEventListener("click", onFilterIntercity);
btnSortAsc.addEventListener("click", onSortAsc);
btnSortDesc.addEventListener("click", onSortDesc);
anzahlInput.addEventListener("input", renderTicketInfo);

// ============================================================
// BONUS: TICKETKAUF INTERAKTION — +10 Punkte
// ============================================================

const betragInput = document.getElementById("betrag-input");
const einwerfenBtn = document.getElementById("einwerfen-btn");
const kaufenBtn = document.getElementById("kaufen-btn");
const resetBtn = document.getElementById("reset-btn");

(function() {
    const origCreateZielElement = createZielElement;

    createZielElement = function(ziel) {
        const el = origCreateZielElement(ziel);
        el.addEventListener("click", function() {
            state.ausgewaehltesZiel = ziel;
            renderTicketInfo();
        });
        return el;
    };
})();

einwerfenBtn.addEventListener("click", function() {
    const betrag = betragInput.valueAsNumber;
    if (!isNaN(betrag) && betrag > 0) {
        einwerfen(betrag);
        betragInput.value = "";
    }
    renderTicketInfo();
});

kaufenBtn.addEventListener("click", function() {
    if (!state.ausgewaehltesZiel) {
        ticketInfoEl.textContent = "Bitte ein Ziel auswählen!";
        return;
    }
    if (state.eingeworfen < state.ausgewaehltesZiel.preis * state.anzahlPersonen) {
        ticketInfoEl.textContent = "Nicht genug Geld eingeworfen!";
        return;
    }
    const ticket = new Ticket(state.ausgewaehltesZiel, state.anzahlPersonen, state.eingeworfen);
    state.ticketLog.push(ticket);
    ticketInfoEl.textContent = "Ticket nach " + ticket.ziel.name + " gekauft!\nSumme: " + ticket.summe + " Euro\nRestgeld: " + ticket.restgeld + " Euro";
    resetEingabe();
    renderTicketInfo();
    renderTicketLog();
});

resetBtn.addEventListener("click", function() {
    resetEingabe();
    anzahlInput.value = 1;
    ticketInfoEl.textContent = "";
    renderTicketInfo();
});

function renderTicketLog() {
    ticketLogEl.innerHTML = "";
    for (const t of state.ticketLog) {
        const li = document.createElement("li");
        li.textContent = t.ziel.name + " — " + t.anzahl + " Pers. — " + t.summe + " Euro";
        ticketLogEl.append(li);
    }
    ticketSummary.textContent = "Gesamteinnahmen: " + getTotalEinnahmen(state.ticketLog) + " Euro";
}

renderZiele(state.ziele);
