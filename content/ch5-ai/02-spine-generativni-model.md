---
id: generativni-model
type: spine
title: "Generativní AI předpovídá"
readingTime: 1
standalone: true
teaser: "Klávesnice v mobilu ti nabízí další slovo dřív, než ho napíšeš. Chatbot dělá totéž, jen mnohem lépe. A někdy si přitom vymýšlí."
voice: universal
parent: null
diagram: anim-generativni-model
core: true
recallQ: "Proč chatbot někdy sebejistě napíše nesmysl?"
recallA: "Předpovídá pravděpodobné pokračování textu a fakta neověřuje. Věta, která zní pravděpodobně, nemusí být pravdivá."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: generativni-model
conceptTitle: "Generativní AI předpovídá"
state: core
highlights:
  - "Předpověď dalšího slova (tokenu) podle pravděpodobnosti"
  - "Plynulost není pravdivost: halucinace"
  - "Totéž u obrázků, hlasu a videa (generativní obraz, deepfake)"
carriers: prose|animation
---

Klávesnice v mobilu ti nabízí další slovo dřív, než ho napíšeš. Chatbot dělá totéž, jen mnohem lépe. A někdy si přitom vymýšlí.

Jazykový model, třeba chatbot, se učil na obrovském množství textů. Nenaučil se z nich fakta jako encyklopedie. Naučil se, **která slova obvykle následují po jiných**. Když mu napíšeš otázku, **odhaduje slovo po slově, co nejspíš přijde dál**.

Zahraj si na model. Věta začíná „Nejznámější kniha spisovatele Karla Vrby z Kolína se jmenuje…“. Model nabízí pokračování podle pravděpodobnosti: *Stíny* (31 %), *Poslední* (24 %), *Dům* (17 %). Vybereš Stíny, pak *nad* (42 %), pak *Labem* (38 %) a nakonec *a vyšla v roce 1987* (29 %). Vyjde věta: „…se jmenuje Stíny nad Labem a vyšla v roce 1987.“ Zní věrohodně. Jenže Karel Vrba z Kolína je vymyšlený.

Každé slovo bylo pravděpodobné, a proto věta zní věrohodně. Nikde ale nebyl krok „ověř, jestli je to pravda“. Tak vznikají **halucinace**: plynulé, sebejisté odpovědi, které nejsou pravdivé.

Samotný model nic nevyhledává. Některé chatboty umí navíc hledat na webu, o tom je výlet **Uvnitř chatbota**. Generátory obrázků se taky učily na obrovském množství příkladů, jen pracují jinak: začnou od náhodného šumu a krok za krokem ho čistí, až vyjde obrázek podle zadání. Ani ony nic neověřují, a tak umí namalovat ruku se šesti prsty.

**Zkus to!** Zahraj si na model: kamarád řekne tři slova a ty vždycky doplň nejpravděpodobnější další. Vznikne plynulá věta, a přitom jsi nic „nevěděl“, jen odhadoval. Přesně takhle vzniká každá odpověď chatbota, i ta chybná.

> **Pozor, častý omyl:** „Chatbot vyhledává odpovědi v databázi.“ Chatbot předpovídá další slovo podle toho, co je pravděpodobné. Proto zní jistě, i když si vymýšlí.

**Dál:** Model nečte písmena. Text se mění na čísla a model počítá s čísly, stejně jako s pixely obrázku. → [Všechno jsou čísla](#c/kodovani)
