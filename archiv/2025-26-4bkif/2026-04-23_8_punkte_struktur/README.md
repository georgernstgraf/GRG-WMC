# 8 punkte

Vorteil von script type=module:

- Es ist automatisch im Strict Mode
- Es ist automatisch defer, d.h. es wird erst ausgeführt, wenn das DOM vollständig
- Es gibt keinen globalen Scope, d.h. Variablen und Funktionen sind nur innerhalb des Moduls sichtbar
- Es unterstützt die Verwendung von import und export, um Code in mehrere Dateien zu organisieren und wiederzuverwenden
- Es ermöglicht die Verwendung von top-level await, um asynchrone Operationen direkt im Modul auszuführen, ohne eine Funktion zu definieren
- Es verbessert die Sicherheit, da Module standardmäßig im CORS-Modus geladen werden, was bedeutet, dass sie nur von derselben Herkunft geladen werden können, es sei denn, der Server erlaubt explizit den Zugriff von anderen Ursprüngen