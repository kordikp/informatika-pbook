---
id: expedice-stroje-a-site-2-hu
translationOf: expedice-stroje-a-site-2
lang: hu
type: spine
title: "Műhely: az első hálózat a Filiusban"
readingTime: 1
standalone: false
teaser: "A Filius iskoláknak készült hálózatszimulátor."
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
concept: expedice-stroje-a-site-2
conceptTitle: "Műhely: az első hálózat a Filiusban"
objective: "A Filius iskoláknak készült hálózatszimulátor."
state: edited
carriers: prose
---

**🛠 Műhely** · 2. lépés / 5 · [Internet a hétvégi házban](#expedice-stroje-a-site-hu)

A **Filius** iskoláknak készült hálózatszimulátor. Ingyenes, és nem kell hozzá fiók. A Filius II a böngészőben fut a filius-ii.net oldalon (egyelőre béta), a Filius Classicot a lernsoftware-filius.de oldalról töltheted le Windowsra, Macre és Linuxra. A felület német vagy angol, de elég, ha az ikonokat érted. A leírás a Classicra vonatkozik, a Filius II kezelőelemei hasonlók.

**Az első 30 perc:**

1. Tervező módban (kalapács ikon) húzz a felületre két számítógépet és egy **switchet**.
2. A kábel eszközzel kösd össze mindkét gépet a switchcsel.
3. Dupla kattintással nyisd meg az első gépet, és állítsd be a 192.168.0.10 címet és a 255.255.255.0 maszkot (ez a /24). A második gép címe legyen 192.168.0.11.
4. Válts szimulációs módra (zöld háromszög).
5. Az első gépen nyisd meg a szoftvertelepítést, és add hozzá a **parancssort** (Befehlszeile vagy Command line).
6. Írd be: ping 192.168.0.11. A kábelek villogni kezdenek, és látod a válaszokat az idővel együtt.
7. Kísérlet: menj vissza tervező módba, és változtasd meg a második gép címét 192.168.1.11-re. A ping most nem megy át. Magyarázd meg, miért, ebben az expedíció 1. lépése segít.
8. Bónusz: szimuláció közben nyisd meg dupla kattintással a switch táblázatát. A switch megjegyzi, melyik gép melyik kábelen van.

**A siker feltétele:** a 6. pontban átmegy a ping, és a 7. pontban meg tudod magyarázni, miért nem ment át.

**Következő lépés:** [Elemzés: merre utazik a csomag az óceánon át](#expedice-stroje-a-site-3-hu)
