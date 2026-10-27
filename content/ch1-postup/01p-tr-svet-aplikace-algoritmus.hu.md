---
id: svet-aplikace-algoritmus-hu
translationOf: svet-aplikace-algoritmus
lang: hu
type: spine
title: "Ki kinek mennyivel tartozik"
readingTime: 2
standalone: true
teaser: "Öt barát egy pizzériában, egy számla, és csak hárman fizettek. Egy számlaosztó app ezt egy másodperc alatt kiszámolja. De csak azért, mert valaki megtanította neki a pontos eljárást."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem elég egy robotnak az a utasítás, hogy „kend meg a kenyeret”, és minek kell megfelelnie az algoritmus minden lépésének?"
recallA: "A robot semmit sem gondol hozzá. Minden lépésnek egyértelműnek és a végrehajtó számára végrehajthatónak kell lennie, a folyamatnak véges számú lépés után véget kell érnie, és minden megengedett bemenetre működnie kell."
lens: aplikace
visuality: text-first
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
carriers: prose
---

Öt barát egy pizzériában, egy számla, és csak hárman fizettek. Egy számlaosztó app ezt egy másodperc alatt kiszámolja. De csak azért, mert valaki megtanította neki a pontos eljárást.

Az app semmit sem talál ki magától. Az „oszd el igazságosan” utasítás nem elég neki. **Pontos sorrendben követő lépések** kellenek neki, és mindegyiket végre kell tudnia hajtani:

1. Add össze, ki mennyit fizetett.
2. Oszd el az összeget a résztvevők számával. Ez az igazságos rész.
3. Mindenkinél számold ki a különbséget: *fizetett − rész*. A pozitív azt jelenti, hogy neki tartoznak, a negatív, hogy ő tartozik.
4. Aki a legtöbbel tartozik, elküldi annak, akinek a legtöbbel tartoznak, a két összeg közül a kisebbet. Egyenlőség esetén a listában elfoglalt hely dönt.
5. Ismételd a 4. lépést, amíg minden különbség nulla nem lesz.

Próbáld ki: Anna 5000 Ft-ot fizetett, Bence 3000-et, Csaba 1000-et, Dóra és Emma semmit. Összesen 9000, egy rész 1800. A különbségek: Anna +3200, Bence +1200, Csaba −800, Dóra −1800, Emma −1800. Dóra küld Annának 1800-at, Emma Annának 1400-at és Bencének 400-at, Csaba Bencének 800-at. Négy utalás, és mindenki kvitt.

Tényleg **algoritmus** ez? Futtasd le a tesztet:

- **Egyértelműség:** minden lépést csak egyféleképpen lehet megtenni. Ezért „a két összeg közül a kisebbet”, és nem „amennyit lehet”, és ezért kell szabály az egyenlőségre: Dóra és Emma is 1800-zal tartozik. És mi van, ha 1000 Ft-ot kell hárman elosztani? Az eljárásnak meg kell mondania, hová kerül a maradék forint.
- **Végesség:** minden utalással legalább egy különbség nullára csökken, így az eljárás egyszer véget ér.
- **Általánosság:** két embernél és harmincnál is működik, pizzánál és kirándulásnál is.
- **Helyesség:** a végén mindenki pontosan a saját részét fizette ki.

**Ugyanazt a problémát különböző algoritmusok is megoldhatják.** Egyszerűbb eljárás: mindenki, aki tartozik, elküldi a pénzt egy pénztárosnak, aki szétosztja. Ez is működik, csak több az utalás. Az appok azt az eljárást választják, amelyhez a lehető legkevesebb kell.

**Próbáld ki!** Jana 2400 Ft-ot fizetett, Péter 600-at, Ola semmit. Menj végig az algoritmuson lépésről lépésre. Hány utalás kell, és ki kinek mennyit küld?

**Tovább az alkalmazások világában:** → [App papíron](#svet-aplikace-dekompozice-hu)
