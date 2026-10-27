---
id: svet-roboti-algoritmus-hu
translationOf: svet-roboti-algoritmus
lang: hu
type: spine
title: "A robot nem tudja, mire gondolsz"
readingTime: 1
standalone: true
teaser: "Azt mondod a robotnak: „menj a töltőhöz”. Meg sem mozdul. Nem tudja, hol van, merre menjen, és azt sem, mit jelent a „menj”."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem elég egy robotnak az a utasítás, hogy „kend meg a kenyeret”, és minek kell megfelelnie az algoritmus minden lépésének?"
recallA: "A robot semmit sem gondol hozzá. Minden lépésnek egyértelműnek és a végrehajtó számára végrehajthatónak kell lennie, a folyamatnak véges számú lépés után véget kell érnie, és minden megengedett bemenetre működnie kell."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: algoritmus
state: edited
highlights:
  - "Lépések pontos sorrendben; a végrehajtó nem tudja, mire gondolt a szerző (a lépés elemisége)"
  - "Egyértelműség, végesség, általánosság és helyesség mint próba, hogy a folyamat algoritmus-e"
  - "Ugyanaz a probléma különböző algoritmusokkal is megoldható"
carriers: prose|image
---

Azt mondod a robotnak: „menj a töltőhöz”. Meg sem mozdul. Nem tudja, hol van, merre menjen, és azt sem, mit jelent a „menj”.

A robot csak néhány **elemi lépést** tud: *menj előre 1 mezőt*, *fordulj balra 90°-ot*, *állj meg*. Minden mást neked kell lebontanod neki. Ő pedig **szó szerint** végrehajtja, semmit sem gondol hozzá.

![Robot a rácson és két út a töltőhöz](images/svet-roboti-mrizka.hu.svg)

Egy robotnak szóló eljárás akkor **algoritmus**, ha négy próbát kiáll:

- **Egyértelműség**: a *fordulj* nem elég. Merre? Mennyit? A *fordulj jobbra 90°-ot* igen.
- **Végesség**: a *menj, amíg neki nem ütközöl* csak akkor ér véget, ha tényleg jön egy fal. Nyílt terepen a robot örökké menne.
- **Általánosság**: a négyzetre szóló eljárás bármilyen oldalhosszra működik, nem csak egyre: *ismételd 4-szer: menj d mezőt, fordulj balra 90°-ot*.
- **Helyesség**: a robot tényleg a töltőn köt ki, nem egy mezővel mellette.

A töltőhöz több út vezet, és így több **különböző algoritmus** is. Az egyik előbb felfelé megy, aztán jobbra, a másik fordítva. Mindkettő helyes. Ha az egyik út el van torlaszolva, megérted, miért éri meg mindkettőt ismerni.

**Próbáld ki!** Írj egy barátodnak algoritmust arra, hogyan jusson el az osztályterem ajtajától a padodig, csak *előre N lépés* és *fordulj balra/jobbra 90°-ot* lépésekből. Aztán hagyd, hogy pontosan e szerint menjen. Hol akadt el?

**Tovább a robotok világában:** → [Vonalkövető kisautó](#svet-roboti-dekompozice-hu)
