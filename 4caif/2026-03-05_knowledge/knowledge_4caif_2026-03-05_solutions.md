# Wissenstest - JavaScript Grundlagen - Lösungen

**Klasse:** 4CAIF  
**Datum:** 05.03.2026

---

## Multiple Choice Lösungen (je 4 Punkte)

### 1. Variablendeklaration in JavaScript

- [x] `let` ist block-scoped
- [x] `const` muss bei der Deklaration initialisiert werden

**Erklärung:**

- `var` ist function-scoped, nicht block-scoped
- `const` Array-Inhalte können verändert werden (Mutable Binding), nur die Referenz ist unveränderlich

---

### 2. Temporal Dead Zone

- [x] Sie betrifft `let`- und `const`-Deklarationen
- [x] Der Zugriff auf eine Variable in der TDZ führt zu einem `ReferenceError`
- [x] Die TDZ erstreckt sich vom Start des Blocks bis zur Deklaration

**Erklärung:** Die TDZ gilt nicht für `var`, da `var` mit `undefined` initialisiert gehoistet wird.

---

### 3. Primitive Datentypen

- [x] `BigInt`
- [x] `Symbol`

**Erklärung:** `Array` und `Object` sind komplexe Typen (Objekte), keine Primitiven.

---

### 4. undefined vs. null

- [x] `typeof undefined` ergibt `"undefined"`
- [x] `undefined` bedeutet, dass eine Variable deklariert aber nicht initialisiert wurde

**Erklärung:**

- `typeof null` ergibt historisch bedingt `"object"` (Bug in JavaScript)
- `null` wird manuell zugewiesen, nicht automatisch

---

### 5. Funktionen in JavaScript

- [x] Function Declarations werden vollständig gehoistet
- [x] Arrow Functions sind ideal für Callbacks geeignet

**Erklärung:**

- Function Expressions werden nicht gehoistet
- Arrow Functions haben kein eigenes `this`

---

### 6. Falsy Values

- [x] `0`
- [x] `""` (leerer String)

**Erklärung:**

- `"0"` ist ein nicht-leerer String und damit truthy
- `[]` ist ein leeres Array (Objekt) und damit truthy

---

### 7. Type Coercion

- [x] `5 == "5"` ergibt `true`
- [x] `5 === "5"` ergibt `false`

**Erklärung:**

- `==` führt implizite Typkonvertierung durch
- `===` vergleicht strikt (Wert und Typ)

---

### 8. Arrays - push() Methode

- [x] Sie fügt ein Element am Ende des Arrays hinzu
- [x] Sie gibt die neue Länge des Arrays zurück
- [x] Sie verändert das ursprüngliche Array

**Erklärung:** `push()` ist eine mutierende Methode, die das Array direkt verändert.

---

### 9. Array sort() mit Comparator

- [x] Sortiert das Array in aufsteigender Reihenfolge
- [x] Der Comparator gibt einen negativen Wert zurück, wenn a < b
- [x] Die sort() Methode erstellt ein neues Array

**Erklärung:**

- `sort()` sortiert numerisch aufsteigend mit diesem Comparator
- `sort()` mutiert das ursprüngliche Array (erstellt kein neues)

---

### 10. Math.random() und Math.round()

- [x] `Math.random()` gibt eine Zahl zwischen 0 und 1 zurück (inklusive 0, exklusive 1)
- [x] `Math.round()` rundet zur nächsten Ganzzahl

**Erklärung:**

- `Math.random()` kann niemals 1 zurückgeben
- `Math.round(4.5)` ergibt 5 (nicht 4)

---

### 11. JSON Methoden

- [x] `JSON.stringify()` konvertiert ein JavaScript-Objekt in einen String
- [x] `JSON.parse()` konvertiert einen String in ein JavaScript-Objekt
- [x] `JSON.stringify()` kann auch mit primitiven Werten umgehen

**Erklärung:** JSON-Methoden funktionieren mit allen JSON-kompatiblen Werten, nicht nur Arrays.

---

### 12. Scope in Funktionen

- [x] Auf `outer` kann innerhalb der Funktion zugegriffen werden
- [x] `const local` ist block-scoped
- [x] Die Funktion kann auf globale Variablen zugreifen

**Erklärung:** `local` ist nur innerhalb des if-Blocks verfügbar (block-scoped).

---

## Freitextfragen Lösungen (je 10 Punkte)

### 13. Variablendeklaration und Best Practices (10 Punkte)

**Erwartete Antwort:**

**var:**

- Function-scoped (sichtbar in der gesamten Funktion)
- Wird gehoistet und mit `undefined` initialisiert
- Erlaubt Mehrfachdeklarationen
- Legacy, sollte vermieden werden

**let:**

