async function getData() {
    console.log("1"); // object
    const antwort = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log("2", antwort.status); // 200
    if (!antwort.ok) {
        throw new Error("Fehler beim Laden der Daten");
    }
    console.log("3");
    const daten = await antwort.json();
    console.log("4");
    return daten;
}
// MAIN CODE
console.log("0");
let daten;
try {
    daten = await getData();
    console.log("6", daten);
} catch (fehler) {
    console.log("7", fehler);
}
