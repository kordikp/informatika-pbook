---
id: vyzva-socialni-doporucovac-sk
translationOf: vyzva-socialni-doporucovac
lang: sk
type: challenge
title: "Postav feed z čísel"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Feed nečíta myšlienky."
voice: universal
parent: svet-socialni-doporucovac-sk
diagram: null
core: false
status: accepted
concept: doporucovac
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|table|formula
---

Feed nečíta myšlienky. Počíta. Každá téma má skóre a ďalšie video dostane téma s najvyšším číslom. Buď teraz chvíľu algoritmom ty.

<!-- task -->

Sieť za teba vedie túto tabuľku za jeden deň:

| Téma | Zhliadnutia | Priemerne dopozerané | Lajky | Zdieľania | „Nemám záujem“ |
|---|---|---|---|---|---|
| Psíky | 3 | 90 % | 1 | 1 | 0 |
| Futbal | 4 | 40 % | 2 | 0 | 0 |
| Minecraft | 2 | 100 % | 0 | 0 | 0 |
| Vtipy | 5 | 30 % | 0 | 0 | 1 |
| Varenie | 1 | 80 % | 0 | 0 | 0 |

Skóre témy sa počíta takto:

$$\text{skóre} = 10 \cdot \text{zhliadnutia} \cdot \text{dopozerané} + 3 \cdot \text{lajky} + 5 \cdot \text{zdieľania} - 15 \cdot \text{„Nemám záujem“}$$

(Dopozerané píš ako desatinné číslo, 90 % = 0,9.)

1. Vypočítaj skóre všetkých piatich tém a zoraď ich.
2. Koľko videí s Minecraftom musíš dopozerať celých (každé pridá jedno zhliadnutie so 100 %), aby Minecraft predbehol psíky? A koľko ťuknutí na „Nemám záujem“ zhodí futbal pod Minecraft?
3. Zajtra má feed 10 miest a algoritmus ich dá všetky víťazovi. Vysvetli, prečo sa skóre ostatných tém potom už nikdy nezmení. Potom navrhni rozdelenie 10 miest, ktoré splní tri pravidlá: aspoň 6 miest majú dve najlepšie témy, každá téma so skóre nad 0 dostane aspoň 1 miesto a 1 miesto je prieskum úplne novej témy.

<!-- hint -->

Psíky: 10 · 3 · 0,9 = 27, k tomu 3 za lajk a 5 za zdieľanie, spolu 35. Rovnako postupuj pri ostatných.

<!-- hint -->

Jedno celé dopozeranie pridá Minecraftu 10 bodov. Hľadáš najmenší počet videí, po ktorom je skóre väčšie ako 35, nie len rovnaké.

<!-- hint -->

Sieť sa učí len z videí, ktoré ti ukáže. Čo sa stane s dátami o futbale, keď ti žiadny futbal nepríde?

<!-- solution -->

**1.** Psíky 35, Futbal 16 + 6 = 22, Minecraft 20, Varenie 8, Vtipy 15 − 15 = 0. Poradie: Psíky, Futbal, Minecraft, Varenie, Vtipy.

**2.** Minecraft potrebuje **2 videá**: po jednom má 30 (stále menej ako 35), po dvoch 40. Futbalu stačí **1 ťuknutie**: 22 − 15 = 7, to je menej ako 20. Záporný signál váži viac ako kladný, preto „Nemám záujem“ funguje tak rýchlo.

**3.** Keď ti chodia len psíky, o futbale ani Minecrafte nevzniknú v tabuľke žiadne nové riadky. Ich skóre zamrzne a psíky rastú ďalej. To je **bublina**: slučka, v ktorej algoritmus potvrdzuje sám seba. Vyhovujúce rozdelenie je napríklad: Psíky 4, Futbal 3, Minecraft 1, Varenie 1, prieskum 1 (4 + 3 = 7 ≥ 6, Vtipy majú 0 a nedostanú nič, súčet 10). Správnych riešení je viac: over si svoje podľa troch pravidiel. Skutočné siete tomu hovoria **prieskum verzus využívanie** (exploration a exploitation).

<!-- more -->

Postav si skutočný feed. Vo vizuálnej stavebnici SkyFeed pre Bluesky (s rodičom cez jeho účet) poskladáš filter a radenie a uvidíš, čo to urobí. Kto chce čítať kód, otvorí štartovaciu sadu bluesky-social/feed-generator na GitHube: celý ukážkový feed je v priečinku src/algos. A potom porovnaj so zverejneným algoritmom X z roku 2023, ktorý radí rovnako, len s tisíckami signálov. Hra navyše „Krokuj feed“ ti umožní tento výpočet krokovať v kóde.
