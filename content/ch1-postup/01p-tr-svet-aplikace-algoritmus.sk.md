---
id: svet-aplikace-algoritmus-sk
translationOf: svet-aplikace-algoritmus
lang: sk
type: spine
title: "Kto komu koľko dlhuje"
readingTime: 2
standalone: true
teaser: "Päť kamarátov v pizzerii, jeden účet, platili len traja. Apka na delenie útraty to vypočíta za sekundu. Ale len preto, že ju niekto naučil presný postup."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo návod „natri chlieb“ robotovi nestačí a čo musí spĺňať každý krok algoritmu?"
recallA: "Robot nič nedomýšľa. Každý krok musí byť jednoznačný a vykonateľný pre vykonávateľa, postup musí po konečnom počte krokov skončiť a fungovať pre všetky prípustné vstupy."
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
  - "Kroky v presnom poradí; vykonávateľ nevie, čo autor myslel (elementárnosť kroku)"
  - "Jednoznačnosť, konečnosť, všeobecnosť a správnosť ako test, či je postup algoritmom"
  - "Ten istý problém sa dá riešiť rôznymi algoritmami"
carriers: prose
---

Päť kamarátov v pizzerii, jeden účet, platili len traja. Apka na delenie útraty to vypočíta za sekundu. Ale len preto, že ju niekto naučil presný postup.

Apka nič nedomýšľa. Pokyn „rozpočítaj to férovo“ jej nestačí. Potrebuje **kroky v presnom poradí** a každý musí vedieť vykonať:

1. Spočítaj, koľko kto zaplatil.
2. Vydeľ súčet počtom ľudí. To je férový diel.
3. Pri každom vypočítaj rozdiel: *zaplatil − diel*. Kladný znamená, že sa mu dlhuje, záporný, že dlhuje on.
4. Ten, kto dlhuje najviac, pošle tomu, komu sa dlhuje najviac, menšiu z oboch súm. Pri zhode rozhoduje poradie v zozname.
5. Opakuj krok 4, kým nie sú všetky rozdiely nula.

Vyskúšaj to: Anna zaplatila 50 €, Ben 30, Cyril 10, Dana a Eva nič. Súčet 90, diel 18. Rozdiely: Anna +32, Ben +12, Cyril −8, Dana −18, Eva −18. Dana pošle Anne 18, Eva Anne 14 a Benovi 4, Cyril Benovi 8. Štyri prevody a všetci sú vyrovnaní.

Je to naozaj **algoritmus**? Prejdi test:

- **Jednoznačnosť:** každý krok sa dá urobiť len jedným spôsobom. Preto „menšiu z oboch súm“, a nie „koľko sa dá“, a preto pravidlo pre zhodu: Dana aj Eva dlhujú 18. A čo keď sa 10 € delí medzi troch? Postup musí povedať, kam ide cent navyše.
- **Konečnosť:** každým prevodom sa aspoň jeden rozdiel vynuluje, takže postup raz skončí.
- **Všeobecnosť:** funguje pre dvoch ľudí aj pre tridsiatich, pre pizzu aj pre výlet.
- **Správnosť:** na konci má každý zaplatený práve svoj diel.

**Rovnaký problém sa dá riešiť rôznymi algoritmami.** Jednoduchší postup: každý, kto dlhuje, pošle peniaze jednému pokladníkovi a ten ich rozpošle. Funguje tiež, len prevodov je viac. Apky vyberajú postup, ktorý ich potrebuje čo najmenej.

**Vyskúšaj to!** Jana zaplatila 24 €, Peter 6 € a Ola nič. Prejdi algoritmus krok za krokom. Koľko prevodov treba a kto komu koľko pošle?

**Ďalej vo svete aplikácií:** → [Apka na papieri](#svet-aplikace-dekompozice-sk)
