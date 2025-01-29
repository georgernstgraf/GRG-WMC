function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

function z(y) {
    return Math.sqrt(256 + y * y);
}
for (let i = 1; i <= 200; i++) {
    let res;
    await sleep(300);
    res = z(i);
    console.log(`diff: ${res - i}, y: ${i}, z: ${res}`);
}
