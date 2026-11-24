# Aufgabe KM3-06 — CSS Grid

Name: _____________ &nbsp;&nbsp;&nbsp; Abgabe: _____________

**Lektüre:** CSS-Tricks, [A Complete Guide to
Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) — Pflicht,
wie in der Lektion. Zum Üben: [Grid Garden](https://cssgridgarden.com/#de),
Level 1–28.

**Ziel:** Du baust eine Seite, deren Gerüst ein Raster trägt — ohne
verschachtelte Leisten, ohne Prozentrechnung, ohne feste Höhen.

**Hilfsmittel:** ein leerer Ordner mit `index.html` und `style.css`,
verlinkt per `<link rel="stylesheet" href="style.css">`. Kein Framework,
kein CDN. Öffne die Seite über den Live-Server, nicht per Doppelklick.

**Regel für alle Beispiele:** `position` und `float` sind tabu. `height`
nur dort, wo die Aufgabe es ausdrücklich nennt. Wenn eine Lösung ohne sie
nicht geht, notiere, warum — das ist selbst ein Ergebnis.

---

## Beispiel 1 — Die Termine-Seite

Das ist die Kernübung: die Termine-Seite des Merch-Stands. Du bekommst das
HTML, du schreibst nur das CSS.

```html
<div class="seite">
    <header class="kopf">
        <span class="logo">NACHTFALTER</span>
        <nav class="links">
            <a href="#">Termine</a>
            <a href="#">Merch</a>
            <a href="#">Kontakt</a>
        </nav>
    </header>

    <nav class="plan">
        <h2>Tourplan</h2>
        <ul>
            <li>12.3. Wien</li>
            <li>19.3. Graz</li>
            <li>26.3. Linz</li>
            <li>2.4. Salzburg</li>
        </ul>
    </nav>

    <main class="termine">
        <article class="karte">
            <h2>12.3. Wien</h2>
            <p>Arena, 20:00</p>
            <p class="preis">ab 32 €</p>
        </article>
        <article class="karte">
            <h2>19.3. Graz</h2>
            <p>Orpheum, 20:00</p>
            <p class="preis">ab 29 €</p>
        </article>
        <article class="karte">
            <h2>26.3. Linz</h2>
            <p>Posthof, 20:30</p>
            <p class="preis">ab 30 €</p>
        </article>
        <article class="karte">
            <h2>2.4. Salzburg</h2>
            <p>Rockhouse, 20:00</p>
            <p class="preis">ab 34 €</p>
        </article>
    </main>

    <footer class="fuss">
        <p>Impressum · Datenschutz · Newsletter</p>
    </footer>
</div>
```

**a)** **Gerüst.** `.seite` wird ein Raster mit zwei Spalten (12rem,
Rest) und drei Zeilen (Kopf so hoch wie nötig, Mitte füllt, Fuß so hoch
wie nötig). Kopf und Fuß laufen über beide Spalten. Der Abstand zwischen
allen Zellen ist 1rem, und die Seite ist mindestens so hoch wie das
Fenster (`100dvh`), damit der Fuß unten sitzt. Arbeite mit
`grid-template-areas` — nicht mit `grid-column: 1 / 3`.

**b)** **Kartenraster.** `.termine` legt so viele Spalten an, wie
mindestens 14rem breite Karten nebeneinander passen; jede Karte wächst
danach gleichmäßig. Abstand 1rem. Die Karten sollen oben beginnen und
nicht über die Höhe der `main`-Zelle verteilt werden. Nenne die Eigenschaft,
die das verhindert.

**c)** **Karteninhalt.** Die Karte ist eine Flexbox-Spalte: Titel,
Beschreibung, dann der Preis. Der Preis klebt unten, auch wenn eine
Beschreibung zwei Zeilen länger ist.

**d)** **Schmal.** Unter 720 px: eine Spalte, Bereiche in der Reihenfolge
kopf → plan → termine → fuss. Die Vorlage wird umgeschrieben, das HTML
bleibt unverändert. Prüfe in den DevTools bei 400 px: kein waagerechter
Überlauf, alle vier Bereiche untereinander.

