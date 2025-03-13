const x = 16;
const xx = x ** 2;
const sleep_ms = 150;
const msg = () => {
    console.log("X = 16, z-y ist streng monoton fallend");
};
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

function z(y) {
    return Math.sqrt(xx + y * y);
}
msg();
let said_no_more = false;
for (let y = 1; y <= 150; y++) {
    await sleep(sleep_ms);
    const res = z(y);
    if ((res - y) < 1 && !said_no_more) {
        console.log("Ab jetzt keine weiteren Lösungen möglich");
        said_no_more = true;
    }
    const l = res === Math.floor(res) ? "LÖSUNG! -- " : "";
    console.log(`${l}diff: ${res - y}, y: ${y}, z: ${res}`);
}
msg();
