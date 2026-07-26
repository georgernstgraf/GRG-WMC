# Knowledge Check – 4BKIF – Lösungen

**Datum:** 26. März 2026  
**Punkte:** 85 (40 MC + 45 Freitext)

---

## Teil 1: Multiple Choice – Lösungen

### Frage 1: Arrow Functions

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ❌ | Arrow Functions haben **kein** eigenes `this`-Binding, sie erben `this` vom umgebenden Scope. |
| b | ✅ | Kurze Syntax ohne Klammern für Single-Expression-Returns ist gültig. |
| c | ✅ | Arrow Functions sind ideal als Callbacks für `filter()`, `map()`, `reduce()` etc. |
| d | ❌ | Bei einzelnen Expressions sind keine `{}` nötig; der Ausdruck wird implizit zurückgegeben. |

**Punkte:** 4 (b, c korrekt angekreuzt; a, d korrekt nicht angekreuzt)

---

### Frage 2: filter()-Methode

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | `filter()` gibt alle Elemente zurück, für die der Callback `true` ergibt: `[4, 5, 6]`. |
| b | ✅ | Der Callback sollte einen Boolean zurückgeben (oder truthy/falsy). |
| c | ❌ | `filter()` verändert das ursprüngliche Array **nicht**, es erstellt ein neues. |
| d | ✅ | Arrow Functions sind die häufigste Schreibweise für `filter()`-Callbacks. |

**Punkte:** 4

---

### Frage 3: map() vs forEach()

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | `forEach()` gibt immer `undefined` zurück und wird für Seiteneffekte verwendet. |
| b | ✅ | `map()` transformiert jedes Element und sammelt die Ergebnisse in einem neuen Array. |
| c | ❌ | Beide Methoden verändern das ursprüngliche Array **nicht** (nur der Callback könnte es tun). |
| d | ✅ | `map()` ist ideal für Transformationen, wenn man die Daten weiterverarbeiten möchte. |

**Punkte:** 4

---

### Frage 4: slice() vs splice()

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | `slice()` erstellt eine Kopie eines Array-Ausschnitts ohne das Original zu verändern. |
| b | ✅ | `splice()` kann Elemente entfernen, einfügen oder beides gleichzeitig. |
| c | ✅ | `slice(start, end)` gibt Elemente von `start` bis `end - 1` zurück (exklusiv end). |
| d | ✅ | `splice()` gibt ein Array mit den entfernten Elementen zurück. |

**Punkte:** 4

---

### Frage 5: reduce()-Methode

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | `reduce()` reduziert ein Array auf einen einzelnen Wert (Akkumulator). |
| b | ❌ | Der erste Parameter ist der **Akkumulator**, der zweite der **aktuelle Wert**. |
| c | ✅ | Typische Anwendungen: Summen, Durchschnitte, Maxima, Gruppierungen. |
| d | ❌ | Der Initialwert ist optional; ohne ihn wird das erste Array-Element verwendet. |

**Punkte:** 4

---

### Frage 6: Truthy und Falsy

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | `0` ist ein Falsy-Wert. |
| b | ✅ | Der leere String `""` ist Falsy. |
| c | ❌ | `"false"` ist ein nicht-leerer String und damit **Truthy**! |
| d | ✅ | `null` ist ein Falsy-Wert. |

**Punkte:** 4

**Alle Falsy-Werte:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

---

### Frage 7: Template Strings

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | Backticks `` ` `` sind das Kennzeichen von Template Strings. |
| b | ✅ | Mit `${...}` können Variablen und Ausdrücke interpoliert werden. |
| c | ✅ | Template Strings können mehrzeilig sein ohne explizite `\n` oder String-Konkatenation. |
| d | ❌ | In `${...}` können **beliebige Ausdrücke** stehen, inkl. Funktionsaufrufe, Berechnungen, ternäre Operatoren. |

**Punkte:** 4

---

### Frage 8: Ternärer Operator

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | Da `17 >= 18` `false` ist, wird der Wert nach dem `:` zurückgegeben: `"minderjährig"`. |
| b | ✅ | Die Syntax ist `bedingung ? ausdruckWennWahr : ausdruckWennFalsch`. |
| c | ❌ | Der ternäre Operator kann durch `if-else if-else` ersetzt werden, ist aber für einfache Bedingungen gedacht. |
| d | ✅ | Beispiel: `` `${alter >= 18 ? "erwachsen" : "jugendlich"}` `` ist gültig. |

**Punkte:** 4

---

### Frage 9: JSON.stringify() und JSON.parse()

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | `JSON.stringify(obj)` serialisiert ein Objekt zu einem String. |
| b | ✅ | `JSON.parse(str)` deserialisiert einen String zu einem Objekt. |
| c | ✅ | In JSON müssen Schlüssel immer in doppelten Anführungszeichen stehen. |
| d | ❌ | `JSON.stringify()` funktioniert problemlos mit verschachtelten Objekten und Arrays. |

**Punkte:** 4

---

### Frage 10: Type Coercion

| Option | Antwort | Begründung |
|--------|---------|------------|
| a | ✅ | `+` mit String führt zu String-Konkatenation: `5 + "3" = "53"`. |
| b | ✅ | `-` mit String versucht numerische Konvertierung: `5 - 3 = 2`. |
| c | ✅ | `*` konvertiert beide Operanden zu Zahlen: `10 * 2 = 20`. |
| d | ✅ | `"abc"` kann nicht zu einer Zahl konvertiert werden: `NaN`. |

**Punkte:** 4

---

## Teil 2: Freitext-Fragen – Lösungen

### Frage 11: filter() und map() kombinieren (15 Punkte)

**Musterlösung:**

```javascript
const personen = [
    { name: "Anna", alter: 25, stadt: "Wien" },
    { name: "Bernd", alter: 17, stadt: "Graz" },
    { name: "Clara", alter: 30, stadt: "Linz" },
    { name: "David", alter: 16, stadt: "Salzburg" },
    { name: "Eva", alter: 22, stadt: "Innsbruck" },
];

