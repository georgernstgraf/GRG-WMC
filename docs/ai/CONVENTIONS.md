# Conventions

Coding patterns, naming rules, and style agreements for this project.
Follow these without question. Do not deviate unless explicitly told.

## Naming
- Class folders: semester-numbered `<N><zug>` lowercase, e.g. `3aaif` (WS) → renamed `4aaif` (SS); `5akif` (WS) → `6akif` (SS). One folder per class per school year.
- Class codes: AAIF = Aufbaulehrgang, AKIF = Kolleg, BKIF/CAIF = parallel sections (see docs/ai/DOMAIN.md for verification status).
- Archive: `archiv/YYYY-YY-<klasse>/` (e.g. `archiv/2025-26-4aaif/`), moved with `git mv`.
- Dated lesson folders inside class folders: `YYYY-MM-DD_topic`.
- Curriculum docs use "jahr1/jahr2" naming (EB blocks), not SWP's "jgN".

## File Layout
- Curriculum: `lehrplan/LEHRPLAN.md` (3-layer single source: ① official ② school-adaption ③ didactics/stack), `lehrplan/RIS.md` + `lehrplan/RIS/` (PDFs), block folders `lehrplan/wmc-aif/` / `wmc-kif/` / `wmc-cif/`, shared `kompetenzmodule/` — LEHRPLAN/RIS/kompetenzmodule stay in the lehrplan root as documented exception (DECISIONS 2026-09-10). Semester plans live in `unterricht/WMC/jg<N>-einheiten.md` (repo root).
- Knowledge files: `docs/ai/` (this directory) — read HANDOFF.md first.
- Teaching materials by topic: `Unterlagen/`; demos: `Beispielprojekte/`; assignments: `Übungen/`.
- Root README.md is rendered by index.html (GitHub Pages) — keep its markdown links valid.

## Planning
- UE tables: `UE | Thema | KM-Bezug | Inhalt/HÜ`; ~13 echte UE + 2 PLF per semester; Bonus-UE + reservierte Slots listed separately.
- Zeitmodell: Jahr 1 = 2 h/W (faktisch, schulautonom; official 1 h), Jahr 2 = 3 h block/W.
- KM-Bezug = parent raster Anlage 1.10 (KM3–KM10) + Anl.-1.9 hooks (Basis-Webtechniken, NvSdS KM3/4).

## Stack
- Jahr 1: vanilla HTML/CSS/JS, 7-Punkte-Struktur, TS-Intro via Deno transpilation, Live Server, W3C Validator.
- Unterrichts-Runtime: WMC-Demos/Lektionen laufen mit **Deno** (`deno run`, TS direkt ausführbar), nicht Node; Node-LTS betrifft nur das Jahr-2-Vite-Tooling.
- Jahr 2: TypeScript + React + Vite (Node/npm); Mini-Hono reference (Deno) is a consumption target only — never backend subject matter (POS territory, C# colleagues).
- Deployment demos: `vite build` → backend serves `/static` + `/api` one origin (no split-brain).
- Code style per root AGENTS.md (4-space HTML, CSS nesting, ES6+, `===`, camelCase/PascalCase, German comments where established).

## Testing
- Jahr 2: Vitest + React Testing Library; test role/query not implementation; API mocks via MSW or fetch stub.
- Repo itself: no build/test system (static educational content); validate HTML via W3C Validator.

## Classroom Material (create-lesson)
- Anforderung ist das **KM/die Ziel-UE**; `Unterlagen/` und Alt-Lektionen sind gelebte Praxis: kritisch auf Abdeckung prüfen, borgen/kopieren erlaubt, aber **keine Obergrenze**.
- **Prepared Lessons** liegen unter `unterricht/prepared-lessons/NN-slug.html` (+ Tages-README-Vorlage `NN-slug.md`); die Übernahme in `<klasse>/YYYY-MM-DD_thema/` (`index.html` + `README.md`) erfolgt per Hand. Der Skill schreibt nie direkt in Klassenordner.
- Zentrale, repo-weite **`assets/`**: `loader.js` (generischer Inline-Bootstrap + Ahnen-Suche), `site.js`, `github-pages-link.js` (Badge), `theme.js` (Hell/Dunkel, `localStorage`, Print hell), `quiz.js`, `lesson.css`. Kein CDN; Nutzung über den Live-Server (`serve.sh`), nie `file://`.
- **Code-Boxen sind hell und beamer-tauglich** (heller Grund, dunkle Schrift, ausreichend groß); zentrale Assets werden an zentraler Stelle korrigiert, nicht pro Lesson überschrieben.
- Studentischer Begriff ist immer **Aufgabe** (= Mitarbeit), nie „Hausübung"; „HÜ" nur umgangssprachlich bzw. als On-Disk-Dateiname. Tages-README führt Inhalt oben, dann als ersten eigenen H2-Abschnitt `## Aufgabe`, und schließt mit `## Housekeeping` (Lehrplan · KM-Bezug · Runtime).
- Quiz-Markup ist `<div class="quiz" data-loesung="N">` (zentrales `assets/quiz.js`); **1–5 Fragen** je Lesson (passungsabhängig), Richtige-Positionen ausgewogen rotieren, jede Frage ist durch den Lesson-Text gedeckt. Lessons-Tabelle im Klassen-README mit Quiz-Richtige als Sequenz (z. B. `B·A·C·D·B`).

