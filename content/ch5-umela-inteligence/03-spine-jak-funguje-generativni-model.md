---
id: ch5-jak-funguje-generativni-model
type: spine
title: "Jak funguje generativní model"
readingTime: 3
standalone: true
teaser: "ChatGPT nehledá odpověď v databázi. Hádá další slovo. Pořád dokola. Vážně."
voice: universal
parent: null
diagram: anim-generativni-model
core: true
recallQ: "Proč může generativní model znít sebejistě i u vymyšlené informace?"
recallA: "Protože odpovědi nevytahuje z databáze — slovo po slovu předpovídá, co nejpravděpodobněji následuje. Sleduje pravděpodobnost, ne pravdu, takže i smyšlenka zní plynule a jistě. Říká se tomu halucinace."
highlights:
  - "Generativní model odpovědi nevytahuje z databáze — slovo po slovu předpovídá, co nejpravděpodobněji následuje."
  - "Model sleduje pravděpodobnost, ne pravdu."
  - "Téhle sebejisté smyšlence se říká halucinace."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch5-jak-funguje-generativni-model
state: core
carriers: prose|animation
---

Dopln větu: „Vlk se v pohádce převlékl za…" Babičku, samozřejmě. Jak to víš? Slyšel jsi tolik pohádek, že ti to naskočilo samo. Gratuluju — právě jsi předvedl přesně to, co dělá ChatGPT. Jen on to dělá s celým internetem v hlavě.

**Generativní model odpovědi nevytahuje z databáze — slovo po slovu předpovídá, co nejpravděpodobněji následuje.** Napíšeš otázku, model spočítá nejpravděpodobnější první slovo odpovědi. Pak vezme otázku + to slovo a spočítá další. A další. Miliardkrát vyladěné „doplň větu", natrénované na obrovském množství textů (vzpomeň: AI se učí z dat). Z toho plyne i jméno: generativní = obsah **vytváří**, negeneruje ho z žádné kartotéky hotových odpovědí.

Proč to funguje tak dobře? Protože v lidských textech jsou vzory — a kdo dokonale ovládne „co obvykle následuje", umí psát překvapivě smysluplně, vysvětlovat i vtipkovat.

Jenže teď ta druhá strana mince. **Model sleduje pravděpodobnost, ne pravdu.** Když se zeptáš na knihu, která neexistuje, model nemá kartotéku, kde by zjistil, že neexistuje — prostě poskládá pravděpodobně znějící název, autora a rok. Plynule, sebejistě, se všemi detaily. **Téhle sebejisté smyšlence se říká halucinace.** A není to porucha, kterou půjde jednou vypnout — je to přímý důsledek toho, jak model funguje. Nejčastěji halucinuje u přesných údajů: jmen, dat, čísel, citací, zdrojů — tam, kde je málo textů, ze kterých šlo vzory posbírat.

Kde je tedy hranice? **Model je silný tam, kde jde o jazyk a vzory** (vysvětlit, shrnout, přeformulovat, navrhnout), **a nejslabší tam, kde jde o přesná fakta.** To není důvod ho nepoužívat — je to návod, kde zbystřit.

**Zkus to!** Zahraj si na model: kamarád řekne tři slova a ty vždycky doplň nejpravděpodobnější další. Vznikne plynulá věta — a přitom jsi nic „nevěděl", jen odhadoval. Přesně takhle vzniká každá odpověď chatbota, i ta chybná.

> **Věděl/a jsi?** Zkratka GPT znamená Generative Pre-trained Transformer: generativní (tvoří text), předtrénovaný (na obřím množství textů) transformer (typ neuronové sítě z roku 2017, který tuhle revoluci odstartoval).

Když teď víš, že mluvíš s předpovídačem slov, dvě věci jsou jasné: záleží na tom, jak mu úkol zadáš (prompt) — a nikdy nevěř bez ověření (halucinace). Přesně o tom jsou další sekce.
