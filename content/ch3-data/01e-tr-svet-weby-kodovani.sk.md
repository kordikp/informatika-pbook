---
id: svet-weby-kodovani-sk
translationOf: svet-weby-kodovani
lang: sk
type: spine
title: "Rozsypaný čaj"
readingTime: 1
standalone: true
teaser: "Napíšeš na web „čaj“ a návštevník vidí „ÄŤaj“. Web sa nepokazil. Len sa s prehliadačom nedohodol, ako má čísla čítať."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo má fotka s väčším rozlíšením väčší súbor?"
recallA: "Skladá sa z viacerých pixelov a každý pixel je zakódovaný číslami. Viac pixelov znamená viac čísel, teda viac bajtov."
lens: weby
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

Napíšeš na web „čaj“ a návštevník vidí „ÄŤaj“. Web sa nepokazil. Len sa s prehliadačom nedohodol, ako má čísla čítať.

Na disku aj v sieti je stránka len **čísla**. Ktoré číslo znamená ktoré písmeno, určuje **kódovanie**, dohodnutá tabuľka prevodu. Na webe sa dnes používa **UTF-8**, ktoré má číslo pre každé písmeno sveta aj pre emoji. Písmeno *a* zaberie 1 **bajt**, *č* 2 bajty, emoji 🙂 4 bajty. Keď autor uloží text v UTF-8 a prehliadač ho prečíta podľa starej stredoeurópskej tabuľky, každé *č* sa rozpadne na dva nezmyselné znaky. Preto má každá stránka v hlavičke riadok `<meta charset="utf-8">`: hovorí, ktorou tabuľkou čítať.

Najviac čísel na webe však nesú obrázky. Fotka z mobilu má 12 miliónov pixelov a pokojne 4 **MB**. Na stránke sa pritom ukáže v okienku 800 × 600, takže väčšina čísel letí sieťou zbytočne. A web, ktorý sa na mobile načítava desať sekúnd, ľudia zavrú.

![Rovnaká fotka v troch veľkostiach a formátoch](images/svet-weby-fotka.sk.svg)

Pomôže zmenšiť **rozlíšenie** na to, čo sa naozaj ukáže, a vybrať **typ súboru** podľa obsahu. Prípona hovorí prehliadaču, ako čísla v súbore čítať:

- **JPG** a **WebP** fotky **komprimujú**: vynechajú detaily, ktoré oko nezbadá.
- **PNG** nič nevynechá. Hodí sa na snímky obrazovky a obrázky s ostrým textom.
- **SVG** neukladá pixely, ale opis čiar a tvarov. Ikona v SVG je ostrá v každej veľkosti.

**Vyskúšaj to!** Nájdi fotku z mobilu a pozri sa, koľko má MB. Zmenši ju napríklad v Skicári na šírku 1000 pixelov a ulož ako JPG. Koľkokrát je menšia?

**Ďalej vo svete webov:** → [Čo sa stane, keď stlačíš Enter](#svet-weby-cesta-dat-sk)
