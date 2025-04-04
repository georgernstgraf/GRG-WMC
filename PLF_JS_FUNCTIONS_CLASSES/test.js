// + name : String
// + groesseM : Number
// + gewichtKG : Number
// toString() : String
// getBmi() : Number// Code snippet: https://www.codewars.com/kata/56f173a35b91399a05000cb7/solutions/javascript

import { Person } from './plf.js';
const tests = [
    testPersonExists,
    testPersonConstr,
    testPersonString,
    testPersonBMI,
    testVorName,
    testNachName,
    testGroesseCM,
    testUntergewicht,
    testNormalgewicht,
    testUebergewicht,
    testWrongGender,
];

function testWrongGender() {
    testPersonExists();
    let thrown = false;
    try {
        const p = new Person('John Doe', 'x', 1.8, 80);
    } catch (e) {
        thrown = true;
    }
    if (!thrown) {
        throw new Error('wrong gender should be not allowed');
    }
}
function testUntergewicht() {
    const p = getDuenn();
    const exprected = 'Untergewicht';
    const actual = p.getGewichtType();
    if (actual !== exprected) {
        throw new Error(
            `Person.getGewichtType() is not ${exprected} but ${actual}`
        );
    }
}
function testNormalgewicht() {
    const p = getJohn();
    const exprected = 'Normalgewicht';
    const actual = p.getGewichtType();
    if (actual !== exprected) {
        throw new Error(
            `Person.getGewichtType() is not ${exprected} but ${actual}`
        );
    }
}
function testUebergewicht() {
    const p = getDick();
    const exprected = 'Übergewicht';
    const actual = p.getGewichtType();
    if (actual !== exprected) {
        throw new Error(
            `Person.getGewichtType() is not ${exprected} but ${actual}`
        );
    }
}
function getJohn() {
    return new Person('John Doe', 'm', 1.8, 80);
}
function getDick() {
    return new Person('Eva Schwerlich', 'f', 1.6, 120);
}
function getDuenn() {
    return new Person('Peter Leicht', 'm', 1.9, 50);
}
function testGroesseCM() {
    const p = getJohn();
    const exprected = 180;
    const actual = p.groesseCM();
    if (actual !== exprected) {
        throw new Error(`Person.groesseCM() is not ${exprected} but ${actual}`);
    }
}
function testVorName() {
    const p = getJohn();
    const exprected = 'John';
    const actual = p.vorName();
    if (actual !== exprected) {
        throw new Error(`Person.vorName() is not ${exprected} but ${actual}`);
    }
}
function testNachName() {
    const p = getJohn();
    const exprected = 'Doe';
    const actual = p.nachName();
    if (actual !== exprected) {
        throw new Error(`Person.nachName() is not ${exprected} but ${actual}`);
    }
}
function testPersonBMI() {
    const p = getJohn();
    const exprected = 24.69;
    const actual = Math.floor(p.getBmi() * 100) / 100;
    if (actual !== exprected) {
        throw new Error(`Person.getBmi() is not ${exprected} but ${actual}`);
    }
}

function testPersonString() {
    const p = getJohn();
    const exprected = 'John Doe (180cm, 80kg)';
    if (p.toString() !== exprected) {
        throw new Error(`Person.toString() is not ${exprected}`);
    }
}
function testPersonConstr() {
    const p = getJohn();
    if (p.name !== 'John Doe') {
        throw new Error('Person name is not John Doe');
    }
    if (p.groesseM !== 1.8) {
        throw new Error('Person groesseM is not 1.8');
    }
    if (p.gewichtKG !== 80) {
        throw new Error('Person gewichtKG is not 80');
    }
}
function testPersonExists() {
    if (typeof Person !== 'function') {
        throw new Error('Person class does not exist');
    }
}

function doAllTests() {
    let noSucceed = 0;
    let noTest = 0;
    for (let test of tests) {
        noTest++;
        let line = `Test #${noTest} (${test.name}): `;
        try {
            test();
            noSucceed++;
            line = `✅ ${line}`;
        } catch (e) {
            line = `❌ ${line} ${e.message}`;
        }
        console.log(`${line} (${noSucceed} OK von ${noTest})`);
    }
}

doAllTests();
