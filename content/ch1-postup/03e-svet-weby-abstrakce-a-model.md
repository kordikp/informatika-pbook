---
id: svet-weby-abstrakce-a-model
type: spine
title: "Náčrt a mapa webu"
readingTime: 1
standalone: true
teaser: "Než napíšou první řádek kódu, nakreslí designéři web tužkou: šedé obdélníky, žádné barvy, žádné fotky. Proč tak ošklivě?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč mapa metra nekreslí ulice a jak by vypadala jako graf?"
recallA: "Pro přestupování stačí stanice a spojení, ulice by jen rušily. Stanice jsou uzly, spojení mezi nimi hrany."
lang: cs
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
  - "Abstrakce: co je podstatné, závisí na účelu"
  - "Graf jako model: uzly a hrany (metro, kamarádi ve třídě, návaznost kapitol)"
  - "Žádný model není úplný, je to vždy volba"
carriers: prose|image
---

Než napíšou první řádek kódu, nakreslí designéři web tužkou: šedé obdélníky, žádné barvy, žádné fotky. Proč tak ošklivě?

Takovému náčrtu se říká **wireframe**, drátěný model stránky. Obdélník s křížkem znamená „tady bude fotka“, vlnovky jsou text, ovál je tlačítko. Wireframe schválně **vynechá** barvy, písmo i obrázky, protože v tu chvíli řešíš jedinou otázku: *co na stránce bude a kde*. To je **abstrakce**. Co je podstatné, záleží na **účelu**: pro rozmístění je to poloha a velikost, pro grafika barvy.

![Wireframe úvodní stránky a mapa webu jako graf](images/svet-weby-nacrt.svg)

Druhý model je **mapa webu**, a ta je **graf**. Stránky jsou **uzly**, odkazy mezi nimi **hrany**. Z úvodní stránky vedou hrany na *O nás*, *Akce* a *Kontakt*, z každé akce zpátky na seznam akcí. Z grafu hned vidíš problém: do stránky, do které nevede žádná hrana, se návštěvník nikdy nedostane. A když k tomu nejdůležitějšímu vede cesta přes pět kliknutí, je moc dlouhá.

Žádný z modelů není celý web. Wireframe neví, jak web vypadá, mapa neví, co je na stránkách. Je to **volba**: každý model odpovídá na jednu otázku, a proto se podle něj dobře rozhoduje. I prohlížeč si načtenou stránku drží jako model, strom prvků jménem **DOM**: stránka obsahuje tělo, tělo nadpisy a odstavce, odstavce text.

**Zkus to!** Nakresli wireframe úvodní stránky webu své školy: jen obdélníky, čáry a popisky. Pak nakresli mapu webu. Vede do každé stránky aspoň jedna hrana?

**Dál ve světě webů:** → [Tři jazyky jedné stránky](#svet-weby-program)
