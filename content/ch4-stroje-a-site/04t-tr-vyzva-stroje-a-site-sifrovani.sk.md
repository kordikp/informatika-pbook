---
id: vyzva-stroje-a-site-sifrovani-sk
translationOf: vyzva-stroje-a-site-sifrovani
lang: sk
type: challenge
title: "Kľúč dohodnutý nahlas"
level: 3
minutes: 40
readingTime: 3
standalone: true
teaser: "Caesar má háčik: obe strany musia poznať rovnaký kľúč."
voice: universal
parent: null
diagram: null
core: false
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

Caesar má háčik: obe strany musia poznať rovnaký kľúč. Ako sa však tvoj prehliadač dohodne na tajnom kľúči so serverom, ktorý nikdy nestretol, keď každý router po ceste číta, čo si hovoríte? V roku 1976 na to prišli dvaja matematici. A ty to teraz vypočítaš na papieri.

<!-- task -->

Budeš potrebovať **zvyšok po delení**: 17 mod 5 = 2, pretože 17 = 3 × 5 + 2. Funguje to ako ručička na hodinách.

Verejne, teda nahlas, sa ty a Ema dohodnete na číslach **p = 23** a **g = 5**. Každý si potom tajne zvolí svoje číslo: ty **a = 6**, Ema **b = 15**.

1. Vypočítaj A = 5^6 mod 23 a pošli ho nahlas.
2. Ema pošle nahlas B = 5^15 mod 23. Over, že vyjde 19.
3. Vypočítaj kľúč K = B^6 mod 23. Ema vypočíta A^15 mod 23. Over, že vám vyjde rovnaké číslo.
4. Tomáš celý čas počúval a pozná čísla 23, 5, A a 19. Nájdi postup, ako by kľúč získal. Potom vysvetli, prečo v skutočnom https nemá šancu, keď má p okolo 600 číslic.

**Kritérium úspechu:** A = 8, K vyjde obom rovnako a útok v bode 4 je opísaný aj so zdôvodnením, prečo pri veľkom p zlyhá.

<!-- hint -->

Mocninu nepočítaj celú. Násob postupne a po každom násobení si nechaj len zvyšok po delení 23. Napríklad 5^2 = 25, to je mod 23 rovné 2, a 5^3 = 2 × 5 = 10.

<!-- hint -->

Prečo vyjde rovnako: B^a = (5^b)^a a A^b = (5^a)^b. Oboje je 5 na (a × b).

<!-- hint -->

Tomáš pozná 5 a A. Nech skúša mocniny 5 jednu po druhej, kým nevyjde A. Koľko pokusov to dá pri čísle 23 a koľko pri čísle so 600 číslicami?

<!-- solution -->

1. Mocniny 5 mod 23: 5, 2, 10, 4, 20, 8. Takže **A = 8**.
2. 5^4 = 4 a 5^8 = 16. Potom 5^15 = 5^8 × 5^4 × 5^2 × 5 = 16 × 4 × 2 × 5 = 640, a 640 mod 23 = **19**.
3. Ty: 19^2 = 361, mod 23 je 16. 19^3 = 16 × 19 = 304, mod 23 je 5. 19^6 = 5^2 = 25, mod 23 je **2**. Ema: 8^2 mod 23 = 18, 8^4 = 2, 8^8 = 4, 8^15 = 4 × 2 × 18 × 8 = 1 152, mod 23 je **2**. Kľúč **K = 2**.
4. Tomáš skúša 5^1, 5^2, … a už v šiestom kroku dostane 8, takže zistí a = 6 a vypočíta kľúč. Pri p so 600 číslicami je však možností asi 10^600. Ani miliarda počítačov, z ktorých každý skúsi miliardu možností za sekundu, by za celý vek vesmíru neskúsila viac než asi 10^36 možností. Skutočné útoky sú múdrejšie než skúšanie všetkého, ale ani ony na také veľké čísla nestačia.

Pozor: dohoda kľúča ešte nehovorí, **s kým** hovoríš. To overuje certifikát servera. Ten zaručí, že hovoríš so serverom tej domény. Nehovorí však, či je web poctivý.

<!-- more -->

Vysvetli trik kamarátovi bez čísel, ako miešanie farieb: spoločná žltá, každý primieša svoju tajnú farbu, zmesi si vymeníte a každý pridá svoju tajnú farbu ešte raz. Výsledok je rovnaký, ale zo zmesí sa tajné farby oddeliť nedajú. Potom skús vlastné p a g. Nie každé g funguje dobre: zisti, prečo je g = 1 pri p = 23 zlá voľba.
