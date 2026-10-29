---
id: vyzva-data-tabulka-a-evidence-sk
translationOf: vyzva-data-tabulka-a-evidence
lang: sk
type: challenge
title: "Dve Emy a jeden kľúč"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Do knižnice prišla nová žiačka zo 7.A."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: tabulka-a-evidence
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

Do knižnice prišla nová žiačka zo 7.A. Volá sa tiež Ema. Odvtedy `=COUNTIF(…; "Ema")` počíta nezmysly a nikto nevie, kto má Hobita. Tabuľka je uprataná, a predsa klame.

<!-- task -->

Knižnica má jednu tabuľku výpožičiek so stĺpcami **Meno, Trieda, E-mail, Kniha, Vrátené**. Každá výpožička znova opisuje meno, triedu aj e-mail.

1. Nájdi **dva rôzne problémy** tejto tabuľky, ktoré vzniknú, keď (a) má škola dve Emy, (b) Ema Nováková zmení e-mail.
2. Navrhni namiesto nej **tri tabuľky** tak, aby **každý fakt bol zapísaný iba raz**. Pri každej napíš stĺpce a označ **kľúč**: stĺpec, podľa ktorého sa dá riadok jednoznačne nájsť.
3. Tvoje tabuľky obsahujú tieto dáta:

| id | meno | trieda |
|---|---|---|
| 1 | Ema Nováková | 7.B |
| 2 | Ema Dvořáková | 7.A |
| 3 | Tomáš | 7.B |
| 4 | Ondra | 7.B |

Výpožičky (id žiaka, kniha, vrátené): (1, Hobit, áno), (1, Harry Potter, nie), (2, Malý princ, nie), (3, Bratia Levie srdce, nie), (4, Hobit, nie), (2, Bratia Levie srdce, áno).

Koľko kníh majú **práve teraz** požičaných žiaci zo **7.B**? A koľko by v pôvodnej tabuľke vrátil `COUNTIF` na „Ema“ (predpokladaj, že sú tam iba krstné mená)?

**Kritérium úspechu:** zmena e-mailu je v tvojom návrhu zmena jednej bunky a obe odpovede v 3. úlohe sedia.

<!-- hint -->

Problém (b): v koľkých riadkoch je e-mail Emy Novákovej? Čo sa stane, keď ho prepíšeš iba v dvoch z troch?

<!-- hint -->

Meno nie je dobrý kľúč, lebo sa opakuje. Vymysli číslo, ktoré sa nikdy nezopakuje, ako má každý žiak číslo v triednej knihe.

<!-- hint -->

V 3. úlohe postupuj ako počítač: pre každú výpožičku s „vrátené = nie“ nájdi podľa id žiaka jeho triedu.

<!-- solution -->

**1.** (a) Dve Emy sa nedajú rozlíšiť: `COUNTIF` sčíta výpožičky oboch a filter „Ema“ ukáže knihy cudzieho človeka. (b) E-mail je opísaný v každej výpožičke. Keď ho prepíšeš iba niekde, tabuľka si protirečí (tzv. **nekonzistentnosť**).

**2.** **Žiaci** (id žiaka = kľúč, meno, trieda, e-mail), **Knihy** (id knihy = kľúč, názov, autor), **Výpožičky** (id výpožičky = kľúč, id žiaka, id knihy, od, do, vrátené). Výpožička iba **odkazuje** na žiaka a knihu ich id. E-mail je v jedinej bunke tabuľky Žiaci.

**3.** Nevrátené: (1, Harry Potter), (2, Malý princ), (3, Bratia Levie srdce), (4, Hobit). Žiaci 1, 3 a 4 sú zo 7.B, žiačka 2 zo 7.A. Odpoveď: **3 knihy**. `COUNTIF` na „Ema“ by vrátil **4**, lebo sčíta 2 výpožičky Emy Novákovej a 2 Emy Dvořákovej.

V databázovom jazyku SQL by dopyt vyzeral takto:
`SELECT COUNT(*) FROM Vypozicky JOIN Ziaci ON Vypozicky.id_ziaka = Ziaci.id WHERE Ziaci.trieda = '7.B' AND vratene = 'nie'`
Slovo **JOIN** je presne to spojenie cez kľúč, ktoré v úlohe robíš ručne. Takto fungujú skoro všetky databázy na svete: e-shop, školský systém aj rebríček v hre.

<!-- more -->

Zahraj si [SQL Murder Mystery](https://mystery.knightlab.com/): vraždu v SQL City vyriešiš iba dopytmi, ktoré spájajú tabuľky cez kľúče (po anglicky). Alebo v tabuľkovom procesore vyskúšaj funkciu `XLOOKUP` alebo `VLOOKUP`: robí to isté čo JOIN pre jeden riadok.
