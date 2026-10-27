---
id: svet-hry
type: spine
title: "Svět her: od smyčky po vlastní hru"
readingTime: 1
standalone: true
teaser: "Každá hra, kterou hraješ, je postavená z jader téhle knihy. Tady je potkáš přímo ve hrách."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Ze kterých jader knihy se skládá každá hra?"
recallA: "Z rozkladu na části, herní smyčky (cyklus), podmínek a kolizí, proměnných (skóre, životy), kódování obrázků a z cesty dat po síti. A z testování, protože chyby najdou hráči jako první."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: svet-hry
conceptTitle: "Svět her: od smyčky po vlastní hru"
state: edited
carriers: prose|image
---

Každá hra, kterou hraješ, je postavená z jader téhle knihy. Tady je potkáš přímo ve hrách.

Deset jader knihy vyprávěných ve světě her. Každé podání je krátké a má obrázek, minihru nebo kousek kódu. Jdou v pořadí, v jakém bys stavěl vlastní hru:

1. [Hra rozložená na kousky](#svet-hry-dekompozice) · jádro *Rozlož problém*
2. [Hitbox: rytíř je obdélník](#svet-hry-abstrakce-a-model) · jádro *Model: užitečné zjednodušení*
3. [Míček, který proletěl pálkou](#svet-hry-over-a-oprav) · jádro *Ověř a oprav*
4. [Herní smyčka: cyklus, který nespí](#svet-hry-opakovani) · jádro *Opakování (cyklus)*
5. [Když se dotkne mince](#svet-hry-rozhodovani) · jádro *Rozhodování (podmínka)*
6. [Skóre, životy, level](#svet-hry-promenna) · jádro *Proměnná: paměť programu*
7. [Sprite je mřížka čísel](#svet-hry-kodovani) · jádro *Všechno jsou čísla*
8. [Proč online hra laguje](#svet-hry-cesta-dat) · jádro *Jak data cestují*
9. [Skiny zdarma](#svet-hry-podvod-cili-na-cloveka) · jádro *Podvod cílí na člověka*
10. [Cheat, který kradl účty](#svet-hry-ochrana-zarizeni) · jádro *Ochrana zařízení*

**Kde začít stavět:** [Scratch](https://scratch.mit.edu) běží zdarma v prohlížeči, i česky. Program skládáš z barevných bloků, které do sebe zapadnou, jen když dávají smysl. Najdeš v něm všechno z tohoto světa: smyčku, podmínky, proměnné i kolize. Až ti bloky budou těsné, přejdeš na engine jako Godot a zjistíš, že koncepty už znáš.

![Koš, který tě nepustí](images/comic-ch11-herni-design.svg)

**Proč hra baví:** zábava se nedá naprogramovat, dá se navrhnout. Výzva má odpovídat tomu, co hráč umí (moc lehké je nuda, moc těžké vztek). Hra má na každou akci hned odpovědět: cink, blik, body. A pravidla mají jít říct jednou větou. Jestli to funguje, zjistíš jedině tak, že hru dáš hrát někomu jinému, budeš mlčet a dívat se.

**Mise světa:** [Postav hru](#mission-svet-hry). Projdeš všech deset podání a navrhneš vlastní hru. Mise se počítá do certifikátu Řešitel.
