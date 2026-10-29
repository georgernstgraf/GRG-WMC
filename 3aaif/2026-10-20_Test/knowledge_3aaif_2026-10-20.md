# Knowledge Check – 3aaif

**Datum:** 20.10.2026
**Themen:** Tooling & Git (VS Code, Live Server, W3C Validator, DevTools, Dreiklang) · HTML-Grundlagen (Grundgerüst, Semantik, Bilder, Listen, Entities) · CSS-Basics (Einbindungswege, Selektoren, Box-Model, box-sizing, Spezifität & Kaskade, Farben, Einheiten)

**Gesamtpunkte:** 145

**Name:** _________________________________

---

## Multiple-Choice Fragen (25 × 4 Punkte = 100 Punkte)

Jede Frage hat 4 Antwortmöglichkeiten. Kreuze alle zutreffenden Antworten an.
Du erhältst 1 Punkt für jede Option, die du richtig behandelst (angekreuzt wenn richtig, nicht angekreuzt wenn falsch).

Falls du eine Frage als mehrdeutig empfindest, kannst du **–** ankreuzen und kurz begründen.

---

### Frage 1: Live Server

Welche Aussagen zur VS-Code-Extension **Live Server** sind richtig?

- [ ] a) Sie lädt deine Änderungen automatisch zu GitHub hoch
- [ ] b) Sie lädt die Seite bei jedem Speichern automatisch neu
- [ ] c) Sie startet einen lokalen Mini-Server unter `http://127.0.0.1:5500`
- [ ] d) Manche Funktionen (z. B. später `fetch`) brauchen einen Server — deshalb Live Server statt `file://`

---

### Frage 2: Der Git-Dreiklang

Welche Aussagen zum Git-Dreiklang sind richtig?

- [ ] a) Die richtige Reihenfolge ist `add` → `commit` → `push`
- [ ] b) `git add .` wählt Änderungen für den nächsten Commit aus („vormerken“)
- [ ] c) `git push` schreibt den Stand zuerst lokal dauerhaft fest
- [ ] d) GitHub ist die Online-Ablage; Git funktioniert auch ohne Netz

---

### Frage 3: `git commit`

Was macht `git commit -m "erste Seite"`?

- [ ] a) Es schreibt die vorgemerkten Änderungen lokal dauerhaft fest
- [ ] b) Es lädt die Änderungen zu GitHub hoch
- [ ] c) Die Option `-m` liefert die Commit-Nachricht
- [ ] d) Es fügt automatisch alle Dateien hinzu, auch ohne vorheriges `git add`

---

### Frage 4: Git-Konfiguration & Zustand

Welche Aussagen sind richtig?

- [ ] a) Name und E-Mail setzt man einmalig mit `git config --global user.name` / `user.email`
- [ ] b) Ohne gesetzte Identität weiß Git nicht, wer committet
- [ ] c) `git status` zeigt die komplette Historie aller Commits
- [ ] d) `git log --oneline` zeigt die Commit-Historie in Kurzform

---

### Frage 5: DevTools & W3C Validator

Welche Aussagen zu den Werkzeugen sind richtig?

- [ ] a) Die DevTools öffnet man im Browser mit F12
- [ ] b) In den DevTools sieht man HTML-Gerüst, CSS-Regeln und die Konsole
- [ ] c) Der W3C Validator prüft, ob HTML/CSS standardkonform ist
- [ ] d) Der W3C Validator startet automatisch den Live Server

---

### Frage 6: Pflichtelemente des Grundgerüsts

Welche der folgenden Bausteine gehören zu den **Pflichtelementen** des HTML-Grundgerüsts?

- [ ] a) ein `<style>`-Block im `<head>`
- [ ] b) `lang="de"` am `<html>`-Tag
- [ ] c) `<meta charset="UTF-8">`
- [ ] d) ein `<title>` im `<head>`

---

### Frage 7: head und body

Welche Aussagen zu `<head>` und `<body>` sind richtig?

- [ ] a) Im `<head>` stehen Metadaten, die man auf der Seite nicht sieht
- [ ] b) Alles Sichtbare steht im `<body>`
- [ ] c) Ein sichtbarer Absatz `<p>` gehört in den `<head>`
- [ ] d) Der `<title>` erscheint im Browser-Tab und in Suchergebnissen

---

### Frage 8: Das main-Element

Welche Aussagen zum `<main>`-Element sind richtig?

- [ ] a) `<main>` kennzeichnet den Hauptinhalt der Seite
- [ ] b) `<main>` darf genau einmal pro Seite vorkommen
- [ ] c) Jeder Abschnitt der Seite bekommt sein eigenes `<main>`
- [ ] d) Für thematische Gruppen innerhalb von `<main>` ist `<section>` geeignet

---

### Frage 9: Semantische Tags

Welche Aussagen zu semantischen Tags sind richtig?

