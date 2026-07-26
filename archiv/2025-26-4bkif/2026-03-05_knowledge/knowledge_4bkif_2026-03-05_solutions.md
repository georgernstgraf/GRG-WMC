# Wissensabfrage - 4BKIF - Lösungen

**Datum:** 05.03.2026

---

## Teil 1: Multiple Choice (48 Punkte)

### 1. JavaScript Runtimes (4 Punkte)

- [x] B) Node.js
- [x] C) Webbrowser (Chrome, Firefox, etc.)
- [x] D) Deno

*Begründung:* JavaScript kann in verschiedenen Runtime-Umgebungen ausgeführt werden: Node.js und Deno sind serverseitige Runtimes, Browser führen JavaScript clientseitig aus. Word kann kein JavaScript ausführen.

---

### 2. Datentypen in JavaScript (4 Punkte)

- [x] A) string
- [x] C) number
- [x] D) bigint

*Begründung:* `string`, `number` und `bigint` sind primitive Datentypen. `array` ist ein Objekt-Typ, kein primitiver Datentyp.

---

### 3. Variable Deklaration (4 Punkte)

- [x] A) Mit `const` deklarierte Variablen können nicht neu zugewiesen werden
- [x] B) `let` erlaubt eine spätere Neuzuweisung des Wertes
- [x] C) `const` Variablen müssen bei der Deklaration initialisiert werden
- [x] D) `let` Variablen haben Block-Scope

*Begründung:* Alle Aussagen sind korrekt. `const` ist für Konstanten (muss initialisiert werden, keine Neuzuweisung), `let` für veränderliche Variablen mit Block-Scope.

---

### 4. Vergleichsoperatoren (4 Punkte)

- [x] B) `===` prüft sowohl Wert als auch Typ ohne Konvertierung
- [x] C) `"5" == 5` ergibt `true`

*Begründung:* `==` führt Typkonvertierung durch (daher ist `"5" == 5` true), `===` prüft strikt ohne Konvertierung (daher ist `"5" === 5` false).

---

### 5. Functions - Grundlagen (4 Punkte)

- [x] A) Funktionen können Werte zurückgeben mit dem `return`-Keyword
- [x] C) Funktionen können auf Variablen aus dem äußeren Scope zugreifen

*Begründung:* Funktionen geben Werte mit `return` zurück und haben Zugriff auf den äußeren Scope (Closure). Sie können anonym sein (Arrow Functions) und geben nur einen Wert zurück.

---

### 6. Scope in JavaScript (4 Punkte)

- [x] C) Es tritt ein Fehler auf (ReferenceError)

*Begründung:* Dies ist die "Temporal Dead Zone". Die Variable `x` wird im Funktions-Scope mit `let` deklariert, aber vor der Deklaration verwendet. JavaScript erkennt dies und wirft einen ReferenceError.

---

### 7. JSON (4 Punkte)

- [x] A) JSON steht für "JavaScript Object Notation"
- [x] B) `JSON.stringify()` konvertiert ein JavaScript-Objekt in einen String
- [x] C) `JSON.parse()` konvertiert einen JSON-String in ein JavaScript-Objekt
- [x] D) In JSON müssen Property-Namen in Anführungszeichen stehen

*Begründung:* Alle Aussagen sind korrekt. JSON ist ein String-Format, Property-Namen müssen in Anführungszeichen stehen (im Gegensatz zu JavaScript-Objekten).

---

### 8. Scope und Variablen (4 Punkte)

- [x] B) `false`

*Begründung:* Die `const kleiner = true` im if-Block erstellt eine neue lokale Variable im Block-Scope, die die äußere Variable `kleiner` nicht verändert. Nach dem if-Block bleibt `kleiner` weiterhin `false`.

---

### 9. Multiple Deklaration und Zuweisung (4 Punkte)

- [x] B) Alle vier Variablen (`a`, `b`, `c`, `d`) haben den Wert 81
- [x] D) Die Zuweisung wird von rechts nach links ausgewertet

*Begründung:* Die Zuweisungskette wird von rechts nach links ausgewertet: `d = 81` → `c = 81` → `b = 81` → `a = 81`. Alle Variablen erhalten den Wert 81.

---

### 10. TypeScript vs JavaScript (4 Punkte)

- [x] A) TypeScript ist eine eigenständige Programmiersprache, die zu JavaScript kompiliert
- [x] B) TypeScript fügt optionale statische Typisierung hinzu
- [x] D) TypeScript-Dateien haben normalerweise die Endung `.ts`

*Begründung:* TypeScript ist eine Obermenge von JavaScript mit Typisierung, die zu JavaScript kompiliert werden muss. Browser können TypeScript nicht direkt ausführen.

---

### 11. Kommentare in JavaScript (4 Punkte)

- [x] B) `// Kommentar`
- [x] D) `/* Kommentar */`

