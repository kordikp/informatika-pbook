---
id: svet-hry-opakovani-hu
translationOf: svet-hry-opakovani
lang: hu
type: spine
title: "A játékciklus: egy ciklus, amely sosem alszik"
readingTime: 1
standalone: true
teaser: "Egy játékban valójában semmi sem mozog. A képet csak másodpercenként hatvanszor rajzolja ki, mindig egy kicsit arrébb."
voice: universal
parent: null
diagram: anim-herni-smycka-hu
core: false
recallQ: "Mikor használod azt, hogy „ismételd 10×”, és mikor azt, hogy „ismételd, amíg…”?"
recallA: "Rögzített számot, ha előre tudod, hányszor. „Amíg”-ot, ha attól függ, mi történik, például amíg a robot neki nem megy a falnak."
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
  - "A ciklusmag és az ismétlések száma"
  - "Ismételd n× vs. ismételd, amíg (a leállás feltétele)"
  - "Végesség: a ciklusnak véget kell érnie, különben a program végtelen ciklusba kerül"
carriers: prose|animation|code
---

Egy játékban valójában semmi sem mozog. A képet csak másodpercenként hatvanszor rajzolja ki, mindig egy kicsit arrébb.

Minden játék közepén ott van a **játékciklus**: egy ciklus, amelynek **magjában** három lépés van. *Olvasd be a bemenetet* (nyomja a játékos a nyilat?), *számold újra a világot* (mozgasd a figurát, mozgasd az ellenségeket, ellenőrizd az érintéseket) és *rajzold ki a képet*. És újra. Másodpercenként 60 képkockánál a ciklusmag másodpercenként hatvanszor fut le. Amikor a játék „szaggat”, a ciklus nem bírja a tempót.

A Scratchben az Almaelkapó ciklusa így néz ki:

```
zöld zászlóra kattintáskor
  ismételd, amíg (életek = 0)
    ha [jobbra nyíl] lenyomva: változtasd x-et 5-tel
    változtasd az alma y-ját -5-tel
    …
  mondd: „VÉGE A JÁTÉKNAK”
```

Miért **„ismételd, amíg…”**, és miért nem **„ismételd 100-szor”**? Előre nem tudod, meddig fog játszani a játékos. A vége attól függ, mi történik: elfogynak az életek. A **rögzített ismétlésszám** máshol jó, amikor pontosan tudod, hányszor: *ismételd 3-szor: villanj*, amikor valami eltalálja a figurát.

A feltételt **minden kör elején** ellenőrzi. Ha az utolsó élet egy kör közepén tűnik el, a kör még lefut, és csak utána ér véget a ciklus. A ciklusnak egyszer **véget kell érnie**. Ha az életek sosem fogynának, a játék **végtelen ciklusba kerülne**, és nem lehetne se nyerni, se veszíteni. A *mindig* blokk viszont szándékos: a háttérzene körbe-körbe szól, amíg be nem zárod a játékot.

**Próbáld ki!** Játssz bármilyen játékkal, és próbáld kitalálni, mi van a ciklusmagjában: mit olvas be, mit számol újra, mit rajzol ki. És mikor ér véget a ciklus?

**Tovább a játékok világában:** → [Ha hozzáér az érméhez](#svet-hry-rozhodovani-hu)
