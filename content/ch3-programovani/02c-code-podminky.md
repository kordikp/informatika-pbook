---
id: ch3-code-podminky
type: spine
title: "Slabé, nebo silné? Kontrola hesla řádek po řádku"
readingTime: 2
standalone: true
teaser: "Devět řádků Pythonu posoudí tvoje heslo dřív, než ho dopíšeš. Projdeme je jeden po druhém."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Jak program s if/elif/else vybere, kterou větev provede?"
recallA: "Prochází podmínky shora dolů a provede první větev, jejíž podmínka platí; když neplatí žádná, provede else. Vždy právě jednu — díky tomu reaguje různě podle situace."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: code-walkthrough
concept: ch3-podminky-v-kodu
state: edited
status: accepted
carriers: prose|code
---

Znáš to z registrací: sotva dopíšeš heslo, formulář hlásí „slabé" nebo „silné". Uvnitř nesedí kouzelník, jen pár podmínek. Tady je celý takový posuzovač:

```python
heslo = input("Zvol si heslo: ")
delka = len(heslo)

if delka < 8:
    print("Slabé — jen", delka, "znaků, chce to aspoň 8.")
elif heslo == "heslo123" or heslo == "12345678":
    print("Slabé — tohle útočníci zkoušejí jako první.")
else:
    print("Silné: dlouhé a dost jedinečné. Dobrá volba!")
```

**Řádek 1:** `input` počká, co napíšeš, a jedno `=` to **uloží** do proměnné `heslo`. **Řádek 2:** funkce `len` spočítá počet znaků a výsledek si uložíme jako `delka`. Tím končí příprava a začíná rozhodování.

**Řádek 4:** první otázka. `delka < 8` je podmínka s odpovědí ano/ne. Platí? Provede se odsazený řádek pod ní a **zbytek žebříku se celý přeskočí** — program už nic dalšího nezkoumá. Neplatí? Jde se o patro níž.

**Řádek 6:** `elif` znamená „jinak když" — na řadu přijde, jen když délka prošla. A tady je drobnost, o kterou zakopne každý začátečník: dvojité `==` **porovnává** („rovná se heslo tomuhle textu?"), zatímco jedno `=` na řádku 1 ukládalo. Spojka `or` říká „stačí, když platí aspoň jedna z možností". Tahle otázka hlídá jedinečnost: nejokoukanější hesla světa neprojdou, ani kdyby byla dost dlouhá.

**Řádek 8:** `else` je záchranná síť bez vlastní otázky. Provede se jedině tehdy, když neplatilo nic výš — heslo je dlouhé a zároveň není z těch otřepaných. Ať se program vydal kteroukoli cestou, za žebříkem pak pokračuje zase společně dál.

V tom je celé kouzlo žebříku if/elif/else: program projde otázky **shora dolů a provede vždy právě jednu větev.** Nikdy dvě, nikdy žádnou. Proto záleží na pořadí — nejdůležitější kontroly patří nahoru.

Vyzkoušej si to v hlavě jako počítač. Co vypíše `ahoj`? Jen čtyři znaky, chytí ho první větev. Co `12345678`? Osm znaků, délkou projde, ale druhá otázka ho odhalí. A `zelenaZidle42`? Propadne až do else — silné.

Takhle vypadá „chytré chování" aplikací zblízka: žádná magie, jen něčí pečlivě seřazené otázky. Skutečné formuláře mají žebřík o pár pater vyšší — hlídají i číslice, velká písmena nebo speciální znaky — princip je ale pořád tenhle.
