### Unterrichtsplan: Von Promises zu Async/Await (60 Minuten)

#### 1. Einführung & Das einfachste Promise (10 Minuten)
**Konzept:** Was ist ein Promise? Ein Versprechen für einen zukünftigen Wert.
**Anwendungsfall:** Simulation einer API-Abfrage (Timeout).

**Code-Beispiel:**
```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Daten erfolgreich geladen!");
    }, 2000);
});

fetchData.then((data) => {
    console.log(data);
});
```

#### 2. Verkettung und reale Anwendung (15 Minuten)
**Konzept:** Promises verketten (`.then()`), um die Callback-Hölle zu vermeiden.
**Anwendungsfall:** Eine echte Web-API (z.B. JSONPlaceholder) abfragen.

**Code-Beispiel:**
```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // Umwandlung in JSON
    .then(json => console.log("Ergebnis:", json))
    .catch(error => console.error("Fehler aufgetreten:", error));
```

#### 3. Der Übergang zu Async/Await (10 Minuten)
**Konzept:** Syntactic Sugar. Den asynchronen Code so schreiben, dass er wie synchroner Code aussieht.
**Anwendungsfall:** Refactoring des vorherigen Beispiels.

**Code-Beispiel:**
```javascript
async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log("Async/Await Ergebnis:", data);
}

getTodo();
```

#### 4. Fortgeschrittene Methodik: Exception Handling (15 Minuten)
**Konzept:** Fehlerbehandlung mit `try...catch` innerhalb von `async` Funktionen.
**Anwendungsfall:** Umgang mit fehlerhaften URLs oder Server-Fehlern.

**Code-Beispiel:**
```javascript
async function getSafeData() {
    try {
        const response = await fetch('https://invalid-url.com');
        if (!response.ok) {
            throw new Error(`Server-Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fehlermeldung abgefangen:", error.message);
    } finally {
        console.log("Ladevorgang beendet.");
    }
}

getSafeData();
```

#### 5. Zusammenfassung & Übung (10 Minuten)
**Transfer:**
*   Vergleich: `.then().catch()` vs. `try...catch`.
*   Warum `await` nur in `async`-Funktionen funktioniert.
*   **Kurze Übung:** Erstelle eine Funktion, die zwei APIs nacheinander abfragt und das Ergebnis kombiniert.