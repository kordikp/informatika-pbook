---
id: vyzva-stroje-a-site-cloud-a-server-sk
translationOf: vyzva-stroje-a-site-cloud-a-server
lang: sk
type: challenge
title: "Koľko rokov vydržia tvoje fotky?"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Máš fotky v mobile a ešte kópiu na externom disku v šuflíku."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: cloud-a-server
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Máš fotky v mobile a ešte kópiu na externom disku v šuflíku. Dve kópie, takže záloha, nie? Vypočítaj to. Výsledok ťa možno prekvapí, pretože dve kópie na jednom mieste sa vedia stratiť naraz.

<!-- task -->

Odhad rizík na jeden rok:

- **M**: mobil stratíš alebo rozbiješ: 10 %.
- **D**: externý disk doma zlyhá: 2 %.
- **C**: prídeš o účet v cloude (zabudnuté heslo, zablokovanie, chyba služby): 1 %.
- **H**: doma vyhorí, vytopí sa alebo sa vykradne byt a zničí sa všetko, čo je doma, aj mobil: 0,5 %.

Štyri stratégie: **A** len mobil. **B** mobil a disk doma. **C** mobil a cloud. **D** mobil, disk doma a cloud.

1. Pre každú stratégiu vypočítaj pravdepodobnosť, že počas roka prídeš o **všetky** kópie.
2. Preveď výsledky na „raz za koľko rokov“ a zoraď stratégie.
3. Vysvetli, prečo B vychádza horšie, než sa na prvý pohľad zdá.

Riziká M, D a C ber ako nezávislé. Keď sa majú stať dve nezávislé veci naraz, pravdepodobnosti vynásobíš. Malé súčty pokojne zaokrúhli.

**Kritérium úspechu:** poradie D, C, B, A, čísla rádovo správne a v bode 3 vysvetlenie, prečo požiar zničí obe kópie naraz.

<!-- hint -->

Stratégia A: o fotky prídeš, keď nastane M alebo H. To je asi 10 % + 0,5 %.

<!-- hint -->

Stratégia B: buď nastane H (zničí obe kópie naraz), alebo nastane M a k tomu D. Druhú možnosť vypočítaš ako 0,1 × 0,02.

<!-- hint -->

Cloud stojí inde, a tak ho požiar doma nezasiahne. V stratégii D o všetko prídeš len pri (H a C) alebo pri (M a D a C).

<!-- solution -->

1. **A:** asi 10,5 %. **B:** 0,5 % + 0,1 × 0,02 = 0,5 % + 0,2 % ≈ **0,7 %**. **C:** 0,105 × 0,01 ≈ **0,1 %**. **D:** 0,005 × 0,01 + 0,1 × 0,02 × 0,01 = 0,005 % + 0,002 % ≈ **0,007 %**.
2. A raz za zhruba 10 rokov, B asi za 140 rokov, C asi za 1 000 rokov, D asi za 14 000 rokov. Poradie od najlepšej: D, C, B, A.
3. V stratégii B tvorí väčšinu rizika (0,5 % z 0,7 %) jediná udalosť H, ktorá zničí obe kópie **naraz**. Druhá kópia na tom istom mieste proti nej nepomôže. Tomu sa hovorí **spoločné zlyhanie**. Preto platí pravidlo **3-2-1**: 3 kópie, na 2 rôznych druhoch médií, 1 z nich na inom mieste.

<!-- more -->

Riziká si uprav podľa seba: ako často ti naozaj padá mobil? A čo ak cloudová firma zruší službu pre všetkých naraz? To je ďalšie spoločné zlyhanie. Napíš si do tabuľky vlastný zálohovací plán a vypočítaj ho. Inžinieri takto počítajú odolnosť dátových centier: preto majú servery vo viacerých budovách a mestách.
