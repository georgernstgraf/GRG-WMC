# Knowledge Check – 5akif – Lösungen

**Datum:** 21.10.2026
**Themen:** Promises, async/await & Fehlerbehandlung, TypeScript & Deno, REST/HTTP (Hono), Drizzle ORM, Lambdas & KI-Coding-Workflow

**Gesamtpunkte: 145**

---

## Multiple-Choice Lösungen

### Frage 1: Promise-Zustände
- [ ] a) Ein einmal `rejected` Promise kann wieder in den Zustand `pending` zurückwechseln ✗ – Zustandsübergänge sind endgültig, es gibt keinen Rückweg
- [x] b) Ein Promise beginnt im Zustand `pending` ✓
- [x] c) `fulfilled` und `rejected` sind die zwei Arten, wie ein Promise `settled` werden kann ✓
- [ ] d) `settled` bedeutet, dass das Promise noch auf ein Ergebnis wartet ✗ – `settled` bedeutet, das Ergebnis steht fest (erfüllt oder abgelehnt)

**Punkte:** a ✗, b ✓, c ✓, d ✗ → korrekt behandelt: a ☐, b ☑, c ☑, d ☐ → 3/4

---

### Frage 2: Ausführungsreihenfolge
- [x] a) Die Ausgabe-Reihenfolge ist 1 → 2 → 3 → 5 → 4 ✓
- [ ] b) Die Ausgabe-Reihenfolge ist 1 → 2 → 3 → 4 → 5 ✗ – die `.then()`-Callback läuft erst nach dem synchronen Code
- [ ] c) Nach `resolve("ok")` läuft der `.then()`-Callback sofort weiter — noch bevor "3" gepusht wird ✗ – der `.then()`-Callback läuft erst nach dem gesamten synchronen Code
- [x] d) Der Callback in `.then()` wird erst ausgeführt, nachdem der aktuelle synchrone Code beendet ist ✓

**Punkte:** korrekt behandelt: a ☑, b ☐, c ☐, d ☑ → 4/4

**Erklärung:** Der Executor läuft sofort synchron („2" wird direkt gepusht), `resolve("ok")` markiert das Promise nur als erfüllt. Der `.then()`-Callback wandert in die Microtask-Queue und kommt erst nach dem gesamten synchronen Code („3", „5") dran.

---

### Frage 3: Vergessenes `return` in der `.then()`-Kette
- [x] a) `result` hat im zweiten `.then()` den Wert `undefined` ✓ – genau die Falle aus dem promise-demo.ts vom 18.9.
- [ ] b) Die Kette bricht deshalb mit einem Fehler ab ✗ – kein Fehler, nur der Wert geht verloren
- [x] c) `fetch(url)` selbst wird trotzdem ausgeführt, sein Ergebnis geht aber für die nächste Stufe verloren ✓
- [x] d) Mit `.then((url) => fetch(url))` wird das Promise von `fetch` zurückgegeben und das nächste `.then()` erhält das `Response`-Objekt ✓ – ohne geschweifte Klammern ist der Ausdruck zugleich der Rückgabewert

**Punkte:** korrekt behandelt: a ☑, b ☐, c ☑, d ☑ → 4/4

---

### Frage 4: `.then()`, `.catch()` und `.finally()`
- [x] a) `.catch()` fängt Fehler ab, die in irgendeinem `.then()`-Callback der Kette vorher auftreten ✓
- [x] b) `throw new Error(...)` innerhalb eines `.then()`-Callbacks beendet diesen Callback und springt in das nächste `.catch()` ✓
- [ ] c) `.catch()` fängt nur Fehler ab, die im direkt vorherigen `.then()` auftreten ✗ – es fängt Fehler aus der gesamten Kette
- [x] d) `.finally()` läuft immer — egal ob die Kette erfolgreich war oder ein Fehler auftrat ✓

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 5: Synchron vs. asynchron
- [x] a) Synchron: der Aufrufer wartet (blockiert), bis das Ergebnis zurückkommt ✓ – „jemanden anrufen und in der Leitung bleiben"
- [x] b) Asynchron: der Aufrufer macht sofort weiter, das Ergebnis kommt später — per Callback, Promise oder Event ✓ – „eine Nachricht schicken und weiterarbeiten"
- [x] c) Eine E-Mail absenden und weiterarbeiten, bis die Antwort irgendwann kommt, ist ein Beispiel für asynchrones Vorgehen ✓
- [ ] d) Asynchroner Code ist grundsätzlich einfacher zu debuggen als synchroner Code ✗ – umgekehrt: synchron ist einfacher zu verstehen und zu debuggen, asynchron ist komplexer (Fehlerbehandlung, Reihenfolge, Callback Hell)

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☑, d ☐ → 4/4

