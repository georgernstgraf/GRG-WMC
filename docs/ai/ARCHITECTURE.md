# Architecture

Living structural map of the system as of 2026-07-26.
Overwritten when structural changes occur during a session.

## Overview
GRG-WMC is a static educational content repository (no build system) for the WMC subject in the Erwachsenenbildung (Abendform) at HTL Spengergasse. Content is organized as: active semester-numbered class folders at root, archived classes under `archiv/`, topic materials under `Unterlagen/`/`Beispielprojekte/`/`Übungen/`, central docs under `docs/` (incl. curriculum `lehrplan/` and agent knowledge `docs/ai/`). `index.html` + GitHub Pages renders `README.md` client-side as a mini-SPA.

## Repo Layout
| Path | Purpose | Notes |
|------|---------|-------|
| `<N><zug>/` | Active class folders (semester-numbered) | created at semester start; renamed at semester break |
| `archiv/YYYY-YY-<klasse>/` | Archived classes per school year | populated SJ 2025/26 (4 folders) |
| `Unterlagen/` | Topic reference materials (HTML, CSS, JS, HTTP, POSIX) | |
| `Beispielprojekte/` | Demo projects (hono_on_deno, hono-prisma-htmx, deno_transpile, gists) | Hono demos = start point for Jahr-2 reference API |
| `Übungen/` | Assignments | |
| `docs/` | skriptum.md, wmc_ss_projekt_webapp.md, PDFs | Lehrinhalte_SS.md removed (absorbed into jahr1-einheiten.md) |
| `lehrplan/` | LEHRPLAN (3-layer source), METADATA, RIS, jahr1/jahr2-einheiten | created 2026-07-26 |
| `docs/ai/` | Agent knowledge base | created 2026-07-26 |
| `PROJEKT.md`, `PEER_REVIEW.md` | Jahr-1 project specs | generic, reused yearly |
| `index.html` | GitHub-Pages SPA rendering README.md + .md links | no build; marked + PicoCSS via CDN |

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
- Class folders + Unterlagen → `lehrplan/jahrN-einheiten.md` (retrospective consolidation / forward planning)
- RIS (ris.bka.gv.at) + spengergasse.at → `lehrplan/{LEHRPLAN,RIS,METADATA}.md` (legal sources, annual re-check in summer)
- `README.md` → GitHub Pages via `index.html` (public; no test specs committed)
