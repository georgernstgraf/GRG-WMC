# Domain Knowledge

Business rules and domain relationships not obvious from code.

## Entities
- **Aufbaulehrgang (EB)**: 7 semesters, evening form, entry via Pflichtschule+Vorbereitungslehrgang or equivalent; students finish WITH Matura (Berufsreifeprüfung). School runs variant I.3 of Anlage 1.9.
- **Kolleg (EB)**: 6 semesters, evening form, entry requires completed Matura/Berufsreifeprüfung/Studienberechtigung. School runs variant I.4.
- **WMC Jahr 1**: Sem 3+4 (WS+SS), faktisch 2 h/W: HTML/CSS (WS), JS-Basics + TS-Intro (SS).
- **WMC Jahr 2**: Sem 5+6 (WS+SS), 3 h evening block: React/TS, REST/Auth consumption, PWA, testing, architecture concepts.
- **POS**: Fach "Programmieren und Software Engineering" — backend/server-side (C#), taught by colleagues; WMC's Jahr 2 consumes APIs but does not teach backend.
- **Mini-Hono-Referenz**: small Deno/Hono API (REST CRUD + JWT login + `/static` + SPA fallback, optional WebSocket) — consumption target for React exercises, not subject matter.

## Rules
- WMC content is identical in Aufbaulehrgang and Kolleg ("beide Jahre gleich"); official school distribution 1/1/1/1/3/3, offset by one semester between forms (Aufbaulehrgang Sem II–VII, Kolleg Sem I–VI).
- Jahr 1 is faktisch 2 h/W although the school Stundentafel says 1 h — schulautonome Verschiebung, legitimized by §3 and Stundentafel-Fußnote 1 of BGBl. II Nr. 368/2022.
- Class code scheme (verified 2026-09-06 with Georg, cross-checked against school page Einstiegsvarianten): `<Semester><Form-Serie>IF` with odd digit = WS, even digit = SS; practical cohort codes prefix a Zug letter (A/B/C) onto the form code.
  - Form series: **AIF** = Aufbaulehrgang (7 sem, entry WITHOUT Reifeprüfung → finishes with Reife- und Diplomprüfung = Diplom + Matura); **KIF** = Kolleg (6 sem, entry requires Reifeprüfung/Berufsreifeprüfung/Studienberechtigungsprüfung → Diplomprüfung only, Matura already held); **CIF** = second Kolleg variant (Matura already held → Diplomprüfung only; meaning of the letter C still open).
  - Cohorts SJ 2025/26 (Jahr 1): AAIF (Zug A, AIF), AKIF (Zug A, KIF), BKIF (Zug B, KIF), CAIF (C, CIF — per Georg).
  - Generic block folders under `lehrplan/`: `34AIF`, `34KIF`, `34CIF` (Jahr 1), `56KIF` (Jahr 2, = 5AKIF→6AKIF).
- Evening form schedule: Mon–Thu 17:10–22:00; Diplomarbeit in the final two semesters.
- Grading: PLF / Hausübungen / Mitarbeit each 1/3; HÜ deadline next class day 00:00, late submission 75%, cutoff one week before Notenschluss.

## Verification flags (confirm with Fachgruppe)
- ~~`AKIF` decode~~ **resolved 2026-09-06** (see Rules: form series AIF/KIF/CIF; remaining detail: meaning of the letter **C** in CIF).
- Who staffs the non-Georg WMC semesters (Aufbaulehrgang Sem 2/5/7, Kolleg Sem 1–4 in detail) — open.
- KM-Steckbriefe km5–km10 quote Anl. 1.10 verbatim from BgblAuth-HTML (COO_2026_100_2_1890844), fetched 2026-09-06; the signed PDF `2021-09-03_BGBl-II-383_Novelle-Anl-1.10.pdf` contains only the VO text, not the Anlage.