---

### Frage 6: Das `async`-Schlüsselwort
- [x] a) Eine `async`-Funktion gibt immer ein `Promise` zurück, auch wenn sie einen einfachen Wert wie `42` zurückgibt ✓
- [x] b) `async function foo() { return 42; }` — `foo()` resolved mit dem Wert `42` ✓
- [ ] c) `async` entpackt den Rückgabewert, sodass die Funktion direkt den Wert liefert und kein `Promise` mehr nötig ist ✗ – genau das übernimmt `await` auf der Aufrufer-Seite, nicht `async`
- [x] d) Wirft eine `async`-Funktion eine Exception, wird ihr Promise `rejected` — der Fehler landet im `catch` bzw. `.catch()` ✓

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 7: Das `await`-Schlüsselwort
- [x] a) `await` pausiert die Ausführung der `async`-Funktion, bis das Promise erfüllt ist ✓
- [x] b) `await` entpackt den Wert aus dem Promise — aus `Promise<Bestellung>` wird `Bestellung` ✓
- [ ] c) `await` blockiert den gesamten JavaScript-Thread ✗ – nur die async-Funktion wird pausiert, andere Aufgaben laufen weiter
- [x] d) `await` darf nur innerhalb einer `async`-Funktion (oder auf Modulebene) verwendet werden ✓

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 8: `try/catch/finally` mit async/await
- [x] a) `try/catch` ersetzt bei der Verwendung von async/await das `.catch()` der Promise-Kette ✓
- [x] b) Der `finally`-Block läuft immer — bei Erfolg, bei abgefangenem Fehler und beim Re-Throw ✓
- [x] c) In TypeScript ist `err` im `catch`-Block vom Typ `unknown` — deshalb braucht man z. B. einen Helfer wie `fehlerText(err)` ✓
- [ ] d) Der `finally`-Block wird nur ausgeführt, wenn ein Fehler aufgetreten ist ✗ – er läuft in jedem Fall (Ideal für Aufräumarbeiten)

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☑, d ☐ → 4/4

---

### Frage 9: Eigene Error-Typen und `instanceof`
- [x] a) `err instanceof PaymentError` ist `true`, wenn in `bezahlen` ein `PaymentError` geworfen wurde ✓
- [x] b) `err instanceof Error` wäre auch für einen `PaymentError` `true` — `instanceof` folgt der Vererbungskette ✓
- [ ] c) `err instanceof PaymentError` fängt auch `ValidationError`-Instanzen ab ✗ – `instanceof` unterscheidet nach konkreter Klasse (und deren Subklassen), die drei Error-Typen sind Geschwister
- [x] d) `this.name` muss im Konstruktor der eigenen Error-Klasse gesetzt werden, sonst heißt der Fehler im Log nur „Error" ✓

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 10: Granulare Fehlerbehandlung und Re-Throw
- [x] a) Variante B erlaubt es, nach einem fehlgeschlagenen Bezahlen mit einer Fallback-Karte weiterzuarbeiten ✓
- [x] b) `throw err` im `catch`-Block reicht den Fehler an den Aufrufer weiter (Re-Throw) ✓
- [x] c) `return` im `catch`-Block von `bestellen` beendet die Funktion — ohne Bestellung geht nichts weiter ✓
- [ ] d) In Variante B kann überhaupt kein Fehler mehr entstehen, weil jede Stufe ein eigenes `try/catch` hat ✗ – im Gegenteil: im Beispiel wird der ShippingError sogar bewusst weitergeworfen; try/catch behandelt Fehler, es verhindert sie nicht

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☑, d ☐ → 4/4

