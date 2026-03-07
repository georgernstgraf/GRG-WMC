# Wissensüberprüfung - WMC - Klasse 4aaif - LÖSUNGEN

**Datum:** 2026-03-04

## Multiple-Choice Fragen

**1. Welche der folgenden Aussagen zu `let` und `const` in JavaScript sind korrekt?**

- [ ] `let`-Variablen sind function-scoped wie bei `var`. ❌
- [x] `const`-Variablen müssen bei der Deklaration initialisiert werden. ✅
- [x] `let` und `const` sind beide block-scoped. ✅
- [ ] Mit `const` deklarierte Objekte können nicht mehr verändert werden. ❌ (Die Referenz ist unveränderlich, aber die Inhalte von Objekten/Arrays können mutiert werden)

**2. Was gibt `typeof null` in JavaScript zurück und warum?**

- [ ] `"null"` - null ist ein eigener primitiver Datentyp. ❌
- [x] `"object"` - ein historischer Bug in JavaScript, der aus Kompatibilitätsgründen nie behoben wurde. ✅
- [ ] `"undefined"` - null und undefined werden gleich behandelt. ❌
- [ ] Der Rückgabewert ist implementierungsabhängig und variiert zwischen Browsern. ❌

**3. Welche Vorteile bietet die Verwendung von `const` gegenüber `let`?**

- [ ] `const` ist schneller in der Ausführung. ❌
- [x] `const` verhindert versehentliche Neuzuweisungen und macht den Code vorhersehbarer. ✅
- [ ] `const`-Variablen können in globalen Scopes verwendet werden, `let` nicht. ❌
- [x] Die Verwendung von `const` signalisiert anderen Entwicklern, dass sich die Referenz nicht ändert. ✅

**4. Was ist das Ergebnis von `"5" + 3` und `"5" - 3` in JavaScript?**

- [x] `"53"` und `2` ✅
- [ ] `8` und `2` ❌
- [ ] `"53"` und `"2"` ❌
- [ ] `8` und `"2"` ❌

**5. Welche Methoden stehen zur Verfügung, um auf DOM-Elemente zuzugreifen?**

- [x] `document.getElementById("id")` ✅
- [x] `document.querySelector(".class")` ✅
- [ ] `document.findElement("tag")` ❌ (existiert nicht)
- [x] `document.getElementsByClassName("class")` ✅ (auch wenn querySelector bevorzugt wird)

**6. Was ist eine Eigenschaft von Arrow Functions, die sie von klassischen Funktionsdeklarationen unterscheidet?**

- [ ] Arrow Functions können nicht als Methoden in Objekten verwendet werden. ❌
- [x] Arrow Functions haben kein eigenes `this`-Binding und erben `this` vom umgebenden Scope. ✅
- [ ] Arrow Functions können keine Default-Parameter haben. ❌
- [x] Arrow Functions werden nicht gehoistet. ✅ (da sie als Expressions deklariert werden)

**7. Welche Schleifen-Variante ist in modernem JavaScript empfohlen, um über Array-Elemente zu iterieren?**

- [ ] `for (let i = 0; i < array.length; i++)` ❌ (funktioniert, aber nicht die modernste Variante)
- [x] `for (const item of array)` ✅
- [ ] `for (const index in array)` ❌ (iteriert über alle aufzählbaren Eigenschaften, nicht nur Array-Indizes)
- [x] `array.forEach((item) => { ... })` ✅

**8. Was ist die korrekte Syntax für einen Template String in JavaScript?**

- [ ] `"Hallo ${name}"` mit doppelten Anführungszeichen ❌
- [ ] `'Hallo ${name}'` mit einfachen Anführungszeichen ❌
- [x] `` `Hallo ${name}` `` mit Backticks ✅
- [ ] Template Strings funktionieren nur mit der `String.template()`-Methode. ❌

**9. Welche der folgenden Werte sind in JavaScript "truthy" (werden als wahr ausgewertet)?**

