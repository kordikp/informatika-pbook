---
id: svet-tvorba-generativni-model-hu
translationOf: svet-tvorba-generativni-model
lang: hu
type: spine
title: "Hat ujj és felirat egy másik bolygóról"
readingTime: 2
standalone: true
teaser: "A barátod beírja, hogy „kutya”, és tankönyvbe illő képet kap. Te azt írod be, hogy „ugró retriever kölyök egy pocsolyában, naplemente, közeli”, és megvan a plakát. Ugyanaz az eszköz, a különbség csak a szavakban van."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért ír a chatbot néha magabiztosan butaságot?"
recallA: "A szöveg valószínű folytatását jelzi előre, a tényeket nem ellenőrzi. Egy valószínűnek hangzó mondatnak nem kell igaznak lennie."
lens: tvorba
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: generativni-model
state: edited
highlights:
  - "A következő szó (token) előrejelzése valószínűség alapján"
  - "A gördülékenység nem igazság: hallucinációk"
  - "Ugyanez a képeknél, a hangnál és a videónál (generatív kép, deepfake)"
carriers: prose|table
---

A barátod beírja, hogy „kutya”, és tankönyvbe illő képet kap. Te azt írod be, hogy „ugró retriever kölyök egy pocsolyában, naplemente, közeli”, és megvan a plakát. Ugyanaz az eszköz, a különbség csak a szavakban van.

A generátor nem olvas a gondolataidban, csak azokat a szavakat olvassa, amelyeket megadsz neki. És azt csinálja velük, amit a chatbot a szöveggel: **előrejelez**. A chatbot **valószínűség** alapján tippeli meg a következő szót (**tokent**). A képgenerátor azt a képet hozza létre, amely a leírásodhoz *a legvalószínűbben* illik. Sok generátor zajból indul, és lépésről lépésre képpé alakítja. Nem keresnek kész képet egy adatbázisban, hanem újat hoznak létre.

Ezért segít, ha többet írsz le. Ami a **promptba** való:

| Paraméter | Példák |
|---|---|
| stílus | fotó, akvarell, pixel art |
| hangulat | vidám, titokzatos, nyugodt |
| fény | naplemente, neon, lágy nappali |
| képkivágás | közeli, felülről, tág |

Elsőre szinte soha nem sikerül. A trükk: **egyszerre csak egy dolgot változtass meg**. A *naplementét* átírod *neonra*, és meglátod, mit irányít az a szó.

Aztán jön az ellenőrzés, mert **a gördülékenység nem igazság**. A kép remekül néz ki, de a figurának hat ujja van, a pólón lévő felirat betűk összevisszasága, amely csak írásnak látszik, a falon lógó órán pedig tizenhárom szám van. A modell tudja, mi *szokott lenni* a képeken, de azt nem, hogyan működnek valójában a dolgok. Szövegnél ezt **hallucinációnak** hívják: magabiztosan leírt képtelenség. Képnél ugyanez a helyzet.

Ugyanez az elv hoz létre **hangot** és **videót** is. Néhány perc felvétel elég ahhoz, hogy a modell a tanárod hangján beszéljen. Az a videó, amelyben egy ismert ember olyasmit mond, amit soha nem mondott, **deepfake**. Valódinak látszik, mert valószínű. Nem azért, mert igaz.

**Próbáld ki!** Vedd az unalmas „macska” promptot, és írd át úgy, hogy legalább három paraméter legyen benne a táblázatból. Ha kéznél van egy generátor, add meg mindkét változatot, és keress három különbséget. Aztán keress a képeken egy olyan hibát, amelyet ember nem követne el.

**Tovább az MI-vel való alkotás világában:** → [Ki látja a videódat](#svet-tvorba-doporucovac-hu)
