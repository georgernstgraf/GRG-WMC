# Einführung in die JavaScript-Programmierung

**Fokus: Frontend-Entwicklung**

## 1. Einführung, Geschichte und Status Quo

JavaScript (JS) wurde ursprünglich 1995 von Brendan Eich bei Netscape in nur 10 Tagen entwickelt. Was als einfache Skriptsprache begann, um Webseiten etwas Dynamik zu verleihen, hat sich zur wichtigsten Sprache des Webs entwickelt.

Wichtig ist die Abgrenzung: **Java ist nicht JavaScript**. (Ein populärer Vergleich: Java verhält sich zu JavaScript wie „Car“ zu „Carpet“).

### Der Standard: ECMAScript

JavaScript ist eine Implementierung des **ECMAScript**-Standards. Wenn man heute von „modernem JavaScript“ spricht, meint man meist **ES6** (ECMAScript 2015) und neuer. Diese Versionen brachten Klassen, Module, Arrow-Functions und `let`/`const`, was die Sprache für große Softwareprojekte tauglich machte.

### JavaScript Engine

JS ist eine interpretierte (bzw. Just-in-Time kompilierte) Sprache. Im Browser führt eine Engine den Code aus. Die bekannteste ist **V8** (Google Chrome), die auch die Basis für Node.js (Backend) und Deno bildet.

## 2. Variablen und Scopes (Geltungsbereiche)

In älterem JS-Code findet man häufig `var`. In modernem Code gilt die Regel: **Vermeiden Sie `var` vollständig.**

### 2.1. let, const und var

