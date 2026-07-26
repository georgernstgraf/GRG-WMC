# Klassenanalyse – Knowledge Check 4BKIF

**Datum:** 26. März 2026  
**Teilnehmende:** 10 Studierende  
**Durchschnitt:** 49,3 Punkte (58%)

---

## Allgemeine Beobachtungen

Die Wissensüberprüfung zeigte eine breite Streuung der Ergebnisse. Während einige Studierende die praktischen Programmieraufgaben exzellent lösten, hatten andere Schwierigkeiten mit den theoretischen Konzepten oder der Code-Syntax.

---

## Häufigste Fehler

### Multiple-Choice-Bereich

1. **Arrow Functions und this-Binding**
   - Viele Studierende kreuzten fälschlicherweise an, dass Arrow Functions ein eigenes `this`-Binding hätten.
   - Empfehlung: Diesen Aspekt deutlicher erklären – Arrow Functions erben `this` vom umgebenden Scope.

2. **reduce-Parameter-Reihenfolge**
   - Die Parameter-Reihenfolge `(akkumulator, aktuellerWert)` wurde oft verwechselt.
   - Empfehlung: Mnemotechnische Hilfen anbieten, z.B. "A vor A" (Akkumulator vor aktuellem Wert).

3. **String "false" als Falsy-Wert**
   - Viele hielten den String `"false"` für einen Falsy-Wert.
   - Empfehlung: Deutlich machen, dass nur nicht-leere Strings truthy sind, unabhängig vom Inhalt.

4. **JSON.stringify mit verschachtelten Objekten**
   - Viele glaubten, `JSON.stringify()` könne nicht mit verschachtelten Objekten umgehen.
   - Empfehlung: Praktische Beispiele mit verschachtelten Daten zeigen.

5. **slice-Eigenschaften**
   - Die Immutabilität von `slice()` und die Index-Logik wurden oft nicht erkannt.
   - Empfehlung: Visualisierung der slice-Indexierung (start inklusiv, end exklusiv).

### Freitext-Bereich

1. **Template-String-Syntax**
   - Häufiger Fehler: Verwendung von einfachen Anführungszeichen `'` statt Backticks `` ` ``.
   - Der Unterschied wurde in mehreren Abgaben nicht beachtet.
   - Empfehlung: Die Backtick-Taste auf der Tastatur zeigen und üben.

2. **Unvollständige Antworten**
   - Viele Studierende beantworteten nicht alle Teile einer Frage.
   - Besonders bei Frage 13 fehlten oft Code-Beispiele oder Erklärungen.
   - Empfehlung: Aufgabenstellung genauer lesen – alle Teile beantworten.

3. **Falscher Ansatz bei filter/map**
   - Einige Studierende nutzten for-Schleifen statt der geforderten Array-Methoden.
   - Andere nutzten den ternären Operator statt filter/map.
   - Empfehlung: Die funktionale Programmierung mit Array-Methoden üben und deren Vorteile betonen.

4. **reduce-Logik**
   - Bei der Durchschnittsberechnung wurde oft bei jedem Schritt dividiert statt am Ende.
   - Syntaxfehler bei Arrow Functions (Tippfehler wie `/` statt `=>`).
   - Empfehlung: Step-by-step reduce-Beispiele durchgehen.

---

## Empfehlungen für den Unterricht

1. **Truthy/Falsy vertiefen**
   - Die 8 Falsy-Werte sollten auswendig gelernt werden.
   - Code-Beispiele mit `if`-Bedingungen für beide Fälle üben.
   - Besonders den Unterschied zwischen `false` (boolean) und `"false"` (String) betonen.

2. **Array-Methoden praktisch üben**
   - Mehr Übungsaufgaben mit filter/map/reduce-Verkettung.
   - Von einfachen zu komplexen Beispielen fortschreiten.
   - Method Chaining als Best Practice etablieren.

3. **Syntax-Genauigkeit fördern**
   - Code-Reviews im Unterricht durchführen.
   - Häufige Syntaxfehler sammeln und gemeinsam korrigieren.
   - IDE-Features wie Syntax-Highlighting nutzen.

4. **reduce-Methode intensiver behandeln**
   - Die Methode ist oft die schwierigste für Studierende.
   - Visualisierung des Akkumulators während der Iteration.
   - Mehrere Anwendungsbeispiele (Summe, Maximum, Gruppierung).

---

## Positives

- Die Studierenden, die die filter/map/reduce-Aufgaben lösten, zeigten sehr sauberen Code.
- Das Verständnis von Type Coercion war allgemein gut.
- Template Strings wurden von den meisten korrekt angewendet (wenn Backticks verwendet wurden).
