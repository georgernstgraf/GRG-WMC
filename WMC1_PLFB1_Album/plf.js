import { assertEquals } from "@std/assert";
export class Frage {
    constructor(frage, optionen, antwort) {
        assertEquals(typeof frage, "string", "Frage muss ein String sein");
        assertEquals(
            Array.isArray(optionen),
            true,
            "Optionen muss ein Array sein",
        );
        assertEquals(
            optionen.length > 0,
            true,
            "Optionen darf nicht leer sein",
        );
        assertEquals(typeof antwort, "string", "Antwort muss ein String sein");
        assertEquals(3, arguments.length, "Es werden 3 Argumente erwartet");
        assertEquals(
            optionen.includes(antwort),
            true,
            "Antwort muss in den Optionen enthalten sein",
        );
        this.frage = frage;
        this.optionen = optionen;
        this.antwort = antwort;
    }
}
export class Quiz {
    constructor(liste) {
        this.fragen = [];
        for (const frage of liste) {
            this.fragen.push(
                new Frage(
                    frage.frage,
                    frage.optionen,
                    frage.antwort,
                ),
            );
        }
    }
    getFragenByLength(minLength) {
        return this.fragen.filter((frage) => frage.frage.length >= minLength);
    }
    getFragenSortedByLength() {
        return this.fragen.sort((a, b) => a.frage.length - b.frage.length);
    }
    getFragenWithOption(option) {
        return this.fragen.filter((frage) => frage.optionen.includes(option));
    }
    getAllOptions() {
        return [...new Set(this.fragen.flatMap((frage) => frage.optionen))];
    }
    getAverageOptions() {
        const optionCount = this.fragen.reduce(
            (acc, frage) => acc + frage.optionen.length,
            0,
        );
        return optionCount / this.fragen.length;
    }
}
