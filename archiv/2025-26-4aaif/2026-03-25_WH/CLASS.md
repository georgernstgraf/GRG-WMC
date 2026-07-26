# Klassenanalyse – Knowledge Check 4aaif

**Datum:** 25.03.2026  
**Themen:** JavaScript im Browser, Array-Methoden (filter, map, reduce)  
**Teilnehmer:** 10 Abgaben

---

## Gesamtübersicht

| Punktbereich | Anzahl | Prozentsatz |
|--------------|--------|-------------|
| 0–20 Punkte | 3 | 30% |
| 21–50 Punkte | 1 | 10% |
| 51–70 Punkte | 2 | 20% |
| 71–85 Punkte | 4 | 40% |

**Durchschnitt:** 48,7 Punkte (57%)  
**Beste Leistung:** 81/85 (95%)  
**Häufigste Probleme:** Siehe unten

---

## Häufigste Fehler in Multiple-Choice-Fragen

### 1. Arrow Functions und `this` (Frage 1)

**Problem:** Viele Schüler haben nicht erkannt, dass Arrow Functions kein eigenes `this` haben.

**Empfehlung:** 
- Konkrete Code-Beispiele zeigen, wo Arrow Functions vs. klassische Functions unterschiedlich reagieren
- Besonders bei Event-Handlern und Objekt-Methoden demonstrieren

### 2. `map()` gibt neues Array zurück (Frage 3)

**Problem:** Die Eigenschaft, dass `map()` ein neues Array mit gleicher Länge zurückgibt und das Original nicht verändert, wurde oft übersehen.

**Empfehlung:**
- Im Unterricht explizit auf die „Pure Function"-Eigenschaft eingehen
- Vergleich mit `splice()` oder `sort()` (die das Original verändern)

### 3. `getElementById` gibt `null` zurück (Frage 5)

**Problem:** Die Fehlerbehandlung bei nicht gefundenen Elementen wurde nicht erkannt.

**Empfehlung:**
- Praktische Beispiele mit `console.log()` zeigen, was passiert, wenn die ID nicht existiert
- Defensive Programmierung thematisieren

### 4. Inline-Scripts im `<head>` (Frage 9)

**Problem:** Viele wussten nicht, dass Scripts auch im `<head>` platziert werden können.

**Empfehlung:**
- HTML-Struktur wiederholen
- Unterschied zwischen `<head>` und `<body>` Scripts (defer, async) erklären

---

## Häufigste Fehler in Freitext-Fragen

### 1. Fehlende Erklärungen (Frage 11 und 13)

**Problem:** Mehrere Schüler haben korrekten Code geschrieben, aber die geforderten Erklärungen weggelassen.

**Empfehlung:**
- Aufgabenstellung genauer lesen üben
- Erklärungen explizit einfordern und bewerten
- Checkliste für Aufgabenbearbeitung einführen

### 2. Case-Sensitivity bei JavaScript (Frage 12)

**Problem:** `backgroundcolor` statt `backgroundColor` geschrieben.

**Empfehlung:**
- CamelCase-Konvention bei JavaScript-Eigenschaften betonen
- Häufige Fehlerquellen (wie `onclick` vs `onClick`) sammeln und üben

### 3. Variablennamen inkonsistent (Frage 12)

**Problem:** Variable als `background` deklariert, aber `box` verwendet.

**Empfehlung:**
- Bedeutung sprechender Variablennamen betonen
- Code-Reviews im Unterricht durchführen
- Debugger-Nutzung zeigen (würde ReferenceError sofort anzeigen)

### 4. `reduce()` nicht verwendet (Frage 13)

**Problem:** Ein Schüler hat `for`-Schleife statt `reduce()` verwendet, obwohl explizit gefordert.

**Empfehlung:**
- Wichtigkeit der Aufgabenstellung betonen
- `reduce()` mit mehr praktischen Beispielen üben
- Alternative Lösungswege zwar zulassen, aber auf Anforderungen hinweisen

### 5. Syntaxfehler bei `reduce()` (Frage 13)

**Problem:** Klammern falsch gesetzt bei der `reduce()`-Syntax.

**Empfehlung:**
- Syntax von komplexen Ausdrücken schrittweise aufbauen
- Callback-Funktionen als Parameter explizit erklären
- Live-Coding mit sofortiger Fehlerbehebung

---

## Besondere Beobachtungen

### Falsches Prüfungsformat

Ein Schüler hat eine komplett andere Prüfung eingereicht (Themen: let/const, typeof, BigInt). Dies deutet auf:
- Verwechslung mit alter Prüfung
- Unklare Kommunikation der aktuellen Aufgabenstellung

**Empfehlung:** Prüfungstitel und -datum prominent kennzeichnen.

### Leere Abgaben

Zwei Schüler haben komplett leere Prüfungen eingereicht. Dies erfordert individuelle Klärung:
- War die Abgabe fristgerecht?
- Gab es technische Probleme?
- Handelt es sich um Verständnisschwierigkeiten?

---

## Empfehlungen für den weiteren Unterricht

### Kurzfristig

1. **`reduce()` intensivieren** – Die komplexeste Array-Methode braucht mehr Übung
2. **CamelCase-Regeln** – Kurze Wiederholung der JavaScript-Konventionen
3. **Aufgabenstellung lesen** – Strategien für sorgfältiges Lesen einüben

### Mittelfristig

1. **Code-Reviews** – Schüler gegenseitig Code überprüfen lassen
2. **Live-Coding** – Häufige Fehler live demonstrieren und korrigieren
3. **Debugging-Übungen** – Fehlerhaften Code finden und reparieren

### Langfristig

1. **Projektarbeit** – Array-Methoden in größerem Kontext anwenden
2. **Best Practices** – Konsistente Variablennamen, sprechender Code
3. **Fehlerkultur** – Fehler als Lernchancen begreifen

---

## Materialien für Nachbereitung

- Lösungsdatei im Git-Repository verfügbar
- Übungsblätter zu `reduce()` empfehlen
- Code-Beispiele für Arrow Functions vs. klassische Functions

---

*Erstellt am 27.03.2026*