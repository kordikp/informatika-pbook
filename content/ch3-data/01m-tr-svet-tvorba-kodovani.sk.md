---
id: svet-tvorba-kodovani-sk
translationOf: svet-tvorba-kodovani
lang: sk
type: spine
title: "Prečo má minúta videa stovky megabajtov"
readingTime: 1
standalone: true
teaser: "Natočíš mobilom minútu videa v 4K a zaberie stovky megabajtov. Tú istú minútu pošleš cez chat a dorazí za pár sekúnd. Kam sa podeli tie čísla?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo má fotka s väčším rozlíšením väčší súbor?"
recallA: "Skladá sa z viacerých pixelov a každý pixel je zakódovaný číslami. Viac pixelov znamená viac čísel, teda viac bajtov."
lens: tvorba
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: kodovani
state: edited
highlights:
  - "Kódovanie = dohodnuté pravidlá prevodu (pixel → číslo, písmeno → číslo)"
  - "Veľkosť dát: bit, bajt, MB, GB; rozlíšenie a kvalita zväčšujú súbor"
  - "Typ súboru (prípona) hovorí, ako čísla čítať; kompresia šetrí miesto"
carriers: prose|image
---

Natočíš mobilom minútu videa v 4K a zaberie stovky megabajtov. Tú istú minútu pošleš cez chat a dorazí za pár sekúnd. Kam sa podeli tie čísla?

Video je rad obrázkov, **snímok**, obvykle 30 za sekundu. Každá snímka je mriežka pixelov a každý pixel sú tri čísla: koľko červenej, zelenej a modrej. To je **kódovanie**, dohodnuté pravidlá, ako obraz previesť na čísla. Jedno číslo farby zaberie 8 **bitov**, teda jeden **bajt**. Snímka 4K má 3840 × 2160, cez 8 miliónov pixelov, a teda asi 25 **MB** čísel. Tridsať snímok za sekundu, šesťdesiat sekúnd: neskomprimovaná minúta by mala cez 40 **GB**.

![Minúta videa: snímky, pixely a kompresia](images/svet-tvorba-video.sk.svg)

To, že má len pár sto MB, zariadi **kompresia**. Video neukladá každú snímku celú. Uloží jednu celú a pri ďalších len to, čo sa zmenilo: keď sa v scéne pohne len ruka, zvyšok obrazu sa neukladá znova. A vynechá detaily, ktoré oko nezbadá. Preto sa video s konfetami alebo dažďom komprimuje zle: mení sa v ňom skoro všetko.

Keď video posielaš cez chat, appka ho prekóduje: zmenší **rozlíšenie** a viac ho skomprimuje. Preto dorazí rýchlo a vyzerá horšie. Viac detailov znamená viac čísel, teda väčší súbor.

Pri exporte videa z editora voliš práve tieto veci: rozlíšenie (1080p stačí na mobil aj na projektor v triede), snímky za sekundu a kvalitu. **Typ súboru** hovorí, ako čísla čítať: **.mp4** je video, **.mp3** zvuk, **.png** obrázok. Aj zvuk sú čísla, 44 100 vzoriek za sekundu. Formát .mp3 ho komprimuje tak, že vynechá tóny, ktoré ucho aj tak nepočuje.

**Vyskúšaj to!** Natoč desať sekúnd videa mobilom dvakrát: raz v najvyššom rozlíšení, raz v najnižšom. Porovnaj veľkosti súborov. Koľkokrát sa líšia a zodpovedá to počtu pixelov?

**Ďalej vo svete tvorby s AI:** → [Prečo generovanie trvá](#svet-tvorba-uvnitr-zarizeni-sk)
