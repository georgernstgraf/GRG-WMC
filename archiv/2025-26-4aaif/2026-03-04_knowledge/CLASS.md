# Klassenauswertung – Wissensüberprüfung WMC – 4aaif – 2026-03-04

---

## Gesamtübersicht

- **Teilnehmende:** 10
- **Maximalpunktzahl:** 89 (44 MC + 45 Freitext)
- **Klassendurchschnitt:** 43,6 / 89 (49,0 %)
- **Median:** 40 / 89
- **Bestes Ergebnis:** 70 / 89 (78,7 %)
- **Schwächstes Ergebnis:** 23 / 89 (25,8 %)

### Punkteverteilung

| Bereich | Anzahl Schüler |
|---------|---------------|
| 70–89 Punkte | 1 |
| 60–69 Punkte | 1 |
| 50–59 Punkte | 2 |
| 40–49 Punkte | 3 |
| 30–39 Punkte | 2 |
| 20–29 Punkte | 1 |

---

## Multiple-Choice-Analyse (44 Punkte möglich)

**Durchschnitt MC:** 33,3 / 44 (75,7 %)

Der Multiple-Choice-Teil wurde insgesamt deutlich besser bearbeitet als der Freitext-Teil. Die meisten Schüler zeigen im MC-Bereich ein solides Grundwissen.

### Ergebnisse nach Frage

| Frage | Thema | Ø Punkte (/4) | Ø % | Häufigkeit 4/4 |
|-------|-------|---------------|-----|-----------------|
| 1 | `let`/`const` Scoping | 2,8 | 70 % | 3/10 |
| 2 | `typeof null` | 3,8 | 95 % | 9/10 |
| 3 | `const`-Vorteile | 3,6 | 90 % | 7/10 |
| 4 | Type Coercion (`"5"+3`) | 3,8 | 95 % | 9/10 |
| 5 | DOM-Methoden | 3,0 | 75 % | 3/10 |
| 6 | Arrow Functions | 2,8 | 70 % | 2/10 |
| 7 | Array-Iteration | 2,8 | 70 % | 4/10 |
| 8 | Template Strings | 3,2 | 80 % | 6/10 |
| 9 | Truthy Values | 2,8 | 70 % | 5/10 |
| 10 | `sort()`-Methode | 2,1 | 52,5 % | 2/10 |
| 11 | BigInt | 2,8 | 70 % | 3/10 |

### Stärkste Fragen (Ø ≥ 90 %)

- **Frage 2 – `typeof null`:** 9 von 10 Schülern haben alle 4 Optionen korrekt bewertet. Das historische Bug-Wissen ist gut verankert.
- **Frage 4 – Type Coercion:** Ebenfalls 9 von 10 perfekt. Das Verständnis der String-Konkatenation vs. numerischen Subtraktion ist solide.
- **Frage 3 – `const`-Vorteile:** 7 von 10 haben beide korrekten Optionen erkannt und die Fallen vermieden.

### Schwächste Fragen (Ø ≤ 70 %)

- **Frage 10 – `sort()`-Methode (Ø 52,5 %):** Die mit Abstand schwächste Frage. Nur 2 Schüler erreichten die volle Punktzahl. Häufigste Fehler:
  - Die lexikographische Standardsortierung wurde oft nicht erkannt.
  - Mehrere Schüler glaubten fälschlicherweise, `sort()` sortiere numerisch.
  - Die In-place-Mutation und die Vergleichsfunktion wurden häufig übersehen.

- **Frage 6 – Arrow Functions (Ø 70 %):** Nur 2 Schüler erkannten beide korrekten Optionen. Das Hoisting-Verhalten von Arrow Functions (sie werden nicht gehoistet, da sie als Expressions deklariert werden) wurde von 7 Schülern nicht erkannt.

- **Frage 7 – Array-Iteration (Ø 70 %):** Häufige Verwechslung von `for...in` (iteriert über Objekteigenschaften) mit `for...of` (iteriert über Array-Elemente). 3 Schüler wählten `for...in` statt `for...of`.

- **Frage 9 – Truthy Values (Ø 70 %):** 5 Schüler erkannten nicht alle vier Werte als truthy. Besonders `[]` (leeres Array) und `{}` (leeres Objekt) wurden nicht als truthy erkannt. Auch `"false"` als nicht-leerer String wurde gelegentlich übersehen.

- **Frage 1 – `let`/`const` Scoping (Ø 70 %):** Ein wiederkehrendes Muster: 5 Schüler kreuzten an, dass `const`-Objekte nicht verändert werden können. Das ist ein verbreitetes Missverständnis – `const` schützt die Referenz, nicht den Inhalt.

---

## Häufigste MC-Fehlmuster

### 1. `const` schützt den Inhalt von Objekten (Frage 1, Option D)

**5 von 10 Schülern** kreuzten fälschlicherweise an, dass mit `const` deklarierte Objekte nicht mehr verändert werden können. `const` verhindert nur die Neuzuweisung der Variable, nicht die Mutation des Objektinhalts. Dies ist das am weitesten verbreitete Missverständnis.

### 2. Template Strings: falsche Anführungszeichen (Frage 8)