const ergebnis = personen
    .filter(p => p.alter >= 18)
    .map(p => `${p.name} aus ${p.stadt}`);

console.log(ergebnis);
// ["Anna aus Wien", "Clara aus Linz", "Eva aus Innsbruck"]
```

**Bewertungsschlüssel:**

| Kriterium | Punkte |
|-----------|--------|
| Korrekte Verwendung von `filter()` mit Bedingung `alter >= 18` | 5 |
| Korrekte Verwendung von `map()` mit Template String | 5 |
| Korrekte Method Chaining (Verkettung) | 3 |
| Korrektes Ergebnis | 2 |

---

### Frage 12: reduce() für Durchschnitt (15 Punkte)

**Musterlösung:**

```javascript
const noten = [2, 3, 1, 4, 2, 5, 3];

const durchschnitt = noten.reduce((summe, note) => summe + note, 0) / noten.length;

console.log(durchschnitt);
// 2.857142857142857
```

**Alternative (alles in reduce):**

```javascript
const durchschnitt = noten.reduce((acc, note, idx, arr) => {
    acc += note;
    if (idx === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
}, 0);
```

**Bewertungsschlüssel:**

| Kriterium | Punkte |
|-----------|--------|
| Korrekte Verwendung von `reduce()` | 5 |
| Richtige Summenbildung im Akkumulator | 4 |
| Korrekte Division durch `length` | 4 |
| Initialwert `0` angegeben | 2 |

---

### Frage 13: Truthy/Falsy erklären (15 Punkte)

**Musterlösung:**

#### 1. Alle Falsy-Werte in JavaScript:

- `false`
- `0`
- `-0`
- `0n` (BigInt Zero)
- `""` (leerer String)
- `null`
- `undefined`
- `NaN`

#### 2. Code-Beispiele:

**Falsy-Beispiel:**
```javascript
const wert = 0;
if (wert) {
    console.log("Wird nicht ausgeführt");
} else {
    console.log("0 ist falsy");  // ← Dieser Zweich wird ausgeführt
}
```

**Truthy-Beispiel:**
```javascript
const name = "Max";
if (name) {
    console.log("Name vorhanden");  // ← Wird ausgeführt
} else {
    console.log("Wird nicht ausgeführt");
}
```

#### 3. Erklärung zu `Boolean("false")`:

Der String `"false"` ist ein **nicht-leerer String**. In JavaScript werden alle nicht-leeren Strings als **truthy** evaluiert, unabhängig von ihrem Inhalt. Der Stringinhalt `"false"` ist nur Text, kein boolescher Wert. Erst `Boolean(false)` (ohne Anführungszeichen) ergibt `false`.

**Bewertungsschlüssel:**

| Kriterium | Punkte |
|-----------|--------|
| Alle 8 Falsy-Werte korrekt aufgelistet | 5 |
| Korrektes Falsy-Code-Beispiel mit `if` | 3 |
| Korrektes Truthy-Code-Beispiel mit `if` | 3 |
| Richtige Erklärung für `Boolean("false")` | 4 |

---

## Punkteübersicht

| Teil | Max. Punkte |
|------|-------------|
| MC-Fragen (10 × 4) | 40 |
| Freitext Frage 11 | 15 |
| Freitext Frage 12 | 15 |
| Freitext Frage 13 | 15 |
| **Gesamt** | **85** |

**Note (Beispiel):**

| % | Note |
|---|------|
| ≥ 89% | Sehr gut (1) |
| ≥ 76% | Gut (2) |
| ≥ 63% | Befriedigend (3) |
| ≥ 50% | Genügend (4) |
| < 50% | Nicht genügend (5) |
