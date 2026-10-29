---
id: ucet-a-autentizace-hu
translationOf: ucet-a-autentizace
lang: hu
type: spine
title: "Fiók és jelszó"
readingTime: 2
standalone: true
teaser: "Elfelejted a jelszavadat, és a telefon felajánlja: „Visszaállítás e-mailben”. Aki tehát bejut az e-mailedbe, a telefonodba is bejut?"
voice: universal
parent: null
diagram: anim-sila-hesla-hu
core: true
recallQ: "Miért veszélyes, ha ugyanaz a jelszavad egy játékhoz és az e-mailhez?"
recallA: "Ha a játékot feltörik, és a jelszó kiszivárog, a támadó az e-mailen is kipróbálja. Az e-mailen keresztül aztán minden mást is visszaállít."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: ucet-a-autentizace
conceptTitle: "Fiók és jelszó"
objective: "Elfelejted a jelszavadat, és a telefon felajánlja: „Visszaállítás e-mailben”. Aki tehát bejut az e-mailedbe, a telefonodba is bejut?"
mustCover:
  - "Fiók = identitás egy szolgáltatásban; hitelesítés = annak ellenőrzése, hogy tényleg te vagy"
  - "A jelszó hossza és egyedisége; egy szolgáltatásból kiszivárgott jelszó a többit is veszélyezteti"
  - "Jelszókezelő és 2FA (valami, amit tudsz + valami, ami nálad van)"
state: core
highlights:
  - "Fiók = identitás egy szolgáltatásban; hitelesítés = annak ellenőrzése, hogy tényleg te vagy"
  - "A jelszó hossza és egyedisége; egy szolgáltatásból kiszivárgott jelszó a többit is veszélyezteti"
  - "Jelszókezelő és 2FA (valami, amit tudsz + valami, ami nálad van)"
carriers: prose|table|animation|formula
---

Elfelejted a jelszavadat, és a telefon felajánlja: „Visszaállítás e-mailben”. Aki tehát bejut az e-mailedbe, a telefonodba is bejut?

A **fiók** a te identitásod egy szolgáltatásban. Amikor bejelentkezel, a szolgáltatás ellenőrzi, hogy tényleg te vagy-e az. Ezt **hitelesítésnek** hívják. Aki ismeri a jelszavadat, az a szolgáltatás szemében te vagy.

Egy támadó, aki ellopott egy jelszóadatbázist, másodpercenként 10 milliárd jelszót próbál ki. Először az ismert jelszavakat, aztán a szavakat és változataikat, végül az összes kombinációt. A **jelszo123**-at azonnal kitalálja. A **P@ss1**-et is. A **Tr4ktor!** bonyolultnak tűnik, de egy percen belül elesik. Egy olyan mondat, mint **a zsiráf gombócot eszik a Holdon**, nagyjából egymillió évig tartana neki.

| Jelszó | Hogyan találgatja a támadó | Mennyi ideig tart neki |
|---|---|---|
| jelszo123 | rajta van a leggyakoribb jelszavak listáján | azonnal |
| P@ss1 | csak 5 karakter, minden kombinációt kipróbál | egy másodpercen belül |
| Tr4ktor! | a „traktor” szó a szokásos cserékkel | egy percen belül |
| a zsiráf gombócot eszik a Holdon | 6 szó, mindegyik több tízezer közül | nagyjából egymillió év |

Az erős jelszó mindenekelőtt **hosszú**. Egy több szóból álló mondat legyőzi a rövid, jelekkel teli jelszót. Az olyan változatokat, mint a P@ss vagy a Tr4ktor, a támadó az elsők között próbálja ki.

Hogy miért a hossz nyer, azt egy egyszerű képlet mutatja meg:

$$\text{jelszavak száma} = (\text{karakterek száma})^{\text{hossz}}$$

Minden további karakter újra megsokszorozza a jelszavak számát. A billentyűzet mind a 95 karakteréből választott nyolc karakter $95^8$, nagyjából 7 billiárd jelszót ad, és a támadó nagyjából egy hét alatt végigpróbálja őket. Tizenhat kisbetű $26^{16}$ lehetőséget ad, és a találgatás több mint 100 000 évig tartana.

**Minden szolgáltatáshoz más jelszót.** Ha egy játékból kiszivárog a jelszó, a támadó azonnal kipróbálja az e-mailen.

Nem kell megjegyezned őket. A **jelszókezelő** egy széf, amely helyetted emlékszik rájuk. Mellé pedig a **kétlépcsős azonosítás (2FA)**: valami, amit tudsz (a jelszó), és valami, ami nálad van (a telefon).

Egyre több szolgáltatás kínál **azonosítókulcsot** (passkey) is. Jelszó helyett a telefonod azonosít ujjlenyomattal, arccal vagy PIN-kóddal. A kulcs az eszközön marad, és egy csaló oldalnak semmit sem ad ki, így a csaló nem tudja kicsalni.

**Próbáld ki!** Ma este: 1) derítsd ki, hány szolgáltatásnál használod ugyanazt a jelszót (őszintén!), 2) kapcsold be a kétlépcsős azonosítást az e-mailednél, 3) a haveibeenpwned.com oldalon ellenőrizd, nem szerepelt-e az e-mail-címed egy ismert adatszivárgásban.

> **Vigyázz, gyakori tévedés:** „Egy rövid, jelekkel teli jelszó, például a P@ss1, erős.” A támadó pillanatok alatt kipróbálja. Erősebb egy szavakból álló hosszú kifejezés. A kétlépcsős azonosítás pedig akkor is véd, ha a jelszó kiszivárog.

**Tovább:** A jelszót gyakrabban csalja ki egy csaló, mint hogy valaki kitalálja. → [A csalás az embert célozza](#c/podvod-cili-na-cloveka)