**4 von 10 Schülern** wählten einfache oder doppelte Anführungszeichen statt Backticks für Template Strings. Template Literals funktionieren ausschließlich mit Backticks (`` ` ``).

### 3. `for...in` statt `for...of` (Frage 7)

**3 Schüler** verwechselten `for...in` (für Objekteigenschaften) mit `for...of` (für Array-Elemente). Diese Verwechslung kann in der Praxis zu Bugs führen.

### 4. `sort()` sortiert numerisch (Frage 10, Option A)

**4 Schüler** glaubten, dass `sort()` standardmäßig numerisch sortiert. In Wirklichkeit konvertiert JavaScript alle Elemente zu Strings und sortiert lexikographisch.

### 5. Arrow Functions und Hoisting (Frage 6, Option D)

**7 Schüler** erkannten nicht, dass Arrow Functions nicht gehoistet werden. Da sie als Expressions (z. B. `const fn = () => {}`) deklariert werden, unterliegen sie der Temporal Dead Zone wie `let`/`const`.

---

## Freitext-Analyse (45 Punkte möglich)

**Durchschnitt Freitext:** 9,9 / 45 (22,0 %)

Der Freitext-Teil ist die größte Schwachstelle der Klasse. Der Durchschnitt liegt bei nur 22 % – im Gegensatz zu 75,7 % im MC-Teil. Das deutet darauf hin, dass Erkennungswissen (Multiple Choice) deutlich stärker ausgeprägt ist als Erklärungswissen (Freitext).

### Frage 12 – Call-by-Value vs. Call-by-Reference (Ø 3,9 / 15)

- **4 Schüler** gaben keine Antwort.
- Von den 6 Antworten waren 2 inhaltlich fehlerhaft (falsche Zuordnung von Datentypen).
- Häufiger Fehler: Strings wurden als Referenztyp eingeordnet.
- Kaum ein Schüler lieferte ein konkretes Codebeispiel.
- **Empfehlung:** Dieses Konzept mit Speicherdiagrammen visualisieren. Zeigen, wie Variablen auf Werte vs. Referenzen zeigen. Konkrete Codebeispiele im Unterricht durchspielen, bei denen Schüler vorhersagen müssen, was passiert.

### Frage 13 – Rest-Parameter vs. `arguments` (Ø 2,0 / 15)

- **7 Schüler** gaben keine verwertbare Antwort.
- Die wenigen Antworten erfassten zwar den Kern (echtes Array vs. array-ähnlich), blieben aber oberflächlich.
- Kein einziger Schüler lieferte ein Codebeispiel für die Syntax.
- **Empfehlung:** Rest-Parameter und `arguments` direkt gegenüberstellen. Live-Coding mit `console.log(typeof arguments)` und Array-Methoden. Zeigen, dass `arguments` in Arrow Functions nicht verfügbar ist.

### Frage 14 – `eval()` Probleme (Ø 4,4 / 15)

- **2 Schüler** gaben keine Antwort.
- Die meisten Antworten nannten korrekt das Sicherheitsrisiko, blieben aber bei den Details vage.
- Der Performance-Aspekt wurde nur von der Hälfte erwähnt.
- Alternativen wurden selten konkret benannt; `JSON.parse()` und `Function()` waren den wenigsten geläufig.
- **Empfehlung:** Konkretes Beispiel für Code Injection via `eval()` zeigen. `JSON.parse()` als sichere Alternative für JSON demonstrieren. Performance-Unterschiede messbar machen (z. B. mit `performance.now()`).

---

## Zusammenfassende Empfehlungen für den Unterricht

### Sofortmaßnahmen

1. **`const` und Objektmutabilität klären:** Die Unterscheidung zwischen Referenz-Unveränderlichkeit und Inhalts-Unveränderlichkeit muss vertieft werden. Beispiel: `const arr = [1,2]; arr.push(3);` funktioniert, `arr = [4,5];` nicht.

2. **Template Strings üben:** Backtick-Syntax aktiv in Übungen einsetzen. Direkte Gegenüberstellung der drei Anführungszeichen-Varianten.

3. **`sort()` demonstrieren:** `[10, 2, 1].sort()` ergibt `[1, 10, 2]` – dieses Beispiel überrascht Schüler und verankert die lexikographische Sortierung im Gedächtnis.

### Mittelfristige Maßnahmen

1. **Freitext-Kompetenz aufbauen:** Regelmäßig kurze schriftliche Erklärungsaufgaben (3–5 Sätze) einbauen. Bewertungsraster vorab kommunizieren (Fachbegriffe, Beispiele, Vollständigkeit).

2. **`for...in` vs. `for...of` klarstellen:** Beide Schleifen nebeneinander mit Array und Objekt demonstrieren. Zeigen, warum `for...in` bei Arrays problematisch sein kann (iteriert auch über geerbte Eigenschaften).

3. **Arrow Functions vertiefen:** Hoisting-Verhalten mit konkreten Codebeispielen demonstrieren. `this`-Binding im Vergleich zu klassischen Funktionen zeigen.

### Langfristige Maßnahmen

1. **Erklärkompetenz systematisch fördern:** Die große Lücke zwischen MC- und Freitext-Ergebnissen (75,7 % vs. 22,0 %) zeigt, dass Schüler Konzepte erkennen, aber nicht erklären können. Peer-Teaching, Erklärrunden und schriftliche Mini-Aufgaben helfen, dieses Defizit zu beheben.

2. **Truthy/Falsy-Werte visualisieren:** Eine vollständige Tabelle aller Falsy-Werte (`false`, `0`, `""`, `null`, `undefined`, `NaN`) erstellen und alle anderen als truthy kennzeichnen. Interaktive Übungen im Browser.
