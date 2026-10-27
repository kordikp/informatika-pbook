---
id: svet-roboti-ai-se-uci-z-dat-sk
translationOf: svet-roboti-ai-se-uci-z-dat
lang: sk
type: spine
title: "Natrénuj micro:bit na svoje pohyby"
readingTime: 1
standalone: true
teaser: "Nikto micro:bitu nenapísal pravidlo „toto je mávanie“. Naučí sa ho sám, z tvojich príkladov."
voice: universal
parent: null
diagram: uceni-z-dat-sk
core: false
recallQ: "Model na rozpoznávanie tvárí trénovaný hlavne na svetlej pleti chybuje pri tmavej. Prečo?"
recallA: "Naučil sa vzory z dát, ktoré dostal. Tmavú pleť v nich takmer nevidel, a tak ju rozpoznáva horšie. Chyba je v dátach."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ai-se-uci-z-dat
state: edited
highlights:
  - "AI = softvér, ktorý sa učí z príkladov, nie z ručne písaných pravidiel"
  - "Trénovanie a testovanie na nových dátach"
  - "Bias: chýbajúce alebo jednostranné dáta vedú k chybným alebo nespravodlivým výsledkom"
carriers: prose|diagram
---

Nikto micro:bitu nenapísal pravidlo „toto je mávanie“. Naučí sa ho sám, z tvojich príkladov.

V nástroji **CreateAI** (createai.microbit.org) nahráš micro:bitu príklady pohybov: desať mávnutí, desať tlesknutí, desať chvíľ, keď len stojíš. Akcelerometer pri každom zmeria, ako sa doštička hýbala. Z príkladov potom **model** nájde **vzory**: mávanie má rytmus tam a späť, tlesknutie jeden prudký náraz.

Toto je umelá inteligencia: **softvér, ktorý sa učí z príkladov**, nie z ručne písaných pravidiel. Napísať pravidlo pre mávanie by bolo skoro nemožné. Ukázať desať príkladov je ľahké.

Potom príde **testovanie na nových dátach**. Model, ktorý videl mávať teba, skús na kamarátovi. Máva inak, rýchlejšie alebo ľavou rukou, a model sa mýli. Také mávanie v trénovacích dátach nikdy nevidel.

To je **bias**: čo v dátach chýba, to model nevie. Natrénuješ ho len na sebe, s micro:bitom v pravej ruke, a pre ostatných funguje horšie. Oprava je v dátach: pridaj príklady od viacerých ľudí, od oboch rúk, rýchle aj pomalé. Rovnako zlyhávajú aj veľké AI. Model, ktorý videl hlavne jeden typ tváre, ostatné rozpoznáva horšie.

**Vyskúšaj to!** Natrénuj v CreateAI dve gestá (stačí micro:bit a počítač). Potom ho nechaj vyskúšať troch spolužiakov. Pri kom sa mýli najviac a prečo?

**Prešiel si celý svet robotov. Teraz misia:** → [Postav gadget](#mission-svet-roboti)
