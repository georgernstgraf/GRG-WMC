# Wissensabfrage – 4BKIF

**Datum:** 16. April 2026  
**Punkte:** 75 (5 Freitext-Fragen à 15 Punkte)  
**Zeit:** ca. 40 Minuten

---

## Hinweise

- Beantworten Sie alle Teile jeder Frage – auch die Erklärungen.
- Schreiben Sie **lauffähigen Code** mit korrekter Syntax (Klammern, Semikolons, Backticks etc.).
- Bei Code-Aufgaben: Geben Sie das **erwartete Ergebnis** (z. B. `console.log`-Ausgabe) an.
- Viel Erfolg!

---

## Frage 1: DOM-Manipulation – Daten in HTML rendern (15 Punkte)

Gegeben ist folgendes HTML-Gerüst:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Produkte</title>
    <script type="module" src="script.js"></script>
</head>
<body>
    <ul id="product-list"></ul>
</body>
</html>
```

Und folgendes JavaScript-Array:

```javascript
const produkte = [
    { id: 1, name: "Laptop", preis: 899.99, kategorie: "Elektronik" },
    { id: 2, name: "Tischlampe", preis: 34.50, kategorie: "Möbel" },
    { id: 3, name: "Kopfhörer", preis: 149.00, kategorie: "Elektronik" },
    { id: 4, name: "Kaffeetasse", preis: 12.90, kategorie: "Haushalt" },
    { id: 5, name: "Monitor", preis: 459.00, kategorie: "Elektronik" },
];
```

**Aufgaben:**

**(a)** Schreiben Sie eine Funktion `renderProducts()`, die für jedes Produkt ein `<li>`-Element erstellt. Der Text jedes Elements soll folgendes Format haben:

```
Laptop (Elektronik) – €899.99
```

Verwenden Sie dafür Template Strings mit Backticks.

**(b)** Hängen Sie alle `<li>`-Elemente in die vorhandene `<ul id="product-list">` ein. Nutzen Sie `document.querySelector()` und `document.createElement()`.

**(c)** Erklären Sie kurz den Unterschied zwischen `document.querySelector()` und `document.getElementById()`.

---

## Frage 2: Event Handling & Sortierung (15 Punkte)

Gegeben ist eine HTML-Tabelle mit einer Kopfspalte „Preis":

```html
<table>
    <thead>
        <tr>
            <th id="thname">Name</th>
            <th id="thpreis">Preis (€)</th>
        </tr>
    </thead>
    <tbody id="tbody"></tbody>
</table>
```

Und folgendes Datenarray:

```javascript
const produkte = [
    { name: "Laptop", preis: 899.99 },
    { name: "Tischlampe", preis: 34.50 },
    { name: "Kopfhörer", preis: 149.00 },
    { name: "Kaffeetasse", preis: 12.90 },
    { name: "Monitor", preis: 459.00 },
];
```

**Aufgaben:**

**(a)** Schreiben Sie den vollständigen JavaScript-Code, der einen `click`-Event-Listener auf das Element `#thpreis` registriert. Beim Klick soll das Array `produkte` nach dem Preis **aufsteigend** sortiert werden. Verwenden Sie `Array.sort()` mit einer Arrow Function.

**(b)** Nach dem Sortieren soll die Tabelle neu gerendert werden. Schreiben Sie eine Funktion `renderTable()`, die alle Produkte als `<tr>`-Elemente in den `<tbody>` einfügt. Jede Zeile soll zwei `<td>`-Elemente enthalten (Name und Preis).

**(c)** Erklären Sie: Was passiert, wenn man `produkte.sort()` **ohne** Vergleichsfunktion aufruft? Warum funktioniert das in diesem Fall nicht korrekt?

**(d)** Nennen Sie zwei verschiedene Methoden, um ein DOM-Element anhand seiner ID zu referenzieren (z. B. `#thpreis`).

---

## Frage 3: filter, map, reduce – Datenanalyse (15 Punkte)

Gegeben ist folgendes Array von Studierenden:

```javascript
const studenten = [
    { name: "Anna", alter: 22, note: 1 },
    { name: "Bernd", alter: 19, note: 4 },
    { name: "Clara", alter: 25, note: 2 },
    { name: "David", alter: 20, note: 5 },
    { name: "Eva", alter: 23, note: 3 },
    { name: "Felix", alter: 21, note: 2 },
    { name: "Greta", alter: 24, note: 1 },
    { name: "Hans", alter: 18, note: 5 },
];
```

*Hinweis: In Österreich bedeutet Note 1 = Sehr gut, Note 5 = Nicht genügend. Positiv sind die Noten 1–4.*

