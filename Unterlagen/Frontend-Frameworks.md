# Frontend-Frameworks – Ein Überblick

Dieses Dokument gibt eine Übersicht über die wichtigsten Werkzeuge der
modernen Webentwicklung: **React, Vue.js, Angular, Svelte/SvelteKit, Astro**, die
**HTML-first-Alternativen htmx & Alpine.js** sowie das Build-Tool **Vite**. Für jedes Werkzeug werden die zugrundeliegende Technik
(Templating, Server-Side Rendering), die Verbreitung, die **Lernkurve** und die
Bedeutung für den europäischen bzw. österreichischen Arbeitsmarkt beleuchtet.

> Zielgruppe: Schülerinnen und Schüler der 3. Klassen (WMC), die ein Gefühl für
> die Werkzeuge bekommen wollen, die in Ausbildung und Beruf auf sie zukommen.

---

## 1. Wozu ein Frontend-Framework?

Eine „klassische" Webseite besteht aus statischem HTML, etwas CSS und wenigen
JavaScript-Zeilen für Effekte. Sobald eine Anwendung aber **interaktiv** wird
(ein Chat, ein Shop-Warenkorb, ein Dashboard), muss der Browser ständig den
HTML-Baum (das DOM) anpassen, wenn sich Daten ändern. Mit reiner
DOM-Manipulation (`document.createElement`, Event-Listener von Hand) wird der
Code schnell unübersichtlich und fehleranfällig.

Ein **Frontend-Framework** (oder eine **Library**) löst dieses Problem, indem es
eine **deklarative** Schreibweise erlaubt:

- Man beschreibt, *wie* die Oberfläche für einen bestimmten Zustand (State)
  aussehen soll.
- Das Framework übernimmt das *wie* der DOM-Aktualisierung automatisch, sobald
  sich der Zustand ändert (Reaktivität).

Kurz gesagt: **Man denkt in Daten, nicht in DOM-Knoten.**

### Wichtige Begriffe vorab

| Begriff | Bedeutung |
|---|---|
| **DOM** | Document Object Model – der HTML-Baum, den der Browser im Speicher hält. |
| **State** | Der aktuelle Zustand der Anwendung (z. B. Inhalte eines Formulars). |
| **Komponente** | Ein in sich geschlossener, wiederverwendbarer UI-Baustein aus Template, Logik und ggf. Styling (z. B. ein Button oder ein Formularfeld). |
| **Reaktivität** | Eigenschaft, dass die UI sich automatisch ändert, wenn sich der State ändert. |
| **CSR** | Client-Side Rendering – der Browser baut die Seite per JavaScript auf. |
| **SSR** | Server-Side Rendering – der Server schickt fertiges HTML. |
| **SSG** | Static Site Generation – HTML wird einmal beim Bauen erzeugt. |
| **Hydration** | Das „Beleben" von servergerendertem HTML mit interaktivem JavaScript. |
| **Virtual DOM** | Ein Abbild des echten DOM im Speicher; erlaubt effizientes Vergleichen (Diffing). |
| **Meta-Framework** | Ein Framework *auf* einem Framework (z. B. Next.js auf React), das Routing + SSR liefert. |
| **Build-Tool** | Werkzeug, das Quellcode (TSX, SCSS, …) in optimierte Browser-Dateien umwandelt. |

### Framework, Library und Build-Tool – nicht dasselbe!

Diese drei Begriffe werden oft verwechselt, sind aber wichtig:

- **Library (Bibliothek)** – z. B. *React*. Liefert Bausteine, du entscheidest,
  wie du sie zusammensteckst (Routing, State-Management musst du selbst wählen).
- **Framework** – z. B. *Angular*. Ist „meinungsstark" (opinionated): Es
  schreibt vor, wie Routing, Formulare, HTTP usw. zu funktionieren haben.
  „Batterien inklusive."
- **Build-Tool** – z. B. *Vite*. Ist **kein** Framework, sondern der Compilers
  und Server im Hintergrund. Es *verwendet* React/Vue/Svelte, nicht umgekehrt.

---

## 2. React

> <https://react.dev/> · entwickelt von **Meta** (Facebook), seit 2013 open source.

### Technik

React ist streng genommen eine **Library**, kein vollständiges Framework. Ihre
Kernideen:

