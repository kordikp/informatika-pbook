---
id: vyzva-roboti-rozhodovani-hu
translationOf: vyzva-roboti-rozhodovani
lang: hu
type: challenge
title: "Az éjjeli lámpa, amely alkonyatkor villog"
level: 2
minutes: 30
readingTime: 2
standalone: true
teaser: "A micro:bites éjjeli lámpád működik."
voice: universal
parent: svet-roboti-rozhodovani-hu
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

A micro:bites éjjeli lámpád működik. Aztán jön az alkonyat, kint elhalad egy autó, és a lámpa villogni kezd: világít, nem világít, világít. Senki sem rontotta el. A program pontosan azt csinálja, ami bele van írva.

<!-- task -->

A lámpának egyetlen szabálya van: *ha fény < 40, világít, különben nem világít*. A fényérzékelő 0 és 255 közötti számokat ad. Alkonyatkor autók járnak és felhők úsznak, ezért a számok ugrálnak.

Este az érzékelő egymás után ezt méri: **70, 58, 45, 38, 44, 36, 41, 30**. A lámpa kezdetben nem világít.
Reggel ezt méri: **30, 42, 37, 45, 55, 62, 58, 70**. A lámpa kezdetben világít.

1. Egyetlen 40-es küszöbbel hányszor kapcsol át a lámpa este, és hányszor reggel?
2. Találj ki olyan szabályokat, amelyekkel a lámpa este **pontosan egyszer**, reggel is **pontosan egyszer** kapcsol át. Használhatsz két küszöböt, és azt is, hogy a lámpa éppen világít-e.
3. Indokold általánosan: mekkora ugrálást bírnak ki a szabályaid úgy, hogy a lámpa sose kapcsoljon át kétszer egymás után? És miért nem lehet a küszöböket mondjuk 5-re és 250-re széthúzni?

**Siker:** a szabályok, az átkapcsolások száma mindkét sorra egy küszöbbel és a saját szabályaiddal, és egy mondat általános indoklással.

<!-- hint -->

Kezdd egyetlen küszöbbel. Menj végig a számokon egyenként, és mindegyiknél írd fel, világít-e a lámpa. Minden változás egy átkapcsolás.

<!-- hint -->

Próbálj két számot: az egyik alatt a lámpa felkapcsol, a másik fölött lekapcsol. Mit csináljon a lámpa, ha a fény a kettő között van?

<!-- hint -->

A küszöbök között nem az érzékelő dönt, hanem a memória: a lámpa marad, ahogy van. Ahhoz, hogy visszakapcsoljon, a fénynek át kell jutnia az egész sávon.

<!-- solution -->

Egyetlen 40-es küszöbbel a lámpa este **5×** kapcsol át (38 bekapcsol, 44 kikapcsol, 36 bekapcsol, 41 kikapcsol, 30 bekapcsol), reggel pedig **3×** (42 kikapcsol, 37 bekapcsol, 45 kikapcsol).

Szabályok **hiszterézissel**, vagyis egy olyan sávval, amelyben az eszköz emlékszik az előző állapotára:

```
ha fény < 40: lámpa = világít
különben ha fény > 60: lámpa = nem világít
különben: hagyd a lámpát úgy, ahogy van
```

Este: a 38 felkapcsolja, a 44, 36, 41 és 30 nem változtat semmit. Összesen **1×**. Reggel: 30-tól 58-ig semmi sem változik, csak a 62 kapcsolja le. Összesen **1×**. Más küszöbök is működnek, például 35 és 50, ha mindkét sor egyet ad.

Általánosan: ahhoz, hogy a lámpa visszakapcsoljon, a fénynek át kell jutnia a **teljes sávon** 40-től 60-ig. Ha az ugrálás kisebb a sáv szélességénél (itt 20), ez sosem történik meg, ezért a lámpa nem kapcsol át kétszer egymás után. Az 5–250-es sáv ugyan nem villogna, de a lámpa csak teljes sötétben kapcsolna fel, és csak tűző napon kapcsolna le. A szobában sosem aludna ki.

<!-- more -->

Ugyanezt a trükköt használja a radiátor termosztátja (20 °C alatt fűt, 21,5 °C fölött kikapcsol), az elektronikában pedig a Schmitt-trigger nevű alkatrész. Építsd meg a lámpa mindkét változatát a [MakeCode](https://makecode.microbit.org)-ban, és a szimulátor fénycsúszkájával hasonlítsd össze őket. Aztán tegyél hiszterézist a zajfigyelő kütyübe: mennyi ideig legyen csend, mielőtt a figyelmeztetés kialszik? Az „Emlékező lámpa és lépésszámláló” extra játék próbára tesz.
