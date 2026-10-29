---
id: expedice-aplikace-3-hu
translationOf: expedice-aplikace-3
lang: hu
type: spine
title: "Hány ember elég a teszthez"
readingTime: 2
standalone: false
teaser: "A használhatósági teszt azt jelenti, hogy valaki, aki nem ismeri az appot, kap egy feladatot (például „írj be egy 150 Kč-s buszkiadást”), te pedig szó nélkül f…"
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
concept: expedice-aplikace-3
conceptTitle: "Hány ember elég a teszthez"
objective: "A használhatósági teszt azt jelenti, hogy valaki, aki nem ismeri az appot, kap egy feladatot (például „írj be egy 150 Kč-s buszkiadást”), te pedig szó nélkül f…"
state: edited
carriers: prose|formula
---

**🧩 Kihívás** · 3. lépés / 5 · [Appathon egy hétvége alatt](#expedice-aplikace-hu)

A **használhatósági teszt** azt jelenti, hogy valaki, aki nem ismeri az appot, kap egy feladatot (például „írj be egy 150 Kč-s buszkiadást”), te pedig szó nélkül figyeled, hol akad el. Nem segítesz, nem mutatsz semmit, csak jegyzetelsz.

Jakob Nielsen kutató több tucat ilyen tesztet hasonlított össze. Azt találta, hogy egy tesztelő átlagosan az app problémáinak 31 %-ába ütközik bele. A további tesztelők többnyire ugyanazokba a problémákba ütköznek, mint az elsők, csak néha egy újba. Az n tesztelő után megtalált problémák aránya nagyjából

$$P(n) = 1 - (1 - 0{,}31)^n$$

1. Számold ki P(1), P(3), P(5), P(10) és P(15) értékét. Elég hozzá a mobilod számológépe.
2. Hány százalékkal több problémát talál a tizedik tesztelő, mint a kilencedik? Miért ilyen keveset?
3. 15 tesztelőd van. Jobb egy nagy teszt tizenöt emberrel, vagy három, ötfős kör, amelyek között kijavítod a hibákat? Indokold számokkal és józan ésszel is.
4. Mikor nem érvényes a képlet? Keress legalább két helyzetet. Tipp: kik a tesztelőid, és hasonlítanak egymásra?

**Siker:** van egy táblázatod öt értékkel, egy döntésed a 3. ponthoz és a képlet két valódi korlátja. Aztán tartsd meg a teszt első körét három emberrel a szakkörből, és írj fel minden elakadást.

:::reveal 🔑 Megoldás
P(1) = 31 %, P(3) ≈ 67 %, P(5) ≈ 84 %, P(10) ≈ 98 %, P(15) ≈ 99,6 %. A tizedik tesztelő csak kb. 1 %-ot tesz hozzá, mert a problémák többségét már az előtte lévők látták. A három ötfős kör nyer: javítás után az új verziót teszteled, és megtalálod azokat a hibákat is, amelyeket a javítás hozott be, meg azokat, amelyek az elsők mögött rejtőztek. A képlet nem stimmel, ha a tesztelők túlságosan hasonlók (csupa szakköri barát), vagy ha az appot különböző csoportok használják (vezetők és gyerekek). Ilyenkor minden csoportból tesztelj öt embert. Emának igaza van, de csak félig.
:::

**Következő lépés:** [Találd meg a saját appathonodat](#expedice-aplikace-4-hu)
