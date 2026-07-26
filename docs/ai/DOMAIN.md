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
- Class naming is semester-based: WS `3AAIF`/`5AKIF` → SS `4AAIF`/`6AKIF`; repo keeps one folder per class per school year (renamed at semester break).
- Evening form schedule: Mon–Thu 17:10–22:00; Diplomarbeit in the final two semesters.
- Grading: PLF / Hausübungen / Mitarbeit each 1/3; HÜ deadline next class day 00:00, late submission 75%, cutoff one week before Notenschluss.

## Verification flags (confirm with Fachgruppe)
- `AKIF` = Abend-Kolleg-Informatik: inferred from Stundentafel logic (5AKIF = Kolleg Sem 5 = first 3 h semester) — not yet confirmed.
- `BKIF`, `CAIF`: assumed parallel sections (B/C) — not confirmed.
- Who staffs the non-Georg WMC semesters (Aufbaulehrgang Sem 2/5/7, Kolleg Sem 1–4 in detail) — open.
