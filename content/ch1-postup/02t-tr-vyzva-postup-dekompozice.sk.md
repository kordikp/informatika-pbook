---
id: vyzva-postup-dekompozice-sk
translationOf: vyzva-postup-dekompozice
lang: sk
type: challenge
title: "Game jam: koľko ľudí ešte pomôže?"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Na víkendovom game jame máte postaviť hru."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: dekompozice
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

Na víkendovom game jame máte postaviť hru. Tomáš hovorí: „Čím viac nás bude, tým skôr to bude.“ Je to pravda? A od koľkých ľudí už nie?

<!-- task -->

Hra sa skladá zo siedmich úloh. Každú úlohu robí **vždy jeden človek od začiatku do konca**, nedá sa rozdeliť.

| Úloha | Hodín | Musí byť hotové skôr |
|---|---|---|
| N Nápad | 1 | nič |
| S Scenár | 3 | N |
| G Grafika | 4 | N |
| K Kód pohybu | 2 | N |
| L Levely | 3 | S, K |
| Z Zvuky | 2 | S |
| T Testovanie | 2 | G, L, Z |

1. Za koľko hodín to urobí **jeden človek**?
2. Za koľko hodín to najrýchlejšie urobia **traja ľudia**? Napíš rozvrh: kto robí čo a od koľkej do koľkej.
3. Za koľko hodín to najrýchlejšie urobia **dvaja ľudia**? Napíš rozvrh a **dokáž**, že rýchlejšie to nejde.
4. Prečo už **štvrtý človek** nič nezrýchli?

**Kritérium úspechu:** štyri čísla, dva rozvrhy, ktoré dodržiavajú závislosti, a zdôvodnenie pri bode 3 a 4.

<!-- hint -->

Nakresli si úlohy ako graf: šípka vedie od úlohy, ktorá musí byť hotová skôr. Nájdi najdlhšiu reťaz šípok, sčítaj jej hodiny.

<!-- hint -->

Testovanie musí byť až úplne na konci a trvá 2 hodiny. Všetko ostatné musí byť hotové pred ním.

<!-- hint -->

Pri dvoch ľuďoch: na Nápade pracuje len jeden, druhý čaká. Koľko hodín práce zostáva pred Testovaním a koľko to robí na jedného? Potom skús, či sa práca dá rozdeliť úplne bez čakania.

<!-- solution -->

1. **17 hodín**, obyčajný súčet.
2. **9 hodín.** Rozvrh: 0–1 N. Človek 1: S 1–4, L 4–7. Človek 2: K 1–3, Z 4–6. Človek 3: G 1–5. T 7–9. Rýchlejšie to nejde, pretože reťaz **N → S → L → T** trvá 1 + 3 + 3 + 2 = 9 hodín. To je **kritická cesta**.
3. **11 hodín.** Rozvrh: Človek 1: N 0–1, S 1–4, L 4–7, Z 7–9. Človek 2: K 1–3, G 3–7. T 9–11. **Dôkaz:** pred T je 15 hodín práce. V prvej hodine pracuje len jeden, takže zvyšných 14 hodín by sa muselo rozdeliť 7 + 7 úplne bez čakania a T by začalo o 8. Rozdeliť 14 na 7 + 7 sa dá len dvoma spôsobmi: {S, G} a {K, L, Z}, alebo {G, L} a {S, K, Z}. V prvom čaká druhý človek na Scenár, kým môže začať Levely alebo Zvuky. V druhom sa Levely nedajú začať skôr než o 6, pretože S aj K robí ten druhý. V oboch prípadoch T začne najskôr o 9.
4. Kritická cesta trvá 9 hodín a traja ľudia ju už stihnú. Štvrtý človek by len čakal.

<!-- more -->

Takto plánujú stavbári aj filmári: metóda kritickej cesty. Pridaj do tabuľky úlohu „Menu hry“ (2 hodiny, závisí od G) a zisti, či sa kritická cesta zmení. Potom naplánuj skutočný víkendový projekt s kamarátmi a porovnaj plán so skutočnosťou.
