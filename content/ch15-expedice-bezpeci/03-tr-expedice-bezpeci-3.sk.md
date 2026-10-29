---
id: expedice-bezpeci-3-sk
translationOf: expedice-bezpeci-3
lang: sk
type: spine
title: "Heslo, ktoré nikto nevidí"
readingTime: 1
standalone: false
teaser: "Služba Have I Been Pwned zbiera heslá z verejných únikov, stovky miliónov hesiel."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-bezpeci-3
conceptTitle: "Heslo, ktoré nikto nevidí"
objective: "Služba Have I Been Pwned zbiera heslá z verejných únikov, stovky miliónov hesiel."
state: edited
carriers: prose
---

**🔍 Rozbor** · krok 3 z 5 · [Operácia Vlajka](#expedice-bezpeci-sk)

Služba **Have I Been Pwned** zbiera heslá z verejných únikov, stovky miliónov hesiel. Vie ti povedať, či je tvoje heslo medzi nimi. A pritom ho nikdy nedostane. Ako?

Rozbor napísal sám autor služby Troy Hunt: [Understanding Have I Been Pwned's Use of SHA-1 and k-Anonymity](https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/) (po anglicky, pomôže prekladač).

**Postup v skratke:**

1. Tvoj počítač vypočíta z hesla **odtlačok** SHA-1: 40 znakov z 0 – 9 a A – F. Z cvičného hesla `P@ssw0rd` vyjde odtlačok, ktorý začína `21BD1`.
2. Na server pošle **len prvých 5 znakov** odtlačku.
3. Server vráti všetky odtlačky z únikov, ktoré takto začínajú. Sú ich stovky.
4. Tvoj počítač zvyšok porovná sám, u seba.

**Otázky k rozboru:**

- **a)** Koľko rôznych začiatkov z 5 znakov môže existovať? Každý znak má 16 možností.
- **b)** Server pozná len `21BD1`. Prečo mu to nestačí, aby spoznal tvoje heslo?
- **c)** Čo by sa pokazilo, keby sa posielal celý odtlačok?
- **d)** Prečo výsledok „nenájdené“ neznamená, že je heslo dobré? Spomeň si na `Tr4mvaj2013`.

**Over si to:** v CyberChef použi operáciu **SHA1** na `P@ssw0rd` a skontroluj, že odtlačok naozaj začína 21BD1.

:::reveal 🔑 Riešenie
- **a)** 16⁵ = 1 048 576 začiatkov.
- **b)** Ku každému začiatku patria stovky uniknutých odtlačkov a k tomu nespočetne veľa hesiel, ktoré nikdy neunikli. Server nespozná, ktoré z nich je tvoje.
- **c)** S celým odtlačkom by server, alebo ktokoľvek, kto spojenie odpočúva, spoznal presne tvoje heslo, ak už niekedy uniklo.
- **d)** Zoznam obsahuje len heslá, ktoré už unikli. Slabé heslo, ktoré zatiaľ neuniklo, útočník aj tak uhádne za zlomok sekundy. Tomuto triku sa hovorí **k-anonymita**: tvoja požiadavka sa schová medzi stovky iných. Rovnaký nápad chráni aj dáta v digitálnej stope.
:::

**Ďalší krok:** [Nájdi svoju súťaž](#expedice-bezpeci-4-sk)
