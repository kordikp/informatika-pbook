---
id: expedice-bezpeci-1
type: spine
title: "Tři vrstvy"
readingTime: 1
standalone: false
teaser: "Tady je zpráva: 59 4F 44 4D 4E 44 7B 4B 55 44 47 2D 50 44 2D 59 55 56 57 59 42 7D Na první pohled šum."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-bezpeci-1
conceptTitle: "Tři vrstvy"
state: edited
carriers: prose
---

**🧩 Výzva** · krok 1 z 5 · [Operace Vlajka](#expedice-bezpeci)

Tady je zpráva:

`59 4F 44 4D 4E 44 7B 4B 55 44 47 2D 50 44 2D 59 55 56 57 59 42 7D`

Na první pohled šum. Ve skutečnosti jsou to dvě vrstvy, jedna přes druhou, a ty je postupně sloupneš.

**Vrstva 1: šestnáctková soustava (hex).** Počítač ukládá písmena jako čísla podle tabulky **ASCII**. Písmeno A má číslo 65, B 66 a tak dál až po Z s číslem 90. Programátoři ta čísla rádi píší v šestnáctkové soustavě: počítá se 0–9 a pak A–F (A = 10, …, F = 15). Dvojice `41` znamená 4 · 16 + 1 = 65, tedy A.

**Vrstva 2: Caesar.** Až čísla převedeš na písmena, dostaneš text, který ještě nedává smysl. Víš ale, jak má začínat.

**Úkol:** najdi vlajku. Pak odpověz: proč ti při luštění druhé vrstvy tolik pomohlo, že znáš začátek zprávy?

**Nápovědy:** `41` až `5A` jsou písmena A až Z. `7B` a `7D` jsou složené závorky, `2D` je pomlčka. Spočítej, o kolik míst je první písmeno posunuté proti V.

:::reveal 🔑 Řešení
Vlajka je **VLAJKA{HRAD-MA-VRSTVY}**. Z hexu vyšlo YODMND{KUDG-PD-YUVWYB} a Caesar o 3 místa zpět ho vrátil (Y → V, O → L…). Znalost začátku je obrovská výhoda: kryptoanalytici jí říkají **známý otevřený text** a právě díky ní se ve 2. světové válce lámaly německé šifry. A všimni si: **hex ani Caesar nejsou ochrana**. Hex je jen jiný zápis, ten přečte každý. Skutečné šifrování potřebuje tajný klíč, který nejde uhodnout. Na papíře ti to trvalo dlouho. V dalším kroku to zvládneš za minutu.
:::

**Další krok:** [Kuchyně CyberChef](#expedice-bezpeci-2)
