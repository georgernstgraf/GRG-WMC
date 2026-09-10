# KM7 — Architektur verteilter Systeme, Web-Stack, Sockets

**Referenz:** Anlage 1.10 (BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021), Fach
„5. Webprogrammierung und Mobile Computing", IV. Jahrgang, 7. Semester — Kompetenzmodul 7
**Zuordnung in diesem Repo:** Jahr 2, **Sem 5 (WS) + Sem 6 (SS), Anteil-KM** (Komprimierung), Ordner `lehrplan/wmc-kif/56KIF/`
**Zeitmodell:** 3 h-Block/W → ~13 UE + 2 PLF pro Semester
**Anl.-1.9-Haken:** NvSdS KM3 (Architektur verteilter Systeme) + NvSdS KM4 (Entwicklungsumgebungen)
**Semesterplan:** `unterricht/WMC/jg2-einheiten.md` — WS UE 1–2, 11 · SS UE 6 (+ IoT-Bonus)

## Bildungs- und Lehraufgabe (Wortlaut Anl. 1.10)

Die Schülerinnen und Schüler können

- die Architektur verteilter Systeme erklären sowie die Aufgaben und die Funktionsweisen
  der verschiedenen Komponenten von verteilten Systemen beschreiben;
- verteilte Systeme entwerfen und implementieren, implementierte Systeme analysieren
  sowie vorgegebene Algorithmen auf ihre Korrektheit überprüfen und testen.

## Lehrstoff (Wortlaut Anl. 1.10)

Software-Architektur verteilter Systeme.
Web Development Stack, Sockets Internet of Things.

## Anl.-1.9-Wortlaut (NvSdS KM3)

Bildungs- und Lehraufgabe: die Architektur verteilter Systeme erklären sowie die
Aufgaben und die Funktionsweisen der verschiedenen Komponenten von verteilten
Systemen beschreiben; einfache verteilte Systeme entwerfen und implementieren,
implementierte Systeme analysieren sowie vorgegebene Algorithmen auf ihre Korrektheit
überprüfen und testen. Lehrstoff: Bereich Architektur und Entwicklung verteilter
Systeme: Hardware- und Software-Architektur verteilter Systeme; private Server-Netze;
öffentliche Netze. Webapplikationen; Client-Server Systeme; Interprozesskommunikation.

## Worum geht es?

Das „wo sitzt was"-Modul: Client/Server/Multi-Tier als Organisationsprinzip,
Rollenverteilung WMC (Frontend) vs. POS (Backend) im Gesamtsystem, und der
Web-Stack von HTTP über Build-Pipeline bis zur Auslieferung. Sockets als
Zustands-erhaltende Echtzeitvariante (Kontrast zum HTTP-Request-Zyklus).

## Abdeckung Jahr 2 (Plan)

| UE | Thema | Anmerkung |
|----|-------|-----------|
| WS 1 | Auftakt: Architektur verteilter Systeme + TS-Refresher | Client/Server, Multi-Tier, wo sitzt WMC vs. POS |
| WS 11 | Deployment: `vite build` → Backend liefert Frontend (ein Origin, SPA-Fallback) | NvSdS KM3/4-Haken, C#/ASP.NET-Brücke |
| SS 6 | Echtzeit: WebSockets-Client (Protokoll, Reconnect, SSE/Polling-Vergleich) | Sockets-Haken |
| SS +2 (Bonus) | IoT/MQTT-Exkurs | IoT-Haken (Anl. 1.10 KM7) |

## Vorwissen / Nachwirkung

- Vorwissen: Jahr 1 (Client/Server-Grundbild, fetch).
- Nachwirkung: KM9/KM10 (SOA/Middleware/Multi-Tier) — Vertiefung derselben Architektur-Gedanken.
