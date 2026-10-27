---
id: svet-tvorba-uvnitr-zarizeni
type: spine
title: "Proč generování trvá"
readingTime: 1
standalone: true
teaser: "Na webu máš obrázek z AI za deset vteřin. Když si podobný model pustíš na školním notebooku, čekáš deset minut. Nebo nezačne vůbec."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč zmizí neuložený dokument, když vypadne proud, a uložený ne?"
recallA: "Neuložený existuje jen v operační paměti, která bez proudu zapomene. Uložený je na úložišti, které pamatuje trvale."
lang: cs
lens: tvorba
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: uvnitr-zarizeni
state: edited
highlights:
  - "Procesor, operační paměť, úložiště, periferie; hardware vs. software"
  - "Operační paměť je dočasná: neuložená práce zmizí, plná paměť zpomaluje"
  - "Operační systém řídí aplikace a přístup k hardwaru; výběr zařízení podle vlastností"
carriers: prose
---

Na webu máš obrázek z AI za deset vteřin. Když si podobný model pustíš na školním notebooku, čekáš deset minut. Nebo nezačne vůbec.

Generování obrázku je obrovská hromada násobení. Model má miliardy čísel a pro každý obrázek je mnohokrát pronásobí. **Procesor** je chytrý univerzál, který zvládne pár výpočtů naráz. **Grafický čip** umí jen jednoduché výpočty, ale tisíce najednou, a to je pro AI ideální. Proto stojí datacentra AI na tisících grafických karet.

Druhá brzda je **operační paměť**. Než model začne počítat, musí se z **úložiště** celý načíst do paměti, u grafické karty do její vlastní. Model na obrázky má klidně několik GB. Když se nevejde, systém přesouvá data mezi úložištěm a pamětí a všechno se plazí, nebo se generování vůbec nespustí. **Plná paměť zpomaluje** celé zařízení: najednou se seká i prohlížeč. A operační paměť je **dočasná**. Když notebook uprostřed práce usne, rozdělaný obrázek je pryč. Uložený na disku zůstane.

**Operační systém** rozhoduje, která aplikace dostane kolik paměti a procesoru. Proto když běží generování, ventilátor řve a hudba se zadrhává: o **hardware** se dělí víc programů. Hardware jsou čipy a paměť, které si můžeš osahat. Model, editor i systém jsou **software**, programy, které na něm běží.

Nové mobily a notebooky mají speciální čip na AI. Ten zvládne menší modely přímo v zařízení: rozmazání pozadí ve videohovoru, titulky, vylepšení fotky. Při **výběru zařízení** na tvorbu se proto ptáš jinak než na psaní referátů: kolik má operační paměti, jakou grafiku a jestli má čip na AI.

**Zkus to!** Otevři na počítači správce úloh (na Windows Ctrl+Shift+Esc, na Macu Monitor aktivity) a pusť video nebo hru. Která aplikace bere nejvíc paměti a procesoru?

**Dál ve světě tvorby s AI:** → [Kam letí tvůj prompt](#svet-tvorba-cloud-a-server)
