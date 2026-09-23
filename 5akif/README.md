# 5akif WMC SJ2627

## Asynchronität II: async/await 23.9.2026

Wiederholung/Ausbau zu Promises vom 18.9. — Lesson: [`2026-09-23_async-await/lesson.html`](./2026-09-23_async-await/lesson.html)
(Demo: `demo.js` im selben Ordner, `node demo.js`)

- `async`-Funktion gibt immer ein `Promise` zurück
- `await` nur in `async`-Funktionen (oder Modul-Ebene)
- `try/catch` ersetzt `.catch()` — pro Stufe eigener Error-Typ
  (ValidationError / PaymentError / ShippingError), gefangen via
  `instanceof` (Variante A) oder granular mit try pro Stufe (Variante B)
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
