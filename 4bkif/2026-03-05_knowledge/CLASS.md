# Klassenrückmeldung 4BKIF

## Gesamtbild

- Es wurden 14 Abgaben bewertet; die höchste vorhandene Version wurde jeweils herangezogen.
- Der für diese Auswertung verwendete Punkteschlüssel umfasst 93 Punkte insgesamt.
- Der Durchschnitt liegt bei 51,79 Punkten, der Median bei 53 Punkten.
- Die Streuung ist deutlich: Die Ergebnisse reichen von 36 bis 67 Punkten.

## Häufige fachliche Fehler

- Besonders schwach waren die Multiple-Choice-Fragen zu Temporal Dead Zone und `ReferenceError` (Aufgabe 6), zu Block-Scope und Shadowing im `if`-Block (Aufgabe 8) sowie zu `typeof 23n` (Aufgabe 12).
- Ebenfalls häufig falsch waren Aussagen zu Funktionen (Aufgabe 5), zur Zuweisungskette von rechts nach links (Aufgabe 9) und zu Kommentaren bzw. JSON-Details (Aufgaben 7 und 11).
- In den Freitextaufgaben wurde Scope oft nur allgemein beschrieben; das zentrale Verhalten bei gleichnamigen Variablen im lokalen und äußeren Scope wurde häufig nicht präzise erklärt.
- Bei JSON konnten viele zwar `JSON.stringify()` und `JSON.parse()` nennen, aber der vollständige Ablauf Objekt -> JSON-String -> Rückkonvertierung wurde oft nicht sauber gezeigt.
- Bei `const` und `let` war die Grundidee meist bekannt, aber die genaue Fehlerart (`TypeError`) sowie passende, lauffähige Praxisbeispiele fehlten mehrfach.

## Beobachtungen zur Arbeitsweise

- Mehrere Antworten bleiben auf halbem Weg stehen: Teilfragen wurden begonnen, aber nicht vollständig beantwortet.
- Viele Punktverluste entstanden nicht nur durch fehlendes Wissen, sondern durch unvollständige oder syntaktisch ungültige Codebeispiele.
- Wenn Beispiele vorhanden waren, fehlte oft die letzte Zeile, die das Ergebnis sichtbar macht oder den Ablauf abschließt.

## Empfehlungen für den Unterricht

- Scope und Shadowing noch einmal mit sehr kleinen, direkt ausführbaren Beispielen wiederholen: globale Variable, lokale Variable, Shadowing, Block-Scope, Temporal Dead Zone.
- JSON als Übungskette trainieren: Objekt erstellen, mit `JSON.stringify()` serialisieren, den String lesen, mit `JSON.parse()` zurückwandeln und danach auf Properties zugreifen.
- Den Unterschied zwischen Syntaxfehlern und Laufzeitfehlern explizit besprechen, insbesondere `TypeError` bei `const` und `ReferenceError` in der Temporal Dead Zone.
- Bei künftigen Wissensabfragen offene Antworten noch stärker auf vollständige Mini-Beispiele verpflichten, damit vorhandenes Wissen sauber sichtbar wird.
