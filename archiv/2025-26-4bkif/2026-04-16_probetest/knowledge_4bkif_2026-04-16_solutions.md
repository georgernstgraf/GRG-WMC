# Wissensabfrage – 4BKIF – Lösungen

**Datum:** 16. April 2026  
**Punkte:** 75 (5 × 15)

---

## Frage 1: DOM-Manipulation – Daten in HTML rendern (15 Punkte)

### Musterlösung

```javascript
const produkte = [
    { id: 1, name: "Laptop", preis: 899.99, kategorie: "Elektronik" },
    { id: 2, name: "Tischlampe", preis: 34.50, kategorie: "Möbel" },
    { id: 3, name: "Kopfhörer", preis: 149.00, kategorie: "Elektronik" },
    { id: 4, name: "Kaffeetasse", preis: 12.90, kategorie: "Haushalt" },
    { id: 5, name: "Monitor", preis: 459.00, kategorie: "Elektronik" },
];

function renderProducts() {
    const list = document.querySelector("#product-list");
    list.innerHTML = "";

    for (const produkt of produkte) {
        const li = document.createElement("li");
        li.textContent = `${produkt.name} (${produkt.kategorie}) – €${produkt.preis}`;
        list.appendChild(li);
    }
}

renderProducts();
```

**Erwartete Ausgabe im DOM:**

```
• Laptop (Elektronik) – €899.99
• Tischlampe (Möbel) – €34.5
• Kopfhörer (Elektronik) – €149
• Kaffeetasse (Haushalt) – €12.9
• Monitor (Elektronik) – €459
```

### (c) Unterschied `querySelector` vs. `getElementById`

| Methode | Parameter | Rückgabe | Besonderheit |
|---------|-----------|----------|--------------|
| `document.querySelector("#product-list")` | CSS-Selektor-String | Erstes passendes Element oder `null` | Funktioniert mit beliebigem CSS-Selektor (`.klasse`, `#id`, `div > p`, etc.) |
| `document.getElementById("product-list")` | ID-String **ohne** `#` | Element oder `null` | Schneller, aber nur für IDs; kein `#`-Präfix |

`querySelector` ist vielseitiger, da es jeden CSS-Selektor akzeptiert. `getElementById` ist spezifisch für IDs und minimal performanter.

### Bewertungsschlüssel

| Kriterium | Punkte |
|-----------|--------|
| (a) Korrekte Funktion `renderProducts()` mit Schleife | 3 |
| (a) Korrekte Template-String-Syntax mit Backticks und `${}` | 3 |
| (b) Korrekte Verwendung von `querySelector`, `createElement`, `appendChild` | 4 |
| (c) Korrekte Erklärung des Unterschieds mit je einem Beispiel | 5 |

---

## Frage 2: Event Handling & Sortierung (15 Punkte)

### Musterlösung

```javascript
const produkte = [
    { name: "Laptop", preis: 899.99 },
    { name: "Tischlampe", preis: 34.50 },
    { name: "Kopfhörer", preis: 149.00 },
    { name: "Kaffeetasse", preis: 12.90 },
    { name: "Monitor", preis: 459.00 },
];

function renderTable() {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    for (const p of produkte) {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = p.name;
        tr.appendChild(tdName);

        const tdPreis = document.createElement("td");
        tdPreis.textContent = p.preis;
        tr.appendChild(tdPreis);

        tbody.appendChild(tr);
    }
}

// Event-Listener auf den Spaltenkopf "Preis"
const thpreis = document.querySelector("#thpreis");
thpreis.addEventListener("click", () => {
    produkte.sort((a, b) => a.preis - b.preis);
    renderTable();
});

// Initial rendern
renderTable();
```

**Erwartete Tabelle nach Klick auf „Preis":**

| Name | Preis (€) |
|------|-----------|
| Kaffeetasse | 12.9 |
| Tischlampe | 34.5 |
| Kopfhörer | 149 |
| Monitor | 459 |
| Laptop | 899.99 |

### (c) sort() ohne Vergleichsfunktion

Ohne Vergleichsfunktion konvertiert `sort()` alle Elemente zu **Strings** und sortiert lexikografisch. Das führt bei Zahlen zu falschen Ergebnissen:

```javascript
[10, 2, 30, 1].sort();
// Ergebnis: ["1", "10", "2", "30"]  ← falsch!
// Richtig wäre: [1, 2, 10, 30]
```

Deshalb muss bei numerischen Werten **immer** eine Vergleichsfunktion übergeben werden: `(a, b) => a.preis - b.preis`.

### (d) Zwei Methoden zur Referenzierung eines Elements anhand der ID

1. **`document.getElementById("thpreis")`** – direkt, ohne `#`
2. **`document.querySelector("#thpreis")`** – mit CSS-Selektor-Syntax (`#` erforderlich)

### Bewertungsschlüssel

