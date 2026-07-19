---
id: ch11-herni-smycka-scena-a-objekty
type: spine
title: "Herní smyčka, scéna a objekty"
readingTime: 3
standalone: true
teaser: "Hra se nehýbe. Jen se ti 60× za vteřinu překresluje před očima. Vážně."
voice: universal
parent: null
diagram: anim-herni-smycka
core: true
recallQ: "Co dělá herní smyčka a co jsou objekty ve scéně?"
recallA: "Smyčka mnohokrát za vteřinu opakuje: načti vstup → přepočítej svět → vykresli obraz. Ve scéně přitom žijí objekty (sprity) — postavy, překážky, předměty — každý se svou polohou a chováním."
highlights:
  - "ve hře se ve skutečnosti nic nehýbe."
  - "Herní smyčka je cyklus, který se opakuje mnohokrát za vteřinu, a má tři fáze"
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch11-herni-smycka-scena-a-objekty
state: core
carriers: prose|animation
---

Malá magie na začátek: **ve hře se ve skutečnosti nic nehýbe.** Postava „běžící" po obrazovce je jen obrázek, který se každou šedesátinu vteřiny vykreslí o kousek vedle. Hra je rychlé kino, které si samo kreslí políčka — a stroj, který to pohání, se jmenuje herní smyčka.

**Herní smyčka je cyklus, který se opakuje mnohokrát za vteřinu, a má tři fáze:**

1. **Načti vstup:** drží hráč šipku? Klepl na obrazovku?
2. **Přepočítej svět:** posuň postavu, pohni nepřáteli, zkontroluj dotyky, přičti čas.
3. **Vykresli obraz:** nakresli celou scénu znovu, v nové podobě.

A znovu. A znovu. Poznáváš? Je to **cyklus while** z kapitoly o programování — `dokud hra běží: opakuj` — jen s pořádnou parádou. Počet průchodů za vteřinu je slavné **FPS** (frames per second): při 60 FPS proběhne smyčka šedesátkrát za vteřinu, a když hra „seká", znamená to, že přepočet nebo kreslení nestíhá.

Co se vlastně přepočítává a kreslí? **Scéna a objekty.** Scéna je prostor hry — level, hřiště, pozadí. V ní žijí **objekty** (v 2D hrách se jim říká **sprity**): postava hráče, nepřátelé, mince, plošiny, střely. Každý objekt si nese svoje vlastnosti — polohu (x, y), rychlost, obrázek, počet životů — a svoje chování. Zní ti to jako proměnné? Přesně to ony jsou: poloha postavy je dvojice čísel, která se ve fázi „přepočítej" mění, a ve fázi „vykresli" se podle ní kreslí obrázek. Pohyb = číslo x se každý průchod zvětší o 2. Celé kouzlo plynulé hry je aritmetika v cyklu.

Tenhle model (smyčka + scéna + objekty) je univerzální: ve Scratchi ho poskládáš z bloků, v enginech jako Godot nebo Unity ho dostaneš připravený. Kdo mu rozumí, přenese se mezi nástroji bez přeučování.

**Zkus to!** Rozeber svou oblíbenou hru na papíře: vyjmenuj 5 objektů ve scéně a u každého 2 vlastnosti, které si musí pamatovat (poloha, rychlost, životy…). Pak urči, co se s nimi děje v každé fázi smyčky. Právě jsi udělal návrh, podle kterého se hra programuje.

> **Věděl/a jsi?** Slovo „sprite" (skřítek) vzniklo v 70. letech: hardwarové skřítky uměly staré konzole kreslit nezávisle na pozadí — a jméno duchům z Pac-Mana i všem dnešním herním obrázkům už zůstalo.

Smyčka běží, objekty žijí. Teď do toho pustíme hráče: vstup, stavy a skóre udělají ze scény skutečnou hru.
