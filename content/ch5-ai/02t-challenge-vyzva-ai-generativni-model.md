---
id: vyzva-ai-generativni-model
type: challenge
title: "Jazykový model ze tří vět"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Postavíš si vlastní jazykový model."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: generativni-model
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Postavíš si vlastní jazykový model. Naučí se jen ze tří pravdivých vět, a přesto s jistotou napíše nepravdu. Pak spočítáš, jak moc je to pravděpodobné, a zjistíš, co by ho zachránilo.

<!-- task -->

Trénovací text:

> Praha je hlavní město Česka. Vídeň je hlavní město Rakouska. Brno je druhé největší město Česka.

Tvůj model vidí vždy jen **jedno předchozí slovo**. Pravděpodobnost dalšího slova je počet, kolikrát v textu následuje, děleno počtem, kolikrát se objevilo předchozí slovo.

1. Spočítej pravděpodobnosti slov po „je“ a po „město“.
2. Model začíná slovem „Vídeň“ a píše, dokud nenapíše název země. Vždy vybírá nejpravděpodobnější slovo. Jakou větu napíše? Je pravdivá?
3. Teď model **losuje** podle pravděpodobností. Vypiš všechny věty, které může napsat, a spočítej jejich pravděpodobnosti. S jakou šancí napíše o Vídni pravdu?
4. Kolik předchozích slov by model musel vidět, aby v posledním kroku nejpravděpodobnější věty věděl, že jde o Vídeň?

<!-- hint -->

Slovo „je“ je v textu třikrát. Dvakrát po něm následuje „hlavní“. Po „hlavní“ a „největší“ přijde vždy „město“.

<!-- hint -->

Pravděpodobnost celé věty je **součin** pravděpodobností jednotlivých kroků. Možné věty jsou čtyři a jejich pravděpodobnosti dají dohromady 1.

<!-- hint -->

Když model vybírá poslední slovo, vidí jen „město“. Kolik slov zpátky leží „Vídeň“?

<!-- solution -->

**1.** Po „je“: hlavní 2/3, druhé 1/3. Po „město“: Česka 2/3, Rakouska 1/3.

**2.** „Vídeň je hlavní město **Česka**.“ Nepravda, i když každý krok byl nejpravděpodobnější. To je halucinace v malém: plynulé a sebejisté, ale nikdo to neověřil.

**3.**
| věta | výpočet | pravděpodobnost |
|---|---|---|
| Vídeň je hlavní město Česka | 2/3 · 2/3 | 4/9 |
| Vídeň je hlavní město Rakouska | 2/3 · 1/3 | 2/9 |
| Vídeň je druhé největší město Česka | 1/3 · 2/3 | 2/9 |
| Vídeň je druhé největší město Rakouska | 1/3 · 1/3 | 1/9 |

Pravdivá je jen druhá věta (Vídeň je největší, ne druhá největší). Šance na pravdu je **2/9 ≈ 22 %**.

**4.** **Čtyři** slova: „Vídeň je hlavní město“. Taková čtveřice je v textu jen jednou a následuje po ní „Rakouska“. Delší kontext tedy pomůže, jenže model pak hlavně opakuje naučené věty a potřebuje mnohem víc dat.

<!-- more -->

Skutečné modely vidí tisíce předchozích tokenů a mechanismus **pozornosti** (anglicky attention) jim říká, na které z nich se dívat. Proto si „Vídeň“ pamatují. Halucinace ale nezmizí: když v datech fakt chybí nebo je vzácný, pravděpodobné pokračování pořád nemusí být pravdivé. Napiš si tenhle model jako program ve Scratchi nebo v Pythonu a nakrm ho delším textem, třeba pohádkou. Pak se podívej do skutečného GPT-2 v [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) (anglicky) a najdi, kde ukazuje pravděpodobnosti dalšího tokenu.
