---
id: expedice-hry-creator-hu
translationOf: expedice-hry-creator
lang: hu
type: spine
title: "Az ellenség, amely gondolkodik"
readingTime: 1
standalone: false
teaser: "Az az ellenség, amely csak ide-oda járkál, unalmas."
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
concept: expedice-hry-creator
conceptTitle: "Az ellenség, amely gondolkodik"
objective: "Az az ellenség, amely csak ide-oda járkál, unalmas."
state: edited
carriers: prose
---

**🛠️ Kitérő** · [A hétvége, amikor megszületett egy játék](#expedice-hry-hu)

Az az ellenség, amely csak ide-oda járkál, unalmas. Az **automatával** működő ellenség veled játszik. Tervezz egy őrt három állapottal: **őrjáratozik** (járja az útvonalát), **üldöz** (a játékos 100 px-nél közelebb van) és **visszatér** (elvesztette a játékost, és visszamegy az útvonalára). Minden nyílhoz írj eseményt. Mi van, ha a játékos eltűnik egy fal mögött? Mi van, ha visszajön, miközben az őr éppen visszatér?

Aztán adj az őrnek térképet. Egy 8 × 8-as rács néhány fallal, az őr az egyik sarokban, a játékos egy másikban. Számozd meg a mezőket: a kezdőmező 0, a szabad szomszédai 1, azok szomszédai 2, és így tovább, mint amikor egy hullám terjed. Amikor a hullám eléri a játékost, menj vissza tőle a csökkenő számokon. Ez a **legrövidebb út**. Ezt az eljárást szélességi keresésnek hívják, és a játékok erre építenek okosabb eljárásokat, például az A*-ot. Hány lépés kell a hullámnak üres rácson sarokból sarokba?

**Vissza az expedícióra:** [A hétvége, amikor megszületett egy játék](#mission-expedice-hry)
