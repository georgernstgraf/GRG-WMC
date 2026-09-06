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
- Curriculum: `lehrplan/{LEHRPLAN,METADATA,RIS,jahr1-einheiten,jahr2-einheiten}.md` — LEHRPLAN.md is the 3-layer single source (① official ② school-adaption ③ didactics/stack).
- Knowledge files: `docs/ai/` (this directory) — read HANDOFF.md first.
- Teaching materials by topic: `Unterlagen/`; demos: `Beispielprojekte/`; assignments: `Übungen/`.
- Root README.md is rendered by index.html (GitHub Pages) — keep its markdown links valid.

## Planning
- UE tables: `UE | Thema | KM-Bezug | Inhalt/HÜ`; ~13 echte UE + 2 PLF per semester; Bonus-UE + reservierte Slots listed separately.
- Zeitmodell: Jahr 1 = 2 h/W (faktisch, schulautonom; official 1 h), Jahr 2 = 3 h block/W.
- KM-Bezug = parent raster Anlage 1.10 (KM3–KM10) + Anl.-1.9 hooks (Basis-Webtechniken, NvSdS KM3/4).

## Stack
- Jahr 1: vanilla HTML/CSS/JS, 7-Punkte-Struktur, TS-Intro via Deno transpilation, Live Server, W3C Validator.
- Jahr 2: TypeScript + React + Vite (Node/npm); Mini-Hono reference (Deno) is a consumption target only — never backend subject matter (POS territory, C# colleagues).
- Deployment demos: `vite build` → backend serves `/static` + `/api` one origin (no split-brain).
- Code style per root AGENTS.md (4-space HTML, CSS nesting, ES6+, `===`, camelCase/PascalCase, German comments where established).

## Testing
- Jahr 2: Vitest + React Testing Library; test role/query not implementation; API mocks via MSW or fetch stub.
- Repo itself: no build/test system (static educational content); validate HTML via W3C Validator.
