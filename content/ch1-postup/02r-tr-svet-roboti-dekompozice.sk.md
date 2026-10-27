---
id: svet-roboti-dekompozice-sk
translationOf: svet-roboti-dekompozice
lang: sk
type: spine
title: "Vozidlo, ktoré sleduje čiaru"
readingTime: 1
standalone: true
teaser: "Robotické vozidlo ide po čiernej čiare na podlahe, aj v zákrutách. Vyzerá to ako jeden chytrý trik. V skutočnosti sú to tri malé úlohy."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Ako rozložíš úlohu „zorganizovať triedny výlet“ a prečo záleží na poradí častí?"
recallA: "Na menšie úlohy: cieľ a rozpočet, miesto, doprava, program, prihlášky. Niektoré závisia od iných: dopravu objednáš až po výbere miesta a počtu ľudí."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: dekompozice
state: edited
highlights:
  - "Zadanie: východiskový stav, cieľ, obmedzenia"
  - "Čiastkové úlohy a ich závislosti (čo musí byť hotové skôr)"
  - "Pomenovaná čiastková úloha je v kóde podprogram"
carriers: prose|image
---

Robotické vozidlo ide po čiernej čiare na podlahe, aj v zákrutách. Vyzerá to ako jeden chytrý trik. V skutočnosti sú to tri malé úlohy.

Najprv **zadanie**. **Východiskový stav**: vozidlo stojí na čiare. **Cieľ**: dôjsť po čiare až na koniec a nezísť z nej. **Obmedzenia**: má len dva svetelné senzory pod sebou a dva motory, nič viac.

![Vozidlo s dvoma senzormi nad čiernou čiarou](images/svet-roboti-cara.sk.svg)

Potom problém rozložíš:

1. **Čítaj senzory**: vidí ľavý čiernu? A pravý?
2. **Rozhodni**: oba vidia bielu → choď rovno. Ľavý vidí čiernu → čiara uhýba doľava, zatoč vľavo. Pravý vidí čiernu → zatoč vpravo.
3. **Ovládaj motory**: zatočiť vľavo znamená spomaliť ľavé koleso a pravé nechať ísť.

A celé to opakuj stále dookola, mnohokrát za sekundu.

Časti od seba **závisia**. Rozhodovať sa nedá, kým nevieš, čo senzor hlási nad čiernou a čo nad bielou. Preto je úplne prvá úloha **kalibrácia**: zmeraj senzor nad čiarou a vedľa nej.

Každú časť pomenuješ ako **podprogram**. V MakeCode je to *funkcia*: `zatoč vľavo`, `zatoč vpravo`, `choď rovno`. Hlavná slučka je potom krátka a čitateľná. A keď vozidlo zatáča príliš prudko, opravuješ len jednu funkciu.

**Vyskúšaj to!** Rozlož robotický vysávač na čiastkové úlohy. Ktoré z nich musia fungovať skôr než ostatné?

**Ďalej vo svete robotov:** → [Svet očami robota](#svet-roboti-abstrakce-a-model-sk)