---

### Frage 11: Der Simulations-Helper
- [x] a) `simulate` gibt ein Promise zurück, das nach `ms` Millisekunden mit `wert` resolved ✓
- [x] b) `await simulate(300, { nr: 4711 })` liefert nach 300 ms das Objekt `{ nr: 4711 }` ✓
- [ ] c) `resolve` wird sofort aufgerufen — die Wartezeit spielt keine Rolle ✗ – `resolve` wird erst im `setTimeout`-Callback nach `ms` aufgerufen
- [ ] d) `setTimeout` blockiert während der Wartezeit den gesamten Programmablauf ✗ – das Warten ist asynchron, der Thread bleibt frei

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☐ → 4/4

---

### Frage 12: TypeScript-Grundlagen
- [ ] a) Ein `interface Auftrag { ... }` existiert zur Laufzeit als echtes Objekt im Speicher ✗ – Interfaces verschwinden beim Transpilieren, sie existieren nur zur Typ-Prüfung
- [x] b) Fast kein gültiges TypeScript ist auch gültiges JavaScript ✓ – Typ-Annotationen und Interfaces gibt es in reinem JavaScript nicht
- [ ] c) TypeScript-Typen werden zur Laufzeit im Browser geprüft ✗ – Typen werden zur Entwicklungs-/Prüfzeit geprüft und danach entfernt
- [x] d) Jedes JavaScript ist auch gültiges TypeScript ✓

**Punkte:** korrekt behandelt: a ☐, b ☑, c ☐, d ☑ → 3/4

---

### Frage 13: Interfaces und Typ-Annotationen
- [x] a) `zahlung?` ist optional — die Eigenschaft kann in einer `Bestellung` fehlen ✓
- [x] b) `Bestellung` hat alle Felder von `Auftrag` plus `nr` und `zahlung` ✓ – das leistet `extends`
- [ ] c) `zahlung?: string` bedeutet, dass `zahlung` automatisch den Standardwert `"optional"` bekommt ✗ – das `?` markiert nur die Optionalität, es setzt keinen Wert
- [x] d) `Promise<Bestellung>` als Rückgabetyp kündigt an, dass die Funktion ein Promise liefert, das mit einer `Bestellung` resolved ✓

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 14: Runtime Deno
- [x] a) Deno ist eine JavaScript/TypeScript-Runtime — neben Browser, Node.js und Bun ✓
- [x] b) `deno run demo.ts` führt TypeScript direkt aus — kein separater Transpile-Schritt ist nötig ✓
- [x] c) `deno check demo.ts` prüft die Typen, ohne das Programm auszuführen ✓
- [ ] d) Für Deno muss TypeScript zuerst mit `tsc` nach JavaScript übersetzt werden ✗ – genau das entfällt; Deno führt `.ts` direkt aus

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☑, d ☐ → 4/4

---

### Frage 15: HTTP-Methoden in REST
- [x] a) `GET` liest eine Ressource, ohne sie zu verändern ✓
- [x] b) `POST` legt typischerweise eine neue Ressource an ✓
- [x] c) `PATCH` ändert Teile einer bestehenden Ressource ✓
- [ ] d) `GET` und `POST` haben in REST dieselbe Bedeutung ✗ – sie sind klar unterschieden: lesen vs. anlegen

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☑, d ☐ → 4/4

---

