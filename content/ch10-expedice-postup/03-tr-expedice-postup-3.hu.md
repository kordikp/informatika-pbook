---
id: expedice-postup-3-hu
translationOf: expedice-postup-3
lang: hu
type: spine
title: "Elemzés: két rendezőalgoritmus a VisuAlgóban"
readingTime: 1
standalone: false
teaser: "A VisuAlgo a National University of Singapore weboldala, amely lépésről lépésre animálja az algoritmusokat."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-postup-3
conceptTitle: "Elemzés: két rendezőalgoritmus a VisuAlgóban"
objective: "A VisuAlgo a National University of Singapore weboldala, amely lépésről lépésre animálja az algoritmusokat."
state: edited
carriers: prose|table
---

**🔍 Elemzés** · 3. lépés / 5 · [Tizenkét decemberi fejtörő](#expedice-postup-hu)

A **VisuAlgo** a National University of Singapore weboldala, amely lépésről lépésre animálja az algoritmusokat. Ingyenes, fiók nélkül használható, angol nyelvű.

1. Nyisd meg a visualgo.net oldalt, és válaszd a **Sorting** részt.
2. Adj meg **8 saját számot**, például 5, 2, 8, 1, 9, 3, 7, 4.
3. Indítsd el a **Bubble Sortot** (buborékrendezés). Figyeld, hogyan „buborékoznak” a nagy számok jobbra. Írd fel, hány összehasonlítást végzett az algoritmus.
4. Ugyanezeket a számokat futtasd le a **Merge Sorttal** (összefésülő rendezés). Ez kettévágja a tömböt, mindkét felét rendezi, aztán összefésüli őket. Megint írd fel az összehasonlításokat.
5. Ismételd meg **16 számmal**.

Töltsd ki a táblázatot:

| Számok darabszáma | Bubble | Merge |
|---|---|---|
| 8 | ? | ? |
| 16 | ? | ? |

**Elemzés:** Hányszorosára nőtt az összehasonlítások száma az egyes algoritmusoknál, amikor a számok száma megduplázódott? A buborékrendezés nagyjából minden számot minden számmal összehasonlít, ezért kétszer annyi számnál kb. **négyszer** annyi munkát végez. Az összefésülés duplázásnál csak valamivel több mint **kétszer** annyi munkát végez. Becsüld meg, hány összehasonlításra lenne szüksége az egyes algoritmusoknak 1000 számhoz.

**A siker feltétele:** a kitöltött táblázat és egy mondat arról, miért nő lassabban az összefésülés. Tipp: az összefésülés felbontás. Ugyanúgy felez, mint a felezéses keresés.

**Következő lépés:** [Csapat: Advent of Code az egész szakkörrel](#expedice-postup-4-hu)
