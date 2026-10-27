---
id: svet-roboti-program
type: spine
title: "Senzor → program → světlo"
readingTime: 1
standalone: true
teaser: "Projdeš chodbou a světlo se samo rozsvítí. Uvnitř běží program ze tří částí. Stejných jako u každého programu na světě."
voice: universal
parent: null
diagram: vstup-zpracovani-vystup
core: false
recallQ: "Co udělá počítač, když v programu prohodíš dva příkazy, a proč?"
recallA: "Vykoná je v novém pořadí, i když to nedává smysl, protože nic nedomýšlí. Výsledek se proto může změnit."
lang: cs
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: program
state: edited
highlights:
  - "Kód je zápis algoritmu v programovacím jazyce (blokovém i textovém)"
  - "Sekvence: příkazy se vykonávají v pořadí, v jakém jsou zapsané"
  - "Vstup → zpracování → výstup; uživatelské rozhraní je místo, kde je potkáš"
carriers: prose|diagram|code
---

Projdeš chodbou a světlo se samo rozsvítí. Uvnitř běží program ze tří částí. Stejných jako u každého programu na světě.

Každý program **přijme vstup, zpracuje ho a vydá výstup**. U robotů a micro:bitu si na všechny tři části sáhneš:

- **vstup**: **senzor** něco změří (světlo, pohyb, teplotu, stisk tlačítka),
- **zpracování**: program hodnotu vyhodnotí (*je tma?*),
- **výstup**: **aktuátor** něco udělá (rozsvítí LED, roztočí motor, pípne).

Program pro micro:bit poskládáš v MakeCode z bloků, nebo ho napíšeš textem. Obojí je **kód**: algoritmus zapsaný v programovacím jazyce.

```
pořád:
  když úroveň světla < 50:
    zobraz ikonu ☀
  jinak:
    vymaž displej
```

micro:bit vykoná příkazy **přesně v zapsaném pořadí**. Prohoď dva bloky a výsledek se změní. *Zobraz ikonu* a pak *pauza 1 s* ukáže ikonu na sekundu. *Pauza 1 s* a pak *zobraz ikonu* nechá displej sekundu prázdný. Počítač nedomýšlí, co jsi chtěl.

**Senzory** jsou smysly zařízení, **aktuátory** jeho svaly. Senzor bez aktuátoru jen tiše měří, aktuátor bez senzoru je slepá síla. Teprve program mezi nimi dělá z čísel činy. Tlačítka a displej micro:bitu jsou jeho **uživatelské rozhraní**: místo, kde vstup a výstup potkáš ty.

**Zkus to!** Najdi doma tři zařízení, která jedou podle schématu vstup → zpracování → výstup. U každého urči senzor i aktuátor. Co měří rychlovarná konvice a co pak udělá?

**Dál ve světě robotů:** → [Blok „pořád“](#svet-roboti-opakovani)
