# sj25-26-34aaif-wmc

## 2026-03-04_array methods

`import personen from "./persons.json" with { type: "json" };`

Array MAP: (in ein anderes array transponieren)

sehr verbose: `personen.map( (pers) => { return pers.alter } )`
erwas kleiner (parameter nicht in klammer):  `personen.map( pers => { return pers.alter } )`
Das geht NUR mit EINEM Parameter
`personen.map( pers => pers.alter )` KÜRZEST mögliche Form von Arrow func.

```js
> personen.filter( p => p.alter <= 30 ).map( p => p.name )
[ "Lukas Huber", "Mateo Rossi", "Julian Novak" ]
```

array.slice(startindex, endindex) - gibt neues array zurück, das die Elemente von startindex bis endindex-1 enthält

Neues Array mit Namen aller Personen:
const namen = personen.map(person => person.name);

Gesamtgewicht aller Personen:
personen.reduce((acc, person) => acc + person.weight, 0)

## 2026-02-25 javascript in action

- browser console für errors
- index.html immer besser mit kleinem i
- eval und seine Problematik
- document.*getElementbyId und -querySelector..
- array / functions
- anonyme / lambda - functions
- for (let i ...)
- template strings+
- for (const [index, value] **of** a.entries()) { console.log(`${index}: ${value}`); }
- bigInt: 1n
- a.sort((e1,e2) => {return '<0' | 0 | '>0' })
SÜ / HÜ:

- a = [23, false, -7n, true, "Vladimir", {age: 11}]

Ein array sortieren, welches untersch. Dateentypen hat, zuerst:

- nach Datentyp
- dann nach Wert

## 2026-02-18 fs functions

- wh .. insbes. functions
- das Arguments object .. siehe Folie js-functions

siehe auch den code von heute

- template strings
- document.getElementByXXXXX

HÜ: kleinen Taschenrechner ausgehend v. heutigem code.

## 2026-02-11 intro javascript

- datentypen
- let, const
- functions, arguments

## 2026-01-07

Am 14.1. und 21.1. finden im Unterricht die Projektabgaben mit
Demo und Besprechung statt.

Weiters: <https://deno.land/> - Deno installieren (Alternative zu node.js).

## 2025-11-05

- wh grid / template areas
- css-tricks: centering
- folie fonts
- axis praxis

HÜ: nachweislich mit fonts zu spielen!!

## 2025-10-15

- flexbox
- flexbox froggy

## 2025-10-08

- css selectors
- <https://flukeout.github.io/>

ggf. zu Hause fertig machen

Abgabe: mind. 10 Screenshots ab Übung 16

## 24.9.2025

- width
- rgba
- etwas flex
- `<details>`
- w3c validator
- box sizing

HÜ:

- recherche zu position:
- einbau von positionierten Elementen auf der "übermich" site (kevin powell)

## 17.9.2025

HÜ:

- CSS Folie durchschauen und eigene Site dekorieren!

## 3.9.2025

HÜ:

- Persönliches Repo anlegen
- Link an Lehrer schicken
- simples html "über mich" oder ähnlich
- installation von git <https://git-scm.com>

Semantic HTML
HTML ist ein Graph
vscode
plugins: live server / w3c validator
