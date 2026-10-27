---
id: svet-socialni-opakovani
type: spine
title: "Nekonečný scroll: smyčka bez konce"
readingTime: 1
standalone: true
teaser: "Kniha má poslední stránku. Seriál má poslední díl. Feed nemá konec. To není náhoda. Je to cyklus, který skončit nemá."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Kdy použiješ „opakuj 10×“ a kdy „opakuj, dokud…“?"
recallA: "Pevný počet, když předem víš kolikrát. „Dokud“, když to záleží na tom, co se stane, třeba dokud robot nenarazí na zeď."
lang: cs
lens: socialni
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: opakovani
state: edited
highlights:
  - "Tělo cyklu a počet opakování"
  - "Opakuj n× vs. opakuj, dokud (podmínka ukončení)"
  - "Konečnost: cyklus musí skončit, jinak se program zacyklí"
carriers: prose|code
---

Kniha má poslední stránku. Seriál má poslední díl. Feed nemá konec. To není náhoda. Je to cyklus, který skončit nemá.

Feed je **cyklus**. Jeho **tělo** má tři kroky: *ukaž video*, *změř, jak dlouho se díváš*, *vyber další*. A znovu. V blocích by to vypadalo takhle:

```
opakuj, dokud uživatel nezavře appku
  ukaž další video
  změř dobu sledování
  podle ní vyber další
```

Programátor má na výběr. **Opakuj n×**, když předem ví kolikrát: *ukaž 10 nových příspěvků přátel a pak napiš „To je vše“*. Tak to sítě dělávaly a tak to dodnes dělají feedy, které mají konec. **Opakuj, dokud…**, když konec záleží na tom, co se stane. U feedu je ta **podmínka ukončení** jediná: zavřeš appku ty.

Cyklus musí jednou **skončit**, jinak se program **zacyklí**. V běžném programu je to chyba: appka zamrzne. U feedu je to **záměr**. Konec, který nepřijde, má udržet tvou pozornost co nejdéle. Stejný trik je **autoplay**: po konci videa se samo spustí další, takže ani nemusíš nic rozhodnout. Rozhodnutí přestat musíš udělat sám, proti cyklu, který je navržený tak, aby běžel dál.

Proto pomáhají zarážky zvenku. Časový limit appky je vlastně podmínka ukončení, kterou do cyklu doplníš sám: *opakuj, dokud neuplyne 30 minut*.

**Zkus to!** Najdi v mobilu nastavení časového limitu pro appku, kterou používáš nejvíc. Jakou podmínku ukončení bys jí dal ty?

**Dál ve světě sociálních sítí:** → [Stáhni si, co o tobě síť ví](#svet-socialni-tabulka-a-evidence)
