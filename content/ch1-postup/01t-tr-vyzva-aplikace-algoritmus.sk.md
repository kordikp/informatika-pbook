---
id: vyzva-aplikace-algoritmus-sk
translationOf: vyzva-aplikace-algoritmus
lang: sk
type: challenge
title: "Najmenej prevodov"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Apka na delenie útraty ti navrhne štyri prevody."
voice: universal
parent: svet-aplikace-algoritmus-sk
diagram: null
core: false
status: accepted
concept: algoritmus
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Apka na delenie útraty ti navrhne štyri prevody. Dá sa to na tri? A ako spoznáš, že na dva už určite nie?

<!-- task -->

Po výlete do aquaparku vyšli takéto saldá. Kladné číslo znamená, že ostatní dlhujú tebe, záporné, že dlhuješ ty.

| Kto | Saldo |
|---|---|
| Ema | +600 Kč |
| Tomáš | +500 Kč |
| Ondra | −500 Kč |
| Jana | −400 Kč |
| Petr | −200 Kč |

Apka používa **pažravý postup**: vezme toho, kto dlhuje najviac, a ten pošle čo najviac tomu, komu sa dlhuje najviac. Saldá prepočíta a opakuje, kým nie sú všetci na nule.

1. Prejdi pažravý postup krok za krokom. Koľko prevodov vyjde?
2. Nájdi riešenie s menším počtom prevodov.
3. Dokáž, že dva prevody nestačia.
4. Nájdi pravidlo: n ľudí sa dá rozdeliť najviac na k skupiniek, z ktorých každá má súčet sáld nula. Koľko prevodov treba najmenej?

**Úspech:** máš riešenie s tromi prevodmi, vieš vysvetliť, prečo menej nejde, a máš vzorec z bodu 4.

<!-- hint -->

Pažravo: Ondra (−500) pošle Eme (+600). Eme potom zostáva +100. Pokračuj s Janou a Tomášom a sleduj, komu čo zostane.

<!-- hint -->

Hľadaj dvojicu alebo trojicu ľudí, ktorých saldá dajú dokopy presne nulu. Taká skupinka sa vyrovná sama medzi sebou a s ostatnými nemusí mať nič spoločné.

<!-- hint -->

Nakresli ľudí ako body a prevody ako čiary. Koľko najmenej čiar potrebuješ, aby m bodov bolo prepojených? A aký súčet sáld musí mať každá prepojená časť?

<!-- solution -->

**Pažravo vyjdú 4 prevody:** Ondra → Ema 500 Kč (Eme zostáva +100), Jana → Tomáš 400 Kč (Tomášovi zostáva +100), Petr → Ema 100 Kč a Petr → Tomáš 100 Kč.

**Stačia 3:** Ondra → Tomáš 500 Kč, Jana → Ema 400 Kč, Petr → Ema 200 Kč. Tomáš s Ondrom tvoria skupinku so súčtom nula (+500 − 500) a zvyšok tiež (+600 − 400 − 200).

**Prečo nie 2:** prevody tvoria sieť. Každá prepojená časť siete musí mať súčet sáld nula, inak by v nej niekto zostal v mínuse. Časť s m ľuďmi potrebuje aspoň m − 1 prevodov. Dva prevody medzi piatimi ľuďmi nechajú aspoň tri oddelené časti. Jedna z nich by musela byť jediný človek a ten by musel mať saldo nula. Nikto taký tu nie je.

**Pravidlo:** najmenej prevodov = n − k. Nájsť najväčšie k je však ťažké: pre 30 ľudí existuje viac ako 8 × 10²³ spôsobov, ako ich rozdeliť do skupiniek. Preto apky počítajú pažravo a zaručia len to, že prevodov nebude viac ako n − 1.

<!-- more -->

Vymysli saldá pre šiestich ľudí, pri ktorých pažravý postup prehrá. O koľko najviac môže prehrať? Potom napíš v App Inventore alebo Pythone program, ktorý pre malý počet ľudí vyskúša všetky rozdelenia do skupiniek a nájde optimum. Porovnaj ho s tým, ako vyrovnanie navrhuje open-source apka [Spliit](https://github.com/spliit-app/spliit).
