---
id: expedice-tvorba-2-sk
translationOf: expedice-tvorba-2
lang: sk
type: spine
title: "Pozadie z kódu za 30 minút"
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
conceptTitle: "Pozadie z kódu za 30 minút"
objective: "1."
state: edited
carriers: prose|code
---

**🛠 Dielňa** · krok 2 z 5 · [Znelka pre filmový večer](#expedice-tvorba-sk)

1. Otvor [editor.p5js.org](https://editor.p5js.org). Kresliť môžeš hneď bez účtu. Ukladanie do cloudu chce účet: pod 13 rokov len s rodičom, inak si kód skopíruj do textového súboru.
2. Zmaž vzorový kód a vlož tento:

```
let paleta = ['#1d2b53', '#7e2553', '#ff004d', '#ffec27'];
function setup() {
  createCanvas(640, 360);
  randomSeed(7);
  noLoop();
}
function draw() {
  background('#000000');
  noStroke();
  for (let i = 0; i < 200; i++) {
    fill(random(paleta));
    circle(random(width), random(height), random(5, 40));
  }
}
```

3. Klikni na Play. Uvidíš 200 kruhov v štyroch farbách na plátne v pomere 16 : 9, rovnakom ako pri videu.
4. Zmeň `randomSeed(7)` na `randomSeed(8)` a spusti znova. Úplne iný obraz. Vráť 7: presne ten prvý. To je **seed**, semienko náhody. Rovnaké pravidlo a rovnaké semienko dajú vždy rovnaký výsledok.
5. Hraj sa s pravidlami: 2000 kruhov namiesto 200, veľkosť `random(1, 4)` ako hviezdna obloha, namiesto `circle` skús `square`. Zakaždým si zapíš, čo sa zmenilo.
6. Vyber si paletu z Lospec (najviac 8 farieb) a prepíš pole `paleta`. Rovnaké farby potom použiješ pri maskotovi.
7. Ulož obrázok: na koniec `draw()` pridaj `saveCanvas('pozadie', 'png');`.

Za 30 minút máš tri varianty pozadia a vieš, ktoré číslo čo robí.

**Ďalší krok:** [Film, ktorý si môžeš rozobrať](#expedice-tvorba-3-sk)