| Kriterium | Punkte |
|-----------|--------|
| (a) Korrekter `addEventListener("click", ...)` mit Arrow Function | 3 |
| (a) Korrekte `sort()`-Vergleichsfunktion `(a, b) => a.preis - b.preis` | 2 |
| (b) Korrekte `renderTable()` mit createElement, textContent, appendChild | 4 |
| (c) Erklärung der lexikografischen String-Sortierung mit Beispiel | 3 |
| (d) Zwei verschiedene Methoden genannt und erklärt | 3 |

---

## Frage 3: filter, map, reduce – Datenanalyse (15 Punkte)

### Musterlösung

#### (a) filter – Positive Studenten

```javascript
const positive = studenten.filter(s => s.note <= 4);
```

**Ergebnis:**
```javascript
[
    { name: "Anna", alter: 22, note: 1 },
    { name: "Bernd", alter: 19, note: 4 },
    { name: "Clara", alter: 25, note: 2 },
    { name: "Eva", alter: 23, note: 3 },
    { name: "Felix", alter: 21, note: 2 },
    { name: "Greta", alter: 24, note: 1 },
]
```
*(David und Hans fallen weg, da Note 5)*

#### (b) map – Namen mit Alter

```javascript
const namenMitAlter = studenten.map(s => `${s.name} (${s.alter})`);
```

**Ergebnis:**
```javascript
["Anna (22)", "Bernd (19)", "Clara (25)", "David (20)", "Eva (23)", "Felix (21)", "Greta (24)", "Hans (18)"]
```

#### (c) reduce – Durchschnittsnote

```javascript
const durchschnitt = studenten.reduce((summe, s) => summe + s.note, 0) / studenten.length;
```

**Ergebnis:** `2.875`

*Berechnung: (1 + 4 + 2 + 5 + 3 + 2 + 1 + 5) / 8 = 23 / 8 = 2.875*

#### (d) Method Chaining

```javascript
const ergebnis = studenten
    .filter(s => s.alter >= 21)
    .map(s => s.name)
    .join(", ");
```

**Ergebnis:** `"Anna, Clara, Eva, Felix, Greta"`

*(Gefiltert: Anna 22, Clara 25, Eva 23, Felix 21, Greta 24 – alle ≥ 21)*

### Bewertungsschlüssel

| Kriterium | Punkte |
|-----------|--------|
| (a) Korrekte `filter()` mit Arrow Function und Bedingung | 3 |
| (b) Korrekte `map()` mit Template String | 3 |
| (c) Korrekte `reduce()` mit Initialwert 0 + Division durch `length` | 4 |
| (d) Korrekte Verkettung: filter → map → join | 3 |
| (d) Korrektes Endergebnis als Komma-getrennter String | 2 |

*Hinweis: Teilaufgabe (d) kann 5 Punkte erreichen (3 für Verkettung + 2 für korrektes Ergebnis).*

---

## Frage 4: JSON-Roundtrip & Fehleranalyse (15 Punkte)

### Fehleranalyse (a)

| # | Zeile | Fehler | Korrektur |
|---|-------|--------|-----------|
| 1 | `JSON.stringify(Produkt)` | **Groß-/Kleinschreibung:** Die Variable heißt `produkt` (klein), nicht `Produkt`. | `JSON.stringify(produkt)` |
| 2 | `jsonStr.parse()` | **Methode existiert nicht auf Strings.** `parse()` ist eine statische Methode von `JSON`. | `JSON.parse(jsonStr)` |
| 3 | `const empfangen.preis = 79.90;` | **`const` kann nicht neu zugewiesen werden.** Zudem ist `const` bei einer Property-Änderung auf einem Objekt erlaubt – aber die Syntax `const empfangen.preis` ist ungültig, da `const` nur für Variablendeklarationen verwendet wird. | `empfangen.preis = 79.90;` |
| 4 | `'Artikel: ${empfangen.name}...'` | **Einfache Anführungszeichen statt Backticks.** Template Strings funktionieren nur mit Backticks `` ` ``. | `` `Artikel: ${empfangen.name} – Preis: €${empfangen.preis}` `` |
| 5 | `empfangen.aufLager == "true"` | **Typproblem:** `aufLager` ist nach `JSON.parse()` ein **Boolean** (`true`), kein String. Der Vergleich `true == "true"` ergibt `false` (da `true` zu `1` konvertiert wird, `"true"` zu `NaN`). | `empfangen.aufLager === true` oder einfach `empfangen.aufLager` |

### Korrigierter Code (b)

```javascript
const produkt = {
    name: "Mechanische Tastatur",
    preis: 89.90,
    aufLager: true,
    kategorie: "Elektronik"
};

// 1. In JSON umwandeln für die Übertragung
const jsonStr = JSON.stringify(produkt);

// 2. Simulierter Empfang auf der Gegenseite
const empfangen = JSON.parse(jsonStr);

// 3. Preis aktualisieren
empfangen.preis = 79.90;

// 4. Ausgabe mit Template String
console.log(`Artikel: ${empfangen.name} – Preis: €${empfangen.preis}`);

