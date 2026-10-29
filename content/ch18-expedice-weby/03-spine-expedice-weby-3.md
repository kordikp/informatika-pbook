---
id: expedice-weby-3
type: spine
title: "Rozeber web, který funguje dvacet let"
readingTime: 1
standalone: false
teaser: "Vyber si tři weby: českou příručku Jak psát web, jeden článek na Wikipedii a libovolný velký zpravodajský web."
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
concept: expedice-weby-3
conceptTitle: "Rozeber web, který funguje dvacet let"
state: edited
carriers: prose|table
---

**🔍 Rozbor** · krok 3 z 5 · [Sto kilobajtů](#expedice-weby)

Vyber si tři weby: českou příručku [Jak psát web](https://www.jakpsatweb.cz), jeden článek na [Wikipedii](https://en.wikipedia.org/wiki/Hack_Club) a libovolný velký zpravodajský web. Ke každému vyplň tabulku:

| | Jak psát web | Wikipedie | zprávy |
|---|---|---|---|
| přeneseno (kB) | | | |
| počet požadavků | | | |
| počet cizích domén | | | |
| počet nadpisů h1 | | | |

**Jak na to:**
- Velikost a požadavky najdeš v F12 → Síť dole na liště.
- Cizí domény: v záložce Síť seřaď podle sloupce Domain. Každá doména, která není doménou webu, je cizí. Často jde o reklamu nebo měření návštěvníků.
- Osnovu nadpisů vypíše Konzole. Vlož do ní: `[...document.querySelectorAll('h1,h2,h3')].map(h => h.tagName + ' ' + h.textContent.trim()).join('\n')`

**Otázky k rozboru:**
1. Který web je nejtěžší a co tvoří většinu jeho kilobajtů?
2. Wikipedie má obří obsah. Čím to, že se přesto načte rychle?
3. Kolik cizích domén má zpravodajský web a co asi dělají? Vzpomeň si na podání „Cookies: kdo tě sleduje po webu“.
4. Má každý web právě jeden h1 a nadpisy v pořadí?
5. Jednu věc, kterou převezmeš do svého webu, a jednu, které se vyhneš.

**Další krok:** [Kde stavějí ostatní](#expedice-weby-4)
