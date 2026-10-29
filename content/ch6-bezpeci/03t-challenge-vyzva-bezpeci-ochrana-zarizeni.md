---
id: vyzva-bezpeci-ochrana-zarizeni
type: challenge
title: "Kolik ti záloha doopravdy dá"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "„Mám zálohu“ zní uklidňujícím způsobem."
voice: universal
parent: null
diagram: null
core: false
lang: cs
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

„Mám zálohu“ zní uklidňujícím způsobem. Spočítej, kolik ochrany ta věta skutečně znamená.

<!-- task -->

Máš notebook se všemi projekty. Za jeden rok se může stát:

- **porucha disku**: 5 %, u každého zařízení zvlášť;
- **ransomware**: 10 %, zašifruje všechno, co je v tu chvíli k počítači připojené;
- **požár nebo krádež doma**: 1 %, zničí všechno, co je doma.

Události jsou na sobě nezávislé. Porovnej tři strategie:

- **A**: jen notebook, žádná záloha;
- **B**: notebook + zálohovací disk, který je **trvale připojený** kabelem;
- **C**: notebook + disk, který po zálohování **odpojíš** a schováš, + kopie v cloudu s **historií verzí**.

1. Spočítej pro A a B pravděpodobnost, že za rok data zmizí úplně. U B počítej s tím, že dva disky najednou neodejdou (porucha jednoho se opraví z druhého).
2. Proč je C skoro nula? Co všechno by se muselo stát, aby data zmizela?
3. Past: cloud se jen **synchronizuje**, bez historie verzí. Co udělá ransomware s cloudem? Spočítej, jak se změní riziko u C.
4. I u strategie C o něco přijdeš. O co a čím to ovlivníš?

**Kritérium úspěchu:** správná procenta u A, B a u C se synchronizací, plus jedna věta ke každé otázce.

<!-- hint -->

Snáz se počítá, že se **nic** nestane. Pravděpodobnosti nezávislých událostí, které nenastanou, se násobí. Výsledek pak odečti od 1.

<!-- hint -->

U B si ke každé události polož otázku: zničí obě kopie, nebo jen jednu?

<!-- hint -->

Synchronizace kopíruje každou změnu. I tu špatnou.

<!-- solution -->

1. **A**: nic se nestane s pravděpodobností 0,95 · 0,90 · 0,99 ≈ 0,846. Ztráta je tedy **asi 15,4 %**, zhruba jednou za 6–7 let. **B**: porucha disku už nevadí, ale ransomware i požár zničí obě kopie: 1 − 0,90 · 0,99 = 0,109, tedy **asi 10,9 %**. Připojená záloha skoro nepomohla.

2. U C ransomware na odpojený disk nedosáhne a požár nezničí cloud. Data zmizí, jen když selžou všechna tři místa nezávislými cestami: třeba požár doma a k tomu někdo ukradne cloudový účet a smaže verze. Proto má cloud silné heslo a 2FA.

3. Zašifrované soubory se nahrají do cloudu a přepíšou dobré verze. Cloud se chová jako připojený disk. O všechno přijdeš, když ve stejném roce přijde ransomware i požár: 0,10 · 0,01 = **0,1 %**. Pořád málo, ale stokrát víc, než je potřeba. Historie verzí tuhle díru zavře.

4. Ztratíš všechno, co vzniklo **od poslední zálohy**. Jak často zálohuješ, tolik nejvýš ztratíš.

<!-- more -->

Pravidlo **3-2-1**: 3 kopie, na 2 různých druzích médií, 1 mimo domov. Navrhni zálohu pro celou rodinu (pozor na fotky v mobilech) a spočítej ji stejným modelem. Pak přidej vlastní riziko, třeba ztrátu mobilu ve škole, a odhadni jeho pravděpodobnost.
