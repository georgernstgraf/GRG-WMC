// ============================================================
// TESTS (vorgegeben — nicht Teil der Prüfung)
// ============================================================

// Test-Tickets für getTotalEinnahmen:
// state.ziele[0] = Bregenz(85), anzahl=2 → summe=170
// state.ziele[5] = Linz(38), anzahl=1 → summe=38
// Gesamt: 208
var testTickets = [
    new Ticket(state.ziele[0], 2, 200),
    new Ticket(state.ziele[5], 1, 50)
];

var EXPECTED_TOTAL = 208;

var EXPECTED_REGIONAL = [
    { name: 'Eisenstadt', preis: 12 },
    { name: 'Graz', preis: 35 },
    { name: 'Linz', preis: 38 },
    { name: 'St. Pölten', preis: 14 }
];

var EXPECTED_INTERCITY = [
    { name: 'Bregenz', preis: 85 },
    { name: 'Innsbruck', preis: 75 },
    { name: 'Klagenfurt', preis: 55 },
    { name: 'Salzburg', preis: 65 }
];

var EXPECTED_PRICE_ASC = [
    { name: 'Eisenstadt', preis: 12 },
    { name: 'St. Pölten', preis: 14 },
    { name: 'Graz', preis: 35 },
    { name: 'Linz', preis: 38 },
    { name: 'Klagenfurt', preis: 55 },
    { name: 'Salzburg', preis: 65 },
    { name: 'Innsbruck', preis: 75 },
    { name: 'Bregenz', preis: 85 }
];

var EXPECTED_PRICE_DESC = [
    { name: 'Bregenz', preis: 85 },
    { name: 'Innsbruck', preis: 75 },
    { name: 'Salzburg', preis: 65 },
    { name: 'Klagenfurt', preis: 55 },
    { name: 'Linz', preis: 38 },
    { name: 'Graz', preis: 35 },
    { name: 'St. Pölten', preis: 14 },
    { name: 'Eisenstadt', preis: 12 }
];

// ============================================================
// HELPER
// ============================================================

function formatZielList(items) {
    var html = '<ul class="test-received-list">';
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var name = item.name || '(kein Name)';
        var preis = typeof item.preis === 'number' ? item.preis.toFixed(2) : '(kein Preis)';
        html += '<li>' + name + ' — ' + preis + ' Euro</li>';
    }
    html += '</ul>';
    return html;
}

function setPass(elementId, message) {
    var el = document.getElementById(elementId);
    el.innerHTML = '<p class="test-pass">✅ ' + message + '</p>';
}

function setFail(elementId, message) {
    var el = document.getElementById(elementId);
    el.innerHTML = '<p class="test-fail">❌ ' + message + '</p>';
}

function setError(elementId, message) {
    var el = document.getElementById(elementId);
    el.innerHTML = '<p class="test-error">⚠️ ' + message + '</p>';
}

// ============================================================
// TEST 1: getTotalEinnahmen
// ============================================================

document.getElementById('test-total-btn').addEventListener('click', function () {
    var resultId = 'test-total-result';
    var result;

    try {
        result = getTotalEinnahmen(testTickets);
    } catch (e) {
        setError(resultId, 'Fehler beim Aufruf: ' + e.message);
        return;
    }

    if (typeof result !== 'number') {
        setFail(resultId, 'Erwartet: <code>' + EXPECTED_TOTAL + '</code> | Erhalten: <code>' + String(result) + '</code> (keine Zahl)');
        return;
    }

    if (result === EXPECTED_TOTAL) {
        setPass(resultId, 'Richtig! Ergebnis: <code>' + result + '</code>');
    } else {
        setFail(resultId, 'Erwartet: <code>' + EXPECTED_TOTAL + '</code> | Erhalten: <code>' + result + '</code>');
    }
});

// ============================================================
// TEST 2: getByTyp
// ============================================================

var typSelect = document.getElementById('test-typ-select');
var typLabel = document.getElementById('test-typ-label');
var typCountLabel = document.getElementById('test-typ-count-label');
var typExpectedList = document.getElementById('test-typ-expected');

typSelect.addEventListener('change', function () {
    var typ = typSelect.value;
    typLabel.textContent = typ;
    typCountLabel.textContent = typ;
    updateTypExpectedList(typ);
});

