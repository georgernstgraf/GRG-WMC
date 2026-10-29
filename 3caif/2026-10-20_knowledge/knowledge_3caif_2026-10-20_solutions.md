# Knowledge Check – 3caif (Lösungen)

**Datum:** 20.10.2026
**Themen:** Tooling & Git, HTML-Grundlagen, CSS-Basics (Einbindung, Farben, Einheiten), Box-Model & Sizing, HTML-Formulare
**Gesamtpunkte:** 145

*Lösungsdatei für die Lehrperson — nicht an Schülerinnen und Schüler ausgeben.*

---

## Multiple-Choice Fragen (25 × 4 Punkte = 100 Punkte)

Jede Frage hat 4 Antwortmöglichkeiten. Kreuze alle zutreffenden Antworten an.
Du erhältst 1 Punkt für jede Option, die du richtig behandelst (angekreuzt wenn richtig, nicht angekreuzt wenn falsch).

Falls du eine Frage als mehrdeutig empfindest, kannst du **–** ankreuzen und kurz begründen.

---

### Frage 1: Git-Dreiklang

**Richtig: a ☑, b ☐, c ☑, d ☑**

- a) ✔ `git add` merkt Änderungen für den nächsten Commit vor (Stufe „vormerken“).
- b) ✘ Das Hochladen macht `git push` — `commit` schreibt nur lokal fest.
- c) ✔ `git push` überträgt die Commits zu GitHub (Stufe „hochladen“).
- d) ✔ `git commit` speichert den vorgemerkten Stand lokal dauerhaft, mit Nachricht.

---

### Frage 2: Git-Konfiguration

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ `user.name` bestimmt den Namen, der in jedem Commit erscheint.
- b) ✔ `--global` gilt für alle Repositories des Benutzerkontos.
- c) ✘ Name/E-Mail gehören in die Git-Konfiguration, nicht in eine HTML-Datei.
- d) ✔ `git config --global --list` zeigt die gesetzten Werte zur Kontrolle.

---

### Frage 3: Werkzeuge

**Richtig: a ☐, b ☑, c ☑, d ☑**

- a) ✘ `fetch` (und manche Assets) brauchen einen Server — immer Live Server, nie `file://`.
- b) ✔ DevTools öffnet man im Browser mit F12.
- c) ✔ Der W3C Validator prüft HTML/CSS auf Standard-Konformität.
- d) ✔ Live Server hostet lokal unter Port 5500 und lädt bei jedem Speichern neu.

---

### Frage 4: Git und GitHub

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ GitHub ist die Online-Ablage für das lokale Git-Repository.
- b) ✔ Git funktioniert auch ohne Netz; nur `push`/`pull` brauchen die Ablage.
- c) ✘ `git status` zeigt den Zustand (geändert/vorgemerkt) — die Historie zeigt `git log`.
- d) ✔ Ohne `remote` gibt es „No configured push destination" — erst `git remote add origin …` setzen.

---

### Frage 5: Pflichtelemente des Grundgerüsts

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ UTF-8 sorgt für korrekte Umlaute.
- b) ✔ `lang` hilft Screenreadern und Suchmaschinen.
- c) ✔ `<title>` erscheint im Browser-Tab (und in Suchergebnissen).
- d) ✘ Das viewport-Meta steuert das Layout auf Mobilgeräten, nicht Farben.

---

### Frage 6: head und body

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Im `<head>` stehen nur Metadaten (charset, viewport, title …).
- b) ✔ Alles Sichtbare steht im `<body>`.
- c) ✘ Ein sichtbares `<p>` gehört in den `<body>` — im `<head>` ist es ein Validator-Fehler.
- d) ✔ `<title>` ist Metadatum und steht im `<head>`.

---

### Frage 7: main

**Richtig: a ☑, b ☑, c ☐, d ☐**

- a) ✔ `<main>` kennzeichnet den Hauptinhalt.
- b) ✔ `<main>` darf genau einmal pro Seite vorkommen.
- c) ✘ Mehrfach-`<main>` ist ein Semantik-Fehler.
- d) ✘ Ein `div` sagt nichts über die Bedeutung — Semantik kommt vom passenden Element.

---

### Frage 8: Semantische Tags

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ `<nav>` umschließt die Navigation, nur wesentliche Links.
- b) ✔ `<aside>` ist Begleitinhalt/Randnotiz (Sidebar).
- c) ✔ `<article>` ist ein eigenständiger, in sich verständlicher Inhalt.
- d) ✘ Der Tab-Titel kommt aus `<title>` im `<head>`; `<footer>` ist der Fußbereich der Seite.

---

### Frage 9: img und alt

**Richtig: a ☑, b ☐, c ☑, d ☑**

