---
id: vyzva-postup-algoritmus
type: challenge
title: "Falešná mince na dvě vážení"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Ondra má v krabici 9 stejně vypadajících mincí."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: algoritmus
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
carriers: prose|formula
---

Ondra má v krabici 9 stejně vypadajících mincí. Jedna je falešná a je o kousek lehčí. Máš rovnoramenné váhy bez závaží a smíš vážit jen dvakrát. Jde to? A proč to nejde jedním vážením?

<!-- task -->

Napiš algoritmus pro robota, který umí jen tři věci: **položit vybrané mince na levou a pravou misku**, **přečíst výsledek** (vlevo těžší, vpravo těžší, rovnováha) a **ukázat na jednu minci**.

1. Algoritmus musí najít falešnou minci **pro každou** z 9 možností, ne jen pro tu, kterou si zrovna představíš. Zapiš ho jako **rozhodovací strom**: každé vážení je rozcestí se třemi větvemi, na konci každé větve je jedna mince.
2. Dokaž, že **jedno vážení nestačí**, ať mince rozdělíš jakkoli.
3. Kolik mincí nejvýš zvládneš rozlišit na **tři** vážení? Zdůvodni.

**Kritérium úspěchu:** strom má 9 konců, každý s jinou mincí, a žádná cesta stromem nemá víc než dvě vážení. Důkaz v bodě 2 a 3 stojí na počítání, ne na zkoušení.

<!-- hint -->

Váhy nemají dva výsledky, ale tři. Rovnováha je taky informace.

<!-- hint -->

Nevaž půlku proti půlce. Rozděl mince na tři hromádky.

<!-- hint -->

Každé vážení rozdělí zbývající možnosti na tři skupiny. Kolik různých konců může mít strom se dvěma patry?

<!-- solution -->

**Algoritmus:** rozděl mince na hromádky A = {1, 2, 3}, B = {4, 5, 6}, C = {7, 8, 9}. Polož A vlevo, B vpravo.
- Vlevo lehčí: falešná je v A. Vpravo lehčí: je v B. Rovnováha: je v C.
- Z vybrané trojice polož první minci vlevo a druhou vpravo. Lehčí strana ukazuje falešnou minci. Při rovnováze je falešná ta třetí.

**Proč nestačí jedno vážení:** vážení má jen 3 možné výsledky, ale možností je 9. Tři výsledky nemohou ukázat na devět různých mincí.

**Tři vážení:** strom se třemi patry má nejvýš 3 × 3 × 3 = **27** konců, takže zvládneš 27 mincí (hromádky po 9, pak po 3, pak po 1). Obecně $$k \text{ vážení} \Rightarrow 3^k \text{ mincí}.$$ Stejná úvaha jako u hledání půlením, jen se dělí na třetiny.

<!-- more -->

Těžší verze: 12 mincí, jedna falešná, ale **nevíš, jestli je lehčí, nebo těžší**. Tři vážení stačí. Než začneš, spočítej možnosti: 12 mincí × 2 varianty = 24 případů a 27 konců stromu. Vejde se to, ale těsně, takže první vážení musí být chytré. Zkus 4 proti 4.
