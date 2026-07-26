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
| **Jahr 1** | Sem 3 (WS) + Sem 4 (SS) | **faktisch 2 h/W** (schulautonom; lt. Tafel 1 h) | **3AAIF** (WS) → **4AAIF** (SS) |
| **Jahr 2** | Sem 5 (WS) + Sem 6 (SS) | 3 h-Block/W | **5AKIF** (WS) → **6AKIF** (SS) |

> Inhaltlich identisch für Aufbaulehrgang und Kolleg („beide Jahre gleich"). Backend/
> Serverseitiges = Fach **POS** (Kolleg:innen, C#/.NET) — siehe [`LEHRPLAN.md`](LEHRPLAN.md) ②.

## Klassenkürzel-Decoder (Schulpraxis)

| Kürzel | Bedeutung | Status |
|--------|-----------|--------|
| `AAIF` | **A**bend-**A**ufbaulehrgang **I**nformatik **F**orm (Aufbaulehrgang) | bestätigt |
| `AKIF` | **A**bend-**K**olleg **I**nformatik **F**orm (Kolleg) | aus Stundentafel-Logik inferiert — **zu verifizieren** |
| `BKIF`, `CAIF` | Parallel-Züge (B/C) der jeweiligen Form | **zu verifizieren** |

**Semestrierte Namensführung:** Klassen heißen im WS `3AAIF`/`5AKIF`, im SS `4AAIF`/`6AKIF`.
Repo-Praxis: **ein Klassenordner pro Schuljahr**, benannt nach der SS-Bezeichnung
(beim Semesterwechsel Umbenennung 3→4 bzw. 5→6, vgl. Commit „neues semester", Feb 2026).

## Zeitmodell & Beurteilung

- **Jahr 1:** 2 h/W → ~13 UE + 2 PLF pro Semester.
- **Jahr 2:** 3 h-Block/W → ~13 UE + 2 PLF pro Semester.
- **Beurteilung:** PLF / Hausübungen / Mitarbeit je 1/3 (Root-[`README.md`](../../README.md));
  HÜ-Abgabe über Schüler-Repos, Nachreichung 75 %, Cutoff eine Woche vor Notenschluss.

## Planungskonvention

- **Dokumente:** [`LEHRPLAN.md`](LEHRPLAN.md) (dreischichtig, die QUELLE) +
  [`jahr1-einheiten.md`](jahr1-einheiten.md) (Rückpflege) + [`jahr2-einheiten.md`](jahr2-einheiten.md) (Plan).
- **Archiv:** vergangene Schuljahre unter [`archiv/`](../../archiv/) im Schema
  `YYYY-YY-<klasse>` (z. B. `archiv/2025-26-4aaif/`).
- **UE-Tabellen:** `UE | Thema | KM-Bezug | Inhalt/HÜ`; KM-Bezug = Referenz-Raster
  Anl. 1.10 (KM3–KM10) + Anl.-1.9-Haken (Basis-Webtechniken, NvS KM3/4).

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
| [`LEHRPLAN.md`](LEHRPLAN.md) | Lehrstoff **dreischichtig**: ① offizieller Extrakt (368/2022 + Parent 1.10) · ② Schuladaption · ③ Didaktik/Stack — die QUELLE |
| [`RIS.md`](RIS.md) | **Rechtsstand & Recherche** (Fundstellen, Novellen, Flags) |
| [`jahr1-einheiten.md`](jahr1-einheiten.md) | Jahr 1 (Sem 3+4) – Rückpflege aus SJ 2025/26 |
| [`jahr2-einheiten.md`](jahr2-einheiten.md) | Jahr 2 (Sem 5+6) – Plan SJ 2026/27 |

> **Außerhalb:** [`../skriptum.md`](../skriptum.md) (JS/TS-Skriptum), [`../wmc_ss_projekt_webapp.md`](../wmc_ss_projekt_webapp.md)
> (Jahr-1-SS-Projektangabe), [`../../PROJEKT.md`](../../PROJEKT.md) + [`../../PEER_REVIEW.md`](../../PEER_REVIEW.md)
> (Jahr-1-WS-Projekt), [`../../archiv/`](../../archiv/) (vergangene Klassen).
