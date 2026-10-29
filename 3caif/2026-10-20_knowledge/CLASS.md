# Klassenbild: Knowledge Check 3aaif – 20. Oktober 2026

**Themen:** Tooling & Git · HTML-Grundlagen · CSS-Basics (Box-Model, Selektoren, Spezifität & Kaskade, Farben, Einheiten)
**Gesamtpunkte:** 145 · **Bewertete Abgaben:** 16
**Durchschnitt:** 118,9 von 145 Punkten (MC 95,0 / 100 · Frage 26 8,1 / 15 · Frage 27 9,8 / 15 · Frage 28 6,1 / 15)

---

## Gesamtbild

Der Multiple-Choice-Teil ist klassenweit stark: 10 von 16 Abgaben erreichen 97 Punkte oder mehr, vier davon die volle Punktzahl. Die Freitextfragen fallen deutlich ab, vor allem Frage 28 (Git-Workflow) mit durchschnittlich 6,1 von 15 Punkten. Das Muster ist eindeutig: **Reproduktionswissen ist vorhanden, das Versprachlichen und Anwenden gelingt nur teilweise.**

Auffällig ist die Spreizung innerhalb des MC-Teils weniger stark als im Freitext: Dort reicht die Spanne von 0 bis 15 Punkten pro Frage, bei Frage 28 haben vier Abgaben das Feld leer gelassen.

---

## Häufigste Fehler im Multiple-Choice-Teil

1. **Kaskade im konkreten Beispiel (Frage 21)** – der häufigste Einzelfehler. Mehrere Abgaben wählten „rot“ und begründeten dies mit der zuletzt notierten Regel, ohne zu beachten, dass ID-Selektoren Klasse und Element schlagen. Die Regel „gleiche Spezifität → letzte Regel“ wird also isoliert gekannt, aber nicht auf einen Fall mit gemischten Spezifitäten übertragen.
2. **Pflichtelemente des Grundgerüsts (Frage 6)** – wiederholt wurde der `<style>`-Block als Pflichtbaustein angekreuzt und `lang="de"` ausgelassen. Das Vierergespann `charset`, `viewport`, `lang`, `title` ist nicht durchgehend verankert.
3. **Entities (Frage 12)** – die Verwechslung `&` → `&lt;` statt `&amp;` trat mehrfach auf; in zwei Abgaben wurde zusätzlich die richtige Option d) ausgelassen.
4. **Git-Dreiklang (Frage 2)** – mehrfach wurde „`push` schreibt lokal fest“ angekreuzt und `git add .` nicht als Vormerken erkannt. Das deckt sich mit den schwachen Freitextantworten zu Frage 28.
5. **Einheiten (Frage 25)** – `em` wurde mehrfach nicht als relativ zur eigenen Schriftgröße erkannt; in einer Abgabe wurde `px` als relative Einheit angekreuzt.
6. **Spezifität anwenden (Frage 22)** – die Zusatzoption „ohne ID wird der Text blau“ blieb mehrfach leer, obwohl die Hauptfrage richtig beantwortet war. Das Wissen um die Folgen einer Änderung fehlt.
7. **Vereinzelt:** Frage 4 (Zustand vs. Historie, `a` statt `status`), Frage 5 (Rolle des W3C Validators), Frage 8 (`<main>` darf mehrfach vorkommen), Frage 17 (Box-Model-Reihenfolge von innen/außen verwechselt).

---

## Häufigste Fehler im Freitext-Teil

**Frage 26 (semantische Struktur):**
- Die Skizze bricht häufig nach `<header>`/`<footer>` ab; `<main>`, `<nav>` und `<section>` fehlen. Wo `<main>` vorkommt, ist die Einmaligkeitsregel meist richtig.
- Die Erklärung „Bedeutung statt Aussehen“ ist oft vorhanden, der Nutzen für **Screenreader und Suchmaschinen** wird aber häufig nicht genannt.
- Die dritte Teilaufgabe (`alt`) wird überdurchschnittlich oft vergessen oder falsch erklärt („damit man das Bild findet“). Das ist der häufigste Punktverlust in dieser Frage.

