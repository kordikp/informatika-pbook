---
id: vyzva-socialni-sifrovani-sk
translationOf: vyzva-socialni-sifrovani
lang: sk
type: challenge
title: "Kľúč, ktorý nikto nepočul"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Ema chce Tomášovi písať tajne, ale každé ich slovo prechádza serverom."
voice: universal
parent: svet-socialni-sifrovani-sk
diagram: null
core: false
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

Ema chce Tomášovi písať tajne, ale každé ich slovo prechádza serverom. Ako sa dohodnú na kľúči, keď ich počuje celý svet? Tvoja četovacia apka toto rieši zakaždým, keď začneš nový čet. A ty to teraz vypočítaš na kalkulačke.

<!-- task -->

Recept sa volá **Diffieho–Hellmanova výmena kľúčov**. Tu je zmenšený na malé čísla. Zápis „mod 23“ znamená „zvyšok po delení 23“.

- Verejne (server to vidí) sa dohodnú na číslach **23** a **5**.
- Ema si v duchu vyberie tajné **a = 4**, Tomáš tajné **b = 3**.
- Ema pošle $A = 5^a \bmod 23$, Tomáš pošle $B = 5^b \bmod 23$.
- Ema vypočíta $B^a \bmod 23$, Tomáš $A^b \bmod 23$. To je ich spoločný kľúč.

1. Vypočítaj A, B a oba kľúče. Vyjdú rovnako? Prečo?
2. Teraz si ty server. Vidíš len 23, 5, A a B. Zisti Emino tajné číslo aj spoločný kľúč. Koľko pokusov potrebuješ? A prečo by to nešlo, keby čísla mali stovky číslic?
3. Server je zlý. Vyberie si tajné **m = 2** a namiesto A pošle Tomášovi a namiesto B Eme svoje číslo $M = 5^2 \bmod 23$. Aký kľúč vypočíta Ema, aký Tomáš a pozná ich server? Ako Ema s Tomášom podvod odhalia?

<!-- hint -->

$5^4 = 625$ a $625 = 27 \cdot 23 + 4$, takže A = 4. B vypočítaš rovnako z $5^3 = 125$.

<!-- hint -->

Server skúša $5^1, 5^2, 5^3, \dots$ (mod 23), kým nevyjde A. Každú ďalšiu mocninu získaš z predchádzajúcej: vynásob 5 a vezmi zvyšok po delení 23.

<!-- hint -->

V úlohe 3 počíta Ema $M^a$ a Tomáš $M^b$. Server s Emou počíta $A^m$ a s Tomášom $B^m$.

<!-- solution -->

**1.** A = 4, B = 125 mod 23 = **10**. Ema: $10^4 = 10\,000$, zvyšok po delení 23 je **18**. Tomáš: $4^3 = 64$, zvyšok **18**. Rovnako, pretože obaja v skutočnosti vypočítali $5^{a \cdot b} = 5^{12} \bmod 23$, len každý v inom poradí.

**2.** Mocniny 5 mod 23: 5, 2, 10, **4**. Po 4 pokusoch vieš, že a = 4, a kľúč 18 dopočítaš. S číslami so stovkami číslic by pokusov bolo viac, než je atómov vo vesmíre. Umocniť je rýchle, ale vrátiť sa späť prakticky nejde. Takej funkcii sa hovorí **jednosmerná**.

**3.** M = 25 mod 23 = 2. Ema vypočíta $2^4 = 16$, Tomáš $2^3 = 8$. Server pozná oba: $4^2 = 16$ a $10^2 = 100$ mod 23 = 8. Každú správu odomkne, prečíta a zamkne kľúčom pre druhého. To je útok **človek uprostred**. Odhalí ho len porovnanie **bezpečnostného kódu** (odtlačku kľúča) inou cestou, napríklad zoči-voči: Eme vyjde kód z kľúča 16, Tomášovi z kľúča 8 a nezhodujú sa.

<!-- more -->

Nájdi vo svojej četovacej apke pri kontakte „bezpečnostné číslo“ alebo „overiť šifrovanie“ a porovnaj ho s kamarátom alebo kamarátkou osobne. Teraz vieš, pred čím ten kód chráni. Potom zahraj hru navyše „Čo skryje koncové šifrovanie“: ani dokonalá výmena kľúčov neskryje metadáta ani nešifrovanú zálohu. Kto chce ísť ďalej, nech si nájde, ako funguje protokol Signal, ktorý ten istý nápad rozširuje o nový kľúč pre každú správu.
