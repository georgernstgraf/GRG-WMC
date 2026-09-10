# GRG-WMC – Webprogrammierung und Mobile Computing

**Unterlagen, Beispielcode und Projekte für den WMC-Unterricht in der Erwachsenenbildung
an der HTL Spengergasse (Aufbaulehrgang & Kolleg für Berufstätige für Informatik, Abendform).**

> Lehrplan & Semesterplanung: [`lehrplan/`](./lehrplan/) —
> dort [`LEHRPLAN.md`](./lehrplan/LEHRPLAN.md) (dreischichtlich, form-übergreifend),
> Semesterpläne unter [`unterricht/WMC/`](./unterricht/WMC/)
> (`jg1-einheiten.md`, `jg2-einheiten.md`).
> In der Tagesschule werden die Web-Inhalte im Fach POS abgedeckt (Kolleg:innen) —
> dieses Repo betrifft **nur die Abendform**.

---

## Beurteilung

Die Note setzt sich aus drei gleich gewerteten Bereichen zusammen:

| Bereich | Gewicht |
|---|---|
| PLF (Praxis-Leistungs-Feststellung) | 40% |
| Haus/Schul Übungen | 40% |
| mündl Mitarbeit | 20% | (Bauchgefühl Lehrer)

Mitarbeit umfasst auch Schulübungen und Stundenwiederholungen; deren Qualität und
Intensität werden von der Lehrperson beurteilt.

## Hausübungen

- **Abgabe:** spätestens am nächsten Unterrichtstag **00:00 Uhr** (in der Regel eine Woche später).
- **Nachreichung:** jederzeit möglich – die erreichte Punktezahl zählt **75 %**.
- **Cutoff:** Genau **eine Woche vor dem Notenschluss, 00:00 Uhr**, ist Endtermin.
  Danach werden die Repos automatisiert ausgewertet.

---

## Übersicht

Dieses Repository enthält sämtliche Materialien für das Fach **Webprogrammierung und
Mobile Computing (WMC)**. Es dient als zentrale Anlaufstelle für Unterrichtsinhalte,
Beispielprojekte, Übungen und Lösungen. WMC wird in zwei Blöcken unterrichtet
(inhaltlich identisch für Aufbaulehrgang und Kolleg):

### Jahr 1 (Sem 3+4, 2 h/W)

- HTML5 & semantisches Markup
- CSS (Flexbox, Grid, Positionierung, Nesting, Custom Properties, Responsive)
- CSS-Frameworks (Bootstrap, Tailwind, Picocss)
- JavaScript (Datentypen, `let`/`const`, Funktionen, Template Strings)
- Array-Methoden (`map`, `filter`, `reduce`, Spread)
- DOM-Manipulation, Events
- Asynchrone Programmierung (Promises, `async`/`await`, Fetch API)
- Klassen, private Felder (`#`), State-Driven UI (7-Punkte-Struktur)
- TypeScript-Intro & Transpilation (Deno)
- Projekte: Website (WS, mit Peer-Review) + Webapp (SS, mit Abgabevideo)

### Jahr 2 (Sem 5+6, 3 h-Block/W) — ab SJ 2026/27

- TypeScript vertieft, React + Vite (Components, Props, State, Hooks, Router, Context)
- REST-Konsum & Auth-Client (JWT) gegen Referenz-API
- Deployment: Backend liefert Frontend aus (`vite build` → `/static`, same-origin)
- Testing (Vitest + React Testing Library)
- Mobile Computing als PWA (Manifest, Service Worker, Offline)
- Architektur verteilter Systeme, SOA/Middleware/Multi-Tier (Konzept; Server-Umsetzung = POS)
- Abschlussprojekt (Multi-Tier-Webapp)

---

## Aufbau

| Verzeichnis | Inhalt |
|---|---|
| `3aaif/`, `5akif/` … | Unterrichtsordner der **laufenden** Klassen (semestriert: WS `3AAIF` → SS `4AAIF`; datierte Einträge `YYYY-MM-DD_thema`) — entstehen zu Semesterbeginn |
| [`archiv/`](./archiv/) | Archiv vergangener Schuljahre (`YYYY-YY-<klasse>/`, z. B. `archiv/2025-26-4aaif/`) |
| [`Unterlagen/`](./Unterlagen/) | Thematische Referenzmaterialien zu HTML, CSS, JS, HTTP, POSIX |
| [`Beispielprojekte/`](./Beispielprojekte/) | Demo-Projekte (Ticketautomat, Hono + Prisma + HTMX, Deno-Transpilation, Code-Gists) |
| [`Übungen/`](./Übungen/) | Aufgabenstellungen für Einzel- und Gruppenübungen |
| [`docs/`](./docs/) | Zentrale Dokumente (Skriptum, Projektangaben) |
| [`lehrplan/`](./lehrplan/) | **Lehrplan dreischichtig** (LEHRPLAN, METADATA, RIS/ + RIS.md, wmc-aif/kif/cif Block-Ordner, kompetenzmodule/) |

### Wichtige Dateien

| Datei | Beschreibung |
|---|---|
| [`PROJEKT.md`](./PROJEKT.md) | Angabe zum Jahr-1-Abschlussprojekt (Webapp, SS) |
| [`PEER_REVIEW.md`](./PEER_REVIEW.md) | Vorlage für Peer-Feedback zu Website-Projekten |
| [`AGENTS.md`](./AGENTS.md) | Coding Guidelines für KI-Assistenten (Code-Style, Projektstruktur) |
| [`docs/skriptum.md`](./docs/skriptum.md) | JS/TS-Skriptum (Selbststudium) |
| [`docs/wmc_ss_projekt_webapp.md`](./docs/wmc_ss_projekt_webapp.md) | Jahr-1-SS-Projektangabe |

> **Hinweis:** Dieses Repository ist öffentlich. Es enthält **keine** Test-Angaben.

---

## Technologien

- **Jahr 1:** HTML5, CSS3 (Flexbox, Grid, Nesting, Custom Properties), JavaScript (ES6+),
  TS-Intro (Deno-Transpilation), Live Server, W3C Validator
- **Jahr 2 (ab 2026/27):** TypeScript, React + Vite (Node/npm), Mini-Hono-Referenz
  (Deno) als Übungs-API, PWA, Vitest + React Testing Library
- **Backend (Stoff):** entfällt in WMC → Fach POS (C#, Kolleg:innen)
- **Werkzeuge:** VS Code, Git/GitHub, Browser-DevTools

---

## Klassen

### Laufend (SJ 2026/27)

| Klasse | Block | Inhalt |
|---|---|---|
| 3AAIF → 4AAIF | Jahr 1 | HTML/CSS (WS) → JS-Basics (SS) |
| 5AKIF → 6AKIF | Jahr 2 | React + TypeScript |

### Archiv

| Schuljahr | Klassen |
|---|---|
| 2025/26 (Jahr 1) | [`4aaif`](./archiv/2025-26-4aaif/) · [`4akif`](./archiv/2025-26-4akif/) · [`4bkif`](./archiv/2025-26-4bkif/) · [`4caif`](./archiv/2025-26-4caif/) |
