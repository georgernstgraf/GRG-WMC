console.log(1);
const p = new Promise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        console.log(3);
        return resolve("Promise resolved!");
    }, 2000);
});
console.log(4);
p.then((result) => { console.log(`5: ${result}`); });
console.log(6);
console.log(p);
console.log(7);
