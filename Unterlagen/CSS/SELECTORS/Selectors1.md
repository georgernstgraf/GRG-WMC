# CSS Selektoren

Dienen zum "Angreifen" der unterschiedlichen Elemente im DOM. Gundsätzlich
können 3 verschiedene Arten der Selektion ein Element finden. Ein CSS Selektor
findet immer `0 bis n` Elemente!

1. Mittels _Tag-Name_, z.B. "h1", "main" oder "article" (geringe Spezifizität)
2. Mittels _Class-Name_, z.B. ".root-content" oder ".password" (mittlere
   Spezifizität)
3. Mittels _ID_, z.B. "#myId" **extrem sparsam verwenden!** (höchste
   Spezifizität)
4. _inline_ im html code, z.B. `<h1 style="color: blue">überschrift</h1>`
   (allerhöchste Spezifizität, kann nur mehr mit javascript übersteuert werden)

- [Video zu Selektoren](https://youtu.be/l1mER1bV0N0) (WDS)
- [Video zu Specificity](https://youtu.be/CHyPGSpIhSs) (WDS)
- [MDN Referenz zu Spezifizität](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
