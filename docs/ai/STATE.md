# Project State

Current status as of 2026-11-10.

## Current Focus
**Lernplattform (#7):** Der Markdown-SPA-Viewer ist durch einen **statischen Navigator** `index.html` ersetzt; GitHub Pages veröffentlicht nur `index.html`, `assets/` und `unterricht/` (`.github/workflows/pages.yml`, `build_type: workflow`). Der Navigator verlinkt die Prepared Lessons `KM3-01–03` unter `unterricht/KM3-<NN>-<slug>/` (Retrofit 2026-10-05).

Mini-Hono-Referenz (#3) ist als lauffähiger Rumpf in `Beispielprojekte/hono_on_deno/` gebaut; der React-Referenzshop `Beispielprojekte/react_deno_hono/` konsumiert diese API (React 19, Pico CSS, Vite 8 auf Deno, `deno test`). Nächster Fokus: Jahr-2-Tooling (Node/Vite) + optionale #3-Restteile (JWT, RFC-7807, WS).

## Completed (this cycle)
- [x] 2026-11-10 — #11 Quizzes der Alt-Lessons auf Format 2.1 umgestellt
      (KM3-01..03, KM8-01: 22 Fragen, je 4 Optionen mit `data-grund`, eine
      vierte Ablenkungsoption ergänzt; KM8-01 in zwei Quizze geteilt).
      Kein `data-loesung`/Radio mehr im Lesson-Bestand.
- [x] 2026-11-10 — Assets aus GRG-PMM übernommen (Quiz **2.1**: Checkboxen,
      `data-richtig` je Option, Fisher-Yates-Shuffle, Überprüfen-Button,
      Infokugeln; `tables.js` Tabellen-Querscroll; PMM-`lesson.css` auf
      WMC-Palette/Beamer/Print; `theme.js` mit readyState-Guard). Altklassen
      (`.box`, `header.lektion`, `.aufgabe`, `footer.ausblick`) bleiben gültig,
      Radio-Altmodus von `quiz.js` läuft weiter; die vier Alt-Lessons
      (KM3-01..03, KM8-01) wurden auf `header.meta`/`.callout`/`details.lehrplan`/
      `footer.navi` umgestellt.
- [x] 2026-11-10 — #10 Lesson **KM3-04 CSS-Selektoren** + **Selektoren-Labor**
      (`unterricht/KM3-04-css-selektoren/`: `lesson.html`, `demo.html`, `demo.css`,
      `aufgabe.md`): 7 Schritte, 7 Lernquizzes (28 Fragen, Lösungsmengen 0–4),
      3 abzugebende Beispiele, Navigator-Eintrag, Glossar (Selektor, Kombinator,
      Pseudoklasse, Pseudoelement, Attribut-Selektor, Spezifität).
      Demo im Browser verifiziert (Trefferzahlen, berechnete Stile, Quiz-Interaktion
      inkl. Shuffle/Zurücksetzen, Pages-Basis `/GRG-WMC/`).
- [x] 2026-11-06 — React-Referenzshop `Beispielprojekte/react_deno_hono/` gebootstrappt: React 19 + Vite 8 auf Deno (kein Node/kein `package.json`), Pico CSS, Katalog + Warenkorb-Drawer (native `<dialog>`) + Checkout gegen die Hono-API, Light/Dark, Skeletons/Error-Boundary/Toast; 19 `deno test`-Tests (RTL + happy-dom), 93 % Line-Coverage, `deno task verify`, CI-Workflow, Lockfile; als **Referenz** dokumentiert (unterrichtlicher Pfad bleibt Node/Vite + Vitest).
- [x] 2026-10-12 — Homework-Discovery WMC (WMC_1): `3caif/2026-10-06_html-formulare/Aufgabe.md`
      erzeugt (Formular fertigstellen, Mailclient-Versand, Bonus
      Pflichtfelder/Pattern, Abgabe 13.10. 00:00 — Textquelle: Tages-README
      `## Aufgabe`); README `## Aufgaben` als erste Sektion mit 3 Evidenz-Einträgen
      (15.9. Setup/Repo-Link, 29.9. „Über mich", 6.10. Formular).
      `3aaif/` verifiziert: README bereits konform (Sektion + 3 Einträge,
      10.6.-Eintrag matcht KM3-03-Aufgabe „Seite dekorieren") — keine Änderung.
      Generierte Dateien bewusst **uncommitted** zur Review.
- [x] #7 CLOSED 2026-10-05 — GitHub Pages als Lernplattform: statischer Navigator `index.html` (repo-weite Assets, kein CDN), `pages.yml` (rsync `index.html assets unterricht`), `build_type: workflow`; AGENTS/CONVENTIONS/PITFALLS nachgezogen
- [x] Layout-Retrofit 2026-10-05 (create-lesson v2 + lehrplan v2): Prepared Lessons flach nach `unterricht/KM3-<NN>-<slug>/` (`lesson.html` + Tages-README-Vorlage), Planung nach `lehrplan/jg{1,2}-einheiten.md`, Navigator auf die neuen Pfade gezogen; Lesson-Header entkohortisiert, Querverweise/Docs aktualisiert (Kohorten bewusst unangetastet)
- [x] Mini-Hono-Referenz (#3, Teil 1): `Beispielprojekte/hono_on_deno/` von Mini-Demo zum Referenzrumpf ausgebaut — Deno 2.9/Hono 4.13 (JSR), In-Memory-Musikgeschäft-API (Produkte/Bestellungen/10%-Rabatt/Storno/Stats), `/static`+Bilder, SPA-Fallback, Echtzeit-TS→JS-Transpilation via `@deno/emit` (mit Path-Traversal-Guard), 7-Punkte-TS-Client `client/shop.ts`, `hono/logger`, 9 Deno-Tests; `deno check`/`lint`/`test` grün
- [x] Lesson 03 async/await für 5akif (#4): mehrstufige Bestell-Pipeline mit je eigenem Error-Typ, Variante A (instanceof) und B (granular + Re-Throw), `demo.ts` per `deno check`/`deno run` verifiziert
- [x] Runtime-Festlegung: WMC-Demos/Lektionen laufen mit **Deno** (nicht Node) — AGENTS.md + docs/ai/CONVENTIONS.md
- [x] Gemeinsames Lesson-Theme `5akif/assets/` (lesson.css + theme.js): hell/dunkel, `prefers-color-scheme` + `localStorage`, Print hell, kein CDN
- [x] Begriff „Aufgabe" (= Mitarbeit) statt „Hausübung" in Lesson, READMEs und GLOSSAR
- [x] Tages-README-Layout mit `## Housekeeping` (Lehrplan · KM-Bezug · Runtime) unten; Lessons-Tabelle in `5akif/README.md`
- [x] helpers #76/#77/#78 gespiegelt: create-lesson-Skill (Aufgabe-Abschnitt, Tages-README, Shared-Theme, 3–5 Quizfragen)

## Pending
- [ ] Besetzung der Nicht-Georg-WMC-Semester klären (Aufbaulehrgang Sem 2/5/7, Kolleg Sem 1–4)
- [ ] Mini-Hono-Referenz vervollständigen (#3 Rest): JWT-Login/Rollen, RFC-7807-Fehler, optional WebSocket
- [ ] POS-Abstimmung Auth/REST-Design + produktive API fürs Abschlussprojekt
- [ ] Node-LTS-Verfügbarkeit auf Abendform-Schulrechnern prüfen (nur Jahr-2-Vite-Tooling)
- [ ] Jährlicher RIS-Re-Check: Sommer 2027 (RIS.md §7)

## Blockers
- None

## Next Session Suggestion
Jahr-2-Tooling (Node/Vite) angehen; für die Auth-UE der Referenz-API JWT (#3-Rest) ergänzen. Bei neuen Lessons das Theme-Asset `5akif/assets/` wiederverwenden.
