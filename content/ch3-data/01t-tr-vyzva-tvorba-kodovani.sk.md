---
id: vyzva-tvorba-kodovani-sk
translationOf: vyzva-tvorba-kodovani
lang: sk
type: challenge
title: "Kam zmizlo 44 gigabajtov"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Minúta 4K z mobilu má asi 350 MB."
voice: universal
parent: svet-tvorba-kodovani-sk
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

Minúta 4K z mobilu má asi 350 MB. Keby mobil ukladal každý pixel každej snímky, mala by desiatky gigabajtov. Kam sa podel zvyšok? A prečo sa niektoré videá „nafúknu“ viac ako iné?

<!-- task -->

**Časť 1.** Vypočítaj, koľko by mala minúta videa v 4K (3840 × 2160 pixelov, 30 snímok za sekundu, 3 bajty na pixel) bez kompresie. Koľkokrát viac je to ako 350 MB?

**Časť 2.** Kodek je program, ktorý video zmenšuje. Celú snímku uloží len občas, medzitým ukladá hlavne **rozdiely** oproti predchádzajúcej snímke. Zoraď štyri desaťsekundové zábery podľa veľkosti súboru pri rovnakej kvalite, od najmenšieho:
- A) Úvodný titulok: biely text na čiernom, nič sa nehýbe.
- B) Spolužiak hovorí do kamery na statíve, za ním biela stena.
- C) To isté, ale kamera je v ruke a trochu sa trasie.
- D) Detail padajúcich konfiet vo vetre.

**Časť 3.** Vysvetli jednou vetou, prečo video s dátovým tokom 8 Mb/s vyzerá pri konfetách rozmazane a pri titulku ostro.

**Kritérium úspechu:** číslo s presnosťou na 5 %, správne poradie a vysvetlenie, ktoré stojí na rozdieloch medzi snímkami.

<!-- hint -->

Jedna snímka má 3840 × 2160 × 3 bajtov. Snímok za minútu je 60 × 30.

<!-- hint -->

Predstav si, že kamarátovi po telefóne opisuješ, čo sa zmenilo od minulej snímky. Pri ktorom zábere budeš hovoriť najdlhšie?

<!-- hint -->

Trasúca sa kamera posunie celý obraz naraz. To sa dá opísať jednou vetou „všetko o kúsok doľava“. Konfety sa však hýbu každá inak.

<!-- solution -->

**1.** 3840 × 2160 × 3 = 24 883 200 B na snímku, asi 24,9 MB. Za minútu je to 1800 snímok, teda asi 44 800 MB ≈ **45 GB**. To je zhruba **128× viac** ako 350 MB.

**2.** **A < B < C < D.** Titulok sa nemení, rozdiely sú takmer nulové. Na statíve sa menia len ústa a oči. Trasúca sa kamera posunie celý obraz, ale kodek posun opíše jedným „vektorom pohybu“ a doplní len okraje. Konfety sú tisíce drobných nezávislých pohybov, takže každá snímka je takmer úplne nová.

**3.** Dátový tok je pevný rozpočet bitov na sekundu. Titulku stačí málo, konfety by potrebovali oveľa viac, a tak kodek zahodí detaily a obraz sa rozpadne na štvorčeky. Preto videá so snehom alebo konfetami vyzerajú na sieťach horšie.

<!-- more -->

Natoč mobilom 10 sekúnd na statíve a 10 sekúnd s kamerou v ruke proti lístiu vo vetre. Porovnaj veľkosti súborov: sedí poradie? Potom si zahraj hru navyše „Koľko váži obraz a zvuk“ a vypočítaj, ako trik 4:2:0 ušetrí polovicu dát bez toho, aby si to ktokoľvek všimol.
