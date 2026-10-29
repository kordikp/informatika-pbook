---
id: vyzva-hry-rozhodovani-sk
translationOf: vyzva-hry-rozhodovani
lang: sk
type: challenge
title: "Skok, ktorý odpúšťa"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Hráč dobehne na hranu plošiny, stlačí skok a postava spadne do priepasti."
voice: universal
parent: svet-hry-rozhodovani-sk
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Hráč dobehne na hranu plošiny, stlačí skok a postava spadne do priepasti. Podľa kódu je všetko správne: vo vzduchu sa neskáče. Hráč aj tak kričí, že hra podvádza. A má pravdu.

<!-- task -->

Ľudia stláčajú tlačidlá trochu neskoro alebo trochu skoro. Dobré plošinovky preto majú dva triky:
- **kojotí čas**: skočiť sa dá ešte 0,1 s po zídení z hrany (ako kojot z kreslených filmov, ktorý chvíľu beží vo vzduchu);
- **pamäť stlačenia**: keď skok stlačíš 0,1 s pred dopadom, postava vyskočí hneď, ako sa dotkne zeme.

Máš premenné `odZeme` (sekundy od chvíle, keď postava naposledy stála na zemi; na zemi je 0), `odStlacenia` (sekundy od posledného stlačenia skoku) a `skocila` (áno/nie).

1. Napíš jednu podmienku so spojkami **a** a **nie**, kedy postava skočí.
2. Napíš, čo sa stane s premennými hneď po skoku a pri dopade.
3. Over podmienku na piatich situáciách:
   a) postava stojí na zemi, skok sa stlačí teraz;
   b) postava pred 0,05 s zišla z hrany (bez skoku), skok sa stlačí teraz;
   c) postava pred 0,3 s zišla z hrany, skok sa stlačí teraz;
   d) postava padá, skok sa stlačí 0,06 s pred dopadom, potom dopadne;
   e) postava vyskočí zo zeme a po 0,04 s vo vzduchu sa skok stlačí znova.

**Kritérium úspechu:** v situáciách a, b, d postava skočí, v c a e nie. Ak v e skočí druhýkrát, tvoje pravidlo má dieru.

<!-- hint -->

Obe okná sú rovnaká otázka: „je to menej ako 0,1 s?“

<!-- hint -->

Situácia e je pasca. Po skoku je `odZeme` stále malé, pretože postava opustila zem pred chvíľou.

<!-- hint -->

Stlačenie, ktoré už raz spôsobilo skok, sa nesmie použiť druhýkrát. Ako ho „spotrebuješ“?

<!-- solution -->

1. **Skoč, keď** `odStlacenia < 0,1` **a** `odZeme < 0,1` **a nie** `skocila`.
2. Po skoku: `skocila = áno` a `odStlacenia = 99`, takže stlačenie je spotrebované. Pri dopade: `skocila = nie` a `odZeme = 0`.
3. a) 0 < 0,1, 0 < 0,1, `skocila` = nie → **skočí**. b) 0 < 0,1, 0,05 < 0,1, `skocila` = nie → **skočí**, to je kojotí čas. c) `odZeme` = 0,3 → **neskočí**. d) Pri dopade je `odZeme` = 0 a `odStlacenia` = 0,06 → **skočí** hneď po dopade, to je pamäť stlačenia. e) `odZeme` = 0,04, ale `skocila` = áno → **neskočí**. Bez časti „nie `skocila`“ by tu vznikol dvojskok, o ktorý nikto nestál.

<!-- more -->

Kojotí čas a pamäť stlačenia používajú slávne plošinovky ako Celeste. Postav v Scratchi dve verzie rovnakej úrovne, s trikmi a bez nich, a daj ich trom kamarátom. Neprezraď, ktorá je ktorá...
