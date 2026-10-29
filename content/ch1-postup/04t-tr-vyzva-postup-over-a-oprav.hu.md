---
id: vyzva-postup-over-a-oprav-hu
translationOf: vyzva-postup-over-a-oprav
lang: hu
type: challenge
title: "A szökőév és az ág, amely sosem fut le"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Egy naptárapp programja eldönti, hogy egy év szökőév-e."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: over-a-oprav
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Egy naptárapp programja eldönti, hogy egy év szökőév-e. 2024-re működik. 2023-ra is. Mégis hibás. Megtalálod a hibát, mielőtt a felhasználók találnák meg?

<!-- task -->

**Szabály:** egy év szökőév, ha osztható 4-gyel. Kivétel: a 100-zal osztható évek nem szökőévek. A kivétel kivétele: a 400-zal osztható évek szökőévek.

```
függvény szökőév(év):
    ha év osztható 4-gyel: add vissza IGEN
    különben ha év osztható 100-zal: add vissza NEM
    különben ha év osztható 400-zal: add vissza IGEN
    különben: add vissza NEM
```

1. **Előre, a kód elolvasása nélkül** írj minél kisebb tesztkészletet (bemenet és elvárt kimenet) úgy, hogy az évek minden olyan csoportjából, amelyet a szabály másképp kezel, legyen legalább egy. Hány teszt elég?
2. Futtasd le a kódot minden teszttel. Melyik bukik el?
3. Keress a kódban két ágat, amely **soha nem fut le**, akármilyen évet adsz meg. Miért?
4. Javítsd ki a kódot, és ellenőrizd **újra az összes teszttel**.

**A siker feltétele:** 4 teszt, a megtalált hibás bemenet, a halott ágak magyarázata és egy javítás, amely minden teszten átmegy.

<!-- hint -->

A szabály négy csoportra osztja az éveket: 4-gyel nem oszthatók; 4-gyel igen, de 100-zal nem oszthatók; 100-zal igen, de 400-zal nem oszthatók; 400-zal oszthatók.

<!-- hint -->

Vedd az 1900-as évet. Osztható 4-gyel?

<!-- hint -->

Mi történik egy 100-zal osztható évvel, ha a kód először a 4-gyel való oszthatóságot kérdezi? Próbáld megfordítani a kérdések sorrendjét.

<!-- solution -->

1. **Négy teszt:** 2023 → NEM, 2024 → IGEN, 1900 → NEM, 2000 → IGEN.
2. Az **1900** bukik el: osztható 4-gyel, ezért a kód azonnal IGEN-t ad vissza. Pedig 1900 nem volt szökőév.
3. Minden 100-zal (és 400-zal) osztható év 4-gyel is osztható. Ezért mindig az első feltétel kapja el, és a második és a harmadik ág soha nem indul el. Az ilyen ágat **halott kódnak** hívják, és figyelmeztetés, hogy valami nincs rendben.
4. Javítás: a legszigorúbb feltétellel kezdd a kérdezést.
```
ha év osztható 400-zal: add vissza IGEN
különben ha év osztható 100-zal: add vissza NEM
különben ha év osztható 4-gyel: add vissza IGEN
különben: add vissza NEM
```
Mind a négy teszt átmegy. Csoportonként egy teszt megbízhatóbb, mint száz véletlen év, mert 100-zal osztható véletlen évet szinte soha nem választasz.

<!-- more -->

Hatékonyság: a javított kód 2023-nál háromszor kérdez, mielőtt NEM-et válaszol. Pedig 4 évből 3 nem osztható 4-gyel. Írd át úgy, hogy a legtöbb évnél csak egyszer kérdezzen, és ellenőrizd, hogy továbbra is átmegy mind a négy teszten.
