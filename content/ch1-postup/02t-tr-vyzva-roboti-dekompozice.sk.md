---
id: vyzva-roboti-dekompozice-sk
translationOf: vyzva-roboti-dekompozice
lang: sk
type: challenge
title: "Vozidielko s dvoma očami"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Vozidielko ide po čiare krásne, kým nepríde ostrá zákruta."
voice: universal
parent: svet-roboti-dekompozice-sk
diagram: null
core: false
status: accepted
concept: dekompozice
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table|code
---

Vozidielko ide po čiare krásne, kým nepríde ostrá zákruta. Potom čiara zmizne obom senzorom a vozidielko veselo ide rovno preč zo stola.

<!-- task -->

Vozidielko má vpredu dva senzory čiary, **L** (ľavý) a **P** (pravý). Každý hlási 1, keď vidí čiernu čiaru, a 0, keď vidí biely papier. Čiara je taká široká, že na rovinke ju vidia oba. Vozidielko má dva motory, **ML** (ľavý) a **MP** (pravý). Keď beží len pravý motor, vozidielko zatáča doľava.

1. Vyplň tabuľku pre kombinácie L a P: ktorý motor beží (1) a ktorý stojí (0)? Riadok L = 0, P = 0 zatiaľ nechaj prázdny.
2. Nájdi v tabuľke pravidlo, ktoré sa dá napísať **bez jediného keď**: ML je stále rovnaké ako jeden senzor a MP ako druhý.
3. Teraz riadok 0 a 0: čiara zmizla. Navrhni, čo si má vozidielko pamätať a ako sa podľa toho rozhodne, aby sa v ostrej zákrute k čiare vrátilo. Zapíš to ako pravidlá *keď… tak…*.

**Úspech:** tabuľka, pravidlo z bodu 2 a pravidlá pre stratenú čiaru, ktoré obstoja v dvoch testoch: ostrá zákruta doľava a ostrá zákruta doprava.

<!-- hint -->

Keď vidí čiaru len ľavý senzor, čiara uteká doľava. Kam musí vozidielko zatočiť a ktorý motor na to musí stáť?

<!-- hint -->

Pozri sa na stĺpce tabuľky: ML má v každom riadku rovnakú hodnotu ako jeden zo senzorov. Senzory a motory sú „prekrížené“.

<!-- hint -->

Keď čiara zmizne, senzory už nič nevedia. Vie to len minulosť: ktorý senzor videl čiaru ako posledný? Na to stačí jedna premenná.

<!-- solution -->

| L | P | ML | MP | čo robí |
|---|---|---|---|---|
| 1 | 1 | 1 | 1 | ide rovno |
| 1 | 0 | 0 | 1 | zatáča doľava |
| 0 | 1 | 1 | 0 | zatáča doprava |
| 0 | 0 | ? | ? | čiara zmizla |

Pravidlo bez *keď*: **ML = P a MP = L**. Pravý senzor riadi ľavý motor a naopak. Takému zapojeniu sa hovorí Braitenbergovo vozidielko a funguje aj ako dva prekrížené drôty.

Stratená čiara: premenná `naposledy` si pamätá, ktorý senzor videl čiaru ako jediný naposledy.

```
keď L == 1 a P == 0: naposledy = vľavo
keď L == 0 a P == 1: naposledy = vpravo
keď L == 0 a P == 0:
    keď naposledy == vľavo: ML = 0, MP = 1
    inak: ML = 1, MP = 0
```

V ostrej zákrute doľava vidí čiaru ako posledný ľavý senzor, takže sa vozidielko točí doľava, kým ju znova nenájde. Doprava naopak. Veľká úloha sa rozpadla na tri menšie: **vidieť, rozhodnúť, pamätať si**.

<!-- more -->

Tabuľku si postav z logických hradiel v hre navyše „Mozog vozidielka z hradiel“. Súťažné roboty nečítajú len 0 a 1, ale odtieň šedej, a zatáčajú tým viac, čím ďalej je čiara od stredu. Tomu sa hovorí proporcionálne riadenie. Kto chce s robotom na čiaru súťažiť, môže s partiou kamarátov na [Robosoutěž ČVUT](https://robosoutez.fel.cvut.cz) pre 2. stupeň ZŠ, stavebnicu požičajú organizátori.
