---
id: expedice-aplikace-2-sk
translationOf: expedice-aplikace-2
lang: sk
type: spine
title: "Prvá apka za 30 minút"
readingTime: 1
standalone: false
teaser: "Čo potrebuješ: počítač s prehliadačom, mobil s Androidom a apkou MIT AI2 Companion a Google účet."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-aplikace-2
conceptTitle: "Prvá apka za 30 minút"
objective: "Čo potrebuješ: počítač s prehliadačom, mobil s Androidom a apkou MIT AI2 Companion a Google účet."
state: edited
carriers: prose
---

**🛠 Dielňa** · krok 2 z 5 · [Appathon za jeden víkend](#expedice-aplikace-sk)

**Čo potrebuješ:** počítač s prehliadačom, mobil s Androidom a apkou MIT AI2 Companion a Google účet. Máš menej ako 15? Použi školský účet alebo účet, ktorý spravuje rodič.

1. Otvor [App Inventor](https://appinventor.mit.edu), klikni na Create Apps a založ projekt `Oddiel`.
2. Na obrazovku pretiahni dve polia `TextBox` (kto platil, suma), tlačidlo `Button` s textom „Pridať“, `Label` pre súčet a `ListView` pre zoznam výdavkov.
3. Pri poli so sumou zapni vo vlastnostiach `NumbersOnly`. Prvé pravidlo dát: do čísla nejde napísať „stovka“.
4. V časti Blocks vytvor premennú `vydavky` ako prázdny zoznam a premennú `sucet` s hodnotou 0.
5. Pri ťuknutí na „Pridať“ vlož do zoznamu text „kto: suma“, pripočítaj sumu k súčtu a oboje ukáž.
6. Pripoj mobil cez Connect → AI Companion a naskenuj QR kód. Zmeny uvidíš hneď.
7. **Skús to pokaziť:** prázdna suma, nula, 100 000 Kč. Pridaj podmienku, ktorá nezmyselný vstup odmietne a napíše prečo.
8. Pridaj `TinyDB` a ukladaj do nej zoznam, aby po zatvorení apky nezmizol. Spomeň si na príbeh „Apka spadla a vzala text so sebou“.

**Hotovo je, keď** apka prežije zatvorenie, odmietne nezmyselnú sumu a súčet sedí s kalkulačkou.

**Ďalší krok:** [Koľko ľudí stačí na test](#expedice-aplikace-3-sk)
