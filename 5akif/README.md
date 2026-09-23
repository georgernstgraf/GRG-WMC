# 5akif WMC SJ2627

## Lessons-Übersicht

| Nr | Ziel-UE | Thema | Quelle | Typ | Quiz-Richtige | Status |
|----|---------|-------|--------|-----|---------------|--------|
| 01 | UE 1 (Diagnostik-Rep) | JS-Refresher: Lambdas (`filter`, `sort`, `scramble`) | Anl.-1.10 KM5 (Referenz) | `.ts`-Übung (kein Lesson-HTML) | — | erledigt |
| 02 | UE 1 (Diagnostik-Rep) | Promises: Zustände, `.then()`-Kette | Anl.-1.10 KM7/KM8 (Referenz) | Notizen + Demo (`.ts`) | — | erledigt |
| 03 | UE 1–2 | async/await mit individuellen Exceptions | Anl. 1.9 NvSdS KM3 · Anl. 1.10 KM7/KM8 | Lesson-HTML + Quiz + Aufgabe | B · A · C · D · B | erledigt |

## Asynchronität II: async/await 23.9.2026

Wiederholung/Ausbau zu Promises vom 18.9. — Lesson: [`2026-09-23__async-await/lesson.html`](./2026-09-23__async-await/lesson.html)
(Demo: `demo.ts` im selben Ordner, Runtime Deno: `deno run demo.ts`; Aufgabe integriert am Lesson-Ende — siehe auch [Tages-README](./2026-09-23__async-await/README.md))

- `async`-Funktion gibt immer ein `Promise` zurück
- `await` nur in `async`-Funktionen (oder Modul-Ebene)
- `try/catch` ersetzt `.catch()` — pro Stufe eigener Error-Typ
  (ValidationError / PaymentError / ShippingError), gefangen via
  `instanceof` (Variante A) oder granular mit try pro Stufe (Variante B)
- Demo in TypeScript, ausgeführt mit Deno (`deno run demo.ts`,
  Typ-Prüfung `deno check demo.ts`)
- Quiz in der Lesson

## Wiederholung Javascript 11.9.2026

Javascript Runtimes

- Browser (eigene Rolle, weil er nicht alles darf)

- **Deno**
- Node.js
- Bun

Jedes Javascript ist auch gültiges Typescript.
Fast kein gültiges Typescript ist auch gültiges Javascript.

Übung:

- Modifizieren Sie filter....ts so, dass alle Zahlen,
  die NICHT durch 3 teilbar sind, ausgegeben werden.
- Alle Zahlen, welche prim sind
- Implementierung als
- - eigenständige function
- - lambda Ausdruck
