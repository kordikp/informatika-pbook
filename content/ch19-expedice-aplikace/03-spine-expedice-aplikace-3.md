---
id: expedice-aplikace-3
type: spine
title: "Kolik lidí stačí na test"
readingTime: 1
standalone: false
teaser: "Test použitelnosti znamená, že někdo, kdo appku nezná, dostane úkol (třeba „zapiš výdaj 150 Kč za autobus“) a ty jen mlčky sleduješ, kde zaváhá."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-aplikace-3
conceptTitle: "Kolik lidí stačí na test"
state: edited
carriers: prose|formula
---

**🧩 Výzva** · krok 3 z 5 · [Appathon za jeden víkend](#expedice-aplikace)

**Test použitelnosti** znamená, že někdo, kdo appku nezná, dostane úkol (třeba „zapiš výdaj 150 Kč za autobus“) a ty jen mlčky sleduješ, kde zaváhá. Neradíš, neukazuješ, jen zapisuješ.

Výzkumník Jakob Nielsen porovnal desítky takových testů. Zjistil, že jeden tester v průměru narazí na 31 % problémů appky. Další testeři pak většinou narážejí na stejné problémy jako ti první, jen občas na nový. Podíl nalezených problémů po n testerech je zhruba

$$P(n) = 1 - (1 - 0{,}31)^n$$

1. Spočítej P(1), P(3), P(5), P(10) a P(15). Stačí kalkulačka v mobilu.
2. O kolik procent víc problémů najde desátý tester než devátý? Proč tak málo?
3. Máš 15 testerů. Je lepší jeden velký test s patnácti lidmi, nebo tři kola po pěti, kdy mezi koly chyby opravíš? Zdůvodni to čísly i selským rozumem.
4. Kdy vzorec přestává platit? Najdi aspoň dvě situace. Nápověda: kdo jsou tvoji testeři a jsou si podobní?

**Úspěch:** máš tabulku pěti hodnot, rozhodnutí pro bod 3 a dvě skutečné hranice vzorce. Pak proveď první kolo testu se třemi lidmi z kroužku a zapiš každé zaváhání.

:::reveal 🔑 Řešení
P(1) = 31 %, P(3) ≈ 67 %, P(5) ≈ 84 %, P(10) ≈ 98 %, P(15) ≈ 99,6 %. Desátý tester přidá jen asi 1 %, protože většinu problémů viděli ti před ním. Tři kola po pěti vyhrávají: po opravě testuješ novou verzi a najdeš i chyby, které oprava přidala, a ty, které byly schované za prvními. Vzorec nesedí, když jsou testeři moc podobní (samí kamarádi z kroužku) nebo když appku používají různé skupiny (vedoucí a děti). Pak testuj pět lidí z každé skupiny. Ema má pravdu, ale jen napůl.
:::

**Další krok:** [Najdi svůj appathon](#expedice-aplikace-4)