### Frage 16: Statuscodes
- [x] a) Ein `POST`, der erfolgreich ein neues Item anlegt, antwortet mit `201` ✓ – `json(newItem, 201)` im Demo-Code
- [x] b) Ein `GET` mit einer `id`, zu der es kein Item gibt, antwortet mit `404` ✓ – „Item nicht gefunden"
- [x] c) Ein `POST`, bei dem das Pflichtfeld `name` fehlt, antwortet mit `400` ✓ – „Name ist erforderlich"
- [ ] d) Eine Methode, die auf `/api/items` nicht erlaubt ist, antwortet mit `404` ✗ – der Router antwortet mit `405` (Method Not Allowed)

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☑, d ☐ → 4/4

---

### Frage 17: Verhalten der Handler
- [x] a) `PATCH` aktualisiert nur die Felder, die im Request-Body vorkommen — `body.name !== undefined` ✓
- [x] b) Ein `DELETE` ohne `id`-Query-Param antwortet mit `400` ✓ – „id als Query-Param erforderlich"
- [ ] c) Ein `GET` mit `id`-Query-Param, zu dem kein Item existiert, antwortet mit `400` ✗ – es antwortet mit `404`
- [x] d) Der Router unter `/api/items` verzweigt je nach `req.method` auf GET, POST, PATCH oder DELETE ✓ – `switch (req.method)`

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 18: REST und JSON
- [x] a) REST organisiert die API um Ressourcen (URLs), die mit HTTP-Methoden bearbeitet werden ✓
- [x] b) `Response.json(data, { status })` erzeugt eine JSON-Antwort mit dem gewünschten Statuscode ✓
- [ ] c) `req.json()` gibt das geparste Objekt synchron direkt zurück ✗ – es gibt ein Promise zurück (im Demo-Code mit `.then()` verarbeitet)
- [x] d) JSON ist ein Textformat, in dem Objekte als Schlüssel-Wert-Paare dargestellt werden ✓

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 19: Was ein ORM tut — und was nicht
- [ ] a) Ein ORM ersetzt SQL — SQL muss man nie wieder lesen können ✗ – ein ORM ersetzt SQL nicht, es erzeugt es; wer das erzeugte SQL nicht lesen kann, baut blind
- [x] b) ORM = Object-Relational Mapping: Zeilen aus relationalen Tabellen werden zu Objekten in der Programmiersprache hin und her gemappt ✓
- [x] c) Drizzle ist SQL-nah: mit `.toSQL()` kann man sich das erzeugte Statement jederzeit ansehen ✓
- [x] d) Drizzle parametrisiert Werte by default — die Werte stehen im `params`-Array, nicht im SQL-Text ✓

**Punkte:** korrekt behandelt: a ☐, b ☑, c ☑, d ☑ → 3/4

---

### Frage 20: Schema-first in TypeScript
- [x] a) `sqliteTable(...)` legt keine Tabelle in der Datenbank an — es definiert nur, wie Tabellen und Zeilen in TypeScript aussehen ✓ – die Tabellen legt `db.ts` mit DDL an
- [x] b) Jede Spalte hat zwei Namen: den TypeScript-Namen, über den man im Code spricht (z. B. `album.artistId`), und den DB-Spaltennamen, der in der Klammer steht (z. B. `artist_id`) ✓
- [x] c) `gruendungsjahr` ohne `.notNull()` hat im Abfrage-Ergebnis den Typ `number | null` ✓
- [ ] d) Die Tabellen entstehen beim ersten `insert` automatisch in der Datenbank ✗ – die Datenbank sieht das TypeScript-Schema gar nicht; Tabellen entstehen durch DDL bzw. Migrationen

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☑, d ☐ → 4/4

---

