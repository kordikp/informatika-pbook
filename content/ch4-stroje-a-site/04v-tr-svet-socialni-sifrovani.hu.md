---
id: svet-socialni-sifrovani-hu
translationOf: svet-socialni-sifrovani
lang: hu
type: spine
title: "Ki olvassa az üzeneteidet"
readingTime: 1
standalone: true
teaser: "Üzenetet írsz egy barátnődnek. Rajta kívül elolvashatja más is? Attól függ, hol zárják le az üzenetet, és kinél van a kulcs."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Egy weboldalon van lakat és https. Ez azt jelenti, hogy megbízható?"
recallA: "Nem. A lakat csak azt mondja, hogy a közted és a weboldal közötti út titkosított. Egy csaló oldalnak is lehet https-e."
lens: socialni
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: sifrovani
state: edited
highlights:
  - "Nyílt szöveg, kulcs, titkosított szöveg"
  - "A kódolás nyilvános szabály, a titkosításhoz titkos kulcs kell"
  - "https és lakat = titkosított út, nem a becsületesség igazolása; nyilvános wifi"
carriers: prose|image
---

Üzenetet írsz egy barátnődnek. Rajta kívül elolvashatja más is? Attól függ, hol zárják le az üzenetet, és kinél van a kulcs.

A titkosítatlan üzenet útközben olyan, mint egy **képeslap**: bárki elolvassa, aki viszi. A **titkosítás** lezárt borítékot csinál belőle. A *pénteken négykor a mozinál* **nyílt szöveg** egy **kulccsal** **titkosított szöveggé** változik, olvashatatlan zagyvasággá. Csak az olvassa el, akinél a kulcs van.

Az a fontos, **hol** nyitják ki a borítékot:

- **Útközbeni titkosítás** (https): az üzenet a mobilod és az app szervere között van lezárva. A szerveren kinyílik, és a cég elolvashatja, tárolhatja, és a hatóságok utasítására tovább is adhatja.
- **Végponttól végpontig tartó titkosítás** (end-to-end): az üzenetet a mobilod zárja le, és csak a barátnőd mobilja nyitja ki. A szerver csak zagyvaságot továbbít, és nincs nála kulcs. Így titkosít például a Signal és a WhatsApp. Más appoknál nézd meg a beállításokat.

![Útközben titkosított üzenet és végponttól végpontig titkosított üzenet](images/svet-socialni-e2e.hu.svg)

A titkosítás nem **kódolás**. Az emojik, a szöveg és a fotók a mobilban egy **nyilvános szabály** szerint kódolódnak számokká, amelyet mindenki ismer, és ez semmit sem rejt el. A titkosításhoz **titkos kulcs** kell.

És még a legjobb zár sem rejt el mindent. A végponttól végpontig titkosított üzenetről a barátnőd képernyőképet készíthet, továbbküldheti vagy megmutathatja. A titkosítás az utat védi, nem a túloldalon lévő embert. Egy kávézó **nyilvános wifijén** viszont megéri, hogy az appok legalább útközben titkosítanak: enélkül ugyanazon a hálózaton bárki olvashatná az üzeneteidet.

**Próbáld ki!** Nézd meg annak az appnak a beállításait, amelyben a barátaiddal levelezel. Szó esik benne végponttól végpontig tartó (end-to-end) titkosításról? Minden chatre vonatkozik, vagy csak némelyikre?

**Tovább a közösségi média világában:** → [Videó valamiről, ami soha nem történt meg](#svet-socialni-generativni-model-hu)
