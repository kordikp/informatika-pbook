---
id: expedice-stroje-a-site-5-sk
translationOf: expedice-stroje-a-site-5
lang: sk
type: spine
title: "Projekt: sieť chaty"
readingTime: 1
standalone: false
teaser: "Zadanie: vo Filiuse postav sieť chaty s týmito časťami: - Herná sieť 192.168.1.0/24: dva notebooky a switch."
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
concept: expedice-stroje-a-site-5
conceptTitle: "Projekt: sieť chaty"
objective: "Zadanie: vo Filiuse postav sieť chaty s týmito časťami: - Herná sieť 192.168.1.0/24: dva notebooky a switch."
state: edited
carriers: prose
---

**🚀 Projekt** · krok 5 z 5 · [Internet na chate](#expedice-stroje-a-site-sk)

**Zadanie:** vo Filiuse postav sieť chaty s týmito časťami:

- **Herná sieť** 192.168.1.0/24: dva notebooky a switch.
- **Sieť múdrych vecí** 192.168.2.0/24: „kamera“ (počítač) a switch.
- **Router** (vo Filiuse „Vermittlungsrechner“ alebo „Router“) s dvoma kartami: 192.168.1.1 a 192.168.2.1. Každému zariadeniu nastav predvolenú bránu na adresu routera vo svojej sieti.
- **Server** v hernej sieti s webovým serverom a DNS serverom. Na webový server daj stránku „Fotky z chaty“. V DNS priraď menu www.chata.cz adresu servera.
- Notebookom nastav ako DNS server adresu svojho servera.

**Testy** (napíš si vopred, čo má vyjsť):

1. Ping z notebooku na kameru prejde cez router.
2. Prehliadač v notebooku otvorí www.chata.cz podľa mena, nie podľa adresy.
3. Keď vypneš DNS server, stránka podľa mena nejde, podľa adresy áno. Prečo?
4. Spusti v simulácii dátový prenos a opíš, koľko balíčkov prejde routerom pri jednom načítaní stránky.

**Kritérium úspechu:** všetky štyri testy dopadnú podľa tvojej predpovede. Napíš k tomu päť viet o ceste jedného balíčka: od notebooku cez switch, router a DNS k stránke.

**Navyše:** čo by sa stalo s fotkami, keby server zhorel? Navrhni zálohu podľa výzvy „Koľko rokov vydržia tvoje fotky?“.

**Zostáva záverečná skúška expedície:** [Internet na chate](#mission-expedice-stroje-a-site)
