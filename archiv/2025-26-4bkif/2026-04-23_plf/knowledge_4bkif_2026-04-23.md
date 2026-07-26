# Knowledge Check -- 4BKIF

**Datum:** 2026-04-23  
**Punkte gesamt:** 85  
**Zeit:** ca. 40 Minuten

---

## Teil 1: Multiple-Choice (10 Fragen, je 4 Punkte = 40 Punkte)

Jede Frage hat **vier Antwortmöglichkeiten**. Pro Frage gibt es 4 Punkte:
- **1 Punkt** für jede Option, die du korrekt behandelst (richtig angekreuzt ODER richtigerweise freigelassen).
- Es können **keine, eine oder mehrere** Antworten pro Frage korrekt sein.

Wenn du eine Antwort als mehrdeutig oder kontextabhängig einschätzt, kannst du **`-`** ankreuzen
und kurz begründen, warum. Wird die Begründung anerkannt, erhältst du den vollen Punkt für
diese Option.

---

### Frage 1: ES Modules

Gegeben ist folgendes HTML:

```html
<script type="module" src="app.js"></script>
```

Welche Aussagen sind korrekt?

- [ ] a) `app.js` wird als ES-Modul geladen und kann `import`-Anweisungen enthalten.
- [ ] b) Alle Variablen und Funktionen in `app.js` sind automatisch globale Eigenschaften des `window`-Objekts.
- [ ] c) Das `type="module"` Attribut bewirkt, dass das Script automatisch im Strict Mode ausgeführt wird.
- [ ] d) Ein ES-Modul kann nur andere Module importieren, keine JSON-Dateien.

---

### Frage 2: `typeof` -- Edge Cases

Welche Aussagen zum `typeof`-Operator sind korrekt?

- [ ] a) `typeof null` ergibt `"null"`.
- [ ] b) `typeof NaN` ergibt `"number"`.
- [ ] c) `typeof undefined` ergibt `"undefined"`.
- [ ] d) `typeof 42n` ergibt `"bigint"`.

---

### Frage 3: `const` mit Objekten

```javascript
const user = { name: "Anna", alter: 22 };
```

Welche Aussagen sind korrekt?

- [ ] a) `user = { name: "Bernd", alter: 30 };` funktioniert problemlos, weil nur die Eigenschaften geändert werden.
- [ ] b) `user.name = "Bernd";` ist erlaubt und ändert den Namen auf "Bernd".
- [ ] c) `const` verhindert die Neu-Zuweisung der Variablen, aber nicht die Änderung von Objekt-Eigenschaften.
- [ ] d) `user.alter = 23;` wirft einen TypeError zur Laufzeit.

---

### Frage 4: Truthy und Falsy -- Fallen

Bewerte, welche der folgenden Ausdrücke `true` ergeben:

- [ ] a) `Boolean("0")` ergibt `true`.
- [ ] b) `Boolean([])` ergibt `false`, da ein leeres Array leer ist.
- [ ] c) `Boolean(-0)` ergibt `false`.
- [ ] d) `Boolean("false")` ergibt `true`.

---

### Frage 5: Type Coercion

Welche Aussagen sind korrekt?

- [ ] a) `null + 1` ergibt `1`.
- [ ] b) `undefined + 1` ergibt `NaN`.
- [ ] c) `NaN === NaN` ergibt `true`, da beide Seiten denselben Wert haben.
- [ ] d) `"5" - 3` ergibt `2`.

---

### Frage 6: `sort()` -- Verhalten

Gegeben: `let zahlen = [10, 9, 80, 3];`

Welche Aussagen sind korrekt?

- [ ] a) `zahlen.sort()` sortiert numerisch aufsteigend zu `[3, 9, 10, 80]`.
- [ ] b) `zahlen.sort()` verändert das ursprüngliche Array (Mutation).
- [ ] c) `zahlen.sort()` gibt ein **neues** Array zurück und lässt `zahlen` unverändert.
- [ ] d) `zahlen.sort((a, b) => a - b)` sortiert korrekt numerisch aufsteigend.

---

### Frage 7: `slice()` vs `splice()`

Gegeben: `let arr = [10, 20, 30, 40, 50];`

Welche Aussagen sind korrekt?

- [ ] a) `arr.slice(1, 3)` gibt `[20, 30]` zurück und verändert `arr` nicht.
- [ ] b) `arr.splice(1, 2)` gibt `[20, 30]` zurück und entfernt diese Elemente aus `arr`.
- [ ] c) `arr.splice(2, 0, 25)` fügt `25` an Index 2 ein, ohne Elemente zu entfernen.
- [ ] d) `slice()` und `splice()` verändern beide das ursprüngliche Array.

---

### Frage 8: Template Strings

Welche Aussagen zu Template Strings (Template Literals) sind korrekt?

