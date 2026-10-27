---
id: svet-weby-cloud-a-server-hu
translationOf: svet-weby-cloud-a-server
lang: hu
type: spine
title: "Hol lakik a weboldalad"
readingTime: 1
standalone: true
teaser: "A számítógépeden lévő index.html fájlt a barátod nem tudja megnyitni. Ahhoz, hogy bárki lássa a weboldalt, át kell költöznie egy olyan számítógépre, amely soha nem alszik."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Hol van az a fotód, amely „a felhőben” van?"
recallA: "Egy cég adatközpontjában lévő szerver lemezén, gyakran egy másik országban. A másolatot az interneten keresztül éred el."
lens: weby
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: cloud-a-server
state: edited
highlights:
  - "A szerver szolgáltatást nyújt; a felhő = mások szerverei"
  - "Helyben vs. felhőben: előnyök és függőségek; biztonsági mentés egy másik helyen"
  - "Az adatok egy adatközpontban vannak valamelyik országban; az EU-ban a GDPR érvényes"
carriers: prose|table
---

A számítógépeden lévő index.html fájlt a barátod nem tudja megnyitni. Ahhoz, hogy bárki lássa a weboldalt, át kell költöznie egy olyan számítógépre, amely soha nem alszik.

Ez a számítógép a **szerver**: **szolgáltatást nyújt** másoknak, itt elküldi a weboldalad fájljait mindenkinek, aki kéri őket. A szerveren lévő helyet **tárhelynek** (hosting) hívják. Iskolai weboldalhoz ingyenes: a GitHub Pages vagy a Netlify oldalra feltöltöd a mappát, és egy perc múlva olyan címed van, mint a *szakkorunk.netlify.app*.

A tárhely a **felhő**: a weboldalad egy cég adatközpontjában, **valaki más számítógépén** fut. Ennek vannak **előnyei**: a szerver éjjel-nappal be van kapcsolva, ezer látogatást is elbír egyszerre, a frissítésekről pedig a cég gondoskodik. És vannak **függőségei**: ha a cég megszünteti a szolgáltatást, megemeli az árát vagy letiltja a fiókodat, a weboldal eltűnik. Ezért a weboldal fájljait tartsd meg magadnál is. **A máshol tárolt biztonsági mentés** a biztosításod.

A **domain** egy név, amelyet az emberek megjegyeznek:

| | Tárhely | Domain |
|---|---|---|
| Mi ez | a hely, ahol a weboldal fut | a név, amely a weboldalra mutat |
| Példa | GitHub Pages, Netlify | szakkorunk.hu |
| Kezdetnek | ingyenes | aldomain ingyen, .hu évi néhány ezer forintért |

A domain a szerver IP-címére mutat. Ha másik tárhelyre költözöl, csak átirányítod. A név marad, a szerver kicserélődik.

És hol áll az adatközpont? Valamelyik **országban**, és ott annak az országnak a törvényei érvényesek. Ha a weboldal neveket és e-mail-címeket gyűjt, például egy programra való jelentkezésen keresztül, ezek az adatok is ott vannak. Az **EU**-ban működő szolgáltatásokra a **GDPR** vonatkozik, amely meghatározza, mit tehetnek a személyes adatokkal.

**Próbáld ki!** Írd be az iskolád weboldalának domainjét egy „IP lookup” típusú eszközbe. Melyik cégé a szerver, amelyen a weboldal fut, és melyik országban áll?

**Tovább a weboldalak világában:** → [Lakat a címsorban](#svet-weby-sifrovani-hu)
