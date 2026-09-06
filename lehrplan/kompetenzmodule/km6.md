# KM6 — Webframework & dynamische Webapps

**Referenz:** Anlage 1.10 (BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021), Fach
„5. Webprogrammierung und Mobile Computing", III. Jahrgang, 6. Semester — Kompetenzmodul 6
**Zuordnung in diesem Repo:** Jahr 2, Sem 5 (WS) — **Anteil-KM** (Komprimierung), Ordner `lehrplan/56KIF/`
**Zeitmodell:** 3 h-Block/W → ~13 UE + 2 PLF pro Semester
**Anl.-1.9-Haken:** PSE KM2 web-nah (Userinterfaces, Eventhandling, Usability)
**Semesterplan:** `lehrplan/jahr2-einheiten.md` — WS UE 3–9

## Bildungs- und Lehraufgabe (Wortlaut Anl. 1.10)

Die Schülerinnen und Schüler können

- Backends mit Anbindung einer Datenbank entwickeln;
- Webbenutzerschnittstellen entwerfen und mit Hilfe eines Webframeworks entwickeln.

## Lehrstoff (Wortlaut Anl. 1.10)

Aktuelle Webtechniken, Skriptsprachen, Datenanbindung.
Webapplikationen clientseitig entwickeln, Usability.

## Worum geht es?

Das Framework-Modul: Webbenutzerschnittstellen **systematisch** bauen statt
improvisieren — Komponenten-Denken (UI = f(state)), State/Props/Events unter
Framework-Regeln, Deklarativ statt imperativ, Usability als Entwurfskriterium
(kontrollierte Forms, Feedback-States, lesbare Routen). React ist das gewählte
Webframework (Vollzeit-Frontend, ab 2026/27).

**Backend/Datenanbindung (BLA „Backends mit Anbindung einer Datenbank"):** Stoff im
Repo nur aus **Konsumentensicht** (REST-Contracts, DB-gebackte Ressourcen) —
Umsetzung gehört zu POS (C#/.NET, Kolleg:innen); Abstimmung: offener Punkt in
`lehrplan/jahr2-einheiten.md`.

## Abdeckung Jahr 2 WS (Plan)

| UE | Thema | KM-Bezug-Note |
|----|-------|---------------|
| 3 | JSX, Components, Props (Brücke von Vanilla-7-Punkten) | Webframework-Einstieg |
| 4 | State & Events (`useState`, Controlled Forms, Listen, Conditional) | Usability im Framework |
| 8 | React Router (Routes, `useParams`, SPA vs. MPA, 404) | Webframework vertieft |
| 9 | State-Management (Lifting, Prop-Drilling, `useContext`/`useReducer`) | Usability + Architektur |

## Vorwissen / Nachwirkung

- Vorwissen: KM5 (fetch/HTTP), Jahr 1 KM4 (State → Render → Events).
- Nachwirkung: KM10 (Abschlussprojekt als Webapp mit Framework), KM8 (PWA-Shell).
