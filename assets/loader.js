/* =========================================================================
   GRG-WMC — zentraler Asset-Loader (repo-agnostisch).

   Aufgabe:
     - leitet den Repo-/Site-Root aus der eigenen Skript-URL ab
       (…/assets/loader.js → …/), ohne dass ein Repo-Name im Code steht;
     - injiziert die seitenspezifischen Assets laut data-Attributen
       (data-css, data-js — je eine Komma-Liste von Dateinamen in assets/);
     - lädt immer assets/site.js (Konfiguration) und
       assets/github-pages-link.js (Badge).

   Eingebunden wird der Loader über die Inline-Probe im <head> jeder Seite,
   die die Ahnen-Verzeichnisse abläuft, bis …/assets/loader.js gefunden ist.
   ========================================================================= */
(function () {
  "use strict";

  var cs = document.currentScript;
  if (!cs || !cs.src) { return; }

  var MARKER = "assets/loader.js";
  var idx = cs.src.lastIndexOf(MARKER);
  if (idx < 0) { return; }

  var root = cs.src.slice(0, idx);
  window.__SITE_ROOT__ = root;

  function liste(name) {
    var wert = cs.getAttribute(name) || "";
    return wert.split(",").map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length > 0; });
  }

  function css(name) {
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = root + "assets/" + name;
    document.head.appendChild(l);
  }

  function js(name) {
    var s = document.createElement("script");
    s.src = root + "assets/" + name;
    s.async = false; // Reihenfolge erhalten
    document.head.appendChild(s);
  }

  liste("data-css").forEach(css);
  liste("data-js").forEach(js);

  // Konfiguration zuerst, danach der Badge.
  js("site.js");
  js("github-pages-link.js");
})();
