---
id: svet-hry-rozhodovani-sk
translationOf: svet-hry-rozhodovani
lang: sk
type: spine
title: "Keď sa dotkne mince"
readingTime: 1
standalone: true
teaser: "Postava skočí, len keď stojí na zemi. Vo vzduchu medzerník nerobí nič. Za tým je jediná otázka s odpoveďou áno, alebo nie."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Čo sa stane s vetvou „inak“, keď podmienka platí?"
recallA: "Nevykoná sa. Z vetiev ak / inak prebehne vždy práve jedna."
lens: hry
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: rozhodovani
state: edited
highlights:
  - "Podmienka má hodnotu pravda, alebo nepravda"
  - "Ak–inak: vykoná sa práve jedna vetva"
  - "Skladanie podmienok (a, alebo, nie)"
carriers: prose|code
---

Postava skočí, len keď stojí na zemi. Vo vzduchu medzerník nerobí nič. Za tým je jediná otázka s odpoveďou áno, alebo nie.

Každé pravidlo hry je **podmienka**: otázka, na ktorú je odpoveď **pravda**, alebo **nepravda**. *Dotýka sa hráč mince?* Pravda → pripočítaj bod a mincu schovaj. Nepravda → nič.

```
ak ⟨dotýka sa [minca]⟩ potom
  zmeň [skóre] o 1
  skry mincu
```

**Ak–inak** má dve vetvy a prebehne **vždy práve jedna**: *ak je skóre väčšie ako rekord → ulož nový rekord, inak → ukáž „Skús to znova“.* Hráč nikdy neuvidí oboje.

Hry podmienky rady **skladajú**:

- **a**: skoč, keď je stlačený medzerník **a** postava stojí na zemi. Platiť musia obe časti. Bez tej druhej by postava skákala vo vzduchu do neba.
- **alebo**: strať život, keď sa dotkneš ostňa **alebo** lávy. Stačí jedno.
- **nie**: dvere sa otvoria, keď hráč **ne**má kľúč? Prečítaj si pravidlo nahlas a hneď počuješ, že je naopak.

Kolízia je tiež podmienka. Hra sa v každom kole slučky pýta *prekrývajú sa?* a podľa odpovede vyberie vetvu.

**Vyskúšaj to!** Napíš pravidlo pre dvere, ktoré sa otvoria, len keď hráč má kľúč a stojí priamo pri nich. Ktoré spojenie použiješ: a, alebo, nie?

**Ďalej vo svete hier:** → [Skóre, životy, level](#svet-hry-promenna-sk)
