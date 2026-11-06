# Klangraum – React + Deno + Hono

Lean React-Referenzshop für den WMC-Unterricht (Jahr 2): Instrumente und
Studio-Equipment aus der Hono-Referenz-API, gebaut mit **React 19**, **Vite 8**
und **Pico CSS** – ausgeführt und geprüft mit **Deno**, ohne Node/npm.

> **Ein Backend für alle:** Die App konsumiert ausschließlich die bestehende
> Referenz-API in [`../hono_on_deno/`](../hono_on_deno/). Es gibt bewusst keine
> Mock-Daten und keine zweite API.

---

## Schnellstart

Zwei Terminals, beide im Projektordner:

```bash
# Terminal 1 – Hono-Referenz-API auf http://localhost:8000
deno task api

# Terminal 2 – Vite-Dev-Server auf http://localhost:5173
deno install
deno task dev
```

`deno task dev` startet Vite unter Deno. Hot Module Replacement und React Fast
Refresh funktionieren wie gewohnt; Node wird nicht benötigt. Der Vite-Proxy
leitet `/api` an die Hono-API weiter (same-origin, kein CORS).

---

## Tasks

| Task                                    | Zweck                                                       |
| --------------------------------------- | ----------------------------------------------------------- |
| `deno task dev`                         | Vite-Dev-Server mit HMR auf Port 5173                       |
| `deno task api`                         | Hono-Referenz-API starten (`--cwd ../hono_on_deno`)         |
| `deno task build`                       | Produktions-Build nach `dist/`                              |
| `deno task preview`                     | Produktions-Build lokal ausliefern                          |
| `deno task check`                       | TypeScript-Prüfung (`strict`, `noUncheckedIndexedAccess`)   |
| `deno task lint`                        | `deno lint` inkl. React-Hooks-Regel                         |
| `deno task fmt` / `deno task fmt:check` | Formatieren / Format prüfen                                 |
| `deno task test`                        | `deno test` mit React Testing Library + happy-dom           |
| `deno task test:watch`                  | Tests im Watch-Modus                                        |
| `deno task test:coverage`               | Tests mit Coverage-Report (HTML + lcov)                     |
| `deno task verify`                      | **Alles:** fmt:check → lint → check → test:coverage → build |

---

## Aufbau

```text
react_deno_hono/
├── deno.json              # Tasks, Import-Map, TS-, Lint-, Fmt- und Test-Konfiguration
├── vite.config.ts         # React-Plugin, /api-Proxy
├── index.html             # Vite-Einstieg + Theme-Initialisierung
├── public/favicon.svg
├── src/
│   ├── main.tsx           # Pico-CSS + App bootstrappen
│   ├── App.tsx            # Provider, Header, Katalog, Warenkorb, Toast
│   ├── api/               # JSON-Vertrag + typisierter fetch-Client
│   ├── state/             # Warenkorb-Reducer + CartContext
│   ├── hooks/             # useProducts, useTheme, useTransientMessage
│   ├── components/        # Header, ProductCard, CartDrawer, Skeleton, …
│   ├── pages/             # CatalogPage
│   ├── lib/               # Preisformatierung
│   ├── styles/app.css     # Pico-Overrides, Marke, Layout, Light/Dark
│   └── test/              # happy-dom-Setup + fetch-Stub
└── .github/workflows/react_deno_hono.yml   # CI im Repo-Root
```

---

## Was die App zeigt

- **Katalog** aus `GET /api/products` (optional `?category=`)
- **Warenkorb-Drawer** als natives `<dialog>`: Mengen, Live-Summen und die
  Rabatt-Vorschau „10 % ab 3 Artikeln“
- **Checkout** über `POST /api/orders`; die Bestätigung zeigt die vom Server
  berechneten Summen und die Bestellnummer
- **Light/Dark** über Pico `data-theme`, gespeichert in `localStorage`, beim
  ersten Besuch an `prefers-color-scheme` orientiert
- **Zustände**: Skeletons, API-Fehler mit Start-Hinweis, leerer Warenkorb,
  Toast, Error Boundary, `aria-live` und `prefers-reduced-motion`

**Client-Vorschau vs. Server-Wahrheit:** Der Rabatt wird im Warenkorb lokal
vorausberechnet, damit die Summe sofort reagiert. Verbindlich ist die Antwort
der API – die Bestätigung zeigt deren Werte.

### API-Vertrag

| Methode  | Pfad                | Verwendung                                |
| -------- | ------------------- | ----------------------------------------- |
| `GET`    | `/api/products`     | Katalog (optional `?category=Instrument`) |
| `GET`    | `/api/products/:id` | noch nicht verdrahtet                     |
| `POST`   | `/api/orders`       | Checkout (`{ "items": ["id", "id", …] }`) |
| `GET`    | `/api/orders`       | noch nicht verdrahtet                     |
| `DELETE` | `/api/orders/:id`   | noch nicht verdrahtet                     |

---

## Sicherungen

- **`deno task verify`** ist der lokale Gate: Format, Lint, Typprüfung, Tests,
  Build.
- **`deno test`** mit React Testing Library und happy-dom; kein Vitest. 19 Tests
  decken Reducer/Rabattlogik, API-Client, Katalog, Warenkorb, Checkout
  (Erfolg/Fehler), Theme und den App-Smoke-Test ab.
- **Coverage:** `deno task test:coverage` erzeugt `coverage/html/` und
  `coverage/lcov.info`; der Task bricht unter 80 % ab.
- **CI:**
  [`.github/workflows/react_deno_hono.yml`](../../.github/workflows/react_deno_hono.yml)
  läuft bei Änderungen in diesem Ordner: `deno install --frozen` +
  `deno task verify`.
- **Lockfile:** `deno.lock` wird versioniert (die Root-`.gitignore` hat dafür
  eine Ausnahme).
- **Strictness:** `strict` + `noUncheckedIndexedAccess`, `deno lint` mit
  `react-rules-of-hooks`, keine `any`-Auswege.

---

## Bezug zum Lehrplan

Die App illustriert die Jahr-2-UEs 3–6 (Komponenten/Props, State/Events,
Hooks/Datenholen, REST-Konsum) und UE 11 (Build als statische Assets). Sie ist
bewusst eine **Referenz-App**: Der unterrichtliche Pfad bleibt **React + Vite
mit Node/npm und Vitest**; hier zeigt dieselbe Anwendung die **Deno-Variante**
(`deno run npm:vite`, `deno test` statt Vitest).

Pico CSS ist als schlankes, klassenloses Framework im Repo bereits als
Jahr-1-Thema verankert (neben Bootstrap und Tailwind).

---

## Nächste Ausbaustufen

- React Router + Produktdetailseite (`/produkt/:id`) und 404
- Bestellungen-Seite (`GET /api/orders`, `DELETE /api/orders/:id`, `/api/stats`)
- Auth-Client (JWT) für UE 10
- Produktions-Auslieferung durch die Hono-API (`dist/` als `/static`, UE 11)
- PWA-Manifest + Service Worker (Sem 6)
