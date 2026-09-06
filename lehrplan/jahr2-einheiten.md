# Jahr 2 (Sem 5+6) – Einheitenplan (SJ 2026/27)

Webprogrammierung und Mobile Computing (WMC) — React + TypeScript
(BGBl. II Nr. 368/2022, Anlagen 1+1.9; Schichten: [`LEHRPLAN.md`](LEHRPLAN.md))

**Kohorten:** **5AKIF** (WS) → **6AKIF** (SS) — Kolleg, inhaltlich identisch mit Aufbaulehrgang.
**Zeitmodell:** **3 h-Block/W** (Abendeinheit) → **13 echte UE + 2 PLF** pro Semester
(Netto nach Ferien/Terminen; bei Glücksfall Bonus-UE, s. unten).
**Werkzeug:** TypeScript · React + Vite (Node/npm) · Mini-Hono-Referenz (Deno) als
Übungs-API · PWA · Vitest + React Testing Library.
**Backend:** **kein Stoff** — serverseitige Umsetzung = POS (C#, Kolleg:innen); die
Hono-Referenz dient nur als Konsum-Ziel und Deployment-Demonstration.

> **Vorwissen aus Jahr 1 (Sem 3+4):** HTML5/CSS3 (Flexbox, Grid, Nesting, Responsive,
> Bootstrap), JS (Datentypen, Funktionen, Arrays funktional, Klassen mit `#`, DOM,
> Events, Promises/`async`/`await`, Fetch), TS-Intro + Deno-Transpilation,
> 7-Punkte-Struktur (State → Render → Events), Git/GitHub-Workflow. Details:
> [`jahr1-einheiten.md`](jahr1-einheiten.md). **UE 1 startet mit Diagnostik-Rep**
> (TS/JS-Refresher ist Teil der UE, keine eigene Reserve-Einheit).

---

## Wintersemester (Sem 5, 5AKIF) — React-Fundament & REST-Konsum

### UE 1–2: TypeScript-Fundament & Tooling

| UE | Thema | KM-Bezug (Referenz) | Inhalt / HÜ |
|----|-------|---------------------|-------------|
| 1 | **Auftakt: Architektur verteilter Systeme + TS-Refresher** | Anl. 1.9 NvSdS KM3 · Anl. 1.10 KM7 | Client/Server, Multi-Tier, wo sitzt WMC (Frontend) vs. POS (Backend); Rollen im Gesamtsystem; JS/TS-Diagnostik-Rep (Typen, Funktionen, Arrays, async). **Orga:** Node/npm, Repo-Konvention. HÜ: TS-Übungsblatt (Arrays/Generics light) |
| 2 | **TypeScript vertieft + Vite-Setup** | Anl. 1.10 KM5 (Referenz) | `interface`/`type`, Union/Generics, Module, `tsconfig`; Vite-Projekt (Scaffold, Dev-Server, Build-Pipeline, npm-Scripts); ESLint/Prettier-Grundsetup. HÜ: Vite-App mit typisiertem Datenmodell (z. B. `Person`) |

### UE 3–6: React-Kern

| UE | Thema | KM-Bezug | Inhalt / HÜ |
|----|-------|----------|-------------|
| 3 | **JSX, Components, Props** | Anl. 1.10 KM4/6 (clientseitige Webapps) | Komponenten-Denken (UI = f(state)), JSX-Regeln, Props/children, Komposition; von Vanilla-7-Punkten zu React (Explizite Brücke!). HÜ: statische Komponenten-Bibliothek (Card, List, Badge) |
| 4 | **State & Events** | Anl. 1.10 KM4/6 | `useState`, Controlled Forms, Listen-Rendering + `key`, Conditional Rendering; Immutable Updates (Spread — Anschluss an Jahr 1). HÜ: Todo-App in React (Referenz: TodoApp aus Jahr 1 portieren) |
| 5 | **Hooks & Datenholen** | Anl. 1.10 KM5 (Frontend/Backend) | `useEffect` (Abhängigkeiten, Cleanup), fetch im Effect, Loading-/Error-States, StrictMode-Doppelaufruf besprechen. HÜ: Daten-View gegen öffentliche API |
| 6 | **REST-Konsum (CRUD)** | Anl. 1.10 KM8 (Webservices, REST) | GET/POST/PUT/DELETE gegen **Mini-Hono-Referenz**; Statuscodes, Fehlerbehandlung, JSON-Contracts; Ressourcen-Design aus Konsumentensicht. HÜ: kleines CRUD-Modul (z. B. Notizen) |

### UE 7: Festigung + PLF 1

| UE | Thema | KM-Bezug | Inhalt / HÜ |
|----|-------|----------|-------------|
| 7 | **Workshop & Festigung (Puffer)** | UE 1–6 | Selbst gewählte Mini-App: Komponenten + State + Fetch; Code-Review in Zweier-Teams. HÜ: Workshop-Artefakt fertigstellen |

> **PLF 1 (R1)** im Anschluss an UE 7 — Stoff: UE 1–7 (TS, React-Kern, REST-Konsum).

### UE 8–13: Routing, State, Auth, Deployment, Testing

| UE | Thema | KM-Bezug | Inhalt / HÜ |
|----|-------|----------|-------------|
| 8 | **React Router** | Anl. 1.10 KM6 (Webframework) | Routes/Nested Routes, `useParams`, `Link`/`NavLink`, 404; SPA vs. MPA — was passiert beim Reload (Server muss Fallback liefern → Vorgriff UE 11). HÜ: Mehrseitige App mit Detail-Routen |
| 9 | **State-Management** | Anl. 1.10 KM6 | Lifting State, Prop-Drilling, `useContext` (+`useReducer`); wann reicht das, wann nicht (Ausblick Bonus-UE). HÜ: Theme-/User-Context in bestehender App |
| 10 | **Auth-Client (JWT)** | Anl. 1.10 KM8 (Authentifizierung) | Login-Flow gegen Referenz-API (Hono: `/auth/login` → JWT); Token-Ablage (Memory vs. `localStorage` — Tradeoffs), geschützte Routen, 401-Handling, Logout. HÜ: Login + Protected Page |
| 11 | **Deployment: Backend liefert Frontend** | Anl. 1.9 NvSdS KM3/4 · Anl. 1.10 KM7 | `vite build` → statische Assets; Hono-Referenz serviert `/static` + `/api` unter **einem Origin** (kein CORS-Zwang); SPA-Fallback; dasselbe Muster in C#/ASP.NET (POS-Brücke); Env-Konfig (`.env`, `import.meta.env`). HÜ: eigene App gebaut + über Referenz-Server ausgeliefert |
| 12 | **Testing** | Anl. 1.10 KM10 (strukturiert testen) | Vitest-Setup, Komponenten-Tests mit React Testing Library (Rolle/Query statt Implementierung), API-Mocks (MSW oder Fetch-Stub); Testpyramide leichtgewichtig. HÜ: 3 sinnvolle Tests zur UE-9-App |
| 13 | **WS-Mini-Projekt** | UE 1–12 | React-App freier Wahl: REST-Konsum, ≥1 geschützte View, gebaut + deployed (Hono-Static), 2+ Tests; Abgabe vor PLF 2. HÜ: Mini-Projekt |

> **PLF 2 (R2)** im Anschluss an UE 13 — Stoff: Sem 5 gesamt (Schwerpunkt UE 8–13).

---

## Sommersemester (Sem 6, 6AKIF) — Mobile (PWA), Architektur & Abschlussprojekt

### UE 1–4: Mobile Computing als PWA

| UE | Thema | KM-Bezug | Inhalt / HÜ |
|----|-------|----------|-------------|
| 1 | **Mobile-Strategien** | Anl. 1.10 KM8 (Mobile Applications) | native vs. hybrid vs. PWA — Kosten/Nutzen; Besonderheiten der App-Entwicklung und Anwendungsdomänen (Games, Sports, IoT); warum hier PWA (kein Store, ein Stack). HÜ: kurze schriftliche Gegenüberstellung (1 Seite) |
| 2 | **PWA I: Manifest & Install** | Anl. 1.10 KM8 | Web App Manifest (name, icons, `display`, `theme_color`), Installierbarkeit (Kriterien), DevTools-Application-Tab. HÜ: WS-Projekt installierbar machen |
| 3 | **PWA II: Service Worker & Offline** | Anl. 1.10 KM8 | SW-Lifecycle (install/activate/fetch), Cache-API, Strategien (cache-first, network-first, SWR), Offline-Fallback-Seite; HTTPS/sichere Kontexte. HÜ: App offline-fähig (App-Shell + Daten-Cache) |
| 4 | **PWA III: Sync, Push, Update** | Anl. 1.10 KM8 | Background-Sync & Push (konzeptuell + Demo soweit machbar), Update-Strategien (neuer SW, `skipWaiting`, User-Prompt), Beschränkungen iOS/Android. HÜ: Update-Flow in eigener App |

### UE 5–7: Vertiefte Verteilung + PLF 1

| UE | Thema | KM-Bezug | Inhalt / HÜ |
|----|-------|----------|-------------|
| 5 | **Webservices vertieft** | Anl. 1.10 KM8/9 | REST-Design aus Konsumentensicht: Ressourcen, Versionierung, Paginierung, Fehlerformate (RFC 7807), OpenAPI-Doku lesen/nutzen. HÜ: API-Review einer öffentlichen API (kurzes Protokoll) |
| 6 | **Echtzeit: WebSockets-Client** | Anl. 1.10 KM7 (Sockets) | `WebSocket`-API, Nachrichten-Protokoll, Reconnect-Strategie; Live-Demo (Chat/Live-Board gegen Referenz); Abgrenzung SSE/Polling. HÜ: Live-View in App |
| 7 | **Workshop & Festigung (Puffer)** | UE 1–6 | PWA-Härtung der WS-App (offline + install + live); Peer-Check mit Checkliste. HÜ: Workshop-Artefakt |

> **PLF 1 (R1)** im Anschluss an UE 7 — Stoff: UE 1–7 (PWA-Kern, Webservices, Echtzeit).

### UE 8–9: Security & Architektur-Konzept

| UE | Thema | KM-Bezug | Inhalt / HÜ |
|----|-------|----------|-------------|
| 8 | **Client-Security** | Anl. 1.10 KM8 (sichere Applikationen) | XSS (und warum React hilft/nicht immer), CORS vertieft, CSP-Basics, Token-Storage-Tradeoffs (aus UE 10 WS aufgreifen), OWASP-Top-10 Client-Ausschnitt. HÜ: Security-Checkliste auf eigene App anwenden |
| 9 | **SOA, Middleware, Multi-Tier (Konzept)** | Anl. 1.9 NvSdS KM4 · Anl. 1.10 KM9/10 | Schichtenarchitektur, Middleware-Idee (an der Hono-Referenz gezeigt: Logger, Auth-Middleware), Enterprise-Application-Architecture Überblick, Service-Orientierung; **POS-Schnittstelle:** was das C#-Backend konkret übernimmt. HÜ: Architektur-Skizze der eigenen App (Diagramm) |

### UE 10–13: Abschlussprojekt + PLF 2

| UE | Thema | KM-Bezug | Inhalt / HÜ |
|----|-------|----------|-------------|
| 10 | **Abschlussprojekt I: Konzept & Setup** | Anl. 1.10 KM10 | Projektauftrag (Multi-Tier: React-PWA + konsumierte API + Auth), Repo/CI-Grundzüge, Meilenstein-Planung, API-Contract festlegen |
| 11 | **Abschlussprojekt II: Features** | Anl. 1.10 KM10 | Kern-Features, Auth-Flow, Offline-Fähigkeit; Zwischenstand-Review (kurze Demos) |
| 12 | **Abschlussprojekt III: Qualität & Deployment** | Anl. 1.10 KM10 | Tests (Vitest/RTL), Build, Auslieferung über Backend-Static (Muster aus WS UE 11), Lighthouse-Check (PWA) |
| 13 | **Präsentationen & Gesamtschau** | Anl. 1.10 KM10 | Projekt-Demos (Anwendersicht + Code-Highlight), Retrospektive Jahr 1→2; Matura-/Diplomarbeit-Ausblick |

> **PLF 2 (R2)** im Anschluss an UE 13 — Stoff: Sem 6 gesamt; das Abschlussprojekt
> zählt (mit HÜ-Anteil) in die Beurteilung (PLF/HÜ/Mitarbeit je 1/3, Root-README).

---

## Abdeckung (offizielle Haken ↔ UE)

| Haken | UE |
|-------|-----|
| Anl. 1.9 NvSdS KM3/4: Architektur verteilter Systeme, Webapplikationen, Client-Server | WS 1, 11 · SS 9 |
| Anl. 1.10 KM7: Web Development Stack, Sockets, IoT | WS 1–2, 11 · SS 6 (IoT: Bonus-UE) |
| Anl. 1.10 KM8: Mobile Applications, Entwicklungsumgebungen, Authentifizierung, Webservices, REST | WS 6, 10 · SS 1–5, 8 |
| Anl. 1.10 KM9: SOA, EAA, Server Applications, Middleware | SS 5, 9 (Server-Umsetzung → POS) |
| Anl. 1.10 KM10: komplexe verteilte Systeme, Multi-Tier, strukturiertes Testen | WS 12–13 · SS 8–13 |
| Anl. 1.9 PSE KM3 (Teststrategien) — Brücke zu POS | WS 12 · SS 12 |

## Bonus-UE (optional, bei Ausfallfreiheit)

| UE | Thema | Anlass |
|----|-------|--------|
| +1 | **TanStack Query / Zustand** | Server-State-Caching bzw. leichter Client-State, wenn UE 9 (WS) früh sattsam |
| +2 | **IoT/MQTT-Exkurs** | Anl.-1.10-KM7-IoT-Haken; Demo gegen öffentlichen Test-Broker |
| +3 | **React Native / Expo (Exkurs)** | Kontrast zur PWA-Entscheidung (SS UE 1) |

## Reservierte Slots (keine Lehr-UE)

| Slot | Inhalt |
|------|--------|
| R1 (WS) | **PLF 1** (nach UE 7; TS, React-Kern, REST-Konsum) |
| R2 (WS) | **PLF 2** (nach UE 13; Sem 5 gesamt) |
| R1 (SS) | **PLF 1** (nach UE 7; PWA, Webservices, Echtzeit) |
| R2 (SS) | **PLF 2** (nach UE 13; Sem 6 gesamt / Projekt) |

## Offene Punkte (vor Semesterstart klären)

1. **Referenz-API bauen/aktualisieren:** Mini-Hono-Referenz (REST-CRUD + JWT-Login +
   `/static`-Auslieferung + SPA-Fallback + optional WebSocket) als Repo-Artefakt —
   Kandidat: [`Beispielprojekte/hono_on_deno/`](../Beispielprojekte/hono_on_deno/)
   ausbauen.
2. **POS-Abstimmung:** Überschneidungen Auth/REST-Design mit den POS-Kolleg:innen
   abstimmen (wer liefert produktiv die API fürs Abschlussprojekt?).
3. **Node-Verfügbarkeit** in den Abendform-Räumen (Node LTS + npm auf den Schulrechnern;
   Fallback: Devcontainers/Codespaces?).
