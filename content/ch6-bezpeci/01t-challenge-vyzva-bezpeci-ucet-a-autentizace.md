---
id: vyzva-bezpeci-ucet-a-autentizace
type: challenge
title: "Spočítej, jak dlouho útočník hádá"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Hra „Za jak dlouho ho uhodne?“ ti čísla řekla."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: ucet-a-autentizace
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
carriers: prose|formula
---

Hra „Za jak dlouho ho uhodne?“ ti čísla řekla. Teď je spočítáš bez ní a narazíš na jedno překvapení.

<!-- task -->

Útočník ukradl databázi otisků hesel a hádá u sebe: **10 miliard pokusů za sekundu**. Proti němu stojí tři hesla:

- **A**: 8 zcela náhodných znaků z 95 znaků klávesnice (malá a velká písmena, číslice, symboly), třeba `k#9Qv!2m`.
- **B**: 4 náhodná slova ze seznamu 7776 slov. Slovo vybírá hod pěti kostkami: 6 · 6 · 6 · 6 · 6 = 7776. Třeba `kopec-sova-lampa-tunel`.
- **C**: `Tr4mvaj2013`.

Počet všech možností spočítáš jako *velikost abecedy* umocněnou na *délku*. U hesla A je to $$95^8$$.

1. Za kolik dní útočník vyzkouší **všechny** možnosti u A a u B?
2. Kolik slov musí mít heslo typu B, aby celé hádání trvalo **déle než 50 let**?
3. Kolik znaků musí mít nejkratší heslo jen z malých písmen (26 znaků), aby mělo víc možností než A?
4. Proč heslo C nepadne za roky, ale za zlomek sekundy? Odhadni počet pokusů: útočník bere 100 000 slov, ke každému 100 obměn (4 místo a, @ místo a…) a 100 letopočtů.

**Kritérium úspěchu:** čtyři čísla, každé správně aspoň na řád, a jedna věta o tom, kdy výpočet síly hesla vůbec platí.

<!-- hint -->

Kalkulačka umí mocniny tlačítkem xʸ. Den má 86 400 sekund, rok asi 31,6 milionu sekund.

<!-- hint -->

Porovnej $$95^8$$ a $$7776^4$$. Možná tě překvapí, jak blízko u sebe jsou.

<!-- hint -->

U otázky 3 zkoušej postupně $$26^{11}$$ a $$26^{12}$$ a porovnávej s $$95^8$$.

<!-- solution -->

1. **A**: $$95^8$$ je asi 6,6 · 10¹⁵ možností. Děleno 10¹⁰ vyjde asi 663 000 sekund, tedy **asi 7,7 dne**. **B**: $$7776^4$$ je asi 3,7 · 10¹⁵, tedy **asi 4,2 dne**. Čtyři slova jsou zhruba stejně silná jako 8 náhodných znaků, jen se pamatují mnohem líp. (V průměru útočník heslo najde za polovinu té doby.)

2. **Pět slov**: $$7776^5$$ je asi 2,8 · 10¹⁹, to je **asi 90 let**. Každé slovo navíc násobí čas 7776krát.

3. $$26^{11}$$ je asi 3,7 · 10¹⁵, to je pořád méně než A. $$26^{12}$$ je asi 9,5 · 10¹⁶, to už je víc. Stačí **12 malých písmen**. Délka poráží symboly.

4. 100 000 · 100 · 100 = 10⁹ pokusů, to je **0,1 sekundy**. Útočník nehádá naslepo, ale od nejpravděpodobnějších hesel. **Výpočet síly platí jen pro heslo, které je opravdu náhodné**: vybrané kostkou nebo generátorem, ne hlavou.

<!-- more -->

Vyrob si heslo z kostek: pět slov, každé vybrané hodem pěti kostkami (metoda se jmenuje diceware). Pak si přečti, jak služba Have I Been Pwned zjistí, jestli tvoje heslo uniklo, aniž by ho viděla: [článek Troye Hunta](https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/) (anglicky). A zahraj si hru navíc „Jak web pozná heslo, které nezná“.
