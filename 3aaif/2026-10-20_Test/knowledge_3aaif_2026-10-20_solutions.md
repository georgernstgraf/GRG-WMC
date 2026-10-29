# Knowledge Check – 3aaif · Lösungen (Lehrperson)

**Datum:** 20.10.2026
**Themen:** Tooling & Git · HTML-Grundlagen · CSS-Basics (Box-Model, Selektoren, Spezifität & Kaskade, Farben, Einheiten)

**Gesamtpunkte:** 145 (25 × 4 MC + 3 × 15 Freitext)

---

## Lösungen Multiple-Choice (25 × 4 Punkte = 100 Punkte)

Je Option 1 Punkt: angekreuzt wenn richtig, nicht angekreuzt wenn falsch.

---

### Frage 1: Live Server

**Richtig: a ☐, b ☑, c ☑, d ☑**

- a) ✘ Hochladen zu GitHub ist Sache von `git push` — Live Server hat mit Git nichts zu tun.
- b) ✔ Automatisches Neuladen bei jedem Speichern ist die Kernfunktion.
- c) ✔ Live Server startet einen lokalen Mini-Server auf Port 5500.
- d) ✔ Manche Features (z. B. `fetch`) brauchen einen Server, daher Live Server statt `file://`.

---

### Frage 2: Der Git-Dreiklang

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Der Dreiklang ist `add` → `commit` → `push`.
- b) ✔ `git add .` merkt Änderungen für den nächsten Commit vor.
- c) ✘ Lokal festschreiben macht `commit`; `push` überträgt Commits erst zu GitHub.
- d) ✔ GitHub ist nur die Online-Ablage — Git arbeitet auch offline.

---

### Frage 3: `git commit`

**Richtig: a ☑, b ☐, c ☑, d ☐**

- a) ✔ `commit` schreibt den vorgemerkten Stand lokal dauerhaft fest.
- b) ✘ Hochladen macht erst `git push`.
- c) ✔ `-m "…"` liefert die Commit-Nachricht.
- d) ✘ Ohne vorheriges `git add` gibt es nichts zu committen („nothing to commit“).

---

### Frage 4: Git-Konfiguration & Zustand

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Identität setzt man einmalig mit `git config --global user.name` / `user.email`.
- b) ✔ Ohne Identität weiß Git nicht, wer committet.
- c) ✘ `git status` zeigt den aktuellen Zustand (geändert/vorgemerkt); die Historie zeigt `git log`.
- d) ✔ `git log --oneline` zeigt die Historie in Kurzform.

---

### Frage 5: DevTools & W3C Validator

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ DevTools öffnet man mit F12.
- b) ✔ DevTools zeigen HTML-Gerüst, CSS-Regeln, Netzwerk und Konsole.
- c) ✔ Der W3C Validator prüft HTML/CSS auf Standard-Konformität.
- d) ✘ Der Validator prüft nur — den Live Server startet man selbst.

---

### Frage 6: Pflichtelemente des Grundgerüsts

**Richtig: a ☐, b ☑, c ☑, d ☑**

- a) ✘ Ein `<style>`-Block ist optional — zu den vier Pflichtbausteinen zählt er nicht (charset, viewport, lang, title).
- b) ✔ `lang` am `<html>`-Tag ist Pflicht (Sprache für Screenreader/Suchmaschinen).
- c) ✔ `charset="UTF-8"` ist Pflicht (damit Umlaute stimmen).
- d) ✔ `<title>` ist Pflicht (Browser-Tab, Suchergebnisse).

---

### Frage 7: head und body

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Im `<head>` stehen nur Metadaten, nichts Sichtbares.
- b) ✔ Alles Sichtbare steht im `<body>`.
- c) ✘ Ein `<p>` ist sichtbarer Inhalt und gehört in den `<body>`.
- d) ✔ Der `<title>` erscheint im Browser-Tab und in Suchergebnissen.

---

### Frage 8: Das main-Element

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ `<main>` kennzeichnet den Hauptinhalt.
- b) ✔ `<main>` darf genau einmal pro Seite vorkommen.
- c) ✘ Mehrfaches `<main>` ist ein Semantik-Fehler.
- d) ✔ `<section>` gruppiert thematische Bereiche (z. B. „Hobbys“) innerhalb von `<main>`.

---

