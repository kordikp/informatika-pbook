---
id: svet-hry-opakovani
type: spine
title: "Herní smyčka: cyklus, který nespí"
readingTime: 1
standalone: true
teaser: "Ve hře se ve skutečnosti nic nehýbe. Obrázek se jen šedesátkrát za sekundu nakreslí o kousek vedle."
voice: universal
parent: null
diagram: anim-herni-smycka
core: false
recallQ: "Kdy použiješ „opakuj 10×“ a kdy „opakuj, dokud…“?"
recallA: "Pevný počet, když předem víš kolikrát. „Dokud“, když to záleží na tom, co se stane, třeba dokud robot nenarazí na zeď."
lang: cs
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: opakovani
state: edited
highlights:
  - "Tělo cyklu a počet opakování"
  - "Opakuj n× vs. opakuj, dokud (podmínka ukončení)"
  - "Konečnost: cyklus musí skončit, jinak se program zacyklí"
carriers: prose|animation|code
---

Ve hře se ve skutečnosti nic nehýbe. Obrázek se jen šedesátkrát za sekundu nakreslí o kousek vedle.

Každá hra má uprostřed **herní smyčku**: cyklus, v jehož **těle** jsou tři kroky. *Načti vstup* (drží hráč šipku?), *přepočítej svět* (posuň postavu, pohni nepřáteli, zkontroluj dotyky) a *vykresli obraz*. A znovu. Při 60 snímcích za sekundu proběhne tělo cyklu šedesátkrát za sekundu. Když hra „seká“, smyčka nestíhá.

Ve Scratchi vypadá smyčka hry Chytání jablek takhle:

```
po kliknutí na zelenou vlajku
  opakuj, dokud nenastane (životy = 0)
    když je stisknuta [šipka vpravo]: změň x o 5
    změň y jablka o -5
    …
  ukaž „KONEC HRY“
```

Proč **„opakuj, dokud…“** a ne **„opakuj 100×“**? Předem nevíš, jak dlouho bude hráč hrát. Konec záleží na tom, co se stane: dojdou životy. **Pevný počet** se hodí jinde, když přesně víš kolikrát: *opakuj 3×: blikni*, když postavu něco zasáhne.

Podmínka se kontroluje **na začátku každého kola**. Když poslední život zmizí uprostřed kola, kolo ještě doběhne a pak smyčka skončí. Smyčka musí jednou **skončit**. Kdyby životy nikdy neubývaly, hra se **zacyklí** a nejde vyhrát ani prohrát. Blok *opakuj stále* je naopak záměr: hudba v pozadí hraje dokola, dokud hru nezavřeš.

**Zkus to!** Zahraj si jakoukoli hru a zkus odhadnout, co je v těle její smyčky: co čte, co přepočítává, co kreslí. A kdy smyčka končí?

**Dál ve světě her:** → [Když se dotkne mince](#svet-hry-rozhodovani)
