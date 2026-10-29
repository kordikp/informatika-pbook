---
id: vyzva-socialni-sifrovani
type: challenge
title: "Klíč, který nikdo neslyšel"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Ema chce psát Tomášovi tajně, ale každé jejich slovo prochází serverem."
voice: universal
parent: svet-socialni-sifrovani
diagram: null
core: false
lang: cs
status: accepted
concept: sifrovani
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|formula
---

Ema chce psát Tomášovi tajně, ale každé jejich slovo prochází serverem. Jak se dohodnou na klíči, když je slyší celý svět? Tvoje chatovací appka tohle řeší pokaždé, když začneš nový chat. A ty to teď spočítáš na kalkulačce.

<!-- task -->

Recept se jmenuje **Diffieho–Hellmanova výměna klíčů**. Tady je zmenšený na malá čísla. Zápis „mod 23“ znamená „zbytek po dělení 23“.

- Veřejně (server to vidí) se dohodnou na číslech **23** a **5**.
- Ema si v duchu vybere tajné **a = 4**, Tomáš tajné **b = 3**.
- Ema pošle $A = 5^a \bmod 23$, Tomáš pošle $B = 5^b \bmod 23$.
- Ema spočítá $B^a \bmod 23$, Tomáš $A^b \bmod 23$. To je jejich společný klíč.

1. Spočítej A, B a oba klíče. Vyjdou stejně? Proč?
2. Teď jsi server. Vidíš jen 23, 5, A a B. Zjisti Emino tajné číslo i společný klíč. Kolik pokusů potřebuješ? A proč by to nešlo, kdyby čísla měla stovky číslic?
3. Server je zlý. Vybere si tajné **m = 2** a místo A pošle Tomášovi a místo B Emě svoje číslo $M = 5^2 \bmod 23$. Jaký klíč spočítá Ema, jaký Tomáš a zná je server? Jak Ema s Tomášem podvod odhalí?

<!-- hint -->

$5^4 = 625$ a $625 = 27 \cdot 23 + 4$, takže A = 4. B spočítáš stejně z $5^3 = 125$.

<!-- hint -->

Server zkouší $5^1, 5^2, 5^3, \dots$ (mod 23), dokud nevyjde A. Každou další mocninu získáš z předchozí: vynásob 5 a vezmi zbytek po dělení 23.

<!-- hint -->

V úkolu 3 počítá Ema $M^a$ a Tomáš $M^b$. Server s Emou počítá $A^m$ a s Tomášem $B^m$.

<!-- solution -->

**1.** A = 4, B = 125 mod 23 = **10**. Ema: $10^4 = 10\,000$, zbytek po dělení 23 je **18**. Tomáš: $4^3 = 64$, zbytek **18**. Stejně, protože oba ve skutečnosti spočítali $5^{a \cdot b} = 5^{12} \bmod 23$, jen každý v jiném pořadí.

**2.** Mocniny 5 mod 23: 5, 2, 10, **4**. Po 4 pokusech víš, že a = 4, a klíč 18 dopočítáš. S čísly o stovkách číslic by pokusů bylo víc, než je atomů ve vesmíru. Umocnit je rychlé, ale vrátit se zpátky prakticky nejde. Takové funkci se říká **jednosměrná**.

**3.** M = 25 mod 23 = 2. Ema spočítá $2^4 = 16$, Tomáš $2^3 = 8$. Server zná oba: $4^2 = 16$ a $10^2 = 100$ mod 23 = 8. Každou zprávu odemkne, přečte a zamkne klíčem pro druhého. To je útok **člověk uprostřed**. Odhalí ho jen porovnání **bezpečnostního kódu** (otisku klíče) jinou cestou, třeba tváří v tvář: Emě vyjde kód z klíče 16, Tomášovi z klíče 8 a nesouhlasí.

<!-- more -->

Najdi ve své chatovací appce u kontaktu „bezpečnostní číslo“ nebo „ověřit šifrování“ a porovnej ho s kamarádem nebo kamarádkou osobně. Teď víš, proti čemu ten kód chrání. Pak zahraj hru navíc „Co schová koncové šifrování“: ani dokonalá výměna klíčů neschová metadata ani nešifrovanou zálohu. Kdo chce dál, ať si najde, jak funguje protokol Signal, který stejný nápad rozšiřuje o nový klíč pro každou zprávu.
