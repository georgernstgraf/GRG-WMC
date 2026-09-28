// Bewertet ein Quiz mit Radio-Antworten.
// Markup: <div class="quiz" data-loesung="N"> mit .frage, <label><input type=radio>,
// .feedback (Sofort-Rückmeldung), .erklaerung (bei richtig), optional .hinweis (bei falsch).
(function () {
  "use strict";

  var POSITIV = ["Richtig!", "Genau.", "Treffer.", "Stimmt."];
  var NEGATIV = ["Nicht ganz.", "Knapp daneben.", "Noch mal probieren.", "Leider nein."];

  function waehle(liste, seed) {
    return liste[seed % liste.length];
  }

  function sichtbar(el, an) {
    if (el) { el.style.display = an ? "block" : "none"; }
  }

  function initialisieren(quiz, idx) {
    var loesung = parseInt(quiz.getAttribute("data-loesung"), 10);
    var inputs = quiz.querySelectorAll("input[type=radio]");
    var feedback = quiz.querySelector(".feedback");
    var erklaerung = quiz.querySelector(".erklaerung");
    var hinweis = quiz.querySelector(".hinweis");
    if (!inputs.length || !feedback) { return; }

    function bewerte() {
      var gewaehlt = null;
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) { gewaehlt = parseInt(inputs[i].value, 10); }
      }
      if (gewaehlt === null) { return; }
      var richtig = gewaehlt === loesung;
      feedback.textContent = waehle(richtig ? POSITIV : NEGATIV, idx);
      feedback.className = "feedback " + (richtig ? "richtig" : "falsch");
      sichtbar(erklaerung, richtig);
      sichtbar(hinweis, !richtig);
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", bewerte);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var quizzes = document.querySelectorAll(".quiz");
    for (var i = 0; i < quizzes.length; i++) { initialisieren(quizzes[i], i); }
  });
})();
