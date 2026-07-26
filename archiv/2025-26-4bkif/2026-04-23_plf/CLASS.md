# Klassenanalyse — 4BKIF Wissensüberprüfung 2026-04-23

## Allgemeine Beobachtungen

Die Multiple-Choice-Fragen wurden von den meisten Schülerinnen und Schülern gut
bewältigt. Acht Personen erreichten 35 oder mehr von 40 Punkten im MC-Teil, zwei
davon die vollen 40 Punkte. Die häufigsten Fehler traten bei Frage 5 (Type
Coercion, insbesondere `null + 1`) und Frage 9 (TLS und Zertifikate, insbesondere
die Rolle von Let's Encrypt) auf.

Bei den Freitext-Fragen zeigte sich ein gemischtes Bild. Frage 11 (ES Modules und
`window`-Scope) war für viele herausfordernd — das Konzept des Modul-Scopes wurde
oft nur oberflächlich beschrieben, und konkrete Lösungswege fehlten häufig.
Frage 12 (Truthy/Falsy und Type Coercion) wurde insgesamt am besten bearbeitet,
wobei die falsy-Werte von den meisten vollständig aufgezählt werden konnten.
Frage 13 (DOM-Anwendung mit Favoriten) zeigte deutliche Unterschiede in der
Code-Qualität.

## Häufigste Fehler und Empfehlungen

### Frage 11: ES Modules und `window`-Scope

**Fehler:** Mehrere Schülerinnen und Schüler konnten zwar erklären, dass die
Funktion im Modul-Scope nicht global sichtbar ist, nannten aber nur einen
Lösungsweg oder gar keinen. Die zweite Lösung (`window.ladeDaten = ladeDaten`
oder `addEventListener`) wurde häufig nicht genannt.

**Empfehlung:** Im Unterricht sollte der Unterschied zwischen Modul-Scope und
globalem Scope anhand eines praktischen Beispiels wiederholt werden. Die beiden
Lösungsstrategien (explizites `window`-Binding vs. Event-Listener im Modul)
sollten gegenübergestellt und geübt werden.

### Frage 12: Truthy/Falsy und Type Coercion

**Fehler:** Die häufigsten Fehler betrafen `[] == false` (wird zu `true`, da `[]`
über `""` zu `0` wird) und `0 === false` (strikte Gleichheit scheitert am
Typunterschied). Bei der Auflistung der 8 falsy-Werte wurden `-0` und `0n`
regelmäßig vergessen. Einige Schülerinnen und Schüler gaben `[]` oder `{}` als
falsy an, was nicht korrekt ist — leere Arrays und Objekte sind truthy.

**Empfehlung:** Eine Wiederholung der 8 falsy-Werte mit Betonung auf `-0` und
`0n` (BigInt) wäre sinnvoll. Die Coercion-Regeln für `==` sollten anhand von
Beispielen wie `[] == false` nochmals durchgegangen werden.

### Frage 13: DOM-Anwendung — Bücherverwaltung mit Favoriten

**Fehler:** Einige Schülerinnen und Schüler schrieben gar keinen Code für
`renderBooks()`. Bei denjenigen, die Code abgaben, fehlten häufig der Button
oder der Favoriten-Umschalter. Die `toggleFavorite`-Funktion wurde von vielen
korrekt implementiert, aber der Event-Listener wurde oft nicht oder an falscher
Stelle registriert. Der initiale Aufruf von `renderBooks()` wurde mehrfach
vergessen.

**Empfehlung:** Die Erstellung von DOM-Elementen mit `createElement` und das
Registrieren von Event-Listenern sollten praktisch geübt werden. Besonders der
Favoriten-Button mit `data-id`-Attribut und das korrekte Verknüpfen von Event-
Handlern mit der Buch-ID sind zentrale Konzepte, die vertieft werden sollten.

## Notenschlüssel (zur Information, nicht in Schülerbewertungen verwendet)

| Prozent | Punkte | Note |
|---------|--------|------|
| >= 89% | >= 76P | Sehr gut (1) |
| >= 76% | >= 65P | Gut (2) |
| >= 63% | >= 54P | Befriedigend (3) |
| >= 50% | >= 43P | Genügend (4) |
| < 50%  | < 43P | Nicht genügend (5) |