# Jahr 1 (Sem 3+4) – Einheitenplan (Rückpflege SJ 2025/26)

> **Status:** Rückgepflegt aus den archivierten Klassenordnern
> ([`archiv/2025-26-4aaif/`](../archiv/2025-26-4aaif/) ·
> [`2025-26-4akif`](../archiv/2025-26-4akif/) ·
> [`2025-26-4bkif`](../archiv/2025-26-4bkif/) ·
> [`2025-26-4caif`](../archiv/2025-26-4caif/)).
> **Kohorten:** 3AAIF→4AAIF, 3BKIF→4BKIF, 3CAIF→4CAIF (Aufbaulehrgang), 3AKIF→4AKIF (Kolleg).
> **Zeitmodell:** faktisch **2 h/W** (schulautonom, s. [`LEHRPLAN.md`](LEHRPLAN.md) ②).
> **Offizieller Bezug:** Anl. 1.9 „Basis-Webtechniken" (Beschreibungssprachen,
> Formatierungstechniken, Skriptsprachen) + Parent-Raster Anl. 1.10 KM3–KM4 (teils KM5/6).
> **Absorbiert:** das frühere `docs/Lehrinhalte_SS.md` (dortiger Stundenplan ist unten
> in die SS-Tabelle eingearbeitet; Datei entfernt).

---

## Wintersemester (Sem 3) — HTML5 & CSS3

