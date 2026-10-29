---
id: vyzva-weby-kodovani-sk
translationOf: vyzva-weby-kodovani
lang: sk
type: challenge
title: "Rozsypaný čaj naruby"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Návštevník ti pošle screenshot."
voice: universal
parent: svet-weby-kodovani-sk
diagram: null
core: false
status: accepted
concept: kodovani
state: edited
lens: weby
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Návštevník ti pošle screenshot. Namiesto „Poď na krúžok“ vidí „PoÄŹ na krĂşĹľok“. Vyzerá to ako náhodná zmes. Lenže náhoda to nie je: keď vieš, čo sa stalo s každým bajtom, prečítaš to aj bez počítača.

<!-- task -->

V UTF-8 sa písmená s kódom od 128 do 2047 ukladajú do **dvoch bajtov** podľa vzoru `110xxxxx 10yyyyyy`. Bity xxxxx a yyyyyy sú kód písmena (11 bitov). Staršie kódovanie **Windows-1250** číta každý bajt ako jeden znak. Kúsok jeho tabuľky (šestnástkovo):

| bajt | 8D | 8F | 99 | A1 | BE | C3 | C4 | C5 |
|---|---|---|---|---|---|---|---|---|
| znak | Ť | Ź | ™ | ˇ | ľ | Ă | Ä | Ĺ |

1. Písmeno **č** má kód 269 (šestnástkovo 10D). Rozpíš ho do dvoch bajtov UTF-8 a ukáž, prečo z neho vznikne „ÄŤ“.
2. Písmeno **ž** má kód 382 (17E). Čo z neho urobí Windows-1250?
3. Návštevník vidí „Ĺˇkola“. Aké to bolo slovo? Vypočítaj to odzadu.
4. Prečo písmená bez mäkčeňov a dĺžňov prežili bez zmeny?

**Úspech:** všetky štyri odpovede sedia a každú vieš zdôvodniť bajtmi.

<!-- hint -->

269 preveď do dvojkovej sústavy: 269 = 256 + 8 + 4 + 1, teda 1 0000 1101. Doplň zľava nulami na 11 bitov: 00100 001101.

<!-- hint -->

Prvých 5 bitov patrí za 110, zvyšných 6 za 10. Každú osmicu bitov potom preveď na šestnástkové číslo po štvoriciach: 1100 = C, 0100 = 4.

<!-- hint -->

K bodu 3: Ĺ je bajt C5 a ˇ je A1. Z C5 vezmi posledných 5 bitov, z A1 posledných 6, polož ich za seba a preveď na číslo.

<!-- solution -->

1. 269 = 00100 001101. Prvý bajt 110 + 00100 = 11000100 = **C4**, druhý 10 + 001101 = 10001101 = **8D**. Windows-1250 číta C4 ako Ä a 8D ako Ť, preto „ÄŤ“.
2. 382 = 00101 111110, teda 11000101 = **C5** a 10111110 = **BE**. Vznikne „Ĺľ“, žirafa sa zmení na „Ĺľirafa“.
3. C5 = 11000101 dá bity 00101, A1 = 10100001 dá bity 100001. Spolu 00101100001 = 5 · 64 + 33 = **353**, šestnástkovo 161, a to je **š**. Slovo je „škola“.
4. Znaky s kódom pod 128 (anglická abeceda, číslice, medzera) majú v UTF-8 jediný bajt, rovnaký ako vo Windows-1250. V nich sa obe kódovania zhodnú, a tak sa rozsype len diakritika.

Liek: riadok `<meta charset="utf-8">` v hlavičke a súbor uložený ako UTF-8.

<!-- more -->

Emoji majú v UTF-8 **štyri** bajty podľa vzoru `11110xxx` a tri pokračovacie. Koľko bitov kódu sa do nich zmestí? V prehliadači stlač F12, otvor Konzolu a napíš `new TextEncoder().encode("🙂")`. Vypíše ti bajty. Over, že sedia so vzorom.
