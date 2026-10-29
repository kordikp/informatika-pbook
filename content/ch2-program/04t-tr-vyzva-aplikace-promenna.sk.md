---
id: vyzva-aplikace-promenna-sk
translationOf: vyzva-aplikace-promenna
lang: sk
type: challenge
title: "Nemožné stavy"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Odhlásiš sa z hudobnej apky a o sekundu ti začne hrať pesnička."
voice: universal
parent: svet-aplikace-promenna-sk
diagram: null
core: false
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

Odhlásiš sa z hudobnej apky a o sekundu ti začne hrať pesnička. Nikto neťukol na ▶. Kde sa vzala?

<!-- task -->

Prehrávač má tri premenné typu áno/nie: `prihlaseny`, `nacitava`, `prehrava`. Pravidlá: odhlásený používateľ nič nenačítava ani nepočúva a apka nikdy nenačítava a neprehráva naraz.

Udalosti sú: ťuknutie na ▶, „načítané“ (dáta pesničky dorazili), „chyba siete“ (načítavanie zlyhalo), „prihlásiť“ a „odhlásiť“.

1. Koľko kombinácií hodnôt troch premenných existuje? Ktoré dávajú zmysel? Pomenuj ich.
2. Nakresli **stavový diagram**: stavy ako krúžky, udalosti ako šípky. Šípku kresli len tam, kde sa stav mení.
3. V kóde je napísané: pri „odhlásiť“ nastav `prihlaseny = nie` a `prehrava = nie`. Pri „načítané“ nastav `nacitava = nie` a `prehrava = áno`. Nájdi postupnosť udalostí, po ktorej hrá hudba odhlásenému používateľovi.
4. Prepíš prehrávač na jednu premennú `stav` tak, aby sa nemožná kombinácia nedala ani zapísať. Napíš test (vstup a očakávaný výstup) pre každú šípku.

**Úspech:** počet zmysluplných stavov, počet šípok, rovnaký počet testov a jedna postupnosť, ktorá chybu odhalí.

<!-- hint -->

Tri premenné áno/nie: koľko je možností pre prvú, koľko pre druhú, koľko pre tretiu? Potom škrtaj kombinácie podľa pravidiel.

<!-- hint -->

Zmysel dávajú práve tie kombinácie, ktorým vieš dať meno zrozumiteľné pre používateľa: „pauza“, „načítava“… Koľko ich nájdeš?

<!-- hint -->

Začni v pauze. Čo ak sa používateľ odhlási presne vo chvíli, keď sa pesnička ešte sťahuje, a dáta dorazia až potom?

<!-- solution -->

**1.** Kombinácií je 2 × 2 × 2 = 8. Zmysel dávajú 4: **Odhlásené** (nie, nie, nie), **Pauza** (áno, nie, nie), **Načítava** (áno, áno, nie), **Hrá** (áno, nie, áno).

**2.** Šípok je 8: Odhlásené → Pauza (prihlásiť), Pauza → Načítava (▶), Pauza → Odhlásené (odhlásiť), Načítava → Hrá (načítané), Načítava → Pauza (chyba siete), Načítava → Odhlásené (odhlásiť), Hrá → Pauza (▶), Hrá → Odhlásené (odhlásiť).

**3.** Z pauzy: ▶, odhlásiť, načítané. Po odhlásení zostane `nacitava = áno`, lebo na ňu kód zabudol. Neskoré „načítané“ potom nastaví `prehrava = áno` a vznikne (nie, nie, áno).

**4.** `stav` má jednu zo štyroch hodnôt. Každá udalosť sa pýta, v akom stave apka je: „načítané“ prepne na Hrá len zo stavu Načítava, inak sa zahodí. 8 šípok = 8 testov. K nim pridaj test chyby: ▶, odhlásiť, načítané → očakávaný stav Odhlásené.

<!-- more -->

Pridaj stav „Reklama“, ktorú nejde preskočiť, a stav „Bez internetu“. Koľko šípok pribudne a koľko testov? Veľké apky na to používajú knižnice stavových automatov, napríklad XState pre JavaScript (anglicky). Skús potom stavový diagram nakresliť pre tlačidlo „Zaplatiť“ v triednej apke.
