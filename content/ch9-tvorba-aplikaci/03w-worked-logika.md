---
id: ch9-worked-logika
type: spine
title: "Semafor pro chodce: automat se schovanou chybou"
readingTime: 2
standalone: true
teaser: "Navrhneme stavy, vstupy a přechody semaforu — a pak suchým během odhalíme chybu, která by zastavila auta navždy."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co tvoří logiku aplikace?"
recallA: "Stavy (v jakém režimu appka je), vstupy (co přijde zvenku) a akce (co se provede). Chování popisují pravidla: když ve stavu S přijde vstup V, proveď akci A a přejdi do stavu S2."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
concept: ch9-logika-aplikace
state: edited
status: accepted
carriers: prose|table
---

Navrhneme logiku semaforu pro chodce — přesně tak, jak se navrhuje každá appka: stavy, vstupy, pravidla. A schválně do návrhu pustíme jednu chybu; uvidíš, jak se hledá.

**1. Vypiš stavy.** V jakých režimech semafor může být? **Červená** (chodec stojí), **Zelená** (chodec jde), **Bliká** (zelená dobíhá — dojdi, ale nevstupuj). Semafor je vždy právě v jednom z nich.

**2. Vypiš vstupy.** Co může přijít zvenku? **Stisk tlačítka** od chodce a **uplynul čas** od časovače. Ano, i čas je vstup — „šťouchá" do appky stejně jako prst.

**3. Sestav tabulku přechodů.** Každý řádek je pravidlo „stav + vstup → akce, nový stav":

| Stav | Vstup | Akce | Nový stav |
|---|---|---|---|
| Červená | stisk tlačítka | spusť odpočet | Červená |
| Červená | uplynul čas | rozsviť zelenou, spusť odpočet | Zelená |
| Zelená | stisk tlačítka | nic | Zelená |
| Zelená | uplynul čas | začni blikat, spusť odpočet | Bliká |
| Bliká | uplynul čas | rozsviť zelenou, spusť odpočet | Zelená |

Všimni si třetího řádku: i „nedělej nic" je pravidlo, které musíš zapsat — mačkání tlačítka na zelené prostě nesmí nic rozbít.

**4. Suchý běh: projdi automat prstem.** Chodec přijde a stiskne tlačítko. Sleduj tabulku: Červená —stisk→ Červená (odpočet běží) —čas→ **Zelená** —čas→ **Bliká** —čas→ **Zelená?!** Ještě jednou: z Bliká se po uplynutí času vracíme do Zelené a ze Zelené zase do Bliká. **Automat se točí mezi Zelenou a Bliká a na Červenou se už nikdy nevrátí.** Chodci by jásali, auta by stála do konce světa. Chyba odhalena: poslední řádek má špatný nový stav.

**5. Oprav pravidlo a ověř znovu.** Správně: **Bliká + uplynul čas → rozsviť červenou → Červená.** Nový průchod prstem: Červená → Zelená → Bliká → Červená. Kruh se uzavřel, semafor žije.

**Co sis odnesl:** Logika aplikace = stavy + vstupy + pravidla „když–tak", zapsaná klidně do obyčejné tabulky — včetně řádků „nedělej nic". A než začneš stavět, projdi automat suchým během: chybný přechod se prozradí na papíře dřív než v provozu.
