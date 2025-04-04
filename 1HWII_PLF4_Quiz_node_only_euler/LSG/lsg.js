const fragen = require('./fragen');

class Frage {
    #frage
    #antwort
    #optionen
    constructor(frage) {
        this.#frage = frage.frage
        this.#antwort = frage.antwort
        this.#optionen = frage.optionen
    }
    get optionen() {
        return this.#optionen;
    }
    set optionen(l) {
        throw new Error('Optionen können nur im Konstruktor gesetzt werden')
    }
    get frage() {
    return this.#frage}

    isRichtig(antwort) {
        return this.#antwort === antwort
        }
}

function eulerZahl() {
    let rw = 2;
    let rw_alt;
    for (let i = 2; i < 20; i++) {
        rw_alt = rw;
        let fact = 1;
        for (let j = 2; j <= i; j++) {
            fact *= j;
        }
        rw += 1 / fact
    }
    return rw;
}
module.exports = { Frage, eulerZahl }  // bleibt am Ende des Programm