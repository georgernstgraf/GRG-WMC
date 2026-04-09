# sj25-26-34bkif-wmc

## TEST am 23.4

## 2026-04-10_js_im_browser

Damit ein script seinerseits weiter importieren kann, muss es ein module sein (type="module")
Bei "module" sind die objekte des skriptes NICHT auf dem window-Object verfügbar, aber:

`window.xy = xy` macht dies möglich.

HÜ:

**Phase 1** auch alle restlichen Spalten sollen sortieren können!

Tipp: string.localeCompare() zum Strings-sortieren.

**Phase 2** jeder sortier-button möge ein "toggle" sein. 

## 2026-03-19

Schul-/Hausübung im heutigen Ordner

JS Arrays funktional ähnlich wie Collections in Java (Arraylist)
JS Array ist ein Hybrid aus Java Array und ArrayList

- array.length in JS <=> arrayList.size() in Java
- array.splice() Einfügen bzw. entfernen eines oder mehrerer Elemente, modifiziert in-place
- array.slice(...) bestimmte Ausschnitte erhalten
- array.filter: callback(elem): boolean
```js
a.filter( (elem) => { return typeof elem === "string" && elem.length > 3 } )
[ "raus", "Natur", "Helle Sonne" ]
b.forEach((elem, idx) => console.log(`Element: ${elem}, Index: ${idx}`));
Element: raus, Index: 0
Element: in, Index: 1
Element: die, Index: 2
Element: Natur, Index: 3
Element: Helle Sonne, Index: 4

b.map( (elem) => { return {"wort": elem} })
```
a.foreach(...) callback funktion sollte void returnen

## 2026-03-12

Folie "04_JavaScript_Objekte.pdf" besprochen.

Empfehlung DSAI: <https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&si=sefx1YzJGHWlhRAa>
Empfehlung FreeCodeCamp: <https://www.freecodecamp.org/>
Weitere gut Plattform: <https://www.boot.dev/>

Construktor in Klasse
Ternärer Operator ` ? ... : `
Truthy booleans
a ? b : c "Wenn a, dann b sonst c"
Template STrings
JSON gründlich

## 2026-03-05

**mini-test findet statt**

clean functions, bsp nicht clean:

```javascript
> a
12
> function f() {
    a = 23; // HIER wird die globale Variable a verändert, das ist nicht clean
 }
undefined
> a
12
> f()
undefined
> a
23
```

JSON.stringify() und JSON.parse() detailliert besprochen

## mikro-tests unangekündigt

## 2026-02-26

typescript kurze demo
functions folie Unterlagen/JS/JS-Functions/JS-Functions-GRG.pdf
demo files

## 2026-02-19__javascript intro

- interpretierte Sprache
- runtimes: node deno browser
- javascript datentypen / typeof
  - string
  - number
  - boolean
  - bigint (eg. 23n)
- variable deklaration let const
- comment: "//" od. "/*.....*/"
- unterschied == und ===
- functions arguments (auch unabhängig von Klassen)
- json javascript object notation { "x": 42 }

## Abgabe Website

- Deadline: 8. Jänner 23:59
- gewünschte Features
- - 2-3-4-5 Unterseiten
- - responsive Verhalten erkennbar (handy - view bei devtools beachten!)
- - flexbox, grid, position, generell besprochene Inhalte anwenden!

Bei zwischendurch Fragen gerne email schreiben.

## nesting

<https://youtu.be/h4Xp1QgNkhU?si=6c_IbfStKmrLzeMN>

## Schriftlicher Test am 15. Jänner 2026

Wissensabfrage, multiple choice

## 2025-11-06

- CSS Grid Layout
- Responsive Design mit Media Queries (@media)
- cssgridgarden gemacht

## 2025-10-23

Flexbox mit Froggy

## 2025-10-09

- css selectors bis excl. attr

am 25.9.: html5-tags 2. Seite

## 2025-10-02

- css Anfänge box model, selectors (angefangen)

HÜ: Bitte mit styles die vorhandene Site gestalten

## 2025-09-18

bis nächstes MAL BITTE

- git repo url an grafg@ senden
- eine website anlegen (index.html) mit Fokus auf Struktur und besprochene Tags, zu einem Thema Ihrer Wahl.

## 2025-09-11

- vscode extensions, Qualitätskriterien
- live server
- W3C Web Validator
- URL: <http://127.0.0.1:5500/2025-09_html/index.html>
- google chrome ~2009 -> javascript engine "v8"
- devtools im browser `<F12>`
- <https://caniuse.com/>

## 2025-09-04

Einführung in Git, Repo auf github
Folie Git gemacht

HÜ:

- `git` möge im Terminal (cmd, ps1) funktionieren
- installation visual studio code
