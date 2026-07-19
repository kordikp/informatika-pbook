---
id: ch12-vstup-zpracovani-vystup-na-zarizeni
type: spine
title: "Vstup–zpracování–výstup na zařízení"
readingTime: 2
standalone: true
teaser: "Dveře v obchoďáku, topení i robotický vysavač jedou pořád stejné tři kroky. Poznáš je?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Jaké tři kroky se opakují ve smyčce každého fyzického zařízení?"
recallA: "Vstup (senzor něco změří), zpracování (program hodnotu vyhodnotí) a výstup (zařízení něco vykoná — rozsvítí LED, roztočí motor)."
highlights:
  - "vstup → zpracování → výstup"
  - "Ve fyzickém computingu má kód okamžitý hmatatelný efekt."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch12-vstup-zpracovani-vystup-na-zarizeni
state: core
carriers: prose
---

Stoupneš si před skleněné dveře v obchoďáku a ony se před tebou samy rozjedou. Kouzlo? Ne. Jen tři kroky, které se opakují pořád dokola — a které od téhle chvíle začneš vidět úplně všude.

Každé chytré zařízení žije ve stejné smyčce jako počítač: **vstup → zpracování → výstup** (anglicky input – processing – output). Rozdíl je v tom, že tady si na ni můžeš sáhnout.

- **Vstup:** senzor něco změří. Pohyb přede dveřmi, teplotu v pokoji, množství světla.
- **Zpracování:** program hodnotu vyhodnotí. „Jde někdo? Je v pokoji míň než 21 stupňů?"
- **Výstup:** zařízení něco vykoná. Otevře dveře, zapne topení, rozsvítí LED, roztočí motor.

U běžného programu se výsledek objeví na obrazovce. **Ve fyzickém computingu má kód okamžitý hmatatelný efekt.** Poskládáš pár bloků, nahraješ je do zařízení — a ve skutečném světě se něco rozsvítí, pípne nebo pohne.

Ta smyčka běží kolem tebe nonstop:

- automatické dveře: senzor pohybu → „někdo jde" → motor otevře,
- chytrá domácnost: teploměr → „je zima" → kotel zatopí,
- robotický vysavač: nárazník narazí → „překážka!" → motory otočí kola,
- školní destička micro:bit: senzor světla → „setmělo se" → rozsvítí se LED displej.

A nejlepší na tom: takovou smyčku umíš naprogramovat i ty. Stačí jedno pravidlo — „když naměřená hodnota překročí hranici, zapni výstup" — a máš vlastní noční lampičku, alarm na šuplík se sladkostmi nebo teploměr, který hlásí, že máš vyvětrat.

**Zkus to!** Najdi doma tři zařízení, která jedou ve smyčce vstup → zpracování → výstup, a u každého urči všechny tři kroky. Rozjezd: co měří rychlovarná konvice a co pak udělá? A co výtah?

> **Věděl/a jsi?** Moderní auto v sobě ukrývá desítky malých počítačů a každý jede přesně tuhle smyčku: senzory hlídají rychlost kol nebo náraz, program vyhodnocuje a výstupem je brzdění, airbag nebo kontrolka na palubovce.

Roboti a vozítka nedělají nic jiného — jen tuhle smyčku opakují mnohokrát za sekundu. Než se k nim dostaneš, prozkoumej zblízka její začátek a konec: senzory a aktuátory.
