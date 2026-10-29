---
id: vyzva-stroje-a-site-cloud-a-server
type: challenge
title: "Kolik let vydrží tvoje fotky?"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Máš fotky v mobilu a ještě kopii na externím disku v šuplíku."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: cloud-a-server
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Máš fotky v mobilu a ještě kopii na externím disku v šuplíku. Dvě kopie, takže záloha, ne? Spočítej to. Výsledek tě možná překvapí, protože dvě kopie na jednom místě se umí ztratit najednou.

<!-- task -->

Odhad rizik na jeden rok:

- **M**: mobil ztratíš nebo rozbiješ: 10 %.
- **D**: externí disk doma selže: 2 %.
- **C**: přijdeš o účet v cloudu (zapomenuté heslo, zablokování, chyba služby): 1 %.
- **H**: doma vyhoří, vytopí se nebo se vykrade byt a zničí se všechno, co je doma, i mobil: 0,5 %.

Čtyři strategie: **A** jen mobil. **B** mobil a disk doma. **C** mobil a cloud. **D** mobil, disk doma a cloud.

1. Pro každou strategii spočítej pravděpodobnost, že během roku přijdeš o **všechny** kopie.
2. Převeď výsledky na „jednou za kolik let“ a seřaď strategie.
3. Vysvětli, proč B vychází hůř, než se na první pohled zdá.

Rizika M, D a C ber jako nezávislá. Když se mají stát dvě nezávislé věci zároveň, pravděpodobnosti vynásobíš. Malé součty klidně zaokrouhli.

**Kritérium úspěchu:** pořadí D, C, B, A, čísla řádově správně a v bodě 3 vysvětlení, proč požár zničí obě kopie najednou.

<!-- hint -->

Strategie A: o fotky přijdeš, když nastane M, nebo H. To je asi 10 % + 0,5 %.

<!-- hint -->

Strategie B: buď nastane H (zničí obě kopie zároveň), nebo nastane M a k tomu D. Druhou možnost spočítáš jako 0,1 × 0,02.

<!-- hint -->

Cloud stojí jinde, a tak ho požár doma nezasáhne. Ve strategii D o všechno přijdeš jen při (H a C), nebo při (M a D a C).

<!-- solution -->

1. **A:** asi 10,5 %. **B:** 0,5 % + 0,1 × 0,02 = 0,5 % + 0,2 % ≈ **0,7 %**. **C:** 0,105 × 0,01 ≈ **0,1 %**. **D:** 0,005 × 0,01 + 0,1 × 0,02 × 0,01 = 0,005 % + 0,002 % ≈ **0,007 %**.
2. A jednou za zhruba 10 let, B asi za 140 let, C asi za 1 000 let, D asi za 14 000 let. Pořadí od nejlepší: D, C, B, A.
3. Ve strategii B tvoří většinu rizika (0,5 % ze 0,7 %) jediná událost H, která zničí obě kopie **najednou**. Druhá kopie na stejném místě proti ní nepomůže. Tomu se říká **společné selhání**. Proto platí pravidlo **3-2-1**: 3 kopie, na 2 různých druzích médií, 1 z nich na jiném místě.

<!-- more -->

Rizika si uprav podle sebe: jak často ti opravdu padá mobil? A co když cloudová firma zruší službu pro všechny najednou? To je další společné selhání. Napiš si do tabulky vlastní zálohovací plán a spočítej ho. Inženýři takhle počítají odolnost datacenter: proto mají servery ve více budovách a městech.