- a) ✔ `alt` ist am `<img>` Pflicht (der Validator mahnt es an).
- b) ✘ `alt` ist Text und beeinflusst die Ladezeit nicht.
- c) ✔ Wenn das Bild nicht lädt, erscheint der `alt`-Text.
- d) ✔ `alt` beschreibt das Bild für Screenreader (Barrierefreiheit).

---

### Frage 10: Listen und Entities

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ `<ol>` = geordnete, nummerierte Liste.
- b) ✔ `<li>` ist das Listen-Element in `<ul>` und `<ol>`.
- c) ✔ `<` wird als Text per `&lt;` geschrieben, sonst wird es als Tag gelesen.
- d) ✘ Mit UTF-8 schreibt man Umlaute direkt — Entities braucht man dafür nicht mehr.

---

### Frage 11: Drei Wege, CSS einzubinden

**Richtig: a ☐, b ☑, c ☑, d ☑**

- a) ✘ Stylesheets werden im `<head>` verlinkt, nicht im `<body>`.
- b) ✔ Ein `<style>`-Block gilt nur für diese eine Datei.
- c) ✔ Das verlinkte Stylesheet gilt für beliebig viele Seiten — der Normalfall.
- d) ✔ Das `style`-Attribut wirkt auf genau ein Element (zum schnellen Testen).

---

### Frage 12: Selektoren

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ `.wichtig` wählt alle Elemente mit `class="wichtig"` (wiederverwendbar).
- b) ✔ `#start` wählt genau das Element mit `id="start"`.
- c) ✔ `p` wählt alle `<p>`-Elemente der Seite.
- d) ✘ Klassen sind fürs Styling da; IDs für Anker und JavaScript — sparsam einsetzen.

---

### Frage 13: Box-Model-Reihenfolge

**Richtig: a ☑, b ☐, c ☑, d ☑**

- a) ✔ Von innen nach außen: Content, Padding, Border, Margin.
- b) ✘ Margin ist die äußerste Fläche, am weitesten vom Inhalt entfernt.
- c) ✔ Padding liegt direkt um den Content, innen an der Border.
- d) ✔ Border liegt außerhalb des Padding, innen am Margin.

---

### Frage 14: box-sizing

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Content-box: width zählt nur den Inhalt → 200 + 2·20 + 2·5 = 250px.
- b) ✔ Border-box zählt Padding und Border in die 200px hinein — die Box bleibt 200px.
- c) ✘ Border-box entfernt nichts; es rechnet nur in die Breite hinein.
- d) ✔ `content-box` ist der Standard-Wert.

---

### Frage 15: Farben mit rgba()

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ `a` = Alpha = Deckkraft.
- b) ✔ Alpha läuft von 0 (unsichtbar) bis 1 (deckend).
- c) ✔ Alpha 0.15 ergibt eine zarte, durchscheinende Fläche (Overlay-tauglich).
- d) ✘ Alpha läuft 0–1, nicht 0–100 — `15` wäre „über 1“ und damit voll deckend.

---

### Frage 16: Einheiten

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ `rem` bezieht sich auf die Wurzel-Schriftgröße (meist 16px) — empfohlen für Schrift/Abstände.
- b) ✔ `%` bezieht sich auf die Breite bzw. Höhe des Elternelements.
- c) ✘ Für Schrift und Abstände sind `rem`/`%` empfohlen; `px` für Rahmen und feine Details.
- d) ✔ `em` bezieht sich auf die eigene Schriftgröße des Elements (skaliert mit).

---

### Frage 17: Fehlersuche mit Box-Model und CSS

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ DevTools → Elements zeigt das Box-Model-Diagramm live.
- b) ✔ Klassiker: `width` „stimmt nicht“, weil `box-sizing: border-box` fehlt.
- c) ✔ Spezifischerer Selektor gewinnt: ID schlägt Klasse schlägt Element.
- d) ✘ Farben gehen auch als Hex-Wert oder `rgb()` — `rgba()` ist nur eine Variante.

---

### Frage 18: form — action und method

**Richtig: a ☑, b ☐, c ☑, d ☑**

- a) ✔ `action` nennt die Ziel-URL der Daten.
- b) ✘ Den Query-String an der URL macht GET; POST schickt die Daten im Body.
- c) ✔ `method` bestimmt GET (Standard) oder POST.
- d) ✔ Ohne `action` schickt das Formular an die eigene Seite.

---

### Frage 19: name und label

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a) ✔ Ohne `name` wird das Feld nie gesendet — es existiert für den Server nicht.
- b) ✔ Über `name` landet der Wert als `name=wert` im Request.
- c) ✘ `name` ist der Sendeschlüssel, `id` dient für `<label for>` und CSS — verschiedene Aufgaben.
- d) ✔ `<label for="id">` verbindet Beschriftung und Feld, klickbar für Maus und Screenreader.

---

