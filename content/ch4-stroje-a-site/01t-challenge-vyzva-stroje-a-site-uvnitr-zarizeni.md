---
id: vyzva-stroje-a-site-uvnitr-zarizeni
type: challenge
title: "Kuchař čeká na spíž"
level: 2
minutes: 30
readingTime: 2
standalone: true
teaser: "Hra chce 8 GB operační paměti a ty máš rychlý SSD disk."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: uvnitr-zarizeni
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

Hra chce 8 GB operační paměti a ty máš rychlý SSD disk. Proč si hra nebere data rovnou ze spíže? Odpověď není „protože to tak je“. Dá se spočítat.

<!-- task -->

Každé sáhnutí pro data trvá jinak dlouho (ns je nanosekunda, miliardtina sekundy):

| Kde data leží | Čas jednoho přístupu |
|---|---|
| operační paměť (RAM) | 100 ns |
| SSD disk | 100 µs = 100 000 ns |
| klasický pevný disk (HDD) | 10 ms = 10 000 000 ns |
| server na internetu | 50 ms |

1. **Lidské měřítko.** Zvětši čas tak, aby 1 ns trval 1 sekundu. Jak dlouho by trvalo každé sáhnutí? Převeď na minuty, hodiny, dny nebo roky.
2. **Snímek hry.** Hra kreslí 60 snímků za sekundu, na jeden snímek má tedy asi 16,7 ms. Na každý snímek potřebuje přečíst 10 000 malých kousků dat. Spočítej, jak dlouho to trvá z RAM a jak dlouho ze SSD. Kolik snímků za sekundu by hra měla, kdyby četla jen ze SSD?
3. **Sekání.** Otevřeš tolik aplikací, že se do RAM nevejdou. Operační systém je ale nezavře. Co s nimi udělá a proč se pak počítač seká?

**Kritérium úspěchu:** správná čísla v bodech 1 a 2 a vysvětlení v bodě 3, ve kterém je slovo „disk“.

<!-- hint -->

Lidské měřítko: 100 ns se změní na 100 s. Den má 86 400 s a rok asi 31,5 milionu s.

<!-- hint -->

Celkový čas = počet přístupů × čas jednoho přístupu. Pozor na jednotky: 1 ms = 1 000 µs = 1 000 000 ns.

<!-- hint -->

Když se na pracovní desku nic nevejde, odnese vedoucí směny část věcí do spíže. Jak dlouho pak trvá je přinést zpátky?

<!-- solution -->

1. RAM: 100 s, necelé 2 minuty. SSD: 100 000 s, asi 28 hodin. HDD: 10 milionů s, asi 116 dní. Server: 50 milionů s, asi 1,6 roku.
2. Z RAM: 10 000 × 100 ns = 1 ms. Vejde se to do snímku šestnáctkrát. Ze SSD: 10 000 × 100 µs = 1 s na jediný snímek, tedy **1 snímek za sekundu**. Hra by byla nehratelná. Proto má hra **nahrávací obrazovku**: přenese úroveň ze spíže na desku jednou a pak už bere data jen z RAM.
3. Operační systém **odloží** část obsahu RAM na disk (odkládací soubor). Když aplikace ta data znovu potřebuje, musí čekat na disk, který je zhruba tisíckrát pomalejší. Proto se počítač s plnou RAM seká. Pomůže zavřít aplikace nebo přidat RAM. Mazání fotek pomůže jen tehdy, když je plné úložiště.

Poznámka: skutečný SSD čte data po velkých blocích a najednou, takže je v praxi rychlejší než v tomto modelu. Poměr ale zůstává: deska je řádově rychlejší než spíž.

<!-- more -->

Kuchař má ještě menší a rychlejší kapsu u zástěry, **mezipaměť procesoru** (cache): přístup trvá kolem 1 ns. Dopočítej si ji do tabulky. Potom otevři ve Windows správce úloh (Ctrl+Shift+Esc, karta Výkon) a sleduj paměť, zatímco otevíráš záložky. Nebo spusť Linux v prohlížeči na copy.sh/v86 a napiš příkaz free. Jak procesor počítá, si postavíš z hradel ve hře navíc „Jak kuchař počítá“ nebo na nandgame.com.
