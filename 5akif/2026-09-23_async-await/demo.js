// === Async/Await: Bestell-Pipeline mit individuellen Exceptions ===
// Lektion 2026-09-23, 5akif — läuft mit node demo.js oder deno run demo.js

// --- Stufe 0: eigene Error-Typen (je Pipeline-Stufe einer) ---
class ValidationError extends Error {
    constructor(artikel, menge) {
        super(`Ungültige Bestellung: ${menge}x "${artikel}"`);
        this.name = "ValidationError";
    }
}

class PaymentError extends Error {
    constructor(karte) {
        super(`Zahlung fehlgeschlagen: Karte ${karte} abgelehnt`);
        this.name = "PaymentError";
    }
}

class ShippingError extends Error {
    constructor(plz) {
        super(`Lieferung nicht möglich: PLZ ${plz} außerhalb des Lieferraums`);
        this.name = "ShippingError";
    }
}

// --- Hilfsbaukasten: simulate(ms, wert) -> Promise ---
const simulate = (ms, wert) =>
    new Promise((resolve) => setTimeout(() => resolve(wert), ms));

// --- Pipeline-Stufen: jede wirft ihre eigene Exception ---
async function bestellen(artikel, menge) {
    const bestellNr = await simulate(300, { nr: 4711, artikel, menge });
    if (menge <= 0) {
        throw new ValidationError(artikel, menge);
    }
    console.log(`✓ Bestellung ${bestellNr.nr}: ${menge}x ${artikel}`);
    return bestellNr;
}

async function bezahlen(bestellung, karte) {
    if (karte === "4242-0000-0000-0002") {
        throw new PaymentError(karte);
    }
    const zahlung = await simulate(400, { id: "pay-99", betrag: bestellung.menge * 19.9 });
    console.log(`✓ Bezahlung ok (${zahlung.id}, ${zahlung.betrag.toFixed(2)} €)`);
    return { ...bestellung, zahlung: zahlung.id };
}

async function liefern(bestellung, plz) {
    if (plz.startsWith("9")) {
        throw new ShippingError(plz);
    }
    const lieferung = await simulate(300, { tracking: "AT-8812", plz });
    console.log(`✓ Lieferung an ${plz} unterwegs (${lieferung.tracking})`);
    return { ...bestellung, tracking: lieferung.tracking };
}

// --- Variante A: ein try/catch, Verzweigung mit instanceof ---
async function pipelineAlsGanzes(bestellung, karte, plz) {
    try {
        const b = await bestellen(bestellung.artikel, bestellung.menge);
        const b2 = await bezahlen(b, karte);
        const b3 = await liefern(b2, plz);
        console.log(`✅ Pipeline fertig:`, b3);
    } catch (err) {
        if (err instanceof ValidationError) {
            console.log(`🛑 Stufe bestellen: ${err.message}`);
        } else if (err instanceof PaymentError) {
            console.log(`🛑 Stufe bezahlen: ${err.message}`);
        } else if (err instanceof ShippingError) {
            console.log(`🛑 Stufe liefern: ${err.message}`);
        } else {
            console.log(`🛑 Unbekannter Fehler: ${err.message}`);
        }
    } finally {
        console.log(`— Pipeline-Lauf beendet (${new Date().toISOString().slice(11, 19)})\n`);
    }
}

// --- Variante B: granular — jedes await eigenes try/catch, Weiterarbeit möglich ---
async function pipelineGranular(bestellung, karte, plz) {
    let b;
    try {
        b = await bestellen(bestellung.artikel, bestellung.menge);
    } catch (err) {
        console.log(`🛑 Abbruch: ${err.message}`);
        return;
    }

    try {
        b = await bezahlen(b, karte);
    } catch (err) {
        console.log(`⚠️  Bezahlung fehlgeschlagen (${err.message}) — andere Karte versuchen?`);
        b = await bezahlen(b, "4242-1111-1111-1111"); // Fallback-Karte
    }

    try {
        await liefern(b, plz);
    } catch (err) {
        console.log(`⚠️  Lieferung fehlgeschlagen (${err.message})`);
        throw err; // Re-Throw: oben will das Ganze noch jemand sehen
    }
}

// --- Kontrast: dieselbe Kette mit .then()/.catch() (Promise-Recap vom 18.9.) ---
function pipelineDann(bestellung, karte, plz) {
    bestellen(bestellung.artikel, bestellung.menge)
        .then((b) => bezahlen(b, karte))
        .then((b) => liefern(b, plz))
        .then((b) => console.log(`✅ Pipeline fertig:`, b))
        .catch((err) => console.log(`🛑 .catch(): ${err.name}: ${err.message}`));
}

// --- Hauptprogramm: 3 Läufe, jeder fängt etwas anderes ---
const hauptprogramm = async () => {
    // Lauf 1: alles ok
    await pipelineAlsGanzes({ artikel: "USB-C Hub", menge: 2 }, "4242-1111-1111-1111", "1100");

    // Lauf 2: PaymentError wird gefangen (instanceof-Variante A)
    await pipelineAlsGanzes({ artikel: "Mechanische Tastatur", menge: 1 }, "4242-0000-0000-0002", "1100");

    // Lauf 3: granulare Variante B — PaymentError gefangen, Fallback greift, ShippingError Re-Throw
    try {
        await pipelineGranular({ artikel: "Webcam", menge: 1 }, "4242-0000-0000-0002", "9980");
    } catch (err) {
        console.log(`🛑 Hauptprogramm fängt Re-Throw: ${err.name}`);
    }

    // Kontrast: dieselbe Story mit .then()/.catch()
    pipelineDann({ artikel: "Maus", menge: 1 }, "4242-0000-0000-0002", "1100");
};

hauptprogramm();