// 5. Prüfen ob auf Lager
if (empfangen.aufLager) {
    console.log("Produkt ist verfügbar!");
}
```

**Erwartete Ausgabe:**
```
Artikel: Mechanische Tastatur – Preis: €79.9
Produkt ist verfügbar!
```

### Erklärung (c)

Nach `JSON.parse()` ist `empfangen.aufLager` der **Boolean-Wert `true`** (Typ: `boolean`), kein String.

Der Vergleich `true == "true"` mit dem losen Gleichheitsoperator `==`:
- `true` wird zu `1` konvertiert
- `"true"` wird zu `NaN` konvertiert (kann nicht als Zahl geparst werden)
- `1 == NaN` ergibt `false`

Deshalb schlägt die Prüfung fehl, obwohl das Produkt auf Lager ist. Die korrekte Prüfung ist `if (empfangen.aufLager)` oder `if (empfangen.aufLager === true)`.

### Bewertungsschlüssel

| Kriterium | Punkte |
|-----------|--------|
| (a) Jeder korrekt identifizierte und beschriebene Fehler (mind. 4) | 4 × 1 = 4 |
| (b) Komplett korrigierter, lauffähiger Code | 5 |
| (c) Korrekte Erklärung des Typproblems mit `==`-Konvertierung | 4 |
| (c) Korrekte Alternative gezeigt (`=== true` oder direkte Prüfung) | 2 |

---

## Frage 5: Mini-Webanwendung – Suchfunktion (15 Punkte)

### Musterlösung

```javascript
const produkte = [
    { name: "Laptop", preis: 899.99, kategorie: "Elektronik" },
    { name: "Tischlampe", preis: 34.50, kategorie: "Möbel" },
    { name: "Kopfhörer", preis: 149.00, kategorie: "Elektronik" },
    { name: "Kaffeemaschine", preis: 219.00, kategorie: "Haushalt" },
    { name: "Monitor", preis: 459.00, kategorie: "Elektronik" },
    { name: "Schreibtisch", preis: 289.00, kategorie: "Möbel" },
    { name: "Kaffeetasse", preis: 12.90, kategorie: "Haushalt" },
];

// (a) Render-Funktion
function renderResults(liste) {
    const container = document.querySelector("#results");
    container.innerHTML = "";

    for (const produkt of liste) {
        const div = document.createElement("div");
        div.className = "product-card";
        div.textContent = `${produkt.name} – €${produkt.preis} [${produkt.kategorie}]`;
        container.appendChild(div);
    }
}

// (b) Suchfunktion
function searchProducts() {
    const suchbegriff = document.querySelector("#search").value.toLowerCase();

    const ergebnisse = produkte.filter(p =>
        p.name.toLowerCase().includes(suchbegriff)
    );

    renderResults(ergebnisse);
}

// (c) Event-Listener auf dem Suchfeld
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", searchProducts);

// (d) Alle Produkte beim Laden anzeigen
renderResults(produkte);
```

**Erwartetes Verhalten:**

| Eingabe | Ergebnisse |
|---------|------------|
| *(leer)* | Alle 7 Produkte |
| `"kaffee"` | Kaffeemaschine – €219 [Haushalt], Kaffeetasse – €12.9 [Haushalt] |
| `"LAPTOP"` | Laptop – €899.99 [Elektronik] |
| `"elek"` | *(keine Treffer – Suche prüft nur den Namen, nicht die Kategorie)* |

*Hinweis: Die Suche bezieht sich nur auf den Namen, nicht auf die Kategorie – dies entspricht der Aufgabenstellung. Wenn ein Student die Kategorie ebenfalls einbezieht, ist das als positive Erweiterung zu werten.*

### Bewertungsschlüssel

| Kriterium | Punkte |
|-----------|--------|
| (a) Korrekte `renderResults()` mit `createElement`, `className`, `textContent`, `appendChild` | 4 |
| (a) Vorheriges Leeren des Containers (`innerHTML = ""`) | 1 |
| (b) Auslesen des Suchbegriffs mit `.value` | 1 |
| (b) Korrekte `filter()` mit `.toLowerCase()` und `.includes()` | 3 |
| (b) Aufruf von `renderResults()` mit dem gefilterten Array | 1 |
| (c) Korrekter `input`-Event-Listener auf dem Suchfeld | 2 |
| (d) Einmaliger初始aufruf `renderResults(produkte)` | 1 |
| (a) Korrekte Template-String-Syntax | 2 |

---

## Punkteübersicht

| Frage | Max. Punkte |
|-------|-------------|
| 1 – DOM-Manipulation | 15 |
| 2 – Event Handling & Sortierung | 15 |
| 3 – filter, map, reduce | 15 |
| 4 – JSON-Roundtrip & Fehleranalyse | 15 |
| 5 – Suchfunktion | 15 |
| **Gesamt** | **75** |

### Notenschlüssel (empfohlen)

| % | Punkte | Note |
|---|--------|------|
| ≥ 89% | ≥ 67 | Sehr gut (1) |
| ≥ 76% | ≥ 57 | Gut (2) |
| ≥ 63% | ≥ 48 | Befriedigend (3) |
| ≥ 50% | ≥ 38 | Genügend (4) |
| < 50% | < 38 | Nicht genügend (5) |
