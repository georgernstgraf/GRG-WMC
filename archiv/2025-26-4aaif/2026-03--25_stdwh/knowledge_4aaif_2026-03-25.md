# Knowledge Check – 4aaif

**Datum:** 25.03.2026
**Themen:** JavaScript im Browser, Array-Methoden (filter, map, reduce)

---

## Multiple-Choice Fragen (10 × 4 Punkte = 40 Punkte)

Jede Frage hat 4 Antwortmöglichkeiten. Kreuze alle zutreffenden Antworten an.
Du erhältst 1 Punkt für jede Option, die du richtig behandelst (angekreuzt wenn richtig, nicht angekreuzt wenn falsch).

Falls du eine Frage als mehrdeutig empfindest, kannst du **–** ankreuzen und kurz begründen.

---

### Frage 1: Arrow Functions

Welche der folgenden Aussagen zu Arrow Functions sind richtig?

- [ ] a) Arrow Functions haben kein eigenes `this`
- [ ] b) Arrow Functions müssen immer mit `return` einen Wert zurückgeben
- [ ] c) `(x) => x * 2` ist eine gültige Arrow Function
- [ ] d) Arrow Functions können nur mit `function` definiert werden

---

### Frage 2: `filter()`-Methode

Was gibt `filter()` zurück?

- [ ] a) Ein einzelnes Element aus dem Array
- [ ] b) Ein neues Array mit allen Elementen, die die Bedingung erfüllen
- [ ] c) `true` oder `false`
- [ ] d) Die Anzahl der gefilterten Elemente

---

### Frage 3: `map()`-Methode

Welche Aussagen zu `map()` sind richtig?

- [ ] a) `map()` verändert das ursprüngliche Array
- [ ] b) `map()` gibt ein neues Array mit der gleichen Länge zurück
- [ ] c) `map()` kann verwendet werden, um Objekte in Strings umzuwandeln
- [ ] d) `map()` benötigt immer zwei Parameter

---

### Frage 4: `reduce()`-Methode

Was ist der Zweck von `reduce()`?

- [ ] a) Ein Array auf einen einzelnen Wert zu reduzieren
- [ ] b) Alle Elemente eines Arrays zu filtern
- [ ] c) Einen Akkumulator durch das Array zu iterieren
- [ ] d) Das Array in umgekehrter Reihenfolge zu sortieren

---

### Frage 5: `document.getElementById()`

Welche Aussagen sind richtig?

- [ ] a) Gibt das erste Element mit der angegebenen ID zurück
- [ ] b) Gibt eine NodeList aller Elemente zurück
- [ ] c) Gibt `null` zurück, wenn kein Element gefunden wird
- [ ] d) Kann nur auf `<div>`-Elemente angewendet werden

---

### Frage 6: `onclick`-Attribut

Was passiert bei `<button onclick="changeColor()">Klick</button>`?

- [ ] a) Beim Klicken wird die Funktion `changeColor()` aufgerufen
- [ ] b) `onclick` muss immer im `<script>`-Tag definiert werden
- [ ] c) Der Code im `onclick`-Attribut wird beim Laden der Seite ausgeführt
- [ ] d) Es können auch mehrere JavaScript-Anweisungen im `onclick` stehen

---

### Frage 7: Element-Style ändern

Wie kann man die Textfarbe eines Elements mit JavaScript ändern?

- [ ] a) `element.style.color = "red"`
- [ ] b) `element.color = "red"`
- [ ] c) `element.style.textColor = "red"`
- [ ] d) `element.setAttribute("color", "red")`

---

### Frage 8: Method Chaining

Was ist das Ergebnis von:

```js
const result = [1, 2, 3, 4]
  .filter(x => x > 2)
  .map(x => x * 2);
```

- [ ] a) `[3, 4]`
- [ ] b) `[6, 8]`
- [ ] c) `[2, 4, 6, 8]`
- [ ] d) Ein Array mit 2 Elementen

---

### Frage 9: Inline-Scripts

Wo können Inline-Scripts im HTML platziert werden?

- [ ] a) Im `<head>`-Bereich
- [ ] b) Im `<body>`-Bereich
- [ ] c) Als Wert eines Event-Handlers wie `onclick`
- [ ] d) Inline-Scripts sind in HTML nicht erlaubt

---

### Frage 10: JSON und Arrays

Gegeben ist folgendes JSON:

```json
[
  {"name": "Anna", "alter": 17},
  {"name": "Ben", "alter": 16}
]
```

Welche Aussagen sind richtig?

- [ ] a) Nach dem Parsen ist `data[0].name` gleich `"Anna"`
- [ ] b) `data.filter(p => p.alter > 16)` gibt `[{"name": "Anna", "alter": 17}]` zurück
- [ ] c) JSON-Schlüssel müssen in Anführungszeichen stehen
- [ ] d) `data.length` ist `2`

---

## Freitext-Fragen (3 × 15 Punkte = 45 Punkte)

### Frage 11: filter und map kombinieren (15 Punkte)

Gegeben ist folgendes Array:

```js
const zahlen = [5, 12, 8, 20, 3, 15];
```

Schreibe **einen einzigen Ausdruck** (Chaining), der:

1. Alle Zahlen größer als 10 filtert
2. Die gefilterten Zahlen verdoppelt

Erkläre kurz, was jeder Teil des Ausdrucks bewirkt.

**Antwort:**

```
// Dein Code hier:


// Erklärung:

```

---

### Frage 12: Button-Handler implementieren (15 Punkte)

Schreibe den JavaScript-Code für eine Funktion `toggleHintergrund()`, die:

1. Das Element mit der ID `box` holt
2. Den Hintergrund auf `"yellow"` setzt, wenn er aktuell `"white"` ist
3. Den Hintergrund auf `"white"` setzt, wenn er aktuell nicht `"white"` ist

Du darfst annehmen, dass das Element existiert.

**Antwort:**

```js
// Dein Code hier:

```

---

### Frage 13: Durchschnitt mit reduce berechnen (15 Punkte)

Gegeben ist folgendes Array:

```js
const noten = [2, 3, 1, 4, 2, 5, 1];
```

Schreibe einen Ausdruck mit `reduce()`, der den **Durchschnitt** der Noten berechnet.
Erkläre dabei:

1. Was ist der Akkumulator in deinem Code?
2. Welchen Startwert verwendest du und warum?

**Antwort:**

```js
// Dein Code hier:


// Erklärung:

```

---

**Gesamtpunkte: 85**

---

*Gutes Gelingen!*
