---
id: expedice-weby-3-sk
translationOf: expedice-weby-3
lang: sk
type: spine
title: "Rozober web, ktorý funguje dvadsať rokov"
readingTime: 1
standalone: false
teaser: "Vyber si tri weby: českú príručku Jak psát web, jeden článok na Wikipédii a ľubovoľný veľký spravodajský web."
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
concept: expedice-weby-3
conceptTitle: "Rozober web, ktorý funguje dvadsať rokov"
objective: "Vyber si tri weby: českú príručku Jak psát web, jeden článok na Wikipédii a ľubovoľný veľký spravodajský web."
state: edited
carriers: prose|table
---

**🔍 Rozbor** · krok 3 z 5 · [Sto kilobajtov](#expedice-weby-sk)

Vyber si tri weby: českú príručku [Jak psát web](https://www.jakpsatweb.cz), jeden článok na [Wikipédii](https://en.wikipedia.org/wiki/Hack_Club) a ľubovoľný veľký spravodajský web. Ku každému vyplň tabuľku:

| | Jak psát web | Wikipédia | správy |
|---|---|---|---|
| prenesené (kB) | | | |
| počet požiadaviek | | | |
| počet cudzích domén | | | |
| počet nadpisov h1 | | | |

**Ako na to:**
- Veľkosť a požiadavky nájdeš v F12 → Sieť dole na lište.
- Cudzie domény: v záložke Sieť zoraď podľa stĺpca Domain. Každá doména, ktorá nie je doménou webu, je cudzia. Často ide o reklamu alebo meranie návštevníkov.
- Osnovu nadpisov vypíše Konzola. Vlož do nej: `[...document.querySelectorAll('h1,h2,h3')].map(h => h.tagName + ' ' + h.textContent.trim()).join('\n')`

**Otázky na rozbor:**
1. Ktorý web je najťažší a čo tvorí väčšinu jeho kilobajtov?
2. Wikipédia má obrovský obsah. Čím to je, že sa napriek tomu načíta rýchlo?
3. Koľko cudzích domén má spravodajský web a čo asi robia? Spomeň si na príbeh „Cookies: kto ťa sleduje po webe“.
4. Má každý web práve jeden h1 a nadpisy v poradí?
5. Jednu vec, ktorú prevezmeš do svojho webu, a jednu, ktorej sa vyhneš.

**Ďalší krok:** [Kde stavajú ostatní](#expedice-weby-4-sk)
