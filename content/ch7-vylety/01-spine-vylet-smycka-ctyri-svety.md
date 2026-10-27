---
id: vylet-smycka-ctyri-svety
type: spine
title: "Výlet: Jedna smyčka, čtyři světy"
readingTime: 1
standalone: true
teaser: "Jeden cyklus, čtyři světy. Hra, micro:bit, robot i feed stojí na stejné myšlence. Čtyři kroky a pak zpátky k jádru knihy."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Robot má program „opakuj, dokud není před zdí: jdi 1, jdi 1“. Kdy kontroluje, jestli je před zdí?"
recallA: "Na začátku každého kola, tedy jednou za dva kroky. Ano. Proto může mezi dvěma kroky narazit."
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: vylet-smycka-ctyri-svety
conceptTitle: "Jedna smyčka, čtyři světy"
state: edited
highlights:
  - "Tohle je „opakuj pořád“ a tělo smyčky má tři kroky."
  - "Stejná smyčka, jen vstup je senzor."
  - "Smyčka musí mít konec, stejně jako každý algoritmus."
  - "Konec téhle smyčky si musíš nastavit ty."
carriers: prose
---

Jeden cyklus, čtyři světy. Hra, micro:bit, robot i feed stojí na stejné myšlence. Čtyři kroky a pak zpátky k jádru knihy.

### Herní smyčka

Každá hra běží v **herní smyčce**. Desítkykrát za sekundu udělá tři věci: **přečte vstup** (klávesy, ovladač), **posune svět** (postavy, míčky) a **vykreslí obrázek**. Projdi smyčku po krocích a pak ji pusť naplno. Šipkami měníš vstup.

> **K jádru:** Tohle je „opakuj pořád“ a tělo smyčky má tři kroky.

### micro:bit „pořád“

micro:bit má blok **pořád**. Co je v něm, opakuje se, dokud micro:bit běží. Tenhle program každou sekundu změří teplotu a ukáže ji. Zapni ho a měň teplotu v místnosti.

> **K jádru:** Stejná smyčka, jen vstup je senzor.

### Opakuj, dokud…

Tři programy pro robota v chodbě: *opakuj, dokud není před zdí: jdi 1* dojede ke zdi. *Opakuj, dokud není před zdí: jdi 1, jdi 1* v chodbě s lichou délkou narazí, protože podmínka se kontroluje jen na začátku kola, ne mezi dvěma kroky. A *opakuj, dokud není před zdí: zapípej* se zacyklí. Robot se nehne, takže zeď před ním nikdy nebude.

> **K jádru:** Smyčka musí mít konec, stejně jako každý [algoritmus](#c/algoritmus).

### Smyčka bez konce

Nekonečný feed a automatické přehrávání jsou smyčky **navržené tak, aby neskončily**. V programu má smyčka podmínku konce. Tady žádná není. Konec si musíš nastavit ty.

> **K jádru:** Konec téhle smyčky si musíš nastavit ty.

**Zpátky do knihy:** výlet patří k sekci [Opakování (cyklus)](#c/opakovani). Dál pokračuj sekcí [Rozhodování (podmínka)](#c/rozhodovani).
