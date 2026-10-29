---
id: vyzva-stroje-a-site-uvnitr-zarizeni-sk
translationOf: vyzva-stroje-a-site-uvnitr-zarizeni
lang: sk
type: challenge
title: "Kuchár čaká na špajzu"
level: 2
minutes: 30
readingTime: 2
standalone: true
teaser: "Hra chce 8 GB operačnej pamäte a ty máš rýchly SSD disk."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: uvnitr-zarizeni
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

Hra chce 8 GB operačnej pamäte a ty máš rýchly SSD disk. Prečo si hra neberie dáta rovno zo špajze? Odpoveď nie je „lebo je to tak“. Dá sa vypočítať.

<!-- task -->

Každé siahnutie po dáta trvá inak dlho (ns je nanosekunda, miliardtina sekundy):

| Kde dáta ležia | Čas jedného prístupu |
|---|---|
| operačná pamäť (RAM) | 100 ns |
| SSD disk | 100 µs = 100 000 ns |
| klasický pevný disk (HDD) | 10 ms = 10 000 000 ns |
| server na internete | 50 ms |

1. **Ľudská mierka.** Zväčši čas tak, aby 1 ns trvala 1 sekundu. Ako dlho by trvalo každé siahnutie? Preveď to na minúty, hodiny, dni alebo roky.
2. **Snímka hry.** Hra kreslí 60 snímok za sekundu, na jednu snímku má teda asi 16,7 ms. Na každú snímku potrebuje prečítať 10 000 malých kúskov dát. Vypočítaj, ako dlho to trvá z RAM a ako dlho zo SSD. Koľko snímok za sekundu by hra mala, keby čítala len zo SSD?
3. **Sekanie.** Otvoríš toľko aplikácií, že sa do RAM nezmestia. Operačný systém ich však nezavrie. Čo s nimi urobí a prečo sa potom počítač seká?

**Kritérium úspechu:** správne čísla v bodoch 1 a 2 a vysvetlenie v bode 3, v ktorom je slovo „disk“.

<!-- hint -->

Ľudská mierka: 100 ns sa zmení na 100 s. Deň má 86 400 s a rok asi 31,5 milióna s.

<!-- hint -->

Celkový čas = počet prístupov × čas jedného prístupu. Pozor na jednotky: 1 ms = 1 000 µs = 1 000 000 ns.

<!-- hint -->

Keď sa na pracovnú dosku nič nezmestí, odnesie vedúci zmeny časť vecí do špajze. Ako dlho potom trvá priniesť ich späť?

<!-- solution -->

1. RAM: 100 s, necelé 2 minúty. SSD: 100 000 s, asi 28 hodín. HDD: 10 miliónov s, asi 116 dní. Server: 50 miliónov s, asi 1,6 roka.
2. Z RAM: 10 000 × 100 ns = 1 ms. Do snímky sa to zmestí šestnásťkrát. Zo SSD: 10 000 × 100 µs = 1 s na jedinú snímku, teda **1 snímka za sekundu**. Hra by bola nehrateľná. Preto má hra **načítaciu obrazovku**: prenesie úroveň zo špajze na dosku raz a potom už berie dáta len z RAM.
3. Operačný systém **odloží** časť obsahu RAM na disk (odkladací súbor). Keď aplikácia tie dáta znova potrebuje, musí čakať na disk, ktorý je zhruba tisíckrát pomalší. Preto sa počítač s plnou RAM seká. Pomôže zavrieť aplikácie alebo pridať RAM. Mazanie fotiek pomôže len vtedy, keď je plné úložisko.

Poznámka: skutočný SSD číta dáta po veľkých blokoch a naraz, takže je v praxi rýchlejší než v tomto modeli. Pomer však zostáva: doska je rádovo rýchlejšia než špajza.

<!-- more -->

Kuchár má ešte menšie a rýchlejšie vrecko na zástere, **vyrovnávaciu pamäť procesora** (cache): prístup trvá okolo 1 ns. Dopočítaj si ju do tabuľky. Potom otvor vo Windows správcu úloh (Ctrl+Shift+Esc, karta Výkon) a sleduj pamäť, kým otváraš karty. Alebo spusti Linux v prehliadači na copy.sh/v86 a napíš príkaz free. Ako procesor počíta, si postavíš z hradiel v hre navyše „Ako kuchár počíta“ alebo na nandgame.com.
