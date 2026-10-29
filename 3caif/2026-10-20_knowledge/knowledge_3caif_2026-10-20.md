# Knowledge Check – 3caif

**Datum:** 20.10.2026
**Themen:** Tooling & Git, HTML-Grundlagen, CSS-Basics (Einbindung, Farben, Einheiten), Box-Model & Sizing, HTML-Formulare
**Gesamtpunkte:** 145

---

## Multiple-Choice Fragen (25 × 4 Punkte = 100 Punkte)

Jede Frage hat 4 Antwortmöglichkeiten. Kreuze alle zutreffenden Antworten an.
Du erhältst 1 Punkt für jede Option, die du richtig behandelst (angekreuzt wenn richtig, nicht angekreuzt wenn falsch).

Falls du eine Frage als mehrdeutig empfindest, kannst du **–** ankreuzen und kurz begründen.

---

### Frage 1: Git-Dreiklang

Was machen die drei Befehle des Git-Dreiklangs `add` → `commit` → `push`?

- [ ] a) `git add .` merkt Änderungen für den nächsten Commit vor
- [ ] b) `git commit -m "…"` lädt die Commits zu GitHub hoch
- [ ] c) `git push` überträgt Commits zu GitHub
- [ ] d) `git commit -m "…"` speichert den vorgemerkten Stand lokal dauerhaft

---

### Frage 2: Git-Konfiguration

Welche Aussagen zu `git config` sind richtig?

- [ ] a) `git config --global user.name "…"` setzt den Namen, der in deinen Commits erscheint
- [ ] b) `--global` gilt für alle Repositories deines Benutzerkontos
- [ ] c) Name und E-Mail für Commits trägt man in die `index.html` im `<head>` ein
- [ ] d) Mit `git config --global --list` kontrollierst du die gesetzten Werte

---

### Frage 3: Werkzeuge

Welche Aussagen zu unseren Werkzeugen sind richtig?

- [ ] a) Wenn eine Seite später `fetch` verwenden soll, öffnest du sie am besten direkt per `file://`
- [ ] b) Die DevTools öffnest du im Browser mit F12
- [ ] c) Der W3C Validator prüft HTML/CSS auf Standard-Konformität
- [ ] d) Der Live Server zeigt die Seite unter `http://127.0.0.1:5500` und lädt bei jedem Speichern neu

---

### Frage 4: Git und GitHub

Welche Aussagen zu Git und GitHub sind richtig?

- [ ] a) GitHub ist die Online-Ablage für dein lokales Git-Repository
- [ ] b) Git funktioniert auch ohne Netzverbindung
- [ ] c) `git status` zeigt die Historie aller Commits
- [ ] d) Ohne `git remote add origin …` weiß `git push` nicht, wohin hochgeladen werden soll

---

### Frage 5: Pflichtelemente des Grundgerüsts

Welche Aussagen zum HTML-Grundgerüst sind richtig?

- [ ] a) `<meta charset="UTF-8">` sorgt dafür, dass Umlaute (ä, ö, ü, ß) korrekt dargestellt werden
- [ ] b) `lang="de"` am `<html>` hilft Screenreadern und Suchmaschinen
- [ ] c) Der Inhalt von `<title>` erscheint im Browser-Tab
- [ ] d) `<meta name="viewport">` steuert die Schriftfarbe der Seite

---

### Frage 6: head und body

Was gehört wohin?

- [ ] a) Der `<head>` enthält Metadaten — nichts Sichtbares
- [ ] b) Alles Sichtbare der Seite steht im `<body>`
- [ ] c) Ein `<p>` mit sichtbarem Text gehört in den `<head>`
- [ ] d) `<title>` steht im `<head>`

---

### Frage 7: main

Welche Aussagen zum `<main>`-Element sind richtig?

- [ ] a) `<main>` kennzeichnet den Hauptinhalt der Seite
- [ ] b) `<main>` darf genau einmal pro Seite vorkommen
- [ ] c) `<main>` darf mehrfach pro Seite vorkommen, einmal pro Abschnitt
- [ ] d) `<div class="main">` ist semantisch gleichwertig zu `<main>`

---

### Frage 8: Semantische Tags

Welche Zuordnungen von Tag zu Bedeutung sind richtig?

- [ ] a) `<nav>` umschließt die Navigation (nur wesentliche Links)
- [ ] b) `<aside>` ist für Begleitinhalt, oft eine Sidebar/Randnotiz
- [ ] c) `<article>` ist ein eigenständiger, in sich verständlicher Inhalt
- [ ] d) `<footer>` enthält den Titel, der im Browser-Tab erscheint

---

### Frage 9: img und alt

Welche Aussagen zum `alt`-Attribut sind richtig?

- [ ] a) `alt` ist am `<img>` Pflicht
- [ ] b) `alt` beschleunigt das Laden des Bildes
- [ ] c) Der `alt`-Text erscheint, wenn das Bild nicht lädt
- [ ] d) `alt` beschreibt das Bild für Screenreader

---

### Frage 10: Listen und Entities

Welche Aussagen sind richtig?

