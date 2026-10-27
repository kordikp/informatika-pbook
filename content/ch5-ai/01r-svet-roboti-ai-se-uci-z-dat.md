---
id: svet-roboti-ai-se-uci-z-dat
type: spine
title: "Natrénuj micro:bit na svoje pohyby"
readingTime: 1
standalone: true
teaser: "Nikdo micro:bitu nenapsal pravidlo „tohle je mávání“. Naučí se ho sám, z tvých příkladů."
voice: universal
parent: null
diagram: uceni-z-dat
core: false
recallQ: "Model na rozpoznávání obličejů trénovaný hlavně na světlé pleti chybuje u tmavé. Proč?"
recallA: "Naučil se vzory z dat, která dostal. Tmavou pleť v nich skoro neviděl, a tak ji rozpoznává hůř. Chyba je v datech."
lang: cs
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
  - "AI = software, který se učí z příkladů, ne z ručně psaných pravidel"
  - "Trénování a testování na nových datech"
  - "Bias: chybějící nebo jednostranná data vedou k chybným nebo nespravedlivým výsledkům"
carriers: prose|diagram
---

Nikdo micro:bitu nenapsal pravidlo „tohle je mávání“. Naučí se ho sám, z tvých příkladů.

V nástroji **CreateAI** (createai.microbit.org) nahraješ micro:bitu příklady pohybů: deset mávnutí, deset tlesknutí, deset chvil, kdy jen stojíš. Akcelerometr u každého změří, jak se destička hýbala. Z příkladů pak **model** najde **vzory**: mávání má rytmus tam a zpátky, tlesknutí jeden prudký náraz.

Tohle je umělá inteligence: **software, který se učí z příkladů**, ne z ručně psaných pravidel. Napsat pravidlo pro mávání by bylo skoro nemožné. Ukázat deset příkladů je snadné.

Pak přijde **testování na nových datech**. Model, který viděl mávat tebe, zkus na kamarádovi. Mává jinak, rychleji nebo levou rukou, a model se plete. Takové mávání v trénovacích datech nikdy neviděl.

To je **bias**: co v datech chybí, to model neumí. Natrénuješ ho jen na sobě, s micro:bitem v pravé ruce, a pro ostatní funguje hůř. Oprava je v datech: přidej příklady od víc lidí, od obou rukou, rychlé i pomalé. Stejně selhávají i velké AI. Model, který viděl hlavně jeden typ obličeje, ostatní rozpoznává hůř.

**Zkus to!** Natrénuj v CreateAI dvě gesta (stačí micro:bit a počítač). Pak ho nech vyzkoušet tři spolužáky. U koho se plete nejvíc a proč?

**Prošel jsi celý svět robotů. Teď mise:** → [Postav gadget](#mission-svet-roboti)
