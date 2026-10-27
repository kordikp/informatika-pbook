---
id: svet-roboti-abstrakce-a-model-sk
translationOf: svet-roboti-abstrakce-a-model
lang: sk
type: spine
title: "Svet očami robota"
readingTime: 1
standalone: true
teaser: "Ty vidíš mačku, koberec a gauč. Robotický vysávač vidí tri čísla."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo mapa metra nekreslí ulice a ako by vyzerala ako graf?"
recallA: "Na prestupovanie stačia stanice a spojenia, ulice by len rušili. Stanice sú uzly, spojenia medzi nimi hrany."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: abstrakce-a-model
state: edited
highlights:
  - "Abstrakcia: čo je podstatné, závisí od účelu"
  - "Graf ako model: uzly a hrany (metro, kamaráti v triede, nadväznosť kapitol)"
  - "Žiadny model nie je úplný, vždy je to voľba"
carriers: prose|image
---

Ty vidíš mačku, koberec a gauč. Robotický vysávač vidí tri čísla.

Robot nevníma svet ako ty. Zo **senzorov** dostáva len čísla: svetlo **37** (z 255), vzdialenosť pred sebou **12 cm**, náraz **nie**. Z toho si skladá **model** sveta. Vynechá všetko, čo pre svoj **účel** nepotrebuje: farbu koberca, mačku na gauči, obraz na stene.

![Čo vidíš ty a čo vidí robot](images/svet-roboti-cisla.sk.svg)

Čo je podstatné, závisí od účelu. Vysávaču stačí vedieť, kde je voľno a kde prekážka. Robot, ktorý triedi ponožky, by naopak farbu potreboval.

Byt si vysávač pamätá ako **graf**: miestnosti sú **uzly**, dvere medzi nimi **hrany**. Podľa grafu plánuje, kadiaľ prejsť, a nepotrebuje na to vedieť, ako vyzerá nábytok.

Žiadny model nie je úplný, vždy je to **voľba**. Vysávač, ktorý meria len vzdialenosť pred sebou, nespozná schod dole, kým mu nepridáš senzor pod seba. A ponožku na zemi jeho model nepozná vôbec, preto ju pokojne zhltne.

**Vyskúšaj to!** Vyber robota alebo chytré zariadenie (vysávač, kosačku, automatické dvere). Aké čísla dostáva zo senzorov a čo z tvojho sveta mu v modeli chýba?

**Ďalej vo svete robotov:** → [Robot uviaznutý v rohu](#svet-roboti-over-a-oprav-sk)
