---
id: expedice-bezpeci-thinker
type: spine
title: "Matematika šifer: RSA v malém a CryptoHack"
readingTime: 1
standalone: false
teaser: "Jak si můžou poslat tajnou zprávu dva lidé, kteří se nikdy neviděli a nemají společný klíč?"
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
concept: expedice-bezpeci-thinker
conceptTitle: "Matematika šifer: RSA v malém a CryptoHack"
state: edited
carriers: prose|formula
---

**🔬 Odbočka** · [Operace Vlajka](#expedice-bezpeci)

Jak si můžou poslat tajnou zprávu dva lidé, kteří se nikdy neviděli a nemají společný klíč? Odpovědí je **šifra s veřejným klíčem** a nejslavnější z nich je RSA. Zkus ji v malém, na papíře.

Vezmi dvě prvočísla p = 3 a q = 11. Jejich součin n = 33 a veřejný klíč e = 3 smí znát každý. Soukromý klíč d = 7 znáš jen ty.

- **Zašifrování** zprávy m: spočítej zbytek $$m^3$$ po dělení 33. Pro m = 4 vyjde 64 a zbytek je **31**.
- **Dešifrování**: zbytek $$31^7$$ po dělení 33. Vyjde zase **4**.

**Tvoje výzva:** zašifruj m = 2 a pak výsledek rozšifruj. Ověř, že se vrátíš na 2. Pak zkus přijít na to, proč by útočník d snadno spočítal, kdyby znal p a q, a proč jsou skutečná prvočísla dlouhá stovky číslic.

(Řešení: 2³ = 8, zbytek 8; 8⁷ = 2 097 152, zbytek po dělení 33 je 2.)

Dál vede [Introduction to CryptoHack](https://cryptohack.org/courses/intro/): úlohy z kryptografie v Pythonu, zdarma, anglicky. Účet a komunitní Discord jen s rodičem.

**Zpátky na expedici:** [Operace Vlajka](#mission-expedice-bezpeci)
