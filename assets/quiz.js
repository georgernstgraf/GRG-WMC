// Bewertet ein Quiz mit Radio-Antworten und Begründung pro Option.
// Markup:
//   <div class="quiz" data-loesung="N">
//     <p class="frage">…</p>
//     <label><input type="radio" name="qK" value="i" data-grund="…"> …</label>
//     <p class="feedback" aria-live="polite"></p>
//   </div>
// value und data-loesung sind 0-basiert. Sofort bei Auswahl (change) zeigt
// .feedback die Begründung (data-grund) der gewählten Option, gefärbt
// richtig/falsch; erneutes Wählen aktualisiert die Rückmeldung.
(function () {
  "use strict";

  function initialisieren(quiz) {
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

  function start() {
    var quizzes = document.querySelectorAll(".quiz");
    for (var i = 0; i < quizzes.length; i++) { initialisieren(quizzes[i]); }
  }

  // Wird über assets/loader.js asynchron injiziert — dann ist DOMContentLoaded
  // oft schon vorbei. Deshalb sofort starten, wenn das Dokument nicht mehr lädt.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
