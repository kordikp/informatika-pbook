---
id: vyzva-tvorba-ai-se-uci-z-dat-sk
translationOf: vyzva-tvorba-ai-se-uci-z-dat
lang: sk
type: challenge
title: "Vedec, ktorý v dátach takmer nie je"
level: 3
minutes: 20
readingTime: 2
standalone: true
teaser: "Generátor kreslí vedca ako staršieho pána s okuliarmi v bielom plášti."
voice: universal
parent: svet-tvorba-ai-se-uci-z-dat-sk
diagram: null
core: false
status: accepted
concept: ai-se-uci-z-dat
state: edited
lens: tvorba
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Generátor kreslí vedca ako staršieho pána s okuliarmi v bielom plášti. Logické, hovoríš si, takých je v dátach najviac. Lenže výpočet ukáže, že taký „typický vedec“ je v dátach v menšine.

<!-- task -->

Vo vymyslenej trénovacej sade je 10 000 obrázkov s popiskom „vedec“. Z nich 70 % sú muži, 80 % má biely plášť, 60 % okuliare a 65 % je starších ako 50 rokov. Predpokladaj, že vlastnosti spolu nesúvisia (sú **nezávislé**).

1. Generátor pri každej vlastnosti vyberie tú najčastejšiu možnosť. Koľko percent vedcov v dátach má **všetky štyri** vlastnosti naraz?
2. Poctivý generátor by kreslil muža v 70 % prípadov. Aká je pravdepodobnosť, že zo 4 obrázkov budú náhodou všetci muži?
3. Necháš vygenerovať 20 obrázkov a na všetkých 20 je muž. Aké pravdepodobné by to bolo pri poctivom generátore? Je to doklad, že model predsudok **zosilňuje**?

**Kritérium úspechu:** tri čísla zaokrúhlené na celé percentá (pri treťom stačí rád) a jedna veta záveru.

<!-- hint -->

Pri nezávislých vlastnostiach zistíš pravdepodobnosť, že platia všetky naraz, tak, že jednotlivé pravdepodobnosti vynásobíš.

<!-- hint -->

Štyria muži za sebou: 0,7 × 0,7 × 0,7 × 0,7.

<!-- hint -->

0,7 na dvadsiatu vypočítaš postupne: 0,7² = 0,49, 0,7⁴ ≈ 0,24, 0,7⁸ ≈ 0,058, 0,7¹⁶ ≈ 0,0033 a nakoniec × 0,7⁴.

<!-- solution -->

**1.** 0,7 × 0,8 × 0,6 × 0,65 ≈ 0,22, teda asi **22 %**. „Starší muž s okuliarmi v plášti“ zodpovedá len asi pätine dát. Generátor neukazuje typického vedca z dát, ale **najčastejšiu hodnotu každej vlastnosti zvlášť**. Keď ich poskladáš dokopy, vznikne kombinácia, ktorá je v dátach vzácna.

**2.** 0,7⁴ ≈ 0,24, teda **24 %**. Štyria muži zo štyroch ešte nič nedokazujú, stáva sa to zhruba pri každom štvrtom pokuse.

**3.** 0,7²⁰ ≈ 0,0008, teda asi **0,08 %**, menej ako raz z tisíc pokusov. To je silný doklad, že model nekreslí podľa dát, ale stereotyp ešte zostruje.

**Záver:** zosilnenie sa meria počítaním na veľkej vzorke, nie podľa jedného obrázka. Rovnaký princíp poznáš z výletu „Vnútri chatbota“: keď model berie vždy najpravdepodobnejšiu voľbu, pestrosť sa stráca.

<!-- more -->

Navrhni vlastný audit. Vyber povolanie a vopred si napíš, čo budeš počítať (vek, pohlavie, oblečenie, prostredie) a aký výsledok by zodpovedal skutočnosti. Generátory obrázkov sú zvyčajne od 13 rokov, takže mladší robia audit s rodičom alebo na obrázkoch, ktoré vygeneruje starší súrodenec či pani učiteľka. Výsledky daj do tabuľky a porovnaj ich so skutočnou štatistikou.
