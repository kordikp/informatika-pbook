---
id: expedice-aplikace-3-sk
translationOf: expedice-aplikace-3
lang: sk
type: spine
title: "Koľko ľudí stačí na test"
readingTime: 1
standalone: false
teaser: "Test použiteľnosti znamená, že niekto, kto apku nepozná, dostane úlohu (napríklad „zapíš výdavok 150 Kč za autobus“) a ty len mlčky sleduješ, kde zaváha."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-aplikace-3
conceptTitle: "Koľko ľudí stačí na test"
objective: "Test použiteľnosti znamená, že niekto, kto apku nepozná, dostane úlohu (napríklad „zapíš výdavok 150 Kč za autobus“) a ty len mlčky sleduješ, kde zaváha."
state: edited
carriers: prose|formula
---

**🧩 Výzva** · krok 3 z 5 · [Appathon za jeden víkend](#expedice-aplikace-sk)

**Test použiteľnosti** znamená, že niekto, kto apku nepozná, dostane úlohu (napríklad „zapíš výdavok 150 Kč za autobus“) a ty len mlčky sleduješ, kde zaváha. Neradíš, neukazuješ, len zapisuješ.

Výskumník Jakob Nielsen porovnal desiatky takých testov. Zistil, že jeden tester v priemere narazí na 31 % problémov apky. Ďalší testeri potom väčšinou narážajú na rovnaké problémy ako tí prví, len občas na nový. Podiel nájdených problémov po n testeroch je zhruba

$$P(n) = 1 - (1 - 0{,}31)^n$$

1. Spočítaj P(1), P(3), P(5), P(10) a P(15). Stačí kalkulačka v mobile.
2. O koľko percent viac problémov nájde desiaty tester než deviaty? Prečo tak málo?
3. Máš 15 testerov. Je lepší jeden veľký test s pätnástimi ľuďmi, alebo tri kolá po piatich, keď medzi kolami chyby opravíš? Zdôvodni to číslami aj zdravým sedliackym rozumom.
4. Kedy vzorec prestáva platiť? Nájdi aspoň dve situácie. Nápoveda: kto sú tvoji testeri a sú si podobní?

**Úspech:** máš tabuľku piatich hodnôt, rozhodnutie pre bod 3 a dve skutočné hranice vzorca. Potom urob prvé kolo testu s tromi ľuďmi z krúžku a zapíš každé zaváhanie.

:::reveal 🔑 Riešenie
P(1) = 31 %, P(3) ≈ 67 %, P(5) ≈ 84 %, P(10) ≈ 98 %, P(15) ≈ 99,6 %. Desiaty tester pridá len asi 1 %, lebo väčšinu problémov videli tí pred ním. Tri kolá po piatich vyhrávajú: po oprave testuješ novú verziu a nájdeš aj chyby, ktoré oprava pridala, aj tie, ktoré boli schované za prvými. Vzorec nesedí, keď sú testeri príliš podobní (samí kamaráti z krúžku) alebo keď apku používajú rôzne skupiny (vedúci a deti). Vtedy testuj päť ľudí z každej skupiny. Ema má pravdu, ale len napoly.
:::

**Ďalší krok:** [Nájdi svoj appathon](#expedice-aplikace-4-sk)
