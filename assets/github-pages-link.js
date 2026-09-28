/* =========================================================================
   GRG-WMC — „Auf GitHub Pages ansehen"-Badge.

   Baut die kanonische GitHub-Pages-URL aus window.SITE.pagesBase (assets/site.js)
   plus dem seitenrelativen Pfad (ab __SITE_ROOT__ aus assets/loader.js) und
   hängt ein fixiertes Badge unten rechts an. Kein CDN, offline-fähig
   (linkt online, wenn eine pagesBase konfiguriert ist).
   ========================================================================= */
(function () {
  "use strict";

  function kanonischeUrl() {
    var site = window.SITE || {};
    var base = site.pagesBase || "";
    var root = window.__SITE_ROOT__ || "";
    var rel = "";
    if (root && location.href.indexOf(root) === 0) {
      rel = location.href.slice(root.length);
    }
    return base + rel;
  }

  function style() {
    if (document.getElementById("gh-pages-badge-style")) { return; }
    var st = document.createElement("style");
    st.id = "gh-pages-badge-style";
    st.textContent =
      "#gh-pages-badge{position:fixed;right:.75rem;bottom:.75rem;z-index:9999;" +
      "font:0.72rem/1.2 system-ui,-apple-system,sans-serif;letter-spacing:.02em;" +
      "padding:.35rem .6rem;border:1px solid rgba(127,127,127,.55);border-radius:4px;" +
      "background:rgba(250,250,245,.92);color:#333;text-decoration:none;" +
      "box-shadow:0 1px 3px rgba(0,0,0,.12)}" +
      "#gh-pages-badge:hover{background:#fff;color:#000;border-color:#888}" +
      "@media print{#gh-pages-badge{display:none!important}}";
    document.head.appendChild(st);
  }

  function badge() {
    if (document.getElementById("gh-pages-badge")) { return; }
    var site = window.SITE || {};
    var a = document.createElement("a");
    a.id = "gh-pages-badge";
    a.href = kanonischeUrl();
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = site.badgeLabel || "Auf GitHub Pages ansehen";
    a.title = site.badgeTitle || "View on GitHub Pages";
    style();
    document.body.appendChild(a);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", badge);
  } else {
    badge();
  }
})();
