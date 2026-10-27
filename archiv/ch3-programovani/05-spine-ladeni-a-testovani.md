---
id: ch3-ladeni-a-testovani
type: spine
title: "Ladění a testování"
readingTime: 3
standalone: true
teaser: "Program nefunguje? Gratuluju, jsi programátor. Teď se nauč chybu najít — systematicky."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Jaký je rozdíl mezi laděním a testováním?"
recallA: "Ladění (debugging) je hledání a oprava příčiny chyby, která už se projevila. Testování je ověřování, že program dělá, co má — i v neobvyklých případech, ideálně dřív, než chybu najde uživatel."
highlights:
  - "Ladění (debugging) je hledání a oprava chyb."
  - "Oprav příčinu, ne příznak."
  - "Testování je něco jiného: ověřuješ, že program dělá, co má — dřív, než chybu najde někdo jiný."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch3-ladeni-a-testovani
state: core
carriers: prose|table
---

Spustíš svůj program poprvé — a ono to nefunguje. Vítej v klubu: tohle je normální stav programování. Rozdíl mezi začátečníkem a profíkem není v tom, že profík chyby nedělá. Je v tom, co udělá pak.

**Ladění (debugging) je hledání a oprava chyb.** Klíčové slovo: hledání. Chyba, kterou vidíš (hra přičítá body dvakrát), je jen **příznak**. Někde v kódu je **příčina** — a tvým úkolem je ji vystopovat jako detektiv:

1. **Zopakuj chybu.** Kdy přesně se to děje? Vždycky, nebo jen po sebrání mince?
2. **Zužuj okruh podezřelých.** Půlka programu funguje? Chyba je v té druhé. (Dekompozice zase v akci.)
3. **Dívej se dovnitř.** Nech si vypisovat hodnoty proměnných (`print(skore)`) a sleduj, kde se realita rozejde s očekáváním.
4. **Oprav příčinu, ne příznak.** Odečíst „přebytečné" body natvrdo chybu jen zamaskuje.

**Testování je něco jiného: ověřuješ, že program dělá, co má — dřív, než chybu najde někdo jiný.** A nezkoušíš jen běžné případy, ale hlavně ty neobvyklé: Co když hráč zadá nulu? Záporné číslo? Text místo čísla? Co když stiskne dvě klávesy naráz? Programátoři těmhle situacím říkají okrajové případy — a právě tam se chyby schovávají nejraději.

| | Kdy | Otázka |
|---|---|---|
| Testování | průběžně, před vydáním | „Funguje to, co má?" |
| Ladění | když se chyba projeví | „Proč to nefunguje a kde?" |

Ještě jedna věc, dnes důležitější než kdy dřív: **ladit budeš i kód, který jsi nenapsal.** AI asistent ti vygeneruje program za minutu — ale záruku nedává. Vypadá dobře, běží, a přesto může v okrajovém případě dělat nesmysl. Postup je stejný: přečti, otestuj na normálním i záludném vstupu, a když selže, stopuj příčinu. Kdo umí ladit, může AI kód používat s klidem; kdo ne, jen doufá.

**Zkus to!** Tenhle prográmek má chybu: `while zivoty > 0: print("hraju")`. Co udělá, když se životy nikdy nemění? Popiš příznak (co uvidíš) a příčinu (proč se to děje) — a navrhni opravu.

> **Věděl/a jsi?** Anglické „bug" (brouk) se pro chybu ujalo i díky historce z roku 1947, kdy technici našli v reléovém počítači skutečnou můru — a vlepili ji do deníku s poznámkou „první opravdový nalezený brouk".

Máš kompletní programátorskou výbavu: proměnné, podmínky, cykly, funkce a ladění. V dalších kapitolách ji začneš používat na opravdové věci — data, weby, hry i roboty.
