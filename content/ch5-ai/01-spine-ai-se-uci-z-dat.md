---
id: ai-se-uci-z-dat
type: spine
title: "AI se učí z příkladů"
readingTime: 1
standalone: true
teaser: "Telefon tě pozná podle obličeje. Nikdo mu přitom nenapsal pravidlo, jak vypadáš. Jak to tedy umí?"
voice: universal
parent: null
diagram: uceni-z-dat
core: true
recallQ: "Model na rozpoznávání obličejů trénovaný hlavně na světlé pleti chybuje u tmavé. Proč?"
recallA: "Naučil se vzory z dat, která dostal. Tmavou pleť v nich skoro neviděl, a tak ji rozpoznává hůř. Chyba je v datech."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: ai-se-uci-z-dat
conceptTitle: "AI se učí z příkladů"
state: core
highlights:
  - "AI = software, který se učí z příkladů, ne z ručně psaných pravidel"
  - "Trénování a testování na nových datech"
  - "Bias: chybějící nebo jednostranná data vedou k chybným nebo nespravedlivým výsledkům"
carriers: prose|diagram
---

Telefon tě pozná podle obličeje. Nikdo mu přitom nenapsal pravidlo, jak vypadáš. Jak to tedy umí?

Kdybys chtěl rozpoznávání jablek naprogramovat pravidly, musel bys popsat každé jablko na světě. Dnešní AI to dělá jinak: **ukážeš jí spoustu příkladů a ona v nich sama najde vzory**. Tomu se říká **trénování**. Pak ji **otestuješ** na příkladech, které nikdy neviděla.

Rozpoznávač ovoce se trénoval na dvou druzích: **červených jablkách** a **zelenožlutých hruškách**. Dívá se jen na barvu. Pak dostane **nové zelené jablko**, jaké v datech nikdy nebylo. Barvou je nejpodobnější hruškám, a tak řekne „hruška“. Když do trénovacích dat přidáš i zelená jablka, pozná ho správně.

Model nebyl zlý ani hloupý. Naučil se přesně to, co bylo v datech: jablka jsou červená. **Co v datech chybí, to model neumí.** Když data někoho nebo něco vynechají, model chybuje právě u nich. Tomu se říká **zkreslení** (anglicky bias).

**Zkus to!** Natrénuj si vlastní model, zdarma a bez instalace, třeba v nástroji Teachable Machine. Nauč webkameru rozlišit dvě tvoje gesta: nasbírej pár desítek snímků od každého, spusť trénink, vyzkoušej. Pak ukaž gesto v jiném světle nebo v jiném oblečení. Kde model selže a co to říká o jeho trénovacích datech?

> **Pozor, častý omyl:** „AI je objektivní, protože je to stroj.“ AI se učí z dat a přebírá i jejich chyby. Když v datech chybí zelená jablka, model je nepozná.

**Dál:** Natrénovaný model je taky zjednodušení. Z mnoha příkladů si nechá jen pár vzorů. Co v datech chybí, to ve vzorech nebude. → [Model: užitečné zjednodušení](#c/abstrakce-a-model)
