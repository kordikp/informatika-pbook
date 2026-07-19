---
id: ch9-vibecoding
type: spine
title: "Vibecoding: appka na zavolání"
readingTime: 3
standalone: true
teaser: "Popíšeš appku větou, AI napíše kód. Zní to jako podvod? Je to dovednost — s háčky."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Co je vibecoding a jaké má riziko?"
recallA: "Tvorba aplikace popisováním záměru AI: ty řídíš a hodnotíš, AI píše kód. Riziko je „iluze, že to umím“ — bez porozumění základům uvízneš, jakmile se něco rozbije, a neodhalíš chyby, které AI udělala."
highlights:
  - "1. Rozmysli, CO chceš — před promptem."
  - "2. Postupuj po krocích, ne najednou."
  - "Vypadá to hotově ≠ je to hotové."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch9-vibecoding
state: core
carriers: prose
---

„Vytvoř mi kvízovou appku o vesmíru: 10 otázek, počítání bodů, na konci vyhodnocení." Odešleš — a za minutu koukáš na funkční appku. Tomuhle stylu tvorby se říká **vibecoding**: popíšeš záměr přirozenou řečí, AI napíše kód, ty zkoušíš, hodnotíš a zadáváš úpravy. Neřídíš každý řádek — řídíš směr.

Zní to jako kouzlo, a upřímně: **je to obrovská věc.** Nápady, na které bys dřív potřeboval roky učení, jsou najednou na dosah odpoledne. Ale pozor — vibecoding není „AI to udělá za mě". Je to řemeslo se svým postupem:

**1. Rozmysli, CO chceš — před promptem.** Tady se potkává všechno, co už umíš: rozlož appku na části (dekompozice), popiš stavy, vstupy a akce (logika aplikace), sepiš zadání s cílem, kontextem a formátem (promptová gramotnost). Mlhavé zadání = mlhavá appka.

**2. Postupuj po krocích, ne najednou.** Nejdřív základní verze. Vyzkoušej. Pak: „přidej odpočítávání času", „ukládej nejlepší skóre". Každý krok otestuj, než přidáš další — jinak nepoznáš, který krok co rozbil.

**3. Zkoušej to rozbít.** Co udělá appka, když nic nevyplníš? Když klepneš dvakrát rychle? AI kód vypadá hotově, ale okrajové případy (kapitola o ladění!) jsou přesně místa, kde se láme. **Vypadá to hotově ≠ je to hotové.**

**4. Čti, co ti AI dala — aspoň rámcově.** Nemusíš rozumět každému řádku. Ale měl bys poznat: kde jsou moje data? Co se odesílá ven? Kde je logika bodování?

A teď to hlavní riziko, které má i jméno: **iluze, že to umím.** Pět minut práce, funkční appka — mozek si připíše zásluhy. Jenže poznáš to v okamžiku, kdy se něco rozbije a AI se zacyklí v nefunkčních opravách: kdo základům nerozumí, uvízl. Kdo rozumí (proměnné, podmínky, stavy — máš je!), přečte kód, najde místo problému a AI nasměruje. **Rozdíl mezi „umím vibecoding" a „umím klikat odešli" je přesně znalost základů z téhle knihy.**

**Zkus to!** V nástroji jako Replit, Lovable nebo v ChatGPT si nech postavit svoji appku z návrhu z minulé sekce — postupem 1–4. Schválně si veď deníček: kolikrát jsi musel zadání upřesnit? Kde AI udělala chybu a jak jsi ji odhalil?

> **Věděl/a jsi?** Termín „vibe coding" zpopularizoval v roce 2025 informatik Andrej Karpathy (spoluzakladatel OpenAI) — popsal jím styl, kdy člověk „odevzdá se vibe" a nechá AI psát. Sám ale dodává, že pro vážné projekty musí člověk kódu rozumět.

Vibecoding je styl práce. V poslední sekci kapitoly se podíváme na konkrétní nástroje, které ho umožňují — a jak si mezi nimi vybrat.