- [ ] a) Template Strings verwenden Backticks (`` ` ``) statt einfacher oder doppelter Anführungszeichen.
- [ ] b) In Template Strings können mehrzeilige Strings ohne `\n` geschrieben werden.
- [ ] c) In Template Strings können **nur** Variablen, aber keine Ausdrücke (wie `a + b`) innerhalb von `${}` verwendet werden.
- [ ] d) `'Hallo ${name}'` (mit einfachen Anführungszeichen) funktioniert genauso wie `` `Hallo ${name}` ``.

---

### Frage 9: TLS und Zertifikate

Welche Aussagen zu TLS/SSL und HTTPS sind korrekt?

- [ ] a) TLS (Transport Layer Security) ist der Nachfolger von SSL und verschlüsselt die Kommunikation zwischen Client und Server.
- [ ] b) HTTPS verwendet standardmäßig Port 443, während HTTP Port 80 nutzt.
- [ ] c) Let's Encrypt ist eine Zertifizierungsstelle (CA), die kostenlose TLS-Zertifikate ausstellt.
- [ ] d) Ein CSR (Certificate Signing Request) ist das fertige Zertifikat, das vom Server an den Browser gesendet wird.

---

### Frage 10: `window` und Modul-Scope

Welche Aussagen sind korrekt?

- [ ] a) In einem regulären `<script>` (ohne `type="module"`) ist eine Funktion `function hallo() {}` über `window.hallo` aufrufbar.
- [ ] b) In einem `<script type="module">` ist `document.querySelector()` weiterhin verfügbar.
- [ ] c) `window.renderPersons = renderPersons;` macht eine Modul-Funktion global im Browser verfügbar.
- [ ] d) `console.log` ist in ES-Modulen nicht verfügbar, da es nicht explizit importiert wurde.

---

## Teil 2: Freitext-Fragen (3 Fragen, je 15 Punkte = 45 Punkte)

### Frage 11: ES Modules und `window`-Scope (15 Punkte)

Gegeben ist folgende HTML-Datei `index.html`:

```html
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>Module Demo</title></head>
<body>
    <button onclick="ladeDaten()">Daten laden</button>
    <div id="ausgabe"></div>
    <script type="module" src="app.js"></script>
</body>
</html>
```

Und die Datei `app.js`:

```javascript
import personen from "./personen.json" with { type: "json" };

function ladeDaten() {
    const div = document.querySelector("#ausgabe");
    div.textContent = `${personen.length} Personen geladen.`;
}
```

**(a)** Wenn man auf den Button klickt, passiert nichts im Browser. Erkläre **warum**. (3 Punkte)

**(b)** Beschreibe **zwei** verschiedene Lösungswege, um das Problem zu beheben. (4 Punkte)

**(c)** Erkläre den Unterschied zwischen `<script src="app.js">` und `<script type="module" src="app.js">` bezüglich der Sichtbarkeit von Funktionen im globalen Scope. (4 Punkte)

**(d)** Was genau bewirkt die Zeile `import personen from "./personen.json" with { type: "json" };`? Erkläre jeden Teil der Anweisung. (4 Punkte)

---

### Frage 12: Truthy/Falsy und Type Coercion (15 Punkte)

**(a)** Bewerte die folgenden **10 Ausdrücke**. Gib für jeden an, ob er `true` oder `false` ergibt (bzw. welchen Wert er ergibt, wenn kein Boolean). (je 1 Punkt = 10 Punkte)

| # | Ausdruck | `true` / `false` / Wert |
|---|----------|------------------------|
| 1 | `Boolean("0")` | |
| 2 | `NaN === NaN` | |
| 3 | `null == undefined` | |
| 4 | `"5" + 3` | |
| 5 | `"5" - 3` | |
| 6 | `[] == false` | |
| 7 | `!!"false"` | |
| 8 | `null === undefined` | |
| 9 | `Boolean("")` | |
| 10 | `0 === false` | |

**(b)** Liste alle **8 falsy-Werte** in JavaScript auf. (3 Punkte)

**(c)** Erkläre, warum `Boolean("false")` den Wert `true` ergibt, obwohl das Wort "false" enthalten ist. (2 Punkte)

---

### Frage 13: DOM-Anwendung -- Bücherverwaltung mit Favoriten (15 Punkte)

Gegeben ist folgender Datensatz:

```javascript
const buecher = [
    { id: 1, titel: "Der Process", autor: "Franz Kafka", jahr: 1925 },
    { id: 2, titel: "1984", autor: "George Orwell", jahr: 1949 },
    { id: 3, titel: "Die Verwandlung", autor: "Franz Kafka", jahr: 1915 },
    { id: 4, titel: "Herr der Fliegen", autor: "William Golding", jahr: 1954 }
];

let favoriten = [];
```

Und das HTML:

```html
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>Bücher</title></head>
<body>
    <div id="booklist"></div>
    <script type="module" src="app.js"></script>
</body>
</html>
```

**(a)** Schreibe die Funktion `renderBooks()`, die für jedes Buch ein `<div class="book-card">` erstellt und in `#booklist` einfügt. Jede Karte zeigt **Titel**, **Autor** und **Jahr** sowie einen Button zum Umschalten des Favoriten-Status. Der Button-Text soll `"★ Favorit"` lauten, wenn das Buch ein Favorit ist, sonst `"☆ Favorit"`. (5 Punkte)

**(b)** Schreibe die Funktion `toggleFavorite(id)`, die die übergebene `id` zu `favoriten` hinzufügt (wenn noch nicht enthalten) oder daraus entfernt (wenn bereits enthalten). Rufe danach `renderBooks()` auf, um die Ansicht zu aktualisieren. (4 Punkte)

**(c)** Registriere in `renderBooks()` einen **Event Listener** auf dem Favoriten-Button, der `toggleFavorite` mit der **korrekten ID** des Buches aufruft. (3 Punkte)

**(d)** Sorge dafür, dass `renderBooks()` beim Laden der Seite einmal aufgerufen wird und die Bücher angezeigt werden. Berücksichtige, dass `app.js` als ES-Modul geladen wird. (3 Punkte)

---

*Gutes Gelingen!*
