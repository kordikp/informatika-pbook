---
id: vyzva-ai-doporucovac-hu
translationOf: vyzva-ai-doporucovac
lang: hu
type: challenge
title: "Ajánlj úgy, mint egy közösségi oldal, és találd meg a videót, amelyet senki sem fog látni"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "A könyvben a hírfolyam aszerint ajánl, amit nézel."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: doporucovac
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

A könyvben a hírfolyam aszerint ajánl, amit nézel. A nagy oldalak azt is figyelik, kik hasonlítanak rád. Ezt most kézzel, lépésről lépésre kiszámolod, és rábukkansz egy videóra, amelyet ez az algoritmus soha senkinek nem mutat meg.

<!-- task -->

Ki mit nézett végig (✓):

| | V1 Minecraft-építés | V2 Focis trükkök | V3 Gitár kezdőknek | V4 Rakétás kísérlet | V5 Speedrun | V6 Új videó (egy órája feltöltve) |
|---|---|---|---|---|---|---|
| **te** | ✓ | | | ✓ | ✓ | |
| A | ✓ | ✓ | | | ✓ | |
| B | | | ✓ | ✓ | | |
| C | ✓ | | ✓ | ✓ | ✓ | |
| D | | ✓ | ✓ | | | |

A **hasonló felhasználók** szabálya: a hasonlóság valakivel = azoknak a videóknak a száma, amelyeket mindketten végignéztetek. Egy még nem látott videó pontszáma mindazok hasonlóságának összege, akik végignézték.

1. Számold ki a hasonlóságodat A-val, B-vel, C-vel és D-vel.
2. Számold ki V2, V3 és V6 pontszámát. Melyik két videót ajánlja neked az oldal, és milyen sorrendben?
3. V6-ot egy osztálytársad töltötte fel egy órája. Miért nem ajánlja ez a szabály soha senkinek, még ha nagyszerű is? Javasolj módosítást. **Feltétel:** a módosítás a nulla megtekintésű videónak is adjon esélyt, és a hírfolyam nagy része maradjon hasonlóság szerinti.

<!-- hint -->

C felhasználóval közös videóid a V1, V4 és V5, így a hasonlóság 3.

<!-- hint -->

V3-at B, C és D is végignézte. Add össze a veled való hasonlóságukat.

<!-- hint -->

Hányan nézték végig V6-ot? És hogyan nézhetné végig bárki, ha senkinek sem jelenik meg?

<!-- solution -->

**1.** A: 2 (V1, V5). B: 1 (V4). C: 3 (V1, V4, V5). D: 0.

**2.** V3: B 1 + C 3 + D 0 = **4**. V2: A 2 + D 0 = **2**. V6: **0**. Ajánlás: előbb V3 (gitár), aztán V2 (foci). Figyeld meg: gitárra egyetlen keresésedben sem kerestél rá. Az oldal csak azért kínálja fel, mert a hasonló ízlésű emberek szeretik.

**3.** V6-ot senki sem nézte végig, így minden felhasználónál 0 a pontszáma. Ha senkinek sem jelenik meg, senki sem nézi végig, és a pontszám örökre 0 marad. Ez a **hidegindítás** és egyben visszacsatolási hurok. A jó módosítás teljesíti a feltételt, például: „A hírfolyam minden 5. helyére egy véletlen, egy napnál fiatalabb videó kerül.” Vagy: „Az új videó kezdetben egy átlagos videó pontszámát kapja, amíg össze nem gyűjti az első 50 megtekintést.” Mindkettő működik nulla megtekintéssel, és 5 helyből 4 hasonlóság szerinti marad.

<!-- more -->

C felhasználó szinte mindent végignéz, ezért mindenkihez hasonlónak tűnik. Próbálj ki egy igazságosabb mércét: a közös videók száma osztva azoknak a videóknak a számával, amelyeket legalább egyikőtök végignézett. Változik a sorrend? A „mutass biztosat, vagy próbálj ki valami újat” dilemmának az informatikában neve van: **felfedezés vagy kiaknázás** (angolul explore vs. exploit). Találd ki, a hírfolyam hány százaléka jusson a felfedezésre a javaslatodban, és indokold meg. Miért hoz ez pénzt az oldalnak, és miért jó neked?
