# Klassenbericht: 4caif (Praktische Leistungsfeststellung am 07.05.2026)

## Übersicht
- **Teilnehmer gesamt:** 23 Schüler
- **Vollständig fehlerfreie Abgaben (inkl. Bonus):** 3 Schüler
- **Unvollständige / nicht begonnene Abgaben:** 1 Schüler
- **Abgaben mit Syntaxfehlern:** 1 Schüler

## Gemeinsame Stärken der Klasse
- **DOM Event Listener (Aufgabe 7):** Ein Großteil der Klasse hat das Binden von Event-Handlern an DOM-Knoten fehlerfrei verstanden.
- **Array Filterung & Sortierung:** Die Anwendung von `.filter()` und Comparatoren in `.sort()` gelang vielen Schülern ausgezeichnet.
- **Bonus-Motivation:** Überraschend viele Schüler haben die komplexeren Bonus-Kaufinteraktionen fehlerfrei implementiert, was von einer hohen Motivation und guten Programmierfähigkeiten zeugt.

## Häufige Schwächen / Fehlerquellen
- **Syntaxfehler im JavaScript:** Einzelne Schüler kämpfen mit Fehlern wie unvollständigen Zuweisungen oder unvollständigen Parameter-Deklarationen, wodurch das gesamte Skript unbrauchbar wird.
- **DOM Node Creation (Aufgabe 1):** Die strukturierte Erstellung von Elementen mit den nativen DOM-Funktionen (`document.createElement`, `classList.add`, `textContent`) und das anschließende Verknüpfen via `.append()` fiel einigen Schülern schwerer als das klassische `innerHTML`-Template.
- **Zustandssynchronisierung (Aufgabe 5c):** Bei `renderTicketInfo` wurde vereinzelt vergessen, den Gesamtpreis auf "—" zurückzusetzen, wenn kein Ziel selektiert ist, oder den State-Wert mit dem DOM-Input abzugleichen.

## Empfehlungen für den Unterricht
1. **Lernzielkontrollen mit Konsole / Linting:** Es wird empfohlen, den Schülern vor Abgaben beizubringen, wie sie die Browser-Konsole (F12) und Syntax-Prüfer nutzen, um fatale Syntaxfehler eigenständig vor der Abgabe zu beheben.
2. **Fokus auf DOM Manipulation:** Eine dedizierte Übungseinheit zu nativen DOM-Methoden gegenüber Template-Strings und `innerHTML` würde die strukturelle Beherrschung der UI-Entwicklung weiter festigen.
