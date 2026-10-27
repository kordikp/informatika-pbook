---
id: svet-roboti-abstrakce-a-model
type: spine
title: "Svět očima robota"
readingTime: 1
standalone: true
teaser: "Ty vidíš kočku, koberec a gauč. Robotický vysavač vidí tři čísla."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč mapa metra nekreslí ulice a jak by vypadala jako graf?"
recallA: "Pro přestupování stačí stanice a spojení, ulice by jen rušily. Stanice jsou uzly, spojení mezi nimi hrany."
lang: cs
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
  - "Abstrakce: co je podstatné, závisí na účelu"
  - "Graf jako model: uzly a hrany (metro, kamarádi ve třídě, návaznost kapitol)"
  - "Žádný model není úplný, je to vždy volba"
carriers: prose|image
---

Ty vidíš kočku, koberec a gauč. Robotický vysavač vidí tři čísla.

Robot nevnímá svět jako ty. Ze **senzorů** dostává jen čísla: světlo **37** (z 255), vzdálenost před sebou **12 cm**, náraz **ne**. Z toho si skládá **model** světa. Vynechá všechno, co pro svůj **účel** nepotřebuje: barvu koberce, kočku na gauči, obraz na zdi.

![Co vidíš ty a co vidí robot](images/svet-roboti-cisla.svg)

Co je podstatné, záleží na účelu. Vysavači stačí vědět, kde je volno a kde překážka. Robot, který třídí ponožky, by naopak barvu potřeboval.

Byt si vysavač pamatuje jako **graf**: místnosti jsou **uzly**, dveře mezi nimi **hrany**. Podle grafu plánuje, kudy projet, a nepotřebuje k tomu vědět, jak vypadá nábytek.

Žádný model není úplný, vždycky je to **volba**. Vysavač, který měří jen vzdálenost před sebou, nepozná schod dolů, dokud mu nepřidáš senzor pod sebe. A ponožku na zemi jeho model nezná vůbec, proto ji klidně spolkne.

**Zkus to!** Vyber robota nebo chytré zařízení (vysavač, sekačku, automatické dveře). Jaká čísla dostává ze senzorů a co z tvého světa mu v modelu chybí?

**Dál ve světě robotů:** → [Robot uvízlý v rohu](#svet-roboti-over-a-oprav)
