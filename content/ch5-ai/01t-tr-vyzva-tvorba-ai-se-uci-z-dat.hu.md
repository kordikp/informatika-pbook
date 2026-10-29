---
id: vyzva-tvorba-ai-se-uci-z-dat-hu
translationOf: vyzva-tvorba-ai-se-uci-z-dat
lang: hu
type: challenge
title: "A tudós, aki szinte nincs is az adatokban"
level: 3
minutes: 20
readingTime: 2
standalone: true
teaser: "A generátor a tudóst idősebb, szemüveges, fehér köpenyes férfinak rajzolja."
voice: universal
parent: svet-tvorba-ai-se-uci-z-dat-hu
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

A generátor a tudóst idősebb, szemüveges, fehér köpenyes férfinak rajzolja. Logikus, gondolod, az adatokban ilyenből van a legtöbb. Csakhogy a számolás megmutatja, hogy ez a „tipikus tudós” kisebbségben van az adatokban.

<!-- task -->

Egy kitalált tanítókészletben 10 000 kép van „tudós” felirattal. Ezek 70 %-án férfi van, 80 %-án fehér köpeny, 60 %-án szemüveg, és 65 %-uk 50 évesnél idősebb. Tegyük fel, hogy a tulajdonságok nem függnek össze (**függetlenek**).

1. A generátor minden tulajdonságnál a leggyakoribb lehetőséget választja. Az adatokban a tudósok hány százalékára igaz **mind a négy** tulajdonság egyszerre?
2. Egy tisztességes generátor az esetek 70 %-ában rajzolna férfit. Mekkora a valószínűsége, hogy 4 képen véletlenül mindegyiken férfi lesz?
3. 20 képet generáltatsz, és mind a 20-on férfi van. Mennyire lenne ez valószínű egy tisztességes generátornál? Bizonyítja ez, hogy a modell **felerősíti** az előítéletet?

**A siker feltétele:** három szám egész százalékra kerekítve (a harmadiknál elég a nagyságrend) és egy mondatnyi következtetés.

<!-- hint -->

Független tulajdonságoknál úgy kapod meg annak valószínűségét, hogy mind egyszerre igaz, hogy összeszorzod az egyes valószínűségeket.

<!-- hint -->

Négy férfi egymás után: 0,7 × 0,7 × 0,7 × 0,7.

<!-- hint -->

A 0,7 huszadik hatványát lépésenként számolhatod ki: 0,7² = 0,49, 0,7⁴ ≈ 0,24, 0,7⁸ ≈ 0,058, 0,7¹⁶ ≈ 0,0033, végül × 0,7⁴.

<!-- solution -->

**1.** 0,7 × 0,8 × 0,6 × 0,65 ≈ 0,22, vagyis kb. **22 %**. Az „idősebb szemüveges férfi köpenyben” csak az adatok nagyjából ötödére illik. A generátor nem az adatok tipikus tudósát mutatja, hanem **minden tulajdonság leggyakoribb értékét külön-külön**. Ha ezeket összerakod, olyan kombináció jön ki, amely ritka az adatokban.

**2.** 0,7⁴ ≈ 0,24, vagyis **24 %**. Négyből négy férfi még semmit sem bizonyít, ez nagyjából minden negyedik próbálkozásnál megesik.

**3.** 0,7²⁰ ≈ 0,0008, vagyis kb. **0,08 %**, ezerből egynél is ritkábban. Ez erős bizonyíték arra, hogy a modell nem az adatok szerint rajzol, hanem még ki is élezi a sztereotípiát.

**Következtetés:** a felerősítést nagy mintán, számolással mérik, nem egyetlen kép alapján. Ugyanezt az elvet ismered az „Egy chatbot belsejében” kirándulásból: ha a modell mindig a legvalószínűbb lehetőséget választja, eltűnik a változatosság.

<!-- more -->

Tervezz saját auditot. Válassz egy foglalkozást, és előre írd le, mit fogsz számolni (életkor, nem, ruházat, környezet), és milyen eredmény felelne meg a valóságnak. A képgenerátorok általában 13 éves kortól használhatók, ezért a fiatalabbak szülővel végzik az auditot, vagy olyan képeken, amelyeket egy idősebb testvér vagy a tanár generál. Az eredményeket tedd táblázatba, és hasonlítsd össze a valódi statisztikával.
