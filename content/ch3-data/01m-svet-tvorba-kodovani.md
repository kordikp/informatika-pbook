---
id: svet-tvorba-kodovani
type: spine
title: "Proč má minuta videa stovky megabajtů"
readingTime: 1
standalone: true
teaser: "Natočíš mobilem minutu videa ve 4K a zabere stovky megabajtů. Tutéž minutu pošleš přes chat a dorazí za pár vteřin. Kam se poděla ta čísla?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč má fotka s větším rozlišením větší soubor?"
recallA: "Skládá se z více pixelů a každý pixel je zakódovaný čísly. Víc pixelů znamená víc čísel, tedy víc bytů."
lang: cs
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
  - "Kódování = domluvená pravidla převodu (pixel → číslo, písmeno → číslo)"
  - "Velikost dat: bit, byte, MB, GB; rozlišení a kvalita zvětšují soubor"
  - "Typ souboru (přípona) říká, jak čísla číst; komprese šetří místo"
carriers: prose|image
---

Natočíš mobilem minutu videa ve 4K a zabere stovky megabajtů. Tutéž minutu pošleš přes chat a dorazí za pár vteřin. Kam se poděla ta čísla?

Video je řada obrázků, **snímků**, obvykle 30 za sekundu. Každý snímek je mřížka pixelů a každý pixel jsou tři čísla: kolik červené, zelené a modré. To je **kódování**, domluvená pravidla, jak obraz převést na čísla. Jedno číslo barvy zabere 8 **bitů**, tedy jeden **byte**. Snímek 4K má 3840 × 2160, přes 8 milionů pixelů, a tedy asi 25 **MB** čísel. Třicet snímků za sekundu, šedesát sekund: nezkomprimovaná minuta by měla přes 40 **GB**.

![Minuta videa: snímky, pixely a komprese](images/svet-tvorba-video.svg)

Že má jen pár set MB, zařídí **komprese**. Video neukládá každý snímek celý. Uloží jeden celý a u dalších jen to, co se změnilo: když se ve scéně pohne jen ruka, zbytek obrazu se neukládá znovu. A vynechá detaily, kterých si oko nevšimne. Proto se video s konfetami nebo deštěm komprimuje špatně: mění se v něm skoro všechno.

Když video posíláš přes chat, appka ho překóduje: zmenší **rozlišení** a víc ho zkomprimuje. Proto dorazí rychle a vypadá hůř. Víc detailů znamená víc čísel, tedy větší soubor.

Při exportu videa z editoru volíš právě tyhle věci: rozlišení (1080p stačí na mobil i na projektor ve třídě), snímky za sekundu a kvalitu. **Typ souboru** říká, jak čísla číst: **.mp4** je video, **.mp3** zvuk, **.png** obrázek. I zvuk jsou čísla, 44 100 vzorků za sekundu. Formát .mp3 ho komprimuje tak, že vynechá tóny, které ucho stejně neslyší.

**Zkus to!** Natoč deset vteřin videa mobilem dvakrát: jednou v nejvyšším rozlišení, jednou v nejnižším. Porovnej velikosti souborů. Kolikrát se liší a odpovídá to počtu pixelů?

**Dál ve světě tvorby s AI:** → [Proč generování trvá](#svet-tvorba-uvnitr-zarizeni)
