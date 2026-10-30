---
id: expedice-hry-rozcestnik-sk
translationOf: expedice-hry-rozcestnik
lang: sk
type: spine
title: "Rozcestník: Svet hier"
readingTime: 10
standalone: true
teaser: "Skutočné nástroje, komunity, súťaže a projekty, kde sa dá pokračovať."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
genre: explainer
status: accepted
concept: expedice-hry-rozcestnik
conceptTitle: "Rozcestník: Svet hier"
objective: "Skutočné nástroje, komunity, súťaže a projekty, kde sa dá pokračovať."
state: edited
carriers: prose
---

Skutočné nástroje, komunity, súťaže a projekty, kde sa dá pokračovať. Výber je z októbra 2026: podmienky, ceny a termíny sa menia, preto si ich vždy over na webe. Skôr než sa kamkoľvek prihlásiš, prejdi si stránku [Bezpečne v komunitách](#bezpecne-v-komunitach-sk).

### 🛠 Nástroje

#### [MakeCode Arcade](https://arcade.makecode.com)

Editor retro hier od Microsoftu v prehliadači: bloky, JavaScript aj Python, kreslenie spritov, hra beží hneď vedľa kódu.

:::reveal Ako začať
Najkratší most zo Scratchu: rovnaké bloky, ale navyše sprity, dlaždicové mapy, kolízie a prepnutie do textového kódu. Pravidelne organizuje game jamy.

*zadarmo · bez vekového obmedzenia, pracuje sa bez účtu (projekt sa ukladá v prehliadači) · en; rozhranie je preložené do viacerých jazykov (češtinu over v nastaveniach), návody po anglicky*

1. Otvor arcade.makecode.com a zvoľ nový projekt.
2. Do „on start“ daj sprite hráča a blok, ktorý ho ovláda šípkami.
3. Pridaj „on game update every 1000 ms“ a v ňom padajúci predmet.
4. Pridaj udalosť „overlaps“, skóre a životy. Hru zdieľaš tlačidlom Share bez osobných údajov v názve.
:::

#### [GDevelop](https://gdevelop.io/game-makers)

Otvorený engine pre 2D aj 3D hry bez písania kódu: logika sa skladá z udalostí „ak… potom…“, beží v prehliadači aj ako aplikácia.

:::reveal Ako začať
Udalosti sú presne podmienky a akcie z jadra „Rozhodovanie (podmienka)“. Hotovú hru sa dá zverejniť jedným klikom na gd.games, pokročilí pridajú vlastný JavaScript.

*zadarmo, platené plány pridávajú cloudové zálohy a ďalšie služby · aplikácia sa dá používať bez účtu; účet pre cloud a publikovanie zakladá rodič alebo sa zakladá s rodičom · en; rozhranie preložené do mnohých jazykov*

1. Stiahni aplikáciu alebo otvor webovú verziu.
2. Začni zo šablóny plošinovky a prejdi si jej udalosti.
3. Pridaj mincu a udalosť „ak sa hráč dotkne mince, pripočítaj bod a mincu zmaž“.
4. Zverejnenie na gd.games urob s rodičom.
:::

#### [Godot Engine](https://godotengine.org/)

Profesionálny otvorený herný engine pre 2D aj 3D, aktuálne verzia 4.7.2, vlastný jazyk GDScript podobný Pythonu.

:::reveal Ako začať
Ďalšie poschodie po blokoch: scény, uzly, signály a funkcie `_process(delta)` a `_physics_process(delta)`, kde spoznáš hernú slučku z knihy. Hry z neho vychádzajú aj komerčne.

*zadarmo, otvorený kód · bez účtu, vhodné zhruba od 12 rokov pre tých, ktorí už zvládajú Scratch · en; editor aj dokumentácia majú preklady do ďalších jazykov*

1. Prejdi najprv aplikáciu Learn GDScript From Zero (pozri zdroje).
2. Stiahni Godot zo stránky download a vytvor 2D projekt.
3. Postav scénu: hráč (CharacterBody2D) a minca (Area2D so signálom pri vstupe).
4. V `_physics_process(delta)` pohybuj hráčom rýchlosťou × delta.
:::

#### [TIC-80](https://en.wikipedia.org/wiki/TIC-80)

Otvorená „fantasy konzola“: malý vymyslený počítač s rozlíšením 240 × 136, editorom kódu, spritov, máp a hudby v jednom okne.

:::reveal Ako začať
Prísne obmedzenia (malá paleta, malé sprity) sú tvorivá výzva a presne ukazujú jadro „Všetko sú čísla“: sprite je mriežka čísel. Píše sa v Lua a ďalších jazykoch.

*zadarmo; voliteľná edícia PRO stojí asi 10 USD, dá sa aj zostaviť zo zdrojového kódu · bez účtu, od 12 rokov · en*

1. Spusti TIC-80 a príkazom `new` založ hru.
2. Otvor editor spritov a nakresli postavu 8 × 8.
3. V editore kódu uprav funkciu TIC(), ktorá sa volá 60× za sekundu: to je herná slučka.
4. Pohyb pridaj podmienkami na tlačidlá.
:::

#### [PICO-8](https://lexaloffle.itch.io/pico-8)

Najslávnejšia fantasy konzola: 128 × 128 pixelov, 16 farieb, Lua. Vznikla na nej pôvodná verzia hry Celeste.

:::reveal Ako začať
Obrovská komunita a tisíce hier, ktorých kód si môžeš otvoriť a čítať. Obmedzenia nútia robiť malé a hotové hry.

*platené, najmenej 15 USD; lacnejšia alternatíva je TIC-80 zadarmo · nákup a stiahnutie rieši rodič · en*

1. Dohodni nákup s rodičom, alebo začni na TIC-80.
2. Zahraj si pár hier a v editore sa pozri do ich kódu.
3. Nájdi funkcie _update a _draw: to je herná slučka rozdelená na výpočet a kreslenie.
4. Postav hru na jednu obrazovku.
:::

### 👥 Komunity

#### [Ostravský game jam](https://itch.io/jam/ostravsky-game-jam-2025)

*český dvojdňový jam pre tímy · neuvedené, ročník 2025 sa konal v októbri · cs*

:::reveal Ako sa pridať
**Vek:** študenti stredných škôl (tímy najviac po piatich); pre mladších ako inšpirácia

1. Prejdi si hry z ročníka 2025 a ich hodnotenie.
2. Keď budeš na strednej škole, zostav tím a sleduj vypísanie ďalšieho ročníka.
3. Dovtedy trénuj na víkendových jamoch a v Scratch štúdiu.
:::

> **Bezpečne:** Na podujatie choď s vedomím rodičov a s dohodnutým sprievodom. Zdieľaj len prezývku a herný účet, nie telefón ani adresu. Cudzie súbory od neznámych do svojho počítača nesťahuj.

#### [Global Game Jam Next (GGJ Next)](https://itch.io/jam/ggjnext2026)

*celosvetový game jam pre mladých · zadarmo · en, hra môže byť v akomkoľvek jazyku*

:::reveal Ako sa pridať
**Vek:** 12–17 rokov (oficiálny rozsah GGJ)

1. Jam beží zhruba od novembra do marca; ročník 2026 skončil, sleduj vypísanie ďalšieho.
2. Najlepšie je miesto v škole alebo v krúžku, ktoré zaregistruje učiteľ alebo vedúci.
3. Bez miesta v okolí sa dá jamovať virtuálne cez itch.io; účet zakladá a spravuje rodič alebo učiteľ.
:::

> **Bezpečne:** Vystupuj pod prezývkou, bez mena, školy a fotky. Komunikuj len v oficiálnych kanáloch jamu a so svojím tímom, súkromné správy od neznámych ukáž dospelému. Nič nesťahuj z cudzích odkazov a nikde neplať.

#### [MakeCode Arcade game jamy](https://arcade.makecode.com/gamejam/all)

*pravidelné tematické jamy a fórum · zadarmo · en*

:::reveal Ako sa pridať
**Vek:** bez obmedzenia pre tvorbu; účet na fóre zakladaj s rodičom

1. Na stránke jamov prejdi minulé témy (šport, lúpež, útulné hry).
2. Nové témy sa vyhlasujú na fóre MakeCode; čítanie nevyžaduje účet.
3. Odovzdávanie a príspevky na fórum rob s rodičom alebo cez účet rodiča.
:::

> **Bezpečne:** V názve hry ani v profile nesmie byť tvoje meno ani škola. Na fóre píš len o hrách a nikomu nedávaj kontakt. Keď ťa niekto pozýva inam, do inej aplikácie alebo na hovor, je to dôvod prestať odpovedať a povedať to dospelému.

#### [Štúdio v Scratchi](https://scratch.mit.edu)

*moderovaná komunita · zadarmo · cs, sk, hu, en a mnoho ďalších*

:::reveal Ako sa pridať
**Vek:** pre všetky vekové kategórie; mladšie deti pri registrácii zadávajú e-mail rodiča

1. Založ štúdio pre svoju partiu alebo triedu a vyhlás vlastný mini jam s témou a termínom.
2. Pridávaj hry do štúdií s hernými výzvami.
3. Komentuj konkrétne: čo ťa bavilo a jednu vec na zlepšenie.
:::

> **Bezpečne:** Prezývka bez mena a veku. Riaď sa pravidlami komunity Scratchu a nevhodné komentáre nahlás tlačidlom. Žiadne odkazy von zo Scratchu a žiadne osobné informácie v projektoch.

#### [Fórum Godotu](https://forum.godotengine.org)

*oficiálna komunita enginu · zadarmo · en*

:::reveal Ako sa pridať
**Vek:** účet podľa podmienok fóra; mladší čítajú bez účtu alebo sa pýtajú cez rodičov

1. Hľadaj, či tvoju otázku už niekto nepoložil.
2. Skôr ako sa opýtaš, priprav malý príklad: čo robíš, čo čakáš a čo sa stane.
3. Odpoveď, ktorá pomohla, označ ako riešenie.
:::

> **Bezpečne:** Žiadne osobné údaje ani snímky obrazovky s cestou k priečinkom s menom. Nikdy neposielaj celý projekt neznámemu do súkromnej správy. Rady typu „stiahni si tento program“ over s dospelým.

### 🏆 Súťaže a podujatia

#### [iBobor](https://uniba.sk/en/news-detail/browse/57/back_to_page/aktuality-1/article/sutaz-ibobor-ako-naucit-ziakov-zakladnych-a-strednych-skol-ze-pocitace-nie-su-len)

Slovenská verzia medzinárodnej súťaže Bebras s krátkymi úlohami na algoritmické a logické myslenie. Je to nenáročný prvý krok pre celú triedu.

:::reveal Ako sa pridať
*súťaž · Over na webe · slovenčina (na Slovensku aj maďarčina, over)*

**Kedy:** Zvyčajne v novembri; termín 2026 over na webe ibobor.sk **Vek:** Žiaci ZŠ a SŠ podľa kategórií (Benjamín zhruba 5. – 7. r., Kadet 8. – 9. r. ZŠ; over aktuálne rozdelenie)

1. Škola sa zaregistruje u organizátora (UK Bratislava) cez učiteľa.
2. Žiaci súťažia online v škole v určený deň.
:::

#### [Bobřík informatiky (19. ročník)](https://www.ibobr.cz/)

Krátke úlohy na informatické myslenie bez programovania, takže sa hodia ako prvá vstupná brána. Pre talent je to dobrý signál, že má zmysel ísť ďalej (KSP-Z, FIKS).

:::reveal Ako sa pridať
*súťaž · Web cenu neuvádza; zvyčajne sa súťaží zadarmo v škole (over u koordinátora) · čeština (súťaž má aj anglickú stránku)*

**Kedy:** November 2026: Benjamin a Kadet 2. – 6. 11., Junior 9. – 13. 11.; test 40 min, v škole 7:00 – 15:40. Do ústredného kola postupuje len kategória Senior. **Vek:** 3. r. ZŠ až 4. r. SŠ; pre 11 – 15 rokov kategórie Benjamin (5. – 6. r.), Kadet (7. – 8. r.), Junior (9. r. ZŠ – 1. r. SŠ)

1. Popros učiteľov informatiky, aby niekto z nich robil školského koordinátora.
2. Škola, ktorá súťažila už predtým, iba potvrdí účasť a dostane súťažný kód; nová škola sa registruje podľa návodu „Jak přihlásit školu do soutěže“.
3. V testovací deň sa zaregistruj na test so školským kódom a rieš online.
:::

#### [Logická olympiáda (Mensa ČR), kategória B](https://lod.mensa.cz/competition)

Úlohy na logické myslenie bez potreby učiva, s veľkou účasťou (vyše 100 tisíc detí). Pre nadané dieťa je to dobrý spôsob, ako sa zorientovať a stretnúť podobne zameraných rovesníkov.

:::reveal Ako sa pridať
*olympiáda · Over na webe (pravidlá na lod.mensa.cz/rules) · čeština*

**Kedy:** Prihlasovanie bolo v minulých rokoch od 1. 9. do konca septembra, online základné kolo v októbri, potom krajské kolá a finále. Na ročník 2026 je neskoro; termíny 2027 over na webe. **Vek:** Kategória B: 2. stupeň ZŠ (6. – 9. r.) a zodpovedajúce ročníky viacročných gymnázií; kategória C: SŠ do 20 rokov

1. V septembri sa zaregistruj na webe Logickej olympiády, alebo ťa prihlási škola s celou triedou.
2. V októbri vyrieš online základné kolo.
3. Najlepší postupujú do krajského kola a finále.
:::

#### [Pikomat (MFF UK)](https://pikomat.mff.cuni.cz/)

Matematický seminár pre ZŠ, ktorý rozvíja rovnaké myslenie ako algoritmy. Je to dobrý predstupeň k informatickým seminárom.

:::reveal Ako sa pridať
*korešpondenčný seminár · Over na webe pikomat.mff.cuni.cz · čeština*

**Kedy:** Šesťkrát ročne séria úloh spojených príbehom; termíny over na webe **Vek:** Žiaci ZŠ (2. stupeň)

1. Na webe Pikomatu sa zaregistruj.
2. Rieš sériu a posielaj riešenia do termínu.
:::

#### [CoderDojo kluby](https://coderdojo.com/)

Dobrovoľnícke kluby, kde si dieťa vyberie vlastný projekt (Scratch, web, hry) a mentor mu pomáha. Hodia sa pre samostatných, zvedavých tvorcov.

:::reveal Ako sa pridať
*klub · Zadarmo (základné pravidlo hnutia CoderDojo) · čeština*

**Kedy:** Pravidelné stretnutia v jednotlivých kluboch; aktuálny zoznam klubov a termíny over na webe (zdroj je z roku 2019) **Vek:** 7 – 17 rokov

1. Nájdi najbližší klub (knižnica, firma, škola) na webe CoderDojo ČR.
2. Rezervuj si miesto na stretnutí; mladšie deti chodia s rodičom.
3. Prines si notebook, ak ho máš.
:::

#### [Hour of Code / Hour of AI (CSEd Week)](https://www.csedweek.org/)

Nová verzia Hour of AI je nenáročný vstup do AI a programovania. Nadané deti si tu môžu vyskúšať pokročilejšie tutoriály.

:::reveal Ako sa pridať
*kampaň a online aktivity · zadarmo · mnoho jazykov vrátane maďarčiny, češtiny a slovenčiny*

**Kedy:** CS Education Week 2026: 7. – 13. 12. 2026 (zdroje sa líšia o deň, over na code.org) **Vek:** od 4 rokov vyššie

1. hodinovú aktivitu zvládneš doma aj s triedou na code.org
:::

#### [Scratch (MIT)](https://scratch.mit.edu/)

Moderovaná komunita, kde dieťa zdieľa hry a animácie a dostáva spätnú väzbu. Nadväzuje na maďarskú súťaž Kovács Mihály/Logo.

:::reveal Ako sa pridať
*tvorivá komunita · zadarmo · desiatky jazykov vrátane maďarčiny*

**Kedy:** celoročne **Vek:** odporúčané 8 – 16 rokov, žiadny pevný limit

1. účet na scratch.mit.edu (mladší so súhlasom rodiča)
2. triedny účet od učiteľa
:::

### 🧪 Projekty pre inšpiráciu

- **[Godot Showcase](https://godotengine.org/showcase/)**: Prehliadka skutočných hier postavených v Godote, od malých indie titulov po komerčné hry. *Naučíš sa:* Vyber jednu hru a skús odhadnúť, z akých scén a uzlov sa skladá, aké veľké sú hitboxy a čo je v jej hernej slučke.
- **[Learn GDScript From Zero (zdrojový kód)](https://github.com/GDQuest/learn-gdscript)**: Aj samotná výuková aplikácia pre Godot je otvorený projekt v Godote. *Naučíš sa:* Uvidíš, ako vyzerá veľký skutočný projekt: priečinky, scény, preklady a testy. Čítaj bez účtu, GitHub má limit 13 rokov.
- **[Zdieľané hry na fóre MakeCode Arcade](https://forum.makecode.com/c/share-your-arcade-projects-here/5)**: Tisíce hier od detí aj dospelých; každú sa dá otvoriť v editore aj s kódom. *Naučíš sa:* Rozbor cudzej hry: nájdi hernú slučku, premenné a kolízie. Čítanie fóra nevyžaduje účet.
- **[Hry z GGJ Next 2026](https://itch.io/jam/ggjnext2026)**: Hry, ktoré na celosvetovom jame vytvorili tvorcovia vo veku 12–17 rokov. *Naučíš sa:* Uvidíš, čo stihne tím tvojho veku za pár dní: aký malý je rozsah, čo robí hru zábavnou a čo sa nestihlo.

### 📚 Kde sa učiť ďalej

- **[Game Programming Patterns: Game Loop](https://gameprogrammingpatterns.com/game-loop.html)**: Kapitola voľne dostupnej knihy o tom, ako skutočné hry riešia hernú slučku, čas medzi snímkami a pevný krok fyziky. Nadväzujú kapitoly Double Buffer a Update Method. *(en (po anglicky), zadarmo online)*
- **[Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript)**: Interaktívna aplikácia od GDQuest: desiatky krátkych lekcií s cvičeniami, beží v prehliadači aj ako aplikácia. *(en (po anglicky), komunitné preklady; zadarmo)*
- **[Dokumentácia Godotu](https://docs.godotengine.org)**: Oficiálne návody od prvej 2D hry po fyziku a siete, vrátane úvodu do programovania v GDScripte. *(en, časť preložená do ďalších jazykov; zadarmo)*
- **[MakeCode Arcade na výučbu](https://www.microsoft.com/makecode/teach/arcade)**: Návody a lekcie k MakeCode Arcade, vhodné na samoštúdium aj na krúžok. *(en (po anglicky), zadarmo)*

**Späť na expedíciu:** [Víkend, keď vznikla hra](#expedice-hry-sk)
