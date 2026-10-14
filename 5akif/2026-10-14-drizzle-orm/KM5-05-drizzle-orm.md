# Drizzle ORM — typsicherer Datenbankzugriff (<Datum>)

Lesson: `lesson.html` im selben Ordner — Drizzle als TypeScript-Schema über
SQLite: Schema-first, typsichere Queries, erzeugtes SQL lesen (toSQL()).
- Erklärung · 12 Quizze · „Jetzt du!“ · Aufgabe am Lesson-Ende
- Lauffähiges Beispielprojekt: [`Beispielprojekte/km5-05-drizzle-orm/`](../../Beispielprojekte/km5-05-drizzle-orm/)
  (`deno task demo`, `deno task test` — 9 Tests)

## Aufgabe

Vorhersage des erzeugten SQL → drei Queries im Beispielprojekt ergänzen
(`orderBy/limit`, `and/eq/like`, `count/groupBy`) → dieselbe Frage als reines SQL
hinschreiben (Interleaving) → Demo + Tests laufen lassen (Nachweis).
Details: Abschnitt „Aufgabe“ am Lesson-Ende.

Abgabe nach Vorgabe der Lehrperson (Markdown + den geänderten `demo.ts`).

## Housekeeping

- Lehrplan: `lehrplan/hwii/LEHRPLAN.md` (KM5 Datenbanken) · Steckbrief
  `lehrplan/kompetenzmodule/km5.md`
- KM-Bezug: KM5 (ORM-Einstieg, Anschluss an KM5-01; SQL-n-Linie: KM5-03/04) —
  drizzle-kit/Migrationen als Ausblick Richtung KM6
- Runtime: **Deno** + `node:sqlite` + `drizzle-orm` 1.0.0-rc.4 (gepinnt,
  npm:-Specifier, kein Node, kein drizzle-kit)
