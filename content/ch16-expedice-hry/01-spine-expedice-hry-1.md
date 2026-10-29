---
id: expedice-hry-1
type: spine
title: "⭐ Náhoda, která hraje fér"
readingTime: 1
standalone: false
teaser: "Počítač nemá kostku."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-hry-1
conceptTitle: "⭐ Náhoda, která hraje fér"
state: edited
carriers: prose|formula
---

**🧩 Výzva** · krok 1 z 5 · [Víkend, kdy vznikla hra](#expedice-hry)

Počítač nemá kostku. „Náhodná“ čísla počítá vzorcem z předchozího čísla. První číslo se jmenuje **semínko** (anglicky *seed*). Stejné semínko dá vždy stejnou řadu, a proto stejnou úroveň.

Vaše hra používá vzorec:

$$n_{další} = (5 \cdot n + 3) \bmod 16$$

„mod 16“ znamená zbytek po dělení šestnácti. Mezera mezi plošinami je `40 + 5 × n` pixelů a postava přeskočí nejvýš 100 px.

1. Spočítej prvních pět čísel pro semínko 7.
2. Počítej dál. Po kolika číslech se řada začne opakovat? Objeví se v ní všechna čísla od 0 do 15?
3. Která čísla vyrobí mezeru, kterou nejde přeskočit? Kolik takových mezer je v jednom celém kole řady?
4. Uprav vzorec pro mezeru tak, aby byla vždy od 40 do 100 px a každé číslo dalo jinou mezeru.
5. Ema našla neprůchodnou mezeru. Proč je semínko pro hledání chyby lepší než skutečná náhoda?

**Kritérium úspěchu:** celá řada až do opakování, seznam špatných čísel, opravený vzorec, u kterého ověříš nejmenší i největší mezeru, a jedna věta k bodu 5.

**Kontrola:** první číslo je 6.

**Jdi ještě dál:** Tetris nelosuje kostky jednu po druhé. Zamíchá všech sedm tvarů jako balíček karet a rozdá je, pak míchá znovu. Spočítej, kolik nejvýš tahů můžeš čekat na stejný tvar. U čistě náhodného losování na něj můžeš čekat libovolně dlouho. Proč je balíček fér?

**Další krok:** [🛠️ První hra v Godotu za 30 minut](#expedice-hry-2)
