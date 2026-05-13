# Knowledge Check – 4aaif

**Datum:** 06.05.2026
**Themen:** Promises, Fetch API, Async/Await, Fehlerbehandlung, DOM-Manipulation, TypeScript

---

## Multiple-Choice Fragen (12 × 4 Punkte = 48 Punkte)

Jede Frage hat 4 Antwortmöglichkeiten. Kreuze alle zutreffenden Antworten an.
Du erhältst 1 Punkt für jede Option, die du richtig behandelst (angekreuzt wenn richtig, nicht angekreuzt wenn falsch).

Falls du eine Frage als mehrdeutig empfindest, kannst du **–** ankreuzen und kurz begründen.

---

### Frage 1: Promise-Zustände

Welche Aussagen zu den Zuständen eines Promise sind richtig?

- [ ] a) Ein Promise beginnt im Zustand `pending`
- [ ] b) Ein Promise kann von `rejected` zurück zu `pending` wechseln
- [ ] c) `resolved` (fulfilled) und `rejected` sind die zwei Arten, wie ein Promise `settled` werden kann
- [ ] d) `settled` bedeutet, dass das Promise noch auf ein Ergebnis wartet

---

### Frage 2: Ausführungsreihenfolge

Gegeben ist folgender Code:

```js
const order = [];
order.push("A");

const p = new Promise((resolve) => {
    order.push("B");
    resolve("X");
    order.push("C");
});

order.push("D");
p.then(() => { order.push("E"); });
order.push("F");
```

Welche Aussagen sind richtig?

- [ ] a) Die Ausgabe-Reihenfolge ist A → B → C → D → F → E
- [ ] b) Die Ausgabe-Reihenfolge ist A → B → D → F → C → E
- [ ] c) Der Executor des Promise (Zeilen 5–8) wird asynchron ausgeführt
- [ ] d) Der Callback in `.then()` wird erst ausgeführt, nachdem der aktuelle synchrone Code beendet ist

---

### Frage 3: `.then()`-Verkettung

Gegeben ist folgender Code:

```js
Promise.resolve(10)
    .then(v => v + 5)
    .then(v => v * 2);
```

Welche Aussagen sind richtig?

- [ ] a) `.then()` gibt immer ein Promise zurück
- [ ] b) Der gesamte Ausdruck ergibt den Wert `30`
- [ ] c) `.then()` gibt den Rückgabewert des Callbacks direkt zurück (also z.B. eine Zahl)
- [ ] d) Wenn der Callback in `.then()` keinen `return` hat, erhält das nächste `.then()` den Wert `undefined`

---

### Frage 4: `fetch()`-Rückgabewert

Welche Aussagen zu `fetch()` sind richtig?

- [ ] a) `fetch()` gibt ein Promise zurück, das ein `Response`-Objekt resolve
- [ ] b) `fetch()` gibt direkt die JSON-Daten als Objekt zurück
- [ ] c) `fetch()` wirft automatisch eine Exception bei einem HTTP-Status 404
- [ ] d) `response.json()` gibt ein Promise zurück, das die geparsten JSON-Daten liefert

---

### Frage 5: Fehlerbehandlung

Gegeben ist folgender Code:

```js
fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) {
            throw new Error("Fehler: " + response.status);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
```

Welche Aussagen sind richtig?

- [ ] a) `fetch()` wirft nur bei Netzwerkfehlern eine Exception, nicht bei HTTP-Status 404
- [ ] b) `response.ok` ist `false` bei einem Server-Status von 404
- [ ] c) `throw new Error(...)` bricht die Ausführung des aktuellen Callbacks ab und der Fehler wird von `.catch()` abgefangen
- [ ] d) `.catch()` fängt nur Fehler ab, die im **letzten** `.then()` auftreten

---

### Frage 6: `async`-Schlüsselwort

Welche Aussagen zu `async`-Funktionen sind richtig?

- [ ] a) Eine `async`-Funktion gibt immer ein Promise zurück, auch wenn sie einen einfachen Wert wie `42` zurückgibt
- [ ] b) Das Schlüsselwort `async` macht eine Funktion automatisch langsamer
- [ ] c) `async function foo() { return 42; }` – `foo()` resolved mit dem Wert `42`
- [ ] d) `await` kann nur innerhalb einer `async`-Funktion (oder auf Modulebene) verwendet werden

---

### Frage 7: `await`-Schlüsselwort

Welche Aussagen zu `await` sind richtig?

- [ ] a) `await` pausiert die Ausführung der Funktion, bis das Promise erfüllt ist
- [ ] b) `await` entpackt den Wert aus dem Promise (aus `Promise<42>` wird `42`)
- [ ] c) `await` blockiert den gesamten JavaScript-Thread, bis das Promise erfüllt ist
- [ ] d) `await` kann nur mit Promises verwendet werden – andere Werte führen zu einem Fehler

---

### Frage 8: `try/catch` mit async/await

Gegeben ist folgender Code:

```js
async function ladeDaten() {
    try {
        const response = await fetch("/api/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fehler:", error.message);
    } finally {
        console.log("Ladevorgang beendet.");
    }
}
```

Welche Aussagen sind richtig?

