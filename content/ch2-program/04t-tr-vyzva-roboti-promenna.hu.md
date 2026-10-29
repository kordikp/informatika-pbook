---
id: vyzva-roboti-promenna-hu
translationOf: vyzva-roboti-promenna
lang: hu
type: challenge
title: "A csaló lépésszámláló"
level: 2
minutes: 35
readingTime: 2
standalone: true
teaser: "Megteszel két lépést, és a lépésszámláló hatot mutat."
voice: universal
parent: svet-roboti-promenna-hu
diagram: null
core: false
status: accepted
concept: promenna
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Megteszel két lépést, és a lépésszámláló hatot mutat. A barátnőd lelkes, te kevésbé. A lapka nem hazudik. Csak mást számol, mint gondolod.

<!-- task -->

A gyorsulásmérő a rázkódás erősségét méri. Nyugalomban 1000 körüli értéket mutat. Két lépés alatt a micro:bit ezt a sort méri:

**1000, 1250, 1550, 1450, 1600, 1200, 1000, 1100, 1650, 1700, 1520, 1480, 1550, 1000**

Nézd végig a program három változatát, és mindegyiknél számold meg a lépéseket:

1. **Naiv:** *ha erő > 1500, adj hozzá egy lépést*. A szabályt minden mérésnél külön ellenőrzi.
2. **Él:** csak akkor adj hozzá lépést, ha az erő > 1500, és az **előző** mérés legfeljebb 1500 volt. Kell hozzá egy `előző` változó.
3. **Saját:** találj ki egy változatot, amely erre a sorra **pontosan 2**-t számol. A `lépések` mellett egy plusz változót használhatsz.

**Siker:** három lépésszám és a saját változatod szabályai, amelyek erre a sorra 2-t adnak.

**Bónusz:** találj ki egy sort két valódi lépésre, amelyet a változatod egynek számol. Miért fordul ez elő járás közben csak ritkán?

<!-- hint -->

A naiv változat minden 1500 fölötti mérést külön számol. Egy lépés viszont több mérésig tart.

<!-- hint -->

Az él csak félig segít. Nézd meg az 1450-et az 1550 és az 1600 között: a láb kicsit megremeg, és az él ezt új lépésnek veszi.

<!-- hint -->

Jegyezd meg, hogy a láb „fent” van-e. A lépést 1500 fölé ugráskor add hozzá, de a lábat csak nagyon alacsony számnál tedd vissza „le”, például 1100 alatt.

<!-- solution -->

**Naiv: 6** (1550, 1600, 1650, 1700, 1520, 1550).
**Él: 4** (1550, aztán 1600 az 1450 után, 1650 az 1100 után és 1550 az 1480 után).

**Saját változat** a `fent` változóval:

```
ha erő > 1500 és fent == nem:
    lépések = lépések + 1
    fent = igen
ha erő < 1100:
    fent = nem
```

Az 1550 hozzáadja az első lépést. Az 1450, 1600 és 1200 nem változtat semmit, mert egyik sincs 1100 alatt. Csak az 1000 állítja vissza: `fent = nem`. Az 1650 hozzáadja a második lépést, a maradék pedig az utolsó 1000-ig semmit sem ad hozzá. Az eredmény **2**.

A kulcs ugyanaz, mint a lámpánál: két küszöb, köztük memória. A `fent` változó nem számol, hanem **megjegyzi az állapotot**.

**Bónusz:** például 1000, 1600, 1300, 1650, 1000. A két csúcs között az erő nem esik 1100 alá, ezért egy lépéssé olvadnak össze. Járás közben a láb a lépések között mindig leér, és az erő visszaesik a nyugalmi értékre, ezért ritka.

<!-- more -->

A [MakeCode](https://makecode.microbit.org)-ban van egy *gyorsulás erőssége (mg)* blokk. Járás közben írasd ki az értékeket a *soros port: érték írása* blokkal, és nézd meg őket grafikonon. A küszöböket aztán a valódi számok alapján állítsd be, ne becslésből. Aki többet akar: a számokat ki lehet simítani az utolsó három mérés átlagával. Mit okoz ez a késésben és gyors járásnál?
