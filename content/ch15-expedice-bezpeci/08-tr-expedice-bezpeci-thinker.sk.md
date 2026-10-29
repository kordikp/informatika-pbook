---
id: expedice-bezpeci-thinker-sk
translationOf: expedice-bezpeci-thinker
lang: sk
type: spine
title: "Matematika šifier: RSA v malom a CryptoHack"
readingTime: 1
standalone: false
teaser: "Ako si môžu poslať tajnú správu dvaja ľudia, ktorí sa nikdy nevideli a nemajú spoločný kľúč?"
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
concept: expedice-bezpeci-thinker
conceptTitle: "Matematika šifier: RSA v malom a CryptoHack"
objective: "Ako si môžu poslať tajnú správu dvaja ľudia, ktorí sa nikdy nevideli a nemajú spoločný kľúč?"
state: edited
carriers: prose|formula
---

**🔬 Odbočka** · [Operácia Vlajka](#expedice-bezpeci-sk)

Ako si môžu poslať tajnú správu dvaja ľudia, ktorí sa nikdy nevideli a nemajú spoločný kľúč? Odpoveďou je **šifra s verejným kľúčom** a najslávnejšia z nich je RSA. Skús ju v malom, na papieri.

Vezmi dve prvočísla p = 3 a q = 11. Ich súčin n = 33 a verejný kľúč e = 3 smie poznať každý. Súkromný kľúč d = 7 poznáš len ty.

- **Zašifrovanie** správy m: vypočítaj zvyšok $$m^3$$ po delení 33. Pre m = 4 vyjde 64 a zvyšok je **31**.
- **Dešifrovanie**: zvyšok $$31^7$$ po delení 33. Vyjde zase **4**.

**Tvoja výzva:** zašifruj m = 2 a potom výsledok rozšifruj. Over, že sa vrátiš na 2. Potom skús prísť na to, prečo by útočník d ľahko vypočítal, keby poznal p a q, a prečo sú skutočné prvočísla dlhé stovky číslic.

(Riešenie: 2³ = 8, zvyšok 8; 8⁷ = 2 097 152, zvyšok po delení 33 je 2.)

Ďalej vedie [Introduction to CryptoHack](https://cryptohack.org/courses/intro/): úlohy z kryptografie v Pythone, zadarmo, po anglicky. Účet a komunitný Discord len s rodičom.

**Späť na expedíciu:** [Operácia Vlajka](#mission-expedice-bezpeci)