- [ ] a) `try/catch` ersetzt `.catch()` bei der Verwendung von async/await
- [ ] b) Der `finally`-Block wird immer ausgeführt, auch wenn kein Fehler auftritt
- [ ] c) `catch(error)` kann nur `Error`-Objekte empfangen – andere Werte führen zu einem Laufzeitfehler
- [ ] d) Fehler, die bei `await fetch(...)` oder `await response.json()` auftreten, werden vom `catch`-Block abgefangen

---

### Frage 9: `querySelectorAll`

Gegeben ist folgender HTML-Auszug:

```html
<ul id="liste">
    <li class="aktiv">Item 1</li>
    <li>Item 2</li>
    <li class="aktiv">Item 3</li>
</ul>
```

Welche Aussagen sind richtig?

- [ ] a) `document.querySelectorAll('#liste > li')` gibt eine NodeList zurück
- [ ] b) Die zurückgegebene NodeList hat die Methode `.map()` wie ein Array
- [ ] c) `document.querySelector('.aktiv')` gibt das erste Element im gesamten Dokument zurück, das die Klasse `aktiv` hat
- [ ] d) `document.querySelectorAll()` gibt `null` zurück, wenn keine Elemente gefunden werden

---

### Frage 10: `classList.toggle`

Gegeben ist folgender Code:

```js
const element = document.getElementById("box");
element.classList.toggle("sichtbar");
```

Welche Aussagen sind richtig?

- [ ] a) `classList.toggle("sichtbar")` fügt die Klasse hinzu, wenn sie fehlt, und entfernt sie, wenn sie vorhanden ist
- [ ] b) `classList.toggle()` gibt `true` zurück, wenn die Klasse hinzugefügt wurde, und `false`, wenn sie entfernt wurde
- [ ] c) `classList.add("sichtbar")` fügt die Klasse hinzu, auch wenn sie bereits vorhanden ist (sie erscheint dann doppelt)
- [ ] d) `classList` kann verwendet werden, um CSS-Klassen eines Elements dynamisch zu ändern, ohne das `class`-Attribut als String zu bearbeiten

---

### Frage 11: TypeScript-Grundlagen

Welche Aussagen zu TypeScript sind richtig?

- [ ] a) TypeScript-Typen werden zur Laufzeit im Browser geprüft
- [ ] b) `export type User = { name: string; alter: number; }` definiert einen Typ, der zur Laufzeit nicht existiert
- [ ] c) `: string` ist eine Typ-Annotation, die angibt, dass ein Wert ein String sein soll
- [ ] d) TypeScript verhindert automatisch alle Laufzeitfehler

---

### Frage 12: TypeScript-Module

Gegeben ist folgende Datei `essen.ts`:

```ts
export type EssenEintrag = { name: string; essen: string; };

export async function holeEssen(): Promise<EssenEintrag[]> {
    const response = await fetch("/essen");
    return await response.json();
}
```

Welche Aussagen zum Importieren dieses Moduls sind richtig?

- [ ] a) `import { holeEssen } from "./essen.ts"` importiert die Funktion `holeEssen`
- [ ] b) `import * as modul from "./essen.ts"` erstellt ein Objekt mit `modul.holeEssen` und `modul.EssenEintrag`
- [ ] c) `import "./essen.ts"` ohne geschweifte Klammern führt das Modul aus, ohne dass Funktionen importiert werden
- [ ] d) Der Browser kann TypeScript-Dateien (`.ts`) direkt ausführen, ohne sie vorher zu transpilieren

---

## Freitext-Fragen (3 × 15 Punkte = 45 Punkte)

### Frage 13: Daten mit `fetch()` und `.then()` laden (15 Punkte)

Schreibe den JavaScript-Code, der die Daten von der URL `https://jsonplaceholder.typicode.com/users/1` lädt und den Namen der Person auf der Konsole ausgibt. Verwende dabei **`.then()`** und **`.catch()`**.

Zusätzlich soll überprüft werden, ob `response.ok` `true` ist. Wenn nicht, soll ein Fehler mit `throw new Error(...)` geworfen werden.

**Antwort:**

```js
// Dein Code hier:

```

---

### Frage 14: `.then()` zu `async/await` umschreiben (15 Punkte)

Gegeben ist folgender Code mit `.then()`:

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP-Fehler: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Titel:", data.title);
    })
    .catch(error => {
        console.error("Fehler:", error.message);
    });
```

Schreibe diesen Code so um, dass er **`async/await`** mit **`try/catch`** verwendet. Die Funktionalität muss gleich bleiben.

**Antwort:**

```js
// Dein Code hier:

```

---

### Frage 15: DOM-Manipulation mit Event-Listenern (15 Punkte)

Gegeben ist folgender HTML-Code:

```html
<ul id="aufgaben">
    <li>Hausübung machen</li>
    <li>Zimmer aufräumen</li>
    <li>Einkaufen gehen</li>
</ul>
```

Schreibe JavaScript-Code, der:
1. Alle `<li>`-Elemente innerhalb der Liste mit der ID `aufgaben` auswählt
2. Jedem `<li>` einen Click-Event-Listener hinzufügt
3. Beim Klicken die CSS-Klasse `erledigt` auf dem angeklickten Element umschaltet (toggle)

Erkläre kurz, was `querySelectorAll`, `addEventListener` und `classList.toggle` in deinem Code bewirken.

**Antwort:**

```js
// Dein Code hier:


// Erklärung:

```

---

**Gesamtpunkte: 93**

---

*Gutes Gelingen!*
