---
id: svet-aplikace-tabulka-a-evidence
type: spine
title: "Appka z tabulky"
readingTime: 1
standalone: true
teaser: "Spousta appek je uvnitř obyčejná tabulka. Nástroj jako Glide z ní za odpoledne udělá appku s vyhledáváním, filtrem a tlačítky."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co je v tabulce evidence řádek a co sloupec a proč potřebuje pravidla zápisu?"
recallA: "Řádek je jeden záznam (jedna výpůjčka), sloupec jedna vlastnost (kniha, žák, datum). Bez jednotných pravidel nejde data spolehlivě filtrovat ani počítat."
lang: cs
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: tabulka-a-evidence
state: edited
highlights:
  - "Záznam (řádek) a vlastnost (sloupec); strukturovaná vs. nestrukturovaná data"
  - "Pravidla pro záznamy: jednotný formát, žádné duplicity, povinné údaje"
  - "Řazení, filtr a funkce (součet, počet) odpovídají na otázky"
carriers: prose|image
---

Spousta appek je uvnitř obyčejná tabulka. Nástroj jako Glide z ní za odpoledne udělá appku s vyhledáváním, filtrem a tlačítky.

Třídní knihovnička: kdo si půjčil kterou knihu a kdy ji vrátí. V tabulce je **každý řádek jeden záznam**, jedna výpůjčka, a **každý sloupec jedna vlastnost**: kniha, žák, datum půjčení, vráceno. Takovým datům se říká **strukturovaná**, každý údaj má své místo. Appka pak z řádků udělá kartičky a ze sloupců políčka formuláře.

![Tabulka výpůjček a appka, která z ní vznikla](images/svet-aplikace-tabulka.svg)

Appka ale funguje, jen když tabulka drží **pravidla zápisu**:

- **Jednotný formát:** datum vždy jako 3. 11. 2026, ne jednou „3.11.“ a jindy „v pondělí“. Jinak appka nepozná, kdo je po termínu.
- **Žádné duplicity:** když je Ondra jednou *Ondra* a jednou *Ondřej Novák*, appka z něj udělá dva lidi.
- **Povinné údaje:** výpůjčka bez jména žáka je kniha, která zmizela.

Proto mají formuláře v appkách rozbalovací seznamy a kalendáře místo volného textu: pravidla hlídají za tebe.

Pak teprve přijde to užitečné. **Filtr** ukáže jen nevrácené knihy, **řazení** podle data dá nejdéle půjčené nahoru a **funkce** spočítají odpovědi: *počet* výpůjček za měsíc, *součet* knih u jednoho žáka. Na otázku „kdo má knihy po termínu?“ odpoví tabulka za vteřinu. V hromadě volných poznámek, tedy **nestrukturovaných** dat, bys to hledal půl hodiny.

**Zkus to!** Navrhni tabulku pro appku na půjčování míčů v tělocvičně. Jaké sloupce bude mít, které budou povinné a jaký formát musí mít datum?

**Dál ve světě aplikací:** → [Kdo smí co ve třídní appce](#svet-aplikace-informacni-system)
