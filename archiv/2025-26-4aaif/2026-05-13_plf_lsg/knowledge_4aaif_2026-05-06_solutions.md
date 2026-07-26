# Knowledge Check – 4aaif – Lösungen

**Datum:** 06.05.2026
**Themen:** Promises, Fetch API, Async/Await, Fehlerbehandlung, DOM-Manipulation, TypeScript

---

## Multiple-Choice Lösungen

### Frage 1: Promise-Zustände
- [x] a) Ein Promise beginnt im Zustand `pending` ✓
- [ ] b) Ein Promise kann von `rejected` zurück zu `pending` wechseln ✗ – Zustandsübergänge sind endgültig
- [x] c) `resolved` (fulfilled) und `rejected` sind die zwei Arten, wie ein Promise `settled` werden kann ✓
- [ ] d) `settled` bedeutet, dass das Promise noch auf ein Ergebnis wartet ✗ – `settled` bedeutet, das Ergebnis steht fest

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 2: Ausführungsreihenfolge
- [x] a) Die Ausgabe-Reihenfolge ist A → B → C → D → F → E ✓
- [ ] b) Die Ausgabe-Reihenfolge ist A → B → D → F → C → E ✗ – der Executor wird synchron ausgeführt
- [ ] c) Der Executor des Promise wird asynchron ausgeführt ✗ – der Executor läuft synchron, nur `.then()` ist asynchron
- [x] d) Der Callback in `.then()` wird erst ausgeführt, nachdem der aktuelle synchrone Code beendet ist ✓

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

**Erklärung:** Der Promise-Executor (Zeilen 5–8) wird **sofort synchron** ausgeführt. Deshalb werden B und C direkt nach A ausgeführt. `resolve("X")` markiert das Promise als erfüllt, aber der `.then()`-Callback wird in die Microtask-Queue eingereiht und erst nach dem gesamten synchronen Code ausgeführt. Deshalb kommt E ganz am Schluss.

---

### Frage 3: `.then()`-Verkettung
- [x] a) `.then()` gibt immer ein Promise zurück ✓
- [x] b) Der gesamte Ausdruck ergibt den Wert `30` ✓ – 10+5=15, 15×2=30
- [ ] c) `.then()` gibt den Rückgabewert des Callbacks direkt zurück ✗ – es gibt ein `Promise<Rückgabewert>` zurück
- [x] d) Wenn der Callback keinen `return` hat, erhält das nächste `.then()` den Wert `undefined` ✓

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 4: `fetch()`-Rückgabewert
- [x] a) `fetch()` gibt ein Promise zurück, das ein `Response`-Objekt resolved ✓
- [ ] b) `fetch()` gibt direkt die JSON-Daten als Objekt zurück ✗ – man muss `response.json()` aufrufen
- [ ] c) `fetch()` wirft automatisch eine Exception bei HTTP-Status 404 ✗ – `fetch()` wirft nur bei Netzwerkfehlern
- [x] d) `response.json()` gibt ein Promise zurück, das die geparsten JSON-Daten liefert ✓

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 5: Fehlerbehandlung
- [x] a) `fetch()` wirft nur bei Netzwerkfehlern eine Exception, nicht bei HTTP-Status 404 ✓
- [x] b) `response.ok` ist `false` bei einem Server-Status von 404 ✓
- [x] c) `throw new Error(...)` bricht die Ausführung des aktuellen Callbacks ab und der Fehler wird von `.catch()` abgefangen ✓
- [ ] d) `.catch()` fängt nur Fehler ab, die im letzten `.then()` auftreten ✗ – `.catch()` fängt Fehler aus der gesamten Kette

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 6: `async`-Schlüsselwort
- [x] a) Eine `async`-Funktion gibt immer ein Promise zurück ✓
- [ ] b) Das Schlüsselwort `async` macht eine Funktion automatisch langsamer ✗
- [x] c) `async function foo() { return 42; }` – `foo()` resolved mit dem Wert `42` ✓
- [x] d) `await` kann nur innerhalb einer `async`-Funktion (oder auf Modulebene) verwendet werden ✓

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 7: `await`-Schlüsselwort
- [x] a) `await` pausiert die Ausführung der Funktion, bis das Promise erfüllt ist ✓
- [x] b) `await` entpackt den Wert aus dem Promise (aus `Promise<42>` wird `42`) ✓
- [ ] c) `await` blockiert den gesamten JavaScript-Thread ✗ – nur die async-Funktion wird pausiert, andere Aufgaben können weiterlaufen
- [ ] d) `await` kann nur mit Promises verwendet werden ✗ – `await 5` funktioniert (wird automatisch in `Promise.resolve(5)` umgewandelt)

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 8: `try/catch` mit async/await
- [x] a) `try/catch` ersetzt `.catch()` bei der Verwendung von async/await ✓
- [x] b) Der `finally`-Block wird immer ausgeführt, auch wenn kein Fehler auftritt ✓
- [ ] c) `catch(error)` kann nur `Error`-Objekte empfangen ✗ – JavaScript erlaubt `throw "irgendwas"` (jeder Wert kann geworfen werden)
- [x] d) Fehler, die bei `await fetch(...)` oder `await response.json()` auftreten, werden vom `catch`-Block abgefangen ✓

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 9: `querySelectorAll`
- [x] a) `document.querySelectorAll('#liste > li')` gibt eine NodeList zurück ✓
- [ ] b) Die zurückgegebene NodeList hat die Methode `.map()` ✗ – NodeList hat `forEach`, aber nicht `map/filter/reduce`
- [x] c) `document.querySelector('.aktiv')` gibt das erste Element im gesamten Dokument zurück, das die Klasse `aktiv` hat ✓
- [ ] d) `document.querySelectorAll()` gibt `null` zurück, wenn keine Elemente gefunden werden ✗ – es gibt eine leere NodeList zurück (niemals `null`)

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 10: `classList.toggle`
- [x] a) `classList.toggle("sichtbar")` fügt die Klasse hinzu, wenn sie fehlt, und entfernt sie, wenn sie vorhanden ist ✓
- [x] b) `classList.toggle()` gibt `true` zurück, wenn die Klasse hinzugefügt wurde, und `false`, wenn sie entfernt wurde ✓
- [ ] c) `classList.add("sichtbar")` fügt die Klasse hinzu, auch wenn sie bereits vorhanden ist ✗ – `add()` ignoriert es stillschweigend, wenn die Klasse bereits existiert (kein Duplikat)
- [x] d) `classList` kann verwendet werden, um CSS-Klassen eines Elements dynamisch zu ändern ✓

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 11: TypeScript-Grundlagen
- [ ] a) TypeScript-Typen werden zur Laufzeit im Browser geprüft ✗ – Typen werden zur Compile-Zeit geprüft und dann entfernt
- [x] b) `export type User = { name: string; alter: number; }` definiert einen Typ, der zur Laufzeit nicht existiert ✓
- [x] c) `: string` ist eine Typ-Annotation, die angibt, dass ein Wert ein String sein soll ✓
- [ ] d) TypeScript verhindert automatisch alle Laufzeitfehler ✗ – TypeScript ist nur ein Compile-Schritt; es fängt Typfehler ab, aber keine Logikfehler

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

