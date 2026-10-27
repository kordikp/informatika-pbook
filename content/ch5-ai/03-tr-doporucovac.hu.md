---
id: doporucovac-hu
translationOf: doporucovac
lang: hu
type: spine
title: "Az ajánlórendszer és a hírfolyamod"
readingTime: 1
standalone: true
teaser: "Megnézel egy cicás videót. Öt perc múlva tele van a hírfolyamod cicákkal. Ki döntött így?"
voice: universal
parent: null
diagram: doporucovaci-smycka-hu
core: true
recallQ: "Miért mutat a hírfolyamod egyre több egyfajta videót?"
recallA: "Az algoritmus a jeleidből tanul (mit nézel és mennyi ideig), és többet kínál abból, ami ott tart. Így alakul ki egy hurok, egy buborék."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: doporucovac
conceptTitle: "Az ajánlórendszer és a hírfolyamod"
objective: "Megnézel egy cicás videót. Öt perc múlva tele van a hírfolyamod cicákkal. Ki döntött így?"
state: core
highlights:
  - "Jelek: kattintások, nézési idő, átugrás, hasonló felhasználók"
  - "A visszacsatolási hurok és a szűrőbuborék"
  - "A figyelemre épülő üzleti modell és a függőséget okozó dizájn (végtelen görgetés, automatikus lejátszás)"
carriers: prose|diagram
---

Megnézel egy cicás videót. Öt perc múlva tele van a hírfolyamod cicákkal. Ki döntött így?

Egy közösségi oldalon videók milliói vannak. A hírfolyamodba csak néhány fér bele, és ezeket egy **ajánlórendszer** választja ki. **Jeleket** figyel: mire kattintasz, **mennyi ideig nézed**, mit ugrasz át, mit osztasz meg, és mit néznek a hozzád hasonló ízlésű emberek. Aztán többet kínál abból, ami a legvalószínűbben ott tart.

Képzeld el, hogy néhány körön át főleg cicás videókra kattintasz. A hírfolyam legközelebb többet mutat belőlük. Mivel többet látsz belőlük, még többször kattintasz rájuk. Próbáld ki a minijátékban: ki tudod rágni magad egy egytémás buborékból?

Néhány kör után a hírfolyam tele van egyetlen fajtával. Az algoritmus a kattintásaidból tanul, a kattintásaidat pedig az befolyásolja, amit megmutatott. Ez a **visszacsatolási hurok** hozza létre a **buborékot**.

Miért csinálja ezt az oldal? „Ingyenes”, mert a reklámokból keres pénzt. **Minél tovább nézed, annál több reklámot látsz.**

**Próbáld ki!** Egy hétig adj szándékos jeleket a hírfolyamodnak egy új témáról (például az űrről): néhány keresés, végignézett videók, lájkok. Figyeld, mennyi idő múlva jelenik meg magától a téma. Épp most láttad munka közben a profilodat.

> **Vigyázz, gyakori tévedés:** „A hírfolyam a legjobbat vagy a legújabbat mutatja.” A hírfolyam azt mutatja, ami a legvalószínűbben a legtovább ott tart. És nem csak a lájkjaidból ismer. Azt is számolja, mennyi ideig nézel valamit.

**Tovább:** A végtelen hírfolyam olyan hurok, amelynek szándékosan nincs vége. Egy programban a huroknak meg kell állnia. Itt te állítod meg. → [Ismétlés (ciklus)](#c/opakovani)
