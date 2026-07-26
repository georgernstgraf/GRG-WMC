import { concat } from "@std/bytes";

export type EssenEintrag = {
    name: string;
    essen: string;
};

// Komplexität mit encoder/decoder ist nur zur Demo für die Imports
function createTabellenMarkup(daten: EssenEintrag[]): string {
    const encoder = new TextEncoder();
    const bytes = daten.map((eintrag) =>
        encoder.encode(`
        <tr>
          <td>${eintrag.name}</td>
          <td>${eintrag.essen}</td>
        </tr>
      `)
    );

    return new TextDecoder().decode(concat(bytes));
}

export async function holeEssen(): Promise<void> {
    try {
        const response = await fetch("/essen");
        const daten = await response.json() as EssenEintrag[];
        const tabelle = document.getElementById("tabelle");

        if (!tabelle) {
            throw new Error("Element with id 'tabelle' not found");
        }

        tabelle.innerHTML = createTabellenMarkup(daten);
    } catch (error) {
        console.info("Fehler beim Laden der Daten", error);
    }
}

export function loescheEssen(): void {
    const tabelle = document.getElementById("tabelle");

    if (!tabelle) {
        throw new Error("Element with id 'tabelle' not found");
    }

    tabelle.innerHTML = "";
}
