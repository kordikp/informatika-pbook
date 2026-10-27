---
id: svet-hry-kodovani
type: spine
title: "Sprite je mřížka čísel"
readingTime: 1
standalone: true
teaser: "Postavička v pixelové hře je pro počítač tabulka čísel. Doslova."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč má fotka s větším rozlišením větší soubor?"
recallA: "Skládá se z více pixelů a každý pixel je zakódovaný čísly. Víc pixelů znamená víc čísel, tedy víc bytů."
lang: cs
lens: hry
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: kodovani
state: edited
highlights:
  - "Kódování = domluvená pravidla převodu (pixel → číslo, písmeno → číslo)"
  - "Velikost dat: bit, byte, MB, GB; rozlišení a kvalita zvětšují soubor"
  - "Typ souboru (přípona) říká, jak čísla číst; komprese šetří místo"
carriers: prose|image
---

Postavička v pixelové hře je pro počítač tabulka čísel. Doslova.

Malá herní postavička, **sprite**, je mřížka pixelů. Každý pixel je **číslo**, které podle domluvené **palety** znamená barvu: 0 průhledná, 1 černá, 2 kůže, 3 modrá. Domluvené pravidlo převodu je **kódování**. Kdo paletu zná, poskládá z čísel stejný obrázek.

![Sprite 8 × 8 a jeho čísla](images/svet-hry-sprite.svg)

Sprite 8 × 8 má 64 čísel. Pro čtyři barvy stačí na pixel 2 **bity**, takže se celý obrázek vejde do 16 **bytů**. Staré konzole měly paměti málo, proto měly postavy tak málo barev a pixelů.

Dnešní hry mají textury 4096 × 4096 pixelů a každý pixel má tři barvy po 8 bitech. Jedna textura má přes 48 **MB** a hra jich má tisíce. Proto stahuješ hru, která má desítky **GB**. Víc detailů znamená víc čísel, tedy větší soubor.

Typ souboru (přípona) říká, jak čísla číst: **.png** je obrázek, **.wav** zvuk, **.json** text s daty. Aby hry nebyly obrovské, čísla se **komprimují**: místo „modrá, modrá, modrá… 200krát“ se uloží „200× modrá“.

**Zkus to!** Nakresli na čtverečkovaný papír vlastní sprite 8 × 8 a zapiš ho čísly podle palety 0–3. Poskládá kamarád z čísel stejný obrázek?

**Dál ve světě her:** → [Proč online hra laguje](#svet-hry-cesta-dat)
