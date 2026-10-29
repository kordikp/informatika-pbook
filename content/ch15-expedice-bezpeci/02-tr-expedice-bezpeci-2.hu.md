---
id: expedice-bezpeci-2-hu
translationOf: expedice-bezpeci-2
lang: hu
type: spine
title: "A CyberChef konyhája"
readingTime: 1
standalone: false
teaser: "A CyberChef a brit GCHQ hírszerző szolgálat ingyenes eszköze."
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
concept: expedice-bezpeci-2
conceptTitle: "A CyberChef konyhája"
objective: "A CyberChef a brit GCHQ hírszerző szolgálat ingyenes eszköze."
state: edited
carriers: prose
---

**🛠 Műhely** · 2. lépés / 5 · [Zászló hadművelet](#expedice-bezpeci-hu)

A **CyberChef** a brit GCHQ hírszerző szolgálat ingyenes eszköze. Teljesen a böngészőben fut, semmit sem kell telepíteni, és fiók sem kell. Mindenre jó, amit szöveggel csinálni lehet: átalakítások, kódolás, rejtjelek, lenyomatok. Angol nyelvű, de egérhúzással kezelhető.

**Az első 30 perc:**

1. Nyisd meg a [CyberChefet](https://gchq.github.io/CyberChef/). Balra vannak a **műveletek** (Operations), középen a **recept** (Recipe), jobbra a **bemenet** (Input) és a **kimenet** (Output).
2. A bemenetbe illeszd be az 1. lépés hex üzenetét.
3. A műveletkeresőbe írd be: `hex`, és húzd a **From Hex** műveletet a receptbe. A kimenet azonnal megváltozik.
4. Add hozzá a **ROT13** műveletet. Ez egy állítható eltolású (Amount) Caesar. Állítsd be az eltolást úgy, hogy kijöjjön a zászló. Tipp: 3-mal visszafelé tolni ugyanaz, mint 23-mal előre.
5. Próbáld ki a varázspálcás **Magic** műveletet. Magától kitalálja, milyen kódoláson ment át a szöveg.
6. Építs receptet fordítva: írj saját zászlót, add hozzá a ROT13, a **To Base64** és a **To Hex** műveletet. Az eredményt küldd el Ondrának, és mérd meg, mennyi idő alatt töri fel.

**Biztonsági szabály:** a CyberChef az adatokat sehová sem küldi. Mégse illeszd be ide, se más weboldalra a valódi jelszavaidat. A kísérletezéshez találj ki gyakorló jelszavakat.

**Kész vagy**, ha el tudod menteni és újra meg tudod nyitni a receptet, és ha a háromrétegű zászlód megfejthető.

**Következő lépés:** [A jelszó, amit senki sem lát](#expedice-bezpeci-3-hu)
