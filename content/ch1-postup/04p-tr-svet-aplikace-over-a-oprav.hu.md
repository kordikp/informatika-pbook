---
id: svet-aplikace-over-a-oprav-hu
translationOf: svet-aplikace-over-a-oprav
lang: hu
type: spine
title: "Közlekedési lámpa rejtett hibával"
readingTime: 1
standalone: true
teaser: "Megtervezel egy appot, amely egy gyalogos lámpát vezérel. Papíron késznek tűnik. Aztán végigmész rajta az ujjaddal, és rájössz, hogy soha többé nem vált vissza pirosra."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem elég egy programot egyetlen működő példán kipróbálni?"
recallA: "A hiba gyakran csak bizonyos bemeneteknél jön elő, például nullánál vagy üres listánál. A teszteknek különféle eseteket kell lefedniük, a szélső eseteket is."
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
state: edited
highlights:
  - "Teszt = bemenet + elvárt kimenet, előre elkészítve"
  - "Szélső esetek (0, üres bemenet, maximum)"
  - "Hibakeresés: hely → ok → javítás → újbóli ellenőrzés; a hatékonyság mint további mérce"
carriers: prose|table|image
---

Megtervezel egy appot, amely egy gyalogos lámpát vezérel. Papíron késznek tűnik. Aztán végigmész rajta az ujjaddal, és rájössz, hogy soha többé nem vált vissza pirosra.

A lámpának három állapota van: *Piros*, *Zöld* és *Villog*. A köztük lévő átmeneteket két bemenet indítja: a gyalogos **megnyomja a gombot**, vagy **letelik az idő**. A tervet táblázatba írod:

| Állapot | Bemenet | Új állapot |
|---|---|---|
| Piros | gombnyomás | Piros, elindul a visszaszámlálás |
| Piros | letelt az idő | Zöld |
| Zöld | gombnyomás | Zöld, nem történik semmi |
| Zöld | letelt az idő | Villog |
| Villog | letelt az idő | Zöld |

Mielőtt építeni kezdesz, készíts **teszteket**: **bemenetet és várt kimenetet**, **előre** leírva. *A gyalogos megnyomja a gombot → egy percen belül zöld lesz, aztán megint piros.* Most jön a **száraz futtatás**: menj végig a táblázaton az ujjaddal. Piros → gombnyomás → Zöld → Villog → **Zöld?!** A lámpa körbe-körbe jár a zöld és a villogás között, az autók pedig örökké állnak. A teszt elbukott.

![A lámpa állapotai: a hibás nyíl és a javítás](images/svet-aplikace-semafor.hu.svg)

A **hibakeresés** a nyomot követi. **Hely:** a táblázat utolsó sora. **Ok:** a villogásból rossz állapotba vezet a nyíl. **Javítás:** *Villog + letelt az idő → Piros*. **Újraellenőrzés:** futtasd le újra az összes tesztet, azokat is, amelyek korábban sikeresek voltak.

Aztán próbáld ki a **szélsőséges eseteket**. A gyalogos tízszer egymás után megnyomja a gombot: nem indul el tíz visszaszámlálás? Pont az átváltás pillanatában nyomja meg? Vagy soha nem nyomja meg: piroson marad a lámpa? Végül a **hatékonyság**: az a lámpa, amely csak három perc múlva vált zöldre, helyesen működik, csakhogy a gyalogosok közben átmennek a piroson.

**Próbáld ki!** Írj három tesztet egy webáruház „Kosárba” gombjához: bemenetet és várt kimenetet. Legalább az egyik legyen szélsőséges eset. Segítség: mi van, ha az áru már nincs raktáron?

**Tovább az alkalmazások világában:** → [Ugyanaz a gomb, háromféle válasz](#svet-aplikace-promenna-hu)
