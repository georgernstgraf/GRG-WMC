# Decisions

Active architectural and technical decisions still in force.
Superseded decisions are relocated to HISTORY.md.

## 2026-07-26: Repo scope = Erwachsenenbildung (Abendform) only
- **Choice**: GRG-WMC documents WMC exclusively for Aufbaulehrgang + Kolleg (Abendform). Tagesschule web content is out of scope (covered by colleagues in the POS subject).
- **Reason**: User clarification — "WMC gibt es nicht in der Tagesschule, dort ist das Material in 'SWP' gemacht."
- **Considered**: Treating repo as dual-scope (Tagesschule Anlage 1.10 + EB) — rejected, corrected README/AGENTS which previously (wrongly) claimed "4. Klassen, Abteilung Informatik".
- **Tradeoff**: Tagesschule Anlage 1.10 kept only as inhaltliche Referenz (KM3–KM10 raster) in lehrplan/LEHRPLAN.md.

## 2026-07-26: Legal basis = Sonderformen-VO 368/2022 (Anlagen 1+1.9), parent ref Anlage 1.10
- **Choice**: Primary curriculum source for lehrplan is BGBl. II Nr. 368/2022 (Sonderformen, Informatik = Anlage 1.9, variants I.3 7-sem Aufbaulehrgang + I.4 6-sem Kolleg).
- **Reason**: That is the binding curriculum for the evening forms; Spengergasse runs variants I.3+I.4.
- **Considered**: Using Tagesschule Anlage 1.10 idF 383/2021 as primary — rejected (wrong school form).
- **Tradeoff**: Anlage 1.9 has NO standalone WMC subject (web content spread across NvS/NvSdS/PSE), so the school's schulautonomes Fach WMC must be documented in layer ② with §3/Fußnote-1 legitimation.

## 2026-07-26: Jahr-2 stack = TypeScript + React + Vite (Node/npm), no backend subject
- **Choice**: Jahr 2 (Sem 5+6, from SJ 2026/27) teaches React+TS via Vite/Node; server-side is NOT WMC subject matter (POS, C#, colleagues); Mini-Hono reference (Deno) only as consumption API; mobile = PWA; testing = Vitest + React Testing Library.
- **Reason**: User's tech inclination (TS+React); covers curriculum hooks (Anl. 1.9 NvSdS KM3/4; parent KM7–KM10) from the consumer perspective.
- **Considered**: Express/Fastify+Node backend in WMC — rejected (POS territory); Deno+Vite for frontend tooling — rejected in favor of npm-native mainstream; React Native/Expo — rejected for PWA.
- **Tradeoff**: Students see no full-stack implementation in WMC; mitigated via Hono reference + POS coordination.

## 2026-07-26: Deployment principle "backend serves frontend" (no split-brain)
- **Choice**: Production target: `vite build` static assets served by the backend (`/static` + `/api`, one origin); demonstrated with Hono reference; same pattern applies to POS C# (ASP.NET static files).
- **Reason**: User's stated direction — split-brain (C# API + Vite server) is not production-ready; operational best practice.
- **Considered**: Keeping dev-server proxy model only — rejected as the stated end goal.
- **Tradeoff**: One extra concept (SPA fallback, env config) to teach in WS UE 11.

## 2026-07-26: Curriculum docs 3-layer + jahrN-einheiten (mirroring GRG-SWP/GRG-INFI)
- **Choice**: lehrplan/{LEHRPLAN (3-layer), METADATA, RIS, jahr1-einheiten (retrospective), jahr2-einheiten (plan)}.md; UE tables `UE | Thema | KM-Bezug | Inhalt/HÜ`; ~13 UE + 2 PLF per semester.
- **Reason**: User asked for structure analogous to the other two repos.
- **Considered**: KM-Steckbriefe folder like GRG-SWP kompetenzmodule/ — deferred (not requested; single-teacher subject).
- **Tradeoff**: Naming uses "jahr1/jahr2" (EB blocks) instead of SWP's "jgN" (Jahrgang) because EB classes are semester-numbered.

## 2026-07-26: Archive scheme archiv/YYYY-YY-<klasse>/ (lowercase)
- **Choice**: Past classes archived as `archiv/2025-26-4aaif/` etc. (git mv, 4 folders SJ 2025/26).
- **Reason**: Formalizes previous ad-hoc renaming (3xx→4xx at semester break, commit "neues semester"); mirrors GRG-SWP `ARCHIV/2025-26-2ahwii` pattern but keeps this repo's existing lowercase `archiv/`.
- **Considered**: `archiv/2025-26/4aaif/` (year subfolder) — rejected per user choice.
- **Tradeoff**: Class folder name = SS designation (semester-renaming practice retained).
