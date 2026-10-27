---
id: svet-socialni-ucet-a-autentizace-hu
translationOf: svet-socialni-ucet-a-autentizace
lang: hu
type: spine
title: "Ellopott fiók"
readingTime: 2
standalone: true
teaser: "Valaki éjszaka átvette a barátnőd fiókját. Megváltoztatta a jelszót, az e-mail-címet és a nevet, és most a profiljáról mindenkinek azt írja, hogy küldjék el neki a kódot, amelyet kapni fognak."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért veszélyes, ha ugyanaz a jelszavad egy játékhoz és az e-mailhez?"
recallA: "Ha a játékot feltörik, és a jelszó kiszivárog, a támadó az e-mailen is kipróbálja. Az e-mailen keresztül aztán minden mást is visszaállít."
lens: socialni
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

Valaki éjszaka átvette a barátnőd fiókját. Megváltoztatta a jelszót, az e-mail-címet és a nevet, és most a profiljáról mindenkinek azt írja, hogy küldjék el neki a kódot, amelyet kapni fognak.

Hogyan történik ez? A **fiók** a **személyazonosságod** a szolgáltatásban, és az oldal a jelszó alapján ismeri fel, hogy te vagy az. Ezt az ellenőrzést **hitelesítésnek** hívják. Aki ismeri a jelszót, az az oldal számára te vagy, akkor is, ha egy idegen a világ másik végén.

A leggyakoribb utak: a jelszó ugyanaz volt, mint egy másik weboldalon, amelyet valaki feltört (**egy szolgáltatásból való kiszivárgás** a többit is veszélyezteti). Rövid volt, és ki lehetett találni, például *nev2012*. Vagy a barátnőd maga írta be egy hamis bejelentkezési oldalon. És aztán ott van az, ami magától terjed: az ellopott fiókból üzenet jön, hogy *küldd el a kódot, amit most kaptál, véletlenül a te számodat adtam meg*. Ez a kód valójában annak a fiókjának az átvételéhez szükséges ellenőrzés, aki megkapta.

Védekezés:

1. **Hosszú jelszó**, például több szóból álló mondat, és **minden szolgáltatáshoz más**. Egy **jelszókezelő** megjegyzi őket.
2. **Kétlépcsős azonosítás (2FA)**: a jelszóhoz, amelyet **tudsz**, hozzáadsz egy kódot a mobilról, amely **nálad van**. Az ellopott jelszó így önmagában nem elég. A legjobb egy hitelesítő app, az SMS-ben kapott kód jobb a semminél.
3. **A kódot soha senkinek.** Az ellenőrző kód a fiókod kulcsa. Egyetlen barátnak és egyetlen „ügyfélszolgálatnak” sincs rá szüksége.
4. **Tartalék e-mail-cím, telefonszám és tartalékkódok.** Ha ellopják a fiókodat, ezekkel szerzed vissza.

Ha megtörténik: azonnal változtasd meg a jelszót, az oldal felületén jelentsd a fiók átvételét, és más úton írj a barátaidnak, hogy ne küldjenek semmit.

**Próbáld ki!** Kapcsold be a 2FA-t azon a fiókon, amelyet a legtöbbet használsz. Milyen módszert kínál az oldal: SMS-t, hitelesítő appot vagy biztonsági kulcsot? És hol vannak elmentve a tartalékkódjaid?

**Tovább a közösségi média világában:** → [Nyertél egy iPhone-t!](#svet-socialni-podvod-cili-na-cloveka-hu)
