---
id: expedice-tvorba-2-hu
translationOf: expedice-tvorba-2
lang: hu
type: spine
title: "Háttér kódból 30 perc alatt"
readingTime: 1
standalone: false
teaser: "1."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-tvorba-2
conceptTitle: "Háttér kódból 30 perc alatt"
objective: "1."
state: edited
carriers: prose|code
---

**🛠 Műhely** · 2. lépés / 5 · [Főcím a filmestre](#expedice-tvorba-hu)

1. Nyisd meg az [editor.p5js.org](https://editor.p5js.org) oldalt. Fiók nélkül is rögtön rajzolhatsz. A felhőbe mentéshez fiók kell: 13 éves kor alatt csak szülővel, különben másold át a kódot egy szövegfájlba.
2. Töröld a mintakódot, és illeszd be ezt:

```
let paletta = ['#1d2b53', '#7e2553', '#ff004d', '#ffec27'];
function setup() {
  createCanvas(640, 360);
  randomSeed(7);
  noLoop();
}
function draw() {
  background('#000000');
  noStroke();
  for (let i = 0; i < 200; i++) {
    fill(random(paletta));
    circle(random(width), random(height), random(5, 40));
  }
}
```

3. Kattints a Play gombra. 200 kört látsz négy színben, 16 : 9 arányú vásznon, ugyanolyanon, mint a videóknál.
4. Írd át a `randomSeed(7)` sort `randomSeed(8)`-ra, és futtasd újra. Teljesen más kép. Írd vissza a 7-et: pontosan az első. Ez a **seed**, a véletlen magja. Ugyanaz a szabály és ugyanaz a mag mindig ugyanazt az eredményt adja.
5. Játssz a szabályokkal: 200 helyett 2000 kör, `random(1, 4)` méret, mint egy csillagos égbolt, a `circle` helyett próbáld ki a `square`-t. Minden alkalommal írd fel, mi változott.
6. Válassz palettát a Lospecről (legfeljebb 8 szín), és írd át a `paletta` tömböt. Ugyanezeket a színeket használod majd a kabalánál is.
7. Mentsd el a képet: a `draw()` végére írd be: `saveCanvas('hatter', 'png');`.

30 perc alatt három háttérváltozatod lesz, és tudod, melyik szám mit csinál.

**Következő lépés:** [Egy film, amelyet szétszedhetsz](#expedice-tvorba-3-hu)