- [ ] a) `<header>` ist der Kopfbereich mit Titel, Logo oder Navigation
- [ ] b) `<nav>` darf nur Bilder enthalten, keine Links
- [ ] c) `<aside>` nimmt Begleitinhalt auf, z. B. eine Randnotiz
- [ ] d) `<div class="kopf">` ist semantischer als `<header>`

---

### Frage 10: Das alt-Attribut

Welche Aussagen zum `alt`-Attribut bei `<img>` sind richtig?

- [ ] a) `alt` macht das Bild automatisch kleiner
- [ ] b) Der `alt`-Text erscheint, wenn das Bild nicht lädt
- [ ] c) `alt` ist optional — der Validator meldet nie einen Fehler, wenn er fehlt
- [ ] d) `alt` beschreibt das Bild für Screenreader

---

### Frage 11: Listen in HTML

Welche Aussagen zu Listen sind richtig?

- [ ] a) `<ul>` ist eine ungeordnete Liste (Aufzählungspunkte)
- [ ] b) `<ol>` zeigt Aufzählungspunkte statt Nummerierung
- [ ] c) Jeder Listenpunkt steht in einem `<li>`
- [ ] d) `<ol>` eignet sich für Schritte in fester Reihenfolge

---

### Frage 12: Entities

Welche Aussagen zu Sonderzeichen (Entities) sind richtig?

- [ ] a) Spitze Klammern `<` und `>` dürfen nicht direkt als Text stehen
- [ ] b) Ein `<` im Text schreibt man als `&lt;`
- [ ] c) Ein `&` im Text schreibt man als `&lt;`
- [ ] d) Mit `charset="UTF-8"` kannst du Umlaute (ä, ö, ü, ß) direkt schreiben

---

### Frage 13: Das details-Element

Welche Aussagen zu `<details>` sind richtig?

- [ ] a) `<details>` erzeugt ein natives Aufklapp-Element
- [ ] b) `<summary>` liefert die sichtbare Überschrift des Aufklapp-Elements
- [ ] c) `<details>` braucht JavaScript, um auf- und zuzuklappen
- [ ] d) `<details>` eignet sich z. B. für FAQs

---

### Frage 14: Drei Wege, CSS einzubinden

Welche Aussagen zu den drei Einbindungswegen sind richtig?

- [ ] a) Das `style`-Attribut formatiert ein einzelnes Element direkt
- [ ] b) Ein `<style>`-Block gilt nur für diese eine HTML-Datei
- [ ] c) Ein verlinktes Stylesheet per `<link>` ist der Normalfall — es gilt für beliebig viele Seiten
- [ ] d) Es ist empfehlenswert, CSS in den `<body>` zu setzen, damit es spät lädt

---

### Frage 15: Externes Stylesheet einbinden

Wie bindet man eine externe `style.css` **korrekt** ein?

- [ ] a) `<link rel="stylesheet" href="style.css">` im `<head>` — genau einmal
- [ ] b) Mehrere `<link>`-Tags auf dieselbe `style.css`
- [ ] c) Mit einem Tag wie `<css src="style.css">`
- [ ] d) Mit `<script src="style.css">`

---

### Frage 16: Selektoren

Welche Aussagen zu Selektoren sind richtig?

- [ ] a) `p { … }` selektiert alle `<p>`-Elemente der Seite
- [ ] b) `.wichtig { … }` selektiert alle Elemente mit `class="wichtig"`
- [ ] c) `#start { … }` selektiert alle Elemente mit `class="start"`
- [ ] d) IDs sind für Anker und JavaScript gedacht — nicht primär fürs Styling

---

### Frage 17: Das Box-Model

Welche Aussagen zum Box-Model sind richtig?

- [ ] a) Der margin liegt direkt am content, noch vor dem padding
- [ ] b) Von innen nach außen: margin, border, padding, content
- [ ] c) Das padding liegt zwischen content und border
- [ ] d) Von innen nach außen: content, padding, border, margin

---

### Frage 18: Breite ohne border-box

Gegeben ist folgende Regel (kein `box-sizing` gesetzt — es gilt der Standard `content-box`):

```css
.karte {
    width: 200px;
    padding: 20px;
    border: 5px solid #6d28d9;
}
```

Wie breit wird die Box tatsächlich?

- [ ] a) 200 px
- [ ] b) 240 px
- [ ] c) 250 px
- [ ] d) 220 px

---

### Frage 19: box-sizing: border-box

Welche Aussagen zu `box-sizing: border-box` sind richtig?

- [ ] a) `width` umfasst dann auch padding und border
- [ ] b) padding und border verschwinden dadurch optisch von der Seite
- [ ] c) Man setzt es z. B. global mit `* { box-sizing: border-box; }`
- [ ] d) `border-box` ist der Standardwert von `box-sizing`

---

### Frage 20: Spezifität & Kaskade

Welche Aussagen zu Spezifität und Kaskade sind richtig?

- [ ] a) Ein ID-Selektor schlägt einen Klassen-Selektor
- [ ] b) Ein Klassen-Selektor schlägt einen Element-Selektor
- [ ] c) Ein Element-Selektor schlägt einen ID-Selektor
- [ ] d) Bei gleicher Spezifität gewinnt die zuletzt notierte Regel

