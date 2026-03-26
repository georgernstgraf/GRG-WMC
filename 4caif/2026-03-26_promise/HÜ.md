Stufe 1: Einfaches Promise

Erstelle eine Funktion holeBrief(inhalt), die ein Promise zurückgibt. Nach einer Verzögerung (nutze setTimeout) von 1 Sekunde soll das Promise den Inhalt des Briefes erfolgreich auflösen (resolve).

Stufe 2: Promise Chaining

Erweitere den Prozess. Wir brauchen zwei weitere Schritte, die nacheinander ausgeführt werden müssen:

1. stempelBrief(brief): Nimmt den Brief, hängt " [Gestempelt]" an und gibt ein neues Promise zurück.

2. versendeBrief(brief): Nimmt den gestempelten Brief, hängt " -> Versendet!" an und gibt ein neues Promise zurück.

Kette diese Funktionen nun mit .then() hintereinander.
