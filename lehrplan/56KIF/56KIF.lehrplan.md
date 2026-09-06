# WMC — Jahrgang-2-Extrakt (56KIF: Sem 5 WS + Sem 6 SS)

> **Block:** Jahr 2, Kolleg (`5KIF` WS → `6KIF` SS; Kohorte 5AKIF → 6AKIF)
> **Rechtsbasis:** BGBl. II Nr. 368/2022, Anlage 1.9 — WMC ist **kein eigenes Unterrichtsfach**
> der Anlage; schulautonomes Fach der HTL Spengergasse (Fußnote 1 der Stundentafeln + § 3 VO).
> **Referenz-Raster:** Anlage 1.10, BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021 —
> Fach „5. Webprogrammierung und Mobile Computing", KM3–KM10; hier komprimiert KM5–KM10.
> **Quelle (Volltext, dreischichtig):** [`../LEHRPLAN.md`](../LEHRPLAN.md) ①
> · **UE-Plan:** [`../jahr2-einheiten.md`](../jahr2-einheiten.md) · Extrakt-Datum: 2026-09-06

## Anl. 1.9 — „Netzwerksysteme und verteilte Systeme" (NvSdS), KM3 + KM4

### Kompetenzmodul 3 — Bildungs- und Lehraufgabe

Die Studierenden können

- die Architektur verteilter Systeme erklären sowie die Aufgaben und die Funktionsweisen
  der verschiedenen Komponenten von verteilten Systemen beschreiben;
- einfache verteilte Systeme entwerfen und implementieren, implementierte Systeme
  analysieren sowie vorgegebene Algorithmen auf ihre Korrektheit überprüfen und testen.

**Lehrstoff:** Bereich Architektur und Entwicklung verteilter Systeme: Hardware- und
Software-Architektur verteilter Systeme; private Server-Netze; öffentliche Netze.
Webapplikationen; Client-Server Systeme; Interprozesskommunikation.

### Kompetenzmodul 4 — Bildungs- und Lehraufgabe

Die Studierenden können

- die notwendigen Entwicklungsumgebungen für verteilte Systeme einrichten, in Betrieb
  nehmen und dokumentieren;
- einfache Applikationen für verteilte Systeme entwerfen implementieren, analysieren
  und testen;
- Synchronisationsmethoden zwischen verschiedenen Applikationen korrekt verwenden.

**Lehrstoff:** Applikationen für verteilte Systeme, Entwicklungsumgebungen, Einbindung
in das Anwendungssystem. Serviceorientierte Architektur (SOA); Web-Services;
Enterprise Application Architecture; Cloud Computing; Middleware; Multi Tier Systeme.

## Anl. 1.9 — PSE-Haken (web-nah)

- **KM2:** Userinterfaces, Elemente graphischer Benutzeroberflächen, Eventhandling,
  Design, Layout, Usability; Design Patterns für verteilte Anwendungen.
- **KM3:** Modellierung, Softwarearchitektur, Design Patterns; Unit Tests, erweiterte
  Teststrategien; Prozesse, Threads, Kommunikation und Synchronisation.

> Serverseitige Umsetzung (PSE/POS) liegt bei Kolleg:innen (C#/.NET); WMC vermittelt
> Architektur-Verständnis und Konsumenten-Perspektive.

## Referenz-Raster Anl. 1.10 — KM5–KM10 (komprimiert auf Sem 5/6)

| KM (Anl. 1.10) | Lehrstoff (getreuer Extrakt) | WMC-Umsetzung |
|----------------|------------------------------|---------------|
| **5** (Jg III WS) | Kommunikation Frontend/Backend. Dynamische Frontends, Funktionen Backend. Komplexe Elemente von Auszeichnungssprachen, Formatierungstechniken. Komplexe Elemente von Skriptsprachen, dynamische Elemente, Gestaltungsvorlagen. HTTP(S)-Protokoll. | WS: TS/JSX, `useEffect`/fetch, HTTP-Konzepte, REST-Konsum |
| **6** (Jg III SS) | Aktuelle Webtechniken, Skriptsprachen, Datenanbindung. Webapplikationen clientseitig entwickeln, Usability. *(Webbenutzerschnittstellen mit Hilfe eines Webframeworks entwickeln; Backends mit Datenbankanbindung.)* | React-Kern, Router, State-Management (React als Webframework) |
| **7** (Jg IV WS) | Software-Architektur verteilter Systeme. Web Development Stack, Sockets, Internet of Things. | WS UE 1/11 (Architektur, Deployment); SS UE 6 (WebSockets-Client); IoT als Bonus-UE |
| **8** (Jg IV SS) | Mobile Applications, Entwicklungsumgebungen, Einbindung in das Anwendungssystem. Authentifizierung, Webservices, REST. | WS UE 6/10 (REST-CRUD, JWT-Auth-Client); SS UE 1–5 (PWA), UE 8 (Client-Security) |
| **9** (Jg V WS) | Serviceorientierte Architektur. Enterprise Application Architecture, Server Applications, Middleware. | SS UE 5/9 (Konzept-UEs; Server-Umsetzung → POS) |
| **10** (Jg V SS) | Komplexe verteilte Systeme, Multi-Tier-Systeme (entwerfen, implementieren, strukturiert testen, aktuelle Technologien) | WS UE 12–13 (Vitest/RTL), SS UE 8–13 (Abschlussprojekt Multi-Tier) |

> **Anl.-1.9-Deckung:** NvSdS KM3/KM4 → WS UE 1/11, SS UE 9 (Konzept-UEs) · PSE KM3
> (Teststrategien) → WS/SS Test-UEs. Detailzuordnung pro UE: „Abdeckung"-Tabelle in
> [`../jahr2-einheiten.md`](../jahr2-einheiten.md).