**e)** Fülle die Tabelle aus, bevor du die Lösung liest.

| Anforderung | Deine Eigenschaft |
|---|---|
| Container wird ein Raster | |
| zwei Spalten, links 12rem | |
| Bereiche im CSS zeichnen | |
| Kopf über beide Spalten | |
| Abstand zwischen den Zellen | |
| Fuß bleibt unten | |
| Spaltenzahl folgt der Breite | |
| Karten beginnen oben | |
| Preis klebt unten in der Karte | |
| unter 720 px alles untereinander | |

### Kurzlösung zu Beispiel 1

```css
:root {
    --grund: #f7f5f0;
    --tinte: #1b1a17;
    --karte: #ffffff;
    --linie: #ded8cb;
    --akzent: #7a3fb5;
}

* { box-sizing: border-box; }

body {
    margin: 0;
    font-family: "Segoe UI", system-ui, sans-serif;
    background: var(--grund);
    color: var(--tinte);
    line-height: 1.6;
}

/* a) Gerüst: ein Raster trägt Kopf, Plan, Termine, Fuß */
.seite {
    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "kopf  kopf"
        "plan  termine"
        "fuss  fuss";
    gap: 1rem;
    min-height: 100dvh;          /* Fuß sitzt unten, auch bei wenig Inhalt */
    padding: 1rem;
}

.kopf  { grid-area: kopf; }
.plan  { grid-area: plan; }
.termine { grid-area: termine; }
.fuss  { grid-area: fuss; }

/* Kopfleiste: aus der letzten Stunde, unverändert gültig */
.kopf {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 1.5rem;
    background: var(--tinte);
    color: var(--grund);
}

.logo { font-weight: 700; letter-spacing: 0.15em; }
.links { display: flex; gap: 1.25rem; margin-left: auto; }
.links a { color: inherit; text-decoration: none; }

/* Plan-Spalte */
.plan {
    background: var(--karte);
    border: 1px solid var(--linie);
    padding: 1rem;
}

.plan h2 { margin: 0 0 0.5rem; font-size: 1rem; }
.plan ul { margin: 0; padding-left: 1.1rem; }

/* b) Kartenraster: Spaltenzahl folgt der Breite */
.termine {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1rem;
    align-content: start;        /* Karten oben, nicht über die Zelle verteilt */
}

/* c) Karte als Flexbox-Spalte */
.karte {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    background: var(--karte);
    border: 1px solid var(--linie);
    border-radius: 8px;
    padding: 1rem;
}

.karte h2 { margin: 0; font-size: 1.05rem; }
.karte p { margin: 0; color: #55504a; }

.karte .preis {
    margin-top: auto;            /* frisst den freien Platz: Preis unten */
    font-weight: 700;
    color: var(--tinte);
}

.fuss {
    background: var(--karte);
    border: 1px solid var(--linie);
    padding: 0.75rem 1.5rem;
}

.fuss p { margin: 0; color: #55504a; }

/* d) Schmal: Vorlage umschreiben, HTML bleibt */
@media (max-width: 720px) {
    .seite {
        grid-template-columns: 1fr;
        grid-template-areas:
            "kopf"
            "plan"
            "termine"
            "fuss";
    }
}
```

**e) Tabelle:** `display: grid` · `grid-template-columns: 12rem 1fr` ·
`grid-template-areas` · `grid-area` bzw. die Vorlage mit gleichen Namen ·
`gap` · `min-height: 100dvh` mit `grid-template-rows: auto 1fr auto` ·
`repeat(auto-fit, minmax(14rem, 1fr))` · `align-content: start` ·
Karte als Flexbox-Spalte mit `margin-top: auto` am Preis · Media Query mit
einer Spalte und neuer Vorlage.

---

## Beispiel 2 — Selbsttest im Prüfungsformat

Vier Aussagen, **0 bis 4 können richtig sein**. Kreuze alle zutreffenden an.

- [ ] In einem Grid werden nur die direkten Kinder zu Grid-Items.
- [ ] `fr` verteilt den Platz, der nach `gap` und den festen Spalten übrig
      bleibt.
