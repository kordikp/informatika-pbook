---
id: expedice-tvorba-2
type: spine
title: "Pozadí z kódu za 30 minut"
readingTime: 1
standalone: false
teaser: "1."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-tvorba-2
conceptTitle: "Pozadí z kódu za 30 minut"
state: edited
carriers: prose|code
---

**🛠 Dílna** · krok 2 z 5 · [Znělka pro filmový večer](#expedice-tvorba)

1. Otevři [editor.p5js.org](https://editor.p5js.org). Kreslit můžeš hned bez účtu. Ukládání do cloudu chce účet: pod 13 let jen s rodičem, jinak si kód zkopíruj do textového souboru.
2. Smaž vzorový kód a vlož tenhle:

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

3. Klikni na Play. Uvidíš 200 kruhů ve čtyřech barvách na plátně v poměru 16 : 9, stejném jako u videa.
4. Změň `randomSeed(7)` na `randomSeed(8)` a spusť znovu. Úplně jiný obraz. Vrať 7: přesně ten první. To je **seed**, semínko náhody. Stejné pravidlo a stejné semínko dají vždy stejný výsledek.
5. Hraj si s pravidly: 2000 kruhů místo 200, velikost `random(1, 4)` jako hvězdná obloha, místo `circle` zkus `square`. Pokaždé si zapiš, co se změnilo.
6. Vyber si paletu z Lospec (8 barev nejvýš) a přepiš pole `paleta`. Stejné barvy pak použiješ u maskota.
7. Ulož obrázek: na konec `draw()` přidej `saveCanvas('pozadi', 'png');`.

Za 30 minut máš tři varianty pozadí a víš, které číslo co dělá.

**Další krok:** [Film, který si můžeš rozebrat](#expedice-tvorba-3)
