---
id: svet-weby-abstrakce-a-model-sk
translationOf: svet-weby-abstrakce-a-model
lang: sk
type: spine
title: "Náčrt a mapa webu"
readingTime: 1
standalone: true
teaser: "Skôr než napíšu prvý riadok kódu, nakreslia dizajnéri web ceruzkou: sivé obdĺžniky, žiadne farby, žiadne fotky. Prečo tak škaredo?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo mapa metra nekreslí ulice a ako by vyzerala ako graf?"
recallA: "Na prestupovanie stačia stanice a spojenia, ulice by len rušili. Stanice sú uzly, spojenia medzi nimi hrany."
lens: weby
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: abstrakce-a-model
state: edited
highlights:
  - "Abstrakcia: čo je podstatné, závisí od účelu"
  - "Graf ako model: uzly a hrany (metro, kamaráti v triede, nadväznosť kapitol)"
  - "Žiadny model nie je úplný, vždy je to voľba"
carriers: prose|image
---

Skôr než napíšu prvý riadok kódu, nakreslia dizajnéri web ceruzkou: sivé obdĺžniky, žiadne farby, žiadne fotky. Prečo tak škaredo?

Takému náčrtu sa hovorí **wireframe**, drôtený model stránky. Obdĺžnik s krížikom znamená „tu bude fotka“, vlnovky sú text, ovál je tlačidlo. Wireframe zámerne **vynechá** farby, písmo aj obrázky, pretože v tej chvíli riešiš jedinú otázku: *čo na stránke bude a kde*. To je **abstrakcia**. Čo je podstatné, závisí od **účelu**: pre rozmiestnenie je to poloha a veľkosť, pre grafika farby.

![Wireframe úvodnej stránky a mapa webu ako graf](images/svet-weby-nacrt.sk.svg)

Druhý model je **mapa webu**, a tá je **graf**. Stránky sú **uzly**, odkazy medzi nimi **hrany**. Z úvodnej stránky vedú hrany na *O nás*, *Akcie* a *Kontakt*, z každej akcie späť na zoznam akcií. Z grafu hneď vidíš problém: na stránku, na ktorú nevedie žiadna hrana, sa návštevník nikdy nedostane. A keď k tomu najdôležitejšiemu vedie cesta cez päť kliknutí, je príliš dlhá.

Žiadny z modelov nie je celý web. Wireframe nevie, ako web vyzerá, mapa nevie, čo je na stránkach. Je to **voľba**: každý model odpovedá na jednu otázku, a preto sa podľa neho dobre rozhoduje. Aj prehliadač si načítanú stránku drží ako model, strom prvkov s názvom **DOM**: stránka obsahuje telo, telo nadpisy a odseky, odseky text.

**Vyskúšaj to!** Nakresli wireframe úvodnej stránky webu svojej školy: len obdĺžniky, čiary a popisky. Potom nakresli mapu webu. Vedie na každú stránku aspoň jedna hrana?

**Ďalej vo svete webov:** → [Tri jazyky jednej stránky](#svet-weby-program-sk)
