---
id: vyzva-bezpeci-ochrana-zarizeni-sk
translationOf: vyzva-bezpeci-ochrana-zarizeni
lang: sk
type: challenge
title: "Koľko ti záloha naozaj dá"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "„Mám zálohu“ znie upokojujúco."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: ochrana-zarizeni
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

„Mám zálohu“ znie upokojujúco. Vypočítaj, koľko ochrany tá veta skutočne znamená.

<!-- task -->

Máš notebook so všetkými projektmi. Za jeden rok sa môže stať:

- **porucha disku**: 5 %, pri každom zariadení zvlášť;
- **ransomvér**: 10 %, zašifruje všetko, čo je v tej chvíli k počítaču pripojené;
- **požiar alebo krádež doma**: 1 %, zničí všetko, čo je doma.

Udalosti sú na sebe nezávislé. Porovnaj tri stratégie:

- **A**: len notebook, žiadna záloha;
- **B**: notebook + zálohovací disk, ktorý je **trvalo pripojený** káblom;
- **C**: notebook + disk, ktorý po zálohovaní **odpojíš** a schováš, + kópia v cloude s **históriou verzií**.

1. Vypočítaj pre A a B pravdepodobnosť, že za rok dáta zmiznú úplne. Pri B počítaj s tým, že dva disky naraz neodídu (porucha jedného sa opraví z druhého).
2. Prečo je C skoro nula? Čo všetko by sa muselo stať, aby dáta zmizli?
3. Pasca: cloud sa len **synchronizuje**, bez histórie verzií. Čo urobí ransomvér s cloudom? Vypočítaj, ako sa zmení riziko pri C.
4. Aj pri stratégii C o niečo prídeš. O čo a čím to ovplyvníš?

**Kritérium úspechu:** správne percentá pri A, B a pri C so synchronizáciou, plus jedna veta ku každej otázke.

<!-- hint -->

Ľahšie sa počíta, že sa **nič** nestane. Pravdepodobnosti nezávislých udalostí, ktoré nenastanú, sa násobia. Výsledok potom odčítaj od 1.

<!-- hint -->

Pri B si ku každej udalosti polož otázku: zničí obe kópie, alebo len jednu?

<!-- hint -->

Synchronizácia kopíruje každú zmenu. Aj tú zlú.

<!-- solution -->

1. **A**: nič sa nestane s pravdepodobnosťou 0,95 · 0,90 · 0,99 ≈ 0,846. Strata je teda **asi 15,4 %**, zhruba raz za 6 – 7 rokov. **B**: porucha disku už nevadí, ale ransomvér aj požiar zničia obe kópie: 1 − 0,90 · 0,99 = 0,109, teda **asi 10,9 %**. Pripojená záloha skoro nepomohla.

2. Pri C ransomvér na odpojený disk nedosiahne a požiar nezničí cloud. Dáta zmiznú, len keď zlyhajú všetky tri miesta nezávislými cestami: napríklad požiar doma a k tomu niekto ukradne cloudový účet a zmaže verzie. Preto má cloud silné heslo a 2FA.

3. Zašifrované súbory sa nahrajú do cloudu a prepíšu dobré verzie. Cloud sa správa ako pripojený disk. O všetko prídeš, keď v tom istom roku príde ransomvér aj požiar: 0,10 · 0,01 = **0,1 %**. Stále málo, ale stokrát viac, než je potrebné. História verzií túto dieru zavrie.

4. Stratíš všetko, čo vzniklo **od poslednej zálohy**. Ako často zálohuješ, toľko najviac stratíš.

<!-- more -->

Pravidlo **3-2-1**: 3 kópie, na 2 rôznych druhoch médií, 1 mimo domova. Navrhni zálohu pre celú rodinu (pozor na fotky v mobiloch) a vypočítaj ju rovnakým modelom. Potom pridaj vlastné riziko, napríklad stratu mobilu v škole, a odhadni jeho pravdepodobnosť.
