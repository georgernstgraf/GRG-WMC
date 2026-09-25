# Handoff

Branch: main

## Offene Aufgaben (klein, < 30 min)
1. [x] Klassenkürzel verifiziert 2026-09-06 (Georg + Schul-Seite): Form-Serien AIF/KIF/CIF, ungerade=WS/gerade=SS, Zug-Präfixe A/B/C, **C = 17:10-Zweig** → Decoder in `lehrplan/METADATA.md` + `docs/ai/DOMAIN.md` gepflegt. **Rest:** Besetzung Nicht-Georg-WMC-Semester (Kolleg Sem 1–4, AL Sem 2/5/7).
2. [ ] Node-LTS-Verfügbarkeit auf den Abendform-Rechnern prüfen (Jahr-2-Voraussetzung fürs Vite-Tooling; WMC-Demos selbst laufen mit Deno).
3. [x] Klassenordner `3aaif/` + `5akif/` angelegt (2026-09) — datierte Unterordner `YYYY-MM-DD_topic` (5akif nutzt `YYYY-MM-DD__thema`).

## Größere Vorhaben (→ GitHub Issues)
- [~] #3 Mini-Hono-Referenz-API (`Beispielprojekte/hono_on_deno/`, ausgebaut 2026-09-25): **fertig** sind REST-CRUD Musikgeschäft (in-memory), `/static` + Bilder, SPA-Fallback, Echtzeit-TS-Transpilation (`@deno/emit`), TS-Client-Demo, Logger + 9 Deno-Tests. **Offen:** JWT-Login/Rollen, RFC-7807-Fehler, optionaler WebSocket (bewusst ausgeklammert, Issue bleibt deshalb offen).
- [ ] POS-Abstimmung (Auth/REST-Design, produktive Projekt-API) mit Kolleg:innen — orga-seitig, Ergebnis in `unterricht/WMC/jg2-einheiten.md` → Offene Punkte eintragen.

## Kontext für die nächste Session
- 5akif-Jahr-2-Unterricht läuft: Lessons 01 (Lambdas, 11.9.), 02 (Promises, 18.9.), 03 (async/await, 23.9., Issue #4). Ab Lesson 03: gemeinsames Theme-Asset `5akif/assets/` (Hell/Dunkel-Toggle) — neue Lessons binden es ein statt eigenem Inline-Style.
- Lehrplan-Grundlage liegt fertig in `lehrplan/` (Root, Skill-Konvention: LEHRPLAN/METADATA/RIS + Block-Ordner wmc-aif/wmc-kif/wmc-cif + kompetenzmodule/km3–km10 + RIS/-PDFs); Semesterpläne unter `unterricht/WMC/`. Jahr-2-Plan hat 3 offene Punkte (s. Dateiende `unterricht/WMC/jg2-einheiten.md`).
- Archivierung SJ 2025/26 ist committed-fertig vorbereitet (git mv, 162 Renames).
- RIS-Recherche-Stand: 2026-07-26; nächster Check Sommer 2027.
