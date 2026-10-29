---
id: vyzva-socialni-sifrovani-hu
translationOf: vyzva-socialni-sifrovani
lang: hu
type: challenge
title: "A kulcs, amit senki sem hallott"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "Ema titokban akar írni Tomášnak, de minden szavuk átmegy egy szerveren."
voice: universal
parent: svet-socialni-sifrovani-hu
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

Ema titokban akar írni Tomášnak, de minden szavuk átmegy egy szerveren. Hogyan egyeznek meg egy kulcsban, ha az egész világ hallja őket? A csetalkalmazásod ezt oldja meg minden alkalommal, amikor új csetet kezdesz. Te pedig most kiszámolod egy számológéppel.

<!-- task -->

A recept neve **Diffie–Hellman-kulcscsere**. Itt kis számokra van lekicsinyítve. A „mod 23” jelentése: „a 23-mal való osztás maradéka”.

- Nyilvánosan (a szerver látja) megegyeznek a **23** és az **5** számban.
- Ema gondol egy titkos **a = 4** számot, Tomáš egy titkos **b = 3** számot.
- Ema elküldi az $A = 5^a \bmod 23$ számot, Tomáš a $B = 5^b \bmod 23$ számot.
- Ema kiszámolja a $B^a \bmod 23$, Tomáš az $A^b \bmod 23$ értéket. Ez a közös kulcsuk.

1. Számold ki A-t, B-t és mindkét kulcsot. Ugyanannyi jön ki? Miért?
2. Most te vagy a szerver. Csak a 23-at, az 5-öt, A-t és B-t látod. Derítsd ki Ema titkos számát és a közös kulcsot. Hány próbálkozás kell hozzá? És miért nem menne, ha a számok több száz számjegyűek lennének?
3. A szerver gonosz. Választ egy titkos **m = 2** számot, és A helyett Tomášnak, B helyett Emának a saját $M = 5^2 \bmod 23$ számát küldi. Milyen kulcsot számol ki Ema, milyet Tomáš, és ismeri őket a szerver? Hogyan leplezi le Ema és Tomáš a csalást?

<!-- hint -->

$5^4 = 625$ és $625 = 27 \cdot 23 + 4$, tehát A = 4. B-t ugyanígy számolod ki az $5^3 = 125$ értékből.

<!-- hint -->

A szerver sorra kipróbálja: $5^1, 5^2, 5^3, \dots$ (mod 23), amíg ki nem jön A. Minden következő hatványt az előzőből kapsz meg: szorozd meg 5-tel, és vedd a 23-mal való osztás maradékát.

<!-- hint -->

A 3. feladatban Ema $M^a$ értéket számol, Tomáš $M^b$ értéket. A szerver Emával $A^m$, Tomášsal $B^m$ értéket számol.

<!-- solution -->

**1.** A = 4, B = 125 mod 23 = **10**. Ema: $10^4 = 10\,000$, a 23-mal való osztás maradéka **18**. Tomáš: $4^3 = 64$, a maradék **18**. Ugyanannyi, mert valójában mindketten $5^{a \cdot b} = 5^{12} \bmod 23$ értéket számoltak, csak más sorrendben.

**2.** Az 5 hatványai mod 23: 5, 2, 10, **4**. 4 próbálkozás után tudod, hogy a = 4, és a 18-as kulcsot is kiszámolod. Több száz számjegyű számoknál több próbálkozás kellene, mint ahány atom van a világegyetemben. Hatványozni gyors, de visszafelé gyakorlatilag nem lehet eljutni. Az ilyen függvényt **egyirányú** függvénynek hívják.

**3.** M = 25 mod 23 = 2. Ema kiszámolja: $2^4 = 16$, Tomáš: $2^3 = 8$. A szerver mindkettőt ismeri: $4^2 = 16$ és $10^2 = 100$ mod 23 = 8. Minden üzenetet kinyit, elolvas, és bezár a másik fél kulcsával. Ez a **közbeékelődéses** (man-in-the-middle) támadás. Csak a **biztonsági kód** (a kulcs ujjlenyomata) más úton történő összevetése leplezi le, például személyesen: Emának a 16-os kulcsból jön ki a kód, Tomášnak a 8-asból, és nem egyeznek.

<!-- more -->

Keresd meg a csetalkalmazásodban egy névjegynél a „biztonsági szám” vagy a „titkosítás ellenőrzése” lehetőséget, és vesd össze személyesen egy barátoddal vagy barátnőddel. Most már tudod, mi ellen véd ez a kód. Aztán játszd le a „Mit rejt el a végpontok közötti titkosítás” extra játékot: még a tökéletes kulcscsere sem rejti el a metaadatokat és a titkosítatlan biztonsági mentést. Aki tovább akar menni, nézzen utána, hogyan működik a Signal protokoll, amely ugyanezt az ötletet bővíti ki úgy, hogy minden üzenethez új kulcs tartozik.
