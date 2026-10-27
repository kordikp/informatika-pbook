---
id: svet-aplikace-tabulka-a-evidence-sk
translationOf: svet-aplikace-tabulka-a-evidence
lang: sk
type: spine
title: "Apka z tabuľky"
readingTime: 1
standalone: true
teaser: "Množstvo apiek je vnútri obyčajná tabuľka. Nástroj ako Glide z nej za popoludnie urobí apku s vyhľadávaním, filtrom a tlačidlami."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Čo je v tabuľke evidencie riadok a čo stĺpec a prečo potrebuje pravidlá zápisu?"
recallA: "Riadok je jeden záznam (jedna výpožička), stĺpec jedna vlastnosť (kniha, žiak, dátum). Bez jednotných pravidiel sa dáta nedajú spoľahlivo filtrovať ani počítať."
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: tabulka-a-evidence
state: edited
highlights:
  - "Záznam (riadok) a vlastnosť (stĺpec); štruktúrované vs. neštruktúrované dáta"
  - "Pravidlá pre záznamy: jednotný formát, žiadne duplicity, povinné údaje"
  - "Zoradenie, filter a funkcie (súčet, počet) odpovedajú na otázky"
carriers: prose|image
---

Množstvo apiek je vnútri obyčajná tabuľka. Nástroj ako Glide z nej za popoludnie urobí apku s vyhľadávaním, filtrom a tlačidlami.

Triedna knižnička: kto si požičal ktorú knihu a kedy ju vráti. V tabuľke je **každý riadok jeden záznam**, jedna výpožička, a **každý stĺpec jedna vlastnosť**: kniha, žiak, dátum požičania, vrátené. Takým dátam sa hovorí **štruktúrované**, každý údaj má svoje miesto. Apka potom z riadkov urobí kartičky a zo stĺpcov políčka formulára.

![Tabuľka výpožičiek a apka, ktorá z nej vznikla](images/svet-aplikace-tabulka.sk.svg)

Apka však funguje, len keď tabuľka drží **pravidlá zápisu**:

- **Jednotný formát:** dátum vždy ako 3. 11. 2026, nie raz „3.11.“ a inokedy „v pondelok“. Inak apka nespozná, kto je po termíne.
- **Žiadne duplicity:** keď je Ondro raz *Ondro* a raz *Ondrej Novák*, apka z neho urobí dvoch ľudí.
- **Povinné údaje:** výpožička bez mena žiaka je kniha, ktorá zmizla.

Preto majú formuláre v apkách rozbaľovacie zoznamy a kalendáre namiesto voľného textu: pravidlá strážia za teba.

Až potom príde to užitočné. **Filter** ukáže len nevrátené knihy, **zoradenie** podľa dátumu dá najdlhšie požičané hore a **funkcie** vypočítajú odpovede: *počet* výpožičiek za mesiac, *súčet* kníh u jedného žiaka. Na otázku „kto má knihy po termíne?“ odpovie tabuľka za sekundu. V kope voľných poznámok, teda **neštruktúrovaných** dát, by si to hľadal pol hodiny.

**Vyskúšaj to!** Navrhni tabuľku pre apku na požičiavanie lôpt v telocvični. Aké stĺpce bude mať, ktoré budú povinné a aký formát musí mať dátum?

**Ďalej vo svete aplikácií:** → [Kto smie čo v triednej apke](#svet-aplikace-informacni-system-sk)
