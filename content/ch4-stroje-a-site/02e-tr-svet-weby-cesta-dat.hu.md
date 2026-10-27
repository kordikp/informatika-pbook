---
id: svet-weby-cesta-dat-hu
translationOf: svet-weby-cesta-dat
lang: hu
type: spine
title: "Mi történik, amikor megnyomod az Entert"
readingTime: 1
standalone: true
teaser: "Beírod, hogy szakkorunk.hu, és fél másodperc múlva látod az oldalt. Közben a számítógéped útbaigazítást kért, több tucat kérést küldött, és több száz csomagot kapott."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mi történik a videód csomagjaival, ha útközben kiesik egy router?"
recallA: "A többi router más úton küldi tovább őket. Az internetnek nincs egyetlen központja, így egy rész kiesése nem állítja meg."
lens: weby
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

Beírod, hogy szakkorunk.hu, és fél másodperc múlva látod az oldalt. Közben a számítógéped útbaigazítást kért, több tucat kérést küldött, és több száz csomagot kapott.

Mi történik ez alatt a fél másodperc alatt:

1. **DNS.** A számítógép csak a *szakkorunk.hu* nevet ismeri, az adatoknak viszont **IP-cím** kell, egy olyan szám, mint a 185.21.4.12. Megkérdezi a DNS-szervert, az internet telefonkönyvét, és megkapja a számot.
2. **Kérés.** A böngésző, a **kliens**, **kérést** küld a **szervernek**: *küldd el a kezdőoldalt*. Ennek a megállapodásnak a nyelve a HTTP.
3. **Csomagok.** A kérés és a válasz kis **csomagokra** bontva utazik. Mindegyik viszi a célja címét, a **routerek** pedig továbbadják, mindegyik egy kicsit közelebb.
4. **Válasz.** A szerver visszaküldi a HTML-t. A böngésző megtalálja benne a CSS-re, a szkriptekre és a képekre mutató hivatkozásokat, és minden fájlért újabb kérést küld. Egyetlen hírportál oldala könnyen száz kérés tíz különböző szerver felé.
5. **Megjelenítés.** Az oldalt a beérkezett anyagból csak a te böngésződ rakja össze.

![Az Entertől az oldalig: DNS, kérés, válasz](images/svet-weby-enter.hu.svg)

Minden kattintás egy hivatkozásra újabb kérés és újabb **válasz**. Egy oldal csomagjainak közben nem kell ugyanazon az úton menniük. Ha útközben kiesik egy router, a többiek **kerülőúton** küldik tovább őket. Az internetnek nincs egyetlen központja, ezért működik a web akkor is, ha a hálózat egy része éppen nem megy.

Egy lassú oldalnak így három különböző bűnöse lehet: a lassú szerver, a lassú hálózat vagy a gyenge eszköz, amely sokáig rakja össze az oldalt.

**Próbáld ki!** Nyiss meg a számítógépen egy tetszőleges oldalt, nyomd meg az F12-t, válaszd a Hálózat (Network) fület, és töltsd újra az oldalt. Hány kérést küldött a böngésző? Melyik fájl volt a legnagyobb?

**Tovább a weboldalak világában:** → [Hol lakik a weboldalad](#svet-weby-cloud-a-server-hu)
