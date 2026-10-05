// In-Memory-Speicher + Validierung für das Anmeldeformular.
// bewusst ohne Datenbank: Es geht um den HTTP-Weg, nicht um Persistenz.

export interface Anmeldung {
    id: number;
    name: string;
    email: string;
    kurs: string;
    nachricht: string;
}

export interface FormFehler {
    feld: string;
    meldung: string;
}

const KURSE = ["html-css", "typescript", "react"];

const anmeldungen: Anmeldung[] = [];
let naechsteId = 1;

export function kursOptionen(): string[] {
    return KURSE;
}

export function listAnmeldungen(): Anmeldung[] {
    return anmeldungen;
}

// Eingaben kommen je nach Content-Type unterschiedlich an:
//   Formular  -> alle Werte sind Strings ("on" beim Häkchen)
//   JSON      -> Zahlen/Bools bleiben typisiert (agb: true)
type Eingabe = Record<string, unknown>;

export function pruefe(eingabe: Eingabe): FormFehler[] {
    const fehler: FormFehler[] = [];

    if (text(eingabe.name).trim().length < 2) {
        fehler.push({
            feld: "name",
            meldung: "Name muss mindestens 2 Zeichen haben.",
        });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text(eingabe.email))) {
        fehler.push({
            feld: "email",
            meldung: "Bitte eine gültige E-Mail-Adresse angeben.",
        });
    }

    if (!KURSE.includes(text(eingabe.kurs))) {
        fehler.push({
            feld: "kurs",
            meldung: "Bitte einen gültigen Kurs wählen.",
        });
    }

    if (!zustimmung(eingabe.agb)) {
        fehler.push({
            feld: "agb",
            meldung: "Den Bedingungen muss zugestimmt werden.",
        });
    }

    return fehler;
}

export function speichere(eingabe: Eingabe): Anmeldung {
    const anmeldung: Anmeldung = {
        id: naechsteId++,
        name: text(eingabe.name).trim(),
        email: text(eingabe.email).trim(),
        kurs: text(eingabe.kurs),
        nachricht: text(eingabe.nachricht).trim(),
    };

    anmeldungen.push(anmeldung);

    return anmeldung;
}

function zustimmung(wert: unknown): boolean {
    return wert === true || text(wert) === "on";
}

function text(wert: unknown): string {
    if (Array.isArray(wert)) {
        return wert.map(String).join(", ");
    }

    return typeof wert === "string" ? wert : "";
}
