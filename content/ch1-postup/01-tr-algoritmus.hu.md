---
id: algoritmus-hu
translationOf: algoritmus
lang: hu
type: spine
title: "Algoritmus: pontos utasítás"
readingTime: 1
standalone: true
teaser: "A navigáció a nagymamádhoz vezet. Egy terelésnél egy pillanat alatt kitalál egy másik pontos útvonalat. Miért nem kérdezi meg soha, hogy „és ezt hogy érted?”"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Miért nem elég egy robotnak az a utasítás, hogy „kend meg a kenyeret”, és minek kell megfelelnie az algoritmus minden lépésének?"
recallA: "A robot semmit sem gondol hozzá. Minden lépésnek egyértelműnek és a végrehajtó számára végrehajthatónak kell lennie, a folyamatnak véges számú lépés után véget kell érnie, és minden megengedett bemenetre működnie kell."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: story
status: accepted
concept: algoritmus
conceptTitle: "Algoritmus: pontos utasítás"
objective: "A navigáció a nagymamádhoz vezet. Egy terelésnél egy pillanat alatt kitalál egy másik pontos útvonalat. Miért nem kérdezi meg soha, hogy „és ezt hogy érted?”"
mustCover:
  - "Lépések pontos sorrendben; a végrehajtó nem tudja, mire gondolt a szerző (a lépés elemisége)"
  - "Egyértelműség, végesség, általánosság és helyesség mint próba, hogy a folyamat algoritmus-e"
  - "Ugyanaz a probléma különböző algoritmusokkal is megoldható"
state: core
highlights:
  - "Lépések pontos sorrendben; a végrehajtó nem tudja, mire gondolt a szerző (a lépés elemisége)"
  - "Egyértelműség, végesség, általánosság és helyesség mint próba, hogy a folyamat algoritmus-e"
  - "Ugyanaz a probléma különböző algoritmusokkal is megoldható"
carriers: prose|image
---

A navigáció a nagymamádhoz vezet. Egy terelésnél egy pillanat alatt kitalál egy másik pontos útvonalat. Miért nem kérdezi meg soha, hogy „és ezt hogy érted?”

Az **algoritmus** olyan pontos utasítássor, hogy a végrehajtónak semmit sem kell kitalálnia. Egy ember a homályos utasítást is kitalálja. A robot nem: **pontosan azt csinálja, ami az utasításban áll**, és semmi többet.

Próbáld ki egy vajas kenyérrel. A „kend meg a kenyeret” utasítást a robot nem tudja végrehajtani: melyik kenyeret, mivel és mennyi vajjal? Csak ez működik: *vedd le a szeletet a tányérról, fogd meg a kést a nyelénél, vegyél a késsel egy teáskanálnyi vajat, kend el a vajat a szelet egész felső oldalán, tedd le a kést.* Minden lépést csak egyféleképpen lehet érteni, és a robot meg tudja csinálni.

![Algoritmus: pontos utasítás](images/comic-doslovny-robot.hu.svg)

Egy jó algoritmus négy dolognak felel meg:

1. **Egyértelmű:** minden lépést csak egyféleképpen lehet érteni.
2. **Végrehajtható:** a végrehajtó minden lépést meg tud csinálni.
3. **Véges:** véges számú lépés után véget ér.
4. **Helyes és általános:** minden megengedett bemenetre helyes eredményt ad, például bármilyen kenyérre, nem csak egyre.

Ugyanazt a problémát különböző algoritmusok is megoldhatják. Valaki a szélétől keni, más a közepétől. Mindkettő lehet helyes.

**Próbáld ki!** Diktáld le egy barátodnak, hogyan kenjen meg egy szelet kenyeret, és ő PONTOSAN azt csinálja, amit mondasz, semmit sem gondol hozzá. („Fogd meg a kést.” Melyik végénél?) Meglátod, hány lépés hiányzik. Aztán javítsd az utasítást, amíg elsőre nem működik. Épp most írtál egy algoritmust, és ki is javítottad.

> **Vigyázz, gyakori tévedés:** „Az algoritmus valami bonyolult dolog, ami csak a számítógépbe való.” Algoritmus minden kellően pontos utasítás, például egy recept. A számítógépnek csak az kell, hogy teljesen pontos legyen.

**Tovább:** A program olyan nyelven leírt algoritmus, amelyet a számítógép megért. A számítógép pedig a legszószerintibb robot. → [Program: bemenet → lépések → kimenet](#c/program)
