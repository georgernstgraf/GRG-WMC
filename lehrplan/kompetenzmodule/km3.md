# KM3 — Webseiten: Auszeichnung, Formatierung, Skript-Einstieg

**Referenz:** Anlage 1.10 (BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021), Fach
„5. Webprogrammierung und Mobile Computing", II. Jahrgang, 3. Semester — Kompetenzmodul 3
**Zuordnung in diesem Repo:** Jahr 1, Sem 3 (WS) — Ordner `lehrplan/34AIF/` · `lehrplan/34KIF/` · `lehrplan/34CIF/`
**Zeitmodell:** 2 h/W (schulautonom; lt. Stundentafel 1 h) → ~13 UE + 2 PLF
**Anl.-1.9-Haken:** „Netzwerke und verteilte Systeme" (1. Semester), Bereich Basis-Webtechniken
**Semesterplan:** `lehrplan/jahr1-einheiten.md` — WS-Tabelle (Rückpflege SJ 2025/26)

## Bildungs- und Lehraufgabe (Wortlaut Anl. 1.10)

Die Schülerinnen und Schüler können

- den Aufbau von Webseiten erläutern und die Sprachelemente zu deren Gestaltung anwenden;
- Webseiten unter Einsatz von Skriptsprachen realisieren, dynamische Elemente in
  Webseiten einbinden und Gestaltungsvorlagen für Webseiten erstellen.

## Lehrstoff (Wortlaut Anl. 1.10)

Kommunikation zwischen Browser und Server, Komponenten von Webseiten,
Auszeichnungssprachen, Formatierungstechniken.
Einfache Elemente von Skriptsprachen, dynamische Elemente, Gestaltungsvorlagen.

## Anl.-1.9-Wortlaut (Basis-Webtechniken)

Bildungs- und Lehraufgabe: die wesentlichen Sprachelemente zur Gestaltung von Webseiten
anwenden; Webseiten unter Einsatz von Skriptsprachen gestalten, dynamische Elemente
einbinden und Gestaltungsvorlagen erstellen. Lehrstoff: Beschreibungssprachen,
Formatierungstechniken, Skriptsprachen, Datenanbindung.

## Worum geht es?

Das Fundament-Modul: Wie ist eine Webseite aufgebaut, wie redet der Browser mit dem
Server (Request/Response), und wie beschreibt/verziert/skriptet man Webseiten
(Auszeichnungs- vs. Formatierungs- vs. Skriptsprachen)? Die Trennung
Struktur (HTML) — Darstellung (CSS) — Verhalten (JS) ist die Kernidee, die alles
Spätere trägt.

## Abdeckung Jahr 1 WS (Ist, Rückpflege)

| UE | Thema | Beleg |
|----|-------|-------|
| 1 | Tooling & Git (VS Code, Live Server, W3C-Validator, DevTools, caniuse) | `archiv/2025-26-*` |
| 2 | HTML-Grundlagen („HTML ist ein Graph", semantische Tags) | `4aaif/2025-09-03` |
| 3 | CSS-Basics (Box-Model, `box-sizing`) | `4aaif`, `4bkif` |
| 4 | CSS-Selektoren (bis excl. Attribut) | flukeout-Übung |
| 5 | Position & Cases | `4bkif/2025-10-02` |
| 6 | Flexbox | `4aaif`, `4bkif/2025-10-23` |
| 7 | Grid & Responsive (Template-Areas, Media Queries) | `4aaif/2025-10_grid` |
| 8 | CSS Nesting (`&`) | `4bkif/2025-12-04` |
| 9 | Bootstrap (Grid/Components) | `4aaif/2025-11-19` |
| 10 | Konsolidierung/Design + WS-Projekt Website (Peer-Review) | `PROJEKT.md` |

**Bewertung:** PLF/HÜ/Mitarbeit je 1/3; WS: schriftlicher Test (MC) + Website-Projekt.

## Vorwissen / Nachwirkung

- Vorwissen: keine Web-Vorkenntnisse nötig; Terminal/Git-Grundzüge werden in UE 1 aufgebaut.
- Nachwirkung: fließt direkt in KM4 (Skriptsprachen-Vertiefung, DOM) und Jahr 2 (React).
