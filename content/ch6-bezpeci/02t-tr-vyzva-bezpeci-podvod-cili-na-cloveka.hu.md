---
id: vyzva-bezpeci-podvod-cili-na-cloveka-hu
translationOf: vyzva-bezpeci-podvod-cili-na-cloveka
lang: hu
type: challenge
title: "Olvasd a címet úgy, mint a böngésző"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "A csaló oldal lemásolja a logót, a színeket és a szövegeket."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: podvod-cili-na-cloveka
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

A csaló oldal lemásolja a logót, a színeket és a szövegeket. Egy dolgot nem tud lemásolni: a domaint. De tudnod kell elolvasni.

<!-- task -->

A böngésző pontos szabályok szerint olvassa a címet. Most te magad jössz rá ezekre a szabályokra. Ondra hat linket kapott üzenetben:

1. `https://login.seznam.cz.overeni-uctu.top/prihlaseni`
2. `https://email.seznam.cz/posta`
3. `https://seznam.cz@prihlas-se.top/login`
4. `https://www.seznarn.info/`
5. `https://steamcommunity.com-darky.top/trade`
6. `https://steamcommunity.com/id/ondra`

**Feladat:**

- **a)** Minden címnél írd le, kié valójában az oldal. A *regisztrált domaint* keresed, vagyis azt a nevet, amelyet valaki megvásárolt.
- **b)** Írj egy **3 lépéses eljárást**, amely bármelyik címből kiszedi a tulajdonost. Kivétel nélkül mind a hat címen működnie kell. Teszteld úgy, mint egy programot: lépésről lépésre, „hiszen ez látszik” nélkül.
- **c)** Ondra ellenkezik: „Annak az oldalnak lakat volt a címében, szóval biztonságos volt.” Magyarázd el két mondatban, mit bizonyít a lakat (HTTPS), és mit nem.

**Sikerkritérium:** mind a hat tulajdonos helyes, és az eljárás egyetlen címen sem hibázik.

<!-- hint -->

A cím alakja `https://` + gazdagép (host) + `/útvonal`. Az első különálló perjel utáni útvonal nem dönt a tulajdonosról.

<!-- hint -->

A kukac régi trükk: mindent, ami előtte van, a böngésző „felhasználónévnek” veszi, nem címnek.

<!-- hint -->

A gazdagépet **jobbról** olvasd: a végződés (.cz, .com, .top) és az előtte álló egy rész, ez a tulajdonos. A kötőjel összeköt, nem választ el. És olvasd betűről betűre.

<!-- solution -->

**a)** 1: **overeni-uctu.top** (csalás). 2: **seznam.cz** (valódi, az email aldomain). 3: **prihlas-se.top** (csalás). 4: **seznarn.info** (csalás, az r és az n az m-et utánozza). 5: **com-darky.top** (csalás). 6: **steamcommunity.com** (valódi).

**b)** **1.** Vágd le a `https://` részt és mindent az első perjeltől kezdve. **2.** Ha a maradékban van kukac, dobj el mindent előtte, és a kukacot is. **3.** A maradékból vedd jobbról a végződést és az előtte álló egy részt (a részeket pontok választják el, nem kötőjelek), és olvasd el betűről betűre. Az olyan végződéseknél, mint a .co.uk, három részt kell venni. Ezeket a kivételeket a böngésző egy listából ismeri.

**c)** A lakat azt jelenti, hogy a kapcsolat **titkosított**, és hogy **annak a domainnek a tulajdonosával** beszélsz. Azt nem bizonyítja, hogy a tulajdonos becsületes. Tanúsítványt a csaló is szerez ingyen, pár perc alatt.

<!-- more -->

Játszd végig a „Kié ez a cím?” extra játékot. Aztán készíts hat saját alattomos címet az osztálytársaidnak (kitaláltakat, sehol ne regisztráld őket), és hagyd, hogy találgassanak. Aki mélyebbre akar ásni, nézzen utána, mi az a **punycode**: olyan cím, amelyben a latin „a” betűt egy ugyanolyannak látszó cirill betű helyettesíti, és hogyan védekeznek ez ellen a böngészők.
