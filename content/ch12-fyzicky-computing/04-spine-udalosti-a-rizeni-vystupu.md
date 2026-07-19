---
id: ch12-udalosti-a-rizeni-vystupu
type: spine
title: "Události a řízení výstupu"
readingTime: 2
standalone: true
teaser: "Stisk, zatřesení, tma. Zařízení celý den trpělivě čeká na svůj podnět — a pak jedná."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Jak funguje událostmi řízený program na fyzickém zařízení?"
recallA: "Program čeká, a když nastane podnět (stisk tlačítka, zatřesení, změna světla), spustí se obsluha události a ovládne výstup — LED, pin nebo motor."
highlights:
  - "Fyzické zařízení nereaguje pořád — reaguje na události."
  - "Je to událostmi řízené programování — stejné jako v appkách, jen s hmatatelným výsledkem."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch12-udalosti-a-rizeni-vystupu
state: core
carriers: prose
---

Zvonek u dveří prospí skoro celý den. Nedělá nic, jen čeká. Pak někdo zmáčkne tlačítko — a přesně v tu vteřinu se probudí a spustí zvonění. Takhle „přemýšlí" většina zařízení kolem tebe.

**Fyzické zařízení nereaguje pořád — reaguje na události.** Událost je podnět: stisk tlačítka, zatřesení, změna světla, hlasitý zvuk. Program většinu času tiše čeká, a když podnět přijde, spustí se jeho obsluha — kousek kódu, který ovládne výstup.

Základní stavební kámen je dvojice **podnět → výstup**:

- stisk tlačítka A → na LED displeji vyskočí smajlík,
- zatřesení → přehraje se animace,
- setmí se → rozsvítí se lampa,
- hlasitost překročí hranici → bzučák spustí alarm „psst!".

Na micro:bitu téhle dvojici odpovídají bloky jako „při stisknutí tlačítka A" nebo „při zatřesení". Dovnitř vložíš, co se má stát: rozsvítit LED matici, poslat signál na pin (a přes něj třeba roztočit motor). **Je to událostmi řízené programování — stejné jako v appkách, jen s hmatatelným výsledkem.** Klepnutí na ikonu v mobilu i kliknutí na tlačítko na webu jsou taky události; tady místo okna na obrazovce rozsvěcíš opravdové světlo.

Chytrá domácnost je vlastně sbírka takových pravidel: pohybové čidlo na chodbě → rozsviť; zvonek → pošli upozornění na mobil; otevřené okno → vypni topení. A kdo ta pravidla píše, ten rozhoduje, jak se celý dům chová — proto je dobré umět je nejen číst, ale i psát.

**Zkus to!** Navrhni si pokoj snů jako tři pravidla „když podnět → udělej výstup": jedno praktické (když se setmí → …), jedno strážní (když se otevřou dveře → …) a jedno úplně potrhlé. Ke každému připiš, který senzor by podnět zachytil a který aktuátor by výstup provedl.

> **Věděl/a jsi?** Airbag v autě je taky obsluha události: senzor zachytí náraz a program nafoukne vak za pár setin sekundy — rychleji, než stihneš mrknout.

Podněty chytají senzory a výstupy vykonávají aktuátory — dvojice z předchozí sekce se tady potkává v akci. A až budeš na webu oživovat tlačítka JavaScriptem, potkáš staré známé: úplně stejné události, jen bez drátů.
