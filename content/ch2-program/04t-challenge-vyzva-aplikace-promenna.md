---
id: vyzva-aplikace-promenna
type: challenge
title: "Nemožné stavy"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Odhlásíš se z hudební appky a za vteřinu ti začne hrát písnička."
voice: universal
parent: svet-aplikace-promenna
diagram: null
core: false
lang: cs
status: accepted
concept: promenna
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Odhlásíš se z hudební appky a za vteřinu ti začne hrát písnička. Nikdo neklepl na ▶. Kde se vzala?

<!-- task -->

Přehrávač má tři proměnné typu ano/ne: `prihlasen`, `nacita`, `hraje`. Pravidla: odhlášený uživatel nic nenačítá ani neposlouchá a appka nikdy nenačítá a nehraje zároveň.

Události jsou: klepnutí na ▶, „načteno“ (data písničky dorazila), „chyba sítě“ (načítání selhalo), „přihlásit“ a „odhlásit“.

1. Kolik kombinací hodnot tří proměnných existuje? Které dávají smysl? Pojmenuj je.
2. Nakresli **stavový diagram**: stavy jako kroužky, události jako šipky. Šipku kresli jen tam, kde se stav mění.
3. Programátor napsal: při „odhlásit“ nastav `prihlasen = ne` a `hraje = ne`. Při „načteno“ nastav `nacita = ne` a `hraje = ano`. Najdi posloupnost událostí, po které hraje hudba odhlášenému uživateli.
4. Přepiš přehrávač na jednu proměnnou `stav` tak, aby se nemožná kombinace nedala ani zapsat. Napiš test (vstup a očekávaný výstup) pro každou šipku.

**Úspěch:** počet smysluplných stavů, počet šipek, stejný počet testů a jedna posloupnost, která chybu odhalí.

<!-- hint -->

Tři proměnné ano/ne: kolik je možností pro první, kolik pro druhou, kolik pro třetí? Pak škrtej kombinace podle pravidel.

<!-- hint -->

Smysl dávají právě ty kombinace, kterým umíš dát jméno, které by pochopil uživatel: „pauza“, „načítá“… Kolik jich najdeš?

<!-- hint -->

Začni v pauze. Co když se uživatel odhlásí přesně ve chvíli, kdy se písnička ještě stahuje, a data dorazí až potom?

<!-- solution -->

**1.** Kombinací je 2 × 2 × 2 = 8. Smysl dávají 4: **Odhlášeno** (ne, ne, ne), **Pauza** (ano, ne, ne), **Načítá** (ano, ano, ne), **Hraje** (ano, ne, ano).

**2.** Šipek je 8: Odhlášeno → Pauza (přihlásit), Pauza → Načítá (▶), Pauza → Odhlášeno (odhlásit), Načítá → Hraje (načteno), Načítá → Pauza (chyba sítě), Načítá → Odhlášeno (odhlásit), Hraje → Pauza (▶), Hraje → Odhlášeno (odhlásit).

**3.** Z pauzy: ▶, odhlásit, načteno. Po odhlášení zůstane `nacita = ano`, protože na ni kód zapomněl. Pozdní „načteno“ pak nastaví `hraje = ano` a vznikne (ne, ne, ano).

**4.** `stav` má jednu ze čtyř hodnot. Každá událost se ptá, v jakém stavu appka je: „načteno“ přepne na Hraje jen ze stavu Načítá, jinak se zahodí. 8 šipek = 8 testů. K nim přidej test chyby: ▶, odhlásit, načteno → očekávaný stav Odhlášeno.

<!-- more -->

Přidej stav „Reklama“, kterou nejde přeskočit, a stav „Bez internetu“. Kolik šipek přibude a kolik testů? Velké appky na to používají knihovny stavových automatů, například XState pro JavaScript (anglicky). Zkus pak stavový diagram nakreslit pro tlačítko „Zaplatit“ v třídní appce.
