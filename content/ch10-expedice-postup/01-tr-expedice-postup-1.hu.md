---
id: expedice-postup-1-hu
translationOf: expedice-postup-1
lang: hu
type: spine
title: "Első este: Hanoi tornyai"
readingTime: 1
standalone: false
teaser: "Szabályok: a tornyot a bal rúdról a jobbra költözteted át."
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
concept: expedice-postup-1
conceptTitle: "Első este: Hanoi tornyai"
objective: "Szabályok: a tornyot a bal rúdról a jobbra költözteted át."
state: edited
carriers: prose|formula
---

**🧩 Kihívás** · 1. lépés / 5 · [Tizenkét decemberi fejtörő](#expedice-postup-hu)

**Szabályok:** a tornyot a bal rúdról a jobbra költözteted át. Egyszerre mindig csak egy korongot vehetsz el, és **soha nem tehetsz nagyobbat kisebbre**. A középső rúd átmeneti tárolóként szolgál.

Készíts tornyot különböző méretű érmékből vagy papírkorongokból.

1. Legkevesebb hány lépés kell **1, 2 és 3** koronghoz? Írd fel a lépéseket, például „1 → 3”.
2. Hány kell **4** koronghoz? Ne próbálgass vaktában. Nézd meg, hogyan költözött a három korong, és használd kész darabként.
3. Találd meg a szabályt **n** korongra, és **indokold meg**, miért nem megy gyorsabban.

**A siker feltétele:** a számok 1–4 korongra, a képlet és az indoklás egy-két mondatban.

:::reveal 💡 Tipp
Ahhoz, hogy a legnagyobb korongot el tudd mozdítani, az összes kisebbnek máshol kell lennie, mégpedig az egyetlen szabad rúdon. Hány lépésbe kerül odajuttatni őket? És hányba visszatenni őket a legnagyobbra?
:::

Ez a **rekurzió**: a feladatot ugyanannak a feladatnak egy kisebb változatával oldjuk meg. Ez a végsőkig vitt felbontás. A nagy problémát két ugyanolyan fajta kisebb problémára és egy egyszerű lépésre bontjuk.

:::reveal 🔑 Megoldás
1, 3, 7, 15 lépés. Érvényes, hogy T(n) = 2 · T(n − 1) + 1, vagyis $$T(n) = 2^n - 1.$$ Gyorsabban nem megy, mert a legnagyobb korongnak legalább egyszer mozognia kell, és előtte is, utána is az egész kisebb toronynak máshol kell állnia.
:::

**Következő lépés:** [Hétvége: labirintus a Blockly Gamesben](#expedice-postup-2-hu)
