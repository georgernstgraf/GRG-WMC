# Glossar — Abkürzungen & Fachbegriffe

Zentrales Nachschlagewerk für alle Abkürzungen und Fachbegriffe, die in
diesem Repository verwendet werden. Gruppiert nach Domäne, innerhalb der
Tabellen alphabetisch.

**Konventionen:** Deutsche Erklärung, englischer Original-Begriff in
Klammern wo relevant. Spalte 3 gibt Kontext: wo der Begriff im Repo bzw.
Unterricht vorkommt. **UE-Verweise immer vollqualifiziert** als
`UE n (KMx, Block WS/SS)` — UE-Nummern sind nur innerhalb eines
Block-Einheitenplans eindeutig (UE 5 in Jahr 1 ≠ UE 5 in Jahr 2).
Block-Pläne: `lehrplan/jahr1-einheiten.md`, `lehrplan/jahr2-einheiten.md`.

---

## ⚠ Kollisionen & Mehrdeutigkeiten

Diese Begriffe haben **zwei Bedeutungen** — Kontext entscheidet:

| Begriff | Bedeutung 1 | Bedeutung 2 | Auflösung |
|---|---|---|---|
| **KM** | Kompetenzmodul (Lehrplan-Einheit) | Knowledge Check (Mini-Test, s. `archiv/2025-26-4aaif/2026-03-04_knowledge`) | Knowledge-Checks immer als Wort; „KM" sonst immer Kompetenzmodul |
| **POS** | Programmieren und Software Engineering (Fach, Kolleg:innen) | point of sale | Nur das Fach; Kontrast zu WMC |
| **PLF** | Praktische Leistungsfeststellung | — | Gegenteil von schriftlichem Test (MC) |
| **PSE** | Programmieren und Software Engineering (Fachname lt. Anlage) | — | = POS, unterschiedlicher Schul- vs. Lehrplan-Kürzel |
| **WS** | Wintersemester | Web-Stack-Kontext (WebSockets) | Semester-Bedeutung nur in Klassen-/UE-Kontext |

---

## 1. Schule & Klassen (Kürzel-Decoder)

