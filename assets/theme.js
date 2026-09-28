/* Hell/Dunkel-Umschalter für GRG-WMC-Lektionen.
   Default folgt dem Betriebssystem (prefers-color-scheme),
   die Wahl wird in localStorage ("wmc-theme") gemerkt.
   Print bleibt über lesson.css immer hell. Kein CDN. */

(function () {
  "use strict";

  var SPEICHER = "wmc-theme";
  var wurzel = document.documentElement;

  function systemTheme() {
    if (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function anwenden(theme, knopf) {
    wurzel.setAttribute("data-theme", theme);
    if (knopf) {
      knopf.textContent = theme === "dark" ? "Hell" : "Dunkel";
      knopf.setAttribute("aria-pressed",
        theme === "dark" ? "true" : "false");
    }
  }

  // Theme sofort setzen (kein Aufblitzen), Knopf erst nach dem Parsen binden.
  var gespeichert = null;
  try { gespeichert = window.localStorage.getItem(SPEICHER); } catch (e) {}
  anwenden(
    (gespeichert === "dark" || gespeichert === "light")
      ? gespeichert : systemTheme(),
    null
  );

  document.addEventListener("DOMContentLoaded", function () {
    var knopf = document.getElementById("theme-toggle");
    anwenden(wurzel.getAttribute("data-theme"), knopf);
    if (knopf) {
      knopf.addEventListener("click", function () {
        var neu = wurzel.getAttribute("data-theme") === "dark"
          ? "light" : "dark";
        anwenden(neu, knopf);
        try { window.localStorage.setItem(SPEICHER, neu); } catch (e) {}
      });
    }
  });
})();
