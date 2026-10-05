# HTML-Formulare & HTTP-POST (<Datum>)

Lesson: `lesson.html` im selben Ordner — was beim Absenden eines Formulars
passiert: `action`/`method`/`enctype`, `name` als Schlüssel, GET vs. POST,
URL-Encoding, Redirect-after-POST (303) und der Server-Check per REST-Client.

- Lektüre: `Unterlagen/HTTP-Folie.md` (Verben, Content-Type, Statuscodes), MDN „Sending form data"
- Demo/Arbeit: Begleitprojekt `Beispielprojekte/km8-01-hono-formulare` (Deno + Hono) — Formularseite,
  `POST /anmeldung` (303 bzw. 201/400), `requests.http` für den VS-Code-REST-Client
- Übung: „Jetzt du!" (3 Vorhersage-Aufgaben, DevTools-Netzwerk + REST-Client)
- Quiz: 8 Fragen (Richtige A·B·C·A·B·C·A·B)
- Aufgabe: Abschnitt am Lesson-Ende

## Aufgabe

`anmeldung.html` mit Formular (`action="/anmeldung" method="post"`) bauen; gegen das
Begleitprojekt absenden und den Request-Body im Netzwerk-Tab abtragen; dieselbe
Anmeldung in einer `requests.http` einmal als `application/x-www-form-urlencoded`
und einmal als `application/json` senden und die Statuscodes (303 gegen 201)
notieren. — Abgabe per Push bis zur nächsten UE 00:00.

## Housekeeping

- Lehrplan: `lehrplan/LEHRPLAN.md` · `lehrplan/jg2-einheiten.md` · `lehrplan/kompetenzmodule/km8.md`
- KM-Bezug: KM8 · Webservices/REST (Anl. 1.10) — HTTP-POST/Formular-Action; Querverweis KM5 (Frontend/Backend-Kommunikation); Kontext Jahr 2 (Sem 5, WS UE 6 REST-Konsum)
- Unterlage: `Unterlagen/HTTP-Folie.md`
- Runtime: Browser + DevTools, VS Code (REST Client, `.http`), Begleitprojekt Deno + Hono
