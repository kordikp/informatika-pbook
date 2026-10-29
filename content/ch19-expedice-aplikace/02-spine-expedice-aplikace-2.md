---
id: expedice-aplikace-2
type: spine
title: "První appka za 30 minut"
readingTime: 1
standalone: false
teaser: "Co potřebuješ: počítač s prohlížečem, Android mobil s appkou MIT AI2 Companion a Google účet."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-aplikace-2
conceptTitle: "První appka za 30 minut"
state: edited
carriers: prose
---

**🛠 Dílna** · krok 2 z 5 · [Appathon za jeden víkend](#expedice-aplikace)

**Co potřebuješ:** počítač s prohlížečem, Android mobil s appkou MIT AI2 Companion a Google účet. Je ti méně než 15? Použij školní účet nebo účet, který spravuje rodič.

1. Otevři [App Inventor](https://appinventor.mit.edu), klikni na Create Apps a založ projekt `Oddil`.
2. Na obrazovku přetáhni dvě pole `TextBox` (kdo platil, částka), tlačítko `Button` s textem „Přidat“, `Label` pro součet a `ListView` pro seznam výdajů.
3. U pole s částkou zapni ve vlastnostech `NumbersOnly`. První pravidlo dat: do čísla nejde napsat „stovka“.
4. V části Blocks vytvoř proměnnou `vydaje` jako prázdný seznam a proměnnou `soucet` s hodnotou 0.
5. Při klepnutí na „Přidat“ vlož do seznamu text „kdo: částka“, přičti částku k součtu a obojí ukaž.
6. Připoj mobil přes Connect → AI Companion a naskenuj QR kód. Změny uvidíš hned.
7. **Zkus to rozbít:** prázdná částka, nula, 100 000 Kč. Přidej podmínku, která nesmyslný vstup odmítne a napíše proč.
8. Přidej `TinyDB` a ukládej do ní seznam, aby po zavření appky nezmizel. Vzpomeň si na podání „Appka spadla a vzala text s sebou“.

**Hotovo je, když** appka přežije zavření, odmítne nesmyslnou částku a součet sedí s kalkulačkou.

**Další krok:** [Kolik lidí stačí na test](#expedice-aplikace-3)
