---
id: vyzva-data-kodovani
type: challenge
title: "Komprese, která někdy nafoukne"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Zkrácený zápis z ukázky ušetřil místo."
voice: universal
parent: null
diagram: null
core: false
lang: cs
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

Zkrácený zápis z ukázky ušetřil místo. Nakresli ale pruhované tričko a zkrácený zápis je najednou delší než samé nuly a jedničky. Dá se vymyslet komprese, která zmenší úplně každý obrázek?

<!-- task -->

Obrázek má **8 × 8 pixelů**, 0 = bílá, 1 = černá. Bez komprese zabere **64 bitů**.

Komprese **RLE** (kódování běhů) čte pixely řádek po řádku jako jeden dlouhý pás a zapisuje jen **délky běhů** stejné barvy. Pravidla:
- začíná se vždy **bílým** během (když pás začíná černou, první číslo je 0);
- barvy se střídají: bílá, černá, bílá…;
- každé číslo zabere **4 bity**, takže největší délka je 15. Delší běh rozdělíš: 18 bílých = 15, 0, 3.

**Obrázek A:** řádky 1, 2, 7, 8 jsou `00000000`, řádky 3 až 6 jsou `00111100` (černý čtverec uprostřed).

1. Zapiš RLE kód obrázku A a spočítej, kolik bitů zabere.
2. Najdi obrázek 8 × 8, pro který RLE vyjde **nejdelší**. Kolik bitů?
3. Kamarád tvrdí: „Vymyslím lepší kompresi, která zmenší **každý** obrázek 8 × 8 aspoň o 1 bit.“ Dokaž, že to nejde, ať je jakkoli chytrý.

<!-- hint -->

U obrázku A spoj konec jednoho řádku se začátkem dalšího. Dvě bílé na konci řádku 3 a dvě na začátku řádku 4 tvoří jeden běh délky 4.

<!-- hint -->

Nejhorší je obrázek, kde se barva mění u každého pixelu, i přes konec řádku. A ještě o číslo horší je, když pás začíná černou.

<!-- hint -->

Spočítej, kolik různých obrázků 8 × 8 existuje a kolik existuje všech zápisů kratších než 64 bitů (délky 0, 1, 2 … 63). Každý obrázek musí dostat jiný zápis, jinak ho nejde rozbalit.

<!-- solution -->

**1.** Běhy: bílá 18, černá 4, bílá 4, černá 4, bílá 4, černá 4, bílá 4, černá 4, bílá 18. S limitem 15: `15, 0, 3, 4, 4, 4, 4, 4, 4, 4, 15, 0, 3` = **13 čísel × 4 bity = 52 bitů**. Úspora 12 bitů.

**2.** Svislé pruhy, každý řádek `10101010`. Konec řádku (0) a začátek dalšího (1) se liší, takže je to 64 běhů délky 1. Pás začíná černou, proto přibude úvodní 0: **65 čísel × 4 = 260 bitů**, víc než čtyřnásobek originálu. (Řádky `01010101` dají 256 bitů.)

**3.** Obrázků 8 × 8 je $$2^{64}$$. Všech zápisů kratších než 64 bitů je $$2^0 + 2^1 + \dots + 2^{63} = 2^{64} - 1$$. To je o jeden méně. Aspoň dva obrázky by tedy dostaly stejný zápis a při rozbalení by nešlo poznat, který to byl. Tomu se říká **princip holubníku**: 10 holubů do 9 přihrádek se nevejde po jednom. Každá bezztrátová komprese proto některé soubory zmenší a jiné nechá stejné nebo zvětší. Funguje jen proto, že skutečné obrázky mají hodně opakování a málokdy vypadají jako šum.

<!-- more -->

Ulož v malování jednobarevný obrázek a obrázek s náhodným šumem jako PNG (bezztrátová komprese) a porovnej velikosti. Pak ulož fotku jako JPG v kvalitě 100 a 10. JPG a MP3 obcházejí princip holubníku tím, že část informace **zahodí**: to je ztrátová komprese. Vymysli vlastní vylepšení RLE pro obrázek A, které vyjde pod 52 bitů, a ověř, že ho jde jednoznačně rozbalit.
