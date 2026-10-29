---
id: expedice-weby-3-hu
translationOf: expedice-weby-3
lang: hu
type: spine
title: "Elemezz egy weboldalt, amely húsz éve működik"
readingTime: 1
standalone: false
teaser: "Válassz három weboldalt: a cseh Jak psát web kézikönyvet, egy cikket a Wikipédián és egy tetszőleges nagy hírportált."
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
conceptTitle: "Elemezz egy weboldalt, amely húsz éve működik"
objective: "Válassz három weboldalt: a cseh Jak psát web kézikönyvet, egy cikket a Wikipédián és egy tetszőleges nagy hírportált."
state: edited
carriers: prose|table
---

**🔍 Elemzés** · 3. lépés / 5 · [Száz kilobájt](#expedice-weby-hu)

Válassz három weboldalt: a cseh [Jak psát web](https://www.jakpsatweb.cz) kézikönyvet, egy cikket a [Wikipédián](https://en.wikipedia.org/wiki/Hack_Club) és egy tetszőleges nagy hírportált. Mindegyikhez töltsd ki a táblázatot:

| | Jak psát web | Wikipédia | hírek |
|---|---|---|---|
| átvitt adat (kB) | | | |
| kérések száma | | | |
| idegen domainek száma | | | |
| h1 címsorok száma | | | |

**Hogyan csináld:**
- A méretet és a kéréseket az F12 → Hálózat alján, a sávban találod.
- Idegen domainek: a Hálózat fülön rendezd a Domain oszlop szerint. Minden domain, amely nem az oldal saját domainje, idegen. Gyakran reklámról vagy a látogatók méréséről van szó.
- A címsorok vázlatát a Konzol írja ki. Másold be: `[...document.querySelectorAll('h1,h2,h3')].map(h => h.tagName + ' ' + h.textContent.trim()).join('\n')`

**Elemző kérdések:**
1. Melyik oldal a legnehezebb, és mi teszi ki a kilobájtjai nagy részét?
2. A Wikipédián óriási a tartalom. Mitől töltődik be mégis gyorsan?
3. Hány idegen domainje van a hírportálnak, és mit csinálhatnak? Gondolj a „Sütik: ki követ téged a weben” történetre.
4. Minden oldalon pontosan egy h1 van, és sorrendben vannak a címsorok?
5. Egy dolog, amelyet átveszel a saját oldaladba, és egy, amelyet elkerülsz.

**Következő lépés:** [Hol építenek a többiek](#expedice-weby-4-hu)