- [ ] a) `<ol>` erzeugt eine geordnete (nummerierte) Liste
- [ ] b) `<li>` wird in `<ul>` und in `<ol>` verwendet
- [ ] c) Eine spitze Klammer `<` als Text schreibt man als Entity `&lt;`
- [ ] d) Mit `charset="UTF-8"` müssen Umlaute weiterhin als Entity geschrieben werden

---

### Frage 11: Drei Wege, CSS einzubinden

Welche Aussagen zu den drei Wegen sind richtig?

- [ ] a) Ein externes Stylesheet verlinkt man im `<body>`
- [ ] b) Ein `<style>`-Block wirkt nur für diese eine Datei
- [ ] c) Ein per `<link rel="stylesheet">` verlinktes Stylesheet ist der Normalfall für beliebig viele Seiten
- [ ] d) Das `style`-Attribut wirkt auf genau ein Element

---

### Frage 12: Selektoren

Gegeben ist `p { … }`, `.wichtig { … }` und `#start { … }`. Welche Aussagen sind richtig?

- [ ] a) `.wichtig` wählt alle Elemente mit `class="wichtig"`
- [ ] b) `#start` wählt genau das eine Element mit `id="start"`
- [ ] c) `p` wählt alle `<p>`-Elemente der Seite
- [ ] d) IDs sind das bevorzugte Mittel, um Elemente zu stylen

---

### Frage 13: Box-Model-Reihenfolge

Welche Aussagen zum Box-Model sind richtig?

- [ ] a) Von innen nach außen: Content, Padding, Border, Margin
- [ ] b) Margin liegt am nächsten am Inhalt
- [ ] c) Padding liegt zwischen Content und Border
- [ ] d) Border liegt außerhalb des Padding

---

### Frage 14: box-sizing

Gegeben ist:

```css
.karte {
    width: 200px;
    padding: 20px;
    border: 5px solid #6d28d9;
}
```

Welche Aussagen sind richtig?

- [ ] a) Beim Standard `content-box` ist die tatsächliche Breite 200 + 2·20 + 2·5 = 250px
- [ ] b) Mit `box-sizing: border-box` bleibt die Box 200px breit
- [ ] c) `box-sizing: border-box` entfernt Padding und Border
- [ ] d) `content-box` ist der Standard-Wert von `box-sizing`

---

### Frage 15: Farben mit rgba()

Welche Aussagen zu `rgba()` sind richtig?

- [ ] a) Das `a` steht für Alpha — die Deckkraft der Farbe
- [ ] b) Alpha läuft von 0 (unsichtbar) bis 1 (deckend)
- [ ] c) `rgba(109, 40, 217, 0.15)` ergibt eine zarte, durchscheinende Fläche
- [ ] d) `rgba(109, 40, 217, 15)` ist eine gültige dezente Deckkraft

---

### Frage 16: Einheiten

Welche Aussagen zu Einheiten sind richtig?

- [ ] a) `rem` bezieht sich auf die Wurzel-Schriftgröße (meist 16px)
- [ ] b) `%` bezieht sich auf die Breite bzw. Höhe des Elternelements
- [ ] c) `px` ist die empfohlene Einheit für Schrift und Abstände
- [ ] d) `em` bezieht sich auf die eigene Schriftgröße des Elements

---

### Frage 17: Fehlersuche mit Box-Model und CSS

Welche Aussagen sind richtig?

- [ ] a) Im DevTools (Elements) siehst du das Box-Model-Diagramm live
- [ ] b) Wenn `width` „nicht stimmt", fehlt oft `box-sizing: border-box`
- [ ] c) Wenn eine Farbe nicht wirkt, kann ein spezifischerer Selektor gewinnen (ID schlägt Klasse schlägt Element)
- [ ] d) Farben lassen sich in CSS nur mit `rgba()` angeben

---

### Frage 18: form — action und method

Welche Aussagen zum `<form>` sind richtig?

- [ ] a) `action` bestimmt, wohin die Daten gesendet werden
- [ ] b) `method="post"` hängt die Daten als Query-String an die URL an
- [ ] c) `method` bestimmt, ob die Daten per GET oder POST gesendet werden
- [ ] d) Fehlt `action`, geht die Anfrage an die eigene Seite

---

### Frage 19: name und label

Welche Aussagen sind richtig?

- [ ] a) Ein Eingabefeld ohne `name` wird beim Absenden nicht gesendet
- [ ] b) `name` wird zum Schlüssel des gesendeten Werts (`name=wert`)
- [ ] c) `name` und `id` bedeuten dasselbe und sind austauschbar
- [ ] d) `<label for="…">` verweist über die `id` auf sein Feld und macht die Beschriftung klickbar

---

### Frage 20: Steuerelemente zuordnen

Welche Zuordnungen sind richtig?

- [ ] a) `<select>` mit `<option>`-Elementen ergibt ein Dropdown
- [ ] b) `<textarea>` ist ein mehrzeiliges Textfeld
- [ ] c) `<input type="checkbox">` erlaubt Mehrfachauswahl
- [ ] d) `<input type="radio">` erlaubt Mehrfachauswahl

---

### Frage 21: Radiobutton-Gruppe

Gegeben ist:

