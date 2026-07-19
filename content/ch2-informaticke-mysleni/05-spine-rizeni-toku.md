---
id: ch2-rizeni-toku
type: spine
title: "Řízení toku: sekvence, větvení, cyklus"
readingTime: 3
standalone: true
teaser: "Každý program na světě je poskládaný jen ze tří pohybů: popořadě, když–tak a dokola."
voice: universal
parent: null
diagram: rizeni-toku
core: true
recallQ: "Jaké tři stavební kameny řídí pořadí kroků v každém programu?"
recallA: "Sekvence (kroky popořadě), větvení (když platí podmínka, udělej tohle, jinak tamto) a opakování/cyklus (dělej dokola, dokud něco platí)."
highlights:
  - "na řízení pořadí kroků stačí tři."
  - "1. Sekvence: dělej popořadě."
  - "2. Větvení: když platí tohle, udělej tamto."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch2-rizeni-toku
state: core
carriers: prose|diagram|code
---

Lego má tisíce druhů kostiček. Programování je skromnější: **na řízení pořadí kroků stačí tři.** A z těch tří se dá poskládat každý program, který kdy kdo napsal — od kalkulačky po Minecraft.

**1. Sekvence: dělej popořadě.** Krok jedna, krok dva, krok tři. Ranní rutina: vstaň → obleč se → nasnídej se. Pořadí nejde přehodit (snídat před vstáváním je výkon).

**2. Větvení: když platí tohle, udělej tamto.** Program se na rozcestí rozhodne podle podmínky. *Když prší → vezmi kapuci, jinak → jdi tak.* *Když je heslo správně → přihlas, jinak → ukaž chybu.* Vzpomeň si na jakoukoli hru: „když se dotkneš bodáku → ztratíš život" — čisté větvení.

**3. Opakování (cyklus): dělej dokola, dokud něco platí.** *Dokud není těsto hladké → míchej.* *Opakuj 10×: udělej dřep.* *Dokud hráč žije → pokračuj ve hře.* Pamatuješ na vzory z minulé sekce? Cyklus je jejich zápis: opakující se krok popíšeš jednou a řekneš, kolikrát nebo dokdy se má provádět.

V blokovém prostředí, jako je Scratch, vypadají doslova jako kostky, které do sebe zapadají:

```
opakuj dokud ⟨nedotýká se okraje⟩
    posuň se o 10 kroků
    když ⟨dotýká se překážky⟩
        odečti život
```

Vidíš? Cyklus, uvnitř sekvence, uvnitř větvení. **Skládání těch tří kamenů do sebe — to je celé programování.** Všechno ostatní (proměnné, funkce, další jazyky) jen přidává pohodlí.

**Zkus to!** Rozeber svoji cestu do školy na tři kameny: co je sekvence (obleč se, vezmi batoh, vyjdi), kde je větvení (když jede autobus…, jinak…), co je cyklus (dokud nejsi u školy, jdi)? Pak zkus totéž s pravidly své oblíbené hry — najednou uvidíš kód i tam, kde jsi dřív viděl jen zábavu.

> **Věděl/a jsi?** Že sekvence, větvení a cyklus stačí na zapsání libovolného programu, matematici skutečně dokázali — je to slavná věta o strukturovaném programování z 60. let. Není to tedy jen poučka pro školy, ale dokázaný fakt.

Tři kameny máš v ruce. V další kapitole je poskládáš doopravdy: ve Scratchi a pak i v Pythonu — a přibude ti čtvrtý pomocník, proměnná.
