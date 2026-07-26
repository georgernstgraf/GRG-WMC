console.log(1);

const versprechen = new Promise((resolve, _reject) => {
    console.log(2);
    setTimeout(() => {
        console.log(3);
        resolve("Daten sind angekommen");
        console.log(4);
    }, 1000);
});

console.log(5);

versprechen.then((wert) => {
    console.log(6);
    console.log(wert);
});

console.log(7);

// 1 -> 2 -> 5 -> 7 -> 3 -> 4 -> 6
