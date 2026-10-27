---
id: svet-aplikace-dekompozice-sk
translationOf: svet-aplikace-dekompozice
lang: sk
type: spine
title: "Apka na papieri"
readingTime: 1
standalone: true
teaser: "Chceš apku pre triedu: služby, hlasovanie o výlete, vyberanie peňazí, chat a rozvrh. Keď začneš všetko naraz, nedokončíš nič."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Ako rozložíš úlohu „zorganizovať triedny výlet“ a prečo záleží na poradí častí?"
recallA: "Na menšie úlohy: cieľ a rozpočet, miesto, doprava, program, prihlášky. Niektoré závisia od iných: dopravu objednáš až po výbere miesta a počtu ľudí."
lens: aplikace
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
state: edited
highlights:
  - "Zadanie: východiskový stav, cieľ, obmedzenia"
  - "Čiastkové úlohy a ich závislosti (čo musí byť hotové skôr)"
  - "Pomenovaná čiastková úloha je v kóde podprogram"
carriers: prose|image
---

Chceš apku pre triedu: služby, hlasovanie o výlete, vyberanie peňazí, chat a rozvrh. Keď začneš všetko naraz, nedokončíš nič.

Najprv **zadanie**. **Východiskový stav:** služby sa píšu kriedou na tabuľu a každý týždeň na ne niekto zabudne. **Cieľ:** každý ráno v mobile vidí, akú má službu. **Obmedzenia:** zadarmo, jeden týždeň práce a musí to fungovať na všetkých mobiloch v triede.

Potom apku **rozložíš** na časti, ktoré zvládneš každú zvlášť. Pri apkách sú to zvyčajne **obrazovky** a čo sa na nich deje: prihlásenie, prehľad služieb, výmena služby, nastavenia. Každá je **čiastková úloha**.

![Apka na služby rozložená na obrazovky a ich závislosti](images/svet-aplikace-obrazovky.sk.svg)

**Závislosti** určia poradie. Prehľad služieb sa nedá ukázať, kým apka nevie, kto si (prihlásenie) a kto má kedy službu (zoznam). Výmena služby potrebuje prehľad. Preto sa stavia najprv **najmenšia verzia, ktorá je na niečo dobrá**: zoznam, prihlásenie a prehľad. Hlasovanie a chat počkajú. Tej prvej verzii sa hovorí MVP, najmenší užitočný produkt.

Čo sa opakuje, si **pomenuješ** a použiješ viackrát. Kartičku *meno · služba · deň* ukazuje prehľad aj výmena služby. Napíšeš ju raz, v kóde ako **podprogram** *ukazKarticku(ziak)*, a obe obrazovky ju len zavolajú. Keď kartičku zmeníš, zmení sa všade.

**Vyskúšaj to!** Vymysli apku, ktorá by sa ti hodila. Rozlož ju na obrazovky a zakrúžkuj tie, bez ktorých nemá zmysel. To je tvoja prvá verzia.

**Ďalej vo svete aplikácií:** → [Semafor so skrytou chybou](#svet-aplikace-over-a-oprav-sk)
