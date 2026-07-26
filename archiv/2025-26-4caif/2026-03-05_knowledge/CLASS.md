# CLASS

- Klasse: 4CAIF
- Bewertete Abgaben: 15
- Durchschnitt: 42.3 / 78 Punkte
- Durchschnitt Multiple Choice: 32.3 / 48
- Durchschnitt Aufgabe 13: 3.1 / 10
- Durchschnitt Aufgabe 14: 3.9 / 10
- Durchschnitt Aufgabe 15: 3.1 / 10

## Beobachtungen

Die Klasse zeigt im Multiple-Choice-Teil insgesamt deutlich mehr Sicherheit als in den Freitextaufgaben. Viele grundlegende Begriffe werden wiedererkannt, aber nur ein kleinerer Teil der Lerngruppe kann die Zusammenhänge in eigenen Worten präzise erklären.

Auffällig ist außerdem, dass offene Aufgaben oft sehr knapp beantwortet oder ganz ausgelassen wurden. Dadurch bleiben viele Punkte liegen, obwohl bei mehreren Arbeiten sichtbar ist, dass ein Teil des Wissens grundsätzlich vorhanden wäre.

## Häufige Fehler

- `var`, `let` und `const` werden oft nur über "veränderbar" versus "nicht veränderbar" beschrieben; Scope, Hoisting und Best Practices fehlen häufig oder werden vermischt.
- Bei der Temporal Dead Zone ist die Abgrenzung zu `var` noch nicht stabil. Mehrere Abgaben behandeln `var` so, als wäre es ebenfalls von der TDZ betroffen.
- Primitive Datentypen werden teilweise mit `Array` und `Object` verwechselt.
- Bei `sort((a, b) => a - b)` ist die Bedeutung des Comparators noch nicht sicher; aufsteigend versus absteigend wird wiederholt vertauscht.
- Die Formel `Math.random() * range + min` wird oft nur sehr oberflächlich beschrieben. Insbesondere die Rolle von `range` und die Verschiebung durch `min` sind häufig unklar.
- Aufgabe 15 zeigt die größte Unsicherheit: Viele Lernende können einzelne Variablen nennen, erklären aber Scope Chain, Lexical Scope und Closure nicht ausreichend.

## Positive Tendenzen

- Type Coercion mit `==` und `===` wurde von vielen richtig erkannt.
- Die Grundidee von `push()` sowie die JSON-Methoden `JSON.stringify()` und `JSON.parse()` sitzt bei einem großen Teil der Klasse bereits brauchbar.
- Einzelne Arbeiten zeigen, dass das Vokabular zu Scope und Closure grundsätzlich vorhanden ist; es fehlt oft eher an einer systematischen und vollständigen Formulierung.

## Empfehlungen für den Unterricht

- Eine kurze Wiederholungseinheit zu Scope, Hoisting, TDZ und Closure wäre sehr sinnvoll, idealerweise mit kleinen Codebeispielen, bei denen sichtbar wird, welche Variablen an welcher Stelle verfügbar sind.
- Für `Math.random() * range + min` empfiehlt sich ein gemeinsames Zerlegen der Formel in drei Schritte: Skalierung, Verschiebung, Rundung.
- Die Klasse sollte `sort()` mit und ohne Comparator an konkreten Zahlenarrays üben, damit Mutation, Rückgabewert und Sortierrichtung klar werden.
- Bei offenen Aufgaben wäre eine kurze Schreibhilfe nützlich: Definition, Fachbegriff, kleines Beispiel, Schlussfolgerung. Mehrere Arbeiten scheitern eher an der Ausformulierung als an der Grundidee.
