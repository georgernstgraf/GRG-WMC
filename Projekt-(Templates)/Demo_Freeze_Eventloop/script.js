"use strict";

var y;
const maxlogs = 3;
var count = 0;
var startDate = undefined;

function x() {
    return new Promise((resolve, reject) => {
        reject("rejecte immer");
    });
}

function go() {
    startDate = new Date();
    count = 0;
    bad("First call");
}
function good(data) {
    console.log("good called with data: ", data);
}

function bad(data) {
    if (new Date().valueOf() - startDate > 7000) {
        // dont freeze forever
        console.info(
            `not continuing the terror after 7 seconds and ${count} callbacks`
        );
        return;
    }
    count++;
    if (count <= maxlogs || count == 21) {
        console.log("bad called with data: ", data);
    }
    y = x(); // y: Promise Objekt
    y.then(good, bad);
}
