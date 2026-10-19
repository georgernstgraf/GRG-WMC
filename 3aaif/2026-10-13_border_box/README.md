# Selektoren & Spezifität (2026-10-13)

Demo: `index.html` + `style.css` im selben Ordner — `body` trägt `class="meine"`
und `id="deine"`; `style.css` formatiert dasselbe Element über Element-Selektor,
Klasse und ID mit unterschiedlichen Farben.

- Kern: **Kaskade & Spezifität** — bei gleicher Spezifität gewinnt die *letzte*
  Regel (`#deine` grün → später braun); ID schlägt Klasse schlägt Element
- Anschluss an das Box-Model: `Unterlagen/css/CSS-Boxmodel.pdf` (Box-Model &
  Sizing, parallel in 3caif)

## Aufgabe

Erweiterung der eigenen „Über mich“-Seite mit Box-Model / `box-sizing: border-box`
/ Einheiten — Details in `unterricht/KM3-03-css-basics/KM3-03-css-basics.md`
(Abschnitt „Jetzt du!“ + Aufgabe am Lesson-Ende).

## Housekeeping

- Lehrplan: `lehrplan/LEHRPLAN.md` · `lehrplan/jg1-einheiten.md` (UE 3/4)
- KM-Bezug: KM3 · Formatierungstechniken (Anl. 1.9 Basis-Webtechniken) · Anschluss an UE 4 (Selektoren)
- Runtime: Browser, Live Server
