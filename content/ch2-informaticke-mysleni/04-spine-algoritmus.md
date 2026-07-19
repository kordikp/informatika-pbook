---
id: ch2-algoritmus
type: spine
title: "Algoritmus: přesný návod"
readingTime: 3
standalone: true
teaser: "„Dej tam trochu mouky a peč, až to bude dobré." Pro člověka recept, pro počítač katastrofa."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Čím se vyznačuje dobrý algoritmus?"
recallA: "Je to jednoznačný postup krok za krokem: každý krok je proveditelný a kdokoli (i počítač) podle něj dojde ke stejnému výsledku."
highlights:
  - "Algoritmus je přesný návod krok za krokem, jak něco vyřešit."
  - "Dobrý algoritmus je jednoznačný — kdokoli podle něj dojde ke stejnému výsledku."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch2-algoritmus
state: core
carriers: prose
---

Babiččin recept říká: „přidej mouky, kolik těsto pobere, a peč dozlatova." Babičce to funguje. Tobě možná taky — doplníš zkušenost a odhad. Ale zkus tenhle recept nadiktovat stroji, který žádný odhad nemá. Kolik je „kolik pobere"? Jaká barva je „dozlatova"? Stroj se zasekne u první věty.

**Algoritmus je přesný návod krok za krokem, jak něco vyřešit.** Recept, postup skládání nábytku, origami návod — to všechno jsou algoritmy pro lidi. Informatika k nim přidává jednu tvrdou podmínku:

**Dobrý algoritmus je jednoznačný — kdokoli podle něj dojde ke stejnému výsledku.** Žádné „trochu", „chvíli", „až to bude dobré". Každý krok musí být proveditelný bez domýšlení: „přidej 250 g mouky", „peč 25 minut na 180 °C". Člověk si mezery domyslí; počítač ne. Počítač udělá **přesně** to, co je napsané — nic víc, nic míň. To není jeho hloupost, to je jeho vlastnost: díky ní dává stejný výsledek napodesáté i napomilionté.

Jak se takový algoritmus staví? Přesně tak, jak už umíš: **dekompozicí** rozložíš úlohu na kroky, **vzory** ti řeknou, co se opakuje, a pak kroky seřadíš a zapíšeš jednoznačně. Zkus si to na něčem obyčejném — třeba „najdi největší číslo v seznamu":

1. Zapamatuj si první číslo jako zatím největší.
2. Vezmi další číslo v seznamu.
3. Když je větší než zapamatované, zapamatuj si místo něj tohle.
4. Opakuj kroky 2–3, dokud jsou v seznamu čísla.
5. Zapamatované číslo je největší. Hotovo.

Podle tohohle postupu dojde ke stejnému výsledku tvůj spolužák, učitel i počítač. To je celé kouzlo.

**Zkus to!** Napiš algoritmus „uvař čaj" a dej ho kamarádovi s pokynem: dělej PŘESNĚ, co je psáno, nic si nedomýšlej. Uvidíš, kolik kroků ti chybí („vlož sáček" — do čeho? „zalij vodou" — studenou?). Pak návod oprav. Právě jsi zažil ladění.

> **Věděl/a jsi?** Slovo algoritmus vzniklo ze jména perského učence al-Chwárizmího, který v 9. století sepsal postupy pro počítání. Algoritmy jsou tedy o tisíc let starší než počítače.

Slovo „algoritmus" znáš i odjinud — „algoritmus TikToku" rozhoduje, co uvidíš. I to je postup krok za krokem, jen hodně složitý; víc v kapitole o digitálním občanství. Teď ale poslední stavební kámen: jak řídit pořadí kroků.
