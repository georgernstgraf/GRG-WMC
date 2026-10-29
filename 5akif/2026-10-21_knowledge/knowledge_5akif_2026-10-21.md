# Knowledge Check – 5akif

**Name:** ______________________
**Datum:** 21.10.2026
**Themen:** Promises, async/await & Fehlerbehandlung, TypeScript & Deno, REST/HTTP (Hono), Drizzle ORM, Lambdas & KI-Coding-Workflow

**Gesamtpunkte: 145**

---

## Multiple-Choice Fragen (25 × 4 Punkte = 100 Punkte)

Jede Frage hat 4 Antwortmöglichkeiten. Kreuze alle zutreffenden Antworten an.
Du erhältst 1 Punkt für jede Option, die du richtig behandelst (angekreuzt wenn richtig, nicht angekreuzt wenn falsch).

Falls du eine Frage als mehrdeutig empfindest, kannst du **–** ankreuzen und kurz begründen.

---

### Frage 1: Promise-Zustände

Welche Aussagen zu den Zuständen eines Promise sind richtig?

- [ ] a) Ein einmal `rejected` Promise kann wieder in den Zustand `pending` zurückwechseln
- [ ] b) Ein Promise beginnt im Zustand `pending`
- [ ] c) `fulfilled` und `rejected` sind die zwei Arten, wie ein Promise `settled` werden kann
- [ ] d) `settled` bedeutet, dass das Promise noch auf ein Ergebnis wartet

---

### Frage 2: Ausführungsreihenfolge

Gegeben ist folgender Code:

```js
const reihenfolge = [];
reihenfolge.push("1");

const p = new Promise((resolve) => {
    reihenfolge.push("2");
    resolve("ok");
});

reihenfolge.push("3");
p.then(() => { reihenfolge.push("4"); });
reihenfolge.push("5");
```

Welche Aussagen sind richtig?

- [ ] a) Die Ausgabe-Reihenfolge ist 1 → 2 → 3 → 5 → 4
- [ ] b) Die Ausgabe-Reihenfolge ist 1 → 2 → 3 → 4 → 5
- [ ] c) Nach `resolve("ok")` läuft der `.then()`-Callback sofort weiter — noch bevor "3" gepusht wird
- [ ] d) Der Callback in `.then()` wird erst ausgeführt, nachdem der aktuelle synchrone Code beendet ist

---

### Frage 3: Vergessenes `return` in der `.then()`-Kette

Gegeben ist folgender Code:

```js
doSomething()
    .then((url) => {
        fetch(url);   // return vergessen!
    })
    .then((result) => {
        // ... weiter mit result
    });
```

Welche Aussagen sind richtig?

- [ ] a) `result` hat im zweiten `.then()` den Wert `undefined`
- [ ] b) Die Kette bricht deshalb mit einem Fehler ab
- [ ] c) `fetch(url)` selbst wird trotzdem ausgeführt, sein Ergebnis geht aber für die nächste Stufe verloren
- [ ] d) Mit einem Pfeil-Ausdruck ohne geschweifte Klammern — `.then((url) => fetch(url))` — wird das Promise von `fetch` zurückgegeben und das nächste `.then()` erhält das `Response`-Objekt

---

### Frage 4: `.then()`, `.catch()` und `.finally()`

Welche Aussagen zur Promise-Kette sind richtig?

- [ ] a) `.catch()` fängt Fehler ab, die in irgendeinem `.then()`-Callback der Kette vorher auftreten
- [ ] b) `throw new Error(...)` innerhalb eines `.then()`-Callbacks beendet diesen Callback und springt in das nächste `.catch()`
- [ ] c) `.catch()` fängt nur Fehler ab, die im direkt vorherigen `.then()` auftreten
- [ ] d) `.finally()` läuft immer — egal ob die Kette erfolgreich war oder ein Fehler auftrat

---

### Frage 5: Synchron vs. asynchron

