---
id: svet-hry-rozhodovani
type: spine
title: "Když se dotkne mince"
readingTime: 1
standalone: true
teaser: "Postava skočí, jen když stojí na zemi. Ve vzduchu mezerník nedělá nic. Za tím je jediná otázka s odpovědí ano, nebo ne."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co se stane s větví „jinak“, když podmínka platí?"
recallA: "Nevykoná se. Z větví když / jinak proběhne vždy právě jedna."
lang: cs
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
  - "Podmínka má hodnotu pravda, nebo nepravda"
  - "Když–jinak: provede se právě jedna větev"
  - "Skládání podmínek (a, nebo, ne)"
carriers: prose|code
---

Postava skočí, jen když stojí na zemi. Ve vzduchu mezerník nedělá nic. Za tím je jediná otázka s odpovědí ano, nebo ne.

Každé pravidlo hry je **podmínka**: otázka, na kterou je odpověď **pravda**, nebo **nepravda**. *Dotýká se hráč mince?* Pravda → přičti bod a minci schovej. Nepravda → nic.

```
když ⟨dotýká se [mince]⟩ tak
  změň [skóre] o 1
  skryj minci
```

**Když–jinak** má dvě větve a proběhne **vždy právě jedna**: *když je skóre větší než rekord → ulož nový rekord, jinak → ukaž „Zkus to znovu“.* Hráč nikdy neuvidí obojí.

Hry podmínky rády **skládají**:

- **a**: skoč, když je stisknutý mezerník **a** postava stojí na zemi. Platit musí obě části. Bez té druhé by postava skákala ve vzduchu do nebe.
- **nebo**: ztrať život, když se dotkneš ostnu **nebo** lávy. Stačí jedno.
- **ne**: dveře se otevřou, když hráč **ne**má klíč? Přečti si pravidlo nahlas a hned uslyšíš, že je naopak.

Kolize je taky podmínka. Hra se v každém kole smyčky ptá *překrývají se?* a podle odpovědi vybere větev.

**Zkus to!** Napiš pravidlo pro dveře, které se otevřou, jen když hráč má klíč a stojí přímo u nich. Které spojení použiješ: a, nebo, ne?

**Dál ve světě her:** → [Skóre, životy, level](#svet-hry-promenna)
