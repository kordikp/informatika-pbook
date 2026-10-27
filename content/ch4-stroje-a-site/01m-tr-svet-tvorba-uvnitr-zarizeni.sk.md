---
id: svet-tvorba-uvnitr-zarizeni-sk
translationOf: svet-tvorba-uvnitr-zarizeni
lang: sk
type: spine
title: "Prečo generovanie trvá"
readingTime: 1
standalone: true
teaser: "Na webe máš obrázok z AI za desať sekúnd. Keď si podobný model pustíš na školskom notebooku, čakáš desať minút. Alebo sa nezačne vôbec."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo zmizne neuložený dokument, keď vypadne prúd, a uložený nie?"
recallA: "Neuložený existuje len v operačnej pamäti, ktorá bez prúdu zabudne. Uložený je na úložisku, ktoré si pamätá natrvalo."
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
  - "Procesor, operačná pamäť, úložisko, periférie; hardvér vs. softvér"
  - "Operačná pamäť je dočasná: neuložená práca zmizne, plná pamäť spomaľuje"
  - "Operačný systém riadi aplikácie a prístup k hardvéru; výber zariadenia podľa vlastností"
carriers: prose
---

Na webe máš obrázok z AI za desať sekúnd. Keď si podobný model pustíš na školskom notebooku, čakáš desať minút. Alebo sa nezačne vôbec.

Generovanie obrázka je obrovská kopa násobení. Model má miliardy čísel a pre každý obrázok ich mnohokrát vynásobí. **Procesor** je šikovný univerzál, ktorý zvládne pár výpočtov naraz. **Grafický čip** vie len jednoduché výpočty, ale tisíce naraz, a to je pre AI ideálne. Preto stoja dátové centrá AI na tisícoch grafických kariet.

Druhá brzda je **operačná pamäť**. Skôr než model začne počítať, musí sa z **úložiska** celý načítať do pamäte, pri grafickej karte do jej vlastnej. Model na obrázky má pokojne niekoľko GB. Keď sa nezmestí, systém presúva dáta medzi úložiskom a pamäťou a všetko sa vlečie, alebo sa generovanie vôbec nespustí. **Plná pamäť spomaľuje** celé zariadenie: zrazu sa seká aj prehliadač. A operačná pamäť je **dočasná**. Keď notebook uprostred práce zaspí, rozrobený obrázok je preč. Uložený na disku zostane.

**Operačný systém** rozhoduje, ktorá aplikácia dostane koľko pamäte a procesora. Preto keď beží generovanie, ventilátor reve a hudba sa zadrháva: o **hardvér** sa delí viac programov. Hardvér sú čipy a pamäť, ktoré si môžeš ohmatať. Model, editor aj systém sú **softvér**, programy, ktoré na ňom bežia.

Nové mobily a notebooky majú špeciálny čip na AI. Ten zvládne menšie modely priamo v zariadení: rozmazanie pozadia vo videohovore, titulky, vylepšenie fotky. Pri **výbere zariadenia** na tvorbu sa preto pýtaš inak ako na písanie referátov: koľko má operačnej pamäte, akú grafiku a či má čip na AI.

**Vyskúšaj to!** Otvor na počítači správcu úloh (na Windows Ctrl+Shift+Esc, na Macu Monitor aktivity) a pusti video alebo hru. Ktorá aplikácia berie najviac pamäte a procesora?

**Ďalej vo svete tvorby s AI:** → [Kam letí tvoj prompt](#svet-tvorba-cloud-a-server-sk)
