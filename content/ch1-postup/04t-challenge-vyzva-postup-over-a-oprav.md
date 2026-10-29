---
id: vyzva-postup-over-a-oprav
type: challenge
title: "Přestupný rok a větev, která nikdy neproběhne"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Program v kalendářní appce rozhoduje, jestli je rok přestupný."
voice: universal
parent: null
diagram: null
core: false
lang: cs
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

Program v kalendářní appce rozhoduje, jestli je rok přestupný. Pro rok 2024 funguje. Pro 2023 taky. A přesto je špatně. Najdeš chybu dřív, než ji najdou uživatelé?

<!-- task -->

**Pravidlo:** rok je přestupný, když je dělitelný 4. Výjimka: roky dělitelné 100 přestupné nejsou. Výjimka z výjimky: roky dělitelné 400 přestupné jsou.

```
funkce přestupný(rok):
    když rok je dělitelný 4: vrať ANO
    jinak když rok je dělitelný 100: vrať NE
    jinak když rok je dělitelný 400: vrať ANO
    jinak: vrať NE
```

1. **Předem, bez čtení kódu**, napiš co nejmenší sadu testů (vstup a očekávaný výstup), aby z každé skupiny roků, se kterou pravidlo zachází jinak, byl aspoň jeden. Kolik testů stačí?
2. Proveď kód s každým testem. Který selže?
3. Najdi v kódu dvě větve, které **nikdy neproběhnou**, ať zadáš jakýkoli rok. Proč?
4. Oprav kód a ověř ho **znovu všemi testy**.

**Kritérium úspěchu:** 4 testy, nalezený chybný vstup, vysvětlení mrtvých větví a oprava, která projde všemi testy.

<!-- hint -->

Pravidlo dělí roky do čtyř skupin: nedělitelné 4, dělitelné 4 ale ne 100, dělitelné 100 ale ne 400, dělitelné 400.

<!-- hint -->

Vezmi rok 1900. Je dělitelný 4?

<!-- hint -->

Co se stane s rokem dělitelným 100, když se kód nejdřív ptá na dělitelnost 4? Zkus otočit pořadí otázek.

<!-- solution -->

1. **Čtyři testy:** 2023 → NE, 2024 → ANO, 1900 → NE, 2000 → ANO.
2. Selže **1900**: je dělitelný 4, takže kód hned vrátí ANO. Rok 1900 ale přestupný nebyl.
3. Každý rok dělitelný 100 (i 400) je dělitelný i 4. První podmínka ho proto chytí vždy a druhá a třetí větev se nikdy nespustí. Takové větvi se říká **mrtvý kód** a je to varování, že je něco špatně.
4. Oprava: ptej se od nejpřísnější podmínky.
```
když rok je dělitelný 400: vrať ANO
jinak když rok je dělitelný 100: vrať NE
jinak když rok je dělitelný 4: vrať ANO
jinak: vrať NE
```
Všechny čtyři testy projdou. Jeden test na každou skupinu je spolehlivější než sto náhodných roků, protože náhodný rok dělitelný 100 skoro nikdy nevybereš.

<!-- more -->

Efektivita: opravený kód se u roku 2023 ptá třikrát, než odpoví NE. Přitom 3 ze 4 roků nejsou dělitelné 4. Přepiš ho tak, aby se u většiny roků ptal jen jednou, a ověř, že pořád projde všemi čtyřmi testy.
