---
id: vyzva-hry-rozhodovani
type: challenge
title: "Skok, který odpouští"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Hráč doběhne na hranu plošiny, zmáčkne skok a postava spadne do propasti."
voice: universal
parent: svet-hry-rozhodovani
diagram: null
core: false
lang: cs
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

Hráč doběhne na hranu plošiny, zmáčkne skok a postava spadne do propasti. Podle kódu je všechno správně: ve vzduchu se neskáče. Hráč přesto křičí, že hra podvádí. A má pravdu.

<!-- task -->

Lidé mačkají tlačítka trochu pozdě nebo trochu brzo. Dobré plošinovky proto mají dva triky:
- **kojotí čas**: skočit jde ještě 0,1 s po sjetí z hrany (jako kojot z kreslených filmů, který chvíli běží ve vzduchu);
- **paměť stisku**: když skok zmáčkneš 0,1 s před dopadem, postava vyskočí hned, jak se dotkne země.

Máš proměnné `odZeme` (sekundy od chvíle, kdy postava naposled stála na zemi; na zemi je 0), `odStisku` (sekundy od posledního stisku skoku) a `skocil` (ano/ne).

1. Napiš jednu podmínku se spojkami **a** a **ne**, kdy postava skočí.
2. Napiš, co se stane s proměnnými hned po skoku a při dopadu.
3. Ověř podmínku na pěti situacích:
   a) postava stojí na zemi, skok se stiskne teď;
   b) postava před 0,05 s sjela z hrany (bez skoku), skok se stiskne teď;
   c) postava před 0,3 s sjela z hrany, skok se stiskne teď;
   d) postava padá, skok se stiskne 0,06 s před dopadem, pak dopadne;
   e) postava vyskočí ze země a po 0,04 s ve vzduchu se skok stiskne znovu.

**Kritérium úspěchu:** v situacích a, b, d postava skočí, v c a e ne. Pokud v e skočí podruhé, má tvé pravidlo díru.

<!-- hint -->

Obě okna jsou stejná otázka: „je to méně než 0,1 s?“

<!-- hint -->

Situace e je past. Po skoku je `odZeme` pořád malé, protože postava zem opustila před chvílí.

<!-- hint -->

Stisk, který už jednou způsobil skok, se nesmí použít podruhé. Jak ho „spotřebuješ“?

<!-- solution -->

1. **Skoč, když** `odStisku < 0,1` **a** `odZeme < 0,1` **a ne** `skocil`.
2. Po skoku: `skocil = ano` a `odStisku = 99`, takže stisk je spotřebovaný. Při dopadu: `skocil = ne` a `odZeme = 0`.
3. a) 0 < 0,1, 0 < 0,1, `skocil` = ne → **skočí**. b) 0 < 0,1, 0,05 < 0,1, `skocil` = ne → **skočí**, to je kojotí čas. c) `odZeme` = 0,3 → **neskočí**. d) Při dopadu je `odZeme` = 0 a `odStisku` = 0,06 → **skočí** hned po dopadu, to je paměť stisku. e) `odZeme` = 0,04, ale `skocil` = ano → **neskočí**. Bez části „ne `skocil`“ by tady vznikl dvojskok, o který nikdo nestál.

<!-- more -->

Kojotí čas a paměť stisku používají slavné plošinovky jako Celeste. Postav ve Scratchi dvě verze stejné úrovně, s triky a bez nich, a dej je třem kamarádům. Neprozraď, která je která...
