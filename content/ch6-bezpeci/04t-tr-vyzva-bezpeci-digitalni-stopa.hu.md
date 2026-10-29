---
id: vyzva-bezpeci-digitalni-stopa-hu
translationOf: vyzva-bezpeci-digitalni-stopa
lang: hu
type: challenge
title: "Három ártatlan nyom, egy ember"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Egy becenév, egy fotó és egy születésnapi köszöntés."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: digitalni-stopa
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Egy becenév, egy fotó és egy születésnapi köszöntés. Egyik sem árul el önmagában semmit. Együtt talán igen. Számold ki.

<!-- task -->

A városban **50 000 ember** él. Az egyszerűség kedvéért vedd úgy, hogy a születési évek egyenletesen oszlanak el 80 évre, a városban 10 egyforma méretű általános iskola van, és a születésnapok mind a 365 napra ugyanolyan gyakran esnek.

Valaki három nyomot tesz közzé, mindegyiket máshol:

1. egy becenevet a játékban: **kocour_2013** (elárulja a születési évet),
2. egy fotót egy pulóverben, amelyen az iskola neve áll,
3. egy bejegyzést: „Ma van a születésnapom!”, dátummal.

Az **anonimitási halmaz** azoknak az embereknek a száma, akikre minden illik, amit valakiről tudsz. Minél kisebb, annál könnyebb megtalálni az illetőt. Ha 5 alá csökken, az ember gyakorlatilag felkutatható.

- **a)** Számold ki az anonimitási halmaz méretét minden nyom után, 1, 2, 3 sorrendben.
- **b)** **Egy** nyomot törölhetsz. Melyiket, hogy a halmaz a lehető legnagyobb maradjon? Számold ki mindhárom lehetőséget, és indokold meg az eredményt.
- **c)** A modell leegyszerűsített. Keress egy dolgot, ami miatt a valóságban a halmaz még kisebb.

**Sikerkritérium:** helyes számok az a)-ban és a b)-ben, és a c)-ben egy konkrét ok.

<!-- hint -->

Minden nyom elosztja a halmazt: a születési év nyolcvannal, az iskola tízzel, a születésnap napja háromszázhatvanöttel.

<!-- hint -->

A b)-nél a nyomok sorrendje nem számít. Számold ki, mi marad, ha az egyik osztás kimarad.

<!-- hint -->

A c)-nél gondolj arra, mi mást mutat még a fotó, és hány azonos évfolyamú gyerek jár egy iskolába.

<!-- solution -->

**a)** Az 1. nyom után: 50 000 : 80 = **625** ember. A 2. nyom után: 625 : 10 ≈ **62**, ez kb. két-három osztály. A 3. nyom után: 62,5 : 365 ≈ **0,17**. Az 1-nél kisebb szám azt jelenti, hogy ilyen ember a városban **valószínűleg csak egy van**.

**b)** Születésnap nélkül: 50 000 : 80 : 10 ≈ **62**. Év nélkül: 50 000 : 10 : 365 ≈ **14**. Iskola nélkül: 50 000 : 80 : 365 ≈ **1,7**. A legjobb a **születésnap dátumát** eltávolítani: ez oszt a legtöbbel, mert ennek van a legtöbb lehetséges értéke. Épp a legártatlanabb nyom a legárulkodóbb. És ne feledd: a törölt nem jelenti azt, hogy eltűnt, ezért a legjobb egyáltalán nem közzétenni.

**c)** Például: a fotón látszik az arc, a barátok és a hely; ugyanabból az évfolyamból csak néhány osztály jár az iskolába, így elég megkérdezni; a becenév gyakran ugyanaz több játékban is. Kutatók kimutatták, hogy az amerikaiak többségét mindössze három adat egyértelműen azonosítja: az irányítószám, a születési dátum és a nem.

<!-- more -->

Végezd el ugyanezt a számítást magadra: mit árulnak el a beceneveid, a profiljaid és a fotóid? Csak papíron számolj, és sehol ne tedd közzé. Nézz utána, mi az a **k-anonimitás**: így védik például az egészségügyi statisztikák adatait. És a mobilod kamerabeállításaiban nézd meg, hogy a fotók elmentik-e a helyet.
