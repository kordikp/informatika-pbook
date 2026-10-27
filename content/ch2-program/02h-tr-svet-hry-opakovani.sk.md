---
id: svet-hry-opakovani-sk
translationOf: svet-hry-opakovani
lang: sk
type: spine
title: "Herná slučka: cyklus, ktorý nespí"
readingTime: 1
standalone: true
teaser: "V hre sa v skutočnosti nič nehýbe. Obrázok sa len šesťdesiatkrát za sekundu nakreslí o kúsok vedľa."
voice: universal
parent: null
diagram: anim-herni-smycka-sk
core: false
recallQ: "Kedy použiješ „opakuj 10×“ a kedy „opakuj, kým…“?"
recallA: "Pevný počet, keď vopred vieš koľkokrát. „Kým“, keď to závisí od toho, čo sa stane, napríklad kým robot nenarazí na stenu."
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
  - "Telo cyklu a počet opakovaní"
  - "Opakuj n× vs. opakuj, kým (podmienka ukončenia)"
  - "Konečnosť: cyklus musí skončiť, inak sa program zacyklí"
carriers: prose|animation|code
---

V hre sa v skutočnosti nič nehýbe. Obrázok sa len šesťdesiatkrát za sekundu nakreslí o kúsok vedľa.

Každá hra má v strede **hernú slučku**: cyklus, v ktorého **tele** sú tri kroky. *Načítaj vstup* (drží hráč šípku?), *prepočítaj svet* (posuň postavu, pohni nepriateľmi, skontroluj dotyky) a *vykresli obraz*. A znova. Pri 60 snímkach za sekundu prebehne telo cyklu šesťdesiatkrát za sekundu. Keď hra „seká“, slučka nestíha.

V Scratchi vyzerá slučka hry Chytanie jabĺk takto:

```
keď klikneš na zelenú vlajku
  opakuj, kým nenastane (životy = 0)
    ak je stlačená [šípka vpravo]: zmeň x o 5
    zmeň y jablka o -5
    …
  povedz „KONIEC HRY“
```

Prečo **„opakuj, kým…“** a nie **„opakuj 100×“**? Vopred nevieš, ako dlho bude hráč hrať. Koniec závisí od toho, čo sa stane: dôjdu životy. **Pevný počet** sa hodí inde, keď presne vieš koľkokrát: *opakuj 3×: blikni*, keď postavu niečo zasiahne.

Podmienka sa kontroluje **na začiatku každého kola**. Keď posledný život zmizne uprostred kola, kolo ešte dobehne a potom slučka skončí. Slučka musí raz **skončiť**. Keby životy nikdy neubúdali, hra sa **zacyklí** a nedá sa vyhrať ani prehrať. Blok *opakuj stále* je naopak zámer: hudba v pozadí hrá dookola, kým hru nezavrieš.

**Vyskúšaj to!** Zahraj si akúkoľvek hru a skús odhadnúť, čo je v tele jej slučky: čo číta, čo prepočítava, čo kreslí. A kedy slučka končí?

**Ďalej vo svete hier:** → [Keď sa dotkne mince](#svet-hry-rozhodovani-sk)
