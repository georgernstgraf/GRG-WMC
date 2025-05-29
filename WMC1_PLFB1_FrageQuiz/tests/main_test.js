import { assert, assertEquals, assertThrows } from "@std/assert";
import * as plf from "../plf.js";
import { otdb } from "../fragen.js";
// 1
Deno.test("Class Frage exists", () => {
    assertEquals(typeof plf.Frage, "function", "Frage sollte eine Klasse sein");
    assert(
        plf.Frage instanceof Function,
        "Frage sollte als Klasse exportiert werden",
    );
});
// 2
Deno.test("constructor takes 3 arguments", () => {
    const frage1 = new plf.Frage("Frage", ["Option1", "Option2"], "Option1");
    assertEquals(frage1.frage, "Frage", "attribut frage sollte Frage sein");
    assertEquals(
        frage1.optionen,
        ["Option1", "Option2"],
        "attribut optionen sollte Option1 und Option2 sein",
    );
    assertEquals(
        frage1.antwort,
        "Option1",
        "attribut antwort sollte Option1 sein",
    );
    const frage2 = new plf.Frage("Frage2", ["OptionA", "OptionB"], "OptionB");
    assertEquals(frage2.frage, "Frage2", "attribut frage sollte Frage2 sein");
    assertEquals(
        frage2.optionen,
        ["OptionA", "OptionB"],
        "attribut optionen sollte OptionA und OptionB sein",
    );
    assertEquals(
        frage2.antwort,
        "OptionB",
        "attribut antwort sollte OptionB sein",
    );
});
// 3
Deno.test("constructor throws on false arguments", () => {
    assert(plf.Frage);
    assertThrows(() => {
        new plf.Frage();
    });
    assertThrows(() => {
        new plf.Frage("Frage");
    });
    assertThrows(() => {
        new plf.Frage("Frage", ["Option1", "Option2"]);
    });
    assertThrows(() => {
        new plf.Frage("Frage", ["Option1", "Option2"], 123);
    });
});
// 4
Deno.test("constructor throws on not included antwort", () => {
    assert(plf.Frage);
    assertThrows(() => {
        new plf.Frage("Frage", ["Option1", "Option2"], "Option3");
    }, "sollte Exception werfen");
    assertThrows(() => {
        new plf.Frage("Frage", ["Option1", "Option2"], "Option4");
    }, "sollte Exception werfen");
});
// 5
Deno.test("class Quiz exists", () => {
    assertEquals(typeof plf.Quiz, "function", "Quiz ist keine Klasse");
    assert(
        plf.Quiz instanceof Function,
        "Quiz sollte als Klasse exportiert werden",
    );
});
// 6
Deno.test("constructor takes exactly one argument", () => {
    assertThrows(() => {
        new plf.Quiz();
    });
    assertThrows(() => {
        new plf.Quiz("fragen.js", "extra");
    });
    new plf.Quiz(otdb);
});
// 7
Deno.test("fragen is an array of Frage objects", () => {
    const quiz = new plf.Quiz(otdb);
    assertEquals(Array.isArray(quiz.fragen), true, "fragen ist kein Array");
    assertEquals(
        quiz.fragen.length > 0,
        true,
        "fragen ist ein leeres Array",
    );
    for (const frage of quiz.fragen) {
        assert(
            frage instanceof plf.Frage,
            "fragen enthält kein Frage-Objekt",
        );
    }
});
// 8
Deno.test("getFragenByLength returns questions with minimum length", () => {
    const quiz = new plf.Quiz(otdb);
    const known_anwers = [{ l: 10, a: 21 }, { l: 40, a: 19 }, { l: 60, a: 12 }];
    for (const { l, a } of known_anwers) {
        const longQuestions = quiz.getFragenByLength(l);
        assert(
            Array.isArray(longQuestions),
            "getFragenByLength should return an array",
        );
        for (const frage of longQuestions) {
            assert(
                frage.frage.length >= l,
                "Questions should be at least 10 chars long",
            );
            assert(
                frage instanceof plf.Frage,
                "getFragenByLength sollte Frage-Objekte zurückgeben",
            );
        }
        assertEquals(
            longQuestions.length,
            a,
            `getFragenByLength ${l} sollte ${a} Fragen zurückgeben`,
        );
    }
});
// 9
Deno.test("sortFragenByLength returns sorted questions", () => {
    const quiz = new plf.Quiz(otdb);
    const sortedQuestions = quiz.getFragenSortedByLength();
    assert(
        Array.isArray(sortedQuestions),
        "sortFragenByLength should return an array",
    );
    assertEquals(
        sortedQuestions.length,
        quiz.fragen.length,
        "sortFragenByLength sollte die gleiche Länge wie die ursprüngliche Liste zurückgeben",
    );
    assertEquals(
        sortedQuestions.length,
        otdb.length,
        "sortFragenByLength sollte die gleiche Länge wie die ursprüngliche Liste zurückgeben",
    );

    for (let i = 1; i < sortedQuestions.length; i++) {
        assert(
            sortedQuestions[i].frage.length >=
                sortedQuestions[i - 1].frage.length,
            "Questions should be sorted by length",
        );
        assert(
            sortedQuestions[i] instanceof plf.Frage,
            "sortFragenByLength sollte Frage-Objekte zurückgeben",
        );
    }
});
// 10
Deno.test("getFragenWithOption returns questions containing option", () => {
    const quiz = new plf.Quiz(otdb);
    for (
        const { o, c } of [{ o: "Apollo", c: 3 }, { o: "Ares", c: 3 }, {
            o: "Victory",
            c: 1,
        }]
    ) {
        const questionsWithOption = quiz.getFragenWithOption(o);
        assert(
            Array.isArray(questionsWithOption),
            "getFragenWithOption should return an array",
        );
        assertEquals(
            questionsWithOption.length,
            c,
            "Should return some questions",
        );
        for (const frage of questionsWithOption) {
            assert(
                frage.optionen.includes(o),
                "Questions should contain the specified option",
            );
        }
    }
});
// 11
Deno.test("getAverageOptions returns correct number", () => {
    const quiz = new plf.Quiz(otdb);
    const avg = quiz.getAverageOptions();
    assert(
        typeof avg === "number",
        "getAverageOptions should return a number",
    );
    assert(
        !isNaN(avg),
        "getAverageOptions should not return NaN",
    );
    assertEquals(avg, 1 << 2, "Average should be positive");
});
// 12
Deno.test("getAllOptions returns unique options array", () => {
    const quiz = new plf.Quiz(otdb);
    const allOptions = quiz.getAllOptions();
    assert(Array.isArray(allOptions), "getAllOptions should return an array");
    assert(allOptions.length > 0, "Should return some options");
    const uniqueOptions = new Set(allOptions);
    assertEquals(
        uniqueOptions.size,
        allOptions.length,
        "Options should be unique",
    );
});
