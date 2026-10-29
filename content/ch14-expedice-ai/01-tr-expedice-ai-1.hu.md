---
id: expedice-ai-1-hu
translationOf: expedice-ai-1
lang: hu
type: spine
title: "A modell 83%-os. De kinél?"
readingTime: 1
standalone: false
teaser: "Az összesített pontosság el tudja rejteni, hol hibázik a modell."
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
concept: expedice-ai-1
conceptTitle: "A modell 83%-os. De kinél?"
objective: "Az összesített pontosság el tudja rejteni, hol hibázik a modell."
state: edited
carriers: prose|table
---

**🧩 Kihívás** · 1. lépés / 5 · [Modell a madáretetőnél](#expedice-ai-hu)

Az összesített pontosság el tudja rejteni, hol hibázik a modell. Ezért az eredményeket **tévesztési mátrixba** írják. A sorok megmondják, ki volt valójában a fotón. Az oszlopok azt, mit tippelt a modell.

| valóság ↓ / modell → | cinege | veréb | feketerigó |
|---|---|---|---|
| cinege (10 fotó) | 9 | 1 | 0 |
| veréb (10 fotó) | 4 | 6 | 0 |
| feketerigó (10 fotó) | 0 | 0 | 10 |

Feladatok:
1. Ellenőrizd, hogy az összesített pontosság tényleg 83% körül van. A modell által eltalált számok az átlón vannak.
2. Számold ki a pontosságot külön minden fajra.
3. Melyik madár jár a legrosszabbul, és kivel keveri össze a modell?
4. Ema bevallja, hogy a verebeket csak nyáron, oldalról fotózta, és 15 ilyen fotó volt 60 cinegefotóval szemben. Javasolj a tanító adatokban **két** változtatást, amely valószínűleg csökkenti a hibát. Mindegyiknél írd le, miért.

**Siker feltétele:** megvan mindhárom pontosság, tudod, honnan ered a hiba, és mindkét változtatás egy konkrét hiányra céloz az adatokban, nem arra, hogy „általában több fotó”.

A valódi modelleket folyamatosan így ellenőrzik. Egy emberekről döntő modellnél a 90% és 60% közötti különbség két csoport között nagy probléma, még ha az egész szuperül néz is ki.

:::reveal 🔑 Megoldás
25/30 ≈ 83%. Cinege 9/10 = 90%, veréb 6/10 = 60%, feketerigó 10/10 = 100%. A verebet a cinegével keveri (4×). Jó javítás: több verébfotó különböző oldalakról és télen, minden fajból ugyanannyi fotó, és a tesztfotók más napról legyenek, mint a tanítók.
:::

**Következő lépés:** [Műhely: az első modell 30 perc alatt](#expedice-ai-2-hu)
