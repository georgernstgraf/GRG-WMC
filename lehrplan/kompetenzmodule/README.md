# Kompetenzmodule WMC — Übersicht

Didaktische Steckbriefe zu den Kompetenzmodulen des schulautonomen Fachs
**Webprogrammierung und Mobile Computing (WMC)** — je ein Markdown-File pro KM.

> **Rechtliche Besonderheit:** WMC existiert in der **Anlage 1.9 (BGBl. II Nr. 368/2022)
> nicht als eigenes Fach** — es ist ein **schulautonomes Fach** der HTL Spengergasse
> (Legitimation: Fußnote 1 der Stundentafeln + § 3 der VO). Die KMs hier sind daher
> **Referenz-Raster** aus der **Anlage 1.10 (BGBl. II Nr. 262/2015 idF 383/2021)**
> (Tagesschul-Fach „Webprogrammierung und Mobile Computing", KM3–KM10), flankiert durch
> die Anl.-1.9-Haken („Netzwerke und verteilte Systeme" — Basis-Webtechniken;
> „Netzwerksysteme und verteilte Systeme" — NvSdS KM3/KM4; PSE KM2/KM3 web-nah).
> Volltext-Extrakt: [`../LEHRPLAN.md`](../LEHRPLAN.md) ①.

## Semester ↔ Klasse ↔ KM

**Semestrierung:** ungerade Ziffer = WS, gerade = SS. Jahr-1- und Jahr-2-Inhalt sind
für Aufbaulehrgang und Kolleg **inhaltlich identisch** („beide Jahre gleich") — der
Kolleg-Ablauf ist um ein Semester versetzt, Georg unterrichtet Blöcke, nicht Einzelsemester.

| Block | Semester | Klasse (generisch) | KM (Anl. 1.10 Referenz) | Anl.-1.9-Haken | Unterrichtet Georg? |
|-------|----------|--------------------|-------------------------|----------------|---------------------|
| Jahr 1 | Sem 3 (WS) | `wmc-aif/34AIF` · `wmc-kif/34KIF` · `wmc-cif/34CIF` → `3AIF/3KIF/3CIF` | **KM3** | Basis-Webtechniken (NvS) | ja |
| Jahr 1 | Sem 4 (SS) | `wmc-aif/34AIF` · `wmc-kif/34KIF` · `wmc-cif/34CIF` → `4AIF/4KIF/4CIF` | **KM4** | Basis-Webtechniken (NvS) | ja |
| Jahr 2 | Sem 5 (WS) | `wmc-kif/56KIF` → `5KIF` | **KM5, KM6 (teils), KM7, KM8, KM10** komprimiert | NvSdS KM3 · PSE KM2/KM3 | ja (ab WS 2026/27) |
| Jahr 2 | Sem 6 (SS) | `wmc-kif/56KIF` → `6KIF` | **KM7, KM8, KM9, KM10** komprimiert | NvSdS KM4 · PSE KM3 | ja (ab SS 2027) |

> Die restlichen WMC-Semester der Stundentafeln (Aufbaulehrgang Sem II/V + VII,
> Kolleg Sem I–IV außerhalb Georgs Blöcke) sind mit 1 h besetzt und nicht Georgs Blöcke —
> Besetzung: offenes Flag in [`../METADATA.md`](../METADATA.md).

## Zeitmodell

- **Jahr 1:** 2 h/W faktisch → ~13 echte UE + 2 PLF pro Semester (Rückpflege aus SJ 2025/26)
- **Jahr 2:** 3 h-Block/W (Abendeinheit) → ~13 echte UE + 2 PLF pro Semester
- Ausfälle (Feiertage/Admin/Prüfungen) einkalkuliert; Bonus-UE bei Ausfallfreiheit
- **Beurteilung:** PLF / Hausübungen / Mitarbeit je 1/3 (Root-README)

## Steckbriefe

| Datei | KM | Block/Zuordnung | Status |
|---|---|---|---|
| [`km3.md`](km3.md) | KM3 — Webseiten: Auszeichnung, Formatierung, Skript-Einstieg | Jahr 1, Sem 3 (WS) | voll |
| [`km4.md`](km4.md) | KM4 — Clientseitige Webapplikationen | Jahr 1, Sem 4 (SS) | voll |
| [`km5.md`](km5.md) | KM5 — Frontend/Backend-Kommunikation, HTTP(S) | Jahr 2, Sem 5 (Anteil) | voll (komprimiert) |
| [`km6.md`](km6.md) | KM6 — Webframework, dynamische Webapps | Jahr 2, Sem 5 (Anteil) | voll (komprimiert) |
| [`km7.md`](km7.md) | KM7 — Architektur verteilter Systeme, Web-Stack, Sockets | Jahr 2, Sem 5/6 (Anteile) | voll (komprimiert) |
| [`km8.md`](km8.md) | KM8 — Mobile Applications, Auth, Webservices/REST | Jahr 2, Sem 5/6 (Anteile) | voll (komprimiert) |
| [`km9.md`](km9.md) | KM9 — SOA, EAA, Server Applications, Middleware | Jahr 2, Sem 6 (Anteil) | voll (komprimiert) |
| [`km10.md`](km10.md) | KM10 — Komplexe verteilte Systeme, Multi-Tier, strukturiertes Testen | Jahr 2, Sem 5/6 (Anteile) | voll (komprimiert) |

> **Komprimierung:** Georgs Jahr 2 (2 Semester à 3 h) spannt die Tagesschul-KM5–KM10
> (je 1 Semester) auf — die Steckbriefe vermerken pro KM, welche UE(s) es abdeckt
> (UE-Verweise vollqualifiziert, nur innerhalb eines Semesterplans eindeutig).

## Verknüpfte Dokumente

- `GLOSSAR.md` (Root) — Abkürzungen & Fachbegriffe mit Repo-Kontext
- [`../LEHRPLAN.md`](../LEHRPLAN.md) ① — getreue Rechts-Extrakte aller KM/Haken
- [`../unterricht/WMC/jg1-einheiten.md`](../unterricht/WMC/jg1-einheiten.md) · [`../unterricht/WMC/jg2-einheiten.md`](../unterricht/WMC/jg2-einheiten.md) — Block-Einheitenpläne
