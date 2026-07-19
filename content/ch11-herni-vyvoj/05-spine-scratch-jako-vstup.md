---
id: ch11-scratch-jako-vstup
type: spine
title: "Scratch: první hra z bloků"
readingTime: 3
standalone: true
teaser: "Žádné překlepy, žádné chybové hlášky. Barevné bloky, kočka — a za hodinu hratelná hra."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Proč je Scratch dobrá vstupní brána do programování her?"
recallA: "Program skládáš z bloků, které do sebe zapadnou jen správně — odpadají překlepy a syntaktické chyby. Přitom obsahuje skutečné koncepty: události, cykly, podmínky i proměnné, které pak přeneseš do textových jazyků."
highlights:
  - "Proč bloky, a ne „opravdový“ kód?"
  - "skládáš barevné bloky, které do sebe zapadnou jen tehdy, když dávají smysl"
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch11-scratch-jako-vstup
state: core
carriers: prose|code
---

Celou kapitolu mluvíme o smyčkách, kolizích a stavech — a teď si to všechno konečně poskládáš vlastníma rukama. Nejlepší místo, kde začít, je **Scratch** (scratch.mit.edu): blokové prostředí z dílny MIT, zdarma v prohlížeči, v češtině.

**Proč bloky, a ne „opravdový" kód?** Protože v textovém jazyce tě na začátku nejvíc brzdí věci, které s přemýšlením nesouvisí: překlepy, závorky, středníky. Ve Scratchi **skládáš barevné bloky, které do sebe zapadnou jen tehdy, když dávají smysl** — syntaktická chyba prostě nejde udělat. Zůstane jen to podstatné: logika. A ta je stejná jako v Pythonu.

Podívej, jak známě vypadá kompletní minihra — kočka chytá míč:

```
když kliknuto na zelenou vlajku        ← událost
    nastav [skóre] na 0                ← proměnná
    opakuj stále                       ← cyklus (herní smyčka!)
        když ⟨dotýká se [míč]⟩         ← podmínka (kolize!)
            změň [skóre] o 1           ← změna proměnné
            přehraj zvuk [cink]        ← zpětná vazba
```

Všechno z téhle kapitoly — i z kapitol o myšlení a programování — tam je: **události** (když kliknuto, když stisknuta klávesa), **cykly** (opakuj stále = herní smyčka), **podmínky** (dotýká se? = kolize), **proměnné** (skóre, životy). Scratch není „hračka místo programování". Je to programování s odstraněnou otravnou slupkou.

A má ještě jednu sílu: **sdílení.** Hru publikuješ kliknutím a kdokoli na světě si ji zahraje v prohlížeči — tvoje první vydaná hra, klidně dnes. Navíc se můžeš podívat dovnitř cizích projektů („Podívej se dovnitř") a učit se z nich — miliony her od lidí, jako jsi ty, s otevřeným kódem.

Kdy dál? Až ti bloky začnou být těsné (velké hry se v nich hůř udržují), přejdeš do textového jazyka nebo enginu (Godot, Unity) — a zjistíš, že koncepty už znáš, mění se jen zápis. Přesně proto se Scratchi říká vstupní brána.

**Zkus to!** Slož ve Scratchi hru z ukázky výš a rozšiř ji o všechno z téhle kapitoly: pohyb šipkami (vstup), životy a konec hry (stavy), zrychlování míče (křivka obtížnosti) a zvuky (zpětná vazba). Pak sdílej a pošli odkaz dvěma lidem na playtest.

> **Věděl/a jsi?** Scratch vytvořila skupina Lifelong Kindergarten na MIT Media Lab a jen na oficiálním webu jsou stovky milionů projektů. Jmenuje se podle „scratchování" DJů — mixování hotových kousků do vlastního díla.

Tím končí herní kapitola: od smyčky po vydanou hru. Poslední zastávka knihy opouští obrazovku úplně — kód si sáhne na skutečný svět. Robotika a micro:bit.
