# javascript

Einiges zur Geschichte erzählt

## 1. Variablen-Deklaration: var, let und const

In modernem JavaScript (ES6+) ist die Wahl des Schlüsselworts entscheidend für Scope und Memory-Management.

* **`var` (Legacy):**
  * **Scope:** Function-scoped.
  * **Hoisting:** Wird an den Anfang des Funktions-Gültigkeitsbereichs gehoben und mit `undefined` initialisiert.
  * **Problem:** Erlaubt Mehrfach-Deklarationen im gleichen Scope, was oft zu schwer auffindbaren Bugs führt.
* **`let`:**
  * **Scope:** Block-scoped (innerhalb von `{ }`).
  * **Hoisting:** Wird zwar gehoben, befindet sich aber bis zur Deklaration in der "Temporal Dead Zone" (Zugriff führt zu `ReferenceError`).
* **`const`:**
  * **Scope:** Block-scoped.
  * **Verhalten:** Muss bei Deklaration initialisiert werden. Die Bindung ist unveränderlich (Immutable Binding), aber der Inhalt (z.B. bei Objekten oder Arrays) kann mutiert werden.
  * **Empfehlung:** Standardmäßig `const` verwenden, `let` nur wenn Neuzuweisung nötig ist.

---

### 2. Datentypen

JavaScript unterscheidet zwischen **Primitiven** (Call-by-Value) und **Objekten** (Call-by-Reference).

#### Primitive Typen

1. **Number:** 64-Bit Float (IEEE 754). Es gibt keinen separaten Integer-Typ (außer BigInt).
2. **String:** UTF-16 Zeichenfolgen.
3. **Boolean:** `true` oder `false`.
4. **BigInt:** Für beliebig große Ganzzahlen (Suffix `n`, z.B. `100n`).
5. **Symbol:** Eindeutige, unveränderliche Identifier (oft für versteckte Objekt-Properties).
6. **undefined:** Ein Typ mit dem einzigen Wert `undefined`. Erscheint bei deklarierten, aber nicht initialisierten Variablen.
7. **null:** Repräsentiert die bewusste Abwesenheit eines Wertes.

#### Komplexe Typen (Objects)

* **Object:** Key-Value Paare.
* **Array:** Eine spezielle Form des Objekts mit numerischen Indizes.
* **Function:** In JS sind Funktionen "First-Class Citizens" und technisch gesehen ebenfalls Objekte.

---

### 3. Spezielle Werte: undefined vs. null

* **`undefined`:** "Der Wert ist (noch) nicht vorhanden." (Standardwert für nicht übergebene Argumente oder nicht initialisierte Variablen).
* **`null`:** "Der Wert ist bewusst leer." (Manuelle Zuweisung).
* **Achtung:** `typeof null` ergibt historisch bedingt `"object"`, während `typeof undefined` korrekt `"undefined"` liefert.

---

### 4. Funktionen und Argumente

#### Definitionen

* **Function Declaration:** `function name() { ... }` (wird vollständig gehoistet).
* **Function Expression:** `const name = function() { ... };` (nicht gehoistet).
* **Arrow Function:** `const name = () => { ... };`
  * Haben kein eigenes `this`, `arguments` oder `super`.
  * Ideal für Callbacks und funktionale Programmierung.

#### Parameter-Handling

* **Default Parameters:** `function greet(name = "Gast") { ... }`
* **Rest Parameters:** Sammelt restliche Argumente in einem Array:

    ```javascript
    function sum(...numbers) {
      return numbers.reduce((a, b) => a + b, 0);
    }
    ```

* **Das `arguments` Objekt:** In klassischen Funktionen verfügbar (Array-ähnlich, aber kein echtes Array). In Arrow-Functions nicht vorhanden.

---

### 5. Type Casting (Coercion)

Ein zentraler Aspekt in JS, der oft zu Verwirrung führt:

* **Tricky Equality:** `==` (abstrakt) führt Typumwandlung durch, `===` (strikt) vergleicht Wert und Typ.
* **Falsy Values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`. Alles andere ist "truthy".

Für den Unterricht an der HTL bietet sich hier oft der Vergleich zu C# oder Java an, um die Vor- und Nachteile der dynamischen Typisierung gegenüber der statischen Typisierung (die du ja über TypeScript kennst) zu verdeutlichen.
