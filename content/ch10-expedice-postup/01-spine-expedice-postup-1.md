---
id: expedice-postup-1
type: spine
title: "Večer první: Hanojské věže"
readingTime: 1
standalone: false
teaser: "Pravidla: věž přestěhuješ z levého kolíku na pravý."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-postup-1
conceptTitle: "Večer první: Hanojské věže"
state: edited
carriers: prose|formula
---

**🧩 Výzva** · krok 1 z 5 · [Dvanáct prosincových hádanek](#expedice-postup)

**Pravidla:** věž přestěhuješ z levého kolíku na pravý. Smíš brát vždy jen jeden kotouč a **nikdy nepoložíš větší na menší**. Prostřední kolík slouží jako odkladiště.

Vyrob si věž z mincí různých velikostí, nebo z papírových koleček.

1. Kolik nejméně tahů potřebuješ pro **1, 2 a 3** kotouče? Zapiš si tahy, třeba „1 → 3“.
2. Kolik pro **4**? Nezkoušej naslepo. Podívej se, jak se stěhovaly tři kotouče, a použij to jako hotový kus.
3. Najdi pravidlo pro **n** kotoučů a **zdůvodni**, proč to rychleji nejde.

**Kritérium úspěchu:** čísla pro 1 až 4 kotouče, vzorec a zdůvodnění v jedné nebo dvou větách.

:::reveal 💡 Nápověda
Aby šlo pohnout největším kotoučem, musí být všechny menší jinde, a to na jediném volném kolíku. Kolik tahů stojí dostat je tam? A kolik je dostat zpátky na největší?
:::

Tohle je **rekurze**: úloha se řeší pomocí stejné, jen menší úlohy. Je to dekompozice dotažená do konce. Velký problém se rozloží na dva menší problémy stejného druhu a jeden jednoduchý krok.

:::reveal 🔑 Řešení
1, 3, 7, 15 tahů. Platí T(n) = 2 · T(n − 1) + 1, tedy $$T(n) = 2^n - 1.$$ Rychleji to nejde, protože největší kotouč se musí pohnout aspoň jednou a předtím i potom musí celá menší věž stát jinde.
:::

**Další krok:** [Víkend: bludiště v Blockly Games](#expedice-postup-2)
