# Wissensüberprüfung - WMC - Klasse 4aaif - LÖSUNGEN

**Datum:** 2026-02-25

## Multiple-Choice Fragen

**1. Was ist der Unterschied zwischen `==` und `===` in JavaScript?**

- [ ] `==` vergleicht nur Referenzen, `===` vergleicht Werte.
- [ ] `===` ist ein Zuweisungsoperator.
- [x] `==` führt vor dem Vergleich eine automatische Typumwandlung (Coercion) durch.
- [x] `===` prüft auf Wertgleichheit und strikte Typgleichheit.

**2. Welche der folgenden Werte gelten in JavaScript als "falsy"?**

- [x] `0`
- [ ] `"false"` (Dies ist ein truthy String)
- [x] `null`
- [x] `undefined`

**3. Welche Eigenschaften treffen auf Arrow-Functions (`() => {}`) zu?**

- [ ] Sie haben immer ein eigenes `arguments` Objekt.
- [x] Sie haben kein eigenes `this`.
- [x] Sie eignen sich besonders gut als Callbacks.
- [ ] Sie werden vollständig "gehoistet".

**4. Wie kann man mit modernem JavaScript sicherstellen, dass eine Variable nur im aktuellen Block (`{ }`) gültig ist und ihre Bindung nicht neu zugewiesen werden kann?**

- [ ] Mit dem Keyword `var`.
- [ ] Mit dem Keyword `let`.
- [x] Mit dem Keyword `const`.
- [ ] Mit dem Keyword `static`.

**5. Wie liest man den numerischen Wert eines HTML `<input type="number" id="myInput">` Elements am besten in JavaScript aus?**

- [ ] `document.getElementById("myInput").innerHTML`
- [ ] `document.getElementById("myInput").textContent`
- [x] `document.getElementById("myInput").valueAsNumber`
- [ ] `document.getElementById("myInput").getNumber()`

**6. Was ist die Problematik der Funktion `eval()`?**

- [x] Sie stellt ein erhebliches Sicherheitsrisiko dar (Code Injection).
- [x] Sie ist oft langsamer als herkömmlicher Code, da die JavaScript-Engine den Code nicht im Voraus optimieren kann.
- [ ] Sie kann nur Zahlen addieren.
- [ ] Sie funktioniert in modernen Browsern nicht mehr.

**7. Wie iteriert man in modernem JavaScript elegant über ein Array `a`, wenn man sowohl den Index als auch den Wert benötigt?**

- [x] `for (const [index, value] of a.entries()) { ... }`
- [ ] `for (let i = 0; a.length < i; i++) { ... }`
- [ ] `for (const index in a.values()) { ... }`
- [ ] `a.each((index, value) => { ... })`

**8. Welcher Datentyp wird für beliebig große Ganzzahlen in JavaScript verwendet und wie wird er notiert?**

- [x] `BigInt`, durch Anhängen eines `n` (z.B. `10n`).
- [ ] `long`, durch Anhängen eines `L` (z.B. `10L`).
- [ ] `LargeNumber`, instanziiert mit `new LargeNumber(10)`.
- [ ] JavaScript unterstützt standardmäßig keine beliebig großen Ganzzahlen.

**9. Wofür wird die Methode `document.querySelector()` verwendet?**

- [x] Um das erste Element im Dokument zu finden, das auf einen bestimmten CSS-Selektor passt.
- [ ] Um alle Elemente im Dokument zu finden, die auf einen bestimmten CSS-Selektor passen.
- [ ] Um eine Datenbankabfrage direkt aus dem Browser zu starten.
- [ ] Um ein neues HTML-Element im DOM zu erstellen.

**10. Wie sortiert man ein Array `a` in JavaScript mit einer benutzerdefinierten Sortierfunktion?**

- [x] `a.sort((e1, e2) => { ... })` wobei typischerweise ein Wert `< 0`, `0` oder `> 0` zurückgegeben wird.
- [ ] `a.orderBy((e1, e2) => { ... })`
- [ ] `Array.sort(a, (e1, e2) => { ... })`
- [ ] `a.sort()` sortiert automatisch jedes Array immer korrekt aufsteigend, unabhängig vom Datentyp.

## Freitext-Fragen

**Frage 11:**
Erklären Sie den Unterschied zwischen `undefined` und `null` in JavaScript. Wann tritt welcher Wert typischerweise auf?

**Lösung:**

- `undefined`: Bedeutet, dass ein Wert (noch) nicht vorhanden ist. Es ist der Standardwert für nicht initialisierte Variablen (z.B. `let x;`) oder für Funktionsparameter, für die kein Argument übergeben wurde.
- `null`: Repräsentiert die bewusste Abwesenheit eines Wertes. Entwickler weisen `null` manuell zu, um auszudrücken, dass eine Variable absichtlich keinen (gültigen) Wert enthält.

**Frage 12:**
Beschreiben Sie kurz die "Temporal Dead Zone" (TDZ) im Zusammenhang mit der Deklaration von Variablen über `let` und `const`.

**Lösung:**
Die "Temporal Dead Zone" (TDZ) bezeichnet den Zeitraum zwischen dem Eintritt in den Gültigkeitsbereich (Scope) einer Variable und ihrer tatsächlichen Initialisierung. Obwohl Variablen, die mit `let` und `const` deklariert werden, "gehoistet" (an den Anfang des Scopes gehoben) werden, kann auf sie vor der Zeile ihrer Deklaration nicht zugegriffen werden. Ein solcher Zugriffsversuch wirft einen `ReferenceError`.

**Frage 13:**
Erklären Sie, warum Sie beim Sortieren eines Arrays, das unterschiedliche Datentypen (z.B. Strings, Numbers, Booleans) enthält, eine eigene Sortierfunktion übergeben sollten, und skizzieren Sie in Worten kurz die Logik einer solchen Sortierfunktion (wie z.B. in der letzten Übung besprochen).

**Lösung:**
Die Standard-Sortierfunktion von JavaScript wandelt alle Elemente in Strings um und sortiert diese lexikografisch. Dies führt bei Zahlen oder unterschiedlichen Datentypen oft zu ungewünschten Ergebnissen (z.B. `10` kommt vor `2` im String-Vergleich).
Um ein Array mit gemischten Datentypen sinnvoll zu sortieren, übergibt man eine eigene Compare-Funktion. Die Logik sollte zuerst den Datentyp der beiden Elemente vergleichen (z.B. mit `typeof`). Sind die Typen unterschiedlich, wird typischerweise alphabetisch nach dem Namen des Datentyps sortiert. Sind die Typen gleich, werden in einem zweiten Schritt die tatsächlichen Werte (z.B. als Zahlenwerte oder alphabetisch bei Strings) miteinander verglichen.
