---
id: svet-roboti-cesta-dat-sk
translationOf: svet-roboti-cesta-dat
lang: sk
type: spine
title: "Rádio medzi micro:bitmi"
readingTime: 1
standalone: true
teaser: "Dva micro:bity na opačných koncoch triedy. Stlačíš A na jednom a na druhom sa rozsvieti srdce. Bez kábla, bez Wi-Fi, bez internetu."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Čo sa stane s balíčkami tvojho videa, keď po ceste vypadne jeden router?"
recallA: "Ostatné routery ich pošlú inou cestou. Internet nemá jeden stred, takže výpadok časti ho nezastaví."
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
  - "Klient a server: požiadavka a odpoveď (web, e-mail, stream)"
  - "Balíčky, IP adresa, DNS prekladá mená na adresy"
  - "Internet nemá jeden stred: obchádzky pri výpadku"
carriers: prose|image|code
---

Dva micro:bity na opačných koncoch triedy. Stlačíš A na jednom a na druhom sa rozsvieti srdce. Bez kábla, bez Wi-Fi, bez internetu.

micro:bity majú **rádio**. Jeden pošle správu (číslo alebo krátky text), ostatné ju prijmú:

```
pri štarte: rádio nastav skupinu 7
pri stlačení tlačidla A: rádio pošli číslo 1
pri prijatí čísla: zobraz ikonu ♥
```

![Tri micro:bity v skupine 7 a jeden v skupine 3](images/svet-roboti-radio.sk.svg)

**Skupina** je niečo ako adresa. Správu dostanú len micro:bity v rovnakej skupine, ostatné ju ignorujú. Každá správa je malý **balíček**: obsah, skupina a kto ho poslal.

Na internete je to podobné, len vo veľkom. Tvoj mobil (**klient**) pošle **požiadavku** a **server** pošle **odpoveď**. Balíčky nesú **IP adresu** a **DNS** prekladá mená ako *microbit.org* na čísla. Po ceste si balíčky odovzdávajú **routery**.

Rádio micro:bitov nemá žiadny stred: správu počuje každý v dosahu a v skupine. Ani internet nemá jeden stred. Keď vypadne jeden router, balíčky idú **obchádzkou** cez iné. A micro:bit, ktorý je príliš ďaleko? Ten správu nedostane. Rádio má dosah len pár desiatok metrov a žiadny router ju zaň nedonesie.

**Vyskúšaj to!** Dohodni sa so spolužiakom na tajnej skupine (číslo 0–255) a pošlite si správu. Zachytí ju niekto, kto skupinu nepozná? A na akú vzdialenosť to ešte funguje?

**Ďalej vo svete robotov:** → [Natrénuj micro:bit na svoje pohyby](#svet-roboti-ai-se-uci-z-dat-sk)
