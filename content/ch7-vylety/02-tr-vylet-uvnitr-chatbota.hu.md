---
id: vylet-uvnitr-chatbota-hu
translationOf: vylet-uvnitr-chatbota
lang: hu
type: spine
title: "Kirándulás: Egy chatbot belsejében"
readingTime: 2
standalone: true
teaser: "Megnézed, hogyan működik belülről egy chatbot. Négy lépés, aztán vissza a könyv alapfogalmaihoz."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Egy chatbot hőmérséklete nullára van állítva. Ez azt jelenti, hogy igazat mond?"
recallA: "Nem, csak mindig a legvalószínűbb szót választja. Igen. A hőmérséklet azt változtatja meg, mennyire kockáztat, nem azt, mennyire igaz."
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: vylet-uvnitr-chatbota
conceptTitle: "Egy chatbot belsejében"
objective: "Megnézed, hogyan működik belülről egy chatbot. Négy lépés, aztán vissza a könyv alapfogalmaihoz."
state: edited
highlights:
  - "A szavak is számok, ugyanúgy, mint a kódolásnál."
  - "Még mindig csak előrejelzés. A hőmérséklet azt mondja meg, mennyire kockáztat."
  - "A forrással ellátott választ ellenőrizni lehet. Hogy megteszed-e, arról te döntesz."
  - "Látni nem azonos a hinni. Erre építenek a csalások is."
carriers: prose
---

Megnézed, hogyan működik belülről egy chatbot. Négy lépés, aztán vissza a könyv alapfogalmaihoz.

### Tokenek

A modell nem betűket olvas. A szöveget először darabokra vágják, ezeket **tokeneknek** hívják. Ezek általában egész szavak vagy szórészek. Az „A chatbot nem olvas betűket.” mondat például így esik szét: *A · chat · bot · nem · olv · as · bet · űket · .*, és minden darabnak saját száma van. A modell csak számokkal számol.

> **Vissza az alapokhoz:** A szavak is számok, ugyanúgy, mint a [kódolásnál](#c/kodovani).

### Hőmérséklet

Minden következő szónál a modell ismeri a valószínűségeket. A **hőmérséklet** határozza meg, mennyire kockáztat. Nullánál mindig a legvalószínűbb szót választja, Varga Károlynál minden alkalommal az *Árnyak* szót. Minél magasabb a hőmérséklet, annál gyakrabban nyúl a kevésbé valószínűek után is: *Ház*, *Fűzfa*, *Csend*. A válaszok változatosabbak, de gyakrabban is mennek mellé.

> **Vissza az alapokhoz:** Még mindig csak előrejelzés. A hőmérséklet azt mondja meg, mennyire kockáztat.

### Könyvtár és források

Egyes chatbotok válaszadás előtt **dokumentumokban** vagy a weben **tudnak keresni**, és forrást is csatolnak. Ennek szakszerű neve RAG. Könyvtár nélkül a chatbot így válaszol: „A győri Varga Károly írta az Árnyak a Rába felett című regényt (1987).” Könyvtárral először a katalógusban keres: „A győri Varga Károly nevű szerzőt nem találtam a katalógusban. Nem egy másik névre gondolsz?” A forrással ellátott választ ellenőrizni lehet. Vigyázz: egy ilyen chatbot is rosszul foglalhatja össze a forrást.

> **Vissza az alapokhoz:** A forrással ellátott választ ellenőrizni lehet. Hogy megteszed-e, arról [te döntesz](#c/rozhodujes-ty).

### Képek a zajból

A képgenerátor véletlenszerű zajból indul, és lépésről lépésre megbecsüli, hogyan kellene kinéznie egy tisztább képnek. Néhány lépés után előbukkan a zajból egy forma, további lépések után a részletek. Ugyanilyen előrejelzéssel készülnek a hamis hangok és videók, a **deepfake-ek**.

> **Vissza az alapokhoz:** Látni nem azonos a hinni. Erre építenek a [csalások](#c/podvod-cili-na-cloveka) is.

**Vissza a könyvbe:** ez a kirándulás ehhez a szakaszhoz tartozik: [A generatív MI előre jelez](#c/generativni-model). Folytasd ezzel a szakasszal: [Az ajánlórendszer és a hírfolyamod](#c/doporucovac).
