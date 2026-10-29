---
id: expedice-bezpeci-3
type: spine
title: "Heslo, které nikdo nevidí"
readingTime: 1
standalone: false
teaser: "Služba Have I Been Pwned sbírá hesla z veřejných úniků, stovky milionů hesel."
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
concept: expedice-bezpeci-3
conceptTitle: "Heslo, které nikdo nevidí"
state: edited
carriers: prose
---

**🔍 Rozbor** · krok 3 z 5 · [Operace Vlajka](#expedice-bezpeci)

Služba **Have I Been Pwned** sbírá hesla z veřejných úniků, stovky milionů hesel. Umí ti říct, jestli je tvoje heslo mezi nimi. A přitom ho nikdy nedostane. Jak?

Rozbor napsal sám autor služby Troy Hunt: [Understanding Have I Been Pwned's Use of SHA-1 and k-Anonymity](https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/) (anglicky, pomůže překladač).

**Postup v kostce:**

1. Tvůj počítač spočítá z hesla **otisk** SHA-1: 40 znaků z 0–9 a A–F. Z cvičného hesla `P@ssw0rd` vyjde otisk, který začíná `21BD1`.
2. Na server pošle **jen prvních 5 znaků** otisku.
3. Server vrátí všechny otisky z úniků, které takhle začínají. Jsou jich stovky.
4. Tvůj počítač zbytek porovná sám, u sebe.

**Otázky k rozboru:**

- **a)** Kolik různých začátků z 5 znaků může existovat? Každý znak má 16 možností.
- **b)** Server zná jen `21BD1`. Proč mu to nestačí, aby poznal tvoje heslo?
- **c)** Co by se pokazilo, kdyby se posílal celý otisk?
- **d)** Proč výsledek „nenalezeno“ neznamená, že je heslo dobré? Vzpomeň si na `Tr4mvaj2013`.

**Ověř si to:** v CyberChef použij operaci **SHA1** na `P@ssw0rd` a zkontroluj, že otisk opravdu začíná 21BD1.

:::reveal 🔑 Řešení
- **a)** 16⁵ = 1 048 576 začátků.
- **b)** Ke každému začátku patří stovky uniklých otisků a k tomu nespočet hesel, která nikdy neunikla. Server nepozná, které z nich je tvoje.
- **c)** S celým otiskem by server, nebo kdokoli, kdo spojení odposlouchá, poznal přesně tvoje heslo, pokud už někdy uniklo.
- **d)** Seznam obsahuje jen hesla, která už unikla. Slabé heslo, které zatím neuniklo, útočník stejně uhodne za zlomek sekundy. Tomuhle triku se říká **k-anonymita**: tvůj dotaz se schová mezi stovky jiných. Stejný nápad chrání i data v digitální stopě.
:::

**Další krok:** [Najdi svou soutěž](#expedice-bezpeci-4)
