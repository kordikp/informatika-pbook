---
id: vyzva-data-kodovani-sk
translationOf: vyzva-data-kodovani
lang: sk
type: challenge
title: "Kompresia, ktorá niekedy nafúkne"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Skrátený zápis z ukážky ušetril miesto."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: kodovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|formula
---

Skrátený zápis z ukážky ušetril miesto. Nakresli však pruhované tričko a skrátený zápis je zrazu dlhší než samé nuly a jednotky. Dá sa vymyslieť kompresia, ktorá zmenší úplne každý obrázok?

<!-- task -->

Obrázok má **8 × 8 pixelov**, 0 = biela, 1 = čierna. Bez kompresie zaberie **64 bitov**.

Kompresia **RLE** (kódovanie behov) číta pixely riadok po riadku ako jeden dlhý pás a zapisuje iba **dĺžky behov** rovnakej farby. Pravidlá:
- začína sa vždy **bielym** behom (keď pás začína čiernou, prvé číslo je 0);
- farby sa striedajú: biela, čierna, biela…;
- každé číslo zaberie **4 bity**, takže najväčšia dĺžka je 15. Dlhší beh rozdelíš: 18 bielych = 15, 0, 3.

**Obrázok A:** riadky 1, 2, 7, 8 sú `00000000`, riadky 3 až 6 sú `00111100` (čierny štvorec v strede).

1. Zapíš RLE kód obrázka A a spočítaj, koľko bitov zaberie.
2. Nájdi obrázok 8 × 8, pre ktorý RLE vyjde **najdlhšie**. Koľko bitov?
3. Kamarát tvrdí: „Vymyslím lepšiu kompresiu, ktorá zmenší **každý** obrázok 8 × 8 aspoň o 1 bit.“ Dokáž, že to nejde, nech je akokoľvek múdry.

<!-- hint -->

Pri obrázku A spoj koniec jedného riadka so začiatkom ďalšieho. Dve biele na konci riadka 3 a dve na začiatku riadka 4 tvoria jeden beh dĺžky 4.

<!-- hint -->

Najhorší je obrázok, kde sa farba mení pri každom pixeli, aj cez koniec riadka. A ešte o číslo horšie je, keď pás začína čiernou.

<!-- hint -->

Spočítaj, koľko rôznych obrázkov 8 × 8 existuje a koľko existuje všetkých zápisov kratších ako 64 bitov (dĺžky 0, 1, 2 … 63). Každý obrázok musí dostať iný zápis, inak sa nedá rozbaliť.

<!-- solution -->

**1.** Behy: biela 18, čierna 4, biela 4, čierna 4, biela 4, čierna 4, biela 4, čierna 4, biela 18. S limitom 15: `15, 0, 3, 4, 4, 4, 4, 4, 4, 4, 15, 0, 3` = **13 čísel × 4 bity = 52 bitov**. Úspora 12 bitov.

**2.** Zvislé pruhy, každý riadok `10101010`. Koniec riadka (0) a začiatok ďalšieho (1) sa líšia, takže je to 64 behov dĺžky 1. Pás začína čiernou, preto pribudne úvodná 0: **65 čísel × 4 = 260 bitov**, viac než štvornásobok originálu. (Riadky `01010101` dajú 256 bitov.)

**3.** Obrázkov 8 × 8 je $$2^{64}$$. Všetkých zápisov kratších ako 64 bitov je $$2^0 + 2^1 + \dots + 2^{63} = 2^{64} - 1$$. To je o jeden menej. Aspoň dva obrázky by teda dostali rovnaký zápis a pri rozbalení by sa nedalo zistiť, ktorý to bol. Tomu sa hovorí **princíp holubníka**: 10 holubov sa do 9 priehradok nezmestí po jednom. Každá bezstratová kompresia preto niektoré súbory zmenší a iné nechá rovnaké alebo zväčší. Funguje len preto, že skutočné obrázky majú veľa opakovania a máloktorý vyzerá ako šum.

<!-- more -->

Ulož v maľovaní jednofarebný obrázok a obrázok s náhodným šumom ako PNG (bezstratová kompresia) a porovnaj veľkosti. Potom ulož fotku ako JPG v kvalite 100 a 10. JPG a MP3 obchádzajú princíp holubníka tak, že časť informácie **zahodia**: to je stratová kompresia. Vymysli vlastné vylepšenie RLE pre obrázok A, ktoré vyjde pod 52 bitov, a over, že sa dá jednoznačne rozbaliť.
