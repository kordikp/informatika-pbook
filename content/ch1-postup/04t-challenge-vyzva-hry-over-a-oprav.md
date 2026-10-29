---
id: vyzva-hry-over-a-oprav
type: challenge
title: "Kolik mezikroků potřebuje rychlý míček"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Víš, proč rychlý míček proletí pálkou."
voice: universal
parent: svet-hry-over-a-oprav
diagram: null
core: false
lang: cs
status: accepted
concept: over-a-oprav
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Víš, proč rychlý míček proletí pálkou. Teď to spočítáš přesně: od jaké rychlosti hra selže a jak málo práce stačí, aby už neselhala nikdy.

<!-- task -->

Míček je čtverec široký 8 px a letí vodorovně. Pálka je široká 10 px. Hra jednou za snímek posune míček o `v` pixelů a pak zkontroluje, jestli se míček s pálkou překrývá. **Dotyk hranou se počítá jako zásah.**

1. Jaká je největší rychlost `v` (px za snímek), při které míček pálkou **nikdy** neproletí, ať startuje odkudkoli?
2. Míček letí 40 px za snímek. Hra může pohyb rozdělit na `k` stejných mezikroků a kontrolovat po každém z nich. Jaké nejmenší `k` stačí?
3. Napiš test (vstup a očekávaný výstup), který s jednou kontrolou za snímek selže a s mezikroky projde. Pálka zabírá x od 20 do 30, levý okraj míčku startuje na x = 0 a míček letí 40 px za snímek.

**Kritérium úspěchu:** číslo v bodě 1 se zdůvodněním, nejmenší `k` a test, ve kterém vypíšeš polohy míčku po každé kontrole.

<!-- hint -->

Míček se s pálkou překrývá, když jeho levý okraj x leží mezi 20 − 8 = 12 a 30. Jak dlouhý je tenhle úsek?

<!-- hint -->

Když je krok delší než ten úsek, míček ho může přeskočit. Když je kratší nebo stejně dlouhý, aspoň jedna poloha do něj padne.

<!-- hint -->

Pro bod 2: každý mezikrok smí být nejvýš tak dlouhý jako výsledek z bodu 1.

<!-- solution -->

1. Překrytí nastane, když levý okraj míčku leží od 12 do 30 včetně. To je úsek dlouhý **18 px** (šířka pálky + šířka míčku). Krok do 18 px ho nemůže přeskočit, takže bezpečná rychlost je **v ≤ 18 px za snímek**.
2. 40 / 18 ≈ 2,2, takže **k = 3**. Mezikrok je 40 / 3 ≈ 13,3 px, což je méně než 18. Dva mezikroky po 20 px nestačí, protože 20 > 18.
3. Bez mezikroků: x = 0, pak x = 40. Ani jedna poloha neleží v úseku 12 až 30, **míček proletí**. S mezikroky: x = 0; 13,3; 26,7; 40. Poloha 13,3 leží v úseku, **míček se odrazí**. Test: *start 0, rychlost 40, pálka 20 až 30 → očekávám odraz.*

Mezikroky ale stojí výkon. Kulka letící 2000 px za snímek by jich potřebovala přes sto. Proto se u střel používá **paprsek**: hra spočítá, jestli úsečka mezi starou a novou polohou protne obdélník cíle.

<!-- more -->

Fyzikální těleso v Godotu (RigidBody2D) má volbu *Continuous CD*, spojitou detekci kolizí, která dělá právě tohle. Postav rychlou střelu, volbu zapni a vypni a porovnej. Ještě dál: odvoď, ve kterém zlomku kroku míček vstoupí do pásu mezi x = 12 a x = 30. Z toho přesně spočítáš místo odrazu, ne jen to, že k němu došlo.
