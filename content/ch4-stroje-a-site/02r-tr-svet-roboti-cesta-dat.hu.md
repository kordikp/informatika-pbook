---
id: svet-roboti-cesta-dat-hu
translationOf: svet-roboti-cesta-dat
lang: hu
type: spine
title: "Rádió a micro:bitek között"
readingTime: 1
standalone: true
teaser: "Két micro:bit az osztályterem két végén. Az egyiken megnyomod az A-t, a másikon kigyullad egy szív. Kábel, Wi-Fi és internet nélkül."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mi történik a videód csomagjaival, ha útközben kiesik egy router?"
recallA: "A többi router más úton küldi tovább őket. Az internetnek nincs egyetlen központja, így egy rész kiesése nem állítja meg."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: cesta-dat
state: edited
highlights:
  - "Kliens és szerver: kérés és válasz (web, e-mail, streamelés)"
  - "Csomagok, IP-cím, a DNS a neveket címekre fordítja"
  - "Az internetnek nincs egyetlen központja: kerülőutak kiesés esetén"
carriers: prose|image|code
---

Két micro:bit az osztályterem két végén. Az egyiken megnyomod az A-t, a másikon kigyullad egy szív. Kábel, Wi-Fi és internet nélkül.

A micro:biteknek van **rádiójuk**. Az egyik üzenetet küld (egy számot vagy egy rövid szöveget), a többiek fogadják:

```
indításkor: rádió csoport beállítása 7
az A gomb lenyomásakor: rádió szám küldése 1
szám fogadásakor: ikon megjelenítése ♥
```

![Három micro:bit a 7-es csoportban és egy a 3-asban](images/svet-roboti-radio.hu.svg)

A **csoport** olyasmi, mint egy cím. Az üzenetet csak az azonos csoportban lévő micro:bitek kapják meg, a többiek figyelmen kívül hagyják. Minden üzenet egy kis **csomag**: a tartalom, a csoport és a küldő.

Az interneten is hasonló, csak nagyban. A telefonod (a **kliens**) **kérést** küld, a **szerver** pedig **választ**. A csomagok **IP-címet** visznek magukkal, a **DNS** pedig az olyan neveket, mint a *microbit.org*, számokra fordítja. Útközben **routerek** adják tovább a csomagokat.

A micro:bitek rádiójának nincs központja: az üzenetet mindenki hallja, aki hatótávolságon belül és a csoportban van. Az internetnek sincs egyetlen központja. Ha kiesik egy router, a csomagok **kerülővel** mennek más routereken át. És a túl messze lévő micro:bit? Az nem kapja meg az üzenetet. A rádió hatótávolsága csak néhány tíz méter, és egyetlen router sem viszi tovább helyette.

**Próbáld ki!** Beszélj meg egy osztálytársaddal egy titkos csoportot (0–255 közötti szám), és küldjetek egymásnak üzenetet. Elkaphatja valaki, aki nem ismeri a csoportot? És mekkora távolságon működik még?

**Tovább a robotok világában:** → [Tanítsd be a micro:bitet a saját mozdulataidra](#svet-roboti-ai-se-uci-z-dat-hu)
