---
id: svet-weby-ucet-a-autentizace-hu
translationOf: svet-weby-ucet-a-autentizace
lang: hu
type: spine
title: "Szivárgás egy fórumról"
readingTime: 1
standalone: true
teaser: "Valaki feltörte azt a Minecraft-fórumot, ahová két éve jártál. Minden felhasználó jelszava kint van az interneten. Miért érdekeljen ez, ha már nem jársz oda?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért veszélyes, ha ugyanaz a jelszavad egy játékhoz és az e-mailhez?"
recallA: "Ha a játékot feltörik, és a jelszó kiszivárog, a támadó az e-mailen is kipróbálja. Az e-mailen keresztül aztán minden mást is visszaállít."
lens: weby
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: story
status: accepted
concept: ucet-a-autentizace
state: edited
highlights:
  - "Fiók = identitás egy szolgáltatásban; hitelesítés = annak ellenőrzése, hogy tényleg te vagy"
  - "A jelszó hossza és egyedisége; egy szolgáltatásból kiszivárgott jelszó a többit is veszélyezteti"
  - "Jelszókezelő és 2FA (valami, amit tudsz + valami, ami nálad van)"
carriers: prose
---

Valaki feltörte azt a Minecraft-fórumot, ahová két éve jártál. Minden felhasználó jelszava kint van az interneten. Miért érdekeljen ez, ha már nem jársz oda?

Mert a **fiók** a **személyazonosságod** a szolgáltatásban, és a szolgáltatás a jelszavadról ismer fel. Annak ellenőrzését, hogy tényleg te vagy-e az, **hitelesítésnek** hívják. Aki ismeri a nevedet és a jelszavadat, az a szolgáltatás számára te vagy.

A támadók nem dobják ki a kiszivárgott listákat. Az e-mail–jelszó párokat automatikusan kipróbálják több száz másik weboldalon: az e-mailen, az Instagramon, a Discordon, a Steamen. Ha mindenhol **ugyanaz a jelszavad**, **egy szolgáltatás szivárgása** a többit is megnyitja. Az e-mailen keresztül pedig szinte mindenhez vissza lehet állítani a jelszót.

Egy rendes weboldal nem úgy tárolja a jelszavakat, ahogy beírtad őket. Csak az **ujjlenyomatukat** tárolja, amelyből a jelszót nem lehet visszaszámolni. A rövid és gyakori jelszót viszont a támadó kitalálja: kiszámolja egymilliárd gyakori jelszó ujjlenyomatát, és összehasonlítja őket. A *jelszo123* egy másodperc alatt elesik. A **hosszúság** dönt. Egy több szóból álló mondat, például *a kandúr kék teát iszik*, könnyen megjegyezhető és nehezen kitalálható.

A védekezés, amely minden weboldalon működik:

1. **Minden szolgáltatáshoz más jelszó.** Nem kell megjegyezned őket, egy **jelszókezelő** tárolja őket.
2. **Kétlépcsős azonosítás (2FA).** A jelszóhoz, amelyet **tudsz**, hozzáadsz egy kódot a mobilodról, amely **megvan neked**. A kiszivárgott jelszó egymagában így nem elég.
3. **Ellenőrizd a szivárgásokat.** A haveibeenpwned.com oldalon kiderítheted, szerepelt-e az e-mail-címed valamilyen szivárgásban. Ha igen, változtasd meg a jelszót mindenhol, ahol ugyanaz volt.

**Próbáld ki!** Számold meg, hány különböző jelszót használsz valójában. Kevesebb van, mint szolgáltatás? Aztán válaszd ki a legfontosabb fiókodat, az e-mailt, és adj neki egyedi, hosszú jelszót és 2FA-t.

**Tovább a weboldalak világában:** → [Sütik: ki követ téged a weben](#svet-weby-digitalni-stopa-hu)
