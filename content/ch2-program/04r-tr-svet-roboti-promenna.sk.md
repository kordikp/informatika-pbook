---
id: svet-roboti-promenna-sk
translationOf: svet-roboti-promenna
lang: sk
type: spine
title: "Krokomer z micro:bitu"
readingTime: 1
standalone: true
teaser: "Pripevníš micro:bit na topánku a on počíta kroky. Kde si to číslo drží medzi dvoma krokmi?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Skóre je 5. Program vykoná „nastav skóre na 3“ a potom „zmeň skóre o 2“. Koľko je skóre?"
recallA: "5. Nastavenie prepíše hodnotu na 3, zmena o 2 ju zvýši na 5. Premenná si pamätá len poslednú hodnotu."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: promenna
state: edited
highlights:
  - "Názov a aktuálna hodnota (práve jedna)"
  - "Nastav vs. zmeň o; priradenie prepíše starú hodnotu"
  - "Premenná ako stav programu (skóre, životy, režim)"
carriers: prose|image|code
---

Pripevníš micro:bit na topánku a on počíta kroky. Kde si to číslo drží medzi dvoma krokmi?

V **premennej**. Má **názov** (*kroky*) a v jednej chvíli **práve jednu hodnotu**: teraz 248, po ďalšom kroku 249.

```
pri štarte:
  nastav [kroky] na 0
pri zatrasení:
  zmeň [kroky] o 1
  zobraz číslo [kroky]
pri stlačení tlačidla B:
  nastav [kroky] na 0
```

![Krokomer ukazuje hodnotu premennej kroky](images/svet-roboti-krokomer.sk.svg)

Dva bloky, dve rôzne veci:

- **nastav na** prepíše hodnotu. *Nastav kroky na 0* vymaže, čo tam bolo: pri štarte a pri resete tlačidlom B.
- **zmeň o** pripočíta k tomu, čo tam je. Každé zatrasenie: +1.

Keby si omylom dal do zatrasenia *nastav kroky na 1*, krokomer by ukazoval stále 1. Každý krok by prepísal ten predchádzajúci.

Premenná drží aj **stav** zariadenia. Premenná *režim* môže byť *počítam*, alebo *pauza*. Tlačidlo A ju prepína a zatrasenie pripočítava len v režime *počítam*. Rovnaké zatrasenie, iné správanie, podľa toho, čo je v premennej.

**Vyskúšaj to!** Postav krokomer v simulátore MakeCode. Potom pridaj tlačidlo A, ktoré ukáže, koľko krokov zostáva do tisíc. Potrebuješ na to novú premennú?

**Ďalej vo svete robotov:** → [Srdce z 25 čísel](#svet-roboti-kodovani-sk)
