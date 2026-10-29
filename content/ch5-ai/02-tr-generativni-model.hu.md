---
id: generativni-model-hu
translationOf: generativni-model
lang: hu
type: spine
title: "A generatív MI előre jelez"
readingTime: 2
standalone: true
teaser: "A telefonod billentyűzete már azelőtt felkínálja a következő szót, hogy beírnád. A chatbot ugyanezt csinálja, csak sokkal jobban. És közben néha kitalál dolgokat."
voice: universal
parent: null
diagram: anim-generativni-model-hu
core: true
recallQ: "Miért ír a chatbot néha magabiztosan butaságot?"
recallA: "A szöveg valószínű folytatását jelzi előre, a tényeket nem ellenőrzi. Egy valószínűnek hangzó mondatnak nem kell igaznak lennie."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: generativni-model
conceptTitle: "A generatív MI előre jelez"
objective: "A telefonod billentyűzete már azelőtt felkínálja a következő szót, hogy beírnád. A chatbot ugyanezt csinálja, csak sokkal jobban. És közben néha kitalál dolgokat."
mustCover:
  - "A következő szó (token) előrejelzése valószínűség alapján"
  - "A gördülékenység nem igazság: hallucinációk"
  - "Ugyanez a képeknél, a hangnál és a videónál (generatív kép, deepfake)"
state: core
highlights:
  - "A következő szó (token) előrejelzése valószínűség alapján"
  - "A gördülékenység nem igazság: hallucinációk"
  - "Ugyanez a képeknél, a hangnál és a videónál (generatív kép, deepfake)"
carriers: prose|animation
---

A telefonod billentyűzete már azelőtt felkínálja a következő szót, hogy beírnád. A chatbot ugyanezt csinálja, csak sokkal jobban. És közben néha kitalál dolgokat.

A nyelvi modell, például egy chatbot, óriási mennyiségű szövegen tanult. Nem lexikonként tanulta meg belőlük a tényeket. Azt tanulta meg, **mely szavak szoktak más szavak után következni**. Amikor feltesz neki egy kérdést, **szóról szóra megbecsüli, mi jön a legvalószínűbben**.

Játszd el, hogy te vagy a modell. A mondat így kezdődik: „A győri Varga Károly író leghíresebb könyvének címe…”. A modell valószínűség szerint kínál folytatásokat: *Árnyak* (31%), *Az utolsó* (24%), *Ház* (17%). Az Árnyakat választod, aztán *a Rába* (42%), aztán *felett* (38%), végül *és 1987-ben jelent meg* (29%). Ez a mondat jön ki: „…címe Árnyak a Rába felett, és 1987-ben jelent meg.” Hihetően hangzik. Csakhogy a győri Varga Károly kitalált személy.

Minden szó valószínű volt, ezért hangzik hihetően a mondat. De sehol sem volt olyan lépés, hogy „ellenőrizd, igaz-e”. Így születnek a **hallucinációk**: gördülékeny, magabiztos válaszok, amelyek nem igazak.

Maga a modell semmit sem keres ki. Egyes chatbotok ezen felül a weben is tudnak keresni, erről szól az **Egy chatbot belsejében** kirándulás. A képgenerátorok is rengeteg példából tanultak, csak másképp dolgoznak: véletlen zajból indulnak, és lépésről lépésre tisztítják, amíg a kérésnek megfelelő kép nem lesz belőle. Ők sem ellenőriznek semmit, ezért tudnak hatujjú kezet is rajzolni.

**Próbáld ki!** Játszd el, hogy te vagy a modell: egy barátod mond három szót, te pedig mindig hozzáteszed a legvalószínűbb következőt. Gördülékeny mondat születik, pedig semmit sem „tudtál”, csak becsültél. Pontosan így születik a chatbot minden válasza, a hibás is.

> **Vigyázz, gyakori tévedés:** „A chatbot egy adatbázisban keresi a válaszokat.” A chatbot a következő szót jelzi előre aszerint, mi a valószínű. Ezért hangzik magabiztosnak akkor is, amikor kitalál valamit.

**Tovább:** A modell nem betűket olvas. A szöveg számokká alakul, és a modell számokkal számol, ugyanúgy, mint egy kép pixeleivel. → [Minden szám](#c/kodovani)
