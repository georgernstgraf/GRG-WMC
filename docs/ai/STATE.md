# Project State

Current status as of 2026-09-23.

## Current Focus
WMC-Jahr-2-Unterricht (5akif) läuft; Lesson 03 „async/await" (Deno, Shared-Theme, Aufgabe, 5 Quizfragen) ist geliefert. Nächster Fokus: Mini-Hono-Referenz (#3) + Jahr-2-Tooling (Node/Vite).

## Completed (this cycle)
- [x] Lesson 03 async/await für 5akif (#4): mehrstufige Bestell-Pipeline mit je eigenem Error-Typ, Variante A (instanceof) und B (granular + Re-Throw), `demo.ts` per `deno check`/`deno run` verifiziert
- [x] Runtime-Festlegung: WMC-Demos/Lektionen laufen mit **Deno** (nicht Node) — AGENTS.md + docs/ai/CONVENTIONS.md
- [x] Gemeinsames Lesson-Theme `5akif/assets/` (lesson.css + theme.js): hell/dunkel, `prefers-color-scheme` + `localStorage`, Print hell, kein CDN
- [x] Begriff „Aufgabe" (= Mitarbeit) statt „Hausübung" in Lesson, READMEs und GLOSSAR
- [x] Tages-README-Layout mit `## Housekeeping` (Lehrplan · KM-Bezug · Runtime) unten; Lessons-Tabelle in `5akif/README.md`
- [x] helpers #76/#77/#78 gespiegelt: create-lesson-Skill (Aufgabe-Abschnitt, Tages-README, Shared-Theme, 3–5 Quizfragen)

## Pending
- [ ] Besetzung der Nicht-Georg-WMC-Semester klären (Aufbaulehrgang Sem 2/5/7, Kolleg Sem 1–4)
- [ ] Mini-Hono-Referenz als Repo-Artefakt bauen (#3; REST CRUD + JWT + /static + SPA-Fallback + optional WS)
- [ ] POS-Abstimmung Auth/REST-Design + produktive API fürs Abschlussprojekt
- [ ] Node-LTS-Verfügbarkeit auf Abendform-Schulrechnern prüfen (nur Jahr-2-Vite-Tooling)
- [ ] Jährlicher RIS-Re-Check: Sommer 2027 (RIS.md §7)

## Blockers
- None

## Next Session Suggestion
Mini-Hono-Referenz als Vorbereitung auf die Jahr-2-REST-UEs bauen (#3); bei neuen Lessons das Theme-Asset `5akif/assets/` wiederverwenden.
