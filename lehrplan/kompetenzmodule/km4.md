# KM4 — Clientseitige Webapplikationen

**Referenz:** Anlage 1.10 (BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021), Fach
„5. Webprogrammierung und Mobile Computing", II. Jahrgang, 4. Semester — Kompetenzmodul 4
**Zuordnung in diesem Repo:** Jahr 1, Sem 4 (SS) — Ordner `lehrplan/34AIF/` · `lehrplan/34KIF/` · `lehrplan/34CIF/`
**Zeitmodell:** 2 h/W (schulautonom; lt. Stundentafel 1 h) → ~13 UE + 2 PLF
**Anl.-1.9-Haken:** „Netzwerke und verteilte Systeme" (1. Semester), Bereich Basis-Webtechniken
**Semesterplan:** `lehrplan/jahr1-einheiten.md` — SS-Tabelle (Rückpflege SJ 2025/26)

## Bildungs- und Lehraufgabe (Wortlaut Anl. 1.10)

Die Schülerinnen und Schüler können

- Webseiten auf Basis konkreter Vorgaben unter Verwendung von Skriptsprachen erstellen;
- Webapplikationen nach vorgegebenen Spezifikationen entwickeln.

## Lehrstoff (Wortlaut Anl. 1.10)

Aktuelle Webtechniken, Skriptsprachen.
Webapplikationen clientseitig entwickeln.

## Worum geht es?

Von der statischen Seite zur **Client-App**: Skriptsprache als Werkzeug für
Zustand und Interaktion — Datentypen, Funktionen/Arrays funktional, DOM als
Baustelle, Events als Steuersignal, Promises/`async`/`await` + Fetch als
Kommunikations-Skill, und die App-Struktur (State → Render → Events) als
Invariants-Kern. TS-Intro zeigt die Typisierung als Option vor Jahr 2.

## Abdeckung Jahr 1 SS (Ist, Rückpflege)

| UE | Thema | Beleg |
|----|-------|-------|
| 1 | JS-Intro (Datentypen, `typeof`, `let`/`const`, `==` vs `===`) | `4aaif/2026-02-12` |
| 2 | Funktionen & Objekte (Template Strings, `querySelector`, Debugger) | Taschenrechner-HÜ |
| 3 | Arrays funktional (`map`/`filter`/`reduce`, Spread, Comparator) + Knowledge Check | `2026-03-04_knowledge` |
| 4 | Objekte & Klassen (private Felder `#`, Ternär, Truthy) | `4bkif/2026-03-12` |
| 5 | JS im Browser I (`type="module"`, `querySelectorAll`, `innerText` vs `innerHTML`) | `4aaif/2026-03-18` |
| 6 | Promises & async (`Promise.all`/`race`, Fetch, `try/catch`) | `4aaif/2026-03-26` |
| 7 | DOM-Manipulation (`createElement`, `appendChild`, `classList`, Events) | Sortier-Tabellen |
| 8 | State-Driven UI (7-/8-Punkte-Struktur, TodoApp v1/v2) | `4bkif/2026-04-23` |
| 9 | TS-Intro & Transpilation (Deno) | `4aaif/2026-04-29` |
| 10 | Konsolidierung/Certs + SS-Projekt Webapp (fetch, DOM, Abgabevideo) | `PROJEKT.md` |

**Bewertung:** PLF/HÜ/Mitarbeit je 1/3; SS: praktische PLF (DOM/Arrays/async) + Webapp-Projekt.

## Vorwissen / Nachwirkung

- Vorwissen: KM3 (HTML/CSS-Fundament, Events-Basis).
- Nachwirkung: KM5 (Frontend/Backend, HTTP, fetch vertieft) und Jahr 2 — React
  baut explizit auf der Vanilla-7-Punkte-Struktur auf („Explizite Brücke", UE 3 WS).
