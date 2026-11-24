# Aufgabe KM3-05 — Flexbox

Name: _____________ &nbsp;&nbsp;&nbsp; Abgabe: _____________

**Lektüre:** CSS-Tricks, [A Complete Guide to
Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — Pflicht,
wie in der Lektion. Zum Üben: [Flexbox Froggy](https://flexboxfroggy.com/#de),
Level 1–24.

**Ziel:** Du baust eine Seite, deren Layout vollständig von Flexbox getragen
wird — ohne feste Höhen, ohne Prozentrechnung, ohne Positions-Tricks.

**Hilfsmittel:** ein leerer Ordner mit `index.html` und `style.css`,
verlinkt per `<link rel="stylesheet" href="style.css">`. Kein Framework,
kein CDN. Öffne die Seite über den Live-Server, nicht per Doppelklick.

**Regel für alle Beispiele:** `height` und `position` sind tabu. Wenn eine
Lösung ohne sie nicht geht, notiere, warum — das ist selbst ein Ergebnis.

---

## Beispiel 1 — Der Merch-Stand

Das ist die Kernübung: der Kopf der Merch-Seite einer Band. Du bekommst das
HTML, du schreibst nur das CSS.

```html
<header class="leiste">
    <span class="logo">NACHTFALTER</span>
    <nav class="links">
        <a href="#">Termine</a>
        <a href="#">Merch</a>
        <a href="#">Kontakt</a>
    </nav>
</header>

<section class="hero">
    <div class="bild">Platz für das Bandfoto</div>
    <div class="text">
        <h1>Tour 2027</h1>
        <p>Drei Termine im Frühjahr, ein neues Shirt, und der
        Vorverkauf startet am Freitag.</p>
        <a class="knopf" href="#">Tickets holen</a>
    </div>
</section>

<section class="streifen">
    <article class="karte">
        <div class="karte-kopf">
            <h2>Shirt</h2>
            <span class="badge">Neu</span>
        </div>
        <p>Schwarz, Baumwolle, Motiv vorn.</p>
        <p class="preis">29 €</p>
    </article>
    <article class="karte">
        <div class="karte-kopf">
            <h2>Platte</h2>
        </div>
        <p>180 g Vinyl, limitiert auf 500 Stück.</p>
        <p class="preis">24 €</p>
    </article>
    <article class="karte">
        <div class="karte-kopf">
            <h2>Poster</h2>
        </div>
        <p>DIN A2, Siebdruck, zwei Farben.</p>
        <p class="preis">12 €</p>
    </article>
</section>
```

**a)** **Kopfleiste.** Logo links, die drei Links rechts, alles senkrecht
mittig, 1.5rem Abstand zwischen den Elementen. Die Navigation rutscht nach
rechts — ohne `justify-content: space-between`. Notiere, welche Eigenschaft
das erledigt und warum.

**b)** **Hero.** Das Bild steht links und ist genau 14rem breit, egal wie
breit das Fenster ist. Der Text nimmt den Rest ein. Bild und Text sind
senkrecht zentriert. Das Bild bleibt quadratisch — mit `aspect-ratio: 1`
sagt man dem Browser: Höhe gleich Breite, ohne `height`.

**c)** **Produktstreifen.** Karten nebeneinander, gleiche Abstände, alle
gleich hoch. Jede Karte hat eine Wunschbreite von 14rem und wächst danach
gleichmäßig mit. Der Preis klebt unten in der Karte, auch wenn eine
Beschreibung länger ist. Das Badge „Neu“ steht rechts neben der
Überschrift. *(Tipp: Die Karte ist selbst eine Flexbox — eine Spalte.)*

**d)** **Schmal.** Unter 700 px Breite: Hero untereinander (Bild oben, Text
darunter, Bild im Format 16:9), Kopfleiste darf umbrechen. Die Karten
brauchen dafür keine eigene Regel — prüfe in den DevTools bei 400 px, dass
trotzdem eine pro Zeile steht: kein waagerechter Überlauf, kein
abgeschnittener Text.

**e)** Fülle die Tabelle aus, bevor du die Lösung liest.

| Anforderung | Deine Eigenschaft |
|---|---|
| Kinder bilden eine Leiste | |
| gleiche Abstände, nichts außen | |
| gleiche Höhe der Karten | |
| Karten wachsen gleichmäßig | |
| Preis klebt unten in der Karte | |
| Badge steht rechts in der Karte | |
| Navigation rutscht nach rechts | |
| unter 700 px untereinander | |

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

/* a) Kopfleiste */
.leiste {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 2rem;
    background: var(--tinte);
    color: #f7f5f0;
}

