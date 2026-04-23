# Übung 12: Musikgeschäft WebApp

## Aufgabe

Erstellen Sie eine kleine Webanwendung, die den Webshop eines Musikgeschäftes umsetzt. Dabei sollen Artikel gewählt und zu einer Bestellung zusammengefasst werden können. Die Artikel im Warenkorb können dann gekauft werden, oder die Bestellung kann abgebrochen werden.

### Anforderungen

1. Die Objekte des States (`Artikel` und `Bestellung`) sollen Instanzen entsprechender Klassen sein.
2. Arbeiten Sie strikt nach dem 8-Punkte-Schema.
3. Im State sollen alle Artikel, sowie der Warenkorb und ein Logfile aller Bestellungen gespeichert werden.
4. Beim Klick oder Tippen auf einen Artikel soll er in den Warenkorb gelegt werden.
5. Im Warenkorb sollen die gewählten Artikel und die aktuelle Summe angezeigt werden.
6. Mit `Kaufen` soll der Warenkorb abgeschlossen und geleert werden.
7. Mit `Abbruch` soll der Warenkorb einfach geleert werden.
8. Speichern Sie ein Bestellprotokoll im `localStorage`.
10. Ab 3 Produkten im Warenkorb soll ein Rabatt von 10% gewährt werden.
