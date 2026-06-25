# JavaScript-Runtimes – Node.js, Deno und Bun

Ein **JavaScript-Runtime** ist das Programm, das JavaScript (und heute meist auch
TypeScript) **außerhalb des Browsers** ausführt – also auf dem Server, im
Terminal oder als Build-Tool. Im Browser übernimmt das die Browser-Engine
(V8 in Chrome, JavaScriptCore in Safari); auf dem Server braucht man eine
eigene Laufzeitumgebung. Die drei wichtigsten sind heute **Node.js**, **Deno**
und **Bun**.

> Begleitdokument zu [`Frontend-Frameworks.md`](./Frontend-Frameworks.md).
> In unserem Unterricht verwenden wir **Deno** (in Kombination mit Hono und
> Prisma).

---

## 1. Node.js

> <https://nodejs.org/> · seit 2009, auf der V8-Engine basierend.

Node.js ist der **Urvater** der serverseitigen JavaScript-Welt und der
unangefochtene **De-facto-Standard**: das mit Abstand größte Ökosystem (über
2 Millionen Pakete auf npm), ausgereifte Long-Term-Support-(LTS-)Versionen und
eine riesige Community. Fast jedes Produktions-Setup, jeder Cloud-Anbieter und
jedes Lehrbuch geht heute von Node.js aus.

**Schwächen:** Node bringt von Haus aus nur wenig mit – Linter, Formatter,
Test-Runner und Bundler muss man sich extern dazustellen (ESLint, Prettier,
Jest, Webpack, …). TypeScript wird nicht nativ ausgeführt, sondern muss erst
transpiliert werden. Für Unterrichtszwecke bedeutet das: viele Werkzeuge
installieren und konfigurieren, bevor man loslegen kann.

---

## 2. Deno

> <https://deno.com/> · entwickelt von **Ryan Dahl** (dem Erfinder von Node.js),
> seit 2018, aktuell **Deno 2.x**.

Ryan Dahl hat Node erschaffen – und später Deno gegründet, um die Dinge „richtig"
zu machen, die ihn an Node störten. Deno ist auf **Sicherheit**, **Web-Standards**
und **Einfachheit** ausgerichtet:

- **TypeScript nativ** – `.ts`-Dateien laufen direkt, ohne Konfiguration oder
  separaten Transpile-Schritt. Perfekt für den TS-Fokus unseres Unterrichts.
- **Eingebaute Toolchain** – `deno fmt` (Formatierung), `deno lint` (Linter),
  `deno test` (Tests), `deno bundle` (Bündeln) und `deno compile` (eine
  einzelne ausführbare Datei) sind schon dabei. Weniger zu installierende
  Werkzeuge, schneller produktiv.
- **Security-by-default** – Skripte haben erst einmal **keinen** Zugriff auf
  Netzwerk, Dateisystem oder Umgebungsvariablen; jedes Recht muss explizit
  erlaubt werden (`--allow-net`, `--allow-read`, …). Ein schöner Lehrpunkt für
  sicheres Programmieren.
- **Web-Standard-APIs** – `fetch`, `URL`, `crypto` usw. funktionieren wie im
  Browser.
- **LTS-Releases** – Deno 2 bietet offizielle Long-Term-Support-Versionen für
  den Produktivbetrieb.
- **npm-Kompatibilität** – Deno 2 kann die über 2 Millionen Pakete aus npm über
  den `npm:`-Specifier direkt nutzen; das eigene Ökosystem **JSR** ergänzt das.

Deno ist in unserem Repository bereits etabliert (`deno.json`, Hono, Prisma).

---

## 3. Bun

> <https://bun.sh/> · seit 2021, in **Zig** geschrieben, auf **JavaScriptCore**
> (der Safari-Engine) laufend.

Bun ist der **schnelle Herausforderer** und verfolgt eine „All-in-One"-Philosophie:

- **Höchste Geschwindigkeit** – der schnellste Start (~5–10 ms vs. Deno ~15–25 ms)
  und der höchste HTTP-Durchsatz der drei (~75.000 Anfragen/Sekunde in Benchmarks).
- **Alles eingebaut** – Runtime, Paketmanager (`bun install`), Test-Runner und
  Bundler in einem einzigen Programm.
- **Node-Kompatibilität** – ca. 98 % der Node-APIs werden unterstützt, viele
  npm-Pakete laufen unverändert.

**Schwächen:** Bun hat (Stand 2025/26) noch **kein formelles LTS-Modell** und
manchmal kleine Kompatibilitätslücken. Es ist extrem spannend für
Performance-fokusierte Projekte, aber als **stabiler Default** für ein
schulisches Umfeld die riskantere Wahl als Deno oder Node.

---

## 4. Vergleich auf einen Blick

|                | Node.js              | Deno 2.x                | Bun                     |
|----------------|----------------------|-------------------------|-------------------------|
| **Engine**     | V8                   | V8                      | JavaScriptCore (Safari) |
| **Start**      | ~25–40 ms            | ~15–25 ms               | **~5–10 ms**            |
| **HTTP-Durchsatz** | Referenz         | hoch                    | **am höchsten**         |
| **TypeScript nativ** | nein (transpilieren) | **ja**              | **ja**                  |
| **Eingebaute Tools** (lint/fmt/test/bundle) | nein | **ja**       | **ja** (all-in-one)     |
| **npm-kompatibel** | — (ist npm)       | ja (`npm:`/JSR)         | ja (~98 %)              |
| **LTS-Releases** | **ja**             | **ja**                  | (noch kein formelles LTS)|
| **Security-by-default** | nein         | **ja** (explizite Rechte) | nein                 |
| **Ökosystem**  | riesig (~2 Mio.)     | wachsend + npm          | wachsend + npm          |
| **Reife**      | sehr hoch            | hoch                    | hoch, noch jünger       |

*(Zahlen sind Richtwerte aus Benchmarks 2025/26; in echten Anwendungen mit
Datenbank, Validierung und Serialisierung schrumpft der Abstand deutlich.)*

---

## 5. Empfehlung für den Unterricht

**Wir bleiben bei Deno.** Gründe:

1. **Konsistenz** – das Repository nutzt bereits Deno + Hono + Prisma.
2. **TypeScript ohne Umweg** – passt zum TS-Fokus (siehe
   `TypeScript-Transpilation.md`); keine zusätzliche Toolchain.
3. **Eingebaute Werkzeuge** – `deno fmt`, `deno lint`, `deno test` machen
   viele externe Tools überflüssig; das reduziert den Konfigurationsaufwand im
   Unterricht.
4. **Security-by-default** – ein wertvoller Lehrinhalt.
5. **LTS & Stabilität** – wichtig für ein verlässliches Unterrichtsumfeld.

**Bun** ist einen Blick wert, wenn reine Geschwindigkeit oder das
„alles-in-einem"-Paket im Vordergrund stehen – etwa in einem separaten,
experimentellen Projekt. Für den regulären Unterricht ist Deno die sicherere,
konsistentere Wahl.

---

## 6. Weiterführende Links

- Node.js: <https://nodejs.org/en/docs>
- Deno (Docs): <https://docs.deno.com/>
- Deno – Hono-Framework: <https://hono.dev/>
- JSR (Deno-Paketregister): <https://jsr.io/>
- Bun (Docs): <https://bun.sh/docs>
- Vergleich Node/Deno/Bun (Better Stack): <https://betterstack.com/community/guides/scaling-nodejs/nodejs-vs-deno-vs-bun/>
