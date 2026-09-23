# Async/Await — Bestell-Pipeline mit individuellen Exceptions (2026-09-23)

Lesson: [`lesson.html`](./lesson.html) im selben Ordner — mehrstufige Promise-Kette `bestellen → bezahlen → liefern`, jede Stufe mit eigenem Error-Typ und individuell gefangen (`instanceof` bzw. try pro Stufe).
- Demo: [`demo.ts`](./demo.ts) — `deno run demo.ts` (Typ-Prüfung `deno check demo.ts`)
- Quiz: 5 Fragen, Richtige B · A · C · D · B
- Aufgabe: vierte Stufe `reclamieren` mit `ClaimError`, Vorhersage zuerst, `finally`, Bonus — Abschnitt am Lesson-Ende; Abgabe per Commit im Schüler-Repo

## Housekeeping

- Lehrplan: `lehrplan/LEHRPLAN.md`, `lehrplan/kompetenzmodule/km7.md`, `unterricht/WMC/jg2-einheiten.md` (WS UE 1–2)
- KM-Bezug: Anl. 1.9 NvSdS KM3 · Anl. 1.10 KM7/KM8-Konsum — Diagnostik-Rep async; Anschluss an Promise-Recap vom 18.9.
- Runtime: Deno (`deno run`, `deno check`) — nicht Node
