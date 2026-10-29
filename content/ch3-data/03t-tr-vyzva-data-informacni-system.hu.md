---
id: vyzva-data-informacni-system-hu
translationOf: vyzva-data-informacni-system
lang: hu
type: challenge
title: "Ki törölhette a videót?"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A szakkör filmet forgat."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: informacni-system
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

A szakkör filmet forgat. A megosztott mappából eltűnt a legjobb felvétel. Senki sem vallja be. Csakhogy a „ki csinálta” a kisebbik kérdés. A nagyobbik: hányan **tehették** meg egyáltalán?

<!-- task -->

A **Film 7.B** mappának három almappája van: **Felvételek**, **Zene**, **Vágás**. A jogok úgy működnek, mint a legtöbb felhőtárhelyen:
- a mappára beállított jogot **örökli** minden, ami benne van;
- ha valakinek több helyről több joga van, **a legmagasabb** érvényes (szerkesztő > hozzászóló > olvasó);
- a **szerkesztő** feltölthet, módosíthat és törölhet is.

**A jelenlegi beállítás:** a Film 7.B mappán a **Teljes 7.B osztály (26 ember)** csoportnak szerkesztői joga van. A Felvételek mappán ráadásul be van kapcsolva a „bárki megtekintheti, akinek megvan a link” megosztás.

**A csapat igényei:**
1. Tomáš tölti fel a felvételeket.
2. Ondra tölti fel a zenét, a felvételeket csak látnia kell.
3. Ema megjegyzéseket ír a felvételekhez, semmit sem töröl.
4. Te vágod a filmet, látnod kell a felvételeket és a zenét is.
5. A tanárnő csak a kész filmet akarja látni a Vágásban.

**Feladatok:** (a) Hányan törölhették a felvételt, és miért? (b) Miért nem lehet úgy megoldani a problémát, hogy a Felvételek mappán az osztálynak „csak olvasó” jogot adsz? (c) Tervezz olyan beállítást, ami mind az öt igényt teljesíti, és **senkinek nem ad semmi pluszt**. Írd fel táblázatként: mappa × ember. **Feltétel:** minden igény teljesül, és egyetlen jogot sem lehet elvenni úgy, hogy közben ne sérüljön valamelyik igény.

<!-- hint -->

A szülőmappán adott szerkesztői jog minden almappában is szerkesztői jogot jelent. Hány ember van a csoportban?

<!-- hint -->

A „legmagasabb nyer” szabály: ha valaki felülről szerkesztő jogot kap, az almappán pedig olvasóit, melyik érvényes?

<!-- hint -->

A jogokat a lehető legalacsonyabb szinten kell adnod, közvetlenül az almappákon, a szülőmappán pedig csak a tulajdonost hagyd. És arra a nyilvános linkre egyáltalán szüksége van valakinek?

<!-- solution -->

**(a)** A felvételt az osztály **26 tagja** törölhette, plusz a mappa tulajdonosa. A Film 7.B-től örökölt szerkesztői jog a Felvételekben is érvényes. (A „bárki megtekintheti” link törlést nem enged, de a felvételeket bárki látja, akihez eljut a link.)

**(b)** Mert a **legmagasabb** jog érvényes. Az osztály felülről szerkesztő, az almappán adott olvasói jog ezt nem írja felül. Az ilyen rendszerekben az almappán jogot hozzáadni lehet, elvenni nem.

**(c)** A **Film 7.B** mappán senki, csak te mint tulajdonos. A nyilvános linket törölni kell.

| | Felvételek | Zene | Vágás |
|---|---|---|---|
| Tomáš | szerkesztő | – | – |
| Ondra | olvasó | szerkesztő | – |
| Ema | hozzászóló | – | – |
| te | olvasó | olvasó | szerkesztő |
| tanárnő | – | – | olvasó |

Csak **3 szerkesztői jog**, mindegyik csak a „saját” mappán. Ez a **legkisebb jogosultság elve**. A felvételt most csak Tomáš törölheti (és te mint tulajdonos). A második biztosíték: a kuka és a verzióelőzmények, ahonnan a törölt fájl visszaállítható.

<!-- more -->

Nézd át egy szülőddel az egyik felhőmappád megosztását, és számold meg, hányan látnak bele valójában, a linkeket is beleértve. Aztán adj hozzá egy hatodik igényt: „A kívülálló Bárának egyszer fel kell töltenie a feliratokat”. Meg tudod oldani úgy, hogy egy hét múlva már semmilyen joga ne legyen? Keresd a megosztási beállításokban a hozzáférés lejárati dátumát.
