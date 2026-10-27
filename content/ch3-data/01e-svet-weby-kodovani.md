---
id: svet-weby-kodovani
type: spine
title: "Rozsypaný čaj"
readingTime: 1
standalone: true
teaser: "Napíšeš na web „čaj“ a návštěvník vidí „ÄŤaj“. Web se nerozbil. Jen se s prohlížečem nedomluvil, jak má čísla číst."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč má fotka s větším rozlišením větší soubor?"
recallA: "Skládá se z více pixelů a každý pixel je zakódovaný čísly. Víc pixelů znamená víc čísel, tedy víc bytů."
lang: cs
lens: weby
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: kodovani
state: edited
highlights:
  - "Kódování = domluvená pravidla převodu (pixel → číslo, písmeno → číslo)"
  - "Velikost dat: bit, byte, MB, GB; rozlišení a kvalita zvětšují soubor"
  - "Typ souboru (přípona) říká, jak čísla číst; komprese šetří místo"
carriers: prose|image
---

Napíšeš na web „čaj“ a návštěvník vidí „ÄŤaj“. Web se nerozbil. Jen se s prohlížečem nedomluvil, jak má čísla číst.

Na disku i v síti je stránka jen **čísla**. Které číslo znamená které písmeno, určuje **kódování**, domluvená tabulka převodu. Na webu se dnes používá **UTF-8**, které má číslo pro každé písmeno světa i pro emoji. Písmeno *a* zabere 1 **byte**, *č* 2 byty, emoji 🙂 4 byty. Když autor uloží text v UTF-8 a prohlížeč ho přečte podle staré české tabulky, každé *č* se rozpadne na dva nesmyslné znaky. Proto má každá stránka v hlavičce řádek `<meta charset="utf-8">`: říká, kterou tabulkou číst.

Nejvíc čísel na webu ale nesou obrázky. Fotka z mobilu má 12 milionů pixelů a klidně 4 **MB**. Na stránce se přitom ukáže v okénku 800 × 600, takže většina čísel letí sítí zbytečně. A web, který se na mobilu načítá deset sekund, lidi zavřou.

![Stejná fotka ve třech velikostech a formátech](images/svet-weby-fotka.svg)

Pomůže zmenšit **rozlišení** na to, co se opravdu ukáže, a vybrat **typ souboru** podle obsahu. Přípona říká prohlížeči, jak čísla v souboru číst:

- **JPG** a **WebP** fotky **komprimují**: vynechají detaily, kterých si oko nevšimne.
- **PNG** nic nevynechá. Hodí se na snímky obrazovky a obrázky s ostrým textem.
- **SVG** neukládá pixely, ale popis čar a tvarů. Ikona v SVG je ostrá v každé velikosti.

**Zkus to!** Najdi fotku z mobilu a podívej se, kolik má MB. Zmenši ji třeba v malování na šířku 1000 pixelů a ulož jako JPG. Kolikrát je menší?

**Dál ve světě webů:** → [Co se stane, když zmáčkneš Enter](#svet-weby-cesta-dat)
