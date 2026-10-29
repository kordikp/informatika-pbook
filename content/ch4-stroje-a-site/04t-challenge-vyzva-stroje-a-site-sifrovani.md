---
id: vyzva-stroje-a-site-sifrovani
type: challenge
title: "Klíč domluvený nahlas"
level: 3
minutes: 40
readingTime: 3
standalone: true
teaser: "Caesar má háček: obě strany musí znát stejný klíč."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: sifrovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

Caesar má háček: obě strany musí znát stejný klíč. Jak se ale tvůj prohlížeč domluví na tajném klíči se serverem, který nikdy nepotkal, když každý router po cestě čte, co si říkáte? V roce 1976 na to dva matematici přišli. A ty to teď spočítáš na papíře.

<!-- task -->

Budeš potřebovat **zbytek po dělení**: 17 mod 5 = 2, protože 17 = 3 × 5 + 2. Funguje to jako ručička na hodinách.

Veřejně, tedy nahlas, se ty a Ema dohodnete na číslech **p = 23** a **g = 5**. Každý si pak tajně zvolí svoje číslo: ty **a = 6**, Ema **b = 15**.

1. Spočítej A = 5^6 mod 23 a pošli ho nahlas.
2. Ema pošle nahlas B = 5^15 mod 23. Ověř, že vyjde 19.
3. Spočítej klíč K = B^6 mod 23. Ema spočítá A^15 mod 23. Ověř, že vám vyjde stejné číslo.
4. Tomáš celou dobu poslouchal a zná čísla 23, 5, A a 19. Najdi postup, jak by klíč získal. Pak vysvětli, proč ve skutečném https nemá šanci, když má p kolem 600 číslic.

**Kritérium úspěchu:** A = 8, K vyjde oběma stejně a útok v bodě 4 je popsaný i se zdůvodněním, proč u velkého p selže.

<!-- hint -->

Mocninu nepočítej celou. Násob postupně a po každém násobení si nech jen zbytek po dělení 23. Například 5^2 = 25, to je mod 23 rovno 2, a 5^3 = 2 × 5 = 10.

<!-- hint -->

Proč vyjde stejně: B^a = (5^b)^a a A^b = (5^a)^b. Obojí je 5 na (a × b).

<!-- hint -->

Tomáš zná 5 a A. Ať zkouší mocniny 5 jednu po druhé, dokud nevyjde A. Kolik pokusů to dá u čísla 23 a kolik u čísla s 600 číslicemi?

<!-- solution -->

1. Mocniny 5 mod 23: 5, 2, 10, 4, 20, 8. Takže **A = 8**.
2. 5^4 = 4 a 5^8 = 16. Pak 5^15 = 5^8 × 5^4 × 5^2 × 5 = 16 × 4 × 2 × 5 = 640, a 640 mod 23 = **19**.
3. Ty: 19^2 = 361, mod 23 je 16. 19^3 = 16 × 19 = 304, mod 23 je 5. 19^6 = 5^2 = 25, mod 23 je **2**. Ema: 8^2 mod 23 = 18, 8^4 = 2, 8^8 = 4, 8^15 = 4 × 2 × 18 × 8 = 1 152, mod 23 je **2**. Klíč **K = 2**.
4. Tomáš zkouší 5^1, 5^2, … a už v šestém kroku dostane 8, takže zjistí a = 6 a spočítá klíč. U p se 600 číslicemi je ale možností asi 10^600. Ani miliarda počítačů, z nichž každý zkusí miliardu možností za sekundu, by za celý věk vesmíru nezkusila víc než asi 10^36 možností. Skutečné útoky jsou chytřejší než zkoušení všeho, ale ani ony na tak velká čísla nestačí.

Pozor: domluva klíče ještě neříká, **s kým** mluvíš. To ověřuje certifikát serveru. Ten zaručí, že mluvíš se serverem té domény. Neříká ale, jestli je web poctivý.

<!-- more -->

Vysvětli trik kamarádovi bez čísel, jako míchání barev: společná žlutá, každý přimíchá svou tajnou barvu, směsi si vyměníte a každý přidá svou tajnou barvu ještě jednou. Výsledek je stejný, ale ze směsí se tajné barvy oddělit nedají. Pak zkus vlastní p a g. Ne každé g funguje dobře: zjisti, proč je g = 1 u p = 23 špatná volba.
