---
id: vyzva-aplikace-promenna-hu
translationOf: vyzva-aplikace-promenna
lang: hu
type: challenge
title: "Lehetetlen állapotok"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Kijelentkezel a zenei appból, és egy másodperc múlva szólni kezd egy dal."
voice: universal
parent: svet-aplikace-promenna-hu
diagram: null
core: false
status: accepted
concept: promenna
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Kijelentkezel a zenei appból, és egy másodperc múlva szólni kezd egy dal. Senki nem nyomott a ▶ gombra. Honnan jött?

<!-- task -->

A lejátszónak három igen/nem típusú változója van: `bejelentkezve`, `tolt`, `szol`. A szabályok: a kijelentkezett felhasználónál semmi nem töltődik és semmi nem szól, és az app soha nem tölt és szól egyszerre.

Az események: koppintás a ▶ gombra, „betöltve” (megérkeztek a dal adatai), „hálózati hiba” (a töltés nem sikerült), „bejelentkezés” és „kijelentkezés”.

1. A három változó értékeinek hány kombinációja létezik? Melyeknek van értelme? Nevezd el őket.
2. Rajzolj **állapotdiagramot**: az állapotok körök, az események nyilak. Nyilat csak oda rajzolj, ahol az állapot változik.
3. A programozó ezt írta: „kijelentkezés” esetén legyen `bejelentkezve = nem` és `szol = nem`. „Betöltve” esetén legyen `tolt = nem` és `szol = igen`. Keress olyan eseménysort, amely után a kijelentkezett felhasználónak szól a zene.
4. Írd át a lejátszót egyetlen `allapot` változóra úgy, hogy a lehetetlen kombinációt le se lehessen írni. Írj tesztet (bemenet és elvárt kimenet) minden nyílra.

**Siker:** az értelmes állapotok száma, a nyilak száma, ugyanennyi teszt és egy eseménysor, amely leleplezi a hibát.

<!-- hint -->

Három igen/nem változó: hány lehetőség van az elsőre, hány a másodikra, hány a harmadikra? Aztán húzd ki a kombinációkat a szabályok szerint.

<!-- hint -->

Pont azoknak a kombinációknak van értelme, amelyeknek olyan nevet tudsz adni, amit a felhasználó is megértene: „szünet”, „tölt”… Hányat találsz?

<!-- hint -->

Kezdd szünetben. Mi van, ha a felhasználó pont akkor jelentkezik ki, amikor a dal még töltődik, és az adatok csak utána érkeznek meg?

<!-- solution -->

**1.** A kombinációk száma 2 × 2 × 2 = 8. Ebből 4-nek van értelme: **Kijelentkezve** (nem, nem, nem), **Szünet** (igen, nem, nem), **Tölt** (igen, igen, nem), **Szól** (igen, nem, igen).

**2.** 8 nyíl van: Kijelentkezve → Szünet (bejelentkezés), Szünet → Tölt (▶), Szünet → Kijelentkezve (kijelentkezés), Tölt → Szól (betöltve), Tölt → Szünet (hálózati hiba), Tölt → Kijelentkezve (kijelentkezés), Szól → Szünet (▶), Szól → Kijelentkezve (kijelentkezés).

**3.** Szünetből: ▶, kijelentkezés, betöltve. Kijelentkezés után `tolt = igen` marad, mert erről a kód megfeledkezett. A késői „betöltve” ezután beállítja: `szol = igen`, és létrejön a (nem, nem, igen).

**4.** Az `allapot` a négy érték egyikét veszi fel. Minden esemény megkérdezi, milyen állapotban van az app: a „betöltve” csak a Tölt állapotból vált Szólra, különben eldobja az app. 8 nyíl = 8 teszt. Tegyél melléjük egy hibatesztet is: ▶, kijelentkezés, betöltve → elvárt állapot: Kijelentkezve.

<!-- more -->

Adj hozzá egy „Reklám” állapotot, amelyet nem lehet átugrani, és egy „Nincs internet” állapotot. Hány nyíl és hány teszt jön hozzá? A nagy appok erre állapotgép-könyvtárakat használnak, például a JavaScripthez készült XState-et (angolul). Aztán próbáld megrajzolni az állapotdiagramot az osztály appjának „Fizetés” gombjához.
