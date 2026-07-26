# Knowledge Check -- 4BKIF -- Lösungen

**Datum:** 2026-04-23  
**Punkte gesamt:** 85

---

## Teil 1: Multiple-Choice (10 Fragen, je 4 Punkte = 40 Punkte)

Bewertung pro Option: 1 Punkt für korrektes Ankreuzen oder korrektes Freilassen.

---

### Frage 1: ES Modules

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Ja** | `type="module"` aktiviert ES-Modul-Syntax, `import`/`export` sind verfügbar. |
| b | **Nein** | Module haben ihren eigenen Scope; Variablen/Funktionen sind **nicht** automatisch global. |
| c | **Ja** | ES-Module werden standardmäßig im Strict Mode ausgeführt. |
| d | **Nein** | Mit `import ... from "./file.json" with { type: "json" }` können JSON-Dateien importiert werden. |

**Punkte:** a✓ b✗ c✓ d✗

---

### Frage 2: `typeof` -- Edge Cases

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Nein** | `typeof null` ergibt `"object"` -- das ist ein bekannter JavaScript-Bug. |
| b | **Ja** | `typeof NaN` ergibt `"number"` -- NaN ist formal ein Number-Wert. |
| c | **Ja** | `typeof undefined` ergibt `"undefined"`. |
| d | **Ja** | `typeof 42n` ergibt `"bigint"`. |

**Punkte:** a✗ b✓ c✓ d✓

---

### Frage 3: `const` mit Objekten

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Nein** | `user = { ... }` ist eine **Neuzuweisung** der Variablen und wirft einen `TypeError`. |
| b | **Ja** | Eigenschaftsänderungen auf demselben Objekt sind bei `const` erlaubt. |
| c | **Ja** | Genau: `const` schützt die Bindung (Variablen-Zuweisung), nicht den Objekt-Inhalt. |
| d | **Nein** | `user.alter = 23` ist erlaubt und ändert die Eigenschaft problemlos. |

**Punkte:** a✗ b✓ c✓ d✗

---

### Frage 4: Truthy und Falsy -- Fallen

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Nein** | `Boolean("0")` ergibt `true`. Der String `"0"` ist nicht leer, also truthy. Die Frage lautet "welche ergeben `true`" -- also **ankreuzen**. **Korrektur:** Ja, `"0"` ergibt `true`, also ankreuzen. |
| b | **Nein** | `Boolean([])` ergibt `true`! Ein leeres Array ist ein Objekt und therefore truthy. |
| c | **Ja** | `Boolean(-0)` ergibt `false`. `-0` ist einer der 8 falsy-Werte. |
| d | **Ja** | `Boolean("false")` ergibt `true`. Ein nicht-leerer String ist immer truthy. |

**Punkte:** a✓ b✗ c✓ d✓

**Hinweis zu a):** Die Frage fragt welche Ausdrücke `true` ergeben. `Boolean("0")` ergibt `true`, also muss a) angekreuzt werden.

---

### Frage 5: Type Coercion

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Ja** | `null` wird bei numerischer Operation zu `0`, also `0 + 1 = 1`. |
| b | **Ja** | `undefined` wird zu `NaN`, also `NaN + 1 = NaN`. |
| c | **Nein** | `NaN === NaN` ergibt `false`. NaN ist nicht gleich sich selbst. |
| d | **Ja** | `"5" - 3`: der `-`-Operator konvertiert zu Number, also `5 - 3 = 2`. |

**Punkte:** a✓ b✓ c✗ d✓

---

### Frage 6: `sort()` -- Verhalten

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Nein** | `zahlen.sort()` sortiert **alphabetisch** als Strings: `[10, 3, 80, 9]`. |
| b | **Ja** | `sort()` mutiert das ursprüngliche Array. |
| c | **Nein** | `sort()` gibt die Referenz auf das **dasselbe** (veränderte) Array zurück, kein neues. |
| d | **Ja** | Die Vergleichsfunktion `(a, b) => a - b` sorgt für korrekte numerische Sortierung. |

**Punkte:** a✗ b✓ c✗ d✓

---

