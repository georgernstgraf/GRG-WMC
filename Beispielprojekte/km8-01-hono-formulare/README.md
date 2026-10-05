# km8-01-hono-formulare

Lauffähiges Referenzprojekt zur Prepared Lesson **KM8-01** (HTML-Formulare &
HTTP-POST). Es zeigt das **Parallelkonzept**: **ein** Endpunkt
(`POST /anmeldung`), den **zwei Clients** unterschiedlich ansprechen — das
native HTML-Formular im Browser (Redirect-Ablauf) und ein REST-Client
(JSON-Ablauf). Welcher Weg gilt, entscheidet der `Content-Type`.

Stack: **Deno + Hono** (kein Node, kein Build-Schritt).

## Starten

```sh
deno task start      # http://localhost:8000
# oder mit Auto-Reload:
deno task dev
# belegter Port? Anderen wählen:
PORT=8123 deno task start
```

## Prüfen

```sh
deno task check      # Typ-Prüfung (main.ts + Tests)
deno task test       # 6 Tests, ohne Netzwerk (app.request)
```

## Endpunkte

| Methode & Pfad                                          | Client                 | Antwort                                      |
| ------------------------------------------------------- | ---------------------- | -------------------------------------------- |
| `GET /`                                                 | Browser                | Formularseite (`static/anmeldung.html`)      |
| `GET /suche?q=…`                                        | Browser (GET-Formular) | HTML-Seite mit Treffern aus dem Query-String |
| `POST /anmeldung` (`application/x-www-form-urlencoded`) | Browser-Formular       | **303 → `/danke`** (Redirect-after-POST)     |
| `POST /anmeldung` (`application/json`)                  | REST-Client / fetch    | **201** + JSON, bei Fehlern **400** + JSON   |
| `GET /danke`                                            | Browser                | Bestätigungsseite                            |
| `GET /api/anmeldungen`                                  | REST-Client            | alle Anmeldungen als JSON                    |

## Zwei Clients, ein Endpunkt

- **Browser:** `static/anmeldung.html` sendet `POST` mit
  `Content-Type: application/x-www-form-urlencoded`. Der Server validiert und
  antwortet mit `303 See Other` + `Location: /danke` — so lädt ein Reload die
  Bestätigung, nicht die Anmeldung erneut.
- **REST-Client (VS Code):** `requests.http` mit der Extension _REST Client_.
  Dieselbe URL, aber `Content-Type: application/json` → `201 Created` mit JSON.

## Aufbau

```
main.ts              # Deno.serve(createApp().fetch)
src/app.ts           # Routen (GET-Suche, POST-Anmeldung, /api, statisch)
src/anmeldungen.ts   # In-Memory-Speicher + Validierung
static/              # anmeldung.html, danke.html, styles.css
requests.http        # Anfragen für den VS-Code-REST-Client
test/app_test.ts     # Tests gegen die App (netzfrei)
```
