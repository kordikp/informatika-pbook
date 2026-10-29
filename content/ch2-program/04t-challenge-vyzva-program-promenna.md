---
id: vyzva-program-promenna
type: challenge
title: "Prohoď dvě krabičky"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "V krabičce a je 5, v krabičce b je 8."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: promenna
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

V krabičce `a` je 5, v krabičce `b` je 8. Chceš je prohodit. Zní to jako hračka. První pokus ale zradí skoro každého.

<!-- task -->

Kamarád napsal:

```
a = 5
b = 8
a = b
b = a
```

**Úkol 1.** Napiš trasovací tabulku: hodnoty `a` a `b` po každém řádku. Co je v krabičkách na konci a proč prohození selhalo?

**Úkol 2.** Oprav to. Smíš použít třetí krabičku `t`. Kolik nejméně příkazů potřebuješ (první dva řádky se nepočítají)?

**Úkol 3.** Teď bez třetí krabičky. Smíš jen sčítat a odčítat. Stačí tři příkazy. Najdi je.

**Úkol 4.** Tři krabičky: `a = 1`, `b = 2`, `c = 3`. Zarotuj je: do `a` přijde hodnota z `b`, do `b` z `c` a do `c` z `a`. Výsledek má být `a = 2`, `b = 3`, `c = 1`. Kolik nejméně příkazů potřebuješ s jednou pomocnou krabičkou?

**Kdy máš hotovo:** tabulky sedí a každá oprava funguje pro **jakákoli** čísla, ne jen pro 5 a 8. Ověř to ještě s jinou dvojicí, třeba −3 a 10.

<!-- hint -->

Po řádku `a = b` je pětka pryč, krabička drží jen poslední hodnotu. Kam ji schováš, než ji přepíšeš?

<!-- hint -->

Bez třetí krabičky: ulož do `a` součet `a + b`. Součet v sobě nese obě čísla. Jak z něj dostaneš zpátky původní `a`?

<!-- hint -->

U rotace stačí schovat jedinou hodnotu: tu, kterou přepíšeš jako první.

<!-- solution -->

**Úkol 1:** po `a = b` je a = 8, b = 8. Po `b = a` zůstává a = 8, b = 8. Pětka zmizela hned prvním přiřazením, protože **nastav na** starou hodnotu přepíše.

**Úkol 2:** tři příkazy: `t = a`, `a = b`, `b = t`.

**Úkol 3:** `a = a + b` (a = 13), `b = a - b` (b = 13 − 8 = 5), `a = a - b` (a = 13 − 5 = 8). Funguje to, protože součet si pamatuje obě čísla: když od něj odečteš jedno, zbude druhé.

**Úkol 4:** čtyři příkazy: `t = a`, `a = b`, `b = c`, `c = t`.

<!-- more -->

V Pythonu jde prohození napsat jedním řádkem: `a, b = b, a`. Python si napřed vyrobí dvojici hodnot (8, 5) a teprve potom ji rozdělí do krabiček, takže nic nezmizí. Zamysli se: proč trik se sčítáním nefunguje pro texty, třeba `a = "pes"`? A co trik s násobením a dělením (`a = a * b`, `b = a / b`, `a = a / b`)? Najdi číslo, pro které selže, a vysvětli proč.
