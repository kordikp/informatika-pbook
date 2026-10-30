---
id: expedice-hry-rozcestnik
type: spine
title: "Rozcestník: Svět her"
readingTime: 10
standalone: true
teaser: "Skutečné nástroje, komunity, soutěže a projekty, kde se dá pokračovat."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
genre: explainer
status: accepted
concept: expedice-hry-rozcestnik
conceptTitle: "Rozcestník: Svět her"
state: edited
carriers: prose
---

Skutečné nástroje, komunity, soutěže a projekty, kde se dá pokračovat. Výběr je z října 2026: podmínky, ceny a termíny se mění, proto si je vždycky ověř na webu. Než se kamkoli přihlásíš, projdi si stránku [Bezpečně v komunitách](#bezpecne-v-komunitach).

### 🛠 Nástroje

#### [MakeCode Arcade](https://arcade.makecode.com)

Microsoft editor retro her v prohlížeči: bloky, JavaScript i Python, kreslení spritů, hra běží hned vedle kódu.

:::reveal Jak začít
Nejkratší most ze Scratche: stejné bloky, ale navíc sprity, dlaždicové mapy, kolize a přepnutí do textového kódu. Pravidelně pořádá game jamy.

*zdarma · bez věkového omezení, pracuje se bez účtu (projekt se ukládá v prohlížeči) · en; rozhraní je přeložené do více jazyků (češtinu ověř v nastavení), návody anglicky*

1. Otevři arcade.makecode.com a zvol nový projekt.
2. Do „on start“ dej sprite hráče a blok, který ho ovládá šipkami.
3. Přidej „on game update every 1000 ms“ a v něm padající předmět.
4. Přidej událost „overlaps“, skóre a životy. Hru sdílíš tlačítkem Share bez osobních údajů v názvu.
:::

#### [GDevelop](https://gdevelop.io/game-makers)

Otevřený engine pro 2D i 3D hry bez psaní kódu: logika se skládá z událostí „pokud… pak…“, běží v prohlížeči i jako aplikace.

:::reveal Jak začít
Události jsou přesně podmínky a akce z jádra „Rozhodování (podmínka)“. Hotovou hru jde zveřejnit jedním klikem na gd.games, pokročilí přidají vlastní JavaScript.

*zdarma, placené plány přidávají cloudové zálohy a další služby · aplikace jde používat bez účtu; účet pro cloud a publikaci zakládá rodič nebo s rodičem · en; rozhraní přeložené do mnoha jazyků*

1. Stáhni aplikaci nebo otevři webovou verzi.
2. Začni ze šablony plošinovky a projdi si její události.
3. Přidej minci a událost „pokud se hráč dotkne mince, přičti bod a minci smaž“.
4. Zveřejnění na gd.games proveď s rodičem.
:::

#### [Godot Engine](https://godotengine.org/)

Profesionální otevřený herní engine pro 2D i 3D, aktuálně verze 4.7.2, vlastní jazyk GDScript podobný Pythonu.

:::reveal Jak začít
Další patro po blocích: scény, uzly, signály a funkce `_process(delta)` a `_physics_process(delta)`, kde poznáš herní smyčku z knihy. Hry z něj vycházejí i komerčně.

*zdarma, otevřený kód · bez účtu, vhodné zhruba od 12 let pro ty, kdo už zvládají Scratch · en; editor i dokumentace mají překlady do dalších jazyků*

1. Projdi nejdřív aplikaci Learn GDScript From Zero (viz zdroje).
2. Stáhni Godot ze stránky download a vytvoř 2D projekt.
3. Postav scénu: hráč (CharacterBody2D) a mince (Area2D se signálem při vstupu).
4. V `_physics_process(delta)` pohybuj hráčem rychlostí × delta.
:::

#### [TIC-80](https://en.wikipedia.org/wiki/TIC-80)

Otevřená „fantasy konzole“: malý vymyšlený počítač s rozlišením 240 × 136, editorem kódu, spritů, map a hudby v jednom okně.

:::reveal Jak začít
Přísná omezení (malá paleta, malé sprity) jsou tvůrčí výzva a přesně ukazují jádro „Všechno jsou čísla“: sprite je mřížka čísel. Píše se v Lua a dalších jazycích.

*zdarma; volitelná edice PRO stojí asi 10 USD, lze ji i sestavit ze zdrojového kódu · bez účtu, od 12 let · en*

1. Spusť TIC-80 a příkazem `new` založ hru.
2. Otevři editor spritů a nakresli postavu 8 × 8.
3. V editoru kódu uprav funkci TIC(), která se volá 60× za sekundu: to je herní smyčka.
4. Pohyb přidej podmínkami na tlačítka.
:::

#### [PICO-8](https://lexaloffle.itch.io/pico-8)

Nejslavnější fantasy konzole: 128 × 128 pixelů, 16 barev, Lua. Vznikla na ní původní verze hry Celeste.

:::reveal Jak začít
Obrovská komunita a tisíce her, jejichž kód si můžeš otevřít a číst. Omezení nutí dělat malé a hotové hry.

*placené, nejméně 15 USD; levnější alternativa je TIC-80 zdarma · nákup a stažení řeší rodič · en*

1. Domluv nákup s rodičem, nebo začni na TIC-80.
2. Zahraj si pár her a v editoru se podívej do jejich kódu.
3. Najdi funkce _update a _draw: to je herní smyčka rozdělená na výpočet a kreslení.
4. Postav hru na jednu obrazovku.
:::

### 👥 Komunity

#### [Ostravský game jam](https://itch.io/jam/ostravsky-game-jam-2025)

*český dvoudenní jam pro týmy · neuvedeno, ročník 2025 proběhl v říjnu · cs*

:::reveal Jak se přidat
**Věk:** studenti středních škol (týmy až po pěti); pro mladší jako inspirace

1. Projdi hry z ročníku 2025 a jejich hodnocení.
2. Až budeš na střední škole, sestav tým a sleduj vypsání dalšího ročníku.
3. Do té doby trénuj na víkendových jamech a ve Scratch studiu.
:::

> **Bezpečně:** Na akci jezdi s vědomím rodičů a s domluveným doprovodem. Sdílej jen přezdívku a herní účet, ne telefon ani adresu. Cizí soubory od neznámých na svůj počítač nestahuj.

#### [Global Game Jam Next (GGJ Next)](https://itch.io/jam/ggjnext2026)

*celosvětový game jam pro mladé · zdarma · en, hra může být v jakémkoli jazyce*

:::reveal Jak se přidat
**Věk:** 12–17 let (oficiální rozsah GGJ)

1. Jam běží zhruba od listopadu do března; ročník 2026 skončil, sleduj vypsání dalšího.
2. Nejlepší je místo na škole nebo v kroužku, které zaregistruje učitel nebo vedoucí.
3. Bez místa v okolí lze jamovat virtuálně přes itch.io; účet zakládá a spravuje rodič nebo učitel.
:::

> **Bezpečně:** Vystupuj pod přezdívkou, bez jména, školy a fotky. Komunikuj jen v oficiálních kanálech jamu a se svým týmem, soukromé zprávy od neznámých ukaž dospělému. Nic nestahuj z cizích odkazů a nikde neplať.

#### [MakeCode Arcade game jamy](https://arcade.makecode.com/gamejam/all)

*pravidelné tematické jamy a fórum · zdarma · en*

:::reveal Jak se přidat
**Věk:** bez omezení pro tvorbu; účet na fóru zakládej s rodičem

1. Na stránce jamů projdi minulá témata (sport, loupež, útulné hry).
2. Nová témata se vyhlašují na fóru MakeCode; čtení nevyžaduje účet.
3. Odevzdání a příspěvky na fórum dělej s rodičem nebo přes účet rodiče.
:::

> **Bezpečně:** V názvu hry ani v profilu nesmí být tvé jméno ani škola. Na fóru piš jen o hrách a nikomu nedávej kontakt. Kdo tě zve jinam, do jiné aplikace nebo na hovor, je důvod přestat odpovídat a říct to dospělému.

#### [Studio ve Scratchi](https://scratch.mit.edu)

*moderovaná komunita · zdarma · cs, sk, hu, en a mnoho dalších*

:::reveal Jak se přidat
**Věk:** pro všechny věky; mladší děti při registraci zadávají e-mail rodiče

1. Založ studio pro svou partu nebo třídu a vyhlas vlastní mini jam s tématem a termínem.
2. Přidávej hry do studií s herními výzvami.
3. Komentuj konkrétně: co tě bavilo a jednu věc ke zlepšení.
:::

> **Bezpečně:** Přezdívka bez jména a věku. Řiď se pravidly komunity Scratche a nevhodné komentáře nahlas tlačítkem. Žádné odkazy ven ze Scratche a žádné osobní informace v projektech.

#### [Fórum Godotu](https://forum.godotengine.org)

*oficiální komunita enginu · zdarma · en*

:::reveal Jak se přidat
**Věk:** účet podle podmínek fóra; mladší čtou bez účtu nebo se ptají přes rodiče

1. Hledej, jestli tvoji otázku už někdo nepoložil.
2. Než se zeptáš, připrav malý příklad: co děláš, co čekáš a co se stane.
3. Odpověď, která pomohla, označ jako řešení.
:::

> **Bezpečně:** Žádné osobní údaje ani snímky obrazovky s cestou ke složkám se jménem. Nikdy neposílej celý projekt neznámému do soukromé zprávy. Rady typu „stáhni si tenhle program“ ověř s dospělým.

### 🏆 Soutěže a akce

#### [Bobřík informatiky (19. ročník)](https://www.ibobr.cz/)

Krátké úlohy na informatické myšlení bez programování, takže se hodí jako první vstupní brána. Pro talent je to dobrý signál, že má cenu jít dál (KSP-Z, FIKS).

:::reveal Jak se přidat
*soutěž · Web cenu neuvádí; obvykle se soutěží zdarma ve škole (ověř u koordinátora) · čeština (soutěž má i anglickou stránku)*

**Kdy:** Listopad 2026: Benjamin a Kadet 2.–6. 11., Junior 9.–13. 11.; test 40 min, ve škole 7:00–15:40. Do ústředního kola postupuje jen kategorie Senior. **Věk:** 3. r. ZŠ až 4. r. SŠ; pro 11–15 let kategorie Benjamin (5.–6. r.), Kadet (7.–8. r.), Junior (9. r. ZŠ–1. r. SŠ)

1. Požádej učitele informatiky, aby byl školním koordinátorem.
2. Škola, která soutěžila dřív, jen potvrdí účast a dostane soutěžní kód; nová škola se registruje podle návodu „Jak přihlásit školu do soutěže“.
3. V testovací den se zaregistruj k testu se školním kódem a řeš online.
:::

#### [Logická olympiáda (Mensa ČR), kategorie B](https://lod.mensa.cz/competition)

Úlohy na logické myšlení bez nutnosti učiva, s velkou účastí (přes 100 tisíc dětí). Pro nadané dítě je to dobrý způsob, jak se zorientovat a potkat podobně zaměřené vrstevníky.

:::reveal Jak se přidat
*olympiáda · Ověř na webu (pravidla na lod.mensa.cz/rules) · čeština*

**Kdy:** Přihlašování v minulých letech od 1. 9. do konce září, online základní kolo v říjnu, potom krajská kola a finále. Na ročník 2026 je pozdě; termíny 2027 ověř na webu. **Věk:** Kategorie B: 2. stupeň ZŠ (6.–9. r.) a odpovídající ročníky víceletých gymnázií; kategorie C: SŠ do 20 let

1. V září se zaregistruj na webu Logické olympiády, nebo tě přihlásí škola s celou třídou.
2. V říjnu vyřeš online základní kolo.
3. Nejlepší postupují do krajského kola a finále.
:::

#### [Pikomat (MFF UK)](https://pikomat.mff.cuni.cz/)

Matematický seminář pro ZŠ, který rozvíjí stejné myšlení jako algoritmy. Je to dobrý předstupeň k informatickým seminářům.

:::reveal Jak se přidat
*korespondenční seminář · Ověř na webu pikomat.mff.cuni.cz · čeština*

**Kdy:** Šestkrát ročně série úloh spojených příběhem; termíny ověř na webu **Věk:** Žáci ZŠ (2. stupeň)

1. Na webu Pikomatu se zaregistruj.
2. Řeš sérii a posílej řešení do termínu.
:::

#### [iBobor](https://uniba.sk/en/news-detail/browse/57/back_to_page/aktuality-1/article/sutaz-ibobor-ako-naucit-ziakov-zakladnych-a-strednych-skol-ze-pocitace-nie-su-len)

Slovenská verze mezinárodní soutěže Bebras s krátkými úlohami na algoritmické a logické myšlení. Je to nenáročný první krok pro celou třídu.

:::reveal Jak se přidat
*soutěž · Ověř na webu · slovenština (na Slovensku i maďarština, ověř)*

**Kdy:** Obvykle v listopadu; termín 2026 ověř na webu ibobor.sk **Věk:** Žáci ZŠ a SŠ podle kategorií (Benjamín zhruba 5.–7. r., Kadet 8.–9. r. ZŠ; ověř aktuální rozdělení)

1. Škola se zaregistruje u organizátora (UK Bratislava) přes učitele.
2. Žák soutěží online ve škole v určený den.
:::

#### [CoderDojo kluby](https://coderdojo.com/)

Dobrovolnické kluby, kde si dítě vybere vlastní projekt (Scratch, web, hry) a mentor mu pomáhá. Hodí se pro samostatné, zvídavé tvůrce.

:::reveal Jak se přidat
*klub · Zdarma (základní pravidlo hnutí CoderDojo) · čeština*

**Kdy:** Pravidelná setkání v jednotlivých klubech; aktuální seznam klubů a termíny ověř na webu (zdroj je z roku 2019) **Věk:** 7–17 let

1. Najdi nejbližší klub (knihovna, firma, škola) na webu CoderDojo ČR.
2. Rezervuj místo na setkání; mladší děti chodí s rodičem.
3. Přines si notebook, pokud ho máš.
:::

#### [Hour of Code / Hour of AI (CSEd Week)](https://www.csedweek.org/)

Nová verze Hour of AI je nenáročný vstup do AI a programování. Nadané děti si tu mohou vyzkoušet pokročilejší tutoriály.

:::reveal Jak se přidat
*kampaň a online aktivity · zdarma · mnoho jazyků včetně maďarštiny, češtiny a slovenštiny*

**Kdy:** CS Education Week 2026: 7.–13. 12. 2026 (zdroje se liší o den, ověř na code.org) **Věk:** od 4 let výš

1. hodinovou aktivitu zvládneš doma i s třídou na code.org
:::

#### [Scratch (MIT)](https://scratch.mit.edu/)

Moderovaná komunita, kde dítě sdílí hry a animace a dostává zpětnou vazbu. Navazuje na maďarskou soutěž Kovács Mihály/Logo.

:::reveal Jak se přidat
*tvůrčí komunita · zdarma · desítky jazyků včetně maďarštiny*

**Kdy:** celoročně **Věk:** doporučeno 8–16 let, žádný pevný limit

1. účet na scratch.mit.edu (mladší se souhlasem rodiče)
2. třídní účet od učitele
:::

### 🧪 Projekty pro inspiraci

- **[Godot Showcase](https://godotengine.org/showcase/)**: Přehlídka skutečných her postavených v Godotu, od malých indie titulů po komerční hry. *Naučíš se:* Vyber jednu hru a zkus odhadnout, z jakých scén a uzlů se skládá, jak velké jsou hitboxy a co je v její herní smyčce.
- **[Learn GDScript From Zero (zdrojový kód)](https://github.com/GDQuest/learn-gdscript)**: Výuková aplikace pro Godot je sama otevřený projekt v Godotu. *Naučíš se:* Uvidíš, jak vypadá velký skutečný projekt: složky, scény, překlady a testy. Čti bez účtu, GitHub má limit 13 let.
- **[Sdílené hry na fóru MakeCode Arcade](https://forum.makecode.com/c/share-your-arcade-projects-here/5)**: Tisíce her od dětí i dospělých; každou jde otevřít v editoru i s kódem. *Naučíš se:* Rozbor cizí hry: najdi herní smyčku, proměnné a kolize. Čtení fóra nevyžaduje účet.
- **[Hry z GGJ Next 2026](https://itch.io/jam/ggjnext2026)**: Hry, které na celosvětovém jamu vytvořili tvůrci ve věku 12–17 let. *Naučíš se:* Uvidíš, co stihne tým tvého věku za pár dní: jak malý je rozsah, co dělá hru zábavnou a co se nestihlo.

### 📚 Kde se učit dál

- **[Game Programming Patterns: Game Loop](https://gameprogrammingpatterns.com/game-loop.html)**: Kapitola volně dostupné knihy o tom, jak skutečné hry řeší herní smyčku, čas mezi snímky a pevný krok fyziky. Navazují kapitoly Double Buffer a Update Method. *(en (anglicky), zdarma online)*
- **[Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript)**: Interaktivní aplikace od GDQuest: desítky krátkých lekcí s cvičeními, běží v prohlížeči i jako aplikace. *(en (anglicky), komunitní překlady; zdarma)*
- **[Dokumentace Godotu](https://docs.godotengine.org)**: Oficiální návody od první 2D hry po fyziku a sítě, včetně úvodu do programování v GDScriptu. *(en, část přeložená do dalších jazyků; zdarma)*
- **[MakeCode Arcade pro výuku](https://www.microsoft.com/makecode/teach/arcade)**: Návody a lekce k MakeCode Arcade, vhodné pro samostudium i pro kroužek. *(en (anglicky), zdarma)*

**Zpátky na expedici:** [Víkend, kdy vznikla hra](#expedice-hry)
