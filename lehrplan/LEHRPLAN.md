# LEHRPLAN — Webprogrammierung und Mobile Computing (WMC, Erwachsenenbildung)

> **Dreischichtig:** ① **offizieller Extrakt** (RIS, verbindlich) · ② **Schuladaption**
> (Stundentafeln der HTL Spengergasse, Abendform) · ③ **Didaktik/Stack** (unsere Umsetzung).
> Rechtsstand & Fundstellen: [`RIS.md`](RIS.md) · Metadaten/Stundentafeln/Klassenkürzel:
> [`METADATA.md`](METADATA.md) · Semesterpläne: [`jg1-einheiten.md`](../unterricht/WMC/jg1-einheiten.md) ·
> [`jg2-einheiten.md`](../unterricht/WMC/jg2-einheiten.md).
>
> **Geltungsbereich dieses Repos:** WMC in der **Erwachsenenbildung** (Aufbaulehrgang +
> Kolleg für Berufstätige für Informatik, Abendform). In der Tagesschule der Spengergasse
> werden die Web-Inhalte im Fach **POS** (Programmieren und Software Engineering)
> abgedeckt — dort unterrichten Kolleg:innen; dieses Repo enthält **kein**
> Tagesschul-Material.

---

# ① Offizieller Extrakt (RIS)

## Rechtsrahmen

| Feld | Wert |
|------|------|
| **Verordnung** | **BGBl. II Nr. 368/2022** — „Lehrpläne der Sonderformen der Höheren technischen und gewerblichen Lehranstalten sowie Lehrplan des Vorbereitungslehrganges für Berufstätige für technische Fachrichtungen" |
| **Anlagen** | Anlage 1 (allgemeiner Teil) + **Anlage 1.9 (Informatik)** — § 1 Z. 9: fünfsemestriger Aufbaulehrgang, viersemestriges Kolleg, siebensemestriger Aufbaulehrgang, sechssemestriges Kolleg für Berufstätige für Informatik |
| **Inkrafttreten (§ 4)** | Semesterweise aufsteigend: 1.–3. Semester ab Kundmachung (4. 10. 2022), 4. Semester ab 1. 2. 2023, 5. Semester ab 1. 9. 2023, weitere jeweils 1. 2./1. 9. der Folgejahre — **inzwischen vollständig in Kraft** |
| **Schulautonomie (§ 3)** | Weichen Stundensumme oder Semester-Verteilung eines Gegenstands vom referenzierten Gegenstand ab, sind Bildungs-/Lehraufgaben und Lehrstoff **schulautonom auf die Semester aufzuteilen**. Ebenso Fußnote 1 aller Stundentafeln: *„Durch schulautonome Lehrplanbestimmungen kann von dieser Stundentafel im Rahmen des Abschnittes IV abgewichen werden."* |

## Struktur der Anlage 1.9 — kein eigenes Fach „WMC"

Die Anlage 1.9 enthält vier Stundentafel-Varianten:

| Variante | Dauer | von der Spengergasse geführt? |
|----------|-------|-------------------------------|
| I.1 | Aufbaulehrgang, 5 Semester | nein |
| I.2 | Kolleg, 4 Semester | nein |
| **I.3** | **Aufbaulehrgang, 7 Semester** | **ja** |
| **I.4** | **Kolleg, 6 Semester** | **ja** |

**Wesentlich:** Der offizielle Lehrplan der Sonderformen kennt **kein eigenständiges
Unterrichtsfach „Webprogrammierung und Mobile Computing"**. Die Web-Inhalte stecken in
drei Gegenständen (Auszüge getreu aus der konsolidierten Fassung,
`Gesetzesnummer 20012030`):

### a) „Netzwerke und verteilte Systeme" (1. Semester, 2 h) — Bereich Basis-Webtechniken

**Bildungs- und Lehraufgabe (Auszug):** Die Studierenden können im Bereich
Basis-Webtechniken

- die wesentlichen Sprachelemente zur Gestaltung von Webseiten anwenden;
- Webseiten unter Einsatz von Skriptsprachen gestalten, dynamische Elemente einbinden
  und Gestaltungsvorlagen erstellen.

**Lehrstoff (Auszug):** *Bereich Basis-Webtechniken:* Beschreibungssprachen,
Formatierungstechniken, Skriptsprachen, Datenanbindung.

### b) „Netzwerksysteme und verteilte Systeme" — Bereich Architektur und Entwicklung verteilter Systeme (KM3 + KM4)

**Kompetenzmodul 3 — Bildungs- und Lehraufgabe (Auszug):**

- die Architektur verteilter Systeme erklären sowie die Aufgaben und die Funktionsweisen
  der verschiedenen Komponenten von verteilten Systemen beschreiben;
- einfache verteilte Systeme entwerfen und implementieren, implementierte Systeme
  analysieren sowie vorgegebene Algorithmen auf ihre Korrektheit überprüfen und testen.

**Lehrstoff:** *Bereich Architektur und Entwicklung verteilter Systeme:* Hardware- und
Software-Architektur verteilter Systeme; private Server-Netze; öffentliche Netze.
Webapplikationen; Client-Server Systeme; Interprozesskommunikation.

**Kompetenzmodul 4 — Bildungs- und Lehraufgabe (Auszug):**

- die notwendigen Entwicklungsumgebungen für verteilte Systeme einrichten, in Betrieb
  nehmen und dokumentieren;
- einfache Applikationen für verteilte Systeme entwerfen implementieren, analysieren
  und testen;
- Synchronisationsmethoden zwischen verschiedenen Applikationen korrekt verwenden.

**Lehrstoff:** Applikationen für verteilte Systeme, Entwicklungsumgebungen, Einbindung
in das Anwendungssystem. **Serviceorientierte Architektur (SOA); Web-Services;
Enterprise Application Architecture; Cloud Computing; Middleware; Multi Tier Systeme.**

### c) „Programmieren und Software Engineering" (PSE) — web-nahe Anteile

- KM2: *Userinterfaces, Elemente graphischer Benutzeroberflächen, Eventhandling, Design,
  Layout, Usability; **Design Patterns für verteilte Anwendungen**.*
- KM3: Modellierung, Softwarearchitektur, Design Patterns; Unit Tests, erweiterte
  Teststrategien; Prozesse, Threads, Kommunikation und Synchronisation.

> **Hinweis:** Die serverseitige Umsetzung (PSE/POS) liegt an der Spengergasse bei
> Kolleg:innen (C#/.NET) — siehe ② und ③.

### Qualifikationsprofil (Abschnitt III, Auszug)

> *„Die Absolventinnen und Absolventen des Aufbaulehrgangs bzw. des Kollegs für
> Berufstätige für Informatik können ingenieurmäßige Tätigkeiten als Applikations- und
> Softwareentwickler, Informationssystem-Organisator, System- und Anforderungsanalytiker,
> Applikationsdesigner, Datenbankdesigner und -programmierer, Anwendungs- und
> Systemprogrammierer, Software Engineer, Systemberater, Projektmanager, Datenschutz-
> und Datensicherheitstechniker, Systemadministrator, Systemmanager oder Informatik-
> Trainer ausführen."*

## Parent-Referenz: Tagesschul-Anlage 1.10 (inhaltliche Herkunft des Fachs WMC)

Das schulautonome Fach „Webprogrammierung und Mobile Computing" der Spengergasse lehnt
sich inhaltlich an den gleichnamigen Unterrichtsgegenstand **„5. Webprogrammierung und
Mobile Computing"** der **Anlage 1.10, BGBl. II Nr. 262/2015 idF BGBl. II Nr. 383/2021**
(Tagesschule HL für Informatik) an. Dortige Stundentafel: I. –, II. 2(1), III. 2(2),
IV. 2(1), V. 2 (Summe 8). Der dortige Lehrstoff (KM3–KM10) dient hier als
**Referenz-Raster** für die inhaltliche Einordnung unserer Semesterpläne:

| KM (Anl. 1.10) | Lehrstoff (getreuer Extrakt) |
|----------------|------------------------------|
| **3** (Jg II WS) | Kommunikation Browser/Server, Komponenten von Webseiten, Auszeichnungssprachen, Formatierungstechniken. Einfache Elemente von Skriptsprachen, dynamische Elemente, Gestaltungsvorlagen. |
| **4** (Jg II SS) | Aktuelle Webtechniken, Skriptsprachen. Webapplikationen clientseitig entwickeln. |
| **5** (Jg III WS) | Kommunikation Frontend/Backend. Dynamische Frontends, Funktionen Backend. Komplexe Elemente von Auszeichnungssprachen, Formatierungstechniken. Komplexe Elemente von Skriptsprachen, dynamische Elemente, Gestaltungsvorlagen. HTTP(S)-Protokoll. |
| **6** (Jg III SS) | Aktuelle Webtechniken, Skriptsprachen, Datenanbindung. Webapplikationen clientseitig entwickeln, Usability. *(Webbenutzerschnittstellen mit Hilfe eines Webframeworks entwickeln; Backends mit Datenbankanbindung.)* |
| **7** (Jg IV WS) | Software-Architektur verteilter Systeme. **Web Development Stack, Sockets, Internet of Things.** |
| **8** (Jg IV SS) | **Mobile Applications, Entwicklungsumgebungen, Einbindung in das Anwendungssystem. Authentifizierung, Webservices, REST.** |
| **9** (Jg V WS) | Serviceorientierte Architektur. **Enterprise Application Architecture, Server Applications, Middleware.** |
| **10** (Jg V SS) | **Komplexe verteilte Systeme, Multi-Tier-Systeme.** (entwerfen, implementieren, strukturiert testen, aktuelle Technologien) |

---

# ② Schuladaption (HTL Spengergasse, Abendform)

## Schul-Stundentafeln — WMC als schulautonomes Fach

Die Spengergasse führt „Webprogrammierung und Mobile Computing" als **eigenes Fach**
(schulautonomer Ausbildungsschwerpunkt; Legitimation: Fußnote 1 der Stundentafeln +
§ 3 der VO). Quelle: Schulwebsite Abendform (`RIS.md` §2).

**Aufbaulehrgang (7 Semester) — WMC-Zeile:**

| Semester | I | II | III | IV | V | VI | VII | Summe |
|----------|---|----|-----|----|---|----|-----|-------|
| WMC | – | 1 | 1 | 1 | 1 | 3 | 3 | 10 |

**Kolleg (6 Semester) — WMC-Zeile:**

| Semester | I | II | III | IV | V | VI | Summe |
|----------|---|----|-----|----|---|----|-------|
| WMC | 1 | 1 | 1 | 1 | 3 | 3 | 10 |

> Deckungsgleiche Verteilung, um ein Semester versetzt — darum ist der WMC-Inhalt in
> **Aufbaulehrgang und Kolleg identisch** („beide Jahre gleich").

## Georgs Stoffverteilung (Ist-Stand)

| Block | Semester | Stunden (Ist) | Inhalt | Status |
|-------|----------|---------------|--------|--------|
| **Jahr 1** | Sem 3+4 (WS+SS) | **faktisch 2 h/W** (statt 1 h lt. Tafel — schulautonome Verschiebung) | **WS:** HTML5, CSS3 (Flexbox, Grid, Nesting, Responsive, Bootstrap), Website-Projekt · **SS:** JavaScript (Basics, Arrays, DOM, async/fetch), TS-Intro, Klassen, 7-Punkte-Struktur | **unterrichtet** (zuletzt SJ 2025/26, archiviert in [`archiv/`](../archiv/); Rückpflege: [`jg1-einheiten.md`](../unterricht/WMC/jg1-einheiten.md)) |
| **Jahr 2** | Sem 5+6 (WS+SS) | 3 h-Block (Abendeinheit) | **React + TypeScript** (Vollzeit-Frontend: Components, Hooks, Router, State, Auth-Client, PWA, Tests), REST-Konsum, Architektur verteilter Systeme | **geplant ab SJ 2026/27** (5AKIF/6AKIF; Plan: [`jg2-einheiten.md`](../unterricht/WMC/jg2-einheiten.md)) |

**Offene Punkte (mit Fachgruppe zu verifizieren):** Wer übernimmt die 1-h-WMC-Semester
außerhalb von Georgs Blöcken (Aufbaulehrgang Sem 2 + 5 bzw. Kolleg Sem 1–4 im Detail)
sowie das 7. Semester des Aufbaulehrgangs (3 h).

## Abgrenzung zum Fach POS

Serverseitige Programmierung, Datenbankanbindung und C#-Stack liegen im Fach
**„Programmieren und Software Engineering" (POS)** bei Kolleg:innen. WMC Jahr 2 baut
**kein** eigenes Backend als Stoff auf; eine **Mini-Hono-Referenz** (Deno) dient
lediglich als Konsum-API für REST-/Auth-Übungen und als Demonstration des
Deployment-Musters (③).

## Tagesschule (nur zur Klarstellung)

In der Tagesschule (Anlage 1.10, Fach „Webprogrammierung und Mobile Computing",
Stundentafel II–V à 2 h) werden die Web-Inhalte an der Spengergasse faktisch im
POS-Kontext (Kolleg:innen) abgedeckt. **Dieses Repo betrifft nur die Abendform.**

---

# ③ Didaktik & Stack (unsere Umsetzung)

## Didaktische Grundsätze (Erwachsenenbildung)

- **Zielgruppe:** Berufstätige; Unterricht Mo–Do 17:10–22:00 (Abendblöcke).
- **Semestrierte Klassennamen:** `3AAIF` (WS) → `4AAIF` (SS) → … bzw. `5AKIF` → `6AKIF`
  (Decoder: [`METADATA.md`](METADATA.md)).
- **Handlungsorientierung & Projektbezug** (Didaktische Grundsätze, Anlage 1):
  Jahr 1 = Website-Projekt + Peer-Review; Jahr 2 = React-Projekt inkl. Build/Deployment.
- **Beurteilung:** PLF / Hausübungen / Mitarbeit je 1/3 (Root-[`README.md`](../README.md)).
- **Hoher Selbststudium-Anteil:** Materialien (Skriptum, Folien, Übungen) sind so
  aufbereitet, dass Versäumtes nachholbar ist; Hausübungs-Pipeline über GitHub-Repos.

## Technologie-Stack

| Schicht | Jahr 1 (Ist) | Jahr 2 (ab 2026/27) |
|---------|--------------|---------------------|
| Sprache | HTML5, CSS3 (Nesting, Custom Properties), JavaScript (ES6+), TS-Intro | **TypeScript** durchgehend |
| Frontend | Vanilla DOM, 7-Punkte-Struktur | **React + Vite (Node/npm)** |
| Runtime/Tooling | Browser, Live Server, Deno (Transpilation) | Node/Vite (Dev), Browser |
| Übungs-API | öffentliche APIs (fetch) | **Mini-Hono-Referenz (Deno)**: REST + JWT-Auth + statische Auslieferung — kein Stoff, nur Konsum-Ziel |
| Mobile | Responsive Design | **PWA** (Manifest, Service Worker, Offline) |
| Tests | — | **Vitest + React Testing Library** (strukturiertes Testen) |
| Backend (Stoff) | — | **entfällt** → POS (C#, Kolleg:innen) |

### Deployment-Prinzip (Zielbild, kein „Split-Brain")

Entwicklung: Vite-Dev-Server (Frontend) + API separat. **Produktiv-Zielbild:**
`vite build` erzeugt statische Assets, die **vom Backend ausgeliefert** werden
(Hono-Referenz: `/static` + `/api` unter einem Origin; dasselbe Muster gilt für das
C#-Backend aus POS, z. B. ASP.NET Static Files). Vorteile, die im Unterricht thematisiert
werden: ein Origin (kein CORS-Zwang), ein Deploy-Artefakt, betriebliche Gepflogenheit.

## Abdeckung: offizielle Lehrplan-Haken ↔ unsere Blöcke

| Offizieller Haken (①) | Jahr 1 (Vanilla) | Jahr 2 (React/TS) |
|------------------------|------------------|-------------------|
| Basis-Webtechniken (Beschreibungs-/Formatierungssprachen, Skriptsprachen) | **vollständig** (HTML/CSS/JS) | vertieft (TSX, TypeScript) |
| Anl. 1.10 KM3–KM4 (Referenz): Webseiten, Skriptsprachen, clientseitige Webapps | **vollständig** | — |
| Anl. 1.10 KM5–KM6 (Referenz): Frontend/Backend-Kommunikation, HTTP(S), Webframework, Usability | teilweise (fetch, async, HTTP) | **vollständig** (React als Webframework, REST-Konsum, Auth) |
| Anl. 1.9 NvS KM3/4 + Anl. 1.10 KM7 (Referenz): Architektur verteilter Systeme, Webapplikationen, Client-Server, Sockets | — | **Ja** (Architektur-UE, WebSockets-Client, Deployment) |
| Anl. 1.10 KM8 (Referenz): Mobile Applications, Authentifizierung, Webservices, REST | — | **Ja** (PWA, JWT-Auth-Client, REST-Konsum) |
| Anl. 1.9 NvS KM4 + Anl. 1.10 KM9/10 (Referenz): SOA, Web-Services, EAA, Middleware, Multi-Tier, strukturiertes Testen | — | **Ja** (Konzept-UEs + Vitest/RTL; Server-Umsetzung → POS) |

> Serverseitige Implementierung (EAA, Middleware konkret in C#) ist POS-Stoff; WMC
> vermittelt Architektur-Verständnis und die Konsumenten-Perspektive.

## Anleitung: Semesterpläne generieren

1. **Lehrstoff verankern:** Soll aus ② (mit Rückblick auf ①) in den Kopf des
   Plan-Dokuments.
2. **Zeitmodell:** Jahr 1 = 2 h/W; Jahr 2 = 3 h-Block/W → **~13 echte UE + 2 PLF** pro
   Semester (Netto nach Ferien/Terminen; Bonus-UE + reservierte Slots separat).
3. **Konvention pro UE:** `UE | Thema | KM-Bezug | Inhalt/HÜ` (Tabellenform, wie in
   [`jg2-einheiten.md`](../unterricht/WMC/jg2-einheiten.md)); KM-Bezug = Referenz-Raster Anl. 1.10
   (s. o.) + Anl.-1.9-Haken.
4. **Vorwissen verankern** (Verweis auf Vorjahr), **Bewertungsrahmen** PLF/HÜ/Mitarbeit
   je 1/3.
5. **Stack konsistent:** Jahr 2 = TS/React/Vite; deutsche Kommentare; kein eigener
   Backend-Stoff (POS-Abgrenzung beachten).

## Status der Planungs-Dokumente

| Block | Dokument | Status |
|-------|----------|--------|
| Jahr 1 (Sem 3+4) | [`jg1-einheiten.md`](../unterricht/WMC/jg1-einheiten.md) | **Rückgepflegt** (SJ 2025/26, Quellen: `archiv/2025-26-*`) |
| Jahr 2 (Sem 5+6) | [`jg2-einheiten.md`](../unterricht/WMC/jg2-einheiten.md) | **Geplant (SJ 2026/27, priorisiert)** |
