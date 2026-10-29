---
id: vyzva-tvorba-kodovani-hu
translationOf: vyzva-tvorba-kodovani
lang: hu
type: challenge
title: "Hová tűnt 44 gigabájt"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Egy perc 4K videó a mobilról nagyjából 350 MB."
voice: universal
parent: svet-tvorba-kodovani-hu
diagram: null
core: false
status: accepted
concept: kodovani
state: edited
lens: tvorba
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Egy perc 4K videó a mobilról nagyjából 350 MB. Ha a mobil minden képkocka minden pixelét elmentené, tízgigabájtokban mérnénk. Hová lett a többi? És miért „hízik meg” egyik videó jobban, mint a másik?

<!-- task -->

**1. rész.** Számold ki, mekkora lenne egy perc 4K videó (3840 × 2160 pixel, másodpercenként 30 képkocka, pixelenként 3 bájt) tömörítés nélkül. Hányszor több ez, mint 350 MB?

**2. rész.** A kodek olyan program, amely kisebbre nyomja a videót. A teljes képkockát csak időnként menti el, közben főleg a **különbségeket** tárolja az előző képkockához képest. Rendezd sorba a négy tízmásodperces felvételt a fájlméret szerint azonos minőség mellett, a legkisebbtől kezdve:
- A) Nyitófelirat: fehér szöveg feketén, semmi sem mozog.
- B) Egy osztálytársad a kamerába beszél, a kamera állványon van, mögötte fehér fal.
- C) Ugyanez, de a kamera kézben van, és kicsit remeg.
- D) Közeli kép a szélben hulló konfettiről.

**3. rész.** Magyarázd el egy mondatban, miért néz ki egy 8 Mb/s adatsebességű videó a konfettinél elmosódottnak, a feliratnál pedig élesnek.

**A siker feltétele:** 5 %-os pontosságú szám, helyes sorrend és olyan magyarázat, amely a képkockák közötti különbségekre épül.

<!-- hint -->

Egy képkocka 3840 × 2160 × 3 bájt. Egy percben 60 × 30 képkocka van.

<!-- hint -->

Képzeld el, hogy telefonon mondod el egy barátodnak, mi változott az előző képkocka óta. Melyik felvételnél beszélnél a legtovább?

<!-- hint -->

A remegő kamera egyszerre mozdítja el az egész képet. Ezt egy mondattal le lehet írni, „minden egy kicsit balra”. A konfetti viszont darabonként máshogy mozog.

<!-- solution -->

**1.** 3840 × 2160 × 3 = 24 883 200 B képkockánként, kb. 24,9 MB. Egy perc 1800 képkocka, vagyis kb. 44 800 MB ≈ **45 GB**. Ez nagyjából **128-szor több**, mint 350 MB.

**2.** **A < B < C < D.** A felirat nem változik, a különbségek szinte nullák. Az állványos felvételen csak a száj és a szem mozog. A remegő kamera az egész képet elmozdítja, de a kodek ezt egyetlen „mozgásvektorral” leírja, és csak a széleket tölti ki. A konfetti több ezer apró, egymástól független mozgás, így minden képkocka szinte teljesen új.

**3.** Az adatsebesség egy rögzített bitkeret másodpercenként. A feliratnak kevés is elég, a konfettinek sokkal több kellene, ezért a kodek eldobja a részleteket, és a kép kis négyzetekre esik szét. Ezért néznek ki rosszabbul a közösségi oldalakon a havas vagy konfettis videók.

<!-- more -->

Vegyél fel a mobiloddal 10 másodpercet állványról és 10 másodpercet kézből, szélben mozgó lombokra. Hasonlítsd össze a fájlméreteket: stimmel a sorrend? Aztán játszd végig a „Mennyit nyom a kép és a hang” extra játékot, és számold ki, hogyan spórolja meg a 4:2:0 trükk az adatok felét úgy, hogy senki sem veszi észre.
