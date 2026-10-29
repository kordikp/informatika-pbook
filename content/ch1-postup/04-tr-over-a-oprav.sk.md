---
id: over-a-oprav-sk
translationOf: over-a-oprav
lang: sk
type: spine
title: "Over a oprav"
readingTime: 2
standalone: true
teaser: "Mobil ti ponúka aktualizáciu, ktorá „opravuje chyby“. Ako to, že ich autori nenašli skôr?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Prečo nestačí vyskúšať program na jednom príklade, ktorý funguje?"
recallA: "Chyba sa často prejaví len pri niektorých vstupoch, napríklad pri nule alebo prázdnom zozname. Testy majú pokryť rôzne, aj okrajové prípady."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
conceptTitle: "Over a oprav"
objective: "Mobil ti ponúka aktualizáciu, ktorá „opravuje chyby“. Ako to, že ich autori nenašli skôr?"
mustCover:
  - "Test = vstup + očakávaný výstup, pripravený vopred"
  - "Okrajové prípady (0, prázdny vstup, maximum)"
  - "Ladenie: miesto → príčina → oprava → nové overenie; efektivita ako ďalšie meradlo"
state: core
highlights:
  - "Test = vstup + očakávaný výstup, pripravený vopred"
  - "Okrajové prípady (0, prázdny vstup, maximum)"
  - "Ladenie: miesto → príčina → oprava → nové overenie; efektivita ako ďalšie meradlo"
carriers: prose|image
---

Mobil ti ponúka aktualizáciu, ktorá „opravuje chyby“. Ako to, že ich autori nenašli skôr?

Že riešenie funguje, **nevieš, kým ho nevyskúšaš**. A jeden vyskúšaný príklad nestačí. Chyby sa často skrývajú v **záludných vstupoch**: nula, prázdno, maximum.

Dobrý **test** má dve časti: **vstup** a **výsledok, ktorý čakáš**. Ten si pripravíš vopred.

Školský automat predáva lístky do kina po 3 €. Jeho návod znie: *zisti, koľko ľudí prišlo → vytlač lístok → chýba ešte niekomu lístok? Ak áno, vytlač ďalší → nakoniec vytlač účtenku za všetkých*. Testy si pripravíš vopred: 1 človek → 1 lístok a 3 €, 2 ľudia → 6 €, 3 ľudia → 9 €, 5 ľudí → 15 €. Všetky prejdú. Potom skúsiš záludný vstup, **0 ľudí**. Čakáš, že automat nič nevytlačí. Vytlačí však lístok za 0 €. Návod totiž najprv tlačí a až potom sa pýta, či lístok niekomu chýba.

Oprava: opýtaj sa **vopred** (*chýba niekomu lístok? Ak áno, vytlač ho a opýtaj sa znova*). Pre nula ľudí sa nevytlačí nič. A potom znova spusti všetky testy, aj tie pre 1, 2, 3 a 5 ľudí.

![Over a oprav](images/comic-brouk.sk.svg)

Automat fungoval pre 1, 2, 3 aj 5 ľudí. Chyba sa ukázala až pri **nule**: vytlačil lístok zadarmo. Kto by skúsil len jeden príklad, nikdy by na ňu neprišiel.

Ladenie má štyri kroky: **nájdi miesto, kde sa to kazí → pochop príčinu → oprav → over znova všetkými testami**. Posledný krok je dôležitý. Oprava, ktorá rozbije iné testy, nie je oprava.

Keď fungujú dve riešenia, môžeš porovnať aj **efektivitu**: ktoré potrebuje menej krokov alebo menej pamäte. Kamarát si myslí číslo od 1 do 100 a na každý tip povie len „viac“, alebo „menej“. Keď skúšaš 1, 2, 3 a tak ďalej, môžeš potrebovať až 100 pokusov. Keď tipneš vždy do stredu toho, čo zostáva (50, potom 25 alebo 75…), stačí ti najviac 7. Obe riešenia číslo nájdu. Druhé je oveľa rýchlejšie.

**Vyskúšaj to!** Vezmi návod, ktorý si napísal (napríklad ten na chlieb), a skús ho rozbiť. Čo ak je chlieb už nakrájaný? Čo ak došlo maslo? Každý vstup, na ktorom návod zlyhá, je chyba, ktorú si našiel skôr ako ten, kto ho použije. Oprav návod, nech zvládne aj toto.

> **Pozor, častý omyl:** „Keď to raz prebehlo, je to správne.“ Prebehlo to len pre ten jeden vstup. Chyby sa skrývajú v okrajových prípadoch, napríklad pri nule. A chyby robí každý programátor. Dobrý je ten, kto ich vie nájsť.

**Ďalej:** Odpoveď AI testuješ rovnako ako program. Na záludných otázkach, nielen na jednej, ktorá práve vyšla. → [Overuj a rozhoduj ty](#c/rozhodujes-ty)
