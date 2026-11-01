# 5akif WMC SJ2627

## Aufgaben

- 2026-10-23: Drizzle-Tutorials auf `drizzle.team` durcharbeiten, Musterprojekt im eigenen Repo anlegen (Commit zum Stundenende + Recherche über die Ferien) → [2026-10-14-drizzle-orm/](./2026-10-14-drizzle-orm/)
- 2026-10-16: Drizzle — weitere Queries (bes. `update`), Recherche Schema-Migration, Implementierung (add column, weiteres Model) → [2026-10-14-drizzle-orm/](./2026-10-14-drizzle-orm/)
- 2026-10-09: Hono — JSON im Browser in die Liste rendern → [2026-10-09_hono/](./2026-10-09_hono/)
- 2026-09-23: async/await — vierte Stufe `reclamieren` mit `ClaimError`, `finally`, Bonus → [2026-09-23__async-await/](./2026-09-23__async-await/)

## 2026-10-23 drizzle again

Folgen Sie den tutorials auf `drizzle.team` und legen Sie in Ihrem persönlichen Repo ein Musterprojekt an: Ein Commit zum Stundenende (Schulübung) sowie weitere Forschungen mit diesem
Projekt über die Ferien. Schöne Ferien!

## 2026-10-16_drizzle - Aufgaben:

- weitere queries einbauen (besonders: update)
- Recherche: Schema Migration
- Implementierung (add column, weiteres Model, ...)

## Asynchronität II: async/await 23.9.2026

Wiederholung/Ausbau zu Promises vom 18.9. — Lesson: [`2026-09-23__async-await/lesson.html`](./2026-09-23__async-await/lesson.html)
(Demo: `demo.ts` im selben Ordner, Runtime Deno: `deno run demo.ts`; Aufgabe integriert am Lesson-Ende — siehe auch [Tages-README](./2026-09-23__async-await/README.md))

- `async`-Funktion gibt immer ein `Promise` zurück
- `await` nur in `async`-Funktionen (oder Modul-Ebene)
- `try/catch` ersetzt `.catch()` — pro Stufe eigener Error-Typ
  (ValidationError / PaymentError / ShippingError), gefangen via
  `instanceof` (Variante A) oder granular mit try pro Stufe (Variante B)
- Demo in TypeScript, ausgeführt mit Deno (`deno run demo.ts`,
  Typ-Prüfung `deno check demo.ts`)
- Quiz in der Lesson

## Wiederholung Javascript 11.9.2026

Javascript Runtimes

- Browser (eigene Rolle, weil er nicht alles darf)

- **Deno**
- Node.js
- Bun

Jedes Javascript ist auch gültiges Typescript.
Fast kein gültiges Typescript ist auch gültiges Javascript.

Übung:

- Modifizieren Sie filter....ts so, dass alle Zahlen,
  die NICHT durch 3 teilbar sind, ausgegeben werden.
- Alle Zahlen, welche prim sind
- Implementierung als
- - eigenständige function
- - lambda Ausdruck