- **TSX** – die Dateiendung `.tsx` für **JSX in TypeScript**: eine
  Syntaxerweiterung, die HTML-Ähnliches direkt in TS-Code erlaubt. Template und
  Logik leben in einer Datei. (Die reine-JS-Variante ohne Typen heißt *JSX* /
  `.jsx`.)
- **Komponenten** – wiederverwendbare Funktionen, die UI zurückgeben.
- **Hooks** – Funktionen wie `useState` oder `useEffect`, über die eine
  Komponente Zustand und Seiteneffekte verwaltet.
- **Virtual DOM** – React hält ein Abbild des DOM im Speicher und vergleicht bei
  Änderungen alt vs. neu, um minimale echte DOM-Updates durchzuführen.

Seit **React 19** gibt es **React Server Components (RSC)**: Komponenten, die
ausschließlich am Server laufen und kein JavaScript zum Client schicken. Das
reduziert die ausgelieferte Datenmenge erheblich.

Für **SSR/SSG** verwendet man React praktisch immer zusammen mit dem
Meta-Framework **Next.js** (<https://nextjs.org/>). Next.js rendert am Server
HTML und „hydriert" es danach im Browser, sodass SEO und schnelle erste
Bildschirmanzeige (First Contentful Paint) möglich sind.

### Mini-Beispiel: Ein Zähler

```tsx
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Klicks: {count}
        </button>
    );
}
```

### Verbreitung

React ist der unangefochtene Marktführer. Laut **State of JS 2024** nutzen es
ca. **82 %** der Befragten, die **Stack Overflow Developer Survey 2024** kommt
auf ~39,5 % aller Entwickler. Das Ökosystem (Next.js, React Native für Mobile,
unzählige Bibliotheken) ist riesig.

### Lernkurve: **mittel**

TSX und das Komponenten-Denken sind schnell verstanden. Die Kurve steigt aber
durch die **Wahllast im Ökosystem**: Welches Routing? Welches State-Management
(Redux, Zustand, Context)? Wie hängen Server und Client Components zusammen?
Hooks erfordern zudem ein Verständnis von Closures und Abhängigkeitsarrays.

---

## 3. Vue.js

> <https://vuejs.org/> · entwickelt von **Evan You** (ehemals Google), seit 2014.

### Technik

Vue positioniert sich als „das progressive Framework" – man kann es für eine
kleine Komponente einsetzen oder eine komplette SPA damit bauen. Kernmerkmale:

- **Single-File Components (SFC, `.vue`)** – Template, Logik und Styling
  einer Komponenten in **einer** Datei (drei klar getrennte Blöcke):
  `<template>`, `<script setup>`, `<style>`.
- **Composition API** (seit Vue 3) – Logik wird in Funktionen (`setup`)
  organisiert, die man gut wiederverwenden kann.
- **Virtual DOM** wie React, aber mit kompilierten Optimierungen.
- **TypeScript** wird nativ unterstützt, ist aber nicht verpflichtend.

Das Meta-Framework heißt **Nuxt 3** (<https://nuxt.com/>). Es liefert
dateibasiertes Routing, SSR/SSG und serverseitige API-Routen – das
React-Äquivalent zu Next.js.

### Mini-Beispiel: Ein Zähler

```vue
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
    <button @click="count++">
        Klicks: {{ count }}
    </button>
</template>
```

### Verbreitung

Vue erreicht laut State of JS ca. **50 %** Nutzung und genießt hohe
Zufriedenheit. Besonders stark vertreten im asiatischen Raum, aber auch in
Europa eine solide Wahl. Große Nutzer sind z. B. GitLab und Adobe.

### Lernkurve: **flach**

Vue gilt als das Framework mit der **freundlichsten Lernkurve**: Wer HTML, CSS
und etwas JavaScript kann, versteht eine `.vue`-Datei fast sofort. Template und
Logik sind sauber getrennt, die Standardentscheidungen sind sinnvoll – wenig
„Wahllast" wie bei React.

---

## 4. Angular

> <https://angular.dev/> · entwickelt von **Google**, seit 2016 (Angular 2+).

### Technik

Angular ist das **kompletteste und meinungsstärkste** Framework im Vergleich.
„Batterien inklusive" – Routing, Formulare, HTTP-Client, i18n sind
mitgeliefert. Merkmale:

- **TypeScript-first** – Angular wird *ausschließlich* in TypeScript
  geschrieben. Typen sind verpflichtend, nicht optional.
- **HTML-Templates** mit eigener Angular-Syntax (`*ngIf`, `[(ngModel)]`,
  `(click)`). Template und Klasse sind getrennt.
- **Dependency Injection (DI)** – ein Architekturmuster, bei dem Komponenten
  ihre Abhängigkeiten „gespritzt" bekommen. Macht Code testbar und modular.
- **RxJS** – bisheriger Standard für Reaktivität („Observables", Datenströme).
  Sehr mächtig, aber **schwer zu lernen**.
- **Signals** (neu, ab Angular 17/19) – eine einfachere, feingranulare Form der
  Reaktivität, die RxJS schrittweise ergänzt/ablöstet.

Für SSR existiert **Angular Universal** (in neueren Versionen Teil der
Angular-CLI).

### Mini-Beispiel: Ein Zähler (mit Signals)

```ts
import { Component, signal } from "@angular/core";

@Component({
    selector: "app-counter",
    template: `
        <button (click)="increment()">
            Klicks: {{ count() }}
        </button>
    `,
})
export class CounterComponent {
    count = signal(0);

    increment() {
        this.count.update((n) => n + 1);
    }
}
```

### Verbreitung

Angular erreicht in der State of JS ca. **50 %** Nutzung, aber nur rund
**23 %** positive Resonanz – deutlich hinter React und Vue. Die
Verbreitung auf Webseiten ist geringer (W3Techs: ca. 6 % der Seiten), dafür
wird Angular massiv in **internen Unternehmensanwendungen** eingesetzt, die in
Statistiken über öffentliche Seiten nicht auftauchen.

### Lernkurve: **sehr steil**

Angular hat die steilste Lernkurve aller hier verglichenen Frameworks. Man muss
gleichzeitig **TypeScript, Dependency Injection, RxJS** und seit kurzem
zusätzlich **Signals** lernen – letztere stehen teils neben RxJS, was Einsteiger
verwirrt („nehme ich jetzt RxJS oder Signals?"). Dieser Aufwand zahlt sich aber
in großen Teams aus: durch die strikten Vorgaben arbeiten viele Entwickler
konsistent am gleichen Code.

---

## 5. Svelte und SvelteKit

> <https://svelte.dev/> · entwickelt von **Rich Harris** (UK, ehemals NYT/GitHub).

### Technik

Svelte geht einen grundsätzlich anderen Weg als React, Vue oder Angular: Es ist
ein **Compiler**. Statt zur Laufzeit im Browser einen Virtual DOM abzugleichen,
wird die Komponente beim **Build** in reines, optimiertes JavaScript
„kompiliert". Das führt zu besonders kleinen Bundles und schnellem Start.

- **Kein Virtual DOM** – Svelte erzeugt direkt den Code, der die echten
  DOM-Knoten aktualisiert.
- **Svelte 5 Runes** – die neue Reaktivitäts-Syntax: `$state()`,
  `$derived()`, `$effect()`. Sie ersetzen die alte `$:`-Syntax.
- **Sehr knappe, leserliche Templates** – wenig „Framework-Overhead".

**SvelteKit** (<https://kit.svelte.dev/>) ist das dazugehörige Meta-Framework:
dateibasiertes Routing, SSR/SSG/SPA nach Konfiguration, API-Routen und
Build-Optimierung – das Gegenstück zu Next.js bzw. Nuxt.

### Mini-Beispiel: Ein Zähler (Svelte 5 Runes)

```svelte
<script>
    let count = $state(0);
</script>

<button onclick={() => count++}>
    Klicks: {count}
</button>
```

### Verbreitung

Svelte hat einen **kleineren Marktanteil**, wächst aber stetig und belegt in der
State of JS **seit Jahren Spitzenplätze bei Zufriedenheit und Interesse**.
Bekannte Nutzer: Spotify, The New York Times. Schöpfer Rich Harris ist Brite –
Svelte hat eine starke europäische Community.

### Lernkurve: **am flachsten**

Svelte gilt als das **einfachste** Framework zum Einstieg. Die Templates lesen
sich fast wie normales HTML mit etwas JavaScript. Eine reaktive Variable ist ein
Einzeiler. Wer die Grundlagen beherrscht, ist in wenigen Stunden produktiv.

---

## 6. Astro

> <https://astro.build/> · Open-Source-Projekt (Sponsoren u. a. Google, Microsoft), seit 2021.

### Technik

Astro geht einen anderen Weg als React, Vue, Angular oder Svelte: Es ist ein
**Site-Framework für inhaltsgetriebene Webseiten** (Blogs, Marketing-Seiten,
Dokumentationen, Portfolios) und hat zwei markante Spezialitäten:

- **Insel-Architektur (Islands)** – Astro schickt standardmäßig **0 Byte
  JavaScript** an den Browser. Die Seite wird zu statischem HTML gerendert; nur
  die wirklich interaktiven Bausteine (z. B. ein Karussell, eine Suchbox) werden
  als kleine „Inseln" gezielt mit JS „hydriert". Das macht Astro-Seiten extrem
  schnell.
- **UI-agnostisch („Bring Your Own Framework")** – innerhalb **desselben**
  Projekts lassen sich Komponenten aus **React, Vue, Svelte, Solid** u. a.
  mischen. Man wählt pro Komponente das passende Werkzeug.
- **`.astro`-Dateien** – HTML-ähnliches Template mit einem `---`-Codefence für
  serverseitiges JavaScript ganz oben.
- **SSG als Standard**, SSR pro Route zuschaltbar. Astro 5 ergänzt *Server
  Islands* und die *Content Layer API* für strukturierte Inhalte.

Astro nutzt **Vite** unter der Haube (siehe nächste Sektion).

### Mini-Beispiel: Eine Seite mit React-Insel

```astro
---
// serverseitig: lädt Daten, erzeugt kein JS für den Browser
import ReactCounter from "../components/ReactCounter.tsx";
const titel = "Willkommen";
---

<html>
    <body>
        <h1>{titel}</h1>
        <p>Dieser Text ist reines, statisches HTML.</p>
        <!-- Nur diese Insel bekommt JavaScript: -->
        <ReactCounter client:load />
    </body>
</html>
```

Die Anweisung `client:load` bestimmt, dass *ausschließlich* die
`ReactCounter`-Komponente im Browser interaktiv wird – der Rest der Seite
bleibt reines HTML ohne JS-Overhead.

### Verbreitung

In der **State of JS 2024** belegt Astro bei den Meta-Frameworks **Platz 1 bei
Interesse, Wiedererkennung (Retention) und Positiv-Werten**; bei der Nutzung
liegt es direkt hinter Next.js. Astro ist besonders beliebt für
Performance-kritische Content-Seiten.

### Lernkurve: **niedrig bis mittel**

Wer HTML und etwas JavaScript kennt, kann sofort eine `.astro`-Seite bauen – die
ersten Seiten brauchen noch kein JavaScript-Framework. Die Kurve steigt erst,
wenn man interaktive Inseln in React/Vue/Svelte einbaut (dann braucht man
zusätzlich Kenntnisse des jeweiligen Frameworks).

---

## 7. Die HTML-first-Richtung (ohne Build-Tool)

Die bisherigen Frameworks (React bis Astro) haben gemeinsam, dass sie
**Komponenten** bauen und dazu ein **Build-Tool** (meist Vite) brauchen. Es gibt
aber eine ganz andere, bewusst einfache Schule: **HTML-first**. Man schreibt
normales HTML, ergänzt es um einige Attribute und lässt den **Server** das
Rendern übernehmen – ganz ohne JavaScript-Framework und ohne Build-Schritt.

Technisch gesehen spricht man von einer **Hypermedia-Driven Application (HDA)**:
der Browser fordert HTML an, der Server schickt HTML-Fragmente zurück, und die
Seite wird durch Attribut-Gedöns interaktiv statt durch ein großes JS-Bundle.
Das ist **didaktisch ein idealer Einstieg**, weil man HTML schon kennt – und es
passt genau zum Stack dieses Unterrichts (**Deno + Hono + HTMX**).

### htmx

> <https://htmx.org/> · ~14 KB, kein Build-Tool, kein JavaScript von Nöten.

htmx erweitert HTML um Attribute wie `hx-get`, `hx-post`, `hx-swap`: ein Button
kann damit per AJAX eine Anfrage schicken und einen Teil der Seite ersetzen –
**ohne eine einzige Zeile JavaScript zu schreiben**. Der Server antwortet nicht
mit JSON, sondern mit **HTML-Fragmenten**.

**Mini-Beispiel** (Server: Hono auf Deno; Client: reines HTML):

```ts
// Server: liefert ein HTML-Fragment zurück, kein JSON
let stand = 0;
app.get("/zaehler", (c) => {
    stand += 1;
    return c.html(`<p>Aktueller Stand: ${stand}</p>`);
});
```

```html
<!-- Client: kein JavaScript, nur zwei Attribute -->
<button hx-get="/zaehler" hx-target="#anzeige" hx-swap="innerHTML">
    Erhöhen
</button>
<div id="anzeige"><p>Aktueller Stand: 0</p></div>
```

Ein Klick holt `/zaehler`, und das zurückgegebene HTML landet direkt im
`#anzeige`-`<div>`.

### Alpine.js

> <https://alpinejs.dev/> · ~15 KB, kein Build-Tool, das „Tailwind für JS".

Alpine bringt **kleine Interaktivität direkt im HTML** unter („Sprinkles"):
Attribute wie `x-data`, `x-show` oder `@click` steuern reinen Client-Zustand –
ein Menü aufklappen, ein Feld ein-/ausblenden. htmx kümmert sich um den Server,
Alpine um den Browser; **beide ergänzen sich ideal**.

```html
<div x-data="{ offen: false }">
    <button @click="offen = !offen">Menü</button>
    <ul x-show="offen" x-transition>
        <li><a href="/">Start</a></li>
        <li><a href="/info">Info</a></li>
    </ul>
</div>
```

### Handlebars

> <https://handlebarsjs.com/> · logiklose Template-Engine.

Handlebars gehört in eine etwas andere Schublade: es ist eine **Template-Engine**
mit `{{variablen}}`-Platzhaltern, die zu HTML-Strings **vorkompiliert** wird –
typischerweise am Server. Es ist **nicht** reaktiv und eher ein Werkzeug der
Generation vor den heutigen Frameworks, taucht aber in älteren Codebasen und bei
E-Mail-/PDF-Templates noch häufig auf.

### AHA-Stack

Die drei Bausteine lassen sich kombinieren – bekannt als **AHA-Stack**
(<https://ahastack.dev/>): **A**stro + **H**TMX + **A**lpine. Astro liefert das
statische Grundgerüst, htmx holt dynamische HTML-Fragmente nach, Alpine steuert
die Client-Interaktion. Ein schlanke Alternative zu einer schweren SPA – und
eine direkte Fortsetzung der Astro-Sektion oben.

### Mini-Tabelle (paradigmenintern)

|               | Build nötig? | Wer hält den State? | Bundle        | Lernkurve |
|---------------|--------------|---------------------|---------------|-----------|
| **htmx**      | nein         | Server              | ~14 KB        | sehr flach |
| **Alpine.js** | nein         | Browser („Sprinkles") | ~15 KB      | sehr flach |
| **Handlebars**| optional (vor­kompiliert) | Server | klein | flach |
| *zum Vergleich: SPA-Frameworks (React, Vue, …)* | **ja** (Vite) | Browser (reaktiv) | groß | mittel–steil |

### Lernkurve & Verbreitung

htmx und Alpine haben die **flachste Lernkurve** aller hier vorgestellten
Werkzeuge: wer HTML kennt, ist in Stunden produktiv. htmx wächst stark (2023/24
„Rising Star", ~47k GitHub-Sterne, Millionen Downloads/Monat), ist im
Marktanteil aber noch eine Nische gegenüber React/Vue – jedoch eine sehr
praxistaugliche, gerade im Zusammenspiel mit klassischen Server-Backends.

---

## 8. Vite

> <https://vite.dev/> · entwickelt von **Evan You** (dem Vue-Erfinder), seit 2020.

### Technik – und warum Vite *kein* Framework ist

**Wichtig:** Vite ist **kein** Konkurrent zu React oder Angular. Es ist ein
**Build-Tool und Development-Server** – das Werkzeug, das den Quellcode (TSX,
SFC, SCSS, …) in etwas übersetzt, das der Browser versteht, und dabei während
der Entwicklung blitzschnell neu lädt (Hot Module Replacement).

Die Architektur nutzt zwei Werkzeuge unter der Haube:

- **In der Entwicklung:** **esbuild** (in Go geschrieben) wandelt Dateien
  on-demand um – der Dev-Server startet in Millisekunden, unabhängig von der
  Projektgröße.
- **Im Produktions-Build:** **Rollup** (bzw. in Zukunft **Rolldown**, in Rust)
  erzeugt optimierte, minimierte Bundles.

Vite hat das frühere Standard-Tool **Webpack** weitgehend verdrängt. Es ist der
**De-facto-Standard** für moderne Frontend-Projekte und wird von den offiziellen
Templates für React, Vue und SvelteKit verwendet.

> **Hinweis:** Ganz bewusst **ohne** Build-Tool kommen htmx und Alpine.js aus
> (siehe Sektion 7) – kein Build-Schritt ist dort gerade der Punkt. Und damit
> Vite (oder ein Server wie Hono) überhaupt läuft, braucht es einen
> **JavaScript-Runtime** – in unserem Unterricht ist das **Deno**; siehe das
> Begleitdokument [`JS-Runtimes.md`](./JS-Runtimes.md).

### Beispiel: Ein neues Projekt starten

```bash
npm create vite@latest mein-projekt
# wähle ein Framework (React / Vue / Svelte / …) und ggf. TypeScript
cd mein-projekt
npm install
npm run dev      # startet den Dev-Server mit Hot Reload
npm run build    # erzeugt den Produktions-Build im Ordner dist/
```

### Verbreitung

Vite ist **allgegenwärtig**: Next.js nutzt es (teilweise), Nuxt basiert darauf,
SvelteKit nutzt es exklusiv. Neue Frameworks setzen praktisch immer auf Vite
auf.

### Lernkurve: **minimal**

Für den Einstieg muss man Vite kaum lernen – die Voreinstellungen sind
sinnvoll, die Konfiguration (`vite.config.js`) ist klein und optional. Erst bei
fortgeschrittenen Plugins wird es tiefgreifender.

---

## 9. Vergleich auf einen Blick

|               | React                | Vue.js             | Angular                 | Svelte (+ SvelteKit)   | Astro                    | Vite                  |
|---------------|----------------------|--------------------|-------------------------|------------------------|--------------------------|-----------------------|
| **Typ**       | Library              | Framework          | Framework (full)        | Compiler + Meta-FW     | Site-Framework (Islands) | **Build-Tool**        |
| **Templating**| TSX (in TS)          | SFC `.vue`         | HTML + Angular-Syntax   | HTML-ähnlich           | `.astro` (HTML-artig)    | — (nutzt andere)      |
| **SSR via**   | Next.js              | Nuxt 3             | Angular Universal       | SvelteKit              | SSG-Standard / SSR       | —                     |
| **Reaktivität**| Hooks / Virtual DOM | Composition API    | RxJS + Signals          | Runes, kein V-DOM      | nur Inseln (React/Vue…)  | —                     |
| **TypeScript**| optional             | optional           | **verpflichtend**       | optional               | optional                 | optional              |
| **Verbreitung**| sehr hoch (~82 %)   | hoch (~50 %)       | hoch (~50 %, intern)    | wachsend, klein        | stark wachsend (Top-Interest) | Standard         |
| **Lernkurve** | mittel               | flach              | **sehr steil**          | **am flachsten**       | niedrig–mittel           | minimal               |
| **Bundle**    | groß (~145 KB)       | mittel             | groß                    | **sehr klein** (~5 KB) | **0 KB JS (default)**    | —                     |

*(Nutzungszahlen orientieren sich an der State of JS 2024; Bundle-Größen sind
Richtwerte für ein HelloWorld/Counter-Setup.)*

---

## 10. Bedeutung für Europa und Österreich

### Die DACH-Enterprise-Welt spricht Angular

Eine Faustregel aus der Branche lautet: **„Customer-facing Apps bevorzugen
React, Enterprise-Apps bevorzugen Angular."** Für den **DACH-Raum**
(Deutschland, Österreich, Schweiz) ist das besonders relevant, weil die
Wirtschaft hier von **Großunternehmen, Banken, Versicherungen und dem
öffentlichen Sektor** geprägt ist – und genau diese setzen traditionell auf
Angular:

- Öffi-Apps, Banking-Frontends, interne Verwaltungsportale von Banken und
  Versicherungen, ERP-Systeme großer Konzerne – häufig Angular.
- Angulars strikte Vorgaben (TypeScript, DI, einheitliche Architektur)
  passen zu großen Teams und strengen Compliance-Anforderungen.

Auf Jobportalen zeigt sich das deutlich (Stand 2024/25):

- **devjobs.at** listet Angular prominent unter den österreichischen IT-Stellen.
- **WeAreDevelopers** verzeichnete ca. **137 offene Angular-Stellen in
  Österreich**.
- **Glassdoor Austria** meldete zeitweise über **290 Angular-Jobs**.
- Stellenanzeigen fordern regelmäßig „TypeScript, Angular, Java/C#" – ein typisch
  österreichisches Enterprise-Profil.

### React für Startups, Agenturen und kundenorientierte Produkte

React dominiert dort, wo es um **öffentliche, kundenorientierte Webseiten**,
Startups und Agenturprojekte geht. Die Stellenzahl ist hoch, dafür ist die
**Konkurrenz** um Einstiegspositionen groß (viele Bootcamp-Absolventen).
React-Kenntnisse sind dennoch eine sichere Bank für den Berufseinstieg.

### Vue, Svelte und Astro – Nischen mit Zukunft

Vue ist in Österreich in mid-sized Unternehmen und Agenturen vertreten, seltener
in Konzernen. Svelte ist noch eine Nische, genießt aber höchste
Entwicklerzufriedenheit und ist ein Tipp für alle, die zukunftsfähig lernen
wollen – auch weil die Konzepte (Compiler-Ansatz, feingranulare Reaktivität)
die Branche prägen. **Astro** schließlich ist die erste Wahl, wenn es um
Content-getriebene Auftritte geht – Marketing-Seiten, Blogs, Schul-Websites –,
weil es nahezu kein JavaScript ausliefert und dadurch sehr schnell ist; für
Agenturen und kleine Teams ein wachsender Baustein.

### Was heißt das für die Berufswahl?

- **Wer im DACH-Enterprise-Umfeld arbeiten will** (Bank, Industrie, öffentliche
  Hand): **Angular + TypeScript** sind die wichtigste Investition. Die steile
  Lernkurve lohnt sich am Arbeitsmarkt in Österreich besonders.
- **Wer Richtung Startup, Agentur oder internationales Produkt geht**:
  **React** bietet die meisten Möglichkeiten weltweit.
- **Wer schnell produktiv werden will oder projektbezogen lernt**: **Vue** oder
  **Svelte** bieten die sanftesten Einstiege.
- **htmx + Alpine** sind der „Boring Web"-Pfad: ideal für klassische
  Server-Backends (in Österreich oft Java/.NET/Python) und für kleinere
  Agenturen, die ohne schweres JS-Bündel auskommen wollen – ein sehr praxisnaher
  Einstieg gerade in der DACH-KMU-Welt.
- **Vite** lernt man „nebenbei" mit jedem dieser Frameworks – es ist die
  gemeinsame Basis der modernen Toolchain.

---

## 11. Weiterführende Links

**Umfragen & Statistiken**

- State of JS 2024 (Front-end Frameworks): <https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/>
- State of JS 2024 (Übersicht): <https://2024.stateofjs.com/en-US>
- State of Frontend 2024: <https://tsh.io/state-of-frontend>
- Stack Overflow Developer Survey: <https://survey.stackoverflow.co/>
- W3Techs – React vs. Angular: <https://w3techs.com/technologies/comparison/js-angularjs,js-react>

**Offizielle Dokumentationen**

- React: <https://react.dev/>
- Next.js (React Meta-FW): <https://nextjs.org/docs>
- Vue.js: <https://vuejs.org/guide/introduction.html>
- Nuxt 3 (Vue Meta-FW): <https://nuxt.com/docs>
- Angular: <https://angular.dev/overview>
- Svelte (Tutorial): <https://svelte.dev/tutorial>
- SvelteKit: <https://svelte.dev/docs/kit>
- Astro: <https://docs.astro.build/>
- Vite: <https://vite.dev/guide/>

**HTML-first (ohne Build-Tool) & Runtimes**

- htmx: <https://htmx.org/>
- Alpine.js: <https://alpinejs.dev/>
- Handlebars: <https://handlebarsjs.com/>
- AHA-Stack (Astro + htmx + Alpine): <https://ahastack.dev/>
- JS-Runtimes (Node/Deno/Bun): siehe [`JS-Runtimes.md`](./JS-Runtimes.md)

**Jobportale (Österreich / DACH)**

- devjobs.at: <https://en.devjobs.at/jobs/angular>
- WeAreDevelopers: <https://www.wearedevelopers.com/en/jobs>
- Glassdoor Austria: <https://www.glassdoor.com/Job/austria-jobs-SRCH_IL.0,7_IN18.htm>