### Frage 7: `slice()` vs `splice()`

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Ja** | `slice(1, 3)` extrahiert Index 1 bis (exklusiv) 3 = `[20, 30]`, ohne Mutation. |
| b | **Ja** | `splice(1, 2)` entfernt 2 Elemente ab Index 1 = `[20, 30]` und verändert `arr`. |
| c | **Ja** | `splice(2, 0, 25)`: 0 Elemente entfernen, `25` an Index 2 einfügen. |
| d | **Nein** | `slice()` verändert das Array **nicht**, nur `splice()` mutiert. |

**Punkte:** a✓ b✓ c✓ d✗

---

### Frage 8: Template Strings

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Ja** | Template Strings werden mit Backticks (`` ` ``) geschrieben. |
| b | **Ja** | Zeilenumbrüche in Template Strings sind direkt möglich, ohne `\n`. |
| c | **Nein** | In `${}` können **beliebige Ausdrücke** stehen, auch `${a + b}`, `${x > 0 ? "ja" : "nein"}`. |
| d | **Nein** | Einfache Anführungszeichen unterstützen **keine** Interpolation; `${name}` wird als Literal-Text ausgegeben. |

**Punkte:** a✓ b✓ c✗ d✗

---

### Frage 9: TLS und Zertifikate

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Ja** | TLS ist der Nachfolger von SSL und verschlüsselt die Client-Server-Kommunikation. |
| b | **Ja** | HTTPS = Port 443, HTTP = Port 80. |
| c | **Ja** | Let's Encrypt ist eine kostenlose, automatisierte Zertifizierungsstelle (CA). |
| d | **Nein** | Ein CSR (Certificate Signing Request) ist eine **Anfrage** an die CA, nicht das fertige Zertifikat. Das Zertifikat wird von der CA **nach** Prüfung des CSR ausgestellt. |

**Punkte:** a✓ b✓ c✓ d✗

---

### Frage 10: `window` und Modul-Scope

| Option | Kreuz? | Begründung |
|--------|--------|------------|
| a | **Ja** | Ohne `type="module"` werden top-level Deklarationen Eigenschaften von `window`. |
| b | **Ja** | `document` ist ein globales Browser-Objekt und auch in Modulen verfügbar. |
| c | **Ja** | Explizite Zuweisung an `window` macht die Funktion global sichtbar. |
| d | **Nein** | `console` ist ein globales Objekt des Browsers und in Modulen ohne Import verfügbar. |

**Punkte:** a✓ b✓ c✓ d✗

---

## Teil 2: Freitext-Fragen (3 Fragen, je 15 Punkte = 45 Punkte)

---

### Frage 11: ES Modules und `window`-Scope (15 Punkte)

#### (a) Warum passiert nichts? (3 Punkte)

`app.js` wird als ES-Modul geladen (`type="module"`). Dadurch haben alle Funktionen und Variablen in `app.js` einen **eigenen Modul-Scope** und werden **nicht** automatisch Eigenschaften des `window`-Objekts. Das `onclick="ladeDaten()"` im HTML versucht, `ladeDaten` im globalen Scope (`window.ladeDaten`) aufzurufen -- diese existiert dort aber nicht. Es kommt zu einem `ReferenceError` in der Browser-Konsole.

**Bewertung:** 3 Punkte für die Erklärung des Modul-Scopes und der fehlenden globalen Verfügbarkeit.

#### (b) Zwei Lösungswege (4 Punkte)

**Lösung 1:** Explizit an `window` binden:
```javascript
window.ladeDaten = ladeDaten;
```
Am Ende von `app.js` die Funktion manuell ans `window`-Objekt hängen, damit sie aus HTML-Attribut-Handlern erreichbar ist.

**Lösung 2:** Event Listener in JavaScript registrieren statt `onclick` im HTML:
```javascript
document.querySelector("button").addEventListener("click", ladeDaten);
```
Den HTML-Button um das `onclick`-Attribut kürzen (`<button id="loadBtn">Daten laden</button>`) und den Event Listener im Modul registrieren. Innerhalb des Moduls ist `ladeDaten` ja sichtbar.

**Bewertung:** Je 2 Punkte pro gültigem Lösungsweg mit Erklärung.

#### (c) Unterschied `<script>` vs `<script type="module">` (4 Punkte)

| `<script src="app.js">` | `<script type="module" src="app.js">` |
|---|---|
| Top-level Deklarationen (`var`, `function`) werden Eigenschaften von `window` | Alle Deklarationen bleiben im Modul-Scope, nicht global |
| Kein Strict Mode (außer manuell `"use strict"`) | Automatisch im Strict Mode |
| Wird sofort synchron geladen (ohne `defer`/`async`) | Wird standardmäßig **deferred** geladen (nach DOM-Parsing) |
| `this` auf Top-Level ist `window` | `this` auf Top-Level ist `undefined` |

**Bewertung:** 1 Punkt pro korrekten Unterschied, max. 4 Punkte.

#### (d) Erklärung der Import-Zeile (4 Punkte)

```javascript
import personen from "./personen.json" with { type: "json" };
```

- `import ... from "..."` -- ES-Modul-Import-Syntax, lädt eine Datei.
- `personen` -- Name der lokalen Variablen, unter der der importierte Wert verfügbar ist.
- `"./personen.json"` -- relativer Pfad zur JSON-Datei (relativ zum aktuellen Modul).
- `with { type: "json" }` -- Import-Assertion, die dem Laufzeitsystem mitteilt, dass die Datei als JSON geparst werden soll. Das Ergebnis ist ein JavaScript-Objekt/Array.

**Bewertung:** Je 1 Punkt für die Erklärung der vier Komponenten.

---

### Frage 12: Truthy/Falsy und Type Coercion (15 Punkte)

#### (a) Ausdrücke bewerten (10 Punkte)

| # | Ausdruck | Ergebnis | Erklärung |
|---|----------|----------|-----------|
| 1 | `Boolean("0")` | **`true`** | Nicht-leerer String ist truthy. |
| 2 | `NaN === NaN` | **`false`** | NaN ist nie gleich sich selbst (auch mit `===`). |
| 3 | `null == undefined` | **`true`** | `null` und `undefined` sind mit `==` gleich (Spezialregel der Spec). |
| 4 | `"5" + 3` | **`"53"`** | `+` mit String konvertiert zu String → Konkatenation. |
| 5 | `"5" - 3` | **`2`** | `-` konvertiert beide Seiten zu Number → `5 - 3`. |
| 6 | `[] == false` | **`true`** | `[]` wird zu `""` → `""` wird zu `0` → `false` wird zu `0` → `0 == 0 = true`. |
| 7 | `!!"false"` | **`true`** | `"false"` ist ein nicht-leerer String → truthy → `!true = false` → `!!true = true`. |
| 8 | `null === undefined` | **`false`** | Strikte Gleichheit: verschiedener Typ (`object` vs `undefined`). |
| 9 | `Boolean("")` | **`false`** | Leerer String ist einer der 8 falsy-Werte. |
| 10 | `0 === false` | **`false`** | Verschiedene Typen (`number` vs `boolean`), `===` prüft Typ mit. |

**Bewertung:** Je 1 Punkt pro korrektem Ergebnis.

#### (b) Alle 8 falsy-Werte (3 Punkte)

1. `false`
2. `0`
3. `-0`
4. `0n`
5. `""` (leerer String)
6. `null`
7. `undefined`
8. `NaN`

**Bewertung:** 3 Punkte für alle 8 korrekt. 2 Punkte für 6-7, 1 Punkt für 4-5, 0 Punkte für weniger.

#### (c) Warum `Boolean("false")` truthy ist (2 Punkte)

`"false"` ist ein **String** und nicht der Boolean-Wert `false`. JavaScript wertet bei `Boolean()` bei Strings ausschließlich, ob sie **leer** (`""`) oder **nicht leer** sind. Da `"false"` ein nicht-leerer String ist (4 Zeichen), ist er truthy. Der **Inhalt** des Strings wird nicht semantisch interpretiert.

**Bewertung:** 2 Punkte für die Erklärung, dass nur String-Länge/Leere entscheidet, nicht der Inhalt.

---

### Frage 13: DOM-Anwendung -- Bücherverwaltung mit Favoriten (15 Punkte)

#### (a) `renderBooks()` (5 Punkte)

```javascript
function renderBooks() {
    const container = document.querySelector("#booklist");
    container.innerHTML = "";

    for (const buch of buecher) {
        const card = document.createElement("div");
        card.className = "book-card";

        const istFavorit = favoriten.includes(buch.id);
        const btnText = istFavorit ? "★ Favorit" : "☆ Favorit";

        card.innerHTML = `
            <h3>${buch.titel}</h3>
            <p>${buch.autor}, ${buch.jahr}</p>
            <button class="fav-btn" data-id="${buch.id}">${btnText}</button>
        `;

        container.appendChild(card);
    }
}
```

**Bewertung:**
- 1 P: Container referenzieren (`querySelector("#booklist")`)
- 1 P: Container leeren (`innerHTML = ""`)
- 1 P: Schleife über `buecher`
- 1 P: Karte mit korrektem Inhalt (Titel, Autor, Jahr, Button)
- 1 P: Favoriten-Status prüfen (`favoriten.includes`) und korrekter Button-Text

#### (b) `toggleFavorite(id)` (4 Punkte)

```javascript
function toggleFavorite(id) {
    const index = favoriten.indexOf(id);
    if (index === -1) {
        favoriten.push(id);
    } else {
        favoriten.splice(index, 1);
    }
    renderBooks();
}
```

Alternativ mit `includes()` + `filter()`:

```javascript
function toggleFavorite(id) {
    if (favoriten.includes(id)) {
        favoriten = favoriten.filter(fid => fid !== id);
    } else {
        favoriten.push(id);
    }
    renderBooks();
}
```

**Bewertung:**
- 1 P: Prüfen ob ID bereits in `favoriten`
- 1 P: Hinzufügen falls nicht vorhanden (`push`)
- 1 P: Entfernen falls vorhanden (`splice` oder `filter`)
- 1 P: `renderBooks()` aufrufen

#### (c) Event Listener auf Button (3 Punkte)

Entweder innerhalb von `renderBooks()` nach dem Erstellen:

```javascript
card.querySelector(".fav-btn").addEventListener("click", () => {
    toggleFavorite(buch.id);
});
```

Oder mit Event Delegation außerhalb:

```javascript
document.querySelector("#booklist").addEventListener("click", (e) => {
    if (e.target.classList.contains("fav-btn")) {
        const id = Number(e.target.dataset.id);
        toggleFavorite(id);
    }
});
```

Oder als Teil des `renderBooks()` mit `data-id`:

```javascript
container.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        toggleFavorite(Number(btn.dataset.id));
    });
});
```

**Bewertung:**
- 1 P: Event Listener auf dem Button registrieren
- 1 P: Korrekte ID übergeben (z.B. über `data-id` Attribut oder Closure)
- 1 P: `toggleFavorite` korrekt aufrufen

#### (d) Initialer Aufruf als ES-Modul (3 Punkte)

```javascript
renderBooks();
```

Da `app.js` als `<script type="module">` geladen wird, wird es automatisch **deferred** ausgeführt
(das DOM ist bereits vollständig geladen). Ein einfacher Aufruf von `renderBooks()` am Ende der
Datei reicht aus. Es ist kein `DOMContentLoaded`-Listener oder `window.onload` nötig.

Falls Funktionen aus dem HTML `onclick` erreichbar sein sollen:

```javascript
window.toggleFavorite = toggleFavorite;
window.renderBooks = renderBooks;
renderBooks();
```

**Bewertung:**
- 1 P: `renderBooks()` wird am Ende aufgerufen
- 1 P: Erwähnung, dass Module automatisch deferred sind (kein DOMContentLoaded nötig)
- 1 P: Falls nötig, `window`-Zuweisung für externe Aufrufe

---

## Punkteübersicht

| Teil | Max. Punkte |
|------|-------------|
| MC (10 x 4P) | 40 |
| Frage 11 | 15 |
| Frage 12 | 15 |
| Frage 13 | 15 |
| **Gesamt** | **85** |

### Notenschlüssel

| Prozent | Note |
|---------|------|
| >= 89% (>= 76P) | Sehr gut (1) |
| >= 76% (>= 65P) | Gut (2) |
| >= 63% (>= 54P) | Befriedigend (3) |
| >= 50% (>= 43P) | Genügend (4) |
| < 50% (< 43P) | Nicht genügend (5) |