.logo { font-weight: 700; letter-spacing: 0.15em; }

.links {
    display: flex;
    gap: 1.25rem;
    margin-left: auto;          /* frisst den freien Platz: nach rechts */
}

.links a { color: inherit; text-decoration: none; }

/* b) Hero */
.hero {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
}

.hero .bild {
    flex: 0 0 14rem;            /* nicht wachsen, nicht schrumpfen */
    aspect-ratio: 1;
    display: flex;              /* zentriert den Platzhaltertext */
    align-items: center;
    justify-content: center;
    background: #e6dfd2;
    border: 1px dashed var(--linie);
    border-radius: 8px;
    font-size: 0.8rem;
    color: #6d6659;
    text-align: center;
    padding: 0.5rem;
}

.hero .text { flex: 1 1 18rem; }
.hero h1 { margin: 0 0 0.4rem; font-size: 2rem; }
.hero p { margin: 0 0 1rem; }

.knopf {
    display: inline-block;
    padding: 0.55rem 1.1rem;
    border-radius: 999px;
    background: var(--akzent);
    color: #fff;
    text-decoration: none;
}

/* c) Produktstreifen */
.streifen {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 2rem 3rem;
}

.karte {
    flex: 1 1 14rem;
    display: flex;
    flex-direction: column;      /* Preis darf nach unten wandern */
    gap: 0.4rem;
    padding: 1rem 1.1rem;
    background: var(--karte);
    border: 1px solid var(--linie);
    border-radius: 8px;
}

