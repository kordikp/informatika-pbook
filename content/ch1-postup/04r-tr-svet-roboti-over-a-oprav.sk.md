---
id: svet-roboti-over-a-oprav-sk
translationOf: svet-roboti-over-a-oprav
lang: sk
type: spine
title: "Robot uviaznutý v rohu"
readingTime: 1
standalone: true
teaser: "Vozidlo sa má vyhýbať stenám. Pri rovnej stene to funguje skvele. Potom dôjde do rohu a točí sa tam dookola, kým mu nedôjde batéria."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo nestačí vyskúšať program na jednom príklade, ktorý funguje?"
recallA: "Chyba sa často prejaví len pri niektorých vstupoch, napríklad pri nule alebo prázdnom zozname. Testy majú pokryť rôzne, aj okrajové prípady."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
state: edited
highlights:
  - "Test = vstup + očakávaný výstup, pripravený vopred"
  - "Okrajové prípady (0, prázdny vstup, maximum)"
  - "Ladenie: miesto → príčina → oprava → nové overenie; efektivita ako ďalšie meradlo"
carriers: prose|table
---

Vozidlo sa má vyhýbať stenám. Pri rovnej stene to funguje skvele. Potom dôjde do rohu a točí sa tam dookola, kým mu nedôjde batéria.

Program znie rozumne: *keď je stena bližšie ako 10 cm, otoč sa vpravo*. Pri rovnej stene to stačí. V rohu však robot zatočí vpravo, uvidí ďalšiu stenu, zatočí vpravo… a mieri späť do rohu. Nikto to v rohu nevyskúšal.

Test pre robota je **vstup a očakávaný výstup**, napísaný **vopred**:

| Situácia (vstup) | Čo má robot urobiť |
|---|---|
| rovná stena pred ním | otočiť sa a ísť ďalej |
| roh | vyjsť z rohu |
| úzka chodba | prejsť, nezaseknúť sa |
| senzor hlási 0 cm | zastaviť, necúvať donekonečna |
| senzor nehlási nič | zastaviť a ohlásiť chybu |

Spodné tri riadky sú **okrajové prípady**: roh, nula, prázdno. Tam chyby bývajú najčastejšie.

**Ladenie** má štyri kroky. *Miesto*: pravidlo na otáčanie. *Príčina*: v rohu sa otočí stále rovnakým smerom o rovnaký uhol. *Oprava*: po dvoch otočkách za sebou cúvni a otoč sa o iný uhol. *Nové overenie*: prejdi znova všetky testy, aj rovnú stenu. A **efektivita**: robot, ktorý z rohu vyjde za 2 sekundy, je lepší ako ten, ktorý to zvládne za 20.

**Vyskúšaj to!** Vymysli tri testy pre lampičku, ktorá svieti, keď je tma. Aspoň jeden nech je zákerný. Čo napríklad šero, alebo ruka položená na senzore?

**Ďalej vo svete robotov:** → [Senzor → program → svetlo](#svet-roboti-program-sk)