Welche Aussagen zu synchronem und asynchronem Code sind richtig?

- [ ] a) Synchron: der Aufrufer wartet (blockiert), bis das Ergebnis zurückkommt
- [ ] b) Asynchron: der Aufrufer macht sofort weiter, das Ergebnis kommt später — per Callback, Promise oder Event
- [ ] c) Eine E-Mail absenden und weiterarbeiten, bis die Antwort irgendwann kommt, ist ein Beispiel für asynchrones Vorgehen
- [ ] d) Asynchroner Code ist grundsätzlich einfacher zu debuggen als synchroner Code

---

### Frage 6: Das `async`-Schlüsselwort

Welche Aussagen zu `async`-Funktionen sind richtig?

- [ ] a) Eine `async`-Funktion gibt immer ein `Promise` zurück, auch wenn sie einen einfachen Wert wie `42` zurückgibt
- [ ] b) `async function foo() { return 42; }` — `foo()` resolved mit dem Wert `42`
- [ ] c) `async` entpackt den Rückgabewert, sodass die Funktion direkt den Wert liefert und kein `Promise` mehr nötig ist
- [ ] d) Wirft eine `async`-Funktion eine Exception, wird ihr Promise `rejected` — der Fehler landet im `catch` bzw. `.catch()`

---

### Frage 7: Das `await`-Schlüsselwort

Welche Aussagen zu `await` sind richtig?

- [ ] a) `await` pausiert die Ausführung der `async`-Funktion, bis das Promise erfüllt ist
- [ ] b) `await` entpackt den Wert aus dem Promise — aus `Promise<Bestellung>` wird `Bestellung`
- [ ] c) `await` blockiert den gesamten JavaScript-Thread, bis das Promise erfüllt ist
- [ ] d) `await` darf nur innerhalb einer `async`-Funktion (oder auf Modulebene) verwendet werden

---

### Frage 8: `try/catch/finally` mit async/await

Welche Aussagen zur Fehlerbehandlung mit async/await sind richtig?

- [ ] a) `try/catch` ersetzt bei der Verwendung von async/await das `.catch()` der Promise-Kette
- [ ] b) Der `finally`-Block läuft immer — bei Erfolg, bei abgefangenem Fehler und beim Re-Throw
- [ ] c) In TypeScript ist `err` im `catch`-Block vom Typ `unknown` — deshalb braucht man z. B. einen Helfer wie `fehlerText(err)`
- [ ] d) Der `finally`-Block wird nur ausgeführt, wenn ein Fehler aufgetreten ist

---

### Frage 9: Eigene Error-Typen und `instanceof`

Gegeben ist folgender Aufbau aus der Bestell-Pipeline:

```ts
class ValidationError extends Error { /* ... */ }
class PaymentError extends Error { /* ... */ }

try {
    const b = await bestellen(artikel, menge);
    const b2 = await bezahlen(b, karte);
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Stufe bestellen:", err.message);
    } else if (err instanceof PaymentError) {
        console.log("Stufe bezahlen:", err.message);
    }
}
```

Welche Aussagen sind richtig?

- [ ] a) `err instanceof PaymentError` ist `true`, wenn in `bezahlen` ein `PaymentError` geworfen wurde
- [ ] b) `err instanceof Error` wäre auch für einen `PaymentError` `true` — `instanceof` folgt der Vererbungskette
- [ ] c) `err instanceof PaymentError` fängt auch `ValidationError`-Instanzen ab
- [ ] d) `this.name` muss im Konstruktor der eigenen Error-Klasse gesetzt werden, sonst heißt der Fehler im Log nur „Error"

---

### Frage 10: Granulare Fehlerbehandlung und Re-Throw

Die „Variante B" der Bestell-Pipeline hat ein eigenes `try/catch` pro Stufe:

