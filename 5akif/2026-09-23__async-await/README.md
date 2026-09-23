# UE 1–2 · Async/Await — Bestell-Pipeline mit individuellen Exceptions (2026-09-23)

Selbst-contained Lektion: [`lesson.html`](./lesson.html) öffnen (Erklärung, Quiz, Hausübung).

- KM-Bezug: Diagnostik-Rep async — UE 1 (Anl. 1.9 NvSdS KM3 · Anl. 1.10 KM7/KM8-Konsum); Fortsetzung des Promise-Recaps vom 18.9. ([`../2026-09-18__promise/`](../2026-09-18__promise/))
- Lehrplan: `lehrplan/LEHRPLAN.md`, `lehrplan/kompetenzmodule/km7.md`, `unterricht/WMC/jg2-einheiten.md` (WS UE 1–2)
- Demo: [`demo.ts`](./demo.ts) — Bestell-Pipeline `bestellen → bezahlen → liefern`, je Stufe eigener Error-Typ (ValidationError / PaymentError / ShippingError), gefangen via `instanceof` (Variante A) bzw. granular mit try pro Stufe + Re-Throw (Variante B)
- Runtime: **Deno** — `deno run demo.ts`, Typ-Prüfung `deno check demo.ts` (kein Node)
- Quiz: 5 Fragen (instanceof, await-Rejection, async-Return, granulare Variante, Re-Throw), Richtige: **B · A · C · D · B**
- HÜ bis nächste UE: integriert am Lesson-Ende (Abschnitt „7 · Hausübung“) — `ClaimError`-Stufe, ValidationError-Vorhersage, `finally`, Bonus; Abgabe per Commit im Schüler-Repo
