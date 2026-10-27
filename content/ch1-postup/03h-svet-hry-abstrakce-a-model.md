---
id: svet-hry-abstrakce-a-model
type: spine
title: "Hitbox: rytíř je obdélník"
readingTime: 1
standalone: true
teaser: "Rytíř ve hře má plášť, meč a vlající vlasy. Pro kolize je to ale obyčejný obdélník. A je to tak dobře."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč mapa metra nekreslí ulice a jak by vypadala jako graf?"
recallA: "Pro přestupování stačí stanice a spojení, ulice by jen rušily. Stanice jsou uzly, spojení mezi nimi hrany."
lang: cs
lens: hry
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

Rytíř ve hře má plášť, meč a vlající vlasy. Pro kolize je to ale obyčejný obdélník. A je to tak dobře.

Hra potřebuje mnohokrát za sekundu zjistit, jestli se něco něčeho dotýká. Kontrolovat každý pixel pláště by bylo pomalé. Proto si kolem postavy myslí neviditelný **hitbox**, jednoduchý obdélník. Kolize je pak jen otázka: *překrývají se dva obdélníky?*

![Rytíř a jeho hitbox, mapa dungeonu jako graf](images/svet-hry-hitbox.svg)

To je **abstrakce**: vynecháš, co pro daný **účel** nepotřebuješ. Pro kolize je důležitý tvar a poloha, ne barva pláště. Pro vykreslení je to naopak, tam se plášť kreslí do posledního pixelu. Stejná postava, dva účely, dva různé modely.

Model může být i **graf**. Mapa dungeonu je síť místností (**uzly**) a dveří mezi nimi (**hrany**). Hra podle ní ví, kam se z místnosti dostaneš, a nepotřebuje k tomu znát koberce ani pochodně na zdech.

Žádný model není úplný, vždycky je to **volba**. Hitbox moc velký? Hráč umře, i když se ho ostny „nedotkly“. Moc malý? Projde nepřítelem. Vývojáři ladí hitboxy dlouho, protože právě tady hráč cítí, jestli je hra férová.

**Zkus to!** Vyber si hru, kterou hraješ. Jak velký je asi hitbox tvé postavy? Větší, nebo menší než obrázek? Podle čeho to při hraní poznáš?

**Dál ve světě her:** → [Míček, který proletěl pálkou](#svet-hry-over-a-oprav)
