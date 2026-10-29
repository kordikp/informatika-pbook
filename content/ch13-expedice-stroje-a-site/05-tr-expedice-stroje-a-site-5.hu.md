---
id: expedice-stroje-a-site-5-hu
translationOf: expedice-stroje-a-site-5
lang: hu
type: spine
title: "Projekt: a hétvégi ház hálózata"
readingTime: 1
standalone: false
teaser: "Feladat: a Filiusban építsd fel a hétvégi ház hálózatát ezekkel a részekkel: - Játékhálózat 192.168.1.0/24: két laptop és egy switch."
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
conceptTitle: "Projekt: a hétvégi ház hálózata"
objective: "Feladat: a Filiusban építsd fel a hétvégi ház hálózatát ezekkel a részekkel: - Játékhálózat 192.168.1.0/24: két laptop és egy switch."
state: edited
carriers: prose
---

**🚀 Projekt** · 5. lépés / 5 · [Internet a hétvégi házban](#expedice-stroje-a-site-hu)

**Feladat:** a Filiusban építsd fel a hétvégi ház hálózatát ezekkel a részekkel:

- **Játékhálózat** 192.168.1.0/24: két laptop és egy switch.
- **Okoseszköz-hálózat** 192.168.2.0/24: egy „kamera” (számítógép) és egy switch.
- **Router** (a Filiusban „Vermittlungsrechner” vagy „Router”) két kártyával: 192.168.1.1 és 192.168.2.1. Minden eszköznél állítsd be alapértelmezett átjárónak a router saját hálózatbeli címét.
- **Szerver** a játékhálózatban webszerverrel és DNS-szerverrel. A webszerverre tegyél egy „Fotók a hétvégi házból” oldalt. A DNS-ben rendeld hozzá a www.chata.cz névhez a szerver címét.
- A laptopoknál állítsd be DNS-szervernek a saját szervered címét.

**Tesztek** (írd le előre, minek kell kijönnie):

1. A laptopról a kamerára küldött ping átmegy a routeren.
2. A laptop böngészője név alapján nyitja meg a www.chata.cz oldalt, nem cím alapján.
3. Ha kikapcsolod a DNS-szervert, az oldal név alapján nem jön be, cím alapján igen. Miért?
4. Indíts adatátvitelt a szimulációban, és írd le, hány csomag megy át a routeren az oldal egyetlen betöltésekor.

**A siker feltétele:** mind a négy teszt az előrejelzésed szerint alakul. Írj hozzá öt mondatot egy csomag útjáról: a laptoptól a switchen, a routeren és a DNS-en át az oldalig.

**Extra:** mi lenne a fotókkal, ha a szerver leégne? Tervezz mentést a „Hány évig bírják a fotóid?” kihívás alapján.

**Hátravan még az expedíció záróvizsgája:** [Internet a hétvégi házban](#mission-expedice-stroje-a-site)
