---
id: expedice-stroje-a-site-3-hu
translationOf: expedice-stroje-a-site-3
lang: hu
type: spine
title: "Elemzés: merre utazik a csomag az óceánon át"
readingTime: 1
standalone: false
teaser: "Így nézhetne ki az út kimenete Prágából egy washingtoni szerverig (egyszerűsítve): | Ugrás | Idő | Router | |---|---|---| | 1 | 1 ms | 192.168.1.1 (otthoni rou…"
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
concept: expedice-stroje-a-site-3
conceptTitle: "Elemzés: merre utazik a csomag az óceánon át"
objective: "Így nézhetne ki az út kimenete Prágából egy washingtoni szerverig (egyszerűsítve): | Ugrás | Idő | Router | |---|---|---| | 1 | 1 ms | 192.168.1.1 (otthoni rou…"
state: edited
carriers: prose|table
---

**🔍 Elemzés** · 3. lépés / 5 · [Internet a hétvégi házban](#expedice-stroje-a-site-hu)

Így nézhetne ki az út kimenete Prágából egy washingtoni szerverig (egyszerűsítve):

| Ugrás | Idő | Router |
|---|---|---|
| 1 | 1 ms | 192.168.1.1 (otthoni router) |
| 2 | 8 ms | a szolgáltató routere |
| 3 | 9 ms | prágai csomópont |
| 4 | 17 ms | Frankfurt |
| 5 | * * * | (nincs válasz) |
| 6 | 24 ms | London |
| 7 | 98 ms | New York |
| 8 | 96 ms | Washington |
| 9 | 99 ms | célszerver |

Az idők a teljes pinget mutatják: oda és vissza.

**Elemezd a kimenetet:**

1. Melyik ugrások között repülte át a csomag az Atlanti-óceánt? Hány kilométer szálnak felel meg ennek az ugrásnak az ideje, ha 1 ms ping kb. 100 km kábel?
2. Az 5. ugrás nem adott vissza semmit. Megszakadt az út? Honnan tudod meg a következő sorokból?
3. A 8. ugrás gyorsabb, mint a 7., pedig messzebb van. Hogyan lehetséges ez?
4. Miért 192.168-cal kezdődik az első sor címe? Látja ezt valaki az interneten?

:::reveal 🔑 Megoldás
1. A 6. és a 7. között: 74 ms, vagyis kb. 7 400 km szál. Londonból New Yorkba légvonalban kb. 5 600 km, a kábel hosszabb.
2. Nem, a további ugrások válaszolnak. Ez a router csak nem válaszol az ilyen fajta kérdésre.
3. Minden router akkor válaszol a traceroute-nak, amikor ideje van rá. A router válaszát mérjük, nem közvetlenül az utat.
4. Ez az otthoni hálózat magáncíme. Az otthoni router az interneten elrejti a saját nyilvános címe mögé.
:::

**Következő lépés:** [Csapat: a kódod az űrállomáson](#expedice-stroje-a-site-4-hu)
