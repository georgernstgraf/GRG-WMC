# KM5 — Frontend/Backend-Kommunikation, HTTP(S)

**Referenz:** Anlage 1.10 (BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021), Fach
„5. Webprogrammierung und Mobile Computing", III. Jahrgang, 5. Semester — Kompetenzmodul 5
**Zuordnung in diesem Repo:** Jahr 2, Sem 5 (WS) — **Anteil-KM** (Komprimierung: 6 KMs
auf 2 Semester), Ordner `lehrplan/wmc-kif/56KIF/`
**Zeitmodell:** 3 h-Block/W (Abendeinheit) → ~13 UE + 2 PLF pro Semester
**Anl.-1.9-Haken:** NvSdS (Architektur und Entwicklung verteilter Systeme), PSE KM2 web-nah
**Semesterplan:** `unterricht/WMC/jg2-einheiten.md` — WS UE 1–7

## Bildungs- und Lehraufgabe (Wortlaut Anl. 1.10)

Die Schülerinnen und Schüler können

- einfache Backends implementieren;
- einfache Webbenutzerschnittstellen entwickeln;
- den Einsatz von Protokollen für Webapplikationen verstehen.

## Lehrstoff (Wortlaut Anl. 1.10)

Kommunikation zwischen Frontend und Backend.
Dynamisch Frontends, Funktionen Backend.
Komplexe Elemente Auszeichnungssprachen, Formatierungstechniken.
Komplexe Elemente von Skriptsprachen, dynamische Elemente, Gestaltungsvorlagen.
HTTP(S)-Protokoll.

## Worum geht es?

Erst die Kommunikation macht Web aus **Seiten** zu **Applikationen**: Request/Response
verstehen (Methoden, Statuscodes, Header), Frontend/Backend als Rollen trennen und
das Backend als Daten- und Logikdienst begreifen. In diesem Repo steht das Backend
**nicht als Stoff** (POS, C#/.NET) — die Mini-Hono-Referenz (Deno) dient als
Konsum-Ziel und Demonstrationsobjekt.

## Abdeckung Jahr 2 WS (Plan, SJ 2026/27)

| UE | Thema | KM-Bezug-Note |
|----|-------|---------------|
| 2 | TypeScript vertieft + Vite-Setup | „komplexe Elemente Skriptsprachen" |
| 5 | Hooks & Datenholen (`useEffect`, fetch, Loading/Error) | Kommunikation Frontend/Backend |
| 6 | REST-Konsum (CRUD) gegen Mini-Hono-Referenz | HTTP(S), Statuscodes, JSON-Contracts |

**Server-Anteil (BLA „einfache Backends implementieren"):** implizit über die
Referenz-API (Konsum + Deployment-Muster, WS UE 11) — produktive Umsetzung = POS.

## Vorwissen / Nachwirkung

- Vorwissen: Jahr 1 KM4 (fetch, async, DOM), TS-Intro.
- Nachwirkung: KM6 (Webframework React) baut die Schnittstellen-Kompetenz weiter aus.
