---
id: promenna
type: spine
title: "Proměnná: paměť programu"
readingTime: 1
standalone: true
teaser: "Na ikoně chatu svítí 3 nepřečtené zprávy. Přijde čtvrtá a číslo se změní. Kde si mobil to číslo pamatuje?"
voice: universal
parent: null
diagram: promenne-krabicky
core: true
recallQ: "Skóre je 5. Program provede „nastav skóre na 3“ a pak „změň skóre o 2“. Kolik je skóre?"
recallA: "5. Nastavení přepíše hodnotu na 3, změna o 2 ji zvýší na 5. Proměnná si pamatuje jen poslední hodnotu."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: promenna
conceptTitle: "Proměnná: paměť programu"
state: core
highlights:
  - "Název a aktuální hodnota (právě jedna)"
  - "Nastav vs. změň o; přiřazení přepíše starou hodnotu"
  - "Proměnná jako stav programu (skóre, životy, režim)"
carriers: prose|diagram
---

Na ikoně chatu svítí 3 nepřečtené zprávy. Přijde čtvrtá a číslo se změní. Kde si mobil to číslo pamatuje?

**Proměnná** je pojmenovaná krabička v paměti programu. V jednu chvíli drží **právě jednu hodnotu**: skóre, životy, jméno. Program ji umí přečíst i změnit.

Pozor na dva různé příkazy. **Nastav na** hodnotu přepíše. **Změň o** k hodnotě přičte, nebo odečte.

Projdi kousek hry. Na začátku je **skóre** 0 a **životy** 3. Sebereš minci: *změň skóre o 1*, skóre je 1. Další mince: 2. Zásah od nepřítele: *změň životy o −1*, životy jsou 2. Bonusová truhla: *nastav skóre na 10*. Teď je skóre 10 a dvojka zmizela. Mince: 11. Další zásah: životy jsou 1.

Krabička drží **jen poslední hodnotu**. Když použiješ **nastav na**, stará hodnota zmizí. Proto si programátoři při hledání chyb píšou **trasovací tabulku**: po každém kroku zapíšou, co je v krabičkách.

Hodnotám všech proměnných v jednu chvíli se říká **stav programu**. Skóre 11 a jeden život: to je stav tvé hry teď.

V programech uvidíš zápis **skóre = skóre + 1**. Není to rovnice z matiky. Znamená: vezmi, co je v krabičce, přičti 1 a výsledek do krabičky zase ulož.

**Zkus to!** Vymysli, jaké proměnné by potřebovala jednoduchá hra „hádej číslo“. Co si musí program pamatovat? (Nejméně tajné číslo, poslední tip hráče a počet pokusů.) Která z nich se během hry mění nejčastěji a která se nezmění vůbec?

> **Pozor, častý omyl:** „x = x + 1 je nesmysl, protože to neplatí jako rovnice.“ V programu to není rovnice, ale příkaz: vezmi hodnotu z krabičky x, přičti 1 a výsledek do krabičky vrať. Krabička si přitom pamatuje jen poslední hodnotu, ne všechny předchozí.

**Dál:** Proměnná drží jednu hodnotu. Tabulka jich drží tisíce, uspořádané do řádků a sloupců. → [Tabulka: data s řádem](#c/tabulka-a-evidence)
