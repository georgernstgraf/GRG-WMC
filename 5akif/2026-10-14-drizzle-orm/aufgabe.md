# Aufgabe KM5-05 — Drizzle ORM

Die vollständige Aufgabe steht am Ende von `lesson.html`. Kurzfassung:

1. **Vorhersage** (vor dem Ausführen): Welches SQL erzeugen die zwei Queries aus
   dem Abschnitt „Aufgabe“ der Lesson (Spaltenliste, WHERE-Klausel, Parameter)?
2. **Beispielprojekt erweitern:** drei Queries in `demo.ts` ergänzen — ältestes
   Album (`orderBy` + `limit`), Tracks eines Albums mit Titel-Anfang „Echo“
   (`and` + `eq` + `like`), Anzahl Tracks je Album (`count` + `groupBy`).
3. **SQL-Vergleich (Interleaving):** die Query „Tracks pro Album“ als reines SQL
   hinschreiben und mit dem von Drizzle erzeugten SQL vergleichen.
4. **Nachweis:** `deno task demo` und `deno task test` im Beispielprojekt
   [`demoprojekt/`](demoprojekt/)
   laufen lassen (Konsolenausgaben bzw. grüne Tests).

Abgabe nach Vorgabe deiner Lehrperson (Markdown + den geänderten `demo.ts`).
