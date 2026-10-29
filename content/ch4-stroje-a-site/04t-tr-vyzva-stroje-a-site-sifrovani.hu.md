---
id: vyzva-stroje-a-site-sifrovani-hu
translationOf: vyzva-stroje-a-site-sifrovani
lang: hu
type: challenge
title: "Hangosan megbeszélt kulcs"
level: 3
minutes: 40
readingTime: 3
standalone: true
teaser: "A Caesar-titkosításnak van egy bökkenője: mindkét félnek ugyanazt a kulcsot kell ismernie."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: sifrovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

A Caesar-titkosításnak van egy bökkenője: mindkét félnek ugyanazt a kulcsot kell ismernie. De hogyan egyezik meg a böngésződ egy titkos kulcsban egy olyan szerverrel, amellyel még sosem találkozott, ha minden útba eső router olvassa, amit mondotok? 1976-ban két matematikus rájött. És most te is kiszámolod papíron.

<!-- task -->

Szükséged lesz az **osztási maradékra**: 17 mod 5 = 2, mert 17 = 3 × 5 + 2. Úgy működik, mint az óramutató.

Nyilvánosan, vagyis hangosan megegyeztek Emával a **p = 23** és **g = 5** számokban. Aztán mindketten titokban választotok egy saját számot: te **a = 6**, Ema **b = 15**.

1. Számold ki: A = 5^6 mod 23, és küldd el hangosan.
2. Ema hangosan elküldi: B = 5^15 mod 23. Ellenőrizd, hogy 19 jön ki.
3. Számold ki a kulcsot: K = B^6 mod 23. Ema kiszámolja: A^15 mod 23. Ellenőrizd, hogy ugyanaz a szám jön ki nektek.
4. Tamás végig hallgatózott, és ismeri a 23, 5, A és 19 számokat. Találj módszert, hogyan szerezhetné meg a kulcsot. Aztán magyarázd meg, miért nincs esélye a valódi https-nél, ahol p kb. 600 számjegyű.

**A siker feltétele:** A = 8, a K mindkettőtöknek ugyanannyi, és a 4. pontban le van írva a támadás, azzal együtt, hogy miért bukik el nagy p esetén.

<!-- hint -->

A hatványt ne számold ki egészben. Szorozz lépésenként, és minden szorzás után csak a 23-mal való osztás maradékát tartsd meg. Például 5^2 = 25, ez mod 23 egyenlő 2-vel, és 5^3 = 2 × 5 = 10.

<!-- hint -->

Miért jön ki ugyanaz: B^a = (5^b)^a és A^b = (5^a)^b. Mindkettő 5 az (a × b)-ediken.

<!-- hint -->

Tamás ismeri az 5-öt és az A-t. Próbálgassa az 5 hatványait egymás után, amíg ki nem jön az A. Hány próbálkozás ez a 23-nál, és hány egy 600 számjegyű számnál?

<!-- solution -->

1. Az 5 hatványai mod 23: 5, 2, 10, 4, 20, 8. Tehát **A = 8**.
2. 5^4 = 4 és 5^8 = 16. Akkor 5^15 = 5^8 × 5^4 × 5^2 × 5 = 16 × 4 × 2 × 5 = 640, és 640 mod 23 = **19**.
3. Te: 19^2 = 361, mod 23 ez 16. 19^3 = 16 × 19 = 304, mod 23 ez 5. 19^6 = 5^2 = 25, mod 23 ez **2**. Ema: 8^2 mod 23 = 18, 8^4 = 2, 8^8 = 4, 8^15 = 4 × 2 × 18 × 8 = 1 152, mod 23 ez **2**. A kulcs **K = 2**.
4. Tamás sorban próbálja: 5^1, 5^2, … és már a hatodik lépésben 8-at kap, így megtudja, hogy a = 6, és kiszámolja a kulcsot. 600 számjegyű p esetén viszont kb. 10^600 lehetőség van. Még egymilliárd számítógép sem, amelyek mindegyike másodpercenként egymilliárd lehetőséget próbál ki, tudna a világegyetem teljes kora alatt kb. 10^36-nál több lehetőséget kipróbálni. A valódi támadások okosabbak annál, hogy mindent végigpróbáljanak, de ilyen nagy számokra még azok sem elegek.

Figyelem: a kulcs megbeszélése még nem árulja el, **kivel** beszélsz. Ezt a szerver tanúsítványa ellenőrzi. Az garantálja, hogy annak a domainnek a szerverével beszélsz. Azt viszont nem mondja meg, hogy a weboldal becsületes-e.

<!-- more -->

Magyarázd el a trükköt egy barátodnak számok nélkül, színkeveréssel: van egy közös sárga, mindenki belekeveri a saját titkos színét, kicserélitek a keverékeket, és mindenki még egyszer hozzáadja a saját titkos színét. Az eredmény ugyanaz, de a keverékekből a titkos színeket nem lehet szétválasztani. Aztán próbálj ki saját p-t és g-t. Nem minden g működik jól: derítsd ki, miért rossz választás a g = 1, ha p = 23.