### Frage 21: Lesen mit `select`, `where` und `toSQL()`
- [x] a) Das erzeugte SQL listet die Spalten explizit auf — etwa `"id", "titel", "jahr", "artist_id"` — auch wenn man `select()` ohne Argumente schreibt ✓
- [x] b) Der Wert `1` steht im `params`-Array, nicht im SQL-Text ✓ – Parametrisierung by default
- [ ] c) Die Query wird ausgeführt, sobald `db.select()` aufgerufen wird ✗ – der Query-Builder ist lazy: ausgeführt wird erst beim `await`
- [x] d) `.toSQL()` zeigt nur den SQL-Text und die Parameter an, ohne die Query auszuführen ✓ – der Röntgenblick ohne Ausführung

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 22: Schreiben mit `insert`, `update`, `delete`
- [x] a) `db.insert(album).values({ ... }).returning()` gibt die neue Zeile inklusive vergebener `id` zurück ✓
- [x] b) `db.update(track).set({ dauerSek: 0 })` ohne `.where()` ändert alle Zeilen der Tabelle ✓ – dieselbe Regel wie in SQL
- [ ] c) Drizzle verweigert ein `update` oder `delete` ohne `where` ✗ – Drizzle erlaubt es, wie SQL auch; die Sorgfalt liegt bei dir
- [x] d) Ein `insert` mit `artistId: 99`, ohne dass Artist 99 existiert, scheitert an der Datenbank (`FOREIGN KEY constraint failed`) ✓ – die DB schützt die Konsistenz, nicht das ORM

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☐, d ☑ → 4/4

---

### Frage 23: Auswerten mit `join`, `count`, `groupBy`
- [x] a) Der `innerJoin` braucht die Verbindungsbedingung explizit — hier `eq(track.albumId, album.id)` ✓ – Drizzle rät keine Beziehungen
- [x] b) Die Query liefert pro Album die Anzahl seiner Tracks ✓ – `count()` kombiniert mit `groupBy(album.id)`
- [x] c) `count()` zählt ohne `groupBy` die Zeilen der ganzen Tabelle (entspricht `count(*)`) ✓
- [ ] d) `like(track.titel, "Echo%")` findet alle Titel, die irgendwo das Wort „Echo" enthalten ✗ – das `%` steht am Ende, also findet es Titel, die mit „Echo" beginnen

**Punkte:** korrekt behandelt: a ☑, b ☑, c ☑, d ☐ → 4/4

---

### Frage 24: Lambdas mit `filter` und `sort`
- [ ] a) `sort((a, b) => b - a)` sortiert das Array aufsteigend ✗ – `b - a` sortiert absteigend (`a - b` wäre aufsteigend)
- [x] b) `(x) => x % 2 === 0` ist eine Lambda-Funktion (Pfeilfunktion) mit dem Parameter `x` ✓
- [x] c) `filter` gibt ein neues Array mit allen Elementen zurück, für die der Lambda-Ausdruck `true` liefert ✓
- [ ] d) `filter` verändert das ursprüngliche Array ✗ – `filter` gibt ein neues Array zurück, das Original bleibt unverändert

**Punkte:** korrekt behandelt: a ☐, b ☑, c ☑, d ☐ → 3/4

---

### Frage 25: KI und Coding — Workflow mit Git
- [ ] a) `git add` überträgt die Änderungen direkt auf GitHub — ein späteres `commit` ist dann nicht mehr nötig ✗ – `add` bereitet nur für den lokalen `commit` vor, übertragen wird mit `push`
- [x] b) `git commit` speichert die vorbereiteten Änderungen lokal im Repo-Verlauf, `git push` überträgt sie zum Remote-Repo (z. B. GitHub) ✓
- [x] c) Bei der Arbeit mit einem KI-Agenten prüft man die erzeugten Änderungen selbst, bevor sie committet werden ✓ – der Mensch bleibt verantwortlich
- [x] d) Der Git-Dreiklang lautet: `git add` → `git commit` → `git push` ✓

**Punkte:** korrekt behandelt: a ☐, b ☑, c ☑, d ☑ → 3/4

---

## Freitext-Musterlösungen

### Frage 26: Promise-Lifecycle und Pipeline-Code (15 Punkte)

**1. Lifecycle (ca. 4 Punkte):**

