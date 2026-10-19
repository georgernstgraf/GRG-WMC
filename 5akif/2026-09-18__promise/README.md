# Promise

## offizielle Dokumentation

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>

## Erklärung synchroner und asynchroner Code

Synchron (synchronous)
"Warte auf die Antwort, bevor du weitermachst."
Der Aufrufer sendet eine Anfrage und blockiert, bis das Ergebnis zurückkommt. Ablauf: Anfrage → warten → Antwort → nächster Schritt.
Beispiele:

- Telefonanruf: Du rufst an, der Empfänger hebt ab, ihr sprecht, erst dann legst du auf und machst etwas anderes.
- Ein REST-Call im Code: const data = fetch(url) — die nächste Codezeile läuft erst, wenn die Antwort da ist.
- DB-Transaktion: Query abschicken → auf Ergebnis warten.
Vorteil: Einfach zu verstehen und zu debuggen (Reihenfolge ist klar).
Nachteil: Der wartende Prozess/Thread wird blockiert — bei langen Wartezeiten (Netzwerk, I/O) ineffizient.
Asynchron (asynchronous)
"Los geht's, sag mir Bescheid, wenn's fertig ist."
Der Aufrufer startet eine Aufgabe und macht sofort weiter, ohne auf das Ergebnis zu warten. Das Ergebnis kommt später — per Callback, Promise/Future, Event oder Message.
Beispiele:
- Pizzeria: Synchron = du stehst am Tresen und wartest, bis deine Pizza fertig ist. Asynchron = du bekommst eine Nummer, setzt dich hin und wirst aufgerufen.
- await fetch(url) in JavaScript: andere Aufgaben laufen weiter, während auf die Antwort gewartet wird.
- Message Queues (RabbitMQ, Kafka): Sender legt Nachricht ab, Empfänger verarbeitet sie später, völlig entkoppelt.
- E-Mail: absenden und weiterarbeiten, die Antwort kommt wann anders.
Vorteil: Effiziente Ressourcennutzung, hohe Parallelität (viele gleichzeitige Anfragen möglich).
Nachteil: Komplexer — Fehlerbehandlung, Reihenfolge und Zustandsverwaltung werden schwieriger ("Callback Hell").
Zusammenfassung
Table
Kurz merken: synchron = "jemanden anrufen und in der Leitung bleiben", asynchron = "eine Nachricht schicken und weiterarbeiten".

## Erklärung Promise-Zustände
