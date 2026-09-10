# Handoff

Branch: main

## Offene Aufgaben (klein, < 30 min)
1. [x] Klassenkürzel verifiziert 2026-09-06 (Georg + Schul-Seite): Form-Serien AIF/KIF/CIF, ungerade=WS/gerade=SS, Zug-Präfixe A/B/C, **C = 17:10-Zweig** → Decoder in `lehrplan/METADATA.md` + `docs/ai/DOMAIN.md` gepflegt. **Rest:** Besetzung Nicht-Georg-WMC-Semester (Kolleg Sem 1–4, AL Sem 2/5/7).
2. [ ] Node-LTS-Verfügbarkeit auf den Abendform-Rechnern prüfen (Jahr-2-Voraussetzung, s. `unterricht/WMC/jg2-einheiten.md` → Offene Punkte).
3. [ ] Zu Semesterbeginn: Klassenordner `3aaif/` + `5akif/` anlegen (Konvention: datierte Unterordner `YYYY-MM-DD_topic`).

## Größere Vorhaben (→ GitHub Issues)
- [ ] Siehe #3 — Mini-Hono-Referenz-API als Repo-Artefakt (REST CRUD + JWT + `/static` + SPA-Fallback + optional WebSocket; Startpunkt `Beispielprojekte/hono_on_deno/`).
- [ ] POS-Abstimmung (Auth/REST-Design, produktive Projekt-API) mit Kolleg:innen — orga-seitig, Ergebnis in `unterricht/WMC/jg2-einheiten.md` → Offene Punkte eintragen.

## Kontext für die nächste Session
- Lehrplan-Grundlage liegt fertig in `lehrplan/` (Root, Skill-Konvention: LEHRPLAN/METADATA/RIS + Block-Ordner lehrplan/wmc-aif (34AIF), wmc-kif (34KIF+56KIF), wmc-cif (34CIF) + kompetenzmodule/km3–km10 + RIS/-PDFs; Semesterpläne unter unterricht/WMC/ (Retrofit 2026-09-10); siehe Commit „lehrplan: Umzug …"). Jahr-2-Plan hat 3 offene Punkte (s. Dateiende unterricht/WMC/jg2-einheiten.md).
- Archivierung SJ 2025/26 ist committed-fertig vorbereitet (git mv, 162 Renames).
- RIS-Recherche-Stand: 2026-07-26; nächster Check Sommer 2027.
