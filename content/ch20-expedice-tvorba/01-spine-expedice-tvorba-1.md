---
id: expedice-tvorba-1
type: spine
title: "Hvězda, která se zavře"
readingTime: 2
standalone: false
teaser: "V knize kreslí želva hvězdu příkazem opakuj n [dopředu 100 vpravo úhel]."
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
concept: expedice-tvorba-1
conceptTitle: "Hvězda, která se zavře"
state: edited
carriers: prose
---

**🧩 Výzva** · krok 1 z 5 · [Znělka pro filmový večer](#expedice-tvorba)

V knize kreslí želva hvězdu příkazem `opakuj n [dopředu 100 vpravo úhel]`. Hvězda s **n** cípy, při které želva obkrouží střed **k**-krát, má úhel **360 · k : n**. Pěticípá hvězda: n = 5, k = 2, úhel 144°. Když je k = 1, vznikne obyčejný mnohoúhelník.

**Úkoly:**
1. Pro n = 7 vyzkoušej všechna k od 1 do 6. Kolik **různých** tvarů dostaneš? Proč ne šest?
2. Pro n = 6 a k = 2 se stane něco divného. Co přesně želva nakreslí a proč?
3. Najdi pravidlo: kdy nakreslí želva jedním tahem všech n cípů a kdy se vrátí na start dřív?
4. Navrhni logo s 12 cípy jedním tahem, co nejostřejší. Napiš program.

**Kritérium úspěchu:** správný počet tvarů pro n = 7 se zdůvodněním, vysvětlení případu n = 6, obecné pravidlo, které platí pro jakékoli n a k, a funkční program pro 12 cípů.

:::reveal 💡 Nápověda pro bod 3
Zkus si případy, které se pokazí, zapsat do tabulky (n, k, kolik cípů opravdu vzniklo). Co mají čísla v těch řádcích společného? Pomůže ti i hra „Želva maluje: hvězdy, květy a rozety“.
:::

:::reveal 🔑 Řešení
1. Pro n = 7 dají k = 1 až 6 jen **tři** různé tvary: sedmiúhelník (k = 1 nebo 6), plochou hvězdu (k = 2 nebo 5) a ostrou hvězdu (k = 3 nebo 4). Dvojice k a n − k je tentýž tvar, jen se kreslí opačným směrem.
2. Pro n = 6, k = 2 je úhel 120°: želva nakreslí trojúhelník, vrátí se po třech krocích a obtáhne ho podruhé. Šest cípů nevznikne.
3. Všech n cípů jedním tahem vznikne, právě když **n a k nemají společného dělitele kromě 1**.
4. Pro 12 cípů to splňuje k = 5 (úhel 150°), ostrou hvězdu nakreslí `opakuj 12 [dopředu 100 vpravo 150]`. Logo večera máte hotové.
:::

**Další krok:** [Pozadí z kódu za 30 minut](#expedice-tvorba-2)
