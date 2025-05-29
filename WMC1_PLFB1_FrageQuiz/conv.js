import { otdb } from "./otdb.js";

const fragen = otdb.map((frage) => {
    const rv = {
        frage: frage.question,
        optionen: [frage.correct_answer, ...frage.incorrect_answers],
        antwort: frage.correct_answer,
    };
    rv.optionen.sort(() => Math.random() - 0.5);
    return rv;
});

console.log("export const otdb = " + JSON.stringify(fragen, null, 4));
