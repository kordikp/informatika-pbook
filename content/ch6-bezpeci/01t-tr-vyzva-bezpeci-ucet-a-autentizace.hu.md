---
id: vyzva-bezpeci-ucet-a-autentizace-hu
translationOf: vyzva-bezpeci-ucet-a-autentizace
lang: hu
type: challenge
title: "Számold ki, meddig találgat a támadó"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A „Mennyi idő alatt találja ki?” játék megmondta a számokat."
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
lengthBand: deep
carriers: prose|formula
---

A „Mennyi idő alatt találja ki?” játék megmondta a számokat. Most kiszámolod őket nélküle, és egy meglepetésbe is belefutsz.

<!-- task -->

A támadó ellopta a jelszólenyomatok adatbázisát, és a saját gépén találgat: **másodpercenként 10 milliárd próbálkozás**. Három jelszó áll vele szemben:

- **A**: 8 teljesen véletlen karakter a billentyűzet 95 karakteréből (kis- és nagybetűk, számjegyek, szimbólumok), például `k#9Qv!2m`.
- **B**: 4 véletlen szó egy 7776 szavas listáról. A szót öt kockadobás választja ki: 6 · 6 · 6 · 6 · 6 = 7776. Például `domb-bagoly-lampa-alagut`.
- **C**: `Vill4mos2013`.

Az összes lehetőség számát úgy kapod meg, hogy az *ábécé méretét* a *hosszúságra* emeled. Az A jelszónál ez $$95^8$$.

1. Hány nap alatt próbálja végig a támadó az **összes** lehetőséget az A-nál és a B-nél?
2. Hány szóból kell állnia egy B típusú jelszónak, hogy a teljes találgatás **több mint 50 évig** tartson?
3. Hány karakteres legyen a legrövidebb, csak kisbetűkből (26 karakter) álló jelszó, hogy több lehetősége legyen, mint az A-nak?
4. Miért nem évek alatt dől el a C jelszó, hanem a másodperc törtrésze alatt? Becsüld meg a próbálkozások számát: a támadó 100 000 szót vesz, mindegyikhez 100 változatot (4 az a helyett, @ az a helyett…) és 100 évszámot.

**Sikerkritérium:** négy szám, mindegyik legalább nagyságrendre helyes, és egy mondat arról, mikor érvényes egyáltalán a jelszóerősség kiszámítása.

<!-- hint -->

A számológép az xʸ gombbal hatványoz. Egy napban 86 400 másodperc van, egy évben kb. 31,6 millió másodperc.

<!-- hint -->

Hasonlítsd össze a $$95^8$$ és a $$7776^4$$ értékét. Talán meglep, mennyire közel vannak egymáshoz.

<!-- hint -->

A 3. kérdésnél próbáld ki sorban a $$26^{11}$$ és a $$26^{12}$$ értékét, és hasonlítsd össze a $$95^8$$-nal.

<!-- solution -->

1. **A**: $$95^8$$ körülbelül 6,6 · 10¹⁵ lehetőség. 10¹⁰-nel elosztva kb. 663 000 másodperc jön ki, vagyis **kb. 7,7 nap**. **B**: $$7776^4$$ körülbelül 3,7 · 10¹⁵, vagyis **kb. 4,2 nap**. Négy szó nagyjából olyan erős, mint 8 véletlen karakter, csak sokkal könnyebb megjegyezni. (Átlagosan a támadó ennek az időnek a fele alatt találja meg a jelszót.)

2. **Öt szó**: $$7776^5$$ körülbelül 2,8 · 10¹⁹, ez **kb. 90 év**. Minden további szó 7776-szorosára növeli az időt.

3. $$26^{11}$$ körülbelül 3,7 · 10¹⁵, ez még mindig kevesebb, mint az A. $$26^{12}$$ körülbelül 9,5 · 10¹⁶, ez már több. Elég **12 kisbetű**. A hosszúság legyőzi a szimbólumokat.

4. 100 000 · 100 · 100 = 10⁹ próbálkozás, ez **0,1 másodperc**. A támadó nem vaktában találgat, hanem a legvalószínűbb jelszavakkal kezdi. **Az erősség kiszámítása csak olyan jelszóra érvényes, amely tényleg véletlen**: kockával vagy generátorral választották, nem fejből.

<!-- more -->

Készíts jelszót kockákkal: öt szó, mindegyiket öt kocka dobásával választod ki (a módszer neve diceware). Aztán olvasd el, hogyan deríti ki a Have I Been Pwned szolgáltatás, hogy kiszivárgott-e a jelszavad, anélkül hogy látná: [Troy Hunt cikke](https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/) (angolul). És játszd végig a „Hogyan ismeri fel a web a jelszót, amit nem tud” extra játékot.
