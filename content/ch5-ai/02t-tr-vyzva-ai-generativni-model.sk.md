---
id: vyzva-ai-generativni-model-sk
translationOf: vyzva-ai-generativni-model
lang: sk
type: challenge
title: "Jazykový model z troch viet"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Postavíš si vlastný jazykový model."
voice: universal
parent: null
diagram: null
core: false
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

Postavíš si vlastný jazykový model. Naučí sa len z troch pravdivých viet, a predsa s istotou napíše nepravdu. Potom vypočítaš, nakoľko je to pravdepodobné, a zistíš, čo by ho zachránilo.

<!-- task -->

Trénovací text:

> Praha je hlavné mesto Česka. Viedeň je hlavné mesto Rakúska. Brno je druhé najväčšie mesto Česka.

Tvoj model vidí vždy len **jedno predchádzajúce slovo**. Pravdepodobnosť ďalšieho slova je počet, koľkokrát v texte nasleduje, delený počtom, koľkokrát sa objavilo predchádzajúce slovo.

1. Vypočítaj pravdepodobnosti slov po „je“ a po „mesto“.
2. Model začína slovom „Viedeň“ a píše, kým nenapíše názov krajiny. Vždy vyberá najpravdepodobnejšie slovo. Akú vetu napíše? Je pravdivá?
3. Teraz model **losuje** podľa pravdepodobností. Vypíš všetky vety, ktoré môže napísať, a vypočítaj ich pravdepodobnosti. S akou šancou napíše o Viedni pravdu?
4. Koľko predchádzajúcich slov by model musel vidieť, aby v poslednom kroku najpravdepodobnejšej vety vedel, že ide o Viedeň?

<!-- hint -->

Slovo „je“ je v texte trikrát. Dvakrát po ňom nasleduje „hlavné“. Po „hlavné“ a „najväčšie“ príde vždy „mesto“.

<!-- hint -->

Pravdepodobnosť celej vety je **súčin** pravdepodobností jednotlivých krokov. Možné vety sú štyri a ich pravdepodobnosti dajú spolu 1.

<!-- hint -->

Keď model vyberá posledné slovo, vidí len „mesto“. Koľko slov dozadu leží „Viedeň“?

<!-- solution -->

**1.** Po „je“: hlavné 2/3, druhé 1/3. Po „mesto“: Česka 2/3, Rakúska 1/3.

**2.** „Viedeň je hlavné mesto **Česka**.“ Nepravda, hoci každý krok bol najpravdepodobnejší. To je halucinácia v malom: plynulé a sebaisté, ale nikto to neoveril.

**3.**
| veta | výpočet | pravdepodobnosť |
|---|---|---|
| Viedeň je hlavné mesto Česka | 2/3 · 2/3 | 4/9 |
| Viedeň je hlavné mesto Rakúska | 2/3 · 1/3 | 2/9 |
| Viedeň je druhé najväčšie mesto Česka | 1/3 · 2/3 | 2/9 |
| Viedeň je druhé najväčšie mesto Rakúska | 1/3 · 1/3 | 1/9 |

Pravdivá je len druhá veta (Viedeň je najväčšia, nie druhá najväčšia). Šanca na pravdu je **2/9 ≈ 22 %**.

**4.** **Štyri** slová: „Viedeň je hlavné mesto“. Taká štvorica je v texte len raz a nasleduje po nej „Rakúska“. Dlhší kontext teda pomôže, lenže model potom hlavne opakuje naučené vety a potrebuje oveľa viac dát.

<!-- more -->

Skutočné modely vidia tisíce predchádzajúcich tokenov a mechanizmus **pozornosti** (anglicky attention) im hovorí, na ktoré z nich sa pozerať. Preto si „Viedeň“ pamätajú. Halucinácie však nezmiznú: keď v dátach fakt chýba alebo je zriedkavý, pravdepodobné pokračovanie stále nemusí byť pravdivé. Napíš si tento model ako program v Scratchi alebo v Pythone a nakŕm ho dlhším textom, napríklad rozprávkou. Potom sa pozri do skutočného GPT-2 v [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) (anglicky) a nájdi, kde ukazuje pravdepodobnosti ďalšieho tokenu.