*Begründung:* JavaScript unterstützt einzeilige Kommentare mit `//` und mehrzeilige Kommentare mit `/* */`. `<!-- -->` ist HTML, `#` ist Python/Ruby.

---

### 12. typeof Operator (4 Punkte)

- [x] B) `"bigint"`

*Begründung:* `23n` ist ein BigInt-Literal (erkennbar am `n`-Suffix), daher gibt `typeof` `"bigint"` zurück.

---

## Teil 2: Freitext-Fragen (30 Punkte)

### 13. JavaScript-Funktionen und Scope (10 Punkte)

**Erwartete Antwort:**

1. **Lokaler Scope vs. äußerer Scope:**
   - Der lokale Scope (Function Scope) umfasst Variablen, die innerhalb einer Funktion deklariert wurden
   - Der äußere Scope (Outer Scope) umfasst Variablen, die außerhalb der Funktion deklariert wurden
   - Eine Funktion kann auf beide Scopes zugreifen (Closure)

2. **Shadowing:**
   - Wenn eine Variable sowohl lokal als auch im äußeren Scope existiert, wird die lokale Variable verwendet
   - Die lokale Variable "verschattet" (shadowing) die äußere Variable
   - Die äußere Variable wird nicht verändert

3. **Beispiel:**
```javascript
let x = 10;  // äußerer Scope

function beispiel() {
    let x = 20;  // lokaler Scope (shadowing)
    console.log(x);  // gibt 20 aus
}

beispiel();
console.log(x);  // gibt 10 aus (äußere Variable unverändert)
```

**Bewertung:**
- 3 Punkte für korrekte Erklärung der Scopes
- 3 Punkte für korrekte Erklärung des Shadowing-Verhaltens
- 4 Punkte für korrektes, funktionierendes Beispiel

---

### 14. JSON in der Praxis (10 Punkte)

**Erwartete Antwort:**

1. **Warum nicht direkt senden?**
   - JavaScript-Objekte sind komplexe Datenstrukturen im Arbeitsspeicher
   - Netzwerkübertragungen erfordern Text/String-Formate
   - Objekte können nicht über HTTP direkt übertragen werden
   - JSON ist ein standardisiertes Textformat für den Datenaustausch

2. **JSON-Methoden:**
   - `JSON.stringify(objekt)`: Konvertiert ein JavaScript-Objekt in einen JSON-String
   - `JSON.parse(jsonString)`: Konvertiert einen JSON-String zurück in ein JavaScript-Objekt

3. **Konkretes Beispiel:**
```javascript
// Objekt erstellen
const person = {
    name: "Max Mustermann",
    alter: 25
};

// Für Übertragung konvertieren
const jsonString = JSON.stringify(person);
// Ergebnis: '{"name":"Max Mustermann","alter":25}'

// Am Ziel zurück konvertieren
const empfangenePerson = JSON.parse(jsonString);
console.log(empfangenePerson.name);  // "Max Mustermann"
console.log(empfangenePerson.alter); // 25
```

**Bewertung:**
- 3 Punkte für korrekte Begründung
- 3 Punkte für korrekte Beschreibung der Methoden
- 4 Punkte für funktionierendes Beispiel mit beiden Konvertierungen

---

### 15. Variable Deklaration: let vs const (10 Punkte)

**Erwartete Antwort:**

1. **Was passiert?**
   - Es tritt ein TypeError auf
   - `const` deklariert eine Konstante, die nicht neu zugewiesen werden kann
   - Die zweite Zeile `x = 10;` versucht, die Konstante zu ändern → Fehler
   - Fehlermeldung: "Assignment to constant variable"

2. **Wann const vs. let:**
   - **const:** Wenn der Wert sich nie ändern soll (Konstanten, Konfigurationen, einmalige Referenzen)
   - **let:** Wenn der Wert sich ändern muss (Zähler, Schleifenvariablen, veränderliche Daten)
   - Best Practice: Standardmäßig `const` verwenden, nur bei Bedarf zu `let` wechseln

3. **Beispiele:**

**const sinnvoll:**
```javascript
const PI = 3.14159;
const API_URL = "https://api.example.com";
const MAX_STUDENTS = 30;

// Diese Werte ändern sich nie
```

**let notwendig:**
```javascript
let counter = 0;
counter = counter + 1;  // Muss verändert werden

let userName = "";
userName = "Max";  // Wird später gesetzt

for (let i = 0; i < 10; i++) {
    // i muss sich in jeder Iteration ändern
}
```

**Bewertung:**
- 3 Punkte für korrekte Fehleranalyse
- 3 Punkte für korrekte Unterscheidung const/let
- 4 Punkte für je ein passendes, funktionierendes Beispiel (2 Punkte pro Beispiel)

---

**Gesamtpunkte: 78**
