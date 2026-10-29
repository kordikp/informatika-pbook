---
id: expedice-data-1-hu
translationOf: expedice-data-1
lang: hu
type: spine
title: "Öt nap nem elég"
readingTime: 1
standalone: false
teaser: "Ema felírta a busz késését percben és az időjárást: | nap | késés | időjárás | |---|---|---| | 1 | 1 | száraz | | 2 | 0 | száraz | | 3 | 2 | eső | | 4 | 2 | sz…"
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
concept: expedice-data-1
conceptTitle: "Öt nap nem elég"
objective: "Ema felírta a busz késését percben és az időjárást: | nap | késés | időjárás | |---|---|---| | 1 | 1 | száraz | | 2 | 0 | száraz | | 3 | 2 | eső | | 4 | 2 | sz…"
state: edited
carriers: prose|table
---

**🧩 Kihívás** · 1. lépés / 5 · [A késő busz esete](#expedice-data-hu)

Ema felírta a busz késését percben és az időjárást:

| nap | késés | időjárás |
|---|---|---|
| 1 | 1 | száraz |
| 2 | 0 | száraz |
| 3 | 2 | eső |
| 4 | 2 | száraz |
| 5 | 4 | eső |
| 6 | 1 | száraz |
| 7 | 25 | eső |
| 8 | 3 | száraz |
| 9 | 3 | eső |
| 10 | 0 | száraz |

1. Számold ki a száraz és az esős napokra az **átlagot** és a **mediánt** (a sorba rendezett számok középső értékét).
2. A 7. napon baleset volt az úton. Hogyan változik az esős napok átlaga, ha azt a napot kihagyod? És a medián?
3. Írd le egy mondatban, mit **mondhatsz** az adatokból, és mit **nem**.

:::reveal 🔑 Megoldás
Száraz (0, 0, 1, 1, 2, 3): átlag kb. 1,2 perc, medián 1. Eső (2, 3, 4, 25): átlag 8,5 perc, medián 3,5. A 7. nap nélkül az esős átlag 3, a medián 3. Egyetlen baleset tehát majdnem háromszorosára emelte az átlagot, a medián alig mozdult. **A medián ellenáll a kiugró értékeknek.** Az 1 kontra 3 perces különbség arra utal, hogy esőben nagyobb a késés, de 4 esős nap kevés. És vigyázz a harmadik dologra: esőben több autó jár, és többen buszoznak. Az adatok azt mondják, hogy „esőben nagyobb volt a késés”, nem azt, hogy „az eső okozza a késést”.
:::

**Tervezz táblázatot a valódi méréshez:** oszlopok: dátum, járat, tervezett idő, tényleges idő, késés, időjárás (csak a száraz, eső, hó értékek). Szabályok: az idő mindig 7:42 formátumú, egy sor = egy út, egyik nap sem szerepel kétszer.

**Következő lépés:** [Műhely: CODAP 30 perc alatt](#expedice-data-2-hu)
