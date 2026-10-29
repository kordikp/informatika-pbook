---
id: vyzva-stroje-a-site-cesta-dat-sk
translationOf: vyzva-stroje-a-site-cesta-dat
lang: sk
type: challenge
title: "Ping, ktorý nemôže existovať"
level: 2
minutes: 25
readingTime: 2
standalone: true
teaser: "Hráč z Austrálie sa na fóre chváli: „Na pražský server mám ping 50 ms.“ Nikto ho nevidel hrať, a predsa vieš, že to nie je pravda."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: cesta-dat
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Hráč z Austrálie sa na fóre chváli: „Na pražský server mám ping 50 ms.“ Nikto ho nevidel hrať, a predsa vieš, že to nie je pravda. Oneskorenie na internete totiž má spodnú hranicu a určuje ju fyzika.

<!-- task -->

Podklady: Praha a Sydney sú od seba vzdušnou čiarou asi 16 000 km. Svetlo letí vo vákuu 300 000 km/s, v sklenenom optickom vlákne asi 200 000 km/s. **Ping** je čas, za ktorý balíček doletí k serveru a odpoveď späť.

1. Vypočítaj najmenší možný ping, keby optický kábel viedol priamo po povrchu Zeme.
2. Dokáž, že 50 ms je nemožné, aj keby signál letel rýchlosťou svetla vo vákuu.
3. Skutočný ping z Prahy do Sydney býva okolo 300 ms. Kam sa stráca rozdiel? Uveď aspoň dva dôvody.
4. Herná firma chce, aby hráči v Sydney mali ping pod 30 ms. Čo musí urobiť?

**Kritérium úspechu:** výpočet v bode 2 vyjde nad 50 ms, v bode 3 sú dva fyzikálne správne dôvody a v bode 4 riešenie, ktoré fyziku neobchádza.

<!-- hint -->

Čas = dráha : rýchlosť. Ping je tam aj späť, takže dráha je dvojnásobná.

<!-- hint -->

Na dôkaz dosaď najvyššiu rýchlosť, aká existuje. Keď aj tak vyjde viac než 50 ms, máš hotovo.

<!-- hint -->

Pozri sa na mapu, kade vedú káble z Európy do Austrálie: okolo Afriky alebo cez Suez, Indiu a Singapur. A každý router na ceste musí balíček prijať, prečítať adresu a poslať ďalej.

<!-- solution -->

1. Dráha 2 × 16 000 = 32 000 km. 32 000 : 200 000 = 0,16 s, teda **160 ms**.
2. Aj vo vákuu: 32 000 : 300 000 ≈ 0,107 s = **107 ms**, a to je viac než 50 ms. Tvrdenie je nemožné. (Bonus: aj tunel cez Zem po priamke, asi 12 100 km, dá tam aj späť 81 ms.)
3. Kábel nevedie rovno, ale obchádza pevniny po dne mora, takže je oveľa dlhší. Každý router drží balíček chvíľu vo fronte, kým ho pošle ďalej. A server potrebuje chvíľu na výpočet odpovede.
4. Postaviť server **v Austrálii**, blízko hráčov. Rýchlejšie svetlo sa kúpiť nedá. Preto majú online hry servery po regiónoch a veľké weby kópie po celom svete.

<!-- more -->

Zmeraj si cestu vlastným počítačom: vo Windows napíš do príkazového riadka tracert a adresu webu, na Macu alebo v Linuxe traceroute. Uvidíš každý router a čas k nemu. Nájdeš skok, kde balíček preletel oceán? Potom skús hru navyše „Kde sa stráca ping“ a úrovne „Cesta sieťou“ s podmorskými káblami.
