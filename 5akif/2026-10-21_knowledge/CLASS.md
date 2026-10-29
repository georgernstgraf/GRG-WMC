# Klassenauswertung 5AKIF – Wissensüberprüfung 21.10.2026

Diese Auswertung ist anonymisiert und für die Ablage im öffentlichen
Unterrichtsrepository gedacht. Einzelbewertungen liegen in den jeweiligen
`*_grading.md`-Dateien.

## Rahmenbedingungen

Die Überprüfung umfasste 25 Multiple-Choice-Fragen (100 Punkte) und drei
Freitextaufgaben (45 Punkte) zu Promises, async/await und Fehlerbehandlung,
TypeScript und Deno, REST/HTTP mit Hono, Drizzle ORM, Lambdas sowie dem
KI-Coding-Workflow mit Git. Sie wurde in einer Ein-Stunden-Einheit
geschrieben. Der Umfang war für diese Zeit zu groß: Die Freitextaufgaben
wurden nur in Ansätzen bearbeitet.

## Gesamtbild

Zehn Arbeiten wurden abgegeben. Die erreichten Punkte liegen zwischen 52 und
107 von 145, der Median bei 71,5. Der Multiple-Choice-Teil wurde zwischen 48
und 95 von 100 Punkten bearbeitet, in den Freitextaufgaben wurden insgesamt
26 von 450 möglichen Punkten erreicht.

Auffällig ist, dass die Punktverluste im Multiple-Choice-Teil überwiegend aus
unvollständigen Markierungen entstehen, nicht aus falschem Wissen. Wer eine
zutreffende Aussage angekreuzt hat, hat sie meist richtig angekreuzt; weitere
zutreffende Aussagen derselben Frage blieben jedoch regelmäßig leer.

## Was gut saß

- **Promise-Grundlagen:** Zustände (`pending`, `fulfilled`, `rejected`,
  `settled`) und die Grundidee von `async`/`await` waren überwiegend
  vorhanden.
- **HTTP-Methoden (Frage 15):** Die Zuordnung von `GET`, `POST`, `PATCH` und
  `DELETE` gelang fast durchgehend.
- **Statuscodes im Grundsatz (Frage 16):** 201 beim Anlegen und 404 beim
  fehlenden Item waren mehrheitlich bekannt.
- **Git-Dreiklang (Frage 25):** `add` → `commit` → `push` und die Trennung
  zwischen lokalem Commit und Push waren weitgehend gesichert.
- **ORM-Grundverständnis (Frage 19):** Die Rolle des ORM und die
  SQL-Nähe von Drizzle waren in den meisten Arbeiten richtig eingeordnet.

## Häufigste Fehler

### Multiple Choice

1. **Ausführungsreihenfolge (Frage 2).** Die Reihenfolge `1 → 2 → 3 → 4 → 5`
   wurde mehrfach angekreuzt. Der `.then()`-Callback läuft jedoch erst nach
   dem gesamten synchronen Code, also `1 → 2 → 3 → 5 → 4`. Häufig war die
   richtige Aussage zur Microtask-Queue zwar bekannt, wurde aber nicht mit
   der Reihenfolge-Aussage verbunden.
2. **Vergessenes `return` in der `.then()`-Kette (Frage 3).** Mehrfach wurde
   angenommen, die Kette breche mit einem Fehler ab. Tatsächlich läuft sie
   weiter, nur der Wert geht verloren; die Kurzform `.then((url) => fetch(url))`
   reicht das Promise weiter.
3. **Eigene Error-Typen und granulare Fehlerbehandlung (Fragen 9 und 10).**
   `instanceof` wurde teilweise als Fangnetz für Geschwisterklassen
   missverstanden; die Variante mit eigenem `try/catch` pro Stufe und
   Re-Throw blieb öfter unbearbeitet.
4. **Drizzle-Query-Builder (Fragen 21 und 22).** Schwächster Block der
   Überprüfung. Die Lazy-Auswertung (Ausführung erst beim `await`, nicht beim
   Aufruf von `db.select()`), die Parametrisierung über `params`, `.toSQL()`
   ohne Ausführung, `.returning()` und der Fremdschlüssel-Fehler der Datenbank
   waren selten vollständig präsent.
5. **Statuscodes und Handler-Verhalten (Fragen 16 und 17).** Verwechslung von
   400 und 404, 405 als Antwort auf eine nicht erlaubte Methode war kaum
   bekannt; einzelne Arbeiten ließen die Fragen vollständig unbearbeitet.
