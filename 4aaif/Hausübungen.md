# Hausübungen – 4aaif – WMC

---

## Hausübung vom 18. März 2026

### Thema: DOM-Manipulation mit Event-Handlern

**Aufgabe 1: Zähler mit Anzeige**

Füge eine Zahl-Anzeige (z.B. `<span id="counter">0</span>`) hinzu. Implementiere drei Buttons **"+"**, **"-"** und **"RESET"**, die den Zähler erhöhen, verringern oder auf 0 zurücksetzen. Der aktuelle Wert soll im `<span>` angezeigt werden.

*Tipp: Recherchiere, wie man den Textinhalt eines Elements mit JavaScript ändert (`textContent` oder `innerHTML`).*

**Aufgabe 2: Zufallsfarbe**

Erstelle einen Button **"ZUFALL"**, der der Überschrift eine zufällige Farbe zuweist. Recherchiere, wie man in JavaScript Zufallszahlen generiert (`Math.random()`) und baue daraus einen RGB-Farbwert: `rgb(r, g, b)`.

**Aufgabe 3: Event-Listener statt onclick**

Schreibe eine Alternative zu Aufgabe 1 ohne `onclick`-Attribut im HTML. Verwende stattdessen `addEventListener()` im JavaScript-Code.

*Recherchiere: "JavaScript addEventListener syntax"*

**Abgabe:** Nächste Stunde

---

## Hausübung vom 25. Februar 2026

### Thema: Array-Sortierung mit gemischten Datentypen

**Aufgabe:**

Sortiere das folgende Array, das verschiedene Datentypen enthält:

```js
const a = [23, false, -7n, true, "Vladimir", {age: 11}];
```

**Anforderungen:**

1. Zuerst nach Datentyp gruppieren
2. Innerhalb jedes Datentyps nach Wert sortieren

**Hinweise:**

- Verwende `a.sort()` mit einer Vergleichsfunktion
- Nutze `typeof`, um den Datentyp zu ermitteln
- Beachte: `BigInt` hat den Typ `"bigint"`, Objekte haben den Typ `"object"`

---

## Hausübung vom 18. Februar 2026

### Thema: DOM-Manipulation und Event-Handler

**Aufgabe:**

Entwickle einen kleinen Taschenrechner basierend auf dem im Unterricht erstellten Code.

**Ausgangslage:**

Im Unterricht wurde eine einfache Addition implementiert:

```js
function addieren() {
    const m1 = document.getElementById("zahl1").valueAsNumber;
    const m2 = document.getElementById("zahl2").valueAsNumber;
    const out = document.querySelector("#ergebnis>strong");
    out.textContent = `${m1 + m2}`;
}
```

**Erweiterungen:**

- Füge Funktionen für Subtraktion, Multiplikation und Division hinzu
- Erstelle entsprechende Buttons im HTML
- Achte auf Fehlerbehandlung (z. B. Division durch Null)

**Verwendete Konzepte:**

- `document.getElementById()` und `document.querySelector()`
- `valueAsNumber` für Zahleneingaben
- `onclick` oder `addEventListener` für Event-Binding
- Template Strings für Ausgabe

---

## Hausübung vom 5. November 2025

### Thema: Webfonts und Typografie

**Aufgabe:**

Experimentiere nachweislich mit Webfonts auf deiner Website.

**Anforderungen:**

- Integriere Google Fonts oder andere Webfont-Quellen
- Probiere verschiedene Schriftarten und -stile aus
- Dokumentiere deine Experimente (z. B. Screenshots, Commits)

**Ressourcen:**

- [Google Fonts](https://fonts.google.com/)
- [CSS-Tricks: Centering](https://css-tricks.com/centering-css-complete-guide/)

---

## Hausübung vom 8. Oktober 2025

### Thema: CSS-Selektoren

**Aufgabe:**

Schließe das Online-Spiel [CSS Diner](https://flukeout.github.io/) ab.

**Abgabe:**

- Mindestens 10 Screenshots ab Übung 16
- Screenshots im Repo oder per E-Mail

---

## Hausübung vom 24. September 2025

### Thema: CSS-Positionierung

**Aufgabe:**

1. Recherche zum Thema `position` in CSS (`static`, `relative`, `absolute`, `fixed`, `sticky`)
2. Baue positionierte Elemente in deine "Über mich"-Website ein

**Ressourcen:**

- [Kevin Powell – CSS Positioning](https://www.youtube.com/@KevinPowell)

---

## Hausübung vom 17. September 2025

### Thema: CSS-Grundlagen

**Aufgabe:**

- Schau dir die CSS-Folie aus den Unterrichtsunterlagen durch
- Dekoriere deine persönliche Website mit CSS

---

## Hausübung vom 3. September 2025

### Thema: Repository-Erstellung und Entwicklungsumgebung

**Aufgabe:**

1. Installiere Git: <https://git-scm.com>
2. Erstelle ein persönliches Repository für den Unterricht
3. Erstelle eine einfache HTML-Seite (z. B. "Über mich")
4. Sende den Repository-Link an den Lehrer

**VS Code Plugins:**

- Live Server
- W3C Web Validator

**Themen im Unterricht:**

- Semantic HTML
- HTML als Baumstruktur (Graph)