### Frage 9: Semantische Tags

**Richtig: a ☑, b ☐, c ☑, d ☐**

- a) ✔ `<header>` ist der Kopfbereich (Titel, Logo, Navigation).
- b) ✘ `<nav>` nimmt die Navigation mit den wesentlichen **Links** auf.
- c) ✔ `<aside>` ist für Begleitinhalt, oft eine Sidebar/Randnotiz.
- d) ✘ `<div>` verrät nichts über seine Bedeutung — `<header>` ist semantisch.

---

### Frage 10: Das alt-Attribut

**Richtig: a ☐, b ☑, c ☐, d ☑**

- a) ✘ `alt` ist ein Text, keine Größenangabe.
- b) ✔ Der `alt`-Text erscheint, wenn das Bild nicht lädt.
- c) ✘ `alt` ist Pflicht — der Validator meldet einen Fehler, wenn er fehlt.
- d) ✔ `alt` beschreibt das Bild für Screenreader.

---

### Frage 11: Listen in HTML

**Richtig: a ☑, b ☐, c ☑, d ☑**

- a) ✔ `<ul>` ist die ungeordnete Liste mit Aufzählungspunkten.
- b) ✘ `<ol>` ist geordnet und nummeriert (1., 2., 3.) — Aufzählungspunkte liefert `<ul>`.
- c) ✔ Jeder Listenpunkt steht in einem `<li>`.
- d) ✔ `<ol>` passt für Schritte in fester Reihenfolge.

---

### Frage 12: Entities

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Spitze Klammern werden als Tags gelesen und dürfen nicht direkt als Text stehen.
- b) ✔ `<` schreibt man als `&lt;`.
- c) ✘ `&` schreibt man als `&amp;` — nicht als `&lt;`.
- d) ✔ Mit `charset="UTF-8"` kann man Umlaute direkt schreiben.

---

### Frage 13: Das details-Element

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ `<details>` ist ein natives Aufklapp-Element.
- b) ✔ `<summary>` liefert die sichtbare Überschrift.
- c) ✘ `<details>` funktioniert ganz ohne JavaScript.
- d) ✔ Typischer Anwendungsfall sind FAQs.

---

### Frage 14: Drei Wege, CSS einzubinden

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ Das `style`-Attribut formatiert genau ein Element (zum schnellen Testen).
- b) ✔ Ein `<style>`-Block gilt nur für diese eine Datei.
- c) ✔ Das verlinkte Stylesheet ist der Normalfall — wiederverwendbar für beliebig viele Seiten.
- d) ✘ CSS gehört einmalig in den `<head>`, nicht in den `<body>`.

---

### Frage 15: Externes Stylesheet einbinden

**Richtig: a ☑, b ☐, c ☐, d ☐**

- a) ✔ Korrekt: `<link rel="stylesheet" href="style.css">`, einmalig im `<head>`.
- b) ✘ Mehrfache `<link>`-Tags zum selben Stylesheet sind ein typischer Fehler.
- c) ✘ Einen `<css>`-Tag gibt es nicht.
- d) ✘ `<script>` bindet JavaScript ein, nicht CSS.

---

### Frage 16: Selektoren

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Der Element-Selektor `p` trifft alle `<p>`-Elemente.
- b) ✔ `.wichtig` trifft alle Elemente mit `class="wichtig"` (wiederverwendbar).
- c) ✘ `#start` ist ein **ID**-Selektor und trifft genau das eine Element mit `id="start"`.
- d) ✔ IDs für Anker und JavaScript, Klassen fürs Styling.

---

### Frage 17: Das Box-Model

**Richtig: a ☐, b ☐, c ☑, d ☑**

- a) ✘ Margin liegt außen, weit weg vom content.
- b) ✘ Das ist die Reihenfolge von außen nach innen.
- c) ✔ Padding liegt zwischen content und border.
- d) ✔ Von innen nach außen: content, padding, border, margin.

---

### Frage 18: Breite ohne border-box

**Richtig: a ☐, b ☐, c ☑, d ☐**

- a) ✘ 200 px wäre nur der Inhalt — bei `content-box` kommt padding und border obendrauf.
- b) ✘ 240 px = 200 + 2·20 — hier fehlt der Border.
- c) ✔ 200 + 2·20 (padding) + 2·5 (border) = **250 px**.
- d) ✘ 220 px = 200 + 2·10 — so verteilt sich padding nicht.

---

### Frage 19: box-sizing: border-box

**Richtig: a ☑, b ☐, c ☑, d ☐**

- a) ✔ Bei `border-box` zählt `width` padding und border hinein — die Box bleibt so breit wie angegeben.
- b) ✘ Padding und Border bleiben sichtbar; sie werden nur in die Breite **eingerechnet**.
- c) ✔ Üblich ist das globale Setzen mit `* { box-sizing: border-box; }`.
- d) ✘ Der Standardwert ist `content-box`.

---

### Frage 20: Spezifität & Kaskade

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ ID schlägt Klasse.
- b) ✔ Klasse schlägt Element.
- c) ✘ Genau umgekehrt: ID schlägt Klasse schlägt Element.
- d) ✔ Bei gleicher Spezifität gewinnt die letzte Regel (Kaskade).

---

### Frage 21: Kaskade im Beispiel

**Richtig: a ☐, b ☑, c ☐, d ☐**

- a) ✘ Das erste `#deine { color: green; }` wird von der späteren `#deine`-Regel überholt.
- b) ✔ ID schlägt Klasse schlägt Element; zwischen den beiden `#deine`-Regeln (gleiche Spezifität) gewinnt die **letzte** — braun.
- c) ✘ `.meine` (Klasse) verliert gegen die ID-Regeln.
- d) ✘ `body` (Element-Selektor) hat die geringste Spezifität.

---

### Frage 22: Spezifität anwenden

**Richtig: a ☑, b ☐, c ☐, d ☑**

- a) ✔ `#titel` (ID) schlägt `.titel` (Klasse) und `p` (Element) → grün.
- b) ✘ Die Klasse `.titel` verliert gegen die spezifischere ID.
- c) ✘ Der Element-Selektor `p` hat die geringste Spezifität.
- d) ✔ Ohne ID bleibt als spezifischste Regel `.titel` (Klasse schlägt Element) → blau.

---

### Frage 23: Farben mit rgba()

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Das `a` steht für Alpha = Deckkraft.
- b) ✔ Alpha läuft von 0 (unsichtbar) bis 1 (deckend).
- c) ✘ Alpha läuft 0–1, nicht 0–100 — `15` läge weit darüber (würde auf 1 = deckend begrenzt); gemeint wäre `0.15`.
- d) ✔ `rgba(…, 0.15)` ergibt dezente, durchsichtige Flächen.

---

### Frage 24: color und background

**Richtig: a ☑, b ☑, c ☐, d ☐**

- a) ✔ `color` färbt die Schrift.
- b) ✔ `background` färbt den Hintergrund.
- c) ✘ Für den Hintergrund ist `background` zuständig, nicht `color`.
- d) ✘ Hex-Werte wie `#6d28d9` sind gängige, gültige CSS-Farbangaben.

---

### Frage 25: Einheiten

**Richtig: a ☐, b ☑, c ☑, d ☑**

- a) ✘ `px` ist eine **fixe** Einheit und skaliert nicht mit.
- b) ✔ `em` bezieht sich auf die eigene Schriftgröße des Elements.
- c) ✔ `%` bezieht sich bei Breiten auf die Elternbreite (responsive Layouts).
- d) ✔ `rem` bezieht sich auf die Wurzel-Schriftgröße (meist 16 px) — empfohlen für Schrift und Abstände.

---

## Lösungen Freitext (3 × 15 Punkte = 45 Punkte)

### Frage 26: Semantische Seitenstruktur erklären (15 Punkte)

**Musterlösung:**

Skizze (sinngemäß — auch eine textliche Beschreibung ist vollwertig):

```
<header>     Titel / Logo
  <nav>      Navigation (nur wesentliche Links)
<main>       Hauptinhalt — genau 1× pro Seite
  <article>  eigenständiger, in sich verständlicher Beitrag
  <section>  thematische Gruppe (z. B. „Hobbys“)
  <aside>    Randnotiz / Sidebar
<footer>     Autor, Copyright, weiterführende Links
```