* **`var`**: Hat einen **Function Scope**. Variablen sind innerhalb der gesamten Funktion sichtbar, auch bevor sie deklariert wurden (Hoisting), was zu schwer findbaren Fehlern führt.
* **`let`**: Hat einen **Block Scope** (wie in C# oder Java). Die Variable existiert nur innerhalb des geschweiften Klammernpaars `{ ... }`. Sie ist veränderbar.
* **`const`**: Wie `let` (Block Scope), aber die Zuweisung ist einmalig.

### 2.2. Mutable vs. Immutable bei const

Wichtig: `const` schützt die *Bindung* der Variable, nicht den *Inhalt* (bei Referenztypen).

```javascript
const pi = 3.1415;
pi = 3; // Fehler: Assignment to constant variable.

const student = { name: "Max" };
student.name = "Moritz"; // ERLAUBT! Das Objekt wird mutiert.
// student = { name: "Moritz" }; // FEHLER: Neue Zuweisung verboten.
```

**Best Practice:** Nutzen Sie standardmäßig `const`. Nutzen Sie `let` nur, wenn Sie wissen, dass sich der Wert ändern muss (z.B. Schleifenzähler).

## 3. Datentypen und Operatoren

JavaScript ist **dynamisch typisiert**. Variablen haben keinen festen Typ, Werte schon.

### 3.1. Primitives vs. Objects

* **Primitives:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`. (Call-by-Value).
* **Objects:** Arrays, Funktionen, Klassen, Objekte. (Call-by-Reference).

### 3.2. Der Vergleichs-Wahnsinn (Equality)

JS versucht bei Vergleichen oft, Typen automatisch umzuwandeln (Type Coercion).

* **`==` (Loose Equality):** Wandelt Typen um. **Gefährlich.**
  * `0 == "0"` -> `true`
  * `false == "0"` -> `true`
  * `[] == 0` -> `true`
* **`===` (Strict Equality):** Vergleicht Typ UND Wert. **Immer verwenden.**
  * `0 === "0"` -> `false`

**Fail-Fast Regel:** Verwenden Sie in Ihrem Code ausschließlich `===` und `!==`. Es gibt kaum Gründe für `==`.

### 3.3. Truthy und Falsy

In `if`-Abfragen werden Werte in Boolean umgewandelt.

* **Falsy:** `false`, `0`, `""` (leerer String), `null`, `undefined`, `NaN`.
* **Truthy:** Alles andere (auch leere Arrays `[]` und leere Objekte `{}`!).

## 4. Funktionen

Funktionen sind „First-Class Citizens“. Sie können wie Variablen behandelt, übergeben und zurückgegeben werden.

### 4.1. Funktions-Definitionen

```javascript
// Klassisch (Function Declaration)
function addiere(a, b) {
    return a + b;
}

// Als Variable (Function Expression)
const subtrahiere = function(a, b) {
    return a - b;
};
```

### 4.2. Argumente

JS prüft die Anzahl der Argumente nicht. Fehlende Argumente sind `undefined`.
Modern löst man Default-Werte direkt in der Signatur:

```javascript
function begruesse(name = "Gast") {
    console.log(`Hallo, ${name}`); // Template String (wie C# Interpolation)
}
```

### 4.3. Arrow Functions (Lambda)

Seit ES6 gibt es die kürzere Arrow-Syntax. Sie ist analog zu C# Lambdas `() => {}`.

```javascript
const malZwei = (x) => {
    return x * 2;
};

// Kurzform (Implicit Return bei einer Expression)
const malDrei = x => x * 3;
```

**Wichtiger Unterschied:** Arrow Functions haben kein eigenes `this`. Sie erben `this` aus dem umgebenden Kontext (lexical scoping). Das macht sie ideal für Event-Handler innerhalb von Klassen.

## 5. Arrays und Higher-Order Functions

Arrays in JS sind dynamisch (wie `List<T>` in C#) und können gemischte Datentypen enthalten (sollte man aber vermeiden).

**Wichtig:** Statt `for`-Schleifen nutzen wir in modernem JS meist funktionale Methoden.

Gegeben sei:

```javascript
const zahlen = [1, 2, 3, 4, 5];
```

### 5.1. Wichtige Methoden

* **`forEach`**: Iteriert über Elemente (Rückgabe: void).

    ```javascript
    zahlen.forEach(z => console.log(z));
    ```

* **`map`**: Transformiert jedes Element und erstellt ein **neues** Array (Projektion, wie C# `Select`).

    ```javascript
    const quadrate = zahlen.map(z => z * z); // [1, 4, 9, 16, 25]
    ```

* **`filter`**: Erstellt ein **neues** Array mit Elementen, die die Bedingung erfüllen (Prädikat, wie C# `Where`).

    ```javascript
    const gerade = zahlen.filter(z => z % 2 === 0); // [2, 4]
    ```

* **`find`**: Gibt das **erste** Element zurück, das passt (oder `undefined`).

    ```javascript
    const treffer = zahlen.find(z => z > 3); // 4
    ```

## 6. Objektorientierung: Klassen

JS basierte ursprünglich auf Prototypen. ES6 führte das `class` Keyword ein, das „Syntactic Sugar“ ist, sich aber fast wie C# anfühlt.

```javascript
class Auto {
    // Private Felder beginnen mit # (echte Runtime Privacy!)
    #seriennummer;

    constructor(marke, baujahr) {
        this.marke = marke;   // Public Property
        this.baujahr = baujahr;
        this.#seriennummer = crypto.randomUUID();
    }

    // Getter
    get beschreibung() {
        return `${this.marke} (Bj. ${this.baujahr})`;
    }

    starten() {
        console.log(`Auto ${this.#seriennummer} startet...`);
    }
}

const meinAuto = new Auto("VW", 2025);
// meinAuto.#seriennummer -> Syntax Error (Privat)
```

## 7. Asynchrone Programmierung

JavaScript läuft in einem einzigen Thread (Single Threaded Event Loop). Blockierende Operationen (wie Netzwerkanfragen) würden das UI einfrieren.

### 7.1. Promises

Ein `Promise` ist ein Objekt, das einen Wert repräsentiert, der jetzt, später oder nie verfügbar sein wird.
Zustände: `pending` (laufend) -> `fulfilled` (Erfolg) oder `rejected` (Fehler).

```javascript
function ladeDaten() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             const erfolg = true;
             if(erfolg) resolve("Daten geladen");
             else reject("Fehler beim Laden");
        }, 1000);
    });
}