.karte-kopf {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.karte h2 { margin: 0; font-size: 1.1rem; }
.karte p { margin: 0; color: #55504a; }

.badge {
    background: #efe3fb;
    color: var(--akzent);
    border-radius: 999px;
    padding: 0.1rem 0.6rem;
    font-size: 0.75rem;
}

.karte .preis {
    margin: auto 0 0;            /* schiebt den Preis an den unteren Rand */
    font-weight: 700;
}

/* d) Schmal */
@media (max-width: 700px) {
    .leiste { flex-wrap: wrap; }
    .links { margin-left: 0; }
    .hero { flex-direction: column; align-items: stretch; }
    .hero .bild { flex: none; aspect-ratio: 16 / 9; }
    .hero .text { flex: none; }  /* sonst wirkt flex-basis als Höhe */
}
```

**e) Tabelle:** `display: flex` · `gap` · `align-items: stretch` (Standard) ·
`flex: 1 1 14rem` · Karte als `flex-direction: column` mit
`margin-top: auto` am Preis · `justify-content: space-between` im
`.karte-kopf` · `margin-left: auto` an `.links` · Media Query für
Kopfleiste (`flex-wrap: wrap`) und Hero (`flex-direction: column`).

---

## Beispiel 2 — Selbsttest im Prüfungsformat

Vier Aussagen, **0 bis 4 können richtig sein**. Kreuze alle zutreffenden an.

- [ ] `display: flex` gehört an das Elternelement; nur direkte Kinder werden
      Items.
- [ ] `justify-content` verteilt auf der Hauptachse, `align-items` richtet
      auf der Querachse aus.
- [ ] `flex: 1` bedeutet `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`.
- [ ] Mit `flex-direction: column` wird `flex-basis` zur Breite.

**a)** Kreuze an und begründe bei der Aussage, die du **nicht** angekreuzt
hast, warum sie falsch ist:

_________________________________________________

**b)** Ordne jeder Zielbeschreibung **eine** Eigenschaft zu. Mehrere
Lösungen sind möglich; eine genügt.

| Ziel | Deine Eigenschaft |
|---|---|
| freier Platz wird zwischen den Items verteilt, außen keiner | |
| alle Karten sind gleich hoch, ohne `height` | |
| alle Karten wachsen mit dem gleichen Anteil | |
| die zweite Karte soll oben kleben, während die anderen mittig stehen | |
| Abstand zwischen den Karten, aber nicht außen | |
| ein einzelnes Element rutscht an den rechten Rand | |

**c)** Diese Regel tut nicht, was der Kommentar behauptet. Erkläre den
Fehler und schreibe die Regel richtig:

```css
/* Der Text soll senkrecht mittig in der Leiste stehen. */
.leiste {
    display: flex;
    justify-content: center;
}
```

_________________________________________________

### Musterlösung zu Beispiel 2

**a)** Richtig sind Aussage 1, 2 und 3 — **drei** Haken. Falsch ist
Aussage 4: `flex-basis` liegt immer auf der **Hauptachse**. Bei
`flex-direction: column` ist die Hauptachse senkrecht, also wird
`flex-basis` zur **Höhe**, nicht zur Breite. Die Breite wäre in dieser
Richtung die Querachse und damit `width`.

**b)** `justify-content: space-between` · `align-items: stretch` (der
Standard, keine Angabe nötig) · `flex: 1` an allen Karten ·
`align-items: center` am Container **plus** `align-self: flex-start` an der
zweiten Karte · `gap` am Container · `margin-left: auto` am Element.

**c)** `justify-content` arbeitet auf der **Hauptachse**. Bei
`flex-direction: row` ist das die Waagrechte — der Text wird also
waagrecht zentriert, nicht senkrecht. Richtig ist
`align-items: center;` (Querachse). Sichtbar wird der Unterschied nur,
wenn der Container höher ist als der Text — bei einem Container, der sich
aus dem Inhalt ergibt, gibt es senkrecht nichts zu verteilen.

---

## Beispiel 3 — Transfer: der Streifen, der nicht umbricht

Ein Reiseblog zeigt vier Reisekarten. Der Entwickler wollte, dass die
Karten umbrechen, sobald der Platz nicht reicht. Das ist die Regel:

```css
.reisen {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
}

.reise {
    flex: 1 1 12rem;
    display: flex;
    flex-direction: column;
}

.reise img {
    width: 100%;
}
```

Auf einem 900 px breiten Fenster passen zwei Karten bequem nebeneinander,
die anderen beiden werden gequetscht, und eine Karte ragt über den rechten
Rand hinaus. Auf dem Handy ist der Streifen ganz aus dem Bild geschoben.

**a)** Nenne **zwei** Ursachen im CSS, die zusammen dieses Verhalten
erklären. Eine davon liegt am Container, eine an den Karten bzw. am Bild.

**b)** Schreibe die drei Regeln so um, dass vier Karten bei breitem Fenster
nebeneinander stehen, bei schmalem (unter etwa 460 px) untereinander, und
dass die Bilder mitschrumpfen statt die Karte breit zu halten.

**c)** Der Blog bekommt zusätzlich eine **Ticket-Leiste**: links das Datum,
daneben der Ort, ganz rechts der Preis und ein Button „Buchen“. Der Button
soll immer am rechten Rand stehen, auch wenn der Ortsname kurz ist. Preis
und Button stehen senkrecht mittig. Schreibe das CSS für diese Leiste.

**d)** Der Autor will die Reihenfolge mit `order` „korrigieren“, weil im
HTML erst der Preis und dann der Ort steht. Nimm begründet Stellung: Was
ist die bessere Lösung, und was passiert mit der Tastaturbedienung, wenn er
bei `order` bleibt?

_________________________________________________

### Kurzlösung zu Beispiel 3

**a)** `flex-wrap` fehlt und steht daher auf `nowrap` — der Streifen bleibt
eine Zeile, statt umzubrechen. Die Karten haben `flex: 1 1 12rem`, dürfen
also schrumpfen; weil aber die Bilder `width: 100%` haben und
`min-width: auto` gilt, schrumpfen sie nicht unter die Bildbreite — die
Karten laufen über.

**b)**

```css
.reisen {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 2rem;
}

.reise {
    flex: 1 1 12rem;
    min-width: 0;              /* erlaubt Schrumpfen unter die Inhaltsbreite */
    display: flex;
    flex-direction: column;
}

.reise img {
    width: 100%;
    height: auto;
    display: block;
}
```

**c)**

```css
.ticket {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #ddd;
}

/* Preis und Button gemeinsam nach rechts: der Automatik-Rand sitzt am
   ersten der beiden Elemente und frisst den ganzen freien Platz. */
.ticket .preis { margin-left: auto; }
```

Soll nur der **Button** am Rand stehen und der Preis beim Ort bleiben, setzt
man `margin-left: auto` stattdessen an `.buchen`. Die senkrechte Mitte
kommt in beiden Fällen von `align-items: center` — nicht von
`justify-content`.

**d)** `order` ändert nur die Darstellung. Die Reihenfolge im Dokument
bleibt, also auch die Reihenfolge beim Durchtabben und für Screenreader:
Ein Tastaturmensch landet zuerst auf dem Preis und erst danach auf dem
Ort, obwohl er es umgekehrt sieht. Richtig ist, das HTML in die gewünschte
Reihenfolge zu bringen; `order` bleibt der Ausnahmefall für rein optische
Umstellungen.

---

**Abgabe:** nach Vorgabe deiner Lehrperson (Dateien, Repo-Push oder Upload).