---

### Frage 12: TypeScript-Module
- [x] a) `import { holeEssen } from "./essen.ts"` importiert die Funktion `holeEssen` ✓
- [x] b) `import * as modul from "./essen.ts"` erstellt ein Objekt mit `modul.holeEssen` und `modul.EssenEintrag` ✓ – `EssenEintrag` ist zwar ein `export type`, wird aber beim Namespace-Import als Eigenschaft referenziert (TypeScript entfernt es zur Laufzeit)
- [x] c) `import "./essen.ts"` ohne geschweifte Klammern führt das Modul aus, ohne dass Funktionen importiert werden ✓
- [ ] d) Der Browser kann TypeScript-Dateien (`.ts`) direkt ausführen ✗ – TypeScript muss zuerst nach JavaScript transpiliert werden

**Punkte:** a ✓, b ✓, c ✓, d ✓ → 4/4

**Hinweis zu b):** `EssenEintrag` ist ein `export type` – beim Namespace-Import (`import * as modul`) ist `modul.EssenEintrag` im TypeScript-Code als Typ verwendbar, existiert aber **nicht zur Laufzeit** im erzeugten JavaScript. Das ist ein wichtiger Unterschied zwischen Typ- und Wert-Exporten.

---

## Freitext-Lösungen

### Frage 13: Daten mit `fetch()` und `.then()` laden (15 Punkte)

**Musterlösung:**

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP-Fehler: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.name);
    })
    .catch(error => {
        console.error("Fehler:", error.message);
    });
```

**Bewertungsschlüssel:**
- `fetch()` mit korrekter URL aufgerufen: 3 Punkte
- `response.ok` überprüft und bei `false` Fehler geworfen: 4 Punkte
- `response.json()` aufgerufen und weiterverarbeitet: 3 Punkte
- Name auf der Konsole ausgegeben (`data.name`): 3 Punkte
- `.catch()` für Fehlerbehandlung vorhanden: 2 Punkte

---

### Frage 14: `.then()` zu `async/await` umschreiben (15 Punkte)

**Musterlösung:**

```js
async function ladeTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error("HTTP-Fehler: " + response.status);
        }
        const data = await response.json();
        console.log("Titel:", data.title);
    } catch (error) {
        console.error("Fehler:", error.message);
    }
}
```

**Bewertungsschlüssel:**
- `async function` deklariert: 2 Punkte
- `await fetch(...)` statt `.then()` verwendet: 3 Punkte
- `response.ok` überprüft und `throw new Error()` beibehalten: 3 Punkte
- `await response.json()` statt `return response.json()`: 3 Punkte
- `try/catch` statt `.catch()` verwendet: 2 Punkte
- Konsolenausgabe beibehalten: 2 Punkte

---

### Frage 15: DOM-Manipulation mit Event-Listenern (15 Punkte)

**Musterlösung:**

```js
const items = document.querySelectorAll('#aufgaben > li');
items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('erledigt');
    });
});
```

**Bewertungsschlüssel:**
- `querySelectorAll('#aufgaben > li')` (oder `'#aufgaben li'`): 4 Punkte
- `forEach` zum Iterieren über alle Elemente: 3 Punkte
- `addEventListener('click', ...)` mit korrektem Event-Typ: 3 Punkte
- `classList.toggle('erledigt')` auf dem angeklickten Element: 3 Punkte
- Erklärung der drei Methoden (`querySelectorAll`, `addEventListener`, `classList.toggle`): 2 Punkte

**Alternative akzeptierte Lösungen:**
- `document.querySelectorAll('li')` ohne spezifischen Selektor: Teilpunkte (2/4), da es auch `<li>` außerhalb der Liste erfassen würde
- `for (const item of items)` statt `forEach`: vollständig korrekt (3/3)
- Arrow Function `() => { ... }` oder `function() { ... }`: beides korrekt

---

**Gesamtpunkte: 93** (48 MC + 45 Freitext)
