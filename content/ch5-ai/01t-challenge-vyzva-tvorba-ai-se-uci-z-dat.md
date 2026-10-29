---
id: vyzva-tvorba-ai-se-uci-z-dat
type: challenge
title: "Vědec, který v datech skoro není"
level: 3
minutes: 20
readingTime: 2
standalone: true
teaser: "Generátor kreslí vědce jako staršího pána s brýlemi v bílém plášti."
voice: universal
parent: svet-tvorba-ai-se-uci-z-dat
diagram: null
core: false
lang: cs
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

Generátor kreslí vědce jako staršího pána s brýlemi v bílém plášti. Logické, říkáš si, takových je v datech nejvíc. Jenže výpočet ukáže, že takový „typický vědec“ je v datech v menšině.

<!-- task -->

Ve vymyšlené trénovací sadě je 10 000 obrázků s popiskem „vědec“. Z nich 70 % jsou muži, 80 % má bílý plášť, 60 % brýle a 65 % je starších 50 let. Předpokládej, že vlastnosti spolu nesouvisí (jsou **nezávislé**).

1. Generátor u každé vlastnosti vybere tu nejčastější možnost. Kolik procent vědců v datech má **všechny čtyři** vlastnosti najednou?
2. Poctivý generátor by kreslil muže v 70 % případů. Jaká je pravděpodobnost, že ze 4 obrázků budou náhodou všichni muži?
3. Necháš vygenerovat 20 obrázků a na všech 20 je muž. Jak pravděpodobné by to bylo u poctivého generátoru? Je to doklad, že model předsudek **zesiluje**?

**Kritérium úspěchu:** tři čísla zaokrouhlená na celá procenta (u třetího stačí řád) a jedna věta závěru.

<!-- hint -->

U nezávislých vlastností zjistíš pravděpodobnost, že platí všechny najednou, tak, že jednotlivé pravděpodobnosti vynásobíš.

<!-- hint -->

Čtyři muži za sebou: 0,7 × 0,7 × 0,7 × 0,7.

<!-- hint -->

0,7 na dvacátou spočítáš postupně: 0,7² = 0,49, 0,7⁴ ≈ 0,24, 0,7⁸ ≈ 0,058, 0,7¹⁶ ≈ 0,0033 a nakonec × 0,7⁴.

<!-- solution -->

**1.** 0,7 × 0,8 × 0,6 × 0,65 ≈ 0,22, tedy asi **22 %**. „Starší muž s brýlemi v plášti“ odpovídá jen asi pětině dat. Generátor neukazuje typického vědce z dat, ale **nejčastější hodnotu každé vlastnosti zvlášť**. Když je složíš dohromady, vznikne kombinace, která je v datech vzácná.

**2.** 0,7⁴ ≈ 0,24, tedy **24 %**. Čtyři muži ze čtyř ještě nic nedokazují, stává se to zhruba každý čtvrtý pokus.

**3.** 0,7²⁰ ≈ 0,0008, tedy asi **0,08 %**, méně než jednou z tisíce pokusů. To je silný doklad, že model nekreslí podle dat, ale stereotyp ještě přiostřuje.

**Závěr:** zesílení se měří počítáním na velkém vzorku, ne podle jednoho obrázku. Stejný princip znáš z výletu „Uvnitř chatbota“: když model bere vždy nejpravděpodobnější volbu, pestrost se ztrácí.

<!-- more -->

Navrhni vlastní audit. Vyber povolání a předem si napiš, co budeš počítat (věk, pohlaví, oblečení, prostředí) a jaký výsledek by odpovídal skutečnosti. Generátory obrázků jsou obvykle od 13 let, takže mladší dělají audit s rodičem nebo na obrázcích, které vygeneruje starší sourozenec či paní učitelka. Výsledky dej do tabulky a porovnej je se skutečnou statistikou.
