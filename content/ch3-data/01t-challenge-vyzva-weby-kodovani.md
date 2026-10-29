---
id: vyzva-weby-kodovani
type: challenge
title: "Rozsypaný čaj naruby"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Návštěvník ti pošle screenshot."
voice: universal
parent: svet-weby-kodovani
diagram: null
core: false
lang: cs
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

Návštěvník ti pošle screenshot. Místo „Přijď na kroužek“ vidí „PĹ™ijÄŹ na krouĹľek“. Vypadá to jako náhodná změť. Jenže to náhoda není: když víš, co se stalo s každým bajtem, přečteš to i bez počítače.

<!-- task -->

V UTF-8 se písmena s kódem od 128 do 2047 ukládají do **dvou bajtů** podle vzoru `110xxxxx 10yyyyyy`. Bity xxxxx a yyyyyy jsou kód písmene (11 bitů). Starší kódování **Windows-1250** čte každý bajt jako jeden znak. Kousek jeho tabulky (šestnáctkově):

| bajt | 8D | 8F | 99 | A1 | BE | C3 | C4 | C5 |
|---|---|---|---|---|---|---|---|---|
| znak | Ť | Ź | ™ | ˇ | ľ | Ă | Ä | Ĺ |

1. Písmeno **č** má kód 269 (šestnáctkově 10D). Rozepiš ho do dvou bajtů UTF-8 a ukaž, proč z něj vznikne „ÄŤ“.
2. Písmeno **ž** má kód 382 (17E). Co z něj udělá Windows-1250?
3. Návštěvník vidí „Ĺˇkola“. Jaké to bylo slovo? Spočítej to pozpátku.
4. Proč písmena bez háčků a čárek přežila beze změny?

**Úspěch:** všechny čtyři odpovědi sedí a každou umíš zdůvodnit bajty.

<!-- hint -->

269 převeď do dvojkové soustavy: 269 = 256 + 8 + 4 + 1, tedy 1 0000 1101. Doplň zleva nulami na 11 bitů: 00100 001101.

<!-- hint -->

Prvních 5 bitů patří za 110, zbylých 6 za 10. Každou osmici bitů pak převeď na šestnáctkové číslo po čtveřicích: 1100 = C, 0100 = 4.

<!-- hint -->

Pro bod 3: Ĺ je bajt C5 a ˇ je A1. Z C5 vezmi posledních 5 bitů, z A1 posledních 6, slož je za sebe a převeď na číslo.

<!-- solution -->

1. 269 = 00100 001101. První bajt 110 + 00100 = 11000100 = **C4**, druhý 10 + 001101 = 10001101 = **8D**. Windows-1250 čte C4 jako Ä a 8D jako Ť, proto „ÄŤ“.
2. 382 = 00101 111110, tedy 11000101 = **C5** a 10111110 = **BE**. Vznikne „Ĺľ“, žirafa se změní na „Ĺľirafa“.
3. C5 = 11000101 dá bity 00101, A1 = 10100001 dá bity 100001. Dohromady 00101100001 = 5 · 64 + 33 = **353**, šestnáctkově 161, a to je **š**. Slovo je „škola“.
4. Znaky s kódem pod 128 (anglická abeceda, číslice, mezera) mají v UTF-8 jediný bajt, stejný jako ve Windows-1250. V nich se obě kódování shodnou, a tak se rozsype jen diakritika.

Lék: řádek `<meta charset="utf-8">` v hlavičce a soubor uložený jako UTF-8.

<!-- more -->

Emoji mají v UTF-8 **čtyři** bajty podle vzoru `11110xxx` a tři pokračovací. Kolik bitů kódu se do nich vejde? V prohlížeči zmáčkni F12, otevři Konzoli a napiš `new TextEncoder().encode("🙂")`. Vypíše ti bajty. Ověř, že sedí se vzorem.
