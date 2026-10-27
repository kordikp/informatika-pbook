---
id: svet-roboti-over-a-oprav
type: spine
title: "Robot uvízlý v rohu"
readingTime: 1
standalone: true
teaser: "Vozítko se má vyhýbat zdem. U rovné zdi to funguje skvěle. Pak dojede do rohu a točí se tam dokola, dokud mu nedojde baterie."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč nestačí vyzkoušet program na jednom příkladu, který funguje?"
recallA: "Chyba se často projeví jen u některých vstupů, třeba u nuly nebo prázdného seznamu. Testy mají pokrýt různé, i okrajové případy."
lang: cs
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
  - "Test = vstup + očekávaný výstup, připravený předem"
  - "Okrajové případy (0, prázdný vstup, maximum)"
  - "Ladění: místo → příčina → oprava → nové ověření; efektivita jako další měřítko"
carriers: prose|table
---

Vozítko se má vyhýbat zdem. U rovné zdi to funguje skvěle. Pak dojede do rohu a točí se tam dokola, dokud mu nedojde baterie.

Program zní rozumně: *když je zeď blíž než 10 cm, otoč se vpravo*. U rovné zdi to stačí. V rohu ale robot zatočí vpravo, uvidí další zeď, zatočí vpravo… a míří zpátky do rohu. Nikdo to v rohu nevyzkoušel.

Test pro robota je **vstup a očekávaný výstup**, napsaný **předem**:

| Situace (vstup) | Co má robot udělat |
|---|---|
| rovná zeď před ním | otočit se a jet dál |
| roh | vyjet z rohu |
| úzká chodba | projet, nezaseknout se |
| senzor hlásí 0 cm | zastavit, necouvat donekonečna |
| senzor nehlásí nic | zastavit a ohlásit chybu |

Spodní tři řádky jsou **okrajové případy**: roh, nula, prázdno. Tam chyby bydlí nejčastěji.

**Ladění** má čtyři kroky. *Místo*: pravidlo pro otáčení. *Příčina*: v rohu se otočí pořád stejným směrem o stejný úhel. *Oprava*: po dvou otočkách za sebou couvni a otoč se o jiný úhel. *Nové ověření*: projeď znovu všechny testy, i rovnou zeď. A **efektivita**: robot, který z rohu vyjede za 2 sekundy, je lepší než ten, který to zvládne za 20.

**Zkus to!** Vymysli tři testy pro lampičku, která svítí, když je tma. Aspoň jeden ať je záludný. Co třeba šero, nebo ruka položená na senzoru?

**Dál ve světě robotů:** → [Senzor → program → světlo](#svet-roboti-program)
