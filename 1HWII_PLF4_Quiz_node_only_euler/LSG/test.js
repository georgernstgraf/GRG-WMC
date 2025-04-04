'use strict';
const fragen = require( './fragen.js' );
let imports;
if ( process.argv[ process.argv.length - 1 ] == 'lsg' ) {
    console.log( 'running loesung' );
    imports = require( './lsg.js' );
} else {
    imports = require( './plf.js' );
}
const { Frage, eulerZahl } = imports;
const tests = [
    { test: checkConstructor, punkte: 4 },
    { test: checkOptionen, punkte: 4 },
    { test: checkOptionenRW, punkte: 4 },
    { test: checkFrage, punkte: 4 },
    { test: checkFrageRW, punkte: 4 },
    { test: isRichtig, punkte: 4 },
    { test: checkConstructorEuler, punkte: 4 },
    { test: checkRWEuler, punkte: 4 }
];
function checkConstructor () {
    if ( Frage?.__proto__?.__proto__ === null || Frage?.name != 'Frage' ) {
        throw new Error( 'Konstruktor existiert nicht oder ist falsch' );
    }
    if ( typeof Frage.constructor?.name != 'string' )
        throw new Error( 'Konstruktor existiert nicht oder ist falsch' );
}
function checkOptionen () {
    fragen.forEach( ( f ) => {
        const frg = new Frage( f );
        if ( frg.optionen !== f.optionen ) {
            throw new Error(
                'Die Optionen des Objekts sind nicht die gleichen wie in der Frage'
            );
        }
    } );
}
function checkOptionenRW () {
    fragen.forEach( ( f ) => {
        let exceptionThrown = false;
        const frg = new Frage( f );
        try {
            frg.optionen = null;
        } catch {
            exceptionThrown = true;
        }
        if ( !exceptionThrown ) {
            throw new Error(
                'Optionen setzen sollte mit Exception verhindert werden'
            );
        }
    } );
}
function checkFrage () {
    fragen.forEach( ( f ) => {
        const frg = new Frage( f );
        if ( frg.frage !== f.frage ) {
            throw new Error( 'GET Frage returned nicht die Frage' );
        }
    } );
}
function checkFrageRW () {
    fragen.forEach( ( f ) => {
        const frg = new Frage( f );
        try {
            frg.frage = 'serwus';
        } catch ( e ) { }
        if ( frg.frage !== f.frage ) {
            throw new Error(
                'property frage wurde möglicherweise überschrieben'
            );
        }
    } );
}
function isRichtig () {
    fragen.forEach( ( f ) => {
        const frg = new Frage( f );
        f.optionen.forEach( ( opt ) => {
            if ( !( frg.isRichtig( opt ) === ( opt === f.antwort ) ) )
                throw new Error(
                    'Klasse kann nicht sagen ob eine Antwort richtig ist'
                );
        } );
    } );
}
function checkConstructorEuler () {
    if (
        eulerZahl?.__proto__?.__proto__ === null ||
        eulerZahl?.name != 'eulerZahl'
    ) {
        throw new Error( 'eulerZahl function existiert nicht oder ist falsch' );
    }
    if ( typeof eulerZahl.constructor?.name != 'string' )
        throw new Error( 'eulerZahl function  nicht oder ist falsch' );
}
function checkRWEuler () {
    const yourE = eulerZahl();
    if ( typeof yourE != 'number' ) {
        throw new Error( `Rückgabewert ist nicht Number, sondern ${typeof yourE}.` );
    }
    const diff = Math.abs( yourE - Math.E );
    if ( diff == NaN ) { }
    if ( diff > 1e-7 ) {
        throw new Error( `${yourE} ist zu weit daneben` );
    }
}
function doAllTests () {
    let noSucceed = 0;
    let noTest = 0;
    let maxPunkte = 0;
    let erreichtPunkte = 0;
    for ( let obj of tests ) {
        const { test, punkte } = obj;
        noTest++;
        maxPunkte += punkte;
        let line = `Test ${noTest}: ${test.name} (${punkte} P) ..`;
        try {
            test();
            noSucceed++;
            erreichtPunkte += punkte;
            line = `✅ ${line}`;
        } catch ( e ) {
            line = `❌ ${line} ${e.message}`;
        }
        console.log( `${line} (${noSucceed}/${noTest}, ${punkte} P)` );
    }
    console.log(
        `Erreichte Punkte: ${erreichtPunkte} von möglichen ${maxPunkte}`
    );
}
doAllTests();
