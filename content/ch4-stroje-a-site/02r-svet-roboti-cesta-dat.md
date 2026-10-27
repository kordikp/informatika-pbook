---
id: svet-roboti-cesta-dat
type: spine
title: "Rádio mezi micro:bity"
readingTime: 1
standalone: true
teaser: "Dva micro:bity na opačných koncích třídy. Zmáčkneš A na jednom a na druhém se rozsvítí srdce. Bez kabelu, bez Wi-Fi, bez internetu."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co se stane s balíčky tvého videa, když po cestě vypadne jeden router?"
recallA: "Ostatní routery je pošlou jinou cestou. Internet nemá jeden střed, takže výpadek části ho nezastaví."
lang: cs
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: cesta-dat
state: edited
highlights:
  - "Klient a server: požadavek a odpověď (web, e-mail, stream)"
  - "Balíčky, IP adresa, DNS překládá jména na adresy"
  - "Internet nemá jeden střed: objížďky při výpadku"
carriers: prose|image|code
---

Dva micro:bity na opačných koncích třídy. Zmáčkneš A na jednom a na druhém se rozsvítí srdce. Bez kabelu, bez Wi-Fi, bez internetu.

micro:bity mají **rádio**. Jeden pošle zprávu (číslo nebo krátký text), ostatní ji přijmou:

```
při spuštění: rádio nastav skupinu 7
při stisknutí tlačítka A: rádio pošli číslo 1
při přijetí čísla: zobraz ikonu ♥
```

![Tři micro:bity ve skupině 7 a jeden ve skupině 3](images/svet-roboti-radio.svg)

**Skupina** je něco jako adresa. Zprávu dostanou jen micro:bity ve stejné skupině, ostatní ji ignorují. Každá zpráva je malý **balíček**: obsah, skupina a kdo ho poslal.

Na internetu je to podobné, jen ve velkém. Tvůj mobil (**klient**) pošle **požadavek** a **server** pošle **odpověď**. Balíčky nesou **IP adresu** a **DNS** překládá jména jako *microbit.org* na čísla. Po cestě si balíčky předávají **routery**.

Rádio micro:bitů nemá žádný střed: zprávu slyší každý v dosahu a ve skupině. Ani internet nemá jeden střed. Když vypadne jeden router, balíčky jedou **objížďkou** přes jiné. A micro:bit, který je moc daleko? Ten zprávu nedostane. Rádio má dosah jen pár desítek metrů a žádný router ji za něj nedonese.

**Zkus to!** Domluv se se spolužákem na tajné skupině (číslo 0–255) a pošlete si zprávu. Zachytí ji někdo, kdo skupinu nezná? A na jakou vzdálenost to ještě funguje?

**Dál ve světě robotů:** → [Natrénuj micro:bit na svoje pohyby](#svet-roboti-ai-se-uci-z-dat)
