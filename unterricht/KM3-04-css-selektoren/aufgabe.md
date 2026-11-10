# Aufgabe KM3-04 — CSS-Selektoren

Name: _____________ &nbsp;&nbsp;&nbsp; Abgabe: _____________

**Lektüre:** MDN, [CSS-Selektoren](https://developer.mozilla.org/de/docs/Web/CSS/CSS_selectors) —
Pflicht, wie in der Lektion. Zum Üben: [CSS Diner](https://flukeout.github.io/).

**Ziel:** Du findest für ein gegebenes Element den kürzesten Selektor, der
genau dieses Element trifft — ohne dafür Klassen oder IDs ins HTML zu
schreiben.

**Hilfsmittel:** der Ordner `KM3-04-css-selektoren` mit `demo.html` und
`demo.css`. Kopiere beide Dateien in deinen Projektordner und arbeite in der
Kopie; das Original bleibt unverändert.

**Regel für alle Beispiele:** Im HTML darfst du Struktur *hinzufügen*
(Abschnitte, Tabellen, Listen). Klassen und IDs an bestehenden Elementen
darfst du **nicht** ergänzen — genau darum geht es.

---

## Beispiel 1 — Das Labor erweitern

**a)** Baue in deine Kopie von `demo.html` eine Speisekarte als Tabelle mit
Kopfzeile und sechs Gerichten. Formatiere in `demo.css` **ohne** Klassen an
den Zeilen:

- die Kopfzeile deutlich abgesetzt,
- jede zweite Zeile mit hellem Hintergrund,
- den letzten Eintrag mit einem kräftigen linken Rand.

Notiere die drei Selektoren, die du verwendet hast:

```
1) ______________________   2) ______________________   3) ______________________
```

**b)** Ergänze eine geordnete Liste mit fünf Schritten. Formatiere den
**zweiten** Schritt fett und den **vorletzten** Schritt kursiv — beide über
die Position, nicht über eine Klasse.

```
2. Schritt: ______________________      vorletzter: ______________________
```

**c)** Baue zwei `<div class="kasten">`-Blöcke: einen mit einem Bild darin,
einen ohne. Formatiere **nur** den Kasten mit Bild über `:has()`. Warum
funktioniert hier `:has()` und nicht `:is()`?

_________________________________________________

---

## Beispiel 2 — Selbsttest im Prüfungsformat

Vier Aussagen, **0 bis 4 können richtig sein**. Kreuze alle zutreffenden an.

**Aussagen zu Selektoren und Spezifität**

- [ ] Ein Selektor wie `p.hinweis` trifft nur Absätze, die diese Klasse tragen.
- [ ] `h2 ~ p` trifft alle Absätze nach einer `h2`, die dieselbe Ebene haben.
- [ ] `:nth-child(2)` und `:nth-of-type(2)` treffen immer dasselbe Element.
- [ ] Bei gleichem Gewicht gewinnt die später notierte Regel.

**a)** Kreuze an und begründe bei der Aussage, die du **nicht** angekreuzt
hast, warum sie falsch ist:

_________________________________________________

**b)** Schreibe für jede Zielbeschreibung **einen** Selektor. Es gibt
mehrere richtige Lösungen; eine genügt.

| Ziel | Dein Selektor |
|------|---------------|
| alle Links, deren Ziel auf `.pdf` endet | |
| alle Absätze außer denen mit der Klasse `hinweis` | |
| das erste `li` in jeder `ul` | |
| jedes Element, das ein `img` enthält | |
| das Häkchen, das direkt vor einem `label` steht | |

**c)** Diese Regel tut nicht, was der Kommentar behauptet. Erkläre den Fehler
und schreibe die Regel richtig:

```css
/* Der erste Absatz im Container soll fett sein. */
p:nth-child(1) { font-weight: bold; }
```

_________________________________________________

### Musterlösung zu Beispiel 2

**a)** Richtig sind Aussage 1, 2 und 4 — **drei** Haken. Falsch ist Aussage 3:
`:nth-child(2)` zählt **alle** Kinder und trifft das zweite Kind, egal welcher
Tag; `:nth-of-type(2)` zählt nur Geschwister desselben Tags. Steht zuerst eine
`h3`, ist der erste `p` das zweite Kind — dann treffen beide verschiedene
Elemente.

**b)** Eine mögliche Lösung je Zeile:
`a[href$=".pdf"]` · `p:not(.hinweis)` · `li:first-child` (oder
`ul > li:first-of-type`) · `:has(img)` (z. B. `.kasten:has(img)`) ·
`input:checked + label` (bzw. `input[type="checkbox"]:checked + label`).

**c)** `:nth-child(1)` zählt alle Kinder: Steht vor dem ersten Absatz eine
Überschrift, trifft die Regel nichts. Richtig ist
`p:first-of-type { font-weight: bold; }` oder — wenn wirklich nur der erste
Absatz im Container gemeint ist — `p:nth-of-type(1)`.

---

## Beispiel 3 — Transfer: die Prüfungsaufgabe

Gegeben ist dieser Ausschnitt einer Seite. Schreibe die CSS-Regeln in eine
eigene Datei `loesung.css`; das HTML bleibt unverändert.

```html
<article class="testbereich">
    <h2>Testbereich</h2>

    <section data-topic="css-adv-selectors">
        <h3>Erweiterte Selektoren</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
        </ul>
    </section>

    <table class="preise">
        <tr><th>Gericht</th><th>Preis</th></tr>
        <tr><td>Suppe</td><td>4,50</td></tr>
        <tr><td>Hauptgericht</td><td>9,80</td></tr>
        <tr><td>Dessert</td><td>3,90</td></tr>
    </table>
</article>
```

**a)** Formatiere **alle** `<section>`-Elemente im `article.testbereich`,
deren `data-topic` mit `css-adv` beginnt: Rahmen 2 px, gestrichelt, rot.

**b)** Formatiere innerhalb dieser Sektion **nur den dritten** Listeneintrag
und darin **den direkten Link**: Textfarbe grün, Schriftgewicht fett. Füge
einen Hover-Effekt hinzu, der die Farbe in einer Sekunde weich auf rot
wechselt.

**c)** Formatiere die Preistabelle so, dass die zweite Datenzeile
(`Hauptgericht`) hervorgehoben ist und die letzte Zeile einen oberen
Rahmen bekommt — **ohne** Klassen oder IDs in den Zeilen.

**d)** Erkläre in zwei Sätzen, warum du für (a) einen Attribut-Selektor und
keinen Klassen-Selektor verwendet hast.

_________________________________________________

### Kurzlösung zu Beispiel 3

```css
/* a) */
article.testbereich section[data-topic^="css-adv"] {
    border: 2px dashed red;
}

/* b) */
article.testbereich section[data-topic^="css-adv"] li:nth-child(3) > a {
    color: green;
    font-weight: bold;
    transition: color 1s;
}
article.testbereich section[data-topic^="css-adv"] li:nth-child(3) > a:hover {
    color: red;
}

/* c) */
table.preise tr:nth-child(3) { background: #fff4cc; }   /* Kopfzeile ist Zeile 1 */
table.preise tr:last-child { border-top: 1px solid #888; }
```

**d)** Das `data-topic`-Attribut ist bereits im HTML vorhanden und beschreibt
die Sektion inhaltlich; ein Klassen-Selektor würde eine zweite, redundante
Angabe im HTML verlangen. Der Attribut-Selektor trifft außerdem alle Sektionen
mit diesem Präfix, auch wenn später eine weitere dazukommt.

---

**Abgabe:** nach Vorgabe deiner Lehrperson (Dateien, Repo-Push oder Upload).
