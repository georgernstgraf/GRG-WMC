const myarray = [1, 7, 4, 2, 8, 3, 13, 11];

const sorted = myarray.sort(function(a, b) {
    console.log(`vergleiche: a: ${a}, b: ${b}`);
    return Math.random() - 0.5;
});

console.log(`Sortiert: ${sorted}`);

// bestandteile einer Funktion:
// 1. Funktionsname: Der Name der Funktion, der verwendet wird, um sie aufzurufen.
// 2. Parameter: Variablen, die in die Funktion übergeben werden, um Eingabewerte zu erhalten.
// 3. Funktionskörper: Der Block von Code, der ausgeführt wird, wenn die Funktion aufgerufen wird.
// 4. Rückgabewert: Der Wert, den die Funktion zurückgibt (optional).