| UE | Thema | Inhalt / HÜ | Quelle (Beleg) |
|----|-------|-------------|-----------------|
| 1 | **Tooling & Git** | Git/GitHub-Repo anlegen, VS Code + Extensions (Live Server, W3C Validator), DevTools, caniuse.com. HÜ: git im Terminal, Repo-URL senden | `4bkif/2025-09*` |
| 2 | **HTML-Grundlagen** | Semantisches HTML („HTML ist ein Graph"), Tag-Repertoire; eigene Site „über mich" mit Fokus Struktur. HÜ: index.html anlegen | `4aaif/2025-09-03`, `4bkif/2025-09_html` |
| 3 | **CSS-Basics** | Box-Model, `width`, `rgba`, `box-sizing`, `<details>`, W3C-Validierung. HÜ: Site dekorieren (CSS-Folie) | `4aaif` 24.9., `4bkif/2025-10-02` |
| 4 | **CSS-Selektoren** | Selektoren bis excl. Attribut; Übung flukeout.github.io. HÜ: ≥10 Screenshots | `4aaif` 8.10., `4bkif/2025-10-09` |
| 5 | **Position & Cases** | `position`-Recherche (Kevin Powell), Bilder/Cases gestalten | `4bkif/2025-10-02_cases_click_images` |
| 6 | **Flexbox** | Flex-Modell, Flexbox-Froggy | `4aaif` 15.10., `4bkif/2025-10-23_flexbox` |
| 7 | **Grid & Responsive** | CSS Grid, Template-Areas, Media Queries, Grid-Garden; Centering-Rezepte, Fonts | `4aaif/2025-10_grid`, `4bkif/2025-11-06_grid` |
| 8 | **CSS Nesting** | verschachtelte Selektoren, `&` | `4bkif/2025-12-04_nested_css` |
| 9 | **Bootstrap** | Framework-Einstieg, Grid/Components | `4aaif/2025-11-19_bootstrap`, `4caif/2025-11-27_bootstrap` |
| 10 | **Konsolidierung/Design** | Wiederholung, Design mit KI (Impuls), Testvorbereitung | `4bkif/2025-12-18_test_vorbereitung`, `2026-01-29_matt_maher` |
| T | **Schriftlicher Test** (15. 1. 2026, MC) | HTML/CSS-Stoff WS | `4bkif` README |
| P | **WS-Projekt: Website** | 2–5 Unterseiten, responsive, Flexbox/Grid/Position anwenden; Peer-Review ([`PROJEKT.md`](../PROJEKT.md), [`PEER_REVIEW.md`](../PEER_REVIEW.md)); Abgabe 8. 1., Besprechung 14./21. 1. | `4bkif` README „Abgabe Website" |

## Sommersemester (Sem 4) — JavaScript (→ TS-Intro)

| UE | Thema | Inhalt / HÜ | Quelle (Beleg) |
|----|-------|-------------|-----------------|
| 1 | **JS-Intro** | Geschichte (Eich 1995, Browser Wars, Dahl/Node), Runtimes (Node/Deno/Browser), Browser-Console, Datentypen/`typeof` (string, number, boolean, bigint), `let`/`const`, Kommentare, `==` vs `===`; git für HÜ | `4aaif/2026-02-12_js_intro`, `4bkif` 19.2. |
| 2 | **Funktionen & Objekte** | Functions (arguments-Objekt), anonyme/Lambda, Template Strings, Objekte & JSON, `document.getElementBy*`/`querySelector`, Debugger. HÜ: Taschenrechner | `4aaif` 18./25.2., `4bkif/2026-02-26_functions` |
| 3 | **Arrays funktional** | `map`/`filter`/`reduce`, `slice`/`splice`, Spread `...`, Arrow-Shortcuts, `for...of entries()`, Sortieren mit Comparator (gemischte Typen), `JSON.parse`/`stringify`, Clean Functions. **Mini-Test / Knowledge Check** | `4aaif/2026-03-04_array_functions`, `2026-03-04_knowledge`, `4bkif` 5.3. |
| 4 | **Objekte & Klassen** | Objekte-Folie, Klassen/Constructor/Members, private Felder `#`, Ternär, Truthy | `4bkif` 12.3., `4aaif/2026-03-11_array_übung` |
| 5 | **JS im Browser I** | `type="module"` (window-Scope!), `querySelectorAll` → Array, `innerText` vs `innerHTML`, CSS-Selektoren im DOM; Runtimes (node/deno/bun) | `4aaif/2026-03-18_js_im_browser`, `4bkif/2026-04-10_js_im_browser` |
| 6 | **Promises & async** | Promises, `async`/`await`, `Promise.all`/`race`, Fetch-API (3 UE, nicht am Stück); Exceptions `try/catch`, `defer`, `addEventListener` statt `onclick` | `4aaif/2026-03-26_promise`, `4caif` 26.3., `4aaif` 8.4. |
| 7 | **DOM-Manipulation** | `createElement`, `appendChild`, `remove`, `classList`, Events mit Callbacks; Sortier-Tabellen (HÜ: Toggle-Header, `localeCompare`) | `4aaif/2026-04-22_dom`, `4caif/2026-04-09_js_im_browser` |
| 8 | **State-Driven UI (7-/8-Punkte)** | App-Struktur (State → Render → Events), TodoApp v1/v2 (Prioritäten-HÜ), Flughafen-Board/Musikgeschäft | `4bkif/2026-04-23_8_punkte_struktur`, `4caif/2026-04-16__TodoApp` |
| 9 | **TS-Intro & Transpilation** | TypeScript-Primer (Folie TypeScript-GRG), Deno-Transpile-Projekt (HÜ: fehlerfrei transpilieren) | `4aaif/2026-04-29_transpile`, `4bkif` 7.5. |
| 10 | **Konsolidierung/Certs** | Knowhow & Zertifikate, agentic coding (Impuls), Stundenwiederholungen (Promises/Fetch/DOM) | `4bkif/2026-03-26_knowhow_und_certs`, `4caif/2026-03-19_agentic_coding` |
| PLF | **Praktische PLF** (Mai) | DOM/Arrays/async — Ticket-Angabe; Lösung archiviert | `4caif/2026-05-07_plf-ticket`, `4aaif/2026-05-13_plf_lsg` |
| P | **SS-Projekt: Webapp** | WS-Website mit SS-Technologie erweitern **oder** neu: client-side JS, **fetch**, DOM-Nodes tauschen/erzeugen/löschen, Arrays, 3 (Unter-)Seiten; Inspiration public-apis; **Abgabevideo** (OBS, 5–7 min: Demo + Code-Besprechung); Deadline ~10./15. 6., Präsentationen 18./25. 6. | [`PROJEKT.md`](../PROJEKT.md), [`../wmc_ss_projekt_webapp.md`](../docs/wmc_ss_projekt_webapp.md), `4caif` README |

## Hinweise für die nächste Jahr-1-Iteration (3AAIF/4AAIF ab SJ 2026/27)

- **Bewährt:** Games als Übungsvehikel (Flexbox-Froggy, Grid-Garden, flukeout);
  public-apis als Projekt-Inspiration; Abgabevideo via OBS.
- **Stundenwiederholungen** unangekündigt (Mikro-Tests) — Qualität zählt zur Mitarbeit.
- **Skriptum:** [`../skriptum.md`](../docs/skriptum.md) (JS/TS, Frontend-Fokus) als
  Selbststudium-Begleitung; Folien unter `Unterlagen/` (HTML, CSS, JS, HTTP).
- **Vorgriff auf Jahr 2 sichbar machen:** TS-Intro (UE 9) und 7-Punkte-Struktur (UE 8)
  sind die Brücke zu React/TS — bei der nächsten Iteration explizit benennen.
