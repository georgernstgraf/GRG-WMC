# Project State

Current status as of 2026-09-25.

## Current Focus
Mini-Hono-Referenz (#3) ist als lauffähiger Rumpf in `Beispielprojekte/hono_on_deno/` gebaut; nächster Fokus: Jahr-2-Tooling (Node/Vite) + optionale #3-Restteile (JWT, RFC-7807, WS).

## Completed (this cycle)
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
