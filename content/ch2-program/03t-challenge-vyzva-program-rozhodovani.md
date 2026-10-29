---
id: vyzva-program-rozhodovani
type: challenge
title: "Tři pokladny, dvě chyby"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Tři kamarádi z kroužku naprogramovali pokladnu do bazénu, každý jinak."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: rozhodovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Tři kamarádi z kroužku naprogramovali pokladnu do bazénu, každý jinak. Dvě pokladny počítají špatně. Třetí je správně, i když vypadá divně. Najdeš, která je která, a jeden věk, který obě chyby prozradí?

<!-- task -->

Ceník: do 5 let **zdarma**, 6 až 14 let **60 Kč**, 15 až 64 let **120 Kč**, od 65 let **60 Kč**. V Pythonu `elif` znamená „jinak, když“. Program jde podmínkami shora a provede **první**, která platí. Ostatní přeskočí.

**Pokladna A**
```
if vek >= 15:
    cena = 120
elif vek >= 65:
    cena = 60
elif vek >= 6:
    cena = 60
else:
    cena = 0
```
**Pokladna B**
```
if vek < 6:
    cena = 0
elif vek < 15 or vek > 65:
    cena = 60
else:
    cena = 120
```
**Pokladna C**
```
if vek < 6:
    cena = 0
elif vek >= 15 and vek < 65:
    cena = 120
elif vek >= 65 and vek < 15:
    cena = 60
else:
    cena = 60
```

**Úkol 1.** U každé pokladny rozhodni, jestli je správně. U chybné najdi **všechny** věky, pro které počítá špatně.

**Úkol 2.** Ve dvou programech je větev, která **nemůže nikdy proběhnout**. Najdi obě. Proč jedna z nich způsobí chybu a druhá ne?

**Úkol 3.** Najdi **nejmenší** sadu věků k otestování, která odhalí obě chybné pokladny.

**Kdy máš hotovo:** správné verdikty, přesné rozsahy chybných věků, obě mrtvé větve a nejmenší sada testů.

<!-- hint -->

U A zkus věk 70. Kterou podmínku program potká jako první?

<!-- hint -->

U B porovnej `vek > 65` s ceníkem. Kolik zaplatí člověk, kterému je přesně 65?

<!-- hint -->

Podmínka `vek >= 65 and vek < 15` chce, aby někomu bylo zároveň aspoň 65 a méně než 15.

<!-- solution -->

**A je chybná** pro všechny věky **od 65 výš**: senior splní hned první podmínku `vek >= 15` a zaplatí 120. Větev `vek >= 65` je pod ní a nikdy na ni nedojde, je **mrtvá**. U `elif` záleží na pořadí: užší podmínka musí jít dřív.

**B je chybná** jen pro věk **přesně 65**: `65 > 65` neplatí, takže 65letý zaplatí 120. Správně má být `vek >= 65`.

**C je správně.** Její třetí větev je taky mrtvá, nikomu nemůže být zároveň aspoň 65 a méně než 15. Senioři ale propadnou do `else` a zaplatí správných 60. Mrtvá větev v A schovala chybu, mrtvá větev v C jen mate čtenáře kódu.

**Nejmenší sada je jediný věk: 65.** Odhalí A i B, obě účtují 120. Dobrá sada pro jakoukoli pokladnu ale testuje **obě strany každé hranice**: 5, 6, 14, 15, 64, 65.

<!-- more -->

Tomu se říká **testování hraničních hodnot**. Profesionálové píšou automatické testy, které se pustí po každé změně kódu. Zkus to: zabal pokladnu do funkce `def cena(vek):` s `return` místo `cena = …` a pod ni napiš řádky jako `assert cena(65) == 60`. Když test neprojde, Python zahlásí chybu. Pak podmínky přepiš tak, aby šly přeházet v libovolném pořadí a pořád fungovaly. Tip: každá větev musí popsat celý svůj rozsah, třeba `vek >= 6 and vek < 15`.
