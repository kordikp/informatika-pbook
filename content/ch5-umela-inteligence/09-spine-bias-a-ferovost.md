---
id: ch5-bias-a-ferovost
type: spine
title: "Bias a férovost"
readingTime: 3
standalone: true
teaser: "AI nikoho nechce znevýhodnit. Jen se pilně naučila všechno — včetně našich předsudků."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Jak se do AI dostává bias a jak se projevuje?"
recallA: "Model přebírá zkreslení z trénovacích dat: co v datech chybí nebo je pokřivené, to model přehlíží nebo pokřivuje taky. Projevuje se třeba horším fungováním pro některé skupiny lidí nebo stereotypními výstupy."
highlights:
  - "Bias je zkreslení, které AI přebírá z dat, na kterých se učila."
  - "Ve chvíli, kdy AI o lidech rozhoduje nebo pro ně má fungovat stejně dobře."
  - "bias nejvíc odnese ten, koho bylo v datech nejmíň."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch5-bias-a-ferovost
state: core
carriers: prose
---

Požádej generátor obrázků o „vědce" — a schválně, kdo se objeví. Dlouho to býval skoro vždycky muž v bílém plášti. Nikdo to tak nenaprogramoval. Model se to **naučil**: na fotkách a textech, kterými prošel, prostě vědci vypadali takhle. A tady je celý problém v kostce.

**Bias je zkreslení, které AI přebírá z dat, na kterých se učila.** Vzpomeň na pravidlo „co do modelu vložíš, to z něj vypadne": trénovací data nejsou neutrální otisk světa — jsou to texty a obrázky, které lidé někdy vytvořili, se vším, co v nich chybí, i se všemi stereotypy. Model vzory poctivě nasaje a vrací je dál. Není zlý ani hodný; je to zrcadlo dat.

Kde to začne bolet? **Ve chvíli, kdy AI o lidech rozhoduje nebo pro ně má fungovat stejně dobře.**

- Rozpoznávání obličejů trénované převážně na jednom typu tváří dělá u ostatních víc chyb — nepříjemné u odemykání telefonu, vážné u policejních systémů.
- Systém třídící životopisy, učený na minulých přijímačkách, se naučí i minulé předsudky — a bude je opakovat rychleji a ve větším měřítku než člověk.
- Hlasoví asistenti dlouho hůř rozuměli dětem a nářečím: v datech jich bylo málo.

Všimni si vzoru: **bias nejvíc odnese ten, koho bylo v datech nejmíň.** A protože model působí objektivně („to spočítal počítač"), pokřivené rozhodnutí se snadno schová za matematiku.

Co s tím může dělat osmák? Víc, než myslíš. **Za prvé: počítej s tím.** U výstupů o lidech a skupinách se ptej: koho tenhle výstup vynechává? Čí pohled tu chybí? **Za druhé: říkej si o víc.** „Ukaž vědce různého věku, pohlaví a původu" — jedna věta v promptu umí zrcadlo narovnat. **Za třetí: nespoléhej na AI tam, kde rozhoduje o lidech** — tam patří lidský dohled, jak už víš ze sekce o agency.

**Zkus to!** Nech si vygenerovat obrázky pro tři povolání (třeba „učitel", „programátor", „zdravotní sestra") a udělej si čárky: kdo se objevuje a kdo skoro nikdy? Právě jsi provedl svůj první audit biasu.

> **Věděl/a jsi?** Slavný výzkum Gender Shades (2018) změřil, že komerční systémy rozpoznávání obličejů chybovaly u tmavších ženských tváří mnohonásobně častěji než u světlejších mužských — a přiměl velké firmy systémy přepracovat. Měření biasu je dnes samostatný obor.

Bias je o tom, co AI vrací světu. Poslední sekce kapitoly je o opaku: co ty vkládáš do ní — a kdo to všechno čte.