- Block-scoped (sichtbar nur im aktuellen Block `{}`)
- Befindet sich in der TDZ bis zur Deklaration
- Kann neu zugewiesen werden
- Verwendung, wenn Neuzuweisung nötig ist

**const:**

- Block-scoped
- Muss bei Deklaration initialisiert werden
- Referenz ist unveränderlich (Immutable Binding)
- Array/Object-Inhalte können verändert werden

**Best Practices:**

- Standardmäßig `const` verwenden
- Nur `let` verwenden, wenn Neuzuweisung erforderlich
- `var` vermeiden
- Bessere Code-Qualität durch Absichtserklärung (const = "wird sich nicht ändern")

**Bewertung:**

- 2 Punkte: korrekte Erklärung von var
- 2 Punkte: korrekte Erklärung von let
- 2 Punkte: korrekte Erklärung von const
- 2 Punkte: Scope/Hoisting erklärt
- 2 Punkte: Best Practices und Begründung für const

---

### 14. Array-Manipulation (10 Punkte)

**Erwartete Antwort:**

**Schritt-für-Schritt Erklärung:**

1. **Konstanten definieren:**
   - `min = -2`, `max = 102`
   - `range = max - min = 104`

2. **Leeres Array erstellen:**
   - `const array = []`

3. **Schleife für 5 Zufallszahlen:**
   - For-Schleife läuft 5-mal (i = 0 bis 4)
   - Bei jedem Durchlauf wird eine Zufallszahl generiert

4. **Zufallszahl-Berechnung:**
   - `Math.random()` → Zufallszahl [0, 1)
   - `* range` → Skalierung auf [0, 104)
   - `+ min` → Verschiebung auf [-2, 102)
   - `Math.round()` → Rundung zur Ganzzahl
   - Ergebnis: Ganzzahl zwischen -2 und 102 (inklusive)

5. **Array befüllen:**
   - `array.push()` fügt Zahl am Ende hinzu
   - Array hat nach der Schleife 5 Elemente

6. **Erste Ausgabe:**
   - `console.log(array)` zeigt unsortiertes Array

7. **Array sortieren:**
   - `array.sort((a, b) => a - b)` sortiert aufsteigend
   - Comparator: negativ wenn a < b, positiv wenn a > b, 0 wenn gleich
   - Sortierung verändert das ursprüngliche Array

8. **Zweite Ausgabe:**
   - `console.log(array)` zeigt sortiertes Array

**Bewertung:**

- 3 Punkte: Korrekte Erklärung der Zufallszahlenberechnung
- 3 Punkte: Korrekte Erklärung der range-Berechnung
- 2 Punkte: Korrekte Erklärung von push()
- 2 Punkte: Korrekte Erklärung der sort()-Funktionsweise

---

### 15. Funktionen und Scope (10 Punkte)

**Teil a) Ausgabe (2 Punkte):**

```
65
```

**Berechnung:**

- `a = 10` (global)
- `b = 20` (in outer)
- `c = 30` (in inner)
- `x = 5` (Parameter von outer)
- `y = 5` (Parameter von inner, da `inner(x)` = `inner(5)`)
- `10 + 20 + 30 + 5 + 5 = 65`

**Teil b) Erklärung Scope und Closures (8 Punkte):**

**Verfügbare Variablen in `inner`:**

1. **`c` (lokale Variable):** In `inner` selbst deklariert, nur dort verfügbar
2. **`y` (Parameter):** Parameter der Funktion `inner`
3. **`b` (aus outer):** Verfügbar durch Lexical Scope / Closure
4. **`x` (aus outer Parameter):** Verfügbar durch Lexical Scope / Closure
5. **`a` (global):** Verfügbar durch globale Scope-Kette

**Scope-Erklärung:**

- **Block-Scope:** Variablen sind in ihrem Block und allen inneren Blöcken/Funktionen verfügbar
- **Function-Scope:** Parameter und lokale Variablen sind in der Funktion sichtbar
- **Lexical Scope (Statischer Scope):** Eine innere Funktion hat Zugriff auf Variablen der äußeren Funktion
- **Scope Chain:** JavaScript sucht Variablen zuerst im aktuellen Scope, dann im äußeren, bis zum globalen Scope

**Closure:**

- `inner` ist eine Closure, die Zugriff auf Variablen von `outer` hat
- Closures "merken" sich die Variablen des äußeren Scopes, auch wenn die äußere Funktion bereits beendet ist
- Ermöglicht Datenkapselung und private Variablen

**Bewertung:**

- 2 Punkte: Korrekte Ausgabe
- 3 Punkte: Korrekte Aufzählung aller verfügbaren Variablen
- 3 Punkte: Erklärung von Scope und Scope Chain
- 2 Punkte: Erklärung von Closures und Lexical Scope

---

**Gesamtpunkte: 78**
