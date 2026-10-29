---
id: sifrovani-hu
translationOf: sifrovani
lang: hu
type: spine
title: "Titkosítás: boríték képeslap helyett"
readingTime: 2
standalone: true
teaser: "A cset azt írja: „Az üzenetek végponttól végpontig titkosítottak”. Mit jelent ez, és ki nem olvashatja el őket?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Egy weboldalon van lakat és https. Ez azt jelenti, hogy megbízható?"
recallA: "Nem. A lakat csak azt mondja, hogy a közted és a weboldal közötti út titkosított. Egy csaló oldalnak is lehet https-e."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: sifrovani
conceptTitle: "Titkosítás: boríték képeslap helyett"
objective: "A cset azt írja: „Az üzenetek végponttól végpontig titkosítottak”. Mit jelent ez, és ki nem olvashatja el őket?"
mustCover:
  - "Nyílt szöveg, kulcs, titkosított szöveg"
  - "A kódolás nyilvános szabály, a titkosításhoz titkos kulcs kell"
  - "https és lakat = titkosított út, nem a becsületesség igazolása; nyilvános wifi"
state: core
highlights:
  - "Nyílt szöveg, kulcs, titkosított szöveg"
  - "A kódolás nyilvános szabály, a titkosításhoz titkos kulcs kell"
  - "https és lakat = titkosított út, nem a becsületesség igazolása; nyilvános wifi"
carriers: prose
---

A cset azt írja: „Az üzenetek végponttól végpontig titkosítottak”. Mit jelent ez, és ki nem olvashatja el őket?

Útközben minden router a kezében tartja a csomagot. A titkosítatlan üzenet olyan, mint egy **képeslap**: bárki elolvashatja, aki viszi. A **titkosítás** **kulccsal** zárja le. Kulcs nélkül olvashatatlan zagyvaság lesz belőle.

A 3-as kulcsú Caesar-titkosírás minden betűt három hellyel told el: A → D, B → E, S → V. A SZIA üzenetből VCLD lesz. Aki ismeri a kulcsot, visszatolja a betűket. És aki nem ismeri? Elfogod az AHSP H QHAZGVALYLU VARVY üzenetet, és egyenként próbálgatod a kulcsokat. A 7-es kulccsal ez jön ki: TALI A JATSZOTEREN OTKOR. A Caesar-féle titkosírásnak csak 25 kulcsa van, így próbálgatással megfejthető. A telefonodban lévő titkosításoknak annyi kulcsa van, hogy egyetlen számítógép sem tudná mindet kipróbálni.

⟦obr: images/proklik-sifrovani.hu.svg⟧

A **nyílt szöveg** és a **kulcs** együtt adja a **titkosított szöveget**. Akinél a kulcs van, kinyitja az üzenetet. Akinél nincs, csak zagyvaságot lát.

A böngészőben a **lakat és a https** azt jelenti, hogy a közted és a weboldal közötti **út** titkosított. Azt nem mondja, hogy a weboldal **becsületes**. Egy csaló oldalnak is lehet lakatja.

A csevegők **végponttól végpontig tartó titkosítása** ennél is tovább megy. A https esetén az üzenet a szolgáltató szerverén kinyílik, és a szolgáltató elolvashatja. Végponttól végpontig tartó titkosításnál csak a **két végen lévő telefonoknál** van kulcs. A szerver csak továbbítja az üzenetet, maga nem tudja elolvasni. Elolvashatja viszont bárki, akinél a címzett telefonja van. Egy képernyőkép pedig továbbküldi.

A titkosítás nem kódolás. A kódolás szabálya nyilvános, a titkosírás kulcsa titkos.

**Próbáld ki!** Titkosíts egy üzenetet egy barátodnak a betűk eltolásával. Egyezzetek meg egy kulcsban (például 3-mal való eltolás, így az A-ból D lesz), és küldd el neki. Egy harmadik osztálytárs kulcs nélkül próbálja megfejteni. Mennyi ideig tart neki? A böngésződben lévő lakat ugyanezt csinálja, csak olyan hosszú kulccsal, hogy nem lehet kitalálni.

> **Vigyázz, gyakori tévedés:** „A böngészőben lévő lakat azt jelenti, hogy a weboldal biztonságos.” A lakat csak azt jelenti, hogy a kapcsolat titkosított, és útközben senki sem olvassa el. Egy csaló oldalnak is lehet lakatja.

**Tovább:** A jó titkosítást találgatással nem lehet feltörni, ezért a csalók az embert támadják. Még egy adathalász oldalnak is lehet lakatja. A 6. fejezetben látod majd. → [A csalás az embert célozza](#c/podvod-cili-na-cloveka)
