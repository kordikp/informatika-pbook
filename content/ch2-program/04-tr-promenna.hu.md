---
id: promenna-hu
translationOf: promenna
lang: hu
type: spine
title: "Változó: a program memóriája"
readingTime: 2
standalone: true
teaser: "A csetalkalmazás ikonján 3 olvasatlan üzenet világít. Jön egy negyedik, és a szám megváltozik. Hol tartja számon a telefon ezt a számot?"
voice: universal
parent: null
diagram: promenne-krabicky-hu
core: true
recallQ: "A pontszám 5. A program végrehajtja: „állítsd a pontszámot 3-ra”, aztán „változtasd meg a pontszámot 2-vel”. Mennyi a pontszám?"
recallA: "5. A beállítás felülírja az értéket 3-ra, a 2-vel változtatás 5-re emeli. A változó csak az utolsó értékét jegyzi meg."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: promenna
conceptTitle: "Változó: a program memóriája"
objective: "A csetalkalmazás ikonján 3 olvasatlan üzenet világít. Jön egy negyedik, és a szám megváltozik. Hol tartja számon a telefon ezt a számot?"
mustCover:
  - "Név és aktuális érték (pontosan egy)"
  - "Állítsd be vs. változtasd meg; az értékadás felülírja a régi értéket"
  - "A változó mint a program állapota (pontszám, életek, mód)"
state: core
highlights:
  - "Név és aktuális érték (pontosan egy)"
  - "Állítsd be vs. változtasd meg; az értékadás felülírja a régi értéket"
  - "A változó mint a program állapota (pontszám, életek, mód)"
carriers: prose|diagram
---

A csetalkalmazás ikonján 3 olvasatlan üzenet világít. Jön egy negyedik, és a szám megváltozik. Hol tartja számon a telefon ezt a számot?

A **változó** egy elnevezett doboz a program memóriájában. Egyszerre **pontosan egy értéket** tárol: pontszámot, életeket, nevet. A program ki tudja olvasni és meg is tudja változtatni.

Figyelj két különböző parancsra. Az **állítsd be** felülírja az értéket. A **változtasd meg** hozzáad az értékhez vagy elvesz belőle.

Játssz végig egy kis részt egy játékból. Az elején a **pontszám** 0, az **életek** száma 3. Felveszel egy érmét: *változtasd meg a pontszámot 1-gyel*, a pontszám 1. Még egy érme: 2. Találat egy ellenségtől: *változtasd meg az életeket −1-gyel*, az életek száma 2. Bónuszláda: *állítsd a pontszámot 10-re*. Most a pontszám 10, a 2 eltűnt. Érme: 11. Újabb találat: az életek száma 1.

A doboz **csak az utolsó értéket** tárolja. Ha az **állítsd be** parancsot használod, a régi érték eltűnik. Ezért a programozók hibakereséskor **nyomkövető táblázatot** írnak: minden lépés után feljegyzik, mi van a dobozokban.

Az összes változó értékét egy adott pillanatban a **program állapotának** nevezzük. 11 pont és egy élet: ez most a játékod állapota.

A programokban ilyet fogsz látni: **pont = pont + 1**. Ez nem matekos egyenlet. Azt jelenti: vedd, ami a dobozban van, adj hozzá 1-et, és az eredményt tedd vissza a dobozba.

**Próbáld ki!** Gondold ki, milyen változók kellenének egy egyszerű „találd ki a számot” játékhoz. Mit kell a programnak megjegyeznie? (Legalább a titkos számot, a játékos utolsó tippjét és a próbálkozások számát.) Melyik változik a legtöbbször játék közben, és melyik egyáltalán nem?

> **Vigyázz, gyakori tévedés:** „Az x = x + 1 értelmetlen, mert egyenletként nem igaz.” A programban ez nem egyenlet, hanem parancs: vedd ki az értéket az x dobozból, adj hozzá 1-et, és az eredményt tedd vissza a dobozba. A doboz közben csak az utolsó értéket jegyzi meg, nem az összes korábbit.

**Tovább:** Egy változó egy értéket tárol. Egy táblázat ezreket, sorokba és oszlopokba rendezve. → [Táblázat: rendezett adatok](#c/tabulka-a-evidence)
