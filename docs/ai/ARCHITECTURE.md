# Architecture

Living structural map of the system as of 2026-10-05.
Overwritten when structural changes occur during a session.

## Overview
GRG-WMC is a static educational content repository (no build system) for the WMC subject in the Erwachsenenbildung (Abendform) at HTL Spengergasse. Content is organized as: active semester-numbered class folders at root, archived classes under `archiv/`, topic materials under `Unterlagen/`/`Beispielprojekte/`/`Übungen/`, prepared lessons under `unterricht/` (flat `<PREFIX>-<NN>-<slug>/`), central docs under `docs/` (incl. curriculum `lehrplan/`, which also holds the planning files, and agent knowledge `docs/ai/`). Root `index.html` is the GitHub-Pages navigator of the prepared lessons; `.github/workflows/pages.yml` deploys only `index.html` + `assets/` + `unterricht/`.

## Repo Layout
| Path | Purpose | Notes |
|------|---------|-------|
| `<N><zug>/` | Active class folders (semester-numbered) | created at semester start; renamed at semester break |
| `archiv/YYYY-YY-<klasse>/` | Archived classes per school year | populated SJ 2025/26 (4 folders) |
| `Unterlagen/` | Topic reference materials (HTML, CSS, JS, HTTP, POSIX) | |
| `Beispielprojekte/` | Demo projects (hono_on_deno, hono-prisma-htmx, deno_transpile, gists) | `hono_on_deno` = Mini-Hono-Referenzrumpf (Deno/Hono, in-memory Musikgeschäft-API, `/static`, SPA-Fallback, TS-Transpilation) |
| `Übungen/` | Assignments | |
| `docs/` | skriptum.md, wmc_ss_projekt_webapp.md, PDFs | Lehrinhalte_SS.md removed (absorbed into lehrplan/jg1-einheiten.md) |
| `unterricht/` | Prepared Lessons (Lernplattform), flat `<PREFIX>-<NN>-<slug>/` (`KM<#>`/`SA`) with `lesson.html` + Tages-README-Vorlage | no runnable project code; cohort copying is manual |
| `lehrplan/` | LEHRPLAN (3-layer source), METADATA, RIS/ + RIS.md, wmc-aif/kif/cif + kompetenzmodule/, jg1/jg2-einheiten (planning) | created 2026-07-26, zweig-retrofit 2026-09-10, planning moved to lehrplan root 2026-10-05 |
| `docs/ai/` | Agent knowledge base | created 2026-07-26 |
| `PROJEKT.md`, `PEER_REVIEW.md` | Jahr-1 project specs | generic, reused yearly |
| `index.html` | GitHub-Pages navigator of the prepared lessons | no CDN; uses central `assets/`; deployed via `.github/workflows/pages.yml` |

## Knowledge Files (`docs/ai/`)
| File | Purpose | Update mode |
|------|---------|------------|
| HANDOFF.md | Open tasks for next session | Overwrite |
| DECISIONS.md | Active decisions still in force | Append; prune superseded → HISTORY.md |
| ARCHITECTURE.md | Living structural map | Overwrite |
| CONVENTIONS.md | Ongoing rules to follow | Append |
| PITFALLS.md | Hard-won failure knowledge | Append; fixed bugs → HISTORY.md |
| DOMAIN.md | Business/domain rules | Append |
| STATE.md | Current project status | Overwrite |
| HISTORY.md | Superseded entries archive | Append-only |

## Data Flows
- Teacher (Georg) → class folders: dated lesson materials per UE (WS `3aaif`/`5akif` → SS renamed `4aaif`/`6akif`)
- Class folders → `archiv/` at school-year end (`git mv`, scheme `YYYY-YY-<klasse>/`)
- Class folders + Unterlagen → `lehrplan/jgN-einheiten.md` (retrospective consolidation / forward planning)
- RIS (ris.bka.gv.at) + spengergasse.at → `lehrplan/{LEHRPLAN,RIS,METADATA}.md` (legal sources, annual re-check in summer)
- Prepared lessons (`unterricht/<PREFIX>-<NN>-<slug>/`) → copied by hand into `<klasse>/YYYY-MM-DD__thema/` (teacher-owned)
- `index.html` + `assets/` + `unterricht/` → GitHub Pages via `.github/workflows/pages.yml` (public; no test specs committed)