```ts
try {
    b = await bestellen(artikel, menge);
} catch (err) {
    console.log(`Abbruch: ${fehlerText(err)}`);
    return;
}

try {
    b = await bezahlen(b, karte);
} catch (err) {
    b = await bezahlen(b, "4242-1111-1111-1111"); // Fallback-Karte
}

try {
    await liefern(b, plz);
} catch (err) {
    throw err; // Re-Throw nach dem Logging
}
```

Welche Aussagen sind richtig?

- [ ] a) Variante B erlaubt es, nach einem fehlgeschlagenen Bezahlen mit einer Fallback-Karte weiterzuarbeiten
- [ ] b) `throw err` im `catch`-Block reicht den Fehler an den Aufrufer weiter (Re-Throw)
- [ ] c) `return` im `catch`-Block von `bestellen` beendet die Funktion — ohne Bestellung geht nichts weiter
- [ ] d) In Variante B kann überhaupt kein Fehler mehr entstehen, weil jede Stufe ein eigenes `try/catch` hat

---

### Frage 11: Der Simulations-Helper

Gegeben ist folgender Helper aus der Demo:

```ts
const simulate = <T>(ms: number, wert: T): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(wert), ms));
```

Welche Aussagen sind richtig?

- [ ] a) `simulate` gibt ein Promise zurück, das nach `ms` Millisekunden mit `wert` resolved
- [ ] b) `await simulate(300, { nr: 4711 })` liefert nach 300 ms das Objekt `{ nr: 4711 }`
- [ ] c) `resolve` wird sofort aufgerufen — die Wartezeit spielt keine Rolle
- [ ] d) `setTimeout` blockiert während der Wartezeit den gesamten Programmablauf

---

### Frage 12: TypeScript-Grundlagen

Welche Aussagen zu TypeScript sind richtig?

- [ ] a) Ein `interface Auftrag { artikel: string; menge: number; }` existiert zur Laufzeit als echtes Objekt im Speicher
- [ ] b) Fast kein gültiges TypeScript ist auch gültiges JavaScript
- [ ] c) TypeScript-Typen werden zur Laufzeit im Browser geprüft
- [ ] d) Jedes JavaScript ist auch gültiges TypeScript

---

### Frage 13: Interfaces und Typ-Annotationen

Gegeben ist folgender Code:

```ts
interface Auftrag {
    artikel: string;
    menge: number;
}

interface Bestellung extends Auftrag {
    nr: number;
    zahlung?: string;
}

async function bestellen(artikel: string, menge: number): Promise<Bestellung> { /* ... */ }
```

Welche Aussagen sind richtig?

- [ ] a) `zahlung?` ist optional — die Eigenschaft kann in einer `Bestellung` fehlen
- [ ] b) `Bestellung` hat alle Felder von `Auftrag` plus `nr` und `zahlung`
- [ ] c) `zahlung?: string` bedeutet, dass `zahlung` automatisch den Standardwert `"optional"` bekommt
- [ ] d) `Promise<Bestellung>` als Rückgabetyp kündigt an, dass die Funktion ein Promise liefert, das mit einer `Bestellung` resolved

---

### Frage 14: Runtime Deno

Welche Aussagen zu Deno sind richtig?

- [ ] a) Deno ist eine JavaScript/TypeScript-Runtime — neben Browser, Node.js und Bun
- [ ] b) `deno run demo.ts` führt TypeScript direkt aus — kein separater Transpile-Schritt ist nötig
- [ ] c) `deno check demo.ts` prüft die Typen, ohne das Programm auszuführen
- [ ] d) Für Deno muss TypeScript zuerst mit `tsc` nach JavaScript übersetzt werden, bevor `deno run` es ausführen kann

---

### Frage 15: HTTP-Methoden in REST

Welche Aussagen zu HTTP-Methoden in einer REST-API sind richtig?

- [ ] a) `GET` liest eine Ressource, ohne sie zu verändern
- [ ] b) `POST` legt typischerweise eine neue Ressource an
- [ ] c) `PATCH` ändert Teile einer bestehenden Ressource
- [ ] d) `GET` und `POST` haben in REST dieselbe Bedeutung — sie unterscheiden sich nur im Namen