### Frage 20: Steuerelemente zuordnen

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ `<select>` + `<option>` = Dropdown.
- b) ✔ `<textarea>` = mehrzeiliges Textfeld.
- c) ✔ Checkboxen erlauben Mehrfachauswahl.
- d) ✘ Radiobuttons erlauben je Gruppe genau eine Auswahl (Mehrfachauswahl = Checkbox).

---

### Frage 21: Radiobutton-Gruppe

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ Gleicher `name` = eine Gruppe; genau eine Option wählbar.
- b) ✔ Gesendet wird `name=wert` mit dem `value` des gewählten Radiobuttons.
- c) ✔ `<label for>` macht die Beschriftung mitklickbar.
- d) ✘ Radiobuttons funktionieren gerade mit `<label>` gut — klickbare Beschriftung inklusive.

---

### Frage 22: select und Optionen

**Richtig: a ☑, b ☐, c ☑, d ☐**

- a) ✔ Gesendet wird der `value` der gewählten Option.
- b) ✘ Ist ein `value` gesetzt, wird dieser gesendet — nicht der sichtbare Text.
- c) ✔ Auch das `<select>` braucht ein `name`, sonst wird nichts gesendet.
- d) ✘ Gesendet wird nur die gewählte Option, nicht alle.

---

### Frage 23: Versand an den Mailclient

**Richtig: a ☐, b ☑, c ☑, d ☑**

- a) ✘ Ohne `mailto:` ist es keine gültige Ziel-URL — die Adresse gehört in das mailto-Schema.
- b) ✔ Die Ziel-Adresse steht im `action` (als Teil des mailto).
- c) ✔ Betreff über verstecktes Feld `name="subject"` oder per `mailto:…?subject=…`.
- d) ✔ `action="mailto:…"` öffnet beim Absenden den Mailclient.

---

### Frage 24: Pflichtfelder und Pattern

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a) ✔ `required` macht ein Feld zum Pflichtfeld.
- b) ✔ Solange das Pflichtfeld leer ist, verhindert der Browser das Absenden.
- c) ✔ `pattern` prüft den Inhalt per regulärem Ausdruck (z. B. vier Ziffern).
- d) ✘ Pflichtfelder und Pattern sind natives HTML — kein JavaScript nötig.

---

### Frage 25: Formular-Typisches

**Richtig: a ☑, b ☐, c ☑, d ☐**

- a) ✔ Button ohne `type` ist Standard-Typ `submit` — er schickt das Formular ab.
- b) ✘ Ohne `name` wird nichts gesendet, egal ob gefüllt oder leer.
- c) ✔ Beim `<textarea>` steht der Anfangswert zwischen den Tags, nicht in einem `value`-Attribut.
- d) ✘ Gesendet werden Steuerelemente mit `name` — Label-Texte sind nur Beschriftung, sie werden nicht gesendet.

---

## Freitext-Fragen (3 × 15 Punkte = 45 Punkte)

### Frage 26: Formular komplett (15 Punkte)

**Musterlösung:**

```html
<form action="mailto:feedback@example.at?subject=Feedback" method="post" enctype="text/plain">
    <label for="name">Name</label>
    <input type="text" id="name" name="name">

    <fieldset>
        <legend>Bewertung</legend>
        <input type="radio" id="super" name="bewertung" value="super">
        <label for="super">Super</label>
        <input type="radio" id="ok" name="bewertung" value="ok">
        <label for="ok">Ok</label>
        <input type="radio" id="schlecht" name="bewertung" value="schlecht">
        <label for="schlecht">Schlecht</label>
    </fieldset>

    <input type="checkbox" id="kontakt" name="kontakt">
    <label for="kontakt">Darf ich dich kontaktieren?</label>

    <label for="thema">Thema</label>
    <select id="thema" name="thema">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
    </select>

    <label for="nachricht">Nachricht</label>
    <textarea id="nachricht" name="nachricht" rows="4"></textarea>

    <button type="submit">Absenden</button>
</form>
```

*Alternative für den Betreff:* `action="mailto:feedback@example.at"` plus
`<input type="hidden" name="subject" value="Feedback">`.

**Erklärung:** Ohne `name` wird ein Feld beim Absenden nicht gesendet — `name` ist
der Schlüssel, unter dem der Wert als `name=wert` übermittelt wird.

**Punktevergabe-Skizze (15 P):**

| Kriterium | Punkte |
|---|---|
| `<form>` mit `action="mailto:…"` (Ziel-Adresse korrekt) | 2 |
| Betreff umgesetzt (`?subject=…` oder verstecktes Feld `subject`) | 2 |
| Textfeld mit `<label for>` + passender `id` (klickbare Beschriftung) | 2 |
| Radiogruppe: drei Optionen mit gleichem `name`, je eigenem `value` | 3 |
| Checkbox mit Beschriftung | 2 |
| `<select>` mit mindestens zwei `<option>` (mit `value`) | 2 |
| `<textarea>` korrekt notiert | 1 |
| Erklärung: `name` als Sendeschlüssel, ohne `name` wird nichts gesendet | 1 |
| **Summe** | **15** |

