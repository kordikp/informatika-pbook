---
id: svet-tvorba-ai-se-uci-z-dat-hu
translationOf: svet-tvorba-ai-se-uci-z-dat
lang: hu
type: spine
title: "Miért mindig köpenyes bácsi a tudós"
readingTime: 1
standalone: true
teaser: "Azt kéred a generátortól: „tudós a laboratóriumban”. Négy kép, és négyszer egy idősebb férfi fehér köpenyben, szemüvegben. Senki sem programozta be neki."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Egy főleg világos bőrön tanított arcfelismerő modell hibázik a sötét bőrnél. Miért?"
recallA: "Azokból az adatokból tanulta meg a mintázatokat, amelyeket kapott. Sötét bőrt alig látott bennük, ezért rosszabbul ismeri fel. A hiba az adatokban van."
lens: tvorba
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ai-se-uci-z-dat
state: edited
highlights:
  - "MI = olyan szoftver, amely példákból tanul, nem kézzel írt szabályokból"
  - "Tanítás és tesztelés új adatokon"
  - "Torzítás: a hiányzó vagy egyoldalú adatok hibás vagy igazságtalan eredményekhez vezetnek"
carriers: prose|image
---

Azt kéred a generátortól: „tudós a laboratóriumban”. Négy kép, és négyszer egy idősebb férfi fehér köpenyben, szemüvegben. Senki sem programozta be neki.

A képgenerátort senki sem tanította olyan szabályokra, hogy „a tudós köpenyt hord”. Ez egy **példákból tanuló szoftver**. Az internetről százmilliónyi képet kapott feliratokkal, és **mintázatokat** talált bennük: milyen formák és színek tartoznak a *kutya*, a *naplemente*, a *tudós* szavakhoz. Ezt a fajta tanulást **tanításnak** hívják.

Ami az adatokban van, azt tanulja meg a modell. Az interneten pedig a *tudós* szóhoz főleg egyféle fotó tartozik: idősebb férfi, köpeny, kémcsövek. Tudósnőkből, fiatal tudósokból vagy számítógép előtt ülő tudósokból kevesebb van a feliratokban. A modell így nem a világot mutatja, amilyen, hanem azt, ahogyan a képeken leírták. Ezt hívják **torzításnak** (bias): az **egyoldalú adatok** egyoldalú eredményekhez vezetnek. A képeknél ebből klisé lesz. Az olyan MI-nél, amely jelentkezéseket válogat vagy arcokat ismer fel, ebből gyakran **igazságtalanság** lesz: akiről kevés a példa az adatokban, azt a modell rosszabbul érti.

![Négy tudós a generátorból, és ami az adatokból hiányzott](images/svet-tvorba-vedec.hu.svg)

Honnan tudható, hogy a modell jól tanult? **Új adatokon való teszteléssel**, olyan példákon, amelyeket a tanítás során nem látott. Ha csak azt tudja, amit már látott, bemagolta. Ha új képeken is működik, valódi mintázatokat talált.

Neked mint alkotónak ebből egy szokás következik: figyeld meg, mit választott ki a generátor **helyetted, kérdezés nélkül**. Nemet, kort, bőrszínt, környezetet. Ha mást szeretnél, mint az internet átlaga, mondd meg a promptban: *fiatal tudósnő mikroszkóp mellett*.

**Próbáld ki!** Adj meg egy képgenerátornak három foglalkozást: „tanár”, „programozó”, „ápoló”. Mi a közös az eredményekben? Mit talált ki a modell anélkül, hogy kérted volna?

**Tovább az MI-vel való alkotás világában:** → [Hat ujj és felirat egy másik bolygóról](#svet-tvorba-generativni-model-hu)
