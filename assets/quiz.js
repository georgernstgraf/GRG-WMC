// Quiz-Widget — zwei Modi, ein Skript:
//
// 1) Lernquiz (Format 2.1, Checkboxen, Mehrfach-richtig):
//    <div class="quiz" data-titel="Quiz: thema-slug">
//      <fieldset class="frage">
//        <legend class="frage-text">…</legend>
//        <div class="optionen">
//          <label><input type="checkbox" name="km7-02-q1" data-richtig data-grund="…"> …</label>
//          <label><input type="checkbox" name="km7-02-q1" data-grund="…"> …</label>
//          …
//        </div>
//      </fieldset>
//      …
//    </div>
//    Die Lösungsmenge steht je Option an der Option selbst: data-richtig
//    (Attribut vorhanden = richtig; 0-richtig-Fragen tragen es nirgends).
//    Die Reihenfolge im Markup ist bedeutungslos — das Skript mischt die
//    Optionen beim Laden (Fisher-Yates), damit Positionen nie erratbar
//    sind; Positionen oder Buchstaben werden nirgends kodiert. Das
//    value-Attribut der Checkboxen ist für die Auswertung bedeutungslos.
//
//    Das Skript injiziert den Titel als h3-Badge sowie — pro Frage — den
//    zentrierten „Überprüfen"-Button und je Antwortoption eine kleine
//    Infokugel. Nach dem Prüfen bekommt jede Option ihre Farbe allein
//    danach, ob das Häkchen richtig gesetzt war: grün = Entscheidung
//    korrekt (angekreuzt, obwohl Lösung — oder nicht angekreuzt, obwohl
//    keine Lösung), rot = Entscheidung falsch (fälschlich angekreuzt oder
//    die richtige übersehen). Die Infokugel einer Option zeigt genau diese
//    Option samt ihrer Begründung (data-grund) — am Desktop per Hover/Fokus,
//    auf Touch-Geräten per Tap, der die Blase offen lässt (zweiter Tap oder
//    Tap daneben schließt sie). Die Kugeln bleiben bis zum ersten Prüfen
//    verborgen, damit die Begründungen die Antwort nicht verraten. Danach
//    wird der Button zu „Nochmal versuchen" und setzt die Frage zurück. Eine
//    versteckte Statuszeile (aria-live) meldet das Ergebnis für
//    Screenreader. Kein Punktestand, kein Show-Modal, keine Stufen —
//    die Wahrheit zählt.
//
// 2) Altmodus (Radio, genau eine Richtige, Sofort-Auswertung) — bleibt für
//    die Lessons aus der Zeit vor Format 2.0 unverändert:
//    <div class="quiz" data-loesung="N"> … <input type="radio" …> … </div>
(function () {
  "use strict";

  var TEXT_PRUEFEN = "Überprüfen";
  var TEXT_NOCHMAL = "Nochmal versuchen";

  // Optionen mischen: Position im Markup ist bedeutungslos, also darf sie
  // auch nichts verraten. Einmal beim Laden — „Nochmal versuchen" behält
  // die Reihenfolge, damit die Begründungen nicht wandern.
  function optionenMischen(optionen) {
    var labels = optionen.querySelectorAll(":scope > label");
    var karten = [];
    for (var i = 0; i < labels.length; i++) { karten.push(labels[i]); }
    for (var j = karten.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tausch = karten[j]; karten[j] = karten[k]; karten[k] = tausch;
    }
    for (var m = 0; m < karten.length; m++) { optionen.appendChild(karten[m]); }
  }

  function optionstext(label) {
    var klon = label.cloneNode(true);
    var input = klon.querySelector("input");
    if (input) { input.remove(); }
    var kugel = klon.querySelector(".infokugel");
    if (kugel) { kugel.remove(); }
    return klon.textContent.trim();
  }

  // ---------- Lernquiz (Format 2.0) ----------

  function lernquiz(quiz) {
    var fragen = quiz.querySelectorAll(".frage");
    if (!fragen.length) { return; }
    quiz.classList.add("quiz--lern");

    // Kopf: nur der Titel — als Heading, damit die Blöcke in der
    // Dokumentgliederung auftauchen (keine Stufen, kein Modal)
    var kopf = document.createElement("div");
    kopf.className = "quiz-kopf";
    var badge = document.createElement("h3");
    badge.className = "quiz-badge";
    badge.textContent = quiz.getAttribute("data-titel") || "Quiz";
    kopf.appendChild(badge);
    quiz.insertBefore(kopf, quiz.firstChild);

    for (var f = 0; f < fragen.length; f++) {
      frageVorbereiten(fragen[f]);
    }
  }

  function frageVorbereiten(frage) {
    var optionen = frage.querySelector(".optionen");
    if (optionen) { optionenMischen(optionen); }
    var labels = optionen ? optionen.querySelectorAll(":scope > label") : [];
    var teile = [];

    // Je Option: Infokugel im Label, Sprechblase als Geschwister dahinter
    for (var i = 0; i < labels.length; i++) {
      (function (label) {
        var input = label.querySelector("input");
        var kugel = document.createElement("button");
        kugel.type = "button";
        kugel.className = "infokugel";
        kugel.textContent = "i";
        kugel.setAttribute("aria-label", "Begründung dieser Antwort anzeigen");
        kugel.setAttribute("aria-expanded", "false");
        kugel.hidden = true;

        var blase = document.createElement("div");
        blase.className = "infoblase";
        blase.hidden = true;

        var istRichtig = input ? input.hasAttribute("data-richtig") : false;
        var marke = document.createElement("strong");
        marke.className = istRichtig ? "ist-richtig" : "ist-falsch";
        marke.textContent = (istRichtig ? "✓ " : "✗ ") + optionstext(label);
        blase.appendChild(marke);
        var grund = input ? input.getAttribute("data-grund") : "";
        if (grund) {
          var g = document.createElement("span");
          g.className = "infoblase-grund";
          g.textContent = " — " + grund;
          blase.appendChild(g);
        }

        function blaseZeigen(zeigen) {
          blase.hidden = !zeigen;
          kugel.setAttribute("aria-expanded", zeigen ? "true" : "false");
        }

        // Zeigen/Schließen: Desktop öffnet per Hover, Touch per Tap.
        // Auf Touch emuliert der Browser mouseenter VOR click — hinge der
        // Hover an mouseenter, schlösse der Klick-Toggle die eben geöffnete
        // Blase sofort wieder. Deshalb Pointer-Events mit Typfilter.
        // preventDefault: der Klick auf die Kugel darf das Kästchen
        // nicht umschalten (Kugel liegt im Label)
        kugel.addEventListener("click", function (e) {
          e.preventDefault();
          blaseZeigen(blase.hidden);
        });
        if (window.PointerEvent) {
          kugel.addEventListener("pointerenter", function (e) {
            if (e.pointerType === "mouse") { blaseZeigen(true); }
          });
          kugel.addEventListener("pointerleave", function (e) {
            if (e.pointerType === "mouse") { blaseZeigen(false); }
          });
        } else {
          // Altbestand ohne Pointer Events: Hover wie früher
          kugel.addEventListener("mouseenter", function () { blaseZeigen(true); });
          kugel.addEventListener("mouseleave", function () { blaseZeigen(false); });
        }
        kugel.addEventListener("focus", function () {
          // Nur Tastaturfokus öffnet: beim Tap feuert focus VOR click, der
          // Klick-Toggle würde die eben geöffnete Blase sonst sofort wieder
          // schließen. :focus-visible trennt Tastatur- von Zeigerfokus.
          // Ohne :focus-visible-Unterstützung (alte Safari) bleibt das
          // Öffnen per Tap/Klick — dort klappt Toggle weiterhin.
          try {
            if (kugel.matches(":focus-visible")) { blaseZeigen(true); }
          } catch (err) { /* Selektor unbekannt: nichts tun */ }
        });
        kugel.addEventListener("blur", function () { blaseZeigen(false); });

        label.appendChild(kugel);
        label.parentNode.insertBefore(blase, label.nextSibling);
        teile.push({ label: label, input: input, kugel: kugel, blase: blase, istRichtig: istRichtig });
      })(labels[i]);
    }

    // Zentrierter Überprüfen-Button je Frage
    var knopf = document.createElement("button");
    knopf.type = "button";
    knopf.className = "quiz-pruefen";
    knopf.textContent = TEXT_PRUEFEN;

    function pruefen() {
      var alleRichtig = true;
      for (var i = 0; i < teile.length; i++) {
        var input = teile[i].input;
        var angekreuzt = input ? input.checked : false;
        var richtig = angekreuzt === teile[i].istRichtig;
        if (!richtig) { alleRichtig = false; }
        teile[i].label.classList.remove("opt-richtig", "opt-falsch");
        teile[i].label.classList.add(richtig ? "opt-richtig" : "opt-falsch");
        teile[i].kugel.hidden = false;
      }
      status.textContent = alleRichtig
        ? "Geprüft: alle Optionen richtig beurteilt."
        : "Geprüft: mindestens eine Option falsch beurteilt — die Infokugeln zeigen die Begründung.";
      frage._geprueft = true;
      knopf.textContent = TEXT_NOCHMAL;
      knopf.classList.add("nochmal");
    }

    function zuruecksetzen() {
      frage._geprueft = false;
      status.textContent = "";
      for (var i = 0; i < teile.length; i++) {
        teile[i].label.classList.remove("opt-richtig", "opt-falsch");
        teile[i].kugel.hidden = true;
        teile[i].blase.hidden = true;
        if (teile[i].input) { teile[i].input.checked = false; }
      }
      knopf.textContent = TEXT_PRUEFEN;
      knopf.classList.remove("nochmal");
    }

    knopf.addEventListener("click", function () {
      if (frage._geprueft) { zuruecksetzen(); } else { pruefen(); }
    });

    // Versteckte Statuszeile: Farbe allein ist kein Feedback für
    // Screenreader; kein Punktestand, nur richtig/falsch je Frage.
    var status = document.createElement("p");
    status.className = "quiz-status";
    status.setAttribute("aria-live", "polite");

    frage.appendChild(knopf);
    frage.appendChild(status);
  }

  // ---------- Altmodus (Radio, sofortige Auswertung) ----------

  function altquiz(quiz) {
    var loesung = parseInt(quiz.getAttribute("data-loesung"), 10);
    var inputs = quiz.querySelectorAll("input[type=radio]");
    var feedback = quiz.querySelector(".feedback");
    if (!inputs.length || !feedback) { return; }

    function bewerte() {
      var gewaehlt = null;
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) { gewaehlt = inputs[i]; }
      }
      if (!gewaehlt) { return; }
      var richtig = parseInt(gewaehlt.value, 10) === loesung;
      feedback.textContent = gewaehlt.getAttribute("data-grund") || "";
      feedback.className = "feedback " + (richtig ? "richtig" : "falsch");
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", bewerte);
    }
  }

  function initialisieren(quiz) {
    if (quiz.querySelector("input[type=checkbox]")) {
      lernquiz(quiz);
    } else {
      altquiz(quiz);
    }
  }

  // Auf Touch gibt es kein mouseleave: ein Tap außerhalb der Kugel schließt
  // offene Blasen wieder. Desktop schließt ohnehin per Hover-Verlassen.
  function aussenklickSchliessen(e) {
    var blasen = document.querySelectorAll(".quiz--lern .infoblase:not([hidden])");
    for (var i = 0; i < blasen.length; i++) {
      var blase = blasen[i];
      if (blase.contains(e.target)) { continue; }
      // Die Kugel liegt im Label direkt vor der Blase (siehe frageVorbereiten)
      var label = blase.previousElementSibling;
      var kugel = label ? label.querySelector(".infokugel") : null;
      if (kugel && kugel.contains(e.target)) { continue; }
      blase.hidden = true;
      if (kugel) { kugel.setAttribute("aria-expanded", "false"); }
    }
  }

  function start() {
    var quizzes = document.querySelectorAll(".quiz");
    for (var i = 0; i < quizzes.length; i++) { initialisieren(quizzes[i]); }
    // Je Gerät einmal: Öffnen/Schließen außerhalb der Infokugeln beenden
    if (window.PointerEvent) {
      document.addEventListener("pointerdown", aussenklickSchliessen, true);
    } else {
      document.addEventListener("mousedown", aussenklickSchliessen, true);
      document.addEventListener("touchstart", aussenklickSchliessen, true);
    }
  }

  // Wird über assets/loader.js asynchron injiziert — dann ist DOMContentLoaded
  // oft schon vorbei. Deshalb sofort starten, wenn das Dokument nicht mehr lädt.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