- [ ] `grid-column: 1 / -1` lässt ein Kind über die ganze Breite laufen.
- [ ] `grid-template-areas` erlaubt auch L-förmige Bereiche.

**a)** Kreuze an und begründe bei der Aussage, die du **nicht**
angekreuzt hast, warum sie falsch ist:

_________________________________________________

**b)** Ordne jeder Zielbeschreibung **eine** Eigenschaft zu.

| Ziel | Deine Eigenschaft |
|---|---|
| das ganze Seitengerüst beschreiben | |
| Spaltenzahl folgt der Fensterbreite | |
| Inhalt einer Zelle waagrecht und senkrecht mittig | |
| ein Kind läuft über alle Spalten | |
| Abstand zwischen den Zellen | |
| auf schmalen Fenstern eine andere Bereichsreihenfolge | |

**c)** Diese Regel tut nicht, was der Kommentar behauptet. Erkläre den
Fehler und schreibe die Regel richtig:

```css
/* Die Karte soll die Spalten 2 und 3 decken. */
.karte {
    grid-column: 2 / 3;
}
```

_________________________________________________

### Musterlösung zu Beispiel 2

**a)** Richtig sind Aussage 1, 2 und 3 — **drei** Haken. Falsch ist
Aussage 4: Jeder Bereich muss ein **Rechteck** sein. Eine Fläche „um die
Ecke“ macht die gesamte `grid-template-areas`-Angabe ungültig; der Browser
verwirft sie still, die Kinder verlieren ihre Bereiche und landen an
Stellen, die niemand geplant hat. Deshalb sind Layout-Fehler in der
Vorlage immer still: Es gibt keine Fehlermeldung, nur ein anderes Bild.

**b)** `grid-template-areas` (mit `grid-area` an den Kindern) ·
`repeat(auto-fit, minmax(14rem, 1fr))` · `place-items: center` (oder
`justify-items` plus `align-items`) · `grid-column: 1 / -1` · `gap` ·
Media Query mit neuer `grid-template-areas`-Vorlage.

**c)** Die zweite Zahl ist die **Endlinie**, nicht die letzte belegte
Spalte. `2 / 3` beginnt an Linie 2 und endet an Linie 3 — das ist genau
**eine** Zelle. Richtig ist `grid-column: 2 / 4;` (Linie 2 bis Linie 4 =
Spalten 2 und 3).

---

## Beispiel 3 — Transfer: das Programm-Heft

Ein Kulturverein gestaltet sein Sommerfest-Programm. Der bisherige Entwurf
ist ein Raster mit vier Spalten und soll so aussehen:

```
┌──────────────────────────────────────────────┐
│ SOMMERFEST 2027                              │  titel: 4 Spalten
├───────────────────────────┬──────────────────┤
│ Haupttext (2 Spalten)     │  Bild            │
│                           │  (2 Zeilen hoch) │
├───────────────────────────┴──────────────────┤
│ Kontakt · Anfahrt                            │  fuss: 4 Spalten
└──────────────────────────────────────────────┘
```

Das ist das CSS des Entwicklers:

```css
.programm {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "titel titel titel"
        "text  text  bild"
        "fuss  fuss  bild";
}

.titel { grid-area: titel; }
.text  { grid-area: text;  }
.bild  { grid-area: bild;  }
.fuss  { grid-area: fuss;  }
```

**a)** Das CSS ist **gültig**, der Browser meldet keinen Fehler. Trotzdem
steht das Layout nicht wie in der Skizze. Nenne **zwei** Unterschiede zur
Skizze und erkläre, welche Zeile der Vorlage jeweils dafür
verantwortlich ist. Ergänze dann: Was wäre, wenn `bild` L-förmig „um die
Ecke“ gezeichnet wäre — und was macht der Browser dann?

**b)** Schreibe eine gültige Vorlage für das abgebildete Layout. Der Text
soll zwei Spalten breit sein, das Bild zwei Zeilen hoch und ganz rechts
stehen, `titel` und `fuss` laufen über die ganze Breite.

