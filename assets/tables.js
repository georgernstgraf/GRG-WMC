/* =========================================================================
   GRG-WMC — Tabellen-Querscroll.

   Hüllt jede Tabelle in ein .tabelle-scroll (Styles in assets/lesson.css).
   Damit scrollt eine zu breite Tabelle waagrecht IN sich selbst, statt das
   ganze Dokument über die Viewport-Breite hinauszuziehen — sonst verkleinert
   der mobile Browser die komplette Seite (Schrift!) und es bleibt ein leerer
   Streifen rechts (siehe PITFALLS, 2026-11-08).

   Die Hülle bekommt nur dann tabindex/role="region", wenn sie wirklich
   scrollt: eine Tabelle, die passt, soll kein Tab-Stopp und keine
   Screenreader-Region sein.

   Wird über assets/loader.js auf jeder Seite geladen.
   ========================================================================= */
(function () {
  "use strict";

  var LABEL = "Tabelle (waagrecht scrollbar)";

  function umhuellen(tabelle) {
    var eltern = tabelle.parentNode;
    if (!eltern) { return null; }
    if (eltern.classList && eltern.classList.contains("tabelle-scroll")) {
      return eltern;
    }
    var huelle = document.createElement("div");
    huelle.className = "tabelle-scroll";
    eltern.insertBefore(huelle, tabelle);
    huelle.appendChild(tabelle);
    return huelle;
  }

  function messen() {
    var huellen = document.querySelectorAll(".tabelle-scroll");
    for (var i = 0; i < huellen.length; i++) {
      var h = huellen[i];
      var breit = h.scrollWidth > h.clientWidth + 1;
      // .ist-breit malt den Randschatten, der den Querscroll anzeigt
      if (h.classList) { h.classList.toggle("ist-breit", breit); }
      if (breit) {
        if (!h.hasAttribute("tabindex")) { h.setAttribute("tabindex", "0"); }
        if (!h.hasAttribute("role")) {
          h.setAttribute("role", "region");
          h.setAttribute("aria-label", LABEL);
        }
      } else {
        h.removeAttribute("tabindex");
        h.removeAttribute("role");
        h.removeAttribute("aria-label");
      }
    }
  }

  function start() {
    var tabellen = document.querySelectorAll("table");
    for (var i = 0; i < tabellen.length; i++) { umhuellen(tabellen[i]); }
    messen();
    window.addEventListener("resize", messen);
    // Webfonts/lokale Schriften ändern die Spaltenbreiten nach dem Laden
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(messen);
    }
  }

  // Über assets/loader.js injiziert — DOMContentLoaded ist dann oft vorbei
  // (siehe PITFALLS zu loader.js und quiz.js).
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
