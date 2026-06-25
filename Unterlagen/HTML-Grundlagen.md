# HTML – Hypertext Markup Language

> Zusammengeführt aus den Unterlagen *HTML Basics*, *HTML Introduction* und
> *Semantic HTML*. Die folgenden Abschnitte behandeln die Entstehung des Web,
> die Grundlagen von HTML, HTTP und URL, den HTML5-Standard sowie semantisches
> Markup.

## Inhalt

1. [Geschichte des Web](#geschichte-des-web)
2. [Was ist HTML?](#was-ist-html)
3. [HTTP und URL](#http-und-url)
4. [Grundgerüst und DOCTYPE](#grundgerüst-und-doctype)
5. [Tags, Elemente und Attribute](#tags-elemente-und-attribute)
6. [Text-Elemente](#text-elemente)
7. [HTML5](#html5)
8. [Semantic HTML](#semantic-html)
9. [Quellen und Referenzen](#quellen-und-referenzen)

---

## Geschichte des Web

### Pre-Internet – ARPANET (1969)

ARPANET war das erste erfolgreiche Networking-Projekt und wurde finanziert und
initiiert vom US-Verteidigungsministerium. Beteiligt waren Universitäten,
Forschungszentren, Regierungen und Firmen.

- **Erste Verbindung:** Die erste ARPANET-Verbindung entstand am 29. Oktober 1969
  zwischen der University of California, Los Angeles (UCLA) und dem Stanford
  Research Institute (SRI).
- **Protokolle:** Zunächst das Network Control Program (NCP), Anfang der 1980er
  Jahre Umstellung auf TCP/IP – die Grundlage des heutigen Internet.
- **Außerbetriebnahme:** ARPANET wurde 1990 offiziell stillgelegt.

### Tim Berners-Lee und die Geburtsstunde des Web

Ende der 1980er Jahre erkannte Tim Berners-Lee am CERN die Notwendigkeit,
Forschungsdaten effizient zu teilen. Er schlug ein dezentrales Informationssystem
mit Hypertext vor – das spätere **World Wide Web**. Er erfand die Grundbausteine:

- HTTP (Protokoll)
- HTML (Auszeichnungssprache)
- URL (Adressierung)

Zusätzlich programmierte er den ersten Browser und den ersten HTTP-Server.

### Timeline – Modernes Internet

| Jahr | Ereignis |
|------|----------|
| 1990 | Tim Berners-Lee / CERN: HTML, HTTP, URL, Server, Browser |
| 1991 | HTML Draft |
| 1994 | Tim Berners-Lee gründet das **W3C** (World Wide Web Consortium) |
| 1994 | Netscape Navigator; Håkon Lie: **CSS** |
| 1995 | HTML 2 – erster offizieller HTML-Standard |
| 1995 | Brendan Eich / Netscape: **JavaScript**; Microsoft: Internet Explorer |
| 1996 | Browser Wars: IE vs. Netscape |
| 1997 | HTML 4 |
| 2002 | Mozilla: Firefox |
| 2003 | Apple: Safari |
| 2008 | Google: Chrome |
| 2010 | Responsive Web Design (Ethan Marcotte) |
| 2014 | **HTML 5** |
| 2015 | ECMAScript 2015; Progressive Web Apps folgen |
| 2023 | ECMAScript 2023 |

---

## Was ist HTML?

- Der Quelltext wird als reiner **Nur-Text** gespeichert – betriebssystemunabhängig,
  ohne Formatierungen. Für die Erstellung genügt ein **Editor**, für die Anzeige
  ein **Webbrowser**.
- Öffentlich zugänglich wird eine Seite erst, wenn sie auf einem **Webserver** liegt.

**Zeichenkodierung:** Heute ist **UTF-8** der Standard (deckt nahezu alle Zeichen
und Sprachen der Welt ab, > 90 % aller Websites). Früher waren **ASCII** (128
Zeichen, nur Englisch) bzw. ISO-8859-1 (256 Zeichen) verbreitet – für Umlaute oder
andere Schriften unzureichend. Deklariert wird die Kodierung im Dokument über
`<meta charset="utf-8">`; die Datei selbst muss natürlich auch UTF-8-codiert
gespeichert werden.
Refs: <https://www.w3.org/International/questions/qa-html-encoding-declarations>,
<https://www.w3schools.com/html/html_charset.asp>

**Definition:** HTML (HyperText Markup Language) ist eine textbasierte
**Auszeichnungssprache** zur Strukturierung elektronischer Dokumente – Text mit
Hyperlinks. Die Entwicklung fand am CERN statt.

**Verwandtschaft der Auszeichnungssprachen:** Ausgangspunkt ist **SGML**
(Standard Generalized Markup Language, ISO-Standard seit 1986) – die „Mutter" der
späteren Markup-Sprachen. Davon leiten sich zwei Linien ab:

- **HTML** – ein festes, vordefiniertes Tag-Set zum Strukturieren von Webseiten.
- **XML** (eXtensible Markup Language) – eine strengere, erweiterbare Syntax, bei
  der man eigene Tags definiert (Datenbeschreibung, nicht Anzeige).

**XHTML** wiederum ist HTML, das nach den strengen XML-Regeln formuliert ist
(wohlgeformt, alle Tags geschlossen). **HTML5** definiert hingegen eigene
Parsing-Regeln und ist nicht mehr SGML-basiert, bietet aber weiterhin eine
XML-konforme Serialisierung an.
Refs: <https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language>,
<https://www.w3.org/People/Raggett/Drafts/xml.html>

**Versionen:** HTML 1.0, 2.0, 3.2, 4.0/4.01 → XHTML 1.0/1.1, XHTML 2.0 →
**HTML 5** (aktuell als „Living Standard", siehe [HTML5](#html5)).

**Dateien:** HTML-Dateien haben die Endung `.html` (alte Dateien `.htm`).
Verwandte Formate: `.css`, `.xml`, `.shtml`.

### Entwicklungsumgebungen

Unser primäres Arbeitswerkzeug im Unterricht ist **Visual Studio Code (VS Code)**
(<https://code.visualstudio.com/>) – ein kostenloser, quelloffener Editor mit
nützlichen Erweiterungen wie **Live Server** (lokaler Dev-Server, z. B. Port 5500)
und dem **W3C Web Validator**. Weitere Editoren: JetBrains WebStorm
(<https://www.jetbrains.com/>), Adobe Dreamweaver, Notepad++, Brackets
(<http://brackets.io/>). Online-Editoren: CodePen, JSFiddle, StackBlitz.

---

## HTTP und URL

### HTTP – Hypertext Transfer Protocol

Protokoll zur Übertragung von Hypertext-Dokumenten (Webseiten) aus dem World
Wide Web in einen Webbrowser.

Ausführlich behandelt – Verben/Methoden, Statuscodes, Header, Idempotenz – in der
→ [HTTP-Folie](./HTTP-Folie.md). Quelle:
<https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol>

### URL – Uniform Resource Locator

Eine URL ist die Webadresse einer speziellen Ressource im Internet (Webseiten,
Mediadaten, Dokumente …).

```
https://www.orf.at/stories/123/?query=beispiel
\_____/  \_________/ \________/ \_____________/
 Scheme     Host        Path      Query-String
```

- **Scheme / Protocol** (`https`): Das Protokoll für die Kommunikation.
- **Host** (`www.orf.at`): Server, von dem die Ressource abgerufen wird.
- **Path** (`/stories/123/`): Spezifischer Ort der Ressource auf dem Server.
- **Query-String** (`?query=beispiel`): Zusätzliche Parameter für die Anfrage.

### Exkurs: Host vs. Hostname

Der **Host** kombiniert Domain (und optional Subdomain/Hostname) mit der
Portnummer. Der **Hostname** ist der Teil der URL, der den spezifischen Server
identifiziert – also ein *Teil* des Hosts.

```
https://www.orf.at/stories/123
Host:      www.orf.at:443   (Port optional)
Hostname:  www
```

### Fully Qualified Domain Name (FQDN)

Der FQDN ist die vollständige Referenz zu einem einzelnen Host: Hostname +
Domain + Top-Level-Domain (TLD).

```
https://www.orf.at/stories/123
Hostname:  www
Domain:    orf
TLD:       at
FQDN:      www.orf.at
```

---

## Grundgerüst und DOCTYPE

Grundgerüst einer einfachen HTML5-Seite mit Kopdaten:

```html
<!DOCTYPE html>          <!-- HTML Version 5 -->
<html>                   <!-- Wurzelelement -->
  <head>                 <!-- Kopdaten -->
    <meta charset="utf-8">  <!-- Zeichenkodierung -->
    <title>Titel</title>     <!-- Titel der Webseite -->
  </head>
  <body>
    <!-- Inhalt: Text, Überschriften, Verweise, Grafiken … -->
  </body>
</html>
```

**Verschiedene DOCTYPES** (nur als Information):

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

In HTML5 genügt die kurze Form `<!DOCTYPE html>`.

---

## Tags, Elemente und Attribute

### HTML-Tags

- Ein HTML-Tag ist ein einzelnes Tag, notiert in spitzen Klammern `<...>`.
- HTML basiert auf dem Prinzip **Öffnen und Schließen**: Fast alle Elemente
  bestehen aus einleitendem und schließendem Tag, z. B. `<p>Erster Absatz</p>`.
- **Alle Tags klein schreiben** – wichtig für XHTML und valide Webseiten.
- Manche Elemente schließen sich selbst (kein Inhalt), z. B. `<br>`, `<meta …>`,
  `<img …>`.

### Syntax

```html
<htmltag>Text, Text, Text</htmltag>
```

Öffnendes und schließendes Tag sind gleich, nur dass das schließende ein `/`
vor dem Namen trägt: `</htmltag>`.

### Verbotene Zeichen und Symbole

Spitze Klammern dürfen **nicht** direkt als Text verwendet werden, da der Browser
sie als Tags liest:

```
Verboten:  10 > 8   |   Siehe hier -> und dort <-   |   Das finde ich >>SUPER>>
```

Um spitze Klammern trotzdem anzuzeigen, werden sie als **Entities** geschrieben:
`<` als `&lt;`, `>` als `&gt;` (siehe [Sonderzeichen](#sonderzeichen-escape-characters)
unten). Beispiel: `10 &gt; 8` ergibt die Anzeige „10 > 8".
Achtung auch bei Anführungszeichen und Apostrophen.

### HTML-Elemente

Ein Element besteht aus:

- öffnendem Tag `<elementName>`
- Inhalt (Text oder weiteres Element)
- schließendem Tag `</elementName>`

Selbst schließendes Element (kein Inhalt, ggf. Attribute):

```html
<img src="bild.jpg" alt="Ein Bild">
```

### Block-Level vs. Inline

| Art | Beispiele | Verhalten |
|-----|-----------|-----------|
| Block-Level | `<div>`, `<table>`, `<p>` | erzeugen Zeilenumbruch |
| Inline | `<span>`, `<a>`, `<img>` | kein Zeilenumbruch |

Grundsätzlich: Ein Block-Level-Element darf Block- und Inline-Elemente
enthalten, ein Inline-Element nur weitere Inline-Elemente. „Umtypisieren" ist
über das `display`-Attribut möglich.

### Attribute

Name, Gleichheitszeichen, Wert in Anführungszeichen:

```html
<img src="spengergasse.jpg">
```

- Bei mehreren Attributen: Leerzeichen dazwischen.
- Bestimmte Elemente erlauben/verlangen bestimmte Attribute
  (z. B. `href` in `<a>`, `src` in `<img>`).
- Manchmal wird kein Wert benötigt, z. B. `<input disabled>`.

---

## Text-Elemente

Text wird in HTML zwischen den Tags im `body` notiert. Zeilenumbrüche im
Quelltext werden **nicht** angezeigt.

### Zeilenumbruch – `<br>`

```html
<p>Willkommen!<br>
Das ist meine erste Seite.</p>
```

`<br>` ist ein leeres Element, benötigt also kein schließendes `</br>`.

### Absatz – `<p>` (Block-Element)

```html
<p>Willkommen! Das ist mein erster Absatz.</p>
<p>Willkommen! Das ist mein zweiter Absatz.</p>
```

### Überschriften – `<h1>` bis `<h6>` (Block-Element)

```html
<h1>Überschriften-Ebene 1</h1>
<h2>Überschriften-Ebene 2</h2>
<h3>Überschriften-Ebene 3</h3>
<h4>Überschriften-Ebene 4</h4>
<h5>Überschriften-Ebene 5</h5>
<h6>Überschriften-Ebene 6</h6>
```

Ein Überschriften-Tag erzeugt automatisch einen Zeilenumbruch.

### Trennlinie – `<hr>`

```html
<h1>Willkommen!</h1>
<hr>
<p>Das ist mein erster Absatz</p>
```

`<hr />` ist die XHTML-konforme Schreibweise.

### Kommentare

```html
<!-- Kommentar: Der Text unten ist eine Überschrift -->
<h1>Willkommen!</h1>
```

Kommentare werden nicht angezeigt.

### Text-Formatierungen (Inline-Elemente)

Diese Tags sind **Inline-Elemente** – sie erzeugen keinen Zeilenumbruch und wirken
nur auf einzelne Textteile. Für Block-Layout und das eigentliche Aussehen ist
**CSS** zuständig; die Tags beschreiben lediglich die Bedeutung (z. B. „wichtig").

| Wirkung | Tag |
|---------|-----|
| Fett (bold) | `<b>Dieser Text ist fett.</b>` |
| Kursiv (italic) | `<i>Dieser Text ist kursiv.</i>` |
| Unterstrichen (nicht einsetzen) | `<u>…</u>` |
| Durchgestrichen | `<s>Dieser Text ist durchgestrichen.</s>` |
| Klein | `<small>Dieser Text ist klein</small>` |
| Hochgestellt | `Text ist <sup>hochgestellt</sup>` |
| Tiefgestellt | `Text ist <sub>tiefgestellt</sub>` |

### Farbe

Mit dem Attribut `color` wird eine Farbe zugewiesen. Farben werden im
**RGB-Schema** hexadezimal angegeben; für Grundfarben gehen auch Namen.

```html
<body style="bgcolor:#FF0000">
<body style="bgcolor:red">
```

### Division – `<div>` (Block-Element)

```html
<div style="color:#0000FF">
  <p>Dieser Text ist blau.</p>
  <p>Und auch dieser gesamte Absatz ist blau.</p>
</div>
```

### Leerzeichen (whitespaces)

Folgende Leerzeichen werden für die Darstellung ignoriert: aufeinander folgende
Leerzeichen, Leerzeichen am Anfang und am Ende des Elementtexts.

- Explizites Leerzeichen: `&nbsp;`
- Expliziter Zeilenumbruch: `<br>` bzw. `<p>`, `<div>` …

### Sonderzeichen (escape characters)

Syntax: `&` + Umschreibung des Zeichens + `;`. Jedes Zeichen ist prinzipiell
über seinen Unicode (`&#....`) kodierbar (<https://www.w3schools.com/charsets/>).

| Zeichen | Entity | Zeichen | Entity |
|---------|--------|---------|--------|
| `"` | `&quot;` | ä / Ä | `&auml;` / `&Auml;` |
| `&` | `&amp;` | ö / Ö | `&ouml;` / `&Ouml;` |
| `<` | `&lt;` | ü / Ü | `&uuml;` / `&Uuml;` |
| `>` | `&gt;` | ß | `&szlig;` |
| `=` | `&#61;` | | |

> Mit dem Charset `utf-8` ist das Umschreiben der Umlaute **nicht mehr
> notwendig**.

---

## HTML5

### Verantwortliche Gremien

**W3C – World Wide Web Consortium** (<https://www.w3.org/>)

1994 von Tim Berners-Lee gegründet. Eine internationale Gemeinschaft aus
Mitgliedsorganisationen, Vollzeit-Stab und der Öffentlichkeit, die gemeinsam
Webstandards entwickelt (HTML, CSS, XML u. a.). Spezifikationen durchlaufen
verschiedene Stadien, bevor sie als Empfehlung veröffentlicht werden.

**WHATWG – Web Hypertext Application Technology Working Group** (<https://whatwg.org/>)

2004 von Mitarbeitern von Apple, Mozilla und Opera gegründet – als Reaktion
darauf, dass das W3C Webtechnologien für Webanwendungen nicht ausreichend
unterstützte. Eine offene Gemeinschaft, die sich vor allem auf **HTML** und
verwandte Technologien konzentriert.

### HTML5 – ein „Living Standard"

Die HTML-Spezifikation der WHATWG ist ein **Living Standard**: Sie besitzt **keine
Versionsnummern** mehr, sondern wird **kontinuierlich** weiterentwickelt (seit
2011), um aktuelle Technologien und Best Practices widerzuspiegeln.

**Standardisierungsprozess:** Die Entwicklung läuft **öffentlich und transparent**
auf GitHub im Repository `whatwg/html` (<https://github.com/whatwg/html>) über
Pull Requests ab. Angetrieben wird sie von den großen Browser-Herstellern
(Apple, Mozilla, Google) gemeinsam mit der Community. Die **WHATWG** betreibt den
Living Standard; das **W3C** arbeitet über ein *Memorandum of Understanding* mit
und gibt gefrorene Schnappschüsse als offizielle Empfehlungen (Recommendations)
heraus. Abgestimmt wird auf Mailinglisten, in GitHub-Issues und auf Konferenzen –
insbesondere der jährlichen **TPAC** (Technical Plenary / Advisory Committee),
der gemeinsamen W3C/WHATWG-Konferenz.
Refs: <https://github.com/whatwg/html/blob/main/FAQ.md>,
<https://spec.whatwg.org/>,
<https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model>

Wichtige Punkte der Spezifikation:

- HTML-Tags
- DOM (Document Object Model)
- APIs (Schnittstellen)
- Security Policies

<https://html.spec.whatwg.org/multipage/>

### HTML5-Tags im Überblick

HTML-Tags sind die Bausteine eines HTML-Dokuments; sie sagen dem Browser, wie er
den Inhalt anzeigen soll.

**Dokument-Metadaten:** `<html>`, `<head>`, `<body>`, `<title>`, `<link>`,
`<meta>`, `<style>`

**Struktur und Sektionierung:** `<header>`, `<footer>`, `<main>`, `<nav>`,
`<section>`, `<article>`, `<aside>`

**Gruppierungs-Elemente:** `<div>`, `<p>`, `<hr>`, `<pre>`, `<blockquote>`,
`<ol>`, `<ul>`, `<li>`

**Text-Semantik:** `<a>`, `<em>`, `<strong>`, `<small>`, `<cite>`, `<abbr>`,
`<time>`, `<code>`, `<address>`

**Formulare:** `<form>`, `<input>`, `<textarea>`, `<button>`, `<select>`,
`<option>`, `<label>`, `<fieldset>`, `<legend>`

**Eingebettete Inhalte:** `<img>`, `<video>`, `<audio>`, `<iframe>`, `<embed>`,
`<object>`

**Tabellen:** `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<td>`, `<th>`

**Scripting:** `<script>`, `<noscript>`, `<canvas>`

### „Hello World"

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click me</button>
  </body>
</html>
```

Jedes HTML-Element erzeugt eine Box („Kastln"). Ein Sichtbarmachen aller
Umrandungen hilft beim Verständnis des Layouts.

### DOM (Document Object Model)

Das DOM ist eine Schnittstelle, die Webseiten als **Baumstruktur aus Objekten**
repräsentiert – jedes Objekt steht für einen Teil der Seite. Über JavaScript
lassen sich diese Objekte manipulieren.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click me</button>
    <script>
      // Document Object Model (DOM) API
      const button = document.querySelector('button');
      button.addEventListener('click', function () {
        console.log('Button was clicked');
      });
    </script>
  </body>
</html>
```

### HTML5-APIs

HTML5-APIs bieten Schnittstellen für fortschrittliche Funktionen und
interaktive Inhalte (Drag-and-Drop, Offline-Anwendungen, Lokalisierung,
Multimedia). <https://developer.mozilla.org/en-US/docs/Web/API>

Auswahl: DOM API, Geolocation API, Web Storage API, Fetch API, Canvas API,
Web Audio API, WebRTC API, Media Capture and Streams API, WebSockets API,
Web Animations API, File API, Notification API, Payment Request API, IndexedDB
API, History API, Drag and Drop API.

**Beispiel – Media Capture API** (Kamera öffnen und ins `<video>` streamen):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Camera</title>
  </head>
  <body>
    <video autoplay playsinline></video>
    <script>
      const video = document.querySelector('video');
      // Media Capture and Streams API
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        });
    </script>
  </body>
</html>
```

### Security Policies

Sicherheitsrichtlinien erhöhen die Sicherheit beim Browsen, indem sie schädliche
Aktionen einschränken.

**Same-Origin-Policy (SOP):** Ein Browser verhindert, dass eine Webseite auf
Daten einer anderen Webseite zugreift.
<https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy>

| Request | Origin | Ergebnis |
|---------|--------|----------|
| `www.orf.at → www.orf.at` | Same Origin | erlaubt |
| `www.orf.at → www.google.com` | Cross Origin | Browser blockiert die Antwort |

**Content Security Policy (CSP):** Eine zusätzliche Sicherheitsebene, über die
Webentwickler bestimmte Richtlinien durchsetzen.
<https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP>

### W3C-Validator

Der W3C-Validator ermöglicht es, HTML- und CSS-Markup auf Konformität mit den
Standards zu überprüfen. Neben der Web-Version unter <https://validator.w3.org/>
gibt es das **VS-Code-Plugin „W3C Web Validator"**, das das Markup direkt im
Editor validiert – unser Werkzeug im Unterricht.

Beispiel für nicht valides HTML5:

```html
<!-- Button ohne JavaScript; nicht valides HTML5 :-( -->
<a href="https://www.orf.at">
  <button>ORF</button>
</a>
```

### Navigation: Links vs. Buttons

```html
<!-- Anchor mit Text-Content -->
<a href="https://www.orf.at">ORF</a>

<!-- Anchor mit HTML-Content -->
<a href="https://www.orf.at"><div>ORF</div></a>

<!-- Button mit JavaScript onclick-Handler -->
<button onclick="location.href='https://www.orf.at'" type="button">ORF</button>

<!-- Button ohne JavaScript -->
<form>
  <button formaction="https://www.orf.at">ORF</button>
</form>
```

---

## Semantic HTML

### Was ist semantisches HTML?

Semantisches HTML verwendet Tags, die die **Bedeutung** und den Zweck des
eingeschlossenen Inhalts klar beschreiben – für Entwickler ebenso wie für
Suchmaschinen. Im Gegensatz dazu sind nicht-semantische Tags wie `<div>` und
`<span>` generisch und dienen primär der Strukturierung und dem Styling, ohne
Aussage über den Inhalt zu treffen.

Vergleich:

```html
<!-- Nicht-semantisch: verrät nichts über die Abschnitte -->
<div class="kopf">…</div>
<div class="nav">…</div>
<div class="inhalt">…</div>

<!-- Semantisch: beschreibt jeden Bereich -->
<header>…</header>
<nav>…</nav>
<main>…</main>
```

### Warum ist semantisches HTML wichtig?

- **Barrierefreiheit (Accessibility):** Screenreader und andere Hilfsmittel
  navigieren semantische Layouts präziser und können den Inhalt korrekt
  vorlesen.
- **SEO:** Suchmaschinen-Crawler (z. B. Googlebot) erkennen die relevanten
  Teile des Inhalts, was besseres Indexing und potenziell bessere Rankings
  ermöglicht.
- **Rich Results:** Semantische Elemente unterstützen Schema-Markup und erhöhen
  die Chance auf erweiterte Suchergebnisse (Bewertungen, Preise, Termine).
- **Zukunftssicher:** Semantisches HTML folgt Webstandards und bleibt
  kompatibel mit künftigen Technologien.
- **Klare Kommunikation:** Entwickler, Designer und SEOs verstehen sofort den
  Zweck jedes Abschnitts – Wartung und Updates werden einfacher.

### Semantische Tags nach Kategorie

**Struktur und Layout:**

| Tag | Bedeutung |
|-----|-----------|
| `<header>` | Kopfbereich einer Seite oder eines Abschnitts – Titel, Logo, Navigation |
| `<nav>` | Hauptnavigation. Nur für wesentliche Navigationsbereiche verwenden |
| `<main>` | Hauptinhalt der Seite. **Nur einmal pro Seite** verwenden |
| `<section>` | Gruppe thematisch verwandter Inhalte (z. B. „Features", „Preise") |
| `<article>` | Eigenständiger, in sich verständlicher Inhalt (Blogpost, News) |
| `<aside>` | Begleitender Inhalt, oft als Sidebar (Werbung, Hinweise, verwandte Links) |
| `<footer>` | Fußbereich – Autor, Copyright, weiterführende Links |

**Text:**

| Tag | Bedeutung |
|-----|-----------|
| `<h1>`–`<h6>` | Überschriften-Hierarchie |
| `<p>` | Absatz (Block-Text) |
| `<a>` | Hyperlink mit aussagekräftigem Anchor-Text |
| `<ol>` / `<ul>` | Geordnete (nummerierte) / ungeordnete (ungeordnete) Liste |
| `<blockquote>` / `<q>` | Längere / kurze Inline-Zitate |
| `<em>` | Hervorhebung (wichtig, kursiv) – nicht zum Styling verwenden |
| `<strong>` | Starke Hervorhebung (kritisch, fett) |

**Sonstige:**

| Tag | Bedeutung |
|-----|-----------|
| `<figure>` / `<figcaption>` | Gruppe von Medieninhalten (Bild, Diagramm) mit Bildunterschrift |
| `<mark>` | Hervorgehobener Text (z. B. Suchtreffer), meist gelber Hintergrund |
| `<pre>` | Vorformatierter Text (Code-Snippets, Leerzeichen/Umbrüche bleiben erhalten) |

### Best Practices

- **Das richtige Element für den Zweck** wählen – `<header>` für
  Einleitendes, `<article>` für Eigenständiges, `<nav>` für Navigation.
- **Semantische Tags nicht als Styling missbrauchen:** Kein `<h1>` nur, um
  Schrift groß zu machen; kein `<strong>`/`<em>` nur für fett/kursiv. Für das
  Aussehen ist **CSS** zuständig.
- **Korrekt schachteln:** Überschriften gehören in `<section>`/`<article>`,
  `<footer>` in seinen Eltern-Kontext. `<main>` nicht in `<header>`,
  `<footer>`, `<article>` oder `<aside>` schachteln.

### „Hello World" – semantisch

```html
<header>
  <h1>Rezept</h1>
</header>

<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Über mich</a></li>
  </ul>
</nav>

<main>
  <article>
    <h2>Kochrezept</h2>
    <p>…</p>
  </article>
  <aside>
    <p>Verwandte Rezepte</p>
  </aside>
</main>

<footer>
  <p>Copyright © 2023 Chefkoch</p>
</footer>
```

> **Vertiefung:** Ausführlicher Leitfaden zu Semantic HTML5 bei Semrush –
> <https://www.semrush.com/blog/semantic-html5-guide/>

---

## Quellen und Referenzen

**Dokumentation:**

- MDN Web Docs – <https://developer.mozilla.org/de/>
- Can I use … – <https://caniuse.com/>
- W3Schools – <https://www.w3schools.com/html/>
- SELFHTML – <http://wiki.selfhtml.org/>
- WHATWG HTML Living Standard – <https://html.spec.whatwg.org/multipage/>
- WHATWG FAQ zum Standardisierungsprozess – <https://github.com/whatwg/html/blob/main/FAQ.md>
- MDN: The web standards model – <https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model>
- W3C – <https://www.w3.org/>
- W3C Validator – <https://validator.w3.org/>

**Zeichenkodierung & Sprachfamilie:**

- UTF-8/Charset deklarieren – <https://www.w3.org/International/questions/qa-html-encoding-declarations>
- HTML Charset (W3Schools) – <https://www.w3schools.com/html/html_charset.asp>
- SGML (Wikipedia) – <https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language>
- XML und HTML/SGML (W3C) – <https://www.w3.org/People/Raggett/Drafts/xml.html>

**Editoren:** Visual Studio Code (VS Code) mit Live-Server- und W3C-Web-Validator-
Erweiterung (unser Arbeitswerkzeug); IntelliJ, jeder Texteditor (offline);
CodePen, JSFiddle, StackBlitz (online).

**CSS-Lernspiele:**

- Flexbox Froggy – <https://flexboxfroggy.com/#de>
- CSS Grid Garden – <https://cssgridgarden.com/#de>
- CSS-Tricks – <https://css-tricks.com/>
