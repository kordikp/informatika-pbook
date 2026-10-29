---
id: expedice-stroje-a-site-5
type: spine
title: "Projekt: síť chaty"
readingTime: 1
standalone: false
teaser: "Zadání: ve Filiu postav síť chaty s těmito částmi: - Herní síť 192.168.1.0/24: dva notebooky a switch."
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
concept: expedice-stroje-a-site-5
conceptTitle: "Projekt: síť chaty"
state: edited
carriers: prose
---

**🚀 Projekt** · krok 5 z 5 · [Internet na chatě](#expedice-stroje-a-site)

**Zadání:** ve Filiu postav síť chaty s těmito částmi:

- **Herní síť** 192.168.1.0/24: dva notebooky a switch.
- **Síť chytrých věcí** 192.168.2.0/24: „kamera“ (počítač) a switch.
- **Router** (ve Filiu „Vermittlungsrechner“ nebo „Router“) se dvěma kartami: 192.168.1.1 a 192.168.2.1. Každému zařízení nastav výchozí bránu na adresu routeru ve své síti.
- **Server** v herní síti s webovým serverem a DNS serverem. Na webový server dej stránku „Fotky z chaty“. V DNS přiřaď jménu www.chata.cz adresu serveru.
- Notebookům nastav jako DNS server adresu svého serveru.

**Testy** (napiš si předem, co má vyjít):

1. Ping z notebooku na kameru projde přes router.
2. Prohlížeč v notebooku otevře www.chata.cz podle jména, ne podle adresy.
3. Když vypneš DNS server, stránka podle jména nejde, podle adresy ano. Proč?
4. Pusť v simulaci datový přenos a popiš, kolik balíčků projde routerem při jednom načtení stránky.

**Kritérium úspěchu:** všechny čtyři testy dopadnou podle tvé předpovědi. Napiš k tomu pět vět o cestě jednoho balíčku: od notebooku přes switch, router a DNS ke stránce.

**Navíc:** co by se stalo s fotkami, kdyby server shořel? Navrhni zálohu podle výzvy „Kolik let vydrží tvoje fotky?“.

**Zbývá závěrečná zkouška expedice:** [Internet na chatě](#mission-expedice-stroje-a-site)
