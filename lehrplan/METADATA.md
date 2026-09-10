# Metadaten zum Lehrplan — WMC (Erwachsenenbildung, HTL Spengergasse)

## Rechtliche Grundlage

| Feld | Wert |
|------|------|
| **Kundmachungsorgan (primär)** | **BGBl. II Nr. 368/2022** |
| **Titel** | Lehrpläne der Sonderformen der Höheren technischen und gewerblichen Lehranstalten sowie Lehrplan des Vorbereitungslehrganges für Berufstätige für technische Fachrichtungen |
| **Anlagen** | Anlage 1 (allgemein) + **Anlage 1.9 (Informatik)** — Varianten I.3 (Aufbaulehrgang, 7 Semester) und I.4 (Kolleg, 6 Semester) |
| **Fach in diesem Repo** | Webprogrammierung und Mobile Computing (**WMC**) — schulautonomes Fach (kein eigenes Unterrichtsfach in Anlage 1.9; Inhalte dort verteilt auf „Netzwerke und verteilte Systeme", „Netzwerksysteme und verteilte Systeme", PSE) |
| **Parent-Referenz** | Anlage 1.10, BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021 (Tagesschule HL für Informatik, dortiges Fach „5. Webprogrammierung und Mobile Computing") |
| **Geltungs-Check** | **aktuell** — Recherche, Novellen, RIS-Links: [`RIS.md`](RIS.md) |

## Stundentafeln (Schulwebsite, Abendform)

Quelle: <https://www.spengergasse.at/?page_id=2584> (Informatik – Abendform).

### Aufbaulehrgang (7 Semester) — fachliche Gegenstände

| Gegenstand | I | II | III | IV | V | VI | VII |
|------------|---|----|-----|----|---|----|-----|
| Computerarchitektur und Betriebssysteme | – | 3 | 3 | – | – | – | – |
| Programmieren und Software Engineering (POS) | – | 4 | 4 | 4 | 4 | 4 | 4 |
| Datenbanken und Informationssysteme | – | 3 | 3 | 2 | 2 | 2 | 2 |
| **Webprogrammierung und Mobile Computing** | **–** | **1** | **1** | **1** | **1** | **3** | **3** |
| Netzwerksysteme und Cyber Security | – | – | – | 2 | 2 | 4 | 4 |
| Data Science und Artificial Intelligence | – | – | – | 1 | 1 | 3 | 3 |
| Betriebswirtschaft und Management | – | 2 | 2 | 1 | 1 | 2 | 2 |
| Systemplanung und Projektentwicklung | – | 2 | 2 | 2 | 2 | 3 | 3 |

### Kolleg (6 Semester) — fachliche Gegenstände

| Gegenstand | I | II | III | IV | V | VI |
|------------|---|----|-----|----|---|----|
| Computerarchitektur und Betriebssysteme | 9 | 9 | – | – | – | – |
| Programmieren und Software Engineering (POS) | 4 | 4 | 4 | 4 | 5 | 5 |
| Datenbanken und Informationssysteme | 3 | 3 | 2 | 2 | 2 | 2 |
| **Webprogrammierung und Mobile Computing** | **1** | **1** | **1** | **1** | **3** | **3** |
| Netzwerksysteme und Cyber Security | 2 | 2 | 2 | 2 | 5 | 5 |
| Data Science und Artificial Intelligence | – | – | 1 | 1 | 3 | 3 |
| Betriebswirtschaft und Management | 2 | 2 | 1 | 1 | 2 | 2 |
| Systemplanung und Projektentwicklung | 2 | 2 | 2 | 2 | 3 | 3 |

> Rahmenzeiten Abendform: **Mo–Do 17:10–22:00**. Abschluss: Diplomprüfung (Diplomarbeit
> in den letzten beiden Semestern). Abt.-Vorstand Abendform: Mag. Heidi Marie Steinwender.

## Wer unterrichtet was (WMC bei Georg)

| Block | Semester | Stunden (Ist) | Kohorten SJ 2026/27 |
|-------|----------|---------------|---------------------|
| **Jahr 1** | Sem 3 (WS) + Sem 4 (SS) | **faktisch 2 h/W** (schulautonom; lt. Tafel 1 h) | künftige Jahr-1-Kohorte (SJ 2025/26 lief in `3AAIF→4AAIF`, `3AKIF→4AKIF`, `3BKIF→4BKIF`, `3CAIF→4CAIF`, archiviert) |
| **Jahr 2** | Sem 5 (WS) + Sem 6 (SS) | 3 h-Block/W | **5AKIF** (WS) → **6AKIF** (SS) |

> Inhaltlich identisch für Aufbaulehrgang und Kolleg („beide Jahre gleich"). Backend/
> Serverseitiges = Fach **POS** (Kolleg:innen, C#/.NET) — siehe [`LEHRPLAN.md`](LEHRPLAN.md) ②.

## Klassenkürzel-Decoder (verifiziert, 2026-09-06)

**Code-Schema:** `<Semester><Form-Serie>IF` — Ziffer = Semester (**ungerade = WS,
gerade = SS**). In der Praxis (Kohorten-/Ordner-Codes) wird dem Form-Code ein
**Zug-Präfix** (A/B/C) vorangestellt.

| Serie | Form | Dauer | Einstieg | Abschluss | Georg-Blöcke |
|-------|------|-------|----------|-----------|--------------|
| `AIF` | **Aufbaulehrgang** | 7 Semester | ohne Reifeprüfung (Vorbereitungslehrgang, Fachschule, facheinschlägiger Lehrabschluss) | **Reife- und Diplomprüfung** (Diplom + Matura) | Jahr 1 (Sem 3/4) |
| `KIF` | **Kolleg** | 6 Semester | Reifeprüfung / Berufsreifeprüfung / Studienberechtigungsprüfung → **Matura bereits vorhanden** | **Diplomprüfung** (nur Diplom) | Jahr 1 (Sem 3/4) + Jahr 2 (Sem 5/6) |
| `CIF` | **zweite Kolleg-Variante** | 6 Semester | Matura bereits vorhanden | **Diplomprüfung** (nur Diplom) | Jahr 1 (Sem 3/4) |

> **C = 17:10-Zweig:** Das C kennzeichnet den Zweig, dessen Unterricht **erst ab
> 17:10** beginnt (Angabe Georg 2026-09-06).

| Praxiscodes (mit Zug-Präfix) | Serie | SJ 2025/26 (Jahr 1) | SJ 2026/27 |
|------------------------------|-------|---------------------|------------|
| `AAIF` | AIF (Zug A) | 3AAIF → 4AAIF | — |
| `CAIF` | CIF | 3CAIF → 4CAIF | — |
| `AKIF` | KIF (Zug A) | 3AKIF → 4AKIF | — |
| `BKIF` | KIF (Zug B) | 3BKIF → 4BKIF | — |
| `5AKIF`/`6AKIF` | KIF (Zug A) | — | **5AKIF (WS) → 6AKIF (SS) = Jahr 2** |

**Quellen:** (a) Schul-Seite „Informatik – Abendform" (`RIS.md` §2, Einstiegsvarianten-Tabelle:
Kolleg-Einstieg nur mit Reife-/Berufsreife-/Studienberechtigungsprüfung; AL-Einstieg ohne),
(b) § 1 Z. 9 BGBLA 2022 II 368 (Varianten I.3/I.4), (c) Angabe Georg 2026-09-06 (Form-Serien
AIF/KIF/CIF, Semestrierung ungerade/gerade, C = 17:10-Zweig). Rest-Flag: Besetzung der
Nicht-Georg-Semester (unten).

**Semestrierte Namensführung:** `3AIF` = WS, `4AIF` = SS; `5KIF` = WS, `6KIF` = SS.
Repo-Praxis (seit Retrofit 2026-09-10): **ein Block-Ordner pro Georg-Block** unter
`lehrplan/wmc-<form>/` (`wmc-aif/34AIF`, `wmc-kif/34KIF` + `wmc-kif/56KIF`,
`wmc-cif/34CIF`); UE-/Semesterpläne unter `unterricht/WMC/` am Repo-Root
(form-übergreifend — WMC unterrichtet die Formen gemeinsam). UE-Material pro
Schuljahr in root-Klassenordnern (beim Semesterwechsel Umbenennung 3→4 bzw. 5→6,
vgl. Commit „neues semester", Feb 2026).

## Zeitmodell & Beurteilung

- **Jahr 1:** 2 h/W → ~13 UE + 2 PLF pro Semester.
- **Jahr 2:** 3 h-Block/W → ~13 UE + 2 PLF pro Semester.
- **Beurteilung:** PLF / Hausübungen / Mitarbeit je 1/3 (Root-[`README.md`](../README.md));
  HÜ-Abgabe über Schüler-Repos, Nachreichung 75 %, Cutoff eine Woche vor Notenschluss.

## Planungskonvention

- **Dokumente:** [`LEHRPLAN.md`](LEHRPLAN.md) (dreischichtig, die QUELLE) +
  [`../unterricht/WMC/jg1-einheiten.md`](../unterricht/WMC/jg1-einheiten.md) (Rückpflege) +
  [`../unterricht/WMC/jg2-einheiten.md`](../unterricht/WMC/jg2-einheiten.md) (Plan).
- **Archiv:** vergangene Schuljahre unter [`archiv/`](../archiv/) im Schema
  `YYYY-YY-<klasse>` (z. B. `archiv/2025-26-4aaif/`).
- **UE-Tabellen:** `UE | Thema | KM-Bezug | Inhalt/HÜ`; KM-Bezug = Referenz-Raster
  Anl. 1.10 (KM3–KM10) + Anl.-1.9-Haken (Basis-Webtechniken, NvS KM3/4).

## RIS-Status

> **RIS-Status abgefragt am 2026-07-26:** Recherche gegen BGBl. II Nr. 368/2022
> (Sonderformen-VO, Anlagen 1 + 1.9) und Parent-Raster Anlage 1.10 (BGBl. II Nr.
> 262/2015 idF 383/2021) — Ergebnis: **aktuell**; Details, Fundstellen und Flags:
> [`RIS.md`](RIS.md).

## Technologie-Stack (pädagogische Entscheidung SJ 2026/27)

| Schicht | Werkzeug |
|---------|----------|
| Jahr 1 | Vanilla HTML/CSS/JS, TS-Intro (Deno-Transpilation), Live Server, W3C-Validator |
| Jahr 2 | **TypeScript + React + Vite (Node/npm)**; **Mini-Hono-Referenz (Deno)** als Übungs-API; **PWA**; **Vitest + React Testing Library** |
| Deployment-Muster | `vite build` → Backend liefert `/static` + `/api` unter einem Origin (Hono-Referenz; Muster übertragbar auf POS-C#) — kein Split-Brain |
| Backend (Stoff) | **entfällt in WMC** → POS (C#, Kolleg:innen) |

## Dateien in diesem Verzeichnis

| Datei | Beschreibung |
|-------|--------------|
| `METADATA.md` | Diese Datei |
| [`LEHRPLAN.md`](LEHRPLAN.md) | Lehrstoff **dreischichtig**: ① offizieller Extrakt (368/2022 + Parent 1.10) · ② Schuladaption · ③ Didaktik/Stack — die QUELLE. **Form-übergreifend** (alle Blöcke decken dieselbe Anlage 1.9 ab) — daher bewusst im `lehrplan/`-Root, Ausnahme dokumentiert (DECISIONS 2026-09-10) |
| [`RIS.md`](RIS.md) | **Rechtsstand & Recherche** (Fundstellen, Novellen, Flags) — form-übergreifend, dito |
| `RIS/2015-09-17_BGBl-II-262_HTL-Lehrplanpaket.pdf` | RIS-PDF: Parent-Original (Kundmachung 17.9.2015) |
| `RIS/2021-09-03_BGBl-II-383_Novelle-Anl-1.10.pdf` | RIS-PDF: Novelle (Parent Anl. 1.10 neu gefasst; Kundmachung 3.9.2021; enthält nur VO-Text, Anlage via BgblAuth-HTML in `RIS.md`) |
| `RIS/2022-10-04_BGBl-II-368_Sonderformen-VO.pdf` | RIS-PDF: Erlass Sonderformen-VO (Kundmachung 4.10.2022) |
| `wmc-aif/34AIF/` · `wmc-kif/34KIF/` · `wmc-cif/34CIF/` | Jahr-1-Block-Ordner (AIF/KIF/CIF): README + `<BLOCK>.lehrplan.md` |
| `wmc-kif/56KIF/` | Jahr-2-Block-Ordner (KIF): README + `56KIF.lehrplan.md` |
| `kompetenzmodule/` | Didaktische KM-Steckbriefe km3–km10 + Semester↔Klasse↔KM-Übersicht — **form-übergreifend** (KM-Nummerierung identisch über alle Formen), daher im `lehrplan/`-Root |
| `unterricht/WMC/jg1-einheiten.md` | Jahr 1 (Sem 3+4) – Block-Einheitenplan, Rückpflege aus SJ 2025/26 (ehem. `jahr1-einheiten.md`) |
| `unterricht/WMC/jg2-einheiten.md` | Jahr 2 (Sem 5+6) – Block-Einheitenplan SJ 2026/27 (ehem. `jahr2-einheiten.md`) |

> **Layout-Retrofit 2026-09-10** (lehrplan-Skill v2): Block-Ordner unter
> `lehrplan/wmc-<form>/` zusammengeführt (wmc-aif / wmc-kif / wmc-cif), RIS-PDFs
> in `RIS/` verschoben, Einheitenpläne nach `unterricht/WMC/` (kleines
> `jg<N>`-Präfix statt `jahr<N>`). `LEHRPLAN.md`, `RIS.md` und
> `kompetenzmodule/` bleiben als form-übergreifende Shared-Dateien bewusst im
> `lehrplan/`-Root — dokumentierte Ausnahme (DECISIONS 2026-09-10).

> **Außerhalb:** [`../skriptum.md`](../docs/skriptum.md) (JS/TS-Skriptum), [`../wmc_ss_projekt_webapp.md`](../docs/wmc_ss_projekt_webapp.md)
> (Jahr-1-SS-Projektangabe), [`../../PROJEKT.md`](../PROJEKT.md) + [`../../PEER_REVIEW.md`](../PEER_REVIEW.md)
> (Jahr-1-WS-Projekt), [`../../archiv/`](../archiv/) (vergangene Klassen).
