# Klassenauswertung – Wissensüberprüfung 3CAIF vom 20.10.2026

**Themen:** Tooling & Git, HTML-Grundlagen, CSS-Basics (Einbindung, Farben, Einheiten), Box-Model & Sizing, HTML-Formulare
**Gesamtpunkte:** 145 (100 MC + 45 Freitext)
**Abgaben:** 27

*Diese Auswertung ist anonymisiert und für das öffentliche Repository gedacht – sie enthält bewusst keine Namen.*

---

## Ergebnisbild

| Kennzahl | Wert |
|---|---|
| Durchschnitt gesamt | 91,5 / 145 |
| Median | 92 / 145 |
| Durchschnitt Multiple Choice | 74,0 / 100 |
| Durchschnitt Freitext | 17,5 / 45 |
| Höchstwert / Tiefstwert | 124 / 45 |

Verteilung: 1 Abgabe unter 50 Punkten, 3 zwischen 50 und 74, 14 zwischen 75 und 99, 9 zwischen 100 und 124.

Das Bild ist zweigeteilt: Die Multiple-Choice-Ergebnisse liegen im Schnitt bei 74 %, der Freitext nur bei 39 %. Das Wissen ist also breiter vorhanden, als die Freitext-Punkte vermuten lassen – dort scheitern viele nicht am Verständnis, sondern an der Vollständigkeit der Antwort.

---

## Häufigste Fehler

### 1. Zu vorsichtig angekreuzt (der größte Einzelposten)

