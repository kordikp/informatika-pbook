---
id: opakovani-sk
translationOf: opakovani
lang: sk
type: spine
title: "Opakovanie (cyklus)"
readingTime: 1
standalone: true
teaser: "Feed na sociálnej sieti nikdy neskončí. Ďalšie video, ďalšie, ďalšie… Ako sa také „stále dookola“ zapíše do programu?"
voice: universal
parent: null
diagram: anim-rizeni-toku-sk
core: true
recallQ: "Kedy použiješ „opakuj 10×“ a kedy „opakuj, kým…“?"
recallA: "Pevný počet, keď vopred vieš koľkokrát. „Kým“, keď to závisí od toho, čo sa stane, napríklad kým robot nenarazí na stenu."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: opakovani
conceptTitle: "Opakovanie (cyklus)"
objective: "Feed na sociálnej sieti nikdy neskončí. Ďalšie video, ďalšie, ďalšie… Ako sa také „stále dookola“ zapíše do programu?"
state: core
highlights:
  - "Telo cyklu a počet opakovaní"
  - "Opakuj n× vs. opakuj, kým (podmienka ukončenia)"
  - "Konečnosť: cyklus musí skončiť, inak sa program zacyklí"
carriers: prose|animation
---

Feed na sociálnej sieti nikdy neskončí. Ďalšie video, ďalšie, ďalšie… Ako sa také „stále dookola“ zapíše do programu?

Keď sa niečo deje znova a znova, nezapisuješ to stokrát. Zapíšeš to **raz** a povieš, **koľkokrát** sa to má opakovať, alebo **kým** niečo platí. Tomu sa hovorí **cyklus**. Príkazom, ktoré sa v ňom opakujú, sa hovorí **telo cyklu**.

Robot má obísť stĺp a vrátiť sa na štart. Dlhý program má 8 blokov: *choď 3, otoč sa doprava*, a to celé štyrikrát. Rovnaká dvojica sa opakuje, takže stačí **opakuj 4×: choď 3, otoč sa doprava**. Tri bloky namiesto ôsmich. A keď má robot dôjsť k stene v chodbe, ktorej dĺžku nepozná? *Opakuj 5×: choď 1* v krátkej chodbe narazí a v dlhej zastaví priskoro. Funguje **opakuj, kým nie je pred stenou: choď 1**.

Cyklus s **pevným počtom** použiješ, keď **vopred vieš, koľkokrát**: štyri strany štvorca. Cyklus **s podmienkou**, keď to závisí od toho, čo sa stane: choď, kým nie si pri stene.

Pozor na dve veci. Podmienka sa kontroluje **na začiatku každého kola**, nie uprostred tela. A cyklus musí raz **skončiť**. Keď podmienka nikdy neprestane platiť, program sa **zacyklí**. Niekedy je to chyba, inokedy zámer: herná slučka alebo nekonečný feed beží schválne stále.

**Vyskúšaj to!** Nájdi tri opakovania vo svojom dni a pri každom urči, či je to „opakuj 10×“, alebo „opakuj, kým…“. Čistenie zubov (dve minúty, alebo kým nie sú čisté?), kolieska na tréningu, scrollovanie feedu. Aká je pri feede podmienka konca? A má vôbec nejakú?

> **Pozor, častý omyl:** „Cyklus stráži podmienku stále, aj uprostred kola.“ Kontroluje ju len na začiatku každého kola. Keď sa podmienka splní uprostred, kolo ešte dobehne do konca.

**Ďalej:** Nekonečný feed je slučka, ktorá schválne nemá koniec. Prečo to tak siete robia, uvidíš v kapitole 5. → [Odporúčač a tvoj feed](#c/doporucovac)