Ein Promise startet im Zustand `pending` (wartet auf das Ergebnis). Danach geht es genau in einen von zwei Endzuständen: `fulfilled` (auch `resolved` genannt — es kam ein Wert heraus) oder `rejected` (es ist ein Fehler aufgetreten). Zusammen heißen die beiden Endzustände `settled` — das Ergebnis steht fest. Ein einmal `settled` Promise wechselt nie wieder zurück (kein Rückweg zu `pending`, kein Wechsel zwischen fulfilled und rejected). Das Ergebnis wird mit `.then()` / `await` konsumiert, Fehler mit `.catch()` bzw. `try/catch`.

**2. Fehler finden und korrigieren (ca. 7 Punkte):**

Der Fehler: Bei (1)–(3) fehlt jeweils das `await`. `bestellen(...)` gibt ein `Promise<Bestellung>` zurück — ohne `await` ist `b` also das Promise-Objekt selbst, nicht die Bestellung. Der Code läuft trotzdem synchron weiter: `bezahlen(b, ...)` bekommt ein Promise statt einer `Bestellung` (in TypeScript würde `deno check` / die Typ-Prüfung genau das anmeckern), und `console.log("fertig:", b3)` gibt das unentpackte Promise aus statt des Ergebnisses. Der `catch`-Block hilft dabei auch nicht richtig: weil nicht gewartet wird, kann ein Fehler in den Stufen erst auftreten, wenn die Funktion längst fertig ist — er landet dann nicht mehr in diesem `try/catch`.

Korrigiert:

```ts
async function lauf(): Promise<void> {
    try {
        const b  = await bestellen("USB-C Hub", 2);
        const b2 = await bezahlen(b, "4242-1111-1111-1111");
        const b3 = await liefern(b2, "1100");
        console.log("fertig:", b3);
    } catch (err) {
        console.log("Fehler:", err);
    } finally {
        console.log("— Lauf beendet");
    }
}
```

**3. Fehlerbehandlung (ca. 4 Punkte):**

Der `catch`-Block greift, wenn innerhalb des `try`-Blocks (in einer der `await`-Stufen) eine Exception geworfen wird — z. B. ein `PaymentError`, wenn die Karte abgelehnt wird. Der `finally`-Block läuft in **jedem** Fall: bei Erfolg, bei abgefangenem Fehler und beim Re-Throw — ideal für Aufräumarbeiten und Abschluss-Meldungen. Zur Unterscheidung der Stufen gibt es zwei Varianten aus der UE:
- **Variante A:** eigene Error-Klassen pro Stufe (`ValidationError`, `PaymentError`, `ShippingError`, jeweils `extends Error`) und im gemeinsamen `catch` die Verzweigung mit `instanceof`;
- **Variante B:** granular — jede Stufe bekommt ihr eigenes `try/catch`, damit nach einem Fehlschlag weitergearbeitet werden kann (z. B. Fallback-Karte) bzw. per `throw err` (Re-Throw) der Fehler nach oben gereicht wird.

**Wertungs-Skizze (15 P):**
- Lifecycle vollständig (pending → fulfilled/rejected, settled, endgültig): 4 P (je 1 P pro Zustands-Aspekt)
- Fehler erkannt (await fehlt, b ist Promise statt Bestellung): 4 P
- Korrigierter Code mit `await` an allen drei Stellen: 3 P
- catch greift bei Exception + finally läuft immer: 2 P
- Stufen-Unterscheidung benannt (instanceof-Eigene-Error-Typen oder try pro Stufe): 2 P

---

### Frage 27: Drizzle-Query ↔ SQL (15 Punkte)

**1. Vorhersage (ca. 5 Punkte):**

```sql
select "id", "name", "gruendungsjahr"
  from "artist"
 where "artist"."gruendungsjahr" = ?
```
Parameter: `params: [1999]`

Erwartungshorizont: Spalten kommen **explizit** und in Schema-Reihenfolge (`select().from()` ohne Argument listet alle Spalten der Tabelle), der Tabellenname heißt `artist`, die Bedingung wird mit Platzhalter `?` parametrisiert — der Wert 1999 steht im `params`-Array, nicht im SQL-Text.

**2. Drizzle-Query „Anzahl Tracks je Album" (ca. 5 Punkte):**