**Frage 27 (Box-Model und Spezifität):**
- Die Reihenfolge content → padding → border → margin sitzt bei der Mehrheit.
- Der Rechenweg ist das Problem: Der Border-Anteil wird vergessen (z. B. 300 + 20 = 320 statt 328) oder es wird mit den Werten der **anderen** Aufgabe (Frage 18: 200 px) gerechnet. `border-box` wird konzeptionell meist richtig als „wird eingerechnet“ erkannt.
- Die Farbe `darkred` wird fast immer genannt, die Begründung bleibt oft bei „die letzte Regel gewinnt“ ohne den Zusatz „gleiche Spezifität“.

**Frage 28 (Git-Workflow):**
- Häufigster Ausfall: unvollständige oder leere Antwort. Wer antwortet, beschreibt `add`/`commit`/`push` meist korrekt, lässt aber die **Zielangabe** (Staging / lokales Repo / GitHub) weg.
- „nothing to commit“ ohne vorheriges `add` ist selten bekannt; die meisten formulieren vage („dann passiert nichts“).
- Git vs. GitHub wird meist richtig getrennt (lokal vs. Online-Ablage), die Konfiguration (`user.name`/`user.email`, einmalig, `--global`) dagegen selten vollständig.

---

## Empfehlungen für den weiteren Unterricht

1. **Kaskade mit gemischten Spezifitäten üben.** Zwei bis drei Mini-Beispiele im Stil von Frage 21 (ID + Klasse + Element am selben Element, Reihenfolge vertauscht) an der Tafel durchspielen und jeweils begründen lassen, *welche* Regel gewinnt und *warum*. Die reine Merkregel „ID > Klasse > Element“ reicht nachweislich nicht.
2. **Das HTML-Grundgerüst als festes Viererschema** (`charset`, `viewport`, `lang`, `title`) wiederholt abfragen – etwa als Blitzlicht zu Beginn jeder Einheit, bis es sitzt.
3. **Box-Model-Rechnungen mit festem Rechenblatt:** „width + 2·padding + 2·border“ immer explizit hinschreiben, dazu die Gegenprobe mit `border-box`. Gegebenenfalls eine kurze Übungssequenz mit variierten Werten, damit nicht Werte aus einer früheren Aufgabe übernommen werden.
4. **Git-Dreiklang als Tabelle mit Zielorten** (vormerken → Staging, festschreiben → lokales Repo, hochladen → GitHub) und die Fehlermeldung „nothing to commit“ aktiv provozieren: im Terminal `commit` ohne `add` ausführen und die Meldung gemeinsam lesen. Das verankert die Ausnahme besser als jede Definition.
5. **Freitext systematisch trainieren.** Das Muster „Ich weiß es, schreibe es aber nicht“ ist klassenweit sichtbar. Kurze Schreibaufträge („Erkläre in drei Sätzen, was semantisches HTML ist, und nenne zwei Adressaten“) mit Stichwortvorgabe (Screenreader, Suchmaschinen, Bedeutung statt Aussehen) erhöhen die Vollständigkeit.
6. **Das `alt`-Attribut zum Standardritual machen:** bei jedem `<img>` im Unterricht mündlich begründen („Was steht hier und für wen?“). Es ist der billigste Punktverlust der ganzen Prüfung.
7. **Formale Sorgfalt bei der Abgabe:** Mehrere Abgaben hatten fehlerhafte Checkbox-Zeilen (`[]`, `[ b)`, `[a ]`) und leere Namensfelder. Eine kurze Checkliste vor der Abgabe („Name eingetragen? Jede Zeile `[ ]` oder `[X]`? Alle vier Teilaufgaben beantwortet?“) verhindert vermeidbare Verluste.

---

## Prompt Injection Attempts

0 – in keiner der 16 Abgaben wurden Manipulationsversuche festgestellt.