```html
<input type="radio" id="rot" name="farbe" value="rot">
<label for="rot">Rot</label>
<input type="radio" id="blau" name="farbe" value="blau">
<label for="blau">Blau</label>
```

Welche Aussagen sind richtig?

- [ ] a) Radiobuttons mit demselben `name` bilden eine Gruppe — genau eine Option kann gewählt werden
- [ ] b) Gesendet wird der `value` des gewählten Radiobuttons
- [ ] c) Durch das `<label for>` ist auch die Beschriftung selbst klickbar
- [ ] d) Radiobuttons funktionieren nur ohne `<label>` korrekt

---

### Frage 22: select und Optionen

Welche Aussagen zum Dropdown sind richtig?

- [ ] a) Gesendet wird der `value` der gewählten `<option>`
- [ ] b) Der sichtbare Text einer Option wird in jedem Fall gesendet — auch wenn ein `value` gesetzt ist
- [ ] c) Das `<select>` braucht ein `name`, sonst wird nichts gesendet
- [ ] d) Ein `<select>` sendet automatisch alle seine Optionen an den Server

---

### Frage 23: Versand an den Mailclient

Dein Formular soll beim Absenden den Mailclient öffnen und die Daten an deine E-Mail-Adresse schicken, versehen mit einem Betreff. Welche Aussagen sind richtig?

- [ ] a) `action="deine-adresse@example.at"` ohne `mailto:` schickt die Daten direkt an die Adresse
- [ ] b) Die Ziel-E-Mail-Adresse steht im `action`-Attribut
- [ ] c) Einen Betreff bekommst du z. B. über ein verstecktes Feld `name="subject"` oder über `mailto:…?subject=…`
- [ ] d) Mit `action="mailto:deine-adresse@example.at"` ruft der Browser beim Absenden den Mailclient auf

---

### Frage 24: Pflichtfelder und Pattern

Welche Aussagen zur Validierung im Browser sind richtig?

- [ ] a) `required` macht ein Feld zum Pflichtfeld
- [ ] b) `required` verhindert das Absenden, solange das Pflichtfeld leer ist
- [ ] c) Mit `pattern="[0-9]{4}"` prüft der Browser den Inhalt gegen ein Muster
- [ ] d) Pflichtfelder lassen sich nur mit JavaScript umsetzen

---

### Frage 25: Formular-Typisches

Welche Aussagen sind richtig?

- [ ] a) Ein `<button>` ohne `type` schickt das Formular standardmäßig ab (`submit`)
- [ ] b) Ein ausgefülltes Eingabefeld ohne `name` wird trotzdem gesendet
- [ ] c) Beim `<textarea>` steht der Anfangswert zwischen den Tags, nicht in einem `value`-Attribut
- [ ] d) Beschriftungs-Texte von `<label>` werden automatisch mit an den Server gesendet

---

## Freitext-Fragen (3 × 15 Punkte = 45 Punkte)

### Frage 26: Formular komplett (15 Punkte)

Schreibe das HTML-Markup für ein kleines Feedback-Formular. Es soll enthalten:

1. Ein einzeiliges Textfeld für den Namen (mit klickbarer Beschriftung)
2. Eine Radiobutton-Gruppe mit drei Bewertungsoptionen (`super`, `ok`, `schlecht`)
3. Eine Checkbox „Darf ich dich kontaktieren?"
4. Ein Dropdown (`<select>`) mit mindestens zwei Themen
5. Ein mehrzeiliges Textfeld für die Nachricht
6. Beim Absenden soll der Mailclient geöffnet und die Mail an `feedback@example.at` mit dem Betreff `Feedback` geschickt werden

Erkläre in 1–2 Sätzen, warum die Felder ein `name`-Attribut brauchen.

**Antwort:**

```html
<!-- Dein Markup hier: -->


```

```
// Erklärung:


```

---

### Frage 27: Box-Model anwenden (15 Punkte)

Gegeben ist:

```css
.karte {
    width: 300px;
    padding: 20px;
    border: 5px solid #6d28d9;
}
```

1. Skizziere oder beschreibe die vier Flächen des Box-Models von innen nach außen.
2. Berechne die tatsächliche Breite der Box beim Standard `content-box` — mit Rechenweg.
3. Was ändert sich, wenn `box-sizing: border-box` gesetzt ist, und wieso nennt man das die „Rettung"?

**Antwort:**

```
// Deine Antworten hier:


```

---

### Frage 28: Git-Workflow und Qualitätssicherung (15 Punkte)

1. Erkläre den Git-Dreiklang `add` → `commit` → `push`: Was macht jeder Befehl, und in welcher Reihenfolge laufen sie ab?
2. Wofür setzt man vorher `git config --global user.name` und `user.email`?
3. Deine HTML-Seite ist fertig. Beschreibe, wie du mit dem W3C Validator und dem Live Server die Qualität sicherstellst — und warum du die Seite über den Live Server und nicht per `file://` öffnest.

**Antwort:**

```
// Deine Antworten hier:


```

---

**Gesamtpunkte: 145**

---

**Name:** ______________________________  **Datum:** ______________________________

*Gutes Gelingen!*
