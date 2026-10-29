---
id: expedice-tvorba-1-hu
translationOf: expedice-tvorba-1
lang: hu
type: spine
title: "A csillag, amely bezárul"
readingTime: 2
standalone: false
teaser: "A könyvben a teknős az ismételd n [előre 100 jobbra szög] paranccsal rajzol csillagot."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-tvorba-1
conceptTitle: "A csillag, amely bezárul"
objective: "A könyvben a teknős az ismételd n [előre 100 jobbra szög] paranccsal rajzol csillagot."
state: edited
carriers: prose
---

**🧩 Kihívás** · 1. lépés / 5 · [Főcím a filmestre](#expedice-tvorba-hu)

A könyvben a teknős az `ismételd n [előre 100 jobbra szög]` paranccsal rajzol csillagot. Az **n** ágú csillag, amelynél a teknős **k**-szor kerüli meg a középpontot, szöge **360 · k : n**. Ötágú csillag: n = 5, k = 2, a szög 144°. Ha k = 1, egyszerű sokszög lesz belőle.

**Feladatok:**
1. n = 7 esetén próbáld ki az összes k-t 1-től 6-ig. Hány **különböző** alakzatot kapsz? Miért nem hatot?
2. n = 6 és k = 2 esetén valami furcsa történik. Mit rajzol pontosan a teknős, és miért?
3. Találd meg a szabályt: mikor rajzolja meg a teknős egy vonallal mind az n ágat, és mikor ér vissza hamarabb a kiindulópontba?
4. Tervezz egy 12 ágú, egy vonallal rajzolt logót, amilyen hegyeset csak lehet. Írd meg a programot.

**A siker feltétele:** helyes alakzatszám n = 7-re indoklással, az n = 6 eset magyarázata, általános szabály, amely bármely n-re és k-ra igaz, és működő program 12 ágra.

:::reveal 💡 Tipp a 3. ponthoz
Próbáld táblázatba írni azokat az eseteket, amelyek elromlanak (n, k, hány ág jött létre valójában). Mi a közös a számokban ezekben a sorokban? Segít „A teknős rajzol: csillagok, virágok és rozetták” játék is.
:::

:::reveal 🔑 Megoldás
1. n = 7 esetén a k = 1–6 csak **három** különböző alakzatot ad: hétszöget (k = 1 vagy 6), lapos csillagot (k = 2 vagy 5) és hegyes csillagot (k = 3 vagy 4). A k és az n − k pár ugyanaz az alakzat, csak ellenkező irányban rajzolva.
2. n = 6, k = 2 esetén a szög 120°: a teknős háromszöget rajzol, három lépés után visszaér, és másodszor is körberajzolja. Hat ág nem jön létre.
3. Mind az n ág pontosan akkor jön létre egy vonallal, ha **n-nek és k-nak nincs 1-en kívül közös osztója**.
4. 12 ágra ezt a k = 5 teljesíti (a szög 150°), a hegyes csillagot az `ismételd 12 [előre 100 jobbra 150]` rajzolja meg. Kész is az est logója.
:::

**Következő lépés:** [Háttér kódból 30 perc alatt](#expedice-tvorba-2-hu)