---

### Frage 16: Statuscodes

Im Items-Demo wird mit `Response.json(data, { status })` geantwortet. Welche Zuordnungen sind richtig?

- [ ] a) Ein `POST`, der erfolgreich ein neues Item anlegt, antwortet mit `201`
- [ ] b) Ein `GET` mit einer `id`, zu der es kein Item gibt, antwortet mit `404`
- [ ] c) Ein `POST`, bei dem das Pflichtfeld `name` fehlt, antwortet mit `400`
- [ ] d) Eine Methode, die auf `/api/items` nicht erlaubt ist, antwortet mit `404`

---

### Frage 17: Verhalten der Handler

Gegeben ist die Items-API mit den Endpoints `/api/items` (GET/POST/PATCH/DELETE). Welche Aussagen zum Verhalten des Demo-Codes sind richtig?

- [ ] a) `PATCH` aktualisiert nur die Felder, die im Request-Body vorkommen — `body.name !== undefined`
- [ ] b) Ein `DELETE` ohne `id`-Query-Param antwortet mit `400`
- [ ] c) Ein `GET` mit `id`-Query-Param, zu dem kein Item existiert, antwortet mit `400`
- [ ] d) Der Router unter `/api/items` verzweigt je nach `req.method` auf GET, POST, PATCH oder DELETE

---

### Frage 18: REST und JSON

Welche Aussagen zu REST und JSON sind richtig?

- [ ] a) REST organisiert die API um Ressourcen (URLs), die mit HTTP-Methoden bearbeitet werden
- [ ] b) `Response.json(data, { status })` erzeugt eine JSON-Antwort mit dem gewünschten Statuscode
- [ ] c) `req.json()` gibt das geparste Objekt synchron direkt zurück
- [ ] d) JSON ist ein Textformat, in dem Objekte als Schlüssel-Wert-Paare dargestellt werden

---

### Frage 19: Was ein ORM tut — und was nicht

Welche Aussagen zu ORMs (am Beispiel Drizzle) sind richtig?

- [ ] a) Ein ORM ersetzt SQL — SQL muss man nie wieder lesen können
- [ ] b) ORM = Object-Relational Mapping: Zeilen aus relationalen Tabellen werden zu Objekten in der Programmiersprache hin und her gemappt
- [ ] c) Drizzle ist SQL-nah: mit `.toSQL()` kann man sich das erzeugte Statement jederzeit ansehen
- [ ] d) Drizzle parametrisiert Werte by default — die Werte stehen im `params`-Array, nicht im SQL-Text

---

### Frage 20: Schema-first in TypeScript

Gegeben ist ein Ausschnitt aus dem Schema:

```ts
export const artist = sqliteTable("artist", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    gruendungsjahr: integer("gruendungsjahr"),
});
```

Welche Aussagen sind richtig?

- [ ] a) `sqliteTable(...)` legt keine Tabelle in der Datenbank an — es definiert nur, wie Tabellen und Zeilen in TypeScript aussehen
- [ ] b) Jede Spalte hat zwei Namen: den TypeScript-Namen, über den man im Code spricht (z. B. `album.artistId`), und den DB-Spaltennamen, der in der Klammer steht (z. B. `artist_id`)
- [ ] c) `gruendungsjahr` ohne `.notNull()` hat im Abfrage-Ergebnis den Typ `number | null`
- [ ] d) Die Tabellen entstehen beim ersten `insert` automatisch in der Datenbank

---

### Frage 21: Lesen mit `select`, `where` und `toSQL()`

Gegeben ist folgende Query:

```ts
const q = db.select().from(album).where(eq(album.artistId, 1));
console.log(q.toSQL().sql);
```

Welche Aussagen sind richtig?