```ts
const viele = await db.select({ titel: album.titel, tracks: count() })
    .from(track)
    .innerJoin(album, eq(track.albumId, album.id))
    .groupBy(album.id);
```

**3. Interleaving — dasselbe als reines SQL (ca. 5 Punkte):**

```sql
select "album"."titel", count(*)
  from "track"
  inner join "album" on "track"."album_id" = "album"."id"
  group by "album"."id";
```

Markierung der Bausteine: `inner join ... on` ↔ `innerJoin(album, eq(track.albumId, album.id))` · `count(*)` ↔ `count()` · `group by` ↔ `groupBy(album.id)`.

**Wertungs-Skizze (15 P):**
- Teil 1: korrekte Spaltenliste + Tabellenname 2 P · korrekte WHERE-Klausel 1 P · Wert als Parameter (Platzhalter + params) 2 P
- Teil 2: select mit count 1 P · from/innerJoin mit eq 2 P · groupBy 1 P · await nicht vergessen 1 P
- Teil 3: korrektes SQL (JOIN ON, COUNT, GROUP BY) 4 P · Bausteine Drizzle ↔ SQL zugeordnet 1 P

---

### Frage 28: REST-Endpoint-Design (15 Punkte)

**1. HTTP-Methoden (ca. 5 Punkte):**

- `GET /api/items` — liest Ressourcen: ohne `id`-Query-Param alle Items, mit `id` genau ein Item. Lesen verändert nichts.
- `POST /api/items` — legt ein neues Item an; der Body enthält `name` (Pflicht) und optional `description`.
- `PATCH /api/items` — ändert **Teile** eines bestehenden Items (nur die im Body übergebenen Felder, `id` als Query-Param).
- `DELETE /api/items` — löscht das Item mit der angegebenen `id`.

**2. Statuscodes (ca. 5 Punkte, je 1 P):**

- a) `200` (OK) — das Lesen war erfolgreich, die Items gehen als JSON zurück.
- b) `201` (Created) — eine neue Ressource wurde angelegt; die Antwort enthält das neue Item inkl. vergebener `id`.
- c) `400` (Bad Request) — die Anfrage ist fehlerhaft („Name ist erforderlich").
- d) `404` (Not Found) — zu dieser `id` existiert kein Item.
- e) `405` (Method Not Allowed) — der Router kennt auf `/api/items` nur GET/POST/PATCH/DELETE, alles andere wird mit 405 abgelehnt.

**3. POST-Ablauf in Stichpunkten (ca. 5 Punkte):**

1. Request kommt am Router an: `url.pathname === "/api/items"` und `req.method === "POST"` → `handlePost(req)`
2. `req.json()` liest und parst den Request-Body — es gibt ein **Promise** zurück, deshalb `.then()` (bzw. `await`)
3. Validierung: fehlt `body.name`, sofort `Response.json({ error: "Name ist erforderlich" }, 400)` — Abbruch ohne Anlegen
4. Neues Item bauen: `id: nextId++`, `name`, `description ?? ""` (Default, wenn description fehlt) — und in das `items`-Array einfügen (`items.push(newItem)`)
5. Antwort: `Response.json(newItem, 201)` — das angelegte Item als JSON mit Statuscode 201 zurück

**Wertungs-Skizze (15 P):**
- Teil 1: je 1 P pro korrekt erklärter Methode (GET/POST/PATCH/DELETE) + 1 P für den REST-Ressourcen-Bezug (lesen verändert nichts, POST legt an): 5 P
- Teil 2: je 1 P pro korrektem Statuscode: 5 P
- Teil 3: req.json() als Promise genannt 1 P · Validierung → 400 1 P · id-Vergabe + Speichern 1 P · Response.json(..., 201) 1 P · nachvollziehbarer Ablauf in richtiger Reihenfolge 1 P

---

**Gesamtpunkte: 145**

---

*Lösungsdatei für die Lehrperson — nicht zur Abgabe an Schülerinnen und Schüler bestimmt.*
