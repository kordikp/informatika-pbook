---
id: expedice-program-2-sk
translationOf: expedice-program-2
lang: sk
type: spine
title: "Výzva: teplomer na chate"
readingTime: 1
standalone: false
teaser: "Na chate visí teplomer a každú hodinu zapíše teplotu: teploty = [-3, -1, 2, 5, 4, 0, -2, -6] Hranaté zátvorky sú zoznam: rad hodnôt v jednej škatuľke."
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
concept: expedice-program-2
conceptTitle: "Výzva: teplomer na chate"
objective: "Na chate visí teplomer a každú hodinu zapíše teplotu: teploty = [-3, -1, 2, 5, 4, 0, -2, -6] Hranaté zátvorky sú zoznam: rad hodnôt v jednej škatuľke."
state: edited
carriers: prose|code
---

**🧩 Výzva** · krok 2 z 5 · [Dvanásť hviezd](#expedice-program-sk)

Na chate visí teplomer a každú hodinu zapíše teplotu:
```
teploty = [-3, -1, 2, 5, 4, 0, -2, -6]
```
Hranaté zátvorky sú **zoznam**: rad hodnôt v jednej škatuľke. Cyklus `for t in teploty:` prejde hodnoty jednu po druhej a každú na chvíľu uloží do `t`.

**Časť 1.** Koľko hodín bolo **pod nulou**? Nula pod nulou nie je. Napíš program, ktorý to spočíta. Pomôže ti škatuľka `pocet = 0` a podmienka vnútri cyklu.

**Časť 2.** Aké bolo **najväčšie oteplenie** medzi dvoma po sebe idúcimi hodinami? Program si musí pamätať **predchádzajúcu** teplotu. Založ škatuľku `predosla` a nastav ju na prvú teplotu. V každom kole spočítaj rozdiel `t - predosla`, porovnaj ho s doterajším rekordom a na konci kola nastav `predosla = t`.

**Kontrola:** v časti 1 má vyjsť **4**, v časti 2 **3**.

Keď to sedí, skús program na vlastnom zozname. Čo ak teplota celý deň len klesá? Je potom najväčšie oteplenie záporné, alebo nula? Záleží na tom, na čo nastavíš rekord na začiatku. Rozhodni, čo je správne, a uprav program.

Keď sa zasekneš, vlož kód do Python Tutora a krokuj. Uvidíš presne, kedy sa ktorá škatuľka zmení.

**Ďalší krok:** [Rozbor: história skutočného projektu](#expedice-program-3-sk)