- [ ] a) Das erzeugte SQL listet die Spalten explizit auf — etwa `"id", "titel", "jahr", "artist_id"` — auch wenn man `select()` ohne Argumente schreibt
- [ ] b) Der Wert `1` steht im `params`-Array, nicht im SQL-Text
- [ ] c) Die Query wird ausgeführt, sobald `db.select()` aufgerufen wird
- [ ] d) `.toSQL()` zeigt nur den SQL-Text und die Parameter an, ohne die Query auszuführen

---

### Frage 22: Schreiben mit `insert`, `update`, `delete`

Welche Aussagen zum Schreiben mit Drizzle sind richtig?

- [ ] a) `db.insert(album).values({ ... }).returning()` gibt die neue Zeile inklusive vergebener `id` zurück
- [ ] b) `db.update(track).set({ dauerSek: 0 })` ohne `.where()` ändert alle Zeilen der Tabelle
- [ ] c) Drizzle verweigert ein `update` oder `delete` ohne `where`
- [ ] d) Ein `insert` mit `artistId: 99`, ohne dass Artist 99 existiert, scheitert an der Datenbank (`FOREIGN KEY constraint failed`) — die DB schützt die Konsistenz, nicht das ORM

---

### Frage 23: Auswerten mit `join`, `count`, `groupBy`

Gegeben ist die Auswertung aus der Demo:

```ts
const viele = await db.select({ titel: album.titel, tracks: count() })
    .from(track)
    .innerJoin(album, eq(track.albumId, album.id))
    .groupBy(album.id);
```

Welche Aussagen sind richtig?

- [ ] a) Der `innerJoin` braucht die Verbindungsbedingung explizit — hier `eq(track.albumId, album.id)`
- [ ] b) Die Query liefert pro Album die Anzahl seiner Tracks
- [ ] c) `count()` zählt ohne `groupBy` die Zeilen der ganzen Tabelle (entspricht `count(*)`)
- [ ] d) `like(track.titel, "Echo%")` findet alle Titel, die irgendwo das Wort „Echo" enthalten

---

### Frage 24: Lambdas mit `filter` und `sort`

Gegeben ist folgender Code aus dem Recap:

```ts
const myarray = [1, 7, 4, 2, 8, 3, 13, 11];

const even = myarray.filter((x) => x % 2 === 0);
const sorted = myarray.sort((a, b) => b - a);
```

Welche Aussagen sind richtig?

- [ ] a) `sort((a, b) => b - a)` sortiert das Array aufsteigend
- [ ] b) `(x) => x % 2 === 0` ist eine Lambda-Funktion (Pfeilfunktion) mit dem Parameter `x`
- [ ] c) `filter` gibt ein neues Array mit allen Elementen zurück, für die der Lambda-Ausdruck `true` liefert
- [ ] d) `filter` verändert das ursprüngliche Array

---

### Frage 25: KI und Coding — Workflow mit Git

Im Unterricht haben wir mit KI-Coding-Agenten gearbeitet (z. B. opencode) und dabei den Git-Dreiklang benutzt. Welche Aussagen sind richtig?

- [ ] a) `git add` überträgt die Änderungen direkt auf GitHub — ein späteres `commit` ist dann nicht mehr nötig
- [ ] b) `git commit` speichert die vorbereiteten Änderungen lokal im Repo-Verlauf, `git push` überträgt sie zum Remote-Repo (z. B. GitHub)
- [ ] c) Bei der Arbeit mit einem KI-Agenten prüft man die erzeugten Änderungen selbst, bevor sie committet werden
- [ ] d) Der Git-Dreiklang lautet: `git add` → `git commit` → `git push`

---

## Freitext-Fragen (3 × 15 Punkte = 45 Punkte)

### Frage 26: Promise-Lifecycle und Pipeline-Code (15 Punkte)

Gegeben ist folgender Code aus der Bestell-Pipeline:

