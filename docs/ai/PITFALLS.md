# Pitfalls

Things that do not work, subtle bugs, and non-obvious constraints.
Read this file carefully before making changes in affected areas.

- Anlage 1.9 (Sonderformen-VO) has NO standalone "Webprogrammierung und Mobile Computing" subject — searching the consolidated text for "Webprogrammierung"/"Mobile Computing" yields ~0 hits in the Informatik part. Web content lives in: "Netzwerke und verteilte Systeme" (Bereich Basis-Webtechniken), "Netzwerksysteme und verteilte Systeme" KM3/KM4 (verteilte Systeme, SOA, Web-Services, Multi-Tier), and PSE (Userinterfaces, Design Patterns für verteilte Anwendungen).
- RIS PDF links (.pdfsig / COO...pdf) do NOT convert via webfetch (raw binary dump). Use BgblAuth HTML variants where they exist (e.g. `.../BGBLA_2021_II_383/COO_2026_100_2_1890844.html`) or the consolidated `GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=<nr>` with curl → local grep/sed.
- RIS consolidated whole-law pages exceed the webfetch 5MB limit (Sonderformen-VO ≈ 11 MB). Download with curl (UA header) to /tmp and grep locally; Anlage boundaries are single huge HTML lines — grep -n for "Anlage 1.9"/"Anlage 2" to find ranges, then strip tags with python3.
- SearXNG queries with many quoted terms degrade to junk (bing). The braveapi engine surfaces RIS/spengergasse.at pages well; keep queries short and German.
- spengergasse.at PDF "LP_ab17_Informatik.pdf" (uploaded 2020-04) predates BGBl. II Nr. 368/2022 — likely outdated; the website Stundentafeln (page_id=2584) are newer and authoritative-ish for layer ②.
- Root README.md is client-side rendered by index.html on GitHub Pages — relative `.md` links must stay repo-relative and valid, or the SPA viewer 404s.
- AGENTS.md/README.md previously claimed day-school "3./4. Klassen" — wrong since repo is EB-only; class folders are semester-numbered EB classes. Keep docs aligned when classes advance (rename at semester break).
- `deno check` (strict) bricht bei Lesson-Demos schnell: Funktionsparameter ohne Typ sind `noImplicitAny`-Fehler, und Catch-Variablen sind `unknown` (Zugriff auf `.message` nur nach `instanceof Error` oder über einen Helper wie `fehlerText(err)`). Demos laufen mit `deno run` auch untypisiert, der Check ist der strenge Pfad.
- Print-Theme: dunkle CSS-Variablen via `@media (prefers-color-scheme: dark)` gewinnen in einer `@media print`-Regel nur, wenn dort derselbe `:root:not([data-theme="light"])`-Selektor (oder höhere Spezifität) überschrieben wird — ein bloßes `:root` reicht nicht.
- `deno fmt` formatiert auch HTML/SVG und rückt `<head>`/`<body>` ein — das widerspricht der Repo-HTML-Konvention (head/body auf Spalte 0). In Deno-Projekten daher `fmt.exclude` für `static/**/*.html` und `static/**/*.svg` setzen (siehe `Beispielprojekte/hono_on_deno/deno.json`); CSS/TS weiter formatieren lassen.
