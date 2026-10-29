---
id: vyzva-bezpeci-ucet-a-autentizace-sk
translationOf: vyzva-bezpeci-ucet-a-autentizace
lang: sk
type: challenge
title: "Vypočítaj, ako dlho útočník háda"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Hra „Za ako dlho ho uhádne?“ ti čísla povedala."
voice: universal
parent: null
diagram: null
core: false
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

Hra „Za ako dlho ho uhádne?“ ti čísla povedala. Teraz ich vypočítaš bez nej a narazíš na jedno prekvapenie.

<!-- task -->

Útočník ukradol databázu odtlačkov hesiel a háda u seba: **10 miliárd pokusov za sekundu**. Proti nemu stoja tri heslá:

- **A**: 8 úplne náhodných znakov z 95 znakov klávesnice (malé a veľké písmená, číslice, symboly), napríklad `k#9Qv!2m`.
- **B**: 4 náhodné slová zo zoznamu 7776 slov. Slovo vyberá hod piatimi kockami: 6 · 6 · 6 · 6 · 6 = 7776. Napríklad `kopec-sova-lampa-tunel`.
- **C**: `Tr4mvaj2013`.

Počet všetkých možností vypočítaš ako *veľkosť abecedy* umocnenú na *dĺžku*. Pri hesle A je to $$95^8$$.

1. Za koľko dní útočník vyskúša **všetky** možnosti pri A a pri B?
2. Koľko slov musí mať heslo typu B, aby celé hádanie trvalo **dlhšie ako 50 rokov**?
3. Koľko znakov musí mať najkratšie heslo len z malých písmen (26 znakov), aby malo viac možností ako A?
4. Prečo heslo C nepadne za roky, ale za zlomok sekundy? Odhadni počet pokusov: útočník berie 100 000 slov, ku každému 100 obmien (4 namiesto a, @ namiesto a…) a 100 letopočtov.

**Kritérium úspechu:** štyri čísla, každé správne aspoň na rád, a jedna veta o tom, kedy výpočet sily hesla vôbec platí.

<!-- hint -->

Kalkulačka vie mocniny tlačidlom xʸ. Deň má 86 400 sekúnd, rok asi 31,6 milióna sekúnd.

<!-- hint -->

Porovnaj $$95^8$$ a $$7776^4$$. Možno ťa prekvapí, ako blízko pri sebe sú.

<!-- hint -->

Pri otázke 3 skúšaj postupne $$26^{11}$$ a $$26^{12}$$ a porovnávaj s $$95^8$$.

<!-- solution -->

1. **A**: $$95^8$$ je asi 6,6 · 10¹⁵ možností. Delené 10¹⁰ vyjde asi 663 000 sekúnd, teda **asi 7,7 dňa**. **B**: $$7776^4$$ je asi 3,7 · 10¹⁵, teda **asi 4,2 dňa**. Štyri slová sú zhruba rovnako silné ako 8 náhodných znakov, len sa pamätajú oveľa lepšie. (V priemere útočník heslo nájde za polovicu toho času.)

2. **Päť slov**: $$7776^5$$ je asi 2,8 · 10¹⁹, to je **asi 90 rokov**. Každé slovo navyše násobí čas 7776-krát.

3. $$26^{11}$$ je asi 3,7 · 10¹⁵, to je stále menej ako A. $$26^{12}$$ je asi 9,5 · 10¹⁶, to je už viac. Stačí **12 malých písmen**. Dĺžka poráža symboly.

4. 100 000 · 100 · 100 = 10⁹ pokusov, to je **0,1 sekundy**. Útočník nehádá naslepo, ale od najpravdepodobnejších hesiel. **Výpočet sily platí len pre heslo, ktoré je naozaj náhodné**: vybrané kockou alebo generátorom, nie hlavou.

<!-- more -->

Vyrob si heslo z kociek: päť slov, každé vybrané hodom piatimi kockami (metóda sa volá diceware). Potom si prečítaj, ako služba Have I Been Pwned zistí, či tvoje heslo uniklo, a pritom ho nevidí: [článok Troya Hunta](https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/) (po anglicky). A zahraj si hru navyše „Ako web spozná heslo, ktoré nepozná“.