**Aufgaben:**

**(a)** Verwenden Sie `filter()`, um alle Studenten zu finden, die **positiv** abgeschnitten haben (Note ≤ 4). Speichern Sie das Ergebnis in der Variablen `positive`.

**(b)** Verwenden Sie `map()`, um aus dem ursprünglichen Array `studenten` ein neues Array von Strings im Format `"Anna (22)"` zu erstellen. Speichern Sie es in der Variablen `namenMitAlter`.

**(c)** Verwenden Sie `reduce()`, um die **Durchschnittsnote aller Studenten** zu berechnen. Speichern Sie das Ergebnis in der Variablen `durchschnitt`.

**(d)** Schreiben Sie eine **einzige verkettete Anweisung** (Method Chaining), die:
   1. alle Studenten mit Alter ≥ 21 filtert,
   2. davon nur die Namen extrahiert,
   3. diese als **einen einzigen Komma-getrennten String** zusammenfügt.

Speichern Sie das Ergebnis in der Variablen `ergebnis`.

Geben Sie bei jedem Aufgabenteil an, was in der jeweiligen Variablen stehen wird.

---

## Frage 4: JSON-Roundtrip & Fehleranalyse (15 Punkte)

Ein Kollege hat folgenden Code geschrieben, der ein Produkt-Objekt serialisieren, über ein Netzwerk senden und auf der Gegenseite wieder einlesen soll. Leider enthält der Code **mehrere Fehler**.

```javascript
const produkt = {
    name: "Mechanische Tastatur",
    preis: 89.90,
    aufLager: true,
    kategorie: "Elektronik"
};

// 1. In JSON umwandeln für die Übertragung
const jsonStr = JSON.stringify(Produkt);

// 2. Simulierter Empfang auf der Gegenseite
const empfangen = jsonStr.parse();

// 3. Preis aktualisieren
const empfangen.preis = 79.90;

// 4. Ausgabe mit Template String
console.log('Artikel: ${empfangen.name} – Preis: €${empfangen.preis}');

// 5. Prüfen ob auf Lager
if (empfangen.aufLager == "true") {
    console.log("Produkt ist verfügbar!");
}
```

**Aufgaben:**

**(a)** Finden und beschreiben Sie **alle** Fehler im obigen Code (Zeile für Zeile oder nach Nummerierung). Es gibt mindestens **vier** Fehler.

**(b)** Schreiben Sie den **komplett korrigierten Code** – lauffähig und mit korrektem Ergebnis.

**(c)** Erklären Sie: Warum ist der Vergleich `empfangen.aufLager == "true"` problematisch, auch wenn er mit `==` geschrieben ist? Welchen Wert hat `empfangen.aufLager` nach dem `JSON.parse()` und welchen Typ?

---

## Frage 5: Mini-Webanwendung – Suchfunktion (15 Punkte)

Sie sollen eine einfache Suchfunktion für eine Produktliste implementieren. Gegeben ist folgendes HTML:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Produktsuche</title>
    <script type="module" src="script.js"></script>
</head>
<body>
    <h1>Produktsuche</h1>
    <input type="text" id="search" placeholder="Suchbegriff eingeben...">
    <div id="results"></div>
</body>
</html>
```

Und folgendes Datenarray:

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
```

**Aufgaben:**

**(a)** Schreiben Sie eine Funktion `renderResults(liste)`, die ein Array von Produkten entgegennimmt und für jedes Produkt ein `<div>`-Element in den Container `#results` einfügt. Jedes `<div>` soll die CSS-Klasse `"product-card"` haben und folgenden Inhalt anzeigen:

```
Kopfhörer – €149.00 [Elektronik]
```

Verwenden Sie `document.createElement()` und Template Strings. Löschen Sie vorher den Inhalt von `#results`.

**(b)** Schreiben Sie eine Funktion `searchProducts()`, die:
   1. den aktuellen Wert aus dem Eingabefeld `#search` ausliest,
   2. das `produkte`-Array mit `filter()` und einer Arrow Function filtert – es sollen alle Produkte gefunden werden, deren **Name** den Suchbegriff enthält (Groß-/Kleinschreibung ignorieren!),
   3. das gefilterte Array an `renderResults()` übergibt.

**(c)** Registrieren Sie einen `input`-Event-Listener auf das Suchfeld, der bei **jeder Eingabe** `searchProducts()` aufruft. So wird die Ergebnisliste live aktualisiert.

**(d)** Rufen Sie `renderResults(produkte)` einmalig auf, sodass beim Laden der Seite **alle** Produkte angezeigt werden.

---

**Gesamtpunkte: 75**

Gutes Gelingen!
