---
id: expedice-hry-1-sk
translationOf: expedice-hry-1
lang: sk
type: spine
title: "⭐ Náhoda, ktorá hrá fér"
readingTime: 1
standalone: false
teaser: "Počítač nemá kocku."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-hry-1
conceptTitle: "⭐ Náhoda, ktorá hrá fér"
objective: "Počítač nemá kocku."
state: edited
carriers: prose|formula
---

**🧩 Výzva** · krok 1 z 5 · [Víkend, keď vznikla hra](#expedice-hry-sk)

Počítač nemá kocku. „Náhodné“ čísla počíta vzorcom z predchádzajúceho čísla. Prvé číslo sa volá **semienko** (po anglicky *seed*). Rovnaké semienko dá vždy rovnaký rad, a preto rovnakú úroveň.

Vaša hra používa vzorec:

$$n_{ďalšie} = (5 \cdot n + 3) \bmod 16$$

„mod 16“ znamená zvyšok po delení šestnástimi. Medzera medzi plošinami je `40 + 5 × n` pixelov a postava preskočí najviac 100 px.

1. Spočítaj prvých päť čísel pre semienko 7.
2. Počítaj ďalej. Po koľkých číslach sa rad začne opakovať? Objavia sa v ňom všetky čísla od 0 do 15?
3. Ktoré čísla vyrobia medzeru, ktorú nejde preskočiť? Koľko takých medzier je v jednom celom kole radu?
4. Uprav vzorec pre medzeru tak, aby bola vždy od 40 do 100 px a každé číslo dalo inú medzeru.
5. Ema našla nepriechodnú medzeru. Prečo je semienko na hľadanie chyby lepšie ako skutočná náhoda?

**Kritérium úspechu:** celý rad až po opakovanie, zoznam zlých čísel, opravený vzorec, pri ktorom overíš najmenšiu aj najväčšiu medzeru, a jedna veta k bodu 5.

**Kontrola:** prvé číslo je 6.

**Choď ešte ďalej:** Tetris nelosuje dieliky jeden po druhom. Zamieša všetkých sedem tvarov ako balíček kariet a rozdá ich, potom mieša znova. Spočítaj, koľko najviac ťahov môžeš čakať na rovnaký tvar. Pri čisto náhodnom losovaní naň môžeš čakať ľubovoľne dlho. Prečo je balíček fér?

**Ďalší krok:** [🛠️ Prvá hra v Godote za 30 minút](#expedice-hry-2-sk)
