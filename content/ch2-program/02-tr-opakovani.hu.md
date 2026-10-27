---
id: opakovani-hu
translationOf: opakovani
lang: hu
type: spine
title: "Ismétlés (ciklus)"
readingTime: 2
standalone: true
teaser: "A közösségi oldalak hírfolyama sosem ér véget. Még egy videó, még egy, még egy… Hogyan lehet egy ilyen „újra és újra” dolgot beírni egy programba?"
voice: universal
parent: null
diagram: anim-rizeni-toku-hu
core: true
recallQ: "Mikor használod azt, hogy „ismételd 10×”, és mikor azt, hogy „ismételd, amíg…”?"
recallA: "Rögzített számot, ha előre tudod, hányszor. „Amíg”-ot, ha attól függ, mi történik, például amíg a robot neki nem megy a falnak."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: opakovani
conceptTitle: "Ismétlés (ciklus)"
objective: "A közösségi oldalak hírfolyama sosem ér véget. Még egy videó, még egy, még egy… Hogyan lehet egy ilyen „újra és újra” dolgot beírni egy programba?"
state: core
highlights:
  - "A ciklusmag és az ismétlések száma"
  - "Ismételd n× vs. ismételd, amíg (a leállás feltétele)"
  - "Végesség: a ciklusnak véget kell érnie, különben a program végtelen ciklusba kerül"
carriers: prose|animation
---

A közösségi oldalak hírfolyama sosem ér véget. Még egy videó, még egy, még egy… Hogyan lehet egy ilyen „újra és újra” dolgot beírni egy programba?

Ha valami újra és újra megtörténik, nem írod le százszor. **Egyszer** írod le, és megmondod, **hányszor** ismétlődjön, vagy **amíg** mi teljesül. Ezt hívják **ciklusnak**. A benne ismétlődő parancsok a **ciklusmag**.

A robotnak meg kell kerülnie egy oszlopot, és vissza kell térnie a startra. A hosszú program 8 blokkból áll: *menj 3-at, fordulj jobbra*, és ez az egész négyszer. Ugyanaz a pár ismétlődik, így elég ennyi: **ismételd 4×: menj 3-at, fordulj jobbra**. Nyolc helyett három blokk. És ha a robotnak egy olyan folyosó faláig kell eljutnia, amelynek nem ismeri a hosszát? Az *ismételd 5×: menj 1-et* egy rövid folyosón falnak megy, egy hosszúban túl korán megáll. Ez működik: **ismételd, amíg nincs a fal előtt: menj 1-et**.

**Rögzített számú** ciklust akkor használsz, ha **előre tudod, hányszor**: egy négyzet négy oldala. **Feltételes** ciklust, ha attól függ, mi történik: menj, amíg el nem éred a falat.

Két dologra figyelj. A feltételt **minden kör elején** ellenőrzi a gép, nem a ciklusmag közepén. És a ciklusnak egyszer **véget kell érnie**. Ha a feltétel sosem szűnik meg teljesülni, a program **végtelen ciklusba kerül**. Ez néha hiba, néha szándékos: egy játékciklus vagy egy végtelen hírfolyam szándékosan fut folyamatosan.

**Próbáld ki!** Keress három ismétlést a napodban, és mindegyiknél döntsd el, hogy „ismételd 10×” vagy „ismételd, amíg…”. Fogmosás (két percig, vagy amíg tiszta nem lesz?), körök az edzésen, a hírfolyam görgetése. Mi a hírfolyam leállási feltétele? Van egyáltalán?

> **Vigyázz, gyakori tévedés:** „A ciklus folyamatosan figyeli a feltételt, a kör közepén is.” Csak minden kör elején ellenőrzi. Ha a feltétel a kör közepén teljesül, a kör még végigfut.

**Tovább:** A végtelen hírfolyam olyan ciklus, amelynek szándékosan nincs vége. Hogy a közösségi oldalak miért csinálják így, azt az 5. fejezetben látod majd. → [Az ajánlórendszer és a hírfolyamod](#c/doporucovac)
