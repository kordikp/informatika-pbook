---
id: svet-hry-dekompozice-hu
translationOf: svet-hry-dekompozice
lang: hu
type: spine
title: "Darabokra bontott játék"
readingTime: 1
standalone: true
teaser: "Olyan játékot szeretnél, amelyben egy kosár elkapja a lehulló almákat. Az üres képernyő hallgat. Hol is kezdd?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Hogyan bontod részekre azt a feladatot, hogy „szervezd meg az osztálykirándulást”, és miért számít a részek sorrendje?"
recallA: "Kisebb feladatokra: cél és költségvetés, helyszín, utazás, program, jelentkezés. Némelyik másoktól függ: a buszt csak akkor rendeled meg, ha már megvan a helyszín és a létszám."
lens: hry
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
state: edited
highlights:
  - "A feladat: kiinduló állapot, cél, korlátok"
  - "Részfeladatok és függőségeik (mi legyen kész előbb)"
  - "Egy elnevezett részfeladat a kódban alprogram"
carriers: prose|image
---

Olyan játékot szeretnél, amelyben egy kosár elkapja a lehulló almákat. Az üres képernyő hallgat. Hol is kezdd?

Először a **feladat**: mid van, mit akarsz, és mit nem szabad. Van Scratched és egy délutánod (**kiinduló állapot**). Olyan játékot akarsz, amelyben a kosár almákat kap el, minden elkapás egy pont, és három elszalasztott alma után vége (**cél**). És a **korlátok**: egy képernyő, irányítás a nyilakkal.

Aztán a játékot **részekre bontod**, amelyeket egyenként is megoldasz: a kosár mozgása, az alma esése, az elkapás, a pontszám és az életek, a játék vége.

![Az Almaelkapó játék részekre bontva](images/svet-hry-rozklad.hu.svg)

A **sorrend** számít. Az elkapást nem próbálhatod ki, amíg a kosár nem mozog és az alma nem esik. A pontszámnak nincs mit számolnia, amíg az elkapás nem működik. Ezért alulról felfelé építkezel: először a mozgás, aztán az esés, aztán az elkapás, végül a pontszám és a játék vége.

Minden részt **elnevezhetsz**, és becsomagolhatsz egy saját blokkba. A Scratchben: *Saját blokkok → Új blokk → „kosár mozgatása”*. Egy elnevezett kódrészlet az **alprogram**. A főprogram ezután majdnem úgy olvasható, mint egy könyv tartalomjegyzéke: *kosár mozgatása, alma esése, elkapás ellenőrzése*.

**Próbáld ki!** Bontsd részekre a Kígyó játékot. Mi mindenre kell képesnek lennie, és ebből minek kell előbb működnie, mint a többinek?

**Tovább a játékok világában:** → [Hitbox: a lovag egy téglalap](#svet-hry-abstrakce-a-model-hu)
