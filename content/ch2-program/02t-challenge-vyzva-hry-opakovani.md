---
id: vyzva-hry-opakovani
type: challenge
title: "Hra, která na rychlém monitoru zrychlí"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Tvoje hra s padajícími jablky běží doma krásně."
voice: universal
parent: svet-hry-opakovani
diagram: null
core: false
lang: cs
status: accepted
concept: opakovani
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Tvoje hra s padajícími jablky běží doma krásně. Ema si ji pustí na herním monitoru se 144 Hz a jablka padají jako kroupy. Kód je stejný. Co se změnilo?

<!-- task -->

Herní smyčka v každém snímku posune jablko o 5 pixelů dolů: `y = y + 5`.

1. Jak rychle jablko padá v pixelech za sekundu při 60 snímcích za sekundu (FPS) a jak při 144?
2. Přepiš posun tak, aby jablko padalo **300 px/s na každém počítači**. Smíš použít proměnnou `dt`: čas v sekundách, který uplynul od minulého snímku. Při 60 FPS je to asi 0,0167 s.
3. Počítač se na chvíli zasekne a jeden snímek trvá 0,5 s. O kolik pixelů se jablko v tom snímku posune podle tvého nového kódu? Pod jablkem je košík vysoký 20 px. Co se stane?
4. Navrhni jedno pravidlo, které hru ochrání před bodem 3.

**Kritérium úspěchu:** správná čísla v bodech 1 a 3, vzorec v bodě 2, který dá při 60 i 144 FPS stejnou rychlost za sekundu, a ochrana, u které umíš říct, kolik pixelů nejvýš jablko v jednom kroku urazí.

<!-- hint -->

Rychlost za sekundu = posun za snímek × počet snímků za sekundu.

<!-- hint -->

Chceš 300 px za sekundu a snímek trvá `dt` sekund. Kolik pixelů připadá na jeden snímek?

<!-- hint -->

V bodě 4 nemusíš nic zrychlovat. Stačí nedovolit, aby `dt` bylo moc velké, nebo velký krok rozdělit na menší.

<!-- solution -->

1. 5 × 60 = **300 px/s**, 5 × 144 = **720 px/s**. Na rychlém monitoru je hra 2,4× rychlejší.
2. `y = y + 300 * dt`. Při 60 FPS je posun 300 × 0,0167 ≈ 5 px za snímek, při 144 FPS asi 2,1 px. Za sekundu je to v obou případech 300 px.
3. 300 × 0,5 = **150 px** najednou. Jablko přeskočí 20px košík a žádný snímek ho v košíku neuvidí. Je to stejná chyba jako míček, který proletěl pálkou.
4. Například omez `dt`: `dt = min(dt, 0.05)`. Jablko pak v jednom kroku urazí nejvýš 300 × 0,05 = 15 px a košík nepřeskočí. Hra se při zaseknutí na chvíli zpomalí, ale nerozbije se. Profesionální řešení je **pevný krok fyziky**: uplynulý čas se sčítá do zásobníku a fyzika se přepočítá tolikrát po 1/60 s, kolikrát se do zásobníku vejde. Kreslení běží zvlášť.

<!-- more -->

Přečti si kapitolu [Game Loop](https://gameprogrammingpatterns.com/game-loop.html) z knihy Game Programming Patterns (anglicky, zdarma online). V Godotu najdeš obojí: `_process(delta)` pro kreslení a `_physics_process(delta)` s pevným krokem pro fyziku. Ve Scratchi změř `dt` pomocí stopek a postav jablko, které padá stejně rychle, i když přidáš sto klonů a hra se zpomalí.
