# KM8 — Mobile Applications, Auth, Webservices/REST

**Referenz:** Anlage 1.10 (BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021), Fach
„5. Webprogrammierung und Mobile Computing", IV. Jahrgang, 8. Semester — Kompetenzmodul 8
**Zuordnung in diesem Repo:** Jahr 2, **Sem 5 (WS) + Sem 6 (SS), Anteil-KM** (Komprimierung), Ordner `lehrplan/wmc-kif/56KIF/`
**Zeitmodell:** 3 h-Block/W → ~13 UE + 2 PLF pro Semester
**Anl.-1.9-Haken:** NvSdS KM4 (Synchronisationsmethoden, Einbindung in das Anwendungssystem)
**Semesterplan:** `unterricht/WMC/jg2-einheiten.md` — WS UE 6, 10 · SS UE 1–5, 8

## Bildungs- und Lehraufgabe (Wortlaut Anl. 1.10)

Die Schülerinnen und Schüler können

- sichere Applikationen für mobile Systeme entwerfen, implementieren, analysieren und testen;
- Synchronisationsmethoden zwischen sicheren Applikationen verwenden.

## Lehrstoff (Wortlaut Anl. 1.10)

Mobile Applications, Entwicklungsumgebungen, Einbindung in das Anwendungssystem.
Authentifizierung, Webservices, REST.

## Worum geht es?

Das Mobile-&-Sicherheits-Modul — zwei Achsen:

1. **Mobile Computing:** App-Entwicklungs-Besonderheiten (Anwendungsdomänen wie
   Games/Sports/IoT, Device-Kontext, Installierbarkeit). Im Stack dieses Repos als
   **PWA** (Manifest, Service Worker, Offline-Cache, Update-Flow) — ein Stack statt
   Store-Split; Native/Hybrid nur als Bewertungsrahmen.
2. **Auth & Webservices:** JWT-Login-Flow aus Konsumentensicht (Token-Ablage
   Memory vs. `localStorage`, geschützte Routen, 401-Handling), REST-Design
   aus Konsumentensicht (Ressourcen, Versionierung, Fehlerformate RFC 7807,
   OpenAPI-Doku), Client-Security (XSS/CORS/CSP, Token-Storage-Tradeoffs).

## Abdeckung Jahr 2 (Plan)

| UE | Thema | Anmerkung |
|----|-------|-----------|
| WS 6 | REST-Konsum (CRUD) gegen Mini-Hono-Referenz | Webservices/REST-Haken |
| WS 10 | Auth-Client (JWT, protected Routes, 401-Handling) | Authentifizierung-Haken |
| SS 1 | Mobile-Strategien (native vs. hybrid vs. PWA) | Mobile-Planungs-Haken |
| SS 2–4 | PWA I–III (Manifest, Service Worker, Offline, Sync/Push/Update) | „Einbindung in das Anwendungssystem" |
| SS 5 | Webservices vertieft (Versionierung, Paginierung, RFC 7807, OpenAPI) | REST vertieft |
| SS 8 | Client-Security (XSS, CORS, CSP, OWASP-Top-10-Ausschnitt) | „sichere Applikationen" |

## Vorwissen / Nachwirkung

- Vorwissen: KM5 (REST-Grundform), KM6 (App-Shell in React).
- Nachwirkung: KM10 (Abschlussprojekt = Multi-Tier-React-PWA mit Auth + Offline).