- [x] `"0"` (String mit Null) ✅ (nicht-leerer String ist truthy)
- [x] `[]` (leeres Array) ✅ (Objekte sind truthy)
- [x] `{}` (leeres Objekt) ✅ (Objekte sind truthy)
- [x] `"false"` (String mit dem Wort false) ✅ (nicht-leerer String ist truthy)

**10. Wie funktioniert die `sort()`-Methode bei Arrays in JavaScript?**

- [ ] Sie sortiert Zahlen standardmäßig numerisch aufsteigend. ❌
- [x] Sie konvertiert alle Elemente zu Strings und sortiert sie lexikographisch. ✅
- [x] Die Methode sortiert das Array in-place (mutiert das Original). ✅
- [x] Für eine benutzerdefinierte Sortierung gibt die Vergleichsfunktion negative, null oder positive Werte zurück. ✅

**11. Was ist BigInt in JavaScript und wie wird es erstellt?**

- [x] Ein spezieller Datentyp für beliebig große Ganzzahlen. ✅
- [x] Durch Anhängen des Buchstabens `n` an eine Zahl, z.B. `123n`. ✅
- [x] Mit der Funktion `BigInt("123")`. ✅
- [ ] BigInt kann mit normalen Number-Werten gemischt in Berechnungen verwendet werden. ❌ (BigInt und Number können nicht direkt gemischt werden, z.B. `1n + 2` wirft einen TypeError)

## Freitext-Fragen

**Frage 12:**
Erklären Sie den Unterschied zwischen "Call-by-Value" und "Call-by-Reference" in JavaScript. Geben Sie jeweils ein Beispiel für einen Datentyp an.

**Musterlösung:**

- **Call-by-Value**: Primitive Datentypen (Number, String, Boolean, null, undefined, Symbol, BigInt) werden als Kopie übergeben. Änderungen an der Kopie beeinflussen nicht das Original.
- **Call-by-Reference**: Objekte (inkl. Arrays und Functions) werden als Referenz übergeben. Änderungen an der Referenz beeinflussen das Original.

**Beispiele:**

- Primitive: `let a = 5; let b = a; b = 10;` → `a` bleibt 5
- Objekte: `let arr = [1, 2]; let arr2 = arr; arr2.push(3);` → `arr` ist nun `[1, 2, 3]`

**Frage 13:**
Beschreiben Sie die Funktionsweise von Rest-Parametern (`...args`) in JavaScript-Funktionen und erklären Sie den Unterschied zum `arguments`-Objekt in klassischen Funktionen.

**Musterlösung:**

- **Rest-Parameter (`...args`)**: Sammelt alle restlichen Argumente in ein echtes Array. Funktioniert auch in Arrow Functions. Beispiel: `function sum(...numbers) { ... }`
- **`arguments`-Objekt**: Ist in klassischen Funktionen verfügbar, aber kein echtes Array (Array-ähnlich, hat z.B. keine `forEach`-Methode). Existiert nicht in Arrow Functions.
- **Unterschied**: Rest-Parameter ist modern, ein echtes Array und funktioniert überall. `arguments` ist älter, kein echtes Array und nicht in Arrow Functions verfügbar.

**Frage 14:**
Warum gilt `eval()` als problematisch in JavaScript? Nennen Sie mindestens zwei Gründe und erklären Sie, welche Alternativen es gibt.

**Musterlösung:**
**Probleme von `eval()`:**

1. **Sicherheitsrisiko**: Code Injection - beliebiger Code kann ausgeführt werden, was zu Sicherheitslücken (XSS) führt
2. **Performance**: Die JavaScript-Engine kann den Code nicht im Voraus optimieren, da `eval()` zur Laufzeit ausgeführt wird
3. **Debugging**: Schwer zu debuggen, da der Code dynamisch erzeugt wird

**Alternativen:**

- Für mathematische Berechnungen: `Function()` Konstruktor oder spezialisierte Parser/Math-Bibliotheken
- Für JSON: `JSON.parse()` statt `eval()`
- Für dynamischen Code: Besser strukturierte Funktionen oder Maps mit Funktionen verwenden
