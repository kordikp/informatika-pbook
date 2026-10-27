---
id: ch11-code-vstup-hrace
type: spine
title: "Chytání jablek: hotová hra řádek po řádku"
readingTime: 2
standalone: true
teaser: "Košík, padající jablko, tři životy. Celá hra ve čtrnácti řádcích pseudokódu — a u každého víš proč."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Které tři věci dělají ze scény skutečnou hru?"
recallA: "Vstup hráče (události kláves), paměť v proměnných (skóre, životy) a stav hry: smyčka čte vstup, podmínky mění proměnné a proměnné rozhodují, co se děje a kdy je konec."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: code-walkthrough
concept: ch11-vstup-hrace-stavy-a-skore
state: edited
status: accepted
carriers: prose|code
---

Jablko padá z nebe, dole jezdí košík, máš tři životy a počítá se skóre. Tady je celá taková hra ve Scratch-pseudokódu:

```
po kliknutí na zelenou vlajku
  nastav [skóre] na 0
  nastav [životy] na 3
  opakuj, dokud nenastane (životy = 0)
    když je stisknuta [šipka vlevo]: změň x košíku o -10
    když je stisknuta [šipka vpravo]: změň x košíku o 10
    změň y jablka o -5
    když se jablko dotýká [košíku]:
      změň [skóre] o 1
      přemísti jablko nahoru na náhodné x
    když je jablko u spodního okraje:
      změň [životy] o -1
      přemísti jablko nahoru na náhodné x
  ukaž nápis „KONEC HRY" a skóre
```

**Řádek 1:** událost startu. Kliknutí na vlajku přepne hru ze stavu „čeká se" do stavu „hraje se" — první přechod mezi stavy.

**Řádky 2–3:** paměť hry. Dvě proměnné, které zná každý hráč na světě: skóre od nuly, tři životy. Bez nich by hra nevěděla, jak si vedeš.

**Řádek 4:** hlavní smyčka a zároveň pravidlo konce. Všechno odsazené pod ní se opakuje mnohokrát za sekundu — a podmínka „dokud nenastane životy = 0" znamená, že **proměnná rozhoduje o stavu hry**.

**Řádky 5–6:** vstup hráče. Stisknuté šipky jsou obyčejné podmínky: když platí, mění se souřadnice x košíku. Tvoje prsty → proměnná → pohyb na scéně. Když se klávesnice nedotkneš, košík prostě stojí.

**Řádek 7:** svět se hýbe i bez tebe. Jablku každé kolo klesne y o 5, takže padá — i kdybys nesáhl na klávesnici.

**Řádky 8–10:** chycení. Dotyk s košíkem přičte bod a jablko se hned přemístí nahoru na náhodné místo. To přemístění je záludně důležité: kdyby jablko zůstalo v košíku, smyčka by dotyk viděla i v dalších kolech a za jedno chycení by naskočilo bodů několik. Klasická chyba, kterou potkal skoro každý tvůrce her.

**Řádky 11–13:** minutí. Jablko u země znamená −1 život — a letí nahoru na další pokus.

**Řádek 14:** stojí až za smyčkou, takže se provede jedinkrát: přesně ve chvíli, kdy životy dojdou a hra přejde do stavu „konec".

Celý vzorec hry máš teď pohromadě: **smyčka čte vstup → podmínky mění proměnné → proměnné rozhodují o stavu → scéna se překreslí.** Fortnite dělá úplně totéž — jen má proměnných pár tisíc. A tuhle hru si můžeš postavit ještě dnes: každý její řádek už umíš přečíst.
