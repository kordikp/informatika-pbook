---
id: vyzva-data-z-dat-informace-hu
translationOf: vyzva-data-z-dat-informace
lang: hu
type: challenge
title: "Minden pályán jobb, összesítve rosszabb"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "A ranglista szerint A játékos a meccsek 67 %-át nyeri, B játékos csak 35 %-ot."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: z-dat-informace
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

A ranglista szerint A játékos a meccsek 67 %-át nyeri, B játékos csak 35 %-ot. Világos. Csakhogy ha az egyes pályákat nézed, B **mindkettőn** jobb. Hogy lehet ez?

<!-- task -->

A játéknak két pályája van: egy könnyű és egy nehéz. A statisztikák:

| | könnyű pálya | nehéz pálya |
|---|---|---|
| A játékos | 90 győzelem 100-ból | 10 győzelem 50-ből |
| B játékos | 19 győzelem 20-ból | 30 győzelem 120-ból |

1. Számold ki mindkét játékos sikerességét külön mindkét pályán és összesítve.
2. Magyarázd el egy-két mondatban, hogyan lehet B mindkét pályán jobb, és mégis összesítve rosszabb. Mi az a **rejtett harmadik dolog**?
3. Javasolj **igazságos összehasonlítást**, és számold ki.
4. Találj ki **saját** adatokat (például két osztály, amelyek könnyű és nehéz dolgozatot írnak), ahol ugyanez a fordulat történik. **Feltétel:** az egyik csoport mindkét kategóriában jobb, összesítve mégis rosszabb.

<!-- hint -->

Sikeresség = győzelmek / meccsek. Az összesítettet az összegekből számold, ne két százalék átlagaként.

<!-- hint -->

Nézd meg, ki hány meccset játszott melyik pályán. Ki játszik főleg a nehéz pályán?

<!-- hint -->

Az az igazságos, ha a két játékost azonos pályaarány mellett hasonlítod össze, például fele-fele arányban.

<!-- solution -->

**1.** A: könnyű 90 %, nehéz 20 %, összesen 100/150 = **66,7 %**. B: könnyű 95 %, nehéz 25 %, összesen 49/140 = **35 %**.

**2.** B főleg a **nehéz pályán** játszik (140 meccsből 120), A főleg a könnyűn. Az összesített százalék így nem az ügyességet méri, hanem főleg azt, **ki melyik pályán játszik**. Ezt hívják **Simpson-paradoxonnak**: a rejtett harmadik dolog (a pálya) megfordítja az eredményt, amikor a csoportokat összeadod.

**3.** Azonos, 50 : 50 arány mellett: A = (90 + 20) / 2 = **55 %**, B = (95 + 25) / 2 = **60 %**. B a jobb játékos.

**4.** Példa: az X osztályban a könnyű dolgozatot 10 gyerekből 9 írja meg sikeresen (90 %), a nehezet 20-ból 6 (30 %), összesen 15/30 = 50 %. Az Y osztályban a könnyűt 20-ból 16 (80 %), a nehezet 10-ből 2 (20 %), összesen 18/30 = 60 %. X mindkét dolgozatban jobb, Y összesítve. Minden adat jó, ami teljesíti a feltételt.

Ugyanez a fordulat a valóságban is megtörtént az orvostudományban (vesekő kezelése) és az egyetemi felvételiknél is.

<!-- more -->

Nyisd meg a [CODAP](https://codap.concord.org/) alkalmazást, vidd be az adataidat, és készíts sikerességi grafikont pályák szerint bontva. Aztán próbáld ki bontás nélkül. Melyik állja meg a helyét egy becsületes ranglistán? És nézd meg a [Spurious Correlations](https://www.tylervigen.com/spurious-correlations) oldalt: keress egy párt, ahol az összefüggés mögött valószínűleg egy harmadik dolog áll, nem a véletlen.
