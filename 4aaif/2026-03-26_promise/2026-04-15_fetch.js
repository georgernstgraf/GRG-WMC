console.log("1"); // object
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((antwort) => {
        console.log("2", antwort.status); // 200
        if (!antwort.ok) {
            throw new Error("Fehler beim Laden der Daten");
        }
        return antwort.json();
    })
    .then((daten) => {
        console.log("3", daten);
    })
    .catch((fehler) => {
        console.log("4", fehler);
    });

console.log("5");
