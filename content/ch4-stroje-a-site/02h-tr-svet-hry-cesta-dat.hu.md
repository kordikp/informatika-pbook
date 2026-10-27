---
id: svet-hry-cesta-dat-hu
translationOf: svet-hry-cesta-dat
lang: hu
type: spine
title: "Miért laggol az online játék"
readingTime: 1
standalone: true
teaser: "Te lősz elsőként, mégis te esel el. A játék nem csapott be. Az adataid egyszerűen még úton voltak."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mi történik a videód csomagjaival, ha útközben kiesik egy router?"
recallA: "A többi router más úton küldi tovább őket. Az internetnek nincs egyetlen központja, így egy rész kiesése nem állítja meg."
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: cesta-dat
state: edited
highlights:
  - "Kliens és szerver: kérés és válasz (web, e-mail, streamelés)"
  - "Csomagok, IP-cím, a DNS a neveket címekre fordítja"
  - "Az internetnek nincs egyetlen központja: kerülőutak kiesés esetén"
carriers: prose|image
---

Te lősz elsőként, mégis te esel el. A játék nem csapott be. Az adataid egyszerűen még úton voltak.

Az online játék **kliens és szerver**. A telefonod vagy a konzolod (a kliens) **kérést** küld: *megnyomtam a lövést, itt állok*. A játékszerver kiszámolja, és **választ** küld minden játékosnak: ki kit talált el.

![A csomagok útja a telefonodtól a játékszerverig és vissza](images/svet-hry-ping.hu.svg)

Az adat nem egy darabban utazik. Kis **csomagokra** bomlik, és mindegyik a cél **IP-címét** viszi magával. A szerver neve lehet például *eu.hra.cz*, de a csomagoknak szám kell. A nevet a **DNS**, az internet telefonkönyve fordítja címre. Aztán a csomagok **routerről** routerre haladnak egészen a szerverig.

Az oda-vissza út ideje a **ping**, ezredmásodpercben. A 20 ms kiváló, a 200 ms azt jelenti, hogy a világot egy ötöd másodperccel később látod. Ezért közeli szerveren játszanak: Európában, nem Ausztráliában.

Ha útközben kiesik egy router, a csomagok **kerülővel** mennek. Az internetnek nincs egyetlen központja, így a játék fut tovább, csak a ping ugrik meg egy pillanatra. Ha pedig néhány csomag teljesen elveszik, a többi játékos figurája „teleportál”: a játék egy pillanatig nem tudta, hol vannak.

**Próbáld ki!** Keresd meg a kedvenc online játékodban, hol látszik a ping (gyakran a beállításokban vagy a képernyő sarkában). Mennyi otthon Wi-Fin, és mennyi mobilneten?

**Tovább a játékok világában:** → [Ingyenes skinek](#svet-hry-podvod-cili-na-cloveka-hu)