*Teilpunkte für fast richtige Lösungen vergeben; fehlende `name`-Attribute an den
Feldern maximal 2 P Abzug gesamt (doppelt bestraft wäre unverhältnismäßig).*

---

### Frage 27: Box-Model anwenden (15 Punkte)

**Musterlösung:**

1. **Vier Flächen von innen nach außen:**
   *Content* (der eigentliche Inhalt: Text/Bild) → *Padding* (Innenabstand,
   Hintergrund der Box) → *Border* (Rahmen) → *Margin* (Außenabstand, transparent,
   Abstand zu Nachbar-Elementen).

2. **Rechnung bei `content-box` (Standard):**
   `width: 300px` zählt nur den Inhalt. Dazu kommen beidseitig Padding und Border:

   ```
   300 + 2·20 (Padding) + 2·5 (Border) = 300 + 40 + 10 = 350px
   ```

   Die Box ist also 350px breit — 50px breiter als deklariert.

3. **Mit `box-sizing: border-box`:**
   `width: 300px` umfasst jetzt Content **und** Padding **und** Border — die Box
   bleibt 300px breit, der Content schrumpft entsprechend (300 − 40 − 10 = 250px).
   Man nennt es die „Rettung“, weil Abstände nicht mehr überraschend aufgeschlagen
   werden: Was man an `width` schreibt, ist die echte Breite. Merksatz:
   **„border-box an, Sorgen aus.“**

**Punktevergabe-Skizze (15 P):**

| Kriterium | Punkte |
|---|---|
| Vier Flächen korrekt benannt: Content, Padding, Border, Margin | 3 |
| Reihenfolge von innen nach außen korrekt (Padding innen an Content, Margin außen) | 2 |
| Rechenweg bei content-box sichtbar (300 + 2·20 + 2·5) | 3 |
| Ergebnis 350px korrekt | 2 |
| border-box-Effekt: width umfasst Padding + Border, Box bleibt 300px | 3 |
| Erklärung „Rettung“: keine Überraschungsbreite, deklarierte Breite gilt | 2 |
| **Summe** | **15** |

---

### Frage 28: Git-Workflow und Qualitätssicherung (15 Punkte)

**Musterlösung:**

1. **Git-Dreiklang** (in dieser Reihenfolge):
   * `git add .` — Änderungen für den nächsten Commit **vormerken** (auswählen, was rein soll).
   * `git commit -m "…"` — den vorgemerkten Stand **lokal dauerhaft festschreiben**, mit aussagekräftiger Nachricht.
   * `git push` — die Commits zur Online-Ablage **hochladen** (GitHub).
   Die Reihenfolge ist wichtig: Ohne `add` gibt es „nothing to commit“, ohne `commit` nichts zum Hochladen.

2. **`git config --global user.name` / `user.email`:**
   Git braucht die Identität, um jeden Commit einem Autor zuzuordnen — ohne gesetzten
   Namen/E-Mail weiß Git nicht, wer committet. `--global` setzt die Werte einmalig
   für alle Repositories; Kontrolle mit `git config --global --list`.

3. **Qualitätssicherung:**
   * **W3C Validator:** HTML (und CSS) vor der Abgabe prüfen — Ziel: **0 Errors**.
     Er findet z. B. fehlendes `alt` am `<img>`, ungültige Verschachtelung oder
     Inhalt im `<head>`.
   * **Live Server:** startet einen lokalen Mini-Server (Port 5500) und lädt die
     Seite bei jedem Speichern automatisch neu — so sieht man Änderungen sofort.
   * **Warum nicht `file://`:** Manche Funktionen (später `fetch`, manche Assets)
     brauchen einen echten Server; über `file://` funktionieren sie nicht.
     Deshalb immer über den Live Server testen.

**Punktevergabe-Skizze (15 P):**

| Kriterium | Punkte |
|---|---|
| Drei Befehle korrekt erklärt (vormerken / lokal festschreiben / hochladen) | je 2 = 6 |
| Reihenfolge begründet (add vor commit, commit vor push) | 1 |
| Zweck von `git config`: Autor-Identität für Commits, `--global` für alle Repos | 3 |
| W3C Validator: Prüfung auf 0 Errors + ein sinnvolles Fehlerbeispiel | 2 |
| Live Server: lokaler Server, Auto-Reload bei Speichern | 1 |
| Begründung gegen `file://` (Server-Funktionen wie fetch/Assets brauchen einen Server) | 2 |
| **Summe** | **15** |

---

**Gesamtpunkte: 145**