```ts
async function lauf(): Promise<void> {
    try {
        const b  = bestellen("USB-C Hub", 2);                  // (1)
        const b2 = bezahlen(b, "4242-1111-1111-1111");         // (2)
        const b3 = liefern(b2, "1100");                        // (3)
        console.log("fertig:", b3);
    } catch (err) {
        console.log("Fehler:", err);
    } finally {
        console.log("— Lauf beendet");
    }
}
```

Bearbeite die drei Teilaufgaben:

1. **Lifecycle:** Beschreibe den Lebenszyklus eines Promises — mit welchem Zustand startet es, welche Endzustände gibt es, und was bedeutet `settled`?
2. **Fehler finden und korrigieren:** Der Code enthält einen Fehler. Erkläre, was an den Stellen (1)–(3) falsch ist, und schreibe den korrigierten Code auf.
3. **Fehlerbehandlung:** Erkläre, wann der `catch`-Block greift und was der `finally`-Block macht. Nenne eine Möglichkeit, wie man im `catch` unterscheiden kann, aus welcher Stufe (bestellen/bezahlen/liefern) der Fehler stammt.

**Antwort:**

```
// Deine Antwort hier:


```

---

### Frage 27: Drizzle-Query ↔ SQL (15 Punkte)

Gegeben ist das Schema aus dem Musik-Katalog:

```ts
export const artist = sqliteTable("artist", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    gruendungsjahr: integer("gruendungsjahr"),
});

export const album = sqliteTable("album", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    titel: text("titel").notNull(),
    jahr: integer("jahr"),
    artistId: integer("artist_id").notNull().references(() => artist.id),
});

export const track = sqliteTable("track", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    titel: text("titel").notNull(),
    dauerSek: integer("dauer_sek").notNull(),
    albumId: integer("album_id").notNull().references(() => album.id),
});
```

Bearbeite die drei Teilaufgaben:

1. **Vorhersage:** Welches SQL (Spaltenliste, WHERE-Klausel, Parameter) erzeugt diese Query? Notiere es, bevor du nachdenkst, ob sie läuft:
   `db.select().from(artist).where(eq(artist.gruendungsjahr, 1999))`
2. **Drizzle-Query hinschreiben:** Schreibe die Drizzle-Query für „Anzahl Tracks je Album" (Album-Titel plus Track-Anzahl, mit `innerJoin` und `groupBy`).
3. **Interleaving — dasselbe als reines SQL:** Schreibe dieselbe Frage als reines SQL und markiere, wo Drizzle dieselben Bausteine erzeugt (JOIN, GROUP BY, COUNT).

**Antwort:**

```
-- Deine Antwort hier:


```

---

### Frage 28: REST-Endpoint-Design (15 Punkte)

Unsere Items-API (Demo mit Deno) verwaltet Items über den Endpoint `/api/items`:

```ts
interface Item {
    id: number;
    name: string;
    description: string;
}
```

Bearbeite die drei Teilaufgaben:

1. **HTTP-Methoden:** Erkläre, welche Aufgaben `GET`, `POST`, `PATCH` und `DELETE` auf `/api/items` in einer REST-API haben.
2. **Statuscodes:** Nenne zu jedem dieser Fälle den passenden Statuscode aus der Demo und begründe kurz:
   a) erfolgreiches `GET` aller Items
   b) erfolgreiches Anlegen eines Items per `POST`
   c) `POST` ohne Pflichtfeld `name`
   d) `GET` mit einer `id`, zu der es kein Item gibt
   e) Methode `PUT` auf `/api/items`, die der Router nicht erlaubt
3. **POST-Ablauf:** Beschreibe in Stichpunkten den Ablauf eines `POST /api/items`-Requests durch den Handler — vom Ankommen des Requests bis zur Antwort (inkl. `req.json()`, Validierung, `Response.json(..., 201)`).

**Antwort:**

```
// Deine Antwort hier:


```

---

**Gesamtpunkte: 145**

---

*Trage oben deinen Namen und das Datum ein — und: Gutes Gelingen!*
