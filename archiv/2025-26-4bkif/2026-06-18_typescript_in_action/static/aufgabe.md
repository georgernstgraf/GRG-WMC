# Übung 8: Flughafen-Board WebApp

## Aufgabe

Erstellen Sie eine kleine WebApp die die Anzeigetafel eines Flughafens umsetzt. 


### Anforderungen

1. Verwenden Sie eine Klasse `Flug` für alle angezeigten Flüge.
2. Arbeiten Sie strikt nach dem 8-Punkte-Schema.
3. Im State sollen Flüge gespeichert werden, ebenso die aktuelle Zeit.
4. Das Board soll in zwei Bereiche aufgeteilt sein: links `Arrivals`, rechts `Departures`.
5. Neue Flüge sollen über ein Formular hinzugefügt werden.
6. Beim Hinzufügen soll auch ausgewählt werden können, ob es sich um ein `Arrival` oder ein `Departure` handelt.
7. Jeder Flug soll Code, Ziel und eine Uhrzeit besitzen.
8. Zeigen Sie oberhalb des Boards eine Uhr mit der aktuellen Zeit an.
9. Bei jedem `Arrival` soll angezeigt werden: `Erwartet in xx Minuten`.
10. Bei jedem `Departure` soll ab einer Stunde vor dem Abflug `Boarding` angezeigt werden.
11. Die Flüge sollen innerhalb ihrer Bereiche nach Zeit sortiert sein.
12. Es sollen nur Flüge angezeigt werden, deren Zeit noch in der Zukunft liegt.
