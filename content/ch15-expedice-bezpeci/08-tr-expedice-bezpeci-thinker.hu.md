---
id: expedice-bezpeci-thinker-hu
translationOf: expedice-bezpeci-thinker
lang: hu
type: spine
title: "A rejtjelek matematikája: RSA kicsiben és CryptoHack"
readingTime: 1
standalone: false
teaser: "Hogyan küldhet egymásnak titkos üzenetet két ember, aki soha nem találkozott, és nincs közös kulcsuk?"
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-bezpeci-thinker
conceptTitle: "A rejtjelek matematikája: RSA kicsiben és CryptoHack"
objective: "Hogyan küldhet egymásnak titkos üzenetet két ember, aki soha nem találkozott, és nincs közös kulcsuk?"
state: edited
carriers: prose|formula
---

**🔬 Kitérő** · [Zászló hadművelet](#expedice-bezpeci-hu)

Hogyan küldhet egymásnak titkos üzenetet két ember, aki soha nem találkozott, és nincs közös kulcsuk? A válasz a **nyilvános kulcsú titkosítás**, és ezek közül a leghíresebb az RSA. Próbáld ki kicsiben, papíron.

Vegyél két prímszámot: p = 3 és q = 11. A szorzatukat, n = 33-at, és az e = 3 nyilvános kulcsot bárki ismerheti. A d = 7 titkos kulcsot csak te ismered.

- Az m üzenet **titkosítása**: számold ki $$m^3$$ 33-mal való osztásának maradékát. m = 4 esetén 64 jön ki, a maradék **31**.
- **Visszafejtés**: $$31^7$$ 33-mal való osztásának maradéka. Újra **4** jön ki.

**A kihívásod:** titkosítsd az m = 2-t, aztán fejtsd vissza az eredményt. Ellenőrizd, hogy visszajutsz a 2-höz. Aztán próbálj rájönni, miért tudná a támadó könnyen kiszámolni d-t, ha ismerné p-t és q-t, és miért több száz számjegyűek az igazi prímszámok.

(Megoldás: 2³ = 8, a maradék 8; 8⁷ = 2 097 152, a 33-mal való osztás maradéka 2.)

Innen az [Introduction to CryptoHack](https://cryptohack.org/courses/intro/) visz tovább: kriptográfiai feladatok Pythonban, ingyenes, angol nyelvű. Fiókot és a közösségi Discordot csak szülővel.

**Vissza az expedícióra:** [Zászló hadművelet](#mission-expedice-bezpeci)