| Begriff | Bedeutung | Kurzerklärung & Kontext |
|---|---|---|
| `<Semester><Form>IF` | Klassen-Code | Ziffer = Semester (ungerade = WS, gerade = SS); danach Form-Serie + „IF" (Informatik). Details: `lehrplan/METADATA.md` |
| **AIF** | Aufbaulehrgang Informatik Form | 7 Semester; Einstieg ohne Reifeprüfung (Vorbereitungslehrgang, Fachschule, facheinschlägiger Lehrabschluss); Abschluss **Reife- und Diplomprüfung** |
| **KIF** | Kolleg Informatik Form | 6 Semester; Einstieg erst mit Reife-/Berufsreife-/Studienberechtigungsprüfung; Abschluss **Diplomprüfung** (Matura bereits vorhanden) |
| **CIF** | zweite Kolleg-Variante | Matura bereits vorhanden → nur Diplomprüfung; Bedeutung des Buchstabens C: Detail-Flag (METADATA.md) |
| **AAIF / CAIF** | AIF-Zug A / Zug C | Zug-Präfix auf dem Form-Code (Praxiscodes der Kohorten) |
| **AKIF / BKIF** | KIF-Zug A / Zug B | analog; Spengergasse-Züge A/B/C |
| **Block** | Georgs Unterrichtsblöcke | Jahr 1 = Sem 3+4 (2 h/W), Jahr 2 = Sem 5+6 (3 h/W); Inhalt für AL und Kolleg identisch |
| AL | Aufbaulehrgang | Abkürzung in METADATA/Plänen |
| BGBl. | Bundesgesetzblatt | Verlautbarungsorgan; Lehrplan = BGBl. II Nr. 368/2022 (Sonderformen-VO), Anlagen 1 + 1.9 |
| Diplomarbeit | Diplomarbeitsprojekt | letzte beiden Semester (AL/Kolleg); Vorbereitung im Jahr-2-Abschlussprojekt |
| PLF | Praktische Leistungsfeststellung | 2 pro Semester (R1/R2), Teil der 1/3-Beurteilung |
| POS | Programmieren und Software Engineering | Nachbarfach bei Kolleg:innen (C#/.NET); Server-Umsetzung = POS |
| WMC | Webprogrammierung und Mobile Computing | schulautonomes Fach der Spengergasse (Abendform); kein eigenes Fach in Anlage 1.9 |

---

## 2. Recht & Lehrplan

| Begriff | Bedeutung | Kurzerklärung & Kontext |
|---|---|---|
| Anlage 1.9 | (Lehrplan) | Informatik-Sonderformen der Berufstätigen-VO 368/2022; Varianten I.1–I.4 (Spengergasse: I.3 7-sem AL, I.4 6-sem Kolleg) |
| Anlage 1.10 | (Referenz) | Tagesschule HL Informatik (262/2015 idF 383/2021); WMC-Fach mit KM3–KM10 — dient als **Referenz-Raster** |
| BLA | Bildungs- und Lehraufgabe | Kompetenz-Teil eines Gegenstands/KM; WMC-Blas zitiert in `lehrplan/kompetenzmodule/` |
| KM | Kompetenzmodul | Semesterbezogene Lehrplan-Einheit; hier Referenz-Raster Anl. 1.10 (KM3–KM10) |
| KM-Bezug | Abdeckungsverweis | Spalte in UE-Tabellen: `KMx` (Anl. 1.10-Referenz) + Anl.-1.9-Haken |
| NvS | Netzwerke und verteilte Systeme | Anl.-1.9-Gegenstand, 1. Semester; Haken „Basis-Webtechniken" |
| NvSdS | Netzwerksysteme und verteilte Systeme | Anl.-1.9-Gegenstand; KM3/KM4 (Architektur verteilte Systeme, SOA/Middleware) |
| Schulautonom | schulautonome Lehrplanbestimmungen | Rechtsfigur, die WMC als eigenes Fach + Stundenverschiebungen trägt (Fußnote 1 + § 3 VO) |
| Sonderformen-VO | BGBl. II Nr. 368/2022 | Lehrpläne der Berufstätigen-Formen der HTL (inkl. Vorbereitungslehrgang); konsolidierte Fassung: Gesetzesnummer 20012030 |
| Vorbereitungslehrgang | VL | 1 Semester, Einstieg nach Pflichtschule; kein WMC-Stoff (Deutsch/Englisch/Mathematik + Grundlagen) |

---

## 3. Unterrichts- & Prüfungspraxis

| Begriff | Kurzerklärung & Kontext |
|---|---|
| Abgabevideo | SS-Projekt-Jahr 1: OBS-Demo (5–7 min) mit Code-Besprechung |
| Cutoff | Nachreich-Frist für HÜ: eine Woche vor Notenschluss |
| HÜ | Hausübung; Abgabe über Schüler-Repos (GitHub) |
| Nachreichung | 75-%-Regel für HÜ-Nachschieben (Root-README) |
| Peer-Review | Gegenseitige Review-Runde beim WS-Jahr-1-Projekt (`PEER_REVIEW.md`) |
| PLF R1/R2 | Reservierte Slots: PLF 1 (nach UE 7), PLF 2 (Semesterende) |
| UE | Unterrichtseinheit; Konvention: `UE \| Thema \| KM-Bezug \| Inhalt/HÜ` |
| WS-/SS-Projekt | Blockübergreifendes Projekt (Website bzw. Webapp); Angaben: `PROJEKT.md`, `docs/wmc_ss_projekt_webapp.md` |
| 7-Punkte-Struktur | App-Grundgerüst: State → DOM-Refs → Node-Erzeugung → Render → Events → Bindings → Initial Render |

---

## 4. Web-Technik (Unterrichtsstoff)

| Begriff | Kurzerklärung & Kontext |
|---|---|
| CORS | Cross-Origin Resource Sharing — Grund, warum Backend `/static` + `/api` unter einem Origin liefert (Jahr 2 WS UE 11) |
| CSP | Content Security Policy — Client-Security (Jahr 2 SS UE 8) |
| JWT | JSON Web Token — Auth-Client-Flow (WS UE 10): Token-Ablage, 401-Handling |
| Live Server | VS-Code-Extension für statisches Dev-Hosting (Jahr 1) |
| Manifest | Web App Manifest — PWA-Kern (SS UE 2): name, icons, `display`, `theme_color` |
| Mini-Hono-Referenz | Übungs-API (Deno/Hono) in `Beispielprojekte/hono_on_deno/` — Konsum-Ziel, kein Stoff |
| Offline-Fallback | SW-Strategie (cache-first/network-first, App-Shell, Fallback-Seite) (SS UE 3) |
| PWA | Progressive Web App — Manifest + Service Worker + HTTPS (SS UE 1–4) |
| REST | Representational State Transfer — CRUD-Konsum (WS UE 6), RFC-7807-Fehler (SS UE 5) |
| RTL | React Testing Library — strukturiertes Testen nach Rollen/Queries (WS UE 12) |
| Service Worker | Browser-Proxy-Script: Cache, Offline, Background-Sync, Update-Flow (SS UE 3–4) |
| SPA/MPA | Single/Multi-Page-Application — Router-Reload-Frage → SPA-Fallback (WS UE 8/11) |
| TS | TypeScript — Jahr 2 durchgehend (Jahr 1 nur Intro mit Deno-Transpilation) |
| Vite | Build-Tool/Dev-Server (Node/npm) — Scaffold, Build, `import.meta.env` (WS UE 2) |
| Vitest | Test-Runner im Vite-Ökosystem (WS UE 12) |
| WebSockets | Zustands-erhaltende Echtzeitverbindung; `WebSocket`-API, Reconnect (SS UE 6) |
