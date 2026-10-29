---
id: expedice-bezpeci-1-sk
translationOf: expedice-bezpeci-1
lang: sk
type: spine
title: "Tri vrstvy"
readingTime: 1
standalone: false
teaser: "Tu je správa: 59 4F 44 4D 4E 44 7B 4B 55 44 47 2D 50 44 2D 59 55 56 57 59 42 7D Na prvý pohľad šum."
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
concept: expedice-bezpeci-1
conceptTitle: "Tri vrstvy"
objective: "Tu je správa: 59 4F 44 4D 4E 44 7B 4B 55 44 47 2D 50 44 2D 59 55 56 57 59 42 7D Na prvý pohľad šum."
state: edited
carriers: prose
---

**🧩 Výzva** · krok 1 z 5 · [Operácia Vlajka](#expedice-bezpeci-sk)

Tu je správa:

`59 4F 44 4D 4E 44 7B 4B 55 44 47 2D 50 44 2D 59 55 56 57 59 42 7D`

Na prvý pohľad šum. V skutočnosti sú to dve vrstvy, jedna cez druhú, a ty ich postupne zlúpneš.

**Vrstva 1: šestnástková sústava (hex).** Počítač ukladá písmená ako čísla podľa tabuľky **ASCII**. Písmeno A má číslo 65, B 66 a tak ďalej až po Z s číslom 90. Programátori tie čísla radi píšu v šestnástkovej sústave: počíta sa 0 – 9 a potom A – F (A = 10, …, F = 15). Dvojica `41` znamená 4 · 16 + 1 = 65, teda A.

**Vrstva 2: Caesar.** Keď čísla prevedieš na písmená, dostaneš text, ktorý ešte nedáva zmysel. Vieš však, ako má začínať.

**Úloha:** nájdi vlajku. Potom odpovedz: prečo ti pri lúštení druhej vrstvy tak pomohlo, že poznáš začiatok správy?

**Nápovedy:** `41` až `5A` sú písmená A až Z. `7B` a `7D` sú zložené zátvorky, `2D` je pomlčka. Vypočítaj, o koľko miest je prvé písmeno posunuté oproti V.

:::reveal 🔑 Riešenie
Vlajka je **VLAJKA{HRAD-MA-VRSTVY}**. Z hexu vyšlo YODMND{KUDG-PD-YUVWYB} a Caesar o 3 miesta späť ho vrátil (Y → V, O → L…). Znalosť začiatku je obrovská výhoda: kryptoanalytici jej hovoria **známy otvorený text** a práve vďaka nej sa v 2. svetovej vojne lámali nemecké šifry. A všimni si: **hex ani Caesar nie sú ochrana**. Hex je len iný zápis, ten prečíta každý. Skutočné šifrovanie potrebuje tajný kľúč, ktorý sa nedá uhádnuť. Na papieri ti to trvalo dlho. V ďalšom kroku to zvládneš za minútu.
:::

**Ďalší krok:** [Kuchyňa CyberChef](#expedice-bezpeci-2-sk)
