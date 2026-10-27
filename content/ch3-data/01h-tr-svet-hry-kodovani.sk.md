---
id: svet-hry-kodovani-sk
translationOf: svet-hry-kodovani
lang: sk
type: spine
title: "Sprite je mriežka čísel"
readingTime: 1
standalone: true
teaser: "Postavička v pixelovej hre je pre počítač tabuľka čísel. Doslova."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo má fotka s väčším rozlíšením väčší súbor?"
recallA: "Skladá sa z viacerých pixelov a každý pixel je zakódovaný číslami. Viac pixelov znamená viac čísel, teda viac bajtov."
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
  - "Kódovanie = dohodnuté pravidlá prevodu (pixel → číslo, písmeno → číslo)"
  - "Veľkosť dát: bit, bajt, MB, GB; rozlíšenie a kvalita zväčšujú súbor"
  - "Typ súboru (prípona) hovorí, ako čísla čítať; kompresia šetrí miesto"
carriers: prose|image
---

Postavička v pixelovej hre je pre počítač tabuľka čísel. Doslova.

Malá herná postavička, **sprite**, je mriežka pixelov. Každý pixel je **číslo**, ktoré podľa dohodnutej **palety** znamená farbu: 0 priehľadná, 1 čierna, 2 pokožka, 3 modrá. Dohodnuté pravidlo prevodu je **kódovanie**. Kto paletu pozná, poskladá z čísel rovnaký obrázok.

![Sprite 8 × 8 a jeho čísla](images/svet-hry-sprite.sk.svg)

Sprite 8 × 8 má 64 čísel. Pre štyri farby stačia na pixel 2 **bity**, takže sa celý obrázok zmestí do 16 **bajtov**. Staré konzoly mali málo pamäte, preto mali postavy tak málo farieb a pixelov.

Dnešné hry majú textúry 4096 × 4096 pixelov a každý pixel má tri farby po 8 bitov. Jedna textúra má viac ako 48 **MB** a hra ich má tisíce. Preto sťahuješ hru, ktorá má desiatky **GB**. Viac detailov znamená viac čísel, teda väčší súbor.

Typ súboru (prípona) hovorí, ako čísla čítať: **.png** je obrázok, **.wav** zvuk, **.json** text s dátami. Aby hry neboli obrovské, čísla sa **komprimujú**: namiesto „modrá, modrá, modrá… 200-krát“ sa uloží „200× modrá“.

**Vyskúšaj to!** Nakresli na štvorčekový papier vlastný sprite 8 × 8 a zapíš ho číslami podľa palety 0–3. Poskladá kamarát z čísel rovnaký obrázok?

**Ďalej vo svete hier:** → [Prečo online hra laguje](#svet-hry-cesta-dat-sk)
