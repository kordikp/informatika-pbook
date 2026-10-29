---
id: expedice-hry-1-hu
translationOf: expedice-hry-1
lang: hu
type: spine
title: "⭐ Véletlen, amely tisztességesen játszik"
readingTime: 1
standalone: false
teaser: "A számítógépnek nincs dobókockája."
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
concept: expedice-hry-1
conceptTitle: "⭐ Véletlen, amely tisztességesen játszik"
objective: "A számítógépnek nincs dobókockája."
state: edited
carriers: prose|formula
---

**🧩 Kihívás** · 1. lépés / 5 · [A hétvége, amikor megszületett egy játék](#expedice-hry-hu)

A számítógépnek nincs dobókockája. A „véletlen” számokat egy képlettel számolja ki az előző számból. Az első szám neve **mag** (angolul *seed*). Ugyanaz a mag mindig ugyanazt a sorozatot adja, és ezért ugyanazt a pályát.

A játékotok ezt a képletet használja:

$$n_{következő} = (5 \cdot n + 3) \bmod 16$$

A „mod 16” a tizenhattal való osztás maradékát jelenti. A platformok közötti rés `40 + 5 × n` pixel, és a figura legfeljebb 100 px-t tud átugrani.

1. Számold ki az első öt számot a 7-es maghoz.
2. Számolj tovább. Hány szám után kezd ismétlődni a sorozat? Megjelenik benne az összes szám 0-tól 15-ig?
3. Melyik számok hoznak létre átugorhatatlan rést? Hány ilyen rés van a sorozat egy teljes körében?
4. Módosítsd a rés képletét úgy, hogy a rés mindig 40 és 100 px között legyen, és minden szám más rést adjon.
5. Ema talált egy átjárhatatlan rést. Miért jobb a mag a hibakereséshez, mint a valódi véletlen?

**Sikerkritérium:** a teljes sorozat az ismétlődésig, a rossz számok listája, a javított képlet, amelynél ellenőrzöd a legkisebb és a legnagyobb rést is, és egy mondat az 5. ponthoz.

**Ellenőrzés:** az első szám 6.

**Menj még tovább:** a Tetris nem egyenként sorsolja az elemeket. Mind a hét alakzatot megkeveri, mint egy pakli kártyát, kiosztja őket, aztán újra kever. Számold ki, legfeljebb hány húzást kell várnod ugyanarra az alakzatra. Tisztán véletlen sorsolásnál akármeddig várhatsz rá. Miért tisztességes a pakli?

**Következő lépés:** [🛠️ Első játék Godotban 30 perc alatt](#expedice-hry-2-hu)