function updateTypExpectedList(typ) {
    var data = typ === 'Regional' ? EXPECTED_REGIONAL : EXPECTED_INTERCITY;
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += '<li>' + data[i].name + ' — ' + data[i].preis.toFixed(2) + ' Euro</li>';
    }
    typExpectedList.innerHTML = html;
}

document.getElementById('test-typ-btn').addEventListener('click', function () {
    var resultId = 'test-typ-result';
    var typ = typSelect.value;
    var expected = typ === 'Regional' ? EXPECTED_REGIONAL : EXPECTED_INTERCITY;
    var result;

    try {
        result = getByTyp(state.ziele, typ);
    } catch (e) {
        setError(resultId, 'Fehler beim Aufruf: ' + e.message);
        return;
    }

    if (!Array.isArray(result)) {
        setFail(resultId, 'Erwartet: Array mit ' + expected.length + ' Elementen | Erhalten: <code>' + String(result) + '</code> (kein Array)');
        return;
    }

    if (result.length !== expected.length) {
        setFail(resultId,
            'Erwartet: ' + expected.length + ' Ziele | Erhalten: ' + result.length + ' Ziele' +
            formatZielList(result)
        );
        return;
    }

    var allMatch = true;
    for (var i = 0; i < expected.length; i++) {
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j].name === expected[i].name && result[j].preis === expected[i].preis) {
                found = true;
                break;
            }
        }
        if (!found) {
            allMatch = false;
            break;
        }
    }

    if (allMatch) {
        setPass(resultId, 'Richtig! ' + result.length + ' Ziele gefunden.' + formatZielList(result));
    } else {
        setFail(resultId, 'Die Ziele stimmen nicht überein.' + formatZielList(result));
    }
});

// ============================================================
// TEST 3: sortByPreisAsc
// ============================================================

document.getElementById('test-asc-btn').addEventListener('click', function () {
    var resultId = 'test-asc-result';
    var result;

    try {
        result = sortByPreisAsc(state.ziele);
    } catch (e) {
        setError(resultId, 'Fehler beim Aufruf: ' + e.message);
        return;
    }

    if (!Array.isArray(result)) {
        setFail(resultId, 'Erwartet: sortiertes Array | Erhalten: <code>' + String(result) + '</code> (kein Array)');
        return;
    }

    if (result.length !== EXPECTED_PRICE_ASC.length) {
        setFail(resultId, 'Erwartet: ' + EXPECTED_PRICE_ASC.length + ' Ziele | Erhalten: ' + result.length + ' Ziele');
        return;
    }

    var allMatch = true;
    for (var i = 0; i < EXPECTED_PRICE_ASC.length; i++) {
        if (result[i].name !== EXPECTED_PRICE_ASC[i].name || result[i].preis !== EXPECTED_PRICE_ASC[i].preis) {
            allMatch = false;
            break;
        }
    }

    if (allMatch) {
        setPass(resultId, 'Richtig! Aufsteigend sortiert.' + formatZielList(result));
    } else {
        setFail(resultId,
            'Reihenfolge stimmt nicht.' + formatZielList(result)
        );
    }
});

// ============================================================
// TEST 4: sortByPreisDesc
// ============================================================

document.getElementById('test-desc-btn').addEventListener('click', function () {
    var resultId = 'test-desc-result';
    var result;

    try {
        result = sortByPreisDesc(state.ziele);
    } catch (e) {
        setError(resultId, 'Fehler beim Aufruf: ' + e.message);
        return;
    }

    if (!Array.isArray(result)) {
        setFail(resultId, 'Erwartet: sortiertes Array | Erhalten: <code>' + String(result) + '</code> (kein Array)');
        return;
    }

    if (result.length !== EXPECTED_PRICE_DESC.length) {
        setFail(resultId, 'Erwartet: ' + EXPECTED_PRICE_DESC.length + ' Ziele | Erhalten: ' + result.length + ' Ziele');
        return;
    }

    var allMatch = true;
    for (var i = 0; i < EXPECTED_PRICE_DESC.length; i++) {
        if (result[i].name !== EXPECTED_PRICE_DESC[i].name || result[i].preis !== EXPECTED_PRICE_DESC[i].preis) {
            allMatch = false;
            break;
        }
    }

    if (allMatch) {
        setPass(resultId, 'Richtig! Absteigend sortiert.' + formatZielList(result));
    } else {
        setFail(resultId,
            'Reihenfolge stimmt nicht.' + formatZielList(result)
        );
    }
});