// Nutzung mit .then() und .catch()
ladeDaten()
    .then(daten => console.log(daten))
    .catch(error => console.error(error));
```

### 7.2. Async / Await

Dies ist die moderne Art, Promises zu behandeln. Es sieht aus wie synchroner Code, pausiert aber die Ausführung der Funktion nicht-blockierend, bis das Promise aufgelöst ist.

**Try-Catch-Pattern (Standard für Fehlerbehandlung):**

```javascript
async function appStart() {
    try {
        console.log("Lade...");
        const daten = await ladeDaten(); // Wartet hier
        console.log(daten);
    } catch (error) {
        console.error("Es gab ein Problem:", error);
    }
}
```

## 8. Architektur moderner Frontend-Anwendungen

Um ohne Frameworks (wie React oder Angular) sauberen, wartbaren Code zu schreiben, strukturieren wir unsere Applikation strikt nach dem Prinzip **State-Driven UI**. Wir trennen Daten (State) von der Darstellung (DOM).

Hier ist der **7-Punkte-Plan** für eine Vanilla-JS Applikation:

### 1. APPLICATION STATE OBJECT (Single Source of Truth)

Der gesamte Zustand der App liegt in einem zentralen Objekt. Nicht im HTML verstreut.

```javascript
const state = {
    todos: [],
    filter: 'all', // 'all', 'active', 'completed'
    loading: false
};
```

### 2. DOM Node Refs

Wir speichern Referenzen auf wichtige statische HTML-Elemente, um nicht ständig `querySelector` aufzurufen (Performance & Übersicht).

```javascript
const elements = {
    input: document.querySelector('#todo-input'),
    listContainer: document.querySelector('#todo-list'),
    addButton: document.querySelector('#add-btn'),
};
```

### 3. DOM Node Creation Fn's (Helper)

Statt HTML-Strings manuell zusammenzubauen (Sicherheitsrisiko XSS), nutzen wir kleine Helper-Funktionen, die DOM-Elemente erzeugen.

```javascript
const createEl = (tag, className, text = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    return el;
};
```

### 4. RENDER FN (State -> UI)

Eine Funktion `render()`, die aufgerufen wird, wann immer sich Daten ändern. Sie leert den Container und baut ihn basierend auf dem aktuellen `state` neu auf. Das garantiert Synchronität.

```javascript
const render = () => {
    elements.listContainer.innerHTML = ''; // Reset

    state.todos.forEach(todo => {
        const li = createEl('li', 'todo-item', todo.text);
        // Visuelle Logik
        if (todo.done) li.classList.add('completed');
        elements.listContainer.appendChild(li);
    });
};
```

### 5. EVENT HANDLERS (Business Logic)

Funktionen, die auf User-Input reagieren, den `state` aktualisieren und danach (!) `render()` aufrufen.

```javascript
const handleAdd = () => {
    const text = elements.input.value;
    if (!text) return; // Fail-Fast

    state.todos.push({ text, done: false });
    elements.input.value = ''; // Form Reset
    render(); // UI Update
};
```

### 6. INIT BINDINGS (Verdrahtung)

Hier werden die Event-Listener einmalig beim Start gesetzt.

```javascript
const bindEvents = () => {
    elements.addButton.addEventListener('click', handleAdd);
    // Optional: Enter-Taste im Input
    elements.input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleAdd();
    });
};
```

### 7. INITIAL RENDER

Der Einstiegspunkt ("Main"), der alles startet.

```javascript
const init = () => {
    console.log("App startet...");
    bindEvents();
    render(); // Initialer Status (z.B. leere Liste) anzeigen
};

// Start nach Laden des DOMs
document.addEventListener('DOMContentLoaded', init);
```

***
*Autor: T3 Chat | Kontext: HTL Spengergasse Teaching Material*