---

### Frage 21: Kaskade im Beispiel

Gegeben ist folgende `style.css` (in dieser Reihenfolge), das `<body>`-Element trägt `class="meine"` **und** `id="deine"`:

```css
#deine { color: green; }
.meine { color: blue; }
#deine { color: brown; }
body { color: red; }
```

Welche Farbe hat der Text im `body`?

- [ ] a) grün
- [ ] b) braun
- [ ] c) blau
- [ ] d) rot

---

### Frage 22: Spezifität anwenden

Gegeben ist folgendes Stylesheet:

```css
.titel { color: blue; }
#titel { color: green; }
p      { color: red; }
```

Es gibt genau ein Element: `<p id="titel" class="titel">Hallo</p>`.

Welche Aussagen sind richtig?

- [ ] a) Der Text ist grün
- [ ] b) Der Text ist blau
- [ ] c) Der Text ist rot
- [ ] d) Entfernt man die ID vom Element, wird der Text blau

---

### Frage 23: Farben mit rgba()

Welche Aussagen zu `rgba()` sind richtig?

- [ ] a) Das `a` steht für die Deckkraft (Alpha)
- [ ] b) Der Alpha-Wert läuft von 0 (unsichtbar) bis 1 (deckend)
- [ ] c) `rgba(109, 40, 217, 15)` ist ein zartes, durchsichtiges Lila
- [ ] d) `rgba(…, 0.15)` eignet sich für dezente Flächen und Overlays

---

### Frage 24: color und background

Welche Aussagen zu `color` und `background` sind richtig?

- [ ] a) `color` färbt die Schrift
- [ ] b) `background` färbt den Hintergrund
- [ ] c) `color` färbt den gesamten Hintergrund der Box
- [ ] d) Hexadezimale Farbangaben wie `#6d28d9` sind in CSS nicht erlaubt

---

### Frage 25: Einheiten

Welche Aussagen zu den Einheiten `px`, `rem`, `em` und `%` sind richtig?

- [ ] a) `px` ist eine relative Einheit, die automatisch mitskaliert
- [ ] b) `em` bezieht sich auf die eigene Schriftgröße des Elements
- [ ] c) `%` bezieht sich (bei `width`) auf die Elternbreite
- [ ] d) `rem` bezieht sich auf die Wurzel-Schriftgröße (meist 16 px)

---

## Freitext-Fragen (3 × 15 Punkte = 45 Punkte)

### Frage 26: Semantische Seitenstruktur erklären (15 Punkte)

Du baust deine „Über mich“-Seite.

1. Skizziere (als Text oder einfaches Diagramm), wie du die Seite mit den **semantischen Tags** aufbaust — von `<header>` bis `<footer>`.
2. Erkläre in eigenen Worten, was **semantisches HTML** bedeutet und warum wir es verwenden (Stichworte: Screenreader, Suchmaschinen, Bedeutung statt Aussehen).
3. Erkläre, wozu das `alt`-Attribut bei `<img>` dient.

**Antwort:**

```
// Deine Skizze hier:


// Deine Erklärung hier:

```

---

### Frage 27: Box-Model und Spezifität anwenden (15 Punkte)

Gegeben sind folgende Regeln:

```css
*      { box-sizing: content-box; }

.karte {
    width: 300px;
    padding: 10px;
    border: 4px solid #6d28d9;
}

.karte { color: blue; }
.karte { color: darkred; }
```

1. In der Rechnung unten kommen `padding` und `border` „obendrauf“. Nenne die vier
   Flächen des Box-Models **in der richtigen Reihenfolge** (von innen nach außen).
2. Rechne vor: Wie breit wird die `.karte` mit `box-sizing: content-box`? Und wie breit bliebe sie mit `box-sizing: border-box`? Zeige deine Rechnung.
3. Welche **Textfarbe** hat die `.karte` am Ende — und warum gewinnt genau diese Regel?

**Antwort:**

```
// 1) Box-Model-Reihenfolge:


// 2) Rechnung:


// 3) Farbe + Begründung:

```

---

### Frage 28: Der Git-Workflow erklären (15 Punkte)

Erkläre in eigenen Worten deinen Git-Workflow:

1. Beschreibe die drei Schritte des **Dreiklangs** (`add`, `commit`, `push`) — was passiert bei jedem Schritt, und wohin wandert die Änderung jeweils?
2. Was passiert (und was meldet Git), wenn du `commit` ausführst, **ohne** vorher `add`?
3. Wozu dient `git config --global user.name` / `user.email`, und wann muss man es ausführen?
4. Erkläre den Unterschied zwischen **Git** und **GitHub**.

**Antwort:**

```
// Deine Erklärung hier:

```

---

**Gesamtpunkte: 145**

---

*Gutes Gelingen! Vergiss nicht, oben deinen Namen einzutragen und das Datum zu kontrollieren.*