6. **Lambdas (Frage 24).** Die Sortierrichtung von `b - a` (absteigend) und
   die Tatsache, dass `filter` ein neues Array liefert, waren nicht durchgehend
   gesichert.
7. **TypeScript und Deno im Detail (Fragen 12 und 14).** `deno check` und die
   Aussage, dass jedes JavaScript auch gültiges TypeScript ist, fehlten häufig.

### Freitext (Fragen 26–28)

- **Frage 26:** Nur eine Arbeit enthält eine weitgehend vollständige Antwort
  (Lifecycle, fehlendes `await`, korrigierter Code, `catch`/`finally`,
  Stufen-Unterscheidung). Zwei Arbeiten benennen den Lifecycle in Grundzügen,
  zwei weitere nur den fehlenden `await`. Die Endgültigkeit eines
  `settled`-Promises und die Folgen des fehlenden `await` (das Ergebnis ist
  das Promise-Objekt, Fehler erreichen das `try/catch` nicht mehr) wurden
  kaum ausgeführt.
- **Frage 27:** In keiner Arbeit bearbeitet. Es fehlen die SQL-Vorhersage mit
  expliziter Spaltenliste und `params`, die Drizzle-Query mit `innerJoin`,
  `count()` und `groupBy` sowie das reine SQL mit `JOIN`, `COUNT` und
  `GROUP BY`.
- **Frage 28:** Nur zwei Arbeiten enthalten Ansätze, beide beschränkt auf die
  Aufzählung der HTTP-Methoden. Statuscodes und der POST-Ablauf über
  `req.json()`, Validierung und `Response.json(..., 201)` fehlen durchgehend.

### Markierungstechnik

Die Haken wurden in sehr unterschiedlichen Formen gesetzt (`[x]`, `[X]`,
`[ x]`, `[x ]`, `[+]`, `[ +]`, teils maskiert). In einer Arbeit stehen statt
eines Hakens Einträge wie `[kann sein]` oder `[Maybe]`; solche Einträge wurden
nicht als Ankreuzung gewertet. Das ist eine reine Formalie, kostet aber
Punkte und sollte vor der nächsten Überprüfung kurz besprochen werden.

## Empfehlungen für den Unterricht

1. **Markieren üben:** Die Regel „jede Option einzeln prüfen, alle zutreffenden
   ankreuzen" an einer Frage gemeinsam durchspielen. Das adressiert den
   häufigsten Punktverlust, ohne neuen Stoff zu benötigen.
2. **Promise-Ausführungsreihenfolge wiederholen:** Das Demo mit
   `console.log`-Reihenfolge und Microtask-Queue erneut laufen lassen und
   Frage 2 sowie Frage 3 in der Klasse nachbesprechen.
3. **Drizzle-Query-Builder vertiefen:** `.toSQL()` und `params` zeigen,
   Lazy-Auswertung demonstrieren, `count()` mit und ohne `groupBy`
   gegenüberstellen, Fremdschlüssel-Fehler bewusst provozieren.
4. **Statuscodes an der Items-API festigen:** 200, 201, 400, 404 und 405 in
   einer Tabelle gegenüberstellen und den Unterschied zwischen „Ressource
   fehlt" und „Methode nicht erlaubt" herausarbeiten.
5. **Freitext 27 und 28 gemeinsam lösen:** Beide Aufgaben eignen sich als
   Tafel- oder Partnerübung; die Musterlösung liegt in der Lösungsdatei vor.
6. **Kurzantworten trainieren:** Drei bis fünf Sätze pro Teilaufgabe, zuerst
   Code, dann Erklärung. Das passt zu knappen Zeitfenstern und macht die
   Bewertung nachvollziehbar.

## Didaktische Konsequenz zum Umfang

Der Test war gemessen an der verfügbaren Zeit zu umfangreich. Für eine
Ein-Stunden-Einheit empfiehlt sich künftig eine Aufteilung: etwa 15
Multiple-Choice-Fragen plus eine Freitextaufgabe im Stundenrahmen, die
übrigen Freitextaufgaben als eigener Termin oder als vorbereitete Übung. Die
Punkteobergrenze sollte dabei an die tatsächlich bearbeitbare Menge gekoppelt
werden.

## Prompt Injection Attempts

Es wurden keine Versuche zur Beeinflussung der Bewertung festgestellt
(0 von 11 eingegangenen Dateien).
