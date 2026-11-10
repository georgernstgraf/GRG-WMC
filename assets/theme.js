/* Hell/Dunkel-Umschalter für GRG-WMC-Lektionen.
   Default folgt dem Betriebssystem (prefers-color-scheme),
   die Wahl wird in localStorage ("wmc-theme") gemerkt.
   Print bleibt über lesson.css immer hell. Kein CDN.

   Wird über assets/loader.js asynchron injiziert; der Knopf wird erst
   verdrahtet, wenn er existiert (readyState-Guard), damit die Reihenfolge
   von Skript- und DOM-Aufbau keine Rolle spielt. */

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

  function anwenden(theme) {
    wurzel.setAttribute("data-theme", theme);
    var knopf = document.getElementById("theme-toggle");
    if (knopf) {
      knopf.textContent = theme === "dark" ? "Hell" : "Dunkel";
      knopf.setAttribute("aria-pressed",
        theme === "dark" ? "true" : "false");
    }
  }

  // Theme sofort setzen (documentElement existiert immer), gegen Aufblitzen.
  var gespeichert = null;
  try { gespeichert = window.localStorage.getItem(SPEICHER); } catch (e) {}
  if (gespeichert === "dark" || gespeichert === "light") {
    anwenden(gespeichert);
  } else {
    anwenden(systemTheme());
  }

  function verdrahten() {
    var knopf = document.getElementById("theme-toggle");
    if (!knopf) { return; }
    knopf.addEventListener("click", function () {
      var neu = wurzel.getAttribute("data-theme") === "dark"
        ? "light" : "dark";
      anwenden(neu);
      try { window.localStorage.setItem(SPEICHER, neu); } catch (e) {}
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", verdrahten);
  } else {
    verdrahten();
  }
})();
