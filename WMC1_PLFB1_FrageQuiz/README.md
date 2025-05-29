# 4aaif plf 2025-05-15

## themen: javascript klassen und arrays

### Task 1: Erstellung und export der Klasse "Frage"

"export class"

### Task 2: Constructor

implentiere die constructor methode und speichere die Argumente in Attributen der
Klasse. Nimm den Debugger zur Hilfe.

### Task 3: Parameterprüfung constructor

Stelle sicher, dass

- 3 "arguments" an den constructor übergeben werden.
- das erste und dritte argument ein "string" ist (typeof)
- das zweite Argument ein array ist und nicht leer

Im Fehlerfall: "throw"

### Task 4: Plausibilitätstest

Die Frage bekommt als parameter 2 eine Liste an Optionen, die richtige davon
wird in parameter 3 übergeben. Stelle nun sicher, dass nur ein gültiges
Frage-Objekt erzeugt werden kann. (Parameter 3: string muss in Parameter
2: string[] enthalten sein). Tipp: "includes"

### Task 5: Klasse `Quiz`

exportiere nun eine weitere Klasse: "Quiz"

### Task 6: Parameterprüfung Quiz constructor: 1 argument

Werfe nun Fehler, wenn die "arguments" des constructors nicht Länge 1 haben.

### Task 7: Quiz constructor

Der constructor bekommt eine Liste an "POJO's" (plain old javascript objects)
auz der Datei `fragen.js`.
Jedes Element der Liste soll als `new Frage(a,b,c)` an quiz.fragen angehängt werden.

### Task 8: getFragenByLength

Es geht um die String-Länge des Attributes ".frage"

### Task 9: Sortiert nach Länge getFragenSortedByLength

Es geht um die Länge des Strings der Frage

### Task 10

Hier wollen wir eine Liste an Fragen erstellen, in welcher die übergebene Option
vorkommt.

### Task 11 Durchschnittliche Optionen-Anzahl

`getAverageOptions()` soll die durchschnittliche Anzal an Optionen retournieren.

### Task 12 eine Liste mit allen Optionen

.. des gesamten Quiz, ohne Duplikate!!

## Gutes Gelingen

Beurteilung: Für jeden erfolgreichen Test gibt es 2 Punkte:

`0-12 / 13-15 / 16-18 / 19-21 / 22-240-12 / 13-15 / 16-18 / 19-21 / 22-24`