**c)** Unter dem Programm kommt ein Streifen mit Sponsoren-Logos. Er soll
ohne Media Query auf jedem Fenster so viele Logos nebeneinander zeigen,
wie mindestens 8rem breit sind. Schreibe die Regel — und begründe, was
`auto-fit` mit den leeren Spuren macht, wenn nur zwei Sponsoren mitmachen.

**d)** Für die Kopfzeile jeder Programmkarte (Uhrzeit links, Bühne rechts)
schwankt der Entwickler zwischen Grid und Flexbox. Nimm begründet Stellung
und nenne die Eigenschaft, die du einsetzt.

**e)** Auf dem Handy soll die Reihenfolge `titel → text → fuss → bild`
sein. Der Entwickler will das mit `order` lösen. Nimm Stellung: Was
passiert für Tastatur und Screenreader, und welche Lösung ist hier
richtig?

_________________________________________________

### Kurzlösung zu Beispiel 3

**a)** Die Vorlage beschreibt ein **drei** Spalten breites Bild, die
Spaltendefinition hat aber vier Spuren. Das ist kein Syntaxfehler — alle
drei Zeilen haben gleich viele Namen —, sondern ein inhaltlicher: `titel`
deckt nur die Spalten 1–3 (600 statt 800 px), `bild` steht in Spalte 3
(200 px breit statt 400), `fuss` deckt nur zwei Spalten, und die vierte
Spalte bleibt in allen Zeilen ohne Namen und damit leer. Deshalb gibt es
keine Fehlermeldung: Das Raster ist gültig, es passt nur nicht zur Skizze.
Wäre `bild` L-förmig gezeichnet (etwa Zeile 2 Spalte 4 und Zeile 3
Spalten 3–4), wäre die gesamte `grid-template-areas`-Angabe ungültig. Der
Browser verwirft sie dann still, die Bereiche fallen weg, und die Elemente
landen an Stellen, die niemand geplant hat.

**b)**

```css
.programm {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "titel titel titel titel"
        "text  text  bild  bild"
        "fuss  fuss  bild  bild";
    gap: 1rem;
}
```

`bild` belegt die Spalten 3 und 4 in den Zeilen 2 und 3 — ein Rechteck.
`titel` und `fuss` laufen über alle vier Spalten.

**c)**

```css
.sponsoren {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: 1rem;
}
```

`auto-fit` streicht die Spuren, die keine Inhalte haben. Mit nur zwei
Sponsoren bleiben zwei Spalten übrig, die sich den ganzen Platz teilen —
die leeren Spuren verschwinden. `auto-fill` würde stattdessen so viele
Spuren stehen lassen, wie passen (bei 800 px wären es fünf), und die Logos
schmal in den ersten beiden zeigen. Ist das unerwünscht (Logos würden zu
groß), nimmt man stattdessen `auto-fill` oder begrenzt die Breite der
Logos selbst.

**d)** Das ist eine Leiste mit zwei Elementen in einer Richtung: Flexbox
mit `display: flex; justify-content: space-between; align-items: center;`
— oder `margin-left: auto` an der Bühne, wenn die Uhrzeit links kleben
soll. Grid wäre hier überdimensioniert: Es gibt keine zweite Dimension,
die auf etwas Bezug nimmt. Die Regel aus der Lektion: Grid für Zeilen
**und** Spalten, Flexbox für eine Richtung.

**e)** `order` ändert nur die Darstellung, nicht die Dokumentreihenfolge.
Ein Tastaturmensch tabbt weiter in der HTML-Reihenfolge, ein Screenreader
liest sie so vor — er hört also `bild` vor `fuss`, obwohl es am Bildschirm
umgekehrt ist. Eine Mobile-Vorlage mit anderer Reihenfolge hat genau
dasselbe Problem: Auch sie ordnet nur das Bild um, nicht das Dokument.
Richtig ist deshalb, das HTML in die gewünschte Reihenfolge zu bringen bzw.
die Mobile-Vorlage so zu wählen, dass sie der Lese-Reihenfolge im HTML
folgt. `order` und umsortierte Vorlagen bleiben der Ausnahmefall für rein
optische Umstellungen.

---

**Abgabe:** nach Vorgabe deiner Lehrperson (Dateien, Repo-Push oder Upload).