Erklärung: Semantische Tags beschreiben die **Bedeutung** ihres Inhalts („was ist das?“), nicht das Aussehen (das macht CSS). `<div class="kopf">` verrät nichts — `<header>` schon. Das hilft Screenreader-Nutzer:innen und Suchmaschinen zu verstehen, was zusammengehört. Der `alt`-Text am `<img>` ist Pflicht: Er beschreibt das Bild für Screenreader und erscheint, wenn das Bild nicht lädt.

**Wertungs-Skizze (15 P):**
- Skizze/Struktur mit korrekter Tag-Reihenfolge inkl. `<main>` (genau 1×): **6 P** (pro korrekt platziertem Tag ~1 P, Abzug bei fehlendem/verdoppeltem `main`)
- Erklärung „Bedeutung statt Aussehen“ + mindestens ein Nennungselement Screenreader/Suchmaschinen: **6 P** (Kern 3 P, Screenreader/SEO 3 P)
- `alt`-Erklärung (Beschreibung für Screenreader **und/oder** Anzeige bei fehlendem Bild): **3 P**

---

### Frage 27: Box-Model und Spezifität anwenden (15 Punkte)

**Musterlösung:**

1. Reihenfolge von innen nach außen: **content → padding → border → margin**.

2. Rechnung:
   - `content-box` (Standard): `width` zählt nur den Inhalt → tatsächliche Breite = 300 + 2·10 (padding) + 2·4 (border) = **328 px**.
   - `border-box`: padding und border werden in die Breite **eingerechnet** → die Box bleibt **300 px** breit (der content schrumpft entsprechend auf 276 px).

3. Farbe: Die `.karte` ist am Ende **darkred**. Beide `.karte`-Regeln haben **gleiche Spezifität** — laut Kaskade gewinnt die **zuletzt notierte** Regel, also `color: darkred`.

**Wertungs-Skizze (15 P):**
- Korrekte Reihenfolge der vier Flächen: **4 P** (je 1 P pro Fläche in richtiger Position)
- Rechnung content-box = 328 px mit nachvollziehbarer Rechnung: **4 P** (2 P Ansatz „padding+border kommen dazu“, 2 P korrektes Ergebnis; nur Ergebnis korrekt ohne Ansatz: 2 P)
- Rechnung border-box = 300 px: **3 P** (1 P Konzept „wird eingerechnet“, 2 P korrektes Ergebnis)
- Farbe darkred + Begründung „gleiche Spezifität → letzte Regel gewinnt“: **4 P** (2 P richtige Farbe, 2 P korrekte Begründung)

---

### Frage 28: Der Git-Workflow erklären (15 Punkte)

**Musterlösung:**

1. Dreiklang:
   - `git add .` — Änderungen für den nächsten Commit **auswählen/vormerken** (Änderung ist damit nur „vorgemerkt“, noch nichts Fertiges).
   - `git commit -m "…"` — die vorgemerkten Änderungen **lokal dauerhaft festschreiben**, mit Nachricht, die beschreibt, was geändert wurde.
   - `git push` — die lokalen Commits **zu GitHub hochladen**, damit andere sie sehen und nichts verloren geht.

2. Ohne vorheriges `add` gibt es nichts festzuschreiben — Git meldet **„nothing to commit“**. Erst vormerken, dann committen.

3. `git config --global user.name` / `user.email` setzt die **Identität**, die in jeden Commit eingetragen wird (wer hat committet?). Man muss sie **einmalig** ausführen (vor dem ersten Commit); `--global` gilt für alle Repositories am Rechner. Kontrolle: `git config --global --list`.

4. **Git** ist die Versionsverwaltung selbst — sie merkt sich jeden Stand (Commit) und funktioniert auch ohne Netz. **GitHub** ist nur die *Online-Ablage* für das lokale Git-Repository.

**Wertungs-Skizze (15 P):**
- Dreiklang: pro Schritt korrekte Funktion **und** Zielangabe (vormerken → Staging / lokal festschreiben → lokales Repo / zu GitHub hochladen): **3 × 2 P = 6 P** (je 1 P Funktion, 1 P Ziel)
- „nothing to commit“ ohne `add` (Begriff **oder** sinngemäß korrekt erklärt): **3 P**
- Zweck der Konfiguration (Identität pro Commit) + „einmalig/--global“: **3 P**
- Git vs. GitHub (Versionsverwaltung lokal vs. Online-Ablage): **3 P**

---

**Gesamtpunkte: 145**
