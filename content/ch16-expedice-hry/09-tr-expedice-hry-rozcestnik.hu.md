---
id: expedice-hry-rozcestnik-hu
translationOf: expedice-hry-rozcestnik
lang: hu
type: spine
title: "Útmutató: A játékok világa"
readingTime: 9
standalone: true
teaser: "Valódi eszközök, közösségek, versenyek és projektek, ahol tovább lehet haladni."
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
conceptTitle: "Útmutató: A játékok világa"
objective: "Valódi eszközök, közösségek, versenyek és projektek, ahol tovább lehet haladni."
state: edited
carriers: prose
---

Valódi eszközök, közösségek, versenyek és projektek, ahol tovább lehet haladni. A válogatás 2026 októberéből való: a feltételek, az árak és az időpontok változnak, ezért mindig ellenőrizd őket a weboldalon. Mielőtt bárhová jelentkezel, nézd át ezt az oldalt – [Biztonságban a közösségekben](#bezpecne-v-komunitach-hu).

### 🛠 Eszközök

#### [MakeCode Arcade](https://arcade.makecode.com)

A Microsoft retrojáték-szerkesztője a böngészőben: blokkok, JavaScript és Python, sprite-rajzolás, a játék közvetlenül a kód mellett fut.

:::reveal Hogyan kezdj hozzá
A legrövidebb híd a Scratchből: ugyanazok a blokkok, de ráadásul sprite-ok, csempetérképek, ütközések és átváltás szöveges kódra. Rendszeresen szervez game jameket.

*ingyenes · korhatár nélkül, fiók nélkül lehet dolgozni (a projekt a böngészőben mentődik) · en; a felület több nyelvre le van fordítva (a cseh nyelvet ellenőrizd a beállításokban), az útmutatók angolul*

1. Nyisd meg az arcade.makecode.com oldalt, és válassz új projektet.
2. Az „on start” blokkba tedd be a játékos sprite-ját és egy blokkot, amely nyilakkal irányítja.
3. Adj hozzá egy „on game update every 1000 ms” blokkot, benne egy leeső tárggyal.
4. Adj hozzá „overlaps” eseményt, pontszámot és életeket. A játékot a Share gombbal osztod meg, a nevében személyes adatok nélkül.
:::

#### [GDevelop](https://gdevelop.io/)

Nyílt motor 2D és 3D játékokhoz kódírás nélkül: a logika „ha… akkor…” eseményekből áll, böngészőben és alkalmazásként is fut.

:::reveal Hogyan kezdj hozzá
Az események pontosan a „Döntés (feltétel)” alapfogalom feltételei és műveletei. A kész játékot egy kattintással közzé lehet tenni a gd.games oldalon, a haladók saját JavaScriptet is hozzáadhatnak.

*ingyenes, a fizetős csomagok felhős mentést és további szolgáltatásokat adnak · az alkalmazás fiók nélkül is használható; a felhőhöz és a közzétételhez szükséges fiókot a szülő hozza létre, vagy szülővel együtt hozod létre · en; a felület sok nyelvre le van fordítva*

1. Töltsd le az alkalmazást, vagy nyisd meg a webes változatot.
2. Kezdj egy platformjáték-sablonból, és nézd át az eseményeit.
3. Adj hozzá egy érmét és egy eseményt: „ha a játékos megérinti az érmét, adj hozzá egy pontot, és töröld az érmét”.
4. A gd.games oldalon való közzétételt szülővel csináld.
:::

#### [Godot Engine](https://godotengine.org/)

Profi nyílt játékmotor 2D-hez és 3D-hez, jelenleg a 4.7.2-es verzió, saját, Pythonhoz hasonló GDScript nyelvvel.

:::reveal Hogyan kezdj hozzá
A következő szint a blokkok után: jelenetek, csomópontok, jelek és a `_process(delta)` meg a `_physics_process(delta)` függvény, ahol felismered a könyvből ismert játékciklust. Kereskedelmi játékok is készülnek vele.

*ingyenes, nyílt forráskódú · fiók nélkül, nagyjából 12 éves kortól ajánlott azoknak, akik már jól boldogulnak a Scratch-csel · en; a szerkesztőnek és a dokumentációnak más nyelvű fordításai is vannak*

1. Először végezd el a Learn GDScript From Zero alkalmazást (lásd a forrásokat).
2. Töltsd le a Godotot a download oldalról, és hozz létre egy 2D projektet.
3. Építs jelenetet: játékos (CharacterBody2D) és érme (Area2D, amely belépéskor jelet küld).
4. A `_physics_process(delta)` függvényben mozgasd a játékost sebesség × delta értékkel.
:::

#### [TIC-80](https://tic80.com/)

Nyílt „fantasy konzol”: kicsi kitalált számítógép 240 × 136-os felbontással, kód-, sprite-, térkép- és zeneszerkesztővel egyetlen ablakban.

:::reveal Hogyan kezdj hozzá
A szigorú korlátok (kis paletta, kis sprite-ok) alkotói kihívást jelentenek, és pontosan megmutatják a „Minden szám” alapfogalmat: a sprite számokból álló rács. Luában és más nyelveken lehet benne írni.

*ingyenes; az opcionális PRO kiadás kb. 10 USD, de forráskódból is lefordítható · fiók nélkül, 12 éves kortól · en*

1. Indítsd el a TIC-80-at, és a `new` paranccsal hozz létre egy játékot.
2. Nyisd meg a sprite-szerkesztőt, és rajzolj egy 8 × 8-as figurát.
3. A kódszerkesztőben módosítsd a TIC() függvényt, amely másodpercenként 60-szor hívódik meg: ez a játékciklus.
4. A mozgást a gombokra vonatkozó feltételekkel add hozzá.
:::

#### [PICO-8](https://lexaloffle.itch.io/pico-8)

A leghíresebb fantasy konzol: 128 × 128 pixel, 16 szín, Lua. Ezen készült a Celeste eredeti változata.

:::reveal Hogyan kezdj hozzá
Hatalmas közösség és több ezer játék, amelyek kódját megnyithatod és elolvashatod. A korlátok arra kényszerítenek, hogy kicsi és befejezett játékokat készíts.

*fizetős, legalább 15 USD; olcsóbb alternatíva az ingyenes TIC-80 · a vásárlást és a letöltést a szülő intézi · en*

1. Beszéld meg a vásárlást a szülővel, vagy kezdd a TIC-80-on.
2. Játssz néhány játékkal, és a szerkesztőben nézz bele a kódjukba.
3. Keresd meg az _update és a _draw függvényt: ez a számításra és rajzolásra bontott játékciklus.
4. Építs egy egyképernyős játékot.
:::

### 👥 Közösségek

#### [Global Game Jam Next (GGJ Next)](https://itch.io/jam/ggjnext2026)

*világméretű game jam fiataloknak · ingyenes · en, a játék bármilyen nyelvű lehet*

:::reveal Hogyan csatlakozhatsz
**Életkor:** 12–17 év (a GGJ hivatalos korosztálya)

1. A jam nagyjából novembertől márciusig tart; a 2026-os forduló véget ért, figyeld, mikor hirdetik meg a következőt.
2. A legjobb egy iskolai vagy szakköri helyszín, amelyet tanár vagy vezető regisztrál.
3. Ha a közelben nincs helyszín, virtuálisan is lehet jamelni az itch.io-n; a fiókot szülő vagy tanár hozza létre és kezeli.
:::

> **Biztonságosan:** Becenév alatt szerepelj, név, iskola és fénykép nélkül. Csak a jam hivatalos csatornáin és a csapatoddal kommunikálj, az ismeretlenektől kapott privát üzeneteket mutasd meg egy felnőttnek. Idegen linkekről semmit ne tölts le, és sehol ne fizess.

#### [MakeCode Arcade game jamek](https://arcade.makecode.com/gamejam/all)

*rendszeres tematikus jamek és fórum · ingyenes · en*

:::reveal Hogyan csatlakozhatsz
**Életkor:** az alkotáshoz nincs korhatár; fórumfiókot szülővel hozz létre

1. A jamek oldalán nézd át a korábbi témákat (sport, rablás, hangulatos játékok).
2. Az új témákat a MakeCode fórumán hirdetik meg; az olvasáshoz nem kell fiók.
3. A beküldést és a fórumbejegyzéseket szülővel vagy a szülő fiókján keresztül intézd.
:::

> **Biztonságosan:** Sem a játék nevében, sem a profilban nem lehet a neved vagy az iskolád. A fórumon csak játékokról írj, és senkinek ne add meg az elérhetőségedet. Ha valaki máshová, másik appba vagy hívásba hív, az ok arra, hogy ne válaszolj tovább, és szólj egy felnőttnek.

#### [Stúdió a Scratchben](https://scratch.mit.edu)

*moderált közösség · ingyenes · cs, sk, hu, en és sok más*

:::reveal Hogyan csatlakozhatsz
**Életkor:** minden korosztálynak; a fiatalabb gyerekek regisztrációkor a szülő e-mail-címét adják meg

1. Hozz létre stúdiót a csapatodnak vagy az osztályodnak, és hirdess saját mini jamet témával és határidővel.
2. Tedd be a játékaidat játékos kihívásokat gyűjtő stúdiókba.
3. Kommentelj konkrétan: mi tetszett, és egy dolog, amin lehetne javítani.
:::

> **Biztonságosan:** Becenév név és életkor nélkül. Tartsd be a Scratch közösségi szabályait, és a nem helyénvaló kommenteket jelentsd a gombbal. Semmi link a Scratchen kívülre, és semmi személyes információ a projektekben.

#### [A Godot fóruma](https://forum.godotengine.org)

*a motor hivatalos közössége · ingyenes · en*

:::reveal Hogyan csatlakozhatsz
**Életkor:** fiók a fórum feltételei szerint; a fiatalabbak fiók nélkül olvasnak, vagy szülőn keresztül kérdeznek

1. Nézd meg, nem tette-e már fel valaki a kérdésedet.
2. Mielőtt kérdezel, készíts egy kis példát: mit csinálsz, mit vársz, és mi történik.
3. A választ, amely segített, jelöld meg megoldásként.
:::

> **Biztonságosan:** Semmi személyes adat, és olyan képernyőkép se, amelyen a neveddel jelölt mappa elérési útja látszik. Soha ne küldd el az egész projektet ismeretlennek privát üzenetben. Az olyan tanácsokat, mint „töltsd le ezt a programot”, ellenőrizd egy felnőttel.

### 🏆 Versenyek és események

#### [Logiscool – programozási kurzusok és táborok](https://www.logiscool.com/)

Fokozatos átmenet a blokkos kódtól a vegyes módon át a Pythonig. Játék-, web-, robotika- és MI-kurzusokat kínál.

:::reveal Hogyan csatlakozhatsz
*szakkörök és táborok · fizetős, ellenőrizd a weboldalon · magyar (a hálózat külföldön is működik)*

**Mikor:** féléves kurzusok és nyári táborok, az időpontokat ellenőrizd a weboldalon **Életkor:** 6–18 év

1. jelentkezés egy telephelyen, Magyarországon közel 50 van belőlük
:::

#### [Óbudai Egyetem – Nyári Gyerekegyetem: programozás Minecraftban](https://steam.uni-obuda.hu/)

A gyerek megtapasztalja az egyetemi közeget, és a Minecraft Educationön keresztül programoz. Jó belépő a fiatalabb tehetséges gyerekeknek.

:::reveal Hogyan csatlakozhatsz
*egyetemi nyári tábor · 70 000 Ft (2025, ebéddel együtt) · magyar*

**Mikor:** 2025-ben július 7–11., a 2026/27-es időpontot ellenőrizd a weboldalon **Életkor:** 10–14 év

1. jelentkezés az egyetem kiírása szerint
:::

#### [CoderDojo klubok](https://coderdojo.com/)

Önkéntes klubok, ahol a gyerek saját projektet választ (Scratch, weboldal, játékok), és egy mentor segít neki. Önálló, kíváncsi alkotóknak való.

:::reveal Hogyan csatlakozhatsz
*klub · Ingyenes (a CoderDojo mozgalom alapszabálya) · cseh*

**Mikor:** Rendszeres találkozók az egyes klubokban; a klubok aktuális listáját és az időpontokat ellenőrizd a weboldalon (a forrás 2019-es) **Életkor:** 7–17 év

1. Keresd meg a legközelebbi klubot (könyvtár, cég, iskola) a CoderDojo ČR weboldalán.
2. Foglalj helyet a találkozóra; a kisebb gyerekek szülővel jönnek.
3. Hozz laptopot, ha van.
:::

#### [Hour of Code / Hour of AI (CSEd Week)](https://www.csedweek.org/)

Az új Hour of AI változat könnyű belépő az MI és a programozás világába. A tehetséges gyerekek haladóbb oktatóanyagokat is kipróbálhatnak.

:::reveal Hogyan csatlakozhatsz
*kampány és online tevékenységek · ingyenes · sok nyelven, köztük magyarul, csehül és szlovákul*

**Mikor:** CS Education Week 2026: 2026. december 7–13. (a források egy nappal eltérnek, ellenőrizd a code.org oldalon) **Életkor:** 4 éves kortól

1. az egyórás tevékenységet otthon és az osztállyal is megcsinálhatod a code.org oldalon
:::

#### [Scratch (MIT)](https://scratch.mit.edu/)

Moderált közösség, ahol a gyerek megoszthatja a játékait és animációit, és visszajelzést kap. A magyar Kovács Mihály/Logo versenyhez kapcsolódik.

:::reveal Hogyan csatlakozhatsz
*alkotói közösség · ingyenes · több tucat nyelv, köztük a magyar*

**Mikor:** egész évben **Életkor:** 8–16 éveseknek ajánlott, nincs szigorú korhatár

1. fiók a scratch.mit.edu oldalon (a fiatalabbaknak szülői beleegyezéssel)
2. osztályfiók a tanártól
:::

### 🧪 Projektek ötletnek

- **[Godot Showcase](https://godotengine.org/showcase/)**: Valódi, Godotban épített játékok bemutatója, a kis indie címektől a kereskedelmi játékokig. *Mit tanulsz meg:* Válassz ki egy játékot, és próbáld megtippelni, milyen jelenetekből és csomópontokból áll, mekkorák a hitboxai, és mi van a játékciklusában.
- **[Learn GDScript From Zero (forráskód)](https://github.com/GDQuest/learn-gdscript)**: A Godothoz készült oktató alkalmazás maga is nyílt Godot-projekt. *Mit tanulsz meg:* Meglátod, hogyan néz ki egy nagy, valódi projekt: mappák, jelenetek, fordítások és tesztek. Fiók nélkül olvasd, a GitHubon 13 év a korhatár.
- **[Megosztott játékok a MakeCode Arcade fórumán](https://forum.makecode.com/c/share-your-arcade-projects-here/5)**: Gyerekek és felnőttek több ezer játéka; mindegyik megnyitható a szerkesztőben a kódjával együtt. *Mit tanulsz meg:* Más játékának elemzése: keresd meg a játékciklust, a változókat és az ütközéseket. A fórum olvasásához nem kell fiók.
- **[Játékok a GGJ Next 2026-ról](https://itch.io/jam/ggjnext2026)**: Játékok, amelyeket 12–17 éves alkotók készítettek a világméretű jamen. *Mit tanulsz meg:* Meglátod, mire jut egy veled egykorú csapat néhány nap alatt: mekkora a terjedelem, mitől szórakoztató a játék, és mi nem fért bele az időbe.

### 📚 Hol tanulhatsz tovább

- **[Game Programming Patterns: Game Loop](https://gameprogrammingpatterns.com/game-loop.html)**: Egy szabadon elérhető könyv fejezete arról, hogyan oldják meg a valódi játékok a játékciklust, a képkockák közötti időt és a fix fizikai lépést. A Double Buffer és az Update Method fejezet folytatja. *(en (angolul), ingyen online)*
- **[Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript)**: A GDQuest interaktív alkalmazása: több tucat rövid lecke gyakorlatokkal, böngészőben és alkalmazásként is fut. *(en (angolul), közösségi fordítások; ingyenes)*
- **[A Godot dokumentációja](https://docs.godotengine.org)**: Hivatalos útmutatók az első 2D játéktól a fizikáig és a hálózatokig, beleértve a GDScript-programozás bevezetőjét. *(en, egy része más nyelvekre is le van fordítva; ingyenes)*
- **[MakeCode Arcade az oktatásban](https://www.microsoft.com/makecode/teach/arcade)**: Útmutatók és leckék a MakeCode Arcade-hez, önálló tanuláshoz és szakkörhöz is. *(en (angolul), ingyenes)*

**Vissza az expedícióra:** [A hétvége, amikor megszületett egy játék](#expedice-hry-hu)