Bei weit mehr als der Hälfte der Abgaben entstehen die MC-Verluste überwiegend durch **richtige Aussagen, die leer blieben** – nicht durch falsch gesetzte Kreuze. Bei einzelnen Abgaben lagen 20 und mehr Punkte allein an diesem Muster. Einige Schüler:innen setzen pro Frage nur ein Kreuz, obwohl zwei oder drei Aussagen zutreffen. Die Aufgabenstellung („Kreuze alle zutreffenden Antworten an") wurde also nicht durchgängig als Mehrfachauswahl gelesen.

**Empfehlung:** Zu Beginn der nächsten Übungsphase eine Frage gemeinsam laut durchgehen und für jede Option einzeln entscheiden lassen („stimmt / stimmt nicht"), statt die Frage als Ganzes zu beantworten. Ein ritualisierter Satz wie „vier Optionen, vier Entscheidungen" hilft.

### 2. Box-Model-Rechnung (Frage 14 und Frage 27)

Die Rechnung `300 + 2·20 + 2·5 = 350px` wurde nur von einem Teil korrekt durchgeführt. Typische Fehler:

- Padding und Border nur einmal addiert (325px statt 350px),
- die Zahlen der vorigen Aufgabe übernommen (200px → 250px),
- Margin mitgerechnet, obwohl er nicht zur Breite zählt,
- die Verdoppelung (links und rechts) stillschweigend weggelassen.

Der zweite Teil von Frage 27 (`border-box` und warum man es die „Rettung" nennt) blieb besonders häufig ganz leer oder wurde falsch erklärt – mehrfach mit der Aussage, `border-box` „entferne" Padding und Border. Das ist der hartnäckigste inhaltliche Missstand der ganzen Prüfung.

**Empfehlung:** Eine Karteikarte mit einer festen Box (`width: 300px; padding: 20px; border: 5px`) in beiden Rechenarten durchrechnen, bis 350px und 300px sitzen. Den Merksatz „border-box an, Sorgen aus" mit der Begründung verknüpfen: deklarierte Breite = sichtbare Breite.

### 3. Radiogruppen ohne gemeinsamen `name`

In Frage 26 haben mehrere Schüler:innen drei Radiobuttons mit **drei verschiedenen `name`-Werten** gebaut (`name="super"`, `name="ok"`, `name="schlecht"`). Das ergibt drei Einzelgruppen – alle drei können gleichzeitig gewählt werden. Dasselbe Muster trat in abgeschwächter Form auch in den MC-Antworten zu Frage 21 auf.

**Empfehlung:** Merksatz „gleicher `name` = eine Gruppe, eigener `value` = eine Option" und ein kurzer Praxistest im Browser, bei dem sichtbar wird, dass sich die Auswahl nicht umschaltet.

### 4. `label for` zeigt ins Leere

Mehrfach fehlte die `id` am Eingabefeld oder sie wich vom `for`-Wert ab, sodass die Beschriftung nicht klickbar war – obwohl genau das in der Angabe gefordert war („mit klickbarer Beschriftung"). Vereinzelt wurde auch `label` ohne `for` verwendet.

**Empfehlung:** Die Paarung `for`/`id` als eigenen Prüfschritt in die Abgaberoutine aufnehmen („ein Klick auf jedes Label").

### 5. `mailto:` und Betreff

Häufig fehlte das `mailto:`-Schema, der Betreff war gar nicht umgesetzt, oder es wurde eine eigene E-Mail-Adresse bzw. eine falsch abgetippte Adresse verwendet. Das versteckte Feld `name="subject"` war kaum jemandem bekannt.

**Empfehlung:** Beide Varianten (`?subject=…` und verstecktes Feld) einmal zeigen; sie sind zwei Punkte für eine Zeile Arbeit.

### 6. Unvollständige Formulare in Frage 26

`<select>` und `<textarea>` wurden überdurchschnittlich oft vergessen, obwohl beide in der Angabe als Bausteine genannt sind. Mehrere Abgaben enthalten ein `<form>`-Tag ohne `action`, oder das Markup steht außerhalb des Codeblocks.

### 7. Einheiten (Frage 16)

Bei etwa der Hälfte der Abgaben liegt Frage 16 bei 0 bis 2 von 4 Punkten. Der Klassiker: `px` als empfohlene Einheit für Schrift und Abstände angekreuzt, `rem`/`em`/`%` leer gelassen – also genau die Umkehrung der Empfehlung.

### 8. Git: `config` und `commit`/`push`

- `git config` wurde mehrfach als Verbindung zu VS Code oder als Remote-Konfiguration beschrieben statt als Autor-Identität für Commits.
- `commit` und `push` werden in den Freitexten häufig verwechselt („commit lädt zu GitHub hoch", „push speichert lokal").
- Der dritte Teil von Frage 28 (W3C Validator, Live Server, Begründung gegen `file://`) blieb in einem Drittel der Abgaben vollständig unbeantwortet.

### 9. Freitext-Blöcke blieben leer (Formatproblem, nicht Wissenslücke)

Bei 9 von 27 Abgaben ist mindestens eine Freitext-Antwort komplett leer, bei drei Abgaben sogar alle drei – obwohl dieselben Personen die passenden MC-Fragen oft richtig beantwortet haben. Mehrfach war der HTML-Block leer, während die Erklärung darunter ausgefüllt wurde. Das sieht nach einem Bedien- bzw. Scrollproblem im Template aus, nicht nach Zeitmangel: Die leeren Stellen liegen überwiegend bei Frage 26, wo der Codeblock direkt unter der Aufgabenstellung beginnt.

**Empfehlung:** Das Template für die nächste Prüfung um je eine sichtbare Beispielzeile im Codeblock ergänzen (z. B. `<!-- hier dein <form> -->` mit einer bereits vorhandenen Zeile) und den Ablauf „bis zur letzten Zeile scrollen und jeden Block befüllen" einmal gemeinsam durchspielen. Alternativ die Freitext-Fragen vor die MC-Fragen ziehen.

### 10. Gebrauch der „–"-Markierung

Viermal wurde eine Aussage mit `–` als uneindeutig markiert. Zwei dieser Begründungen waren fachlich tragfähig (etwa der Hinweis, dass der `<head>` zwar nichts Sichtbares enthält, aber den Tab-Titel beeinflusst), eine war knapp, eine bestand nur aus „wurde nie erklärt". Die Markierung wurde also verstanden, aber nicht immer als Begründung ausgeführt.

**Empfehlung:** Beim nächsten Mal explizit sagen, dass die Markierung nur mit einem Satz Begründung zählt.

---

## Auffälligkeiten bei der Abgabe

- Bei **einer** Abgabe lagen fünf Fassungen aus dem Prüfungszeitraum vor. Zwischen der ersten und der letzten Fassung wurden 48 von 100 Optionen geändert, davon 42 von falsch auf richtig; zusätzlich wurde im Kopf der Angabe die Bedeutung der Klammern eigenmächtig umdefiniert. Die Einzelheiten liegen der Lehrperson im persönlichen Bewertungsfile vor. Die Bewertung erfolgte auf Basis der eingereichten Fassung.
- Neun Abgaben hatten das Namensfeld am Ende nicht ausgefüllt; die Zuordnung war über die Upload-Daten eindeutig.
- Vier Abgaben wichen im Dateinamen vom vorgegebenen Muster ab.
- Mehrere Abgaben enthielten Kopier-Artefakte (maskierte Klammern `\[x]`, neu umbrochener Text). Inhaltlich waren alle lesbar.

### Prompt Injection Attempts

**0.** Keine der eingelangten Dateien enthielt den Versuch, die Bewertung durch Anweisungen an ein Sprachmodell zu beeinflussen.

---

## Empfehlungen für die nächste Einheit

1. **Ankreuzroutine etablieren:** Jede Option einzeln prüfen, nicht die Frage als Ganzes. Erfahrungsgemäß bringt das in dieser Klasse 10 bis 20 Punkte pro Prüfung.
2. **Box-Model als Rechenritual:** Eine Aufgabe mit beiden `box-sizing`-Werten, bis die Zahlen sitzen – inklusive der Begründung, warum `border-box` die Überraschungsbreite verhindert.
3. **Formular-Bausteine als Checkliste:** `form action` → Betreff → `label for`/`id` → Radiogruppe (gleicher `name`) → `select` → `textarea` → Button. Diese Reihenfolge deckt praktisch alle Fehler in Frage 26 ab.
4. **Git-Dreiklang und Konfiguration trennen:** `config` = Identität, `add` = vormerken, `commit` = lokal festschreiben, `push` = hochladen; dazu die Rolle von Validator und Live Server als eigenen Qualitätssicherungs-Schritt.
5. **Template-Handling üben:** Einmal gemeinsam eine Freitext-Antwort im vorgegebenen Markdown ausfüllen und hochladen, damit die leeren Blöcke nicht wieder Punkte kosten.
