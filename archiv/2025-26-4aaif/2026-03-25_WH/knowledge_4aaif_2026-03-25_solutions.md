# Knowledge Check – 4aaif – Lösungen

**Datum:** 24.03.2026  
**Themen:** JavaScript im Browser, Array-Methoden (filter, map, reduce)

---

## Multiple-Choice Lösungen

### Frage 1: Arrow Functions
- [x] a) Arrow Functions haben kein eigenes `this`
- [ ] b) Arrow Functions müssen immer mit `return` einen Wert zurückgeben
- [x] c) `(x) => x * 2` ist eine gültige Arrow Function
- [ ] d) Arrow Functions können nur mit `function` definiert werden

**Erklärung:** Arrow Functions haben kein eigenes `this`, sie erben es vom umgebenden Scope. Kurze Einzeiler brauchen kein explizites `return`.

---

### Frage 2: `filter()`-Methode
- [ ] a) Ein einzelnes Element aus dem Array
- [x] b) Ein neues Array mit allen Elementen, die die Bedingung erfüllen
- [ ] c) `true` oder `false`
- [ ] d) Die Anzahl der gefilterten Elemente

**Erklärung:** `filter()` gibt immer ein Array zurück, auch wenn es leer ist.

---

### Frage 3: `map()`-Methode
- [ ] a) `map()` verändert das ursprüngliche Array
- [x] b) `map()` gibt ein neues Array mit der gleichen Länge zurück
- [x] c) `map()` kann verwendet werden, um Objekte in Strings umzuwandeln
- [ ] d) `map()` benötigt immer zwei Parameter

**Erklärung:** `map()` ist pure – das Original bleibt unverändert. Man braucht nur die Callback-Funktion, Index und Array sind optional.

---

### Frage 4: `reduce()`-Methode
- [x] a) Ein Array auf einen einzelnen Wert zu reduzieren
- [ ] b) Alle Elemente eines Arrays zu filtern
- [x] c) Einen Akkumulator durch das Array zu iterieren
- [ ] d) Das Array in umgekehrter Reihenfolge zu sortieren

**Erklärung:** `reduce()` iteriert mit einem Akkumulator über alle Elemente und gibt am Ende einen einzigen Wert zurück.

---

### Frage 5: `document.getElementById()`
- [x] a) Gibt das erste Element mit der angegebenen ID zurück
- [ ] b) Gibt eine NodeList aller Elemente zurück
- [x] c) Gibt `null` zurück, wenn kein Element gefunden wird
- [ ] d) Kann nur auf `<div>`-Elemente angewendet werden

**Erklärung:** IDs sollten eindeutig sein, daher gibt es nur ein Element. Funktioniert mit allen HTML-Elementen.

---

### Frage 6: `onclick`-Attribut
- [x] a) Beim Klicken wird die Funktion `changeColor()` aufgerufen
- [ ] b) `onclick` muss immer im `<script>`-Tag definiert werden
- [ ] c) Der Code im `onclick`-Attribut wird beim Laden der Seite ausgeführt
- [x] d) Es können auch mehrere JavaScript-Anweisungen im `onclick` stehen

**Erklärung:** Der Code wird nur beim Klick ausgeführt. Mehrere Anweisungen mit Semikolon getrennt sind möglich.

---

### Frage 7: Element-Style ändern
- [x] a) `element.style.color = "red"`
- [ ] b) `element.color = "red"`
- [ ] c) `element.style.textColor = "red"`
- [ ] d) `element.setAttribute("color", "red")`

**Erklärung:** Die CSS-Eigenschaft `color` wird über `style.color` gesetzt.

---

### Frage 8: Method Chaining
- [ ] a) `[3, 4]`
- [x] b) `[6, 8]`
- [ ] c) `[2, 4, 6, 8]`
- [x] d) Ein Array mit 2 Elementen

**Erklärung:** Zuerst filter: `[3, 4]`, dann map (verdoppeln): `[6, 8]` – ein Array mit 2 Elementen.

---

### Frage 9: Inline-Scripts
- [x] a) Im `<head>`-Bereich
- [x] b) Im `<body>`-Bereich
- [x] c) Als Wert eines Event-Handlers wie `onclick`
- [ ] d) Inline-Scripts sind in HTML nicht erlaubt

**Erklärung:** Scripts können an vielen Orten stehen. `onclick`-Werte sind auch Inline-Scripts.

---

### Frage 10: JSON und Arrays
- [x] a) Nach dem Parsen ist `data[0].name` gleich `"Anna"`
- [x] b) `data.filter(p => p.alter > 16)` gibt `[{"name": "Anna", "alter": 17}]` zurück
- [x] c) JSON-Schlüssel müssen in Anführungszeichen stehen
- [x] d) `data.length` ist `2`

**Erklärung:** Alle Aussagen sind korrekt. JSON erfordert doppelte Anführungszeichen für Schlüssel.

---

## Freitext-Lösungen

### Frage 11: filter und map kombinieren (15 Punkte)

**Musterlösung:**

```js
const result = zahlen.filter(x => x > 10).map(x => x * 2);
// Ergebnis: [24, 40, 30]
```

**Bewertungsschema:**
- 5 Punkte: Korrekte `filter`-Bedingung (`x > 10`)
- 5 Punkte: Korrekte `map`-Transformation (`x * 2`)
- 5 Punkte: Richtige Verkettung (Chaining-Syntax) und Erklärung

**Erklärung:**
- `.filter(x => x > 10)` filtert alle Zahlen größer als 10: `[12, 20, 15]`
- `.map(x => x * 2)` verdoppelt jede Zahl: `[24, 40, 30]`

---

### Frage 12: Button-Handler implementieren (15 Punkte)

**Musterlösung:**

```js
function toggleHintergrund() {
    const box = document.getElementById("box");
    if (box.style.backgroundColor === "yellow") {
        box.style.backgroundColor = "white";
    } else {
        box.style.backgroundColor = "yellow";
    }
}
```

**Alternative (mit ternärem Operator):**

```js
function toggleHintergrund() {
    const box = document.getElementById("box");
    box.style.backgroundColor = box.style.backgroundColor === "yellow" ? "white" : "yellow";
}
```

**Bewertungsschema:**
- 5 Punkte: Korrektes Holen des Elements mit `getElementById`
- 5 Punkte: Richtige Bedingung/Logik für Toggle
- 5 Punkte: Korrektes Setzen von `style.backgroundColor` (oder `background`)

---

### Frage 13: Durchschnitt mit reduce berechnen (15 Punkte)

**Musterlösung:**

```js
const summe = noten.reduce((acc, note) => acc + note, 0);
const durchschnitt = summe / noten.length;
```

**Oder in einem Ausdruck:**

```js
const durchschnitt = noten.reduce((acc, note) => acc + note, 0) / noten.length;
// Ergebnis: 18/7 ≈ 2.57
```

**Bewertungsschema:**
- 5 Punkte: Korrekte `reduce`-Syntax mit Callback
- 5 Punkte: Startwert `0` und Erklärung
- 5 Punkte: Division durch `noten.length` für Durchschnitt

**Erklärung:**
1. **Akkumulator:** `acc` speichert die laufende Summe. Bei jedem Schritt wird die aktuelle `note` addiert.
2. **Startwert:** `0` ist wichtig, damit beim ersten Element korrekt addiert wird (statt `undefined + note`).
3. Nach der Summierung wird durch die Anzahl der Noten geteilt.

---

**Gesamtpunkte: 85**
