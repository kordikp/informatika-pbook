---
id: svet-aplikace-algoritmus
type: spine
title: "Kdo komu kolik dluží"
readingTime: 2
standalone: true
teaser: "Pět kamarádů v pizzerii, jedna účtenka, platili jen tři. Appka na dělení útraty to spočítá za vteřinu. Ale jen proto, že ji někdo naučil přesný postup."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč návod „namaž chleba“ robotovi nestačí a co musí splňovat každý krok algoritmu?"
recallA: "Robot nic nedomýšlí. Každý krok musí být jednoznačný a proveditelný pro vykonavatele, postup musí po konečném počtu kroků skončit a fungovat pro všechny přípustné vstupy."
lang: cs
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
  - "Kroky v přesném pořadí; vykonavatel neví, co autor myslel (elementárnost kroku)"
  - "Jednoznačnost, konečnost, obecnost a správnost jako test, zda je postup algoritmem"
  - "Stejný problém lze řešit různými algoritmy"
carriers: prose
---

Pět kamarádů v pizzerii, jedna účtenka, platili jen tři. Appka na dělení útraty to spočítá za vteřinu. Ale jen proto, že ji někdo naučil přesný postup.

Appka nic nedomýšlí. Pokyn „rozpočítej to férově“ jí nestačí. Potřebuje **kroky v přesném pořadí** a každý musí umět provést:

1. Sečti, kolik kdo zaplatil.
2. Vyděl součet počtem lidí. To je férový díl.
3. U každého spočítej rozdíl: *zaplatil − díl*. Kladný znamená, že se mu dluží, záporný, že dluží on.
4. Ten, kdo dluží nejvíc, pošle tomu, komu se dluží nejvíc, menší z obou částek. Při shodě rozhoduje pořadí v seznamu.
5. Opakuj krok 4, dokud nejsou všechny rozdíly nula.

Vyzkoušej to: Anna zaplatila 500 Kč, Ben 300, Cyril 100, Dana a Eva nic. Součet 900, díl 180. Rozdíly: Anna +320, Ben +120, Cyril −80, Dana −180, Eva −180. Dana pošle Anně 180, Eva Anně 140 a Benovi 40, Cyril Benovi 80. Čtyři převody a všichni jsou vyrovnaní.

Je to opravdu **algoritmus**? Projdi test:

- **Jednoznačnost:** každý krok jde udělat jen jedním způsobem. Proto „menší z obou částek“, a ne „kolik se dá“, a proto pravidlo pro shodu: Dana i Eva dluží 180. A co když se 100 Kč dělí mezi tři? Postup musí říct, kam jde koruna navíc.
- **Konečnost:** každým převodem se aspoň jeden rozdíl vynuluje, takže postup jednou skončí.
- **Obecnost:** funguje pro dva lidi i pro třicet, pro pizzu i pro výlet.
- **Správnost:** na konci má každý zaplaceno právě svůj díl.

**Stejný problém jde řešit různými algoritmy.** Jednodušší postup: každý, kdo dluží, pošle peníze jednomu pokladníkovi a ten je rozešle. Funguje taky, jen převodů je víc. Appky vybírají postup, který jich potřebuje co nejméně.

**Zkus to!** Jana zaplatila 240 Kč, Petr 60 Kč a Ola nic. Projdi algoritmus krok za krokem. Kolik převodů je potřeba a kdo komu kolik pošle?

**Dál ve světě aplikací:** → [Appka na papíře](#svet-aplikace-dekompozice)
