---
id: ch9-logika-aplikace
type: spine
title: "Logika aplikace: stavy, vstupy, akce"
readingTime: 3
standalone: true
teaser: "Proč tě appka někdy „nepustí“ dál? Protože přesně ví, v jakém je stavu. A ty teď taky."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Co tvoří logiku aplikace?"
recallA: "Stavy (v jakém režimu appka je), vstupy (co uživatel udělá) a akce (co se provede). Chování appky = pravidla „když ve stavu S přijde vstup V, proveď akci A a přejdi do stavu S2“."
highlights:
  - "Logika aplikace je popis toho, co se stane, když uživatel něco udělá."
  - "Stav — v jakém režimu appka právě je."
  - "Vstup — co přijde zvenku."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch9-logika-aplikace
state: core
carriers: prose
---

Proč ti hudební appka po klepnutí na ▶ někdy začne hrát, jindy ukáže reklamu a jindy chce přihlášení? Stejné tlačítko, tři různé reakce. Odpověď: appka pokaždé byla **v jiném stavu**. A stavy jsou klíč k srdci každé aplikace.

**Logika aplikace je popis toho, co se stane, když uživatel něco udělá.** Skládá se ze tří ingrediencí:

- **Stav — v jakém režimu appka právě je.** Přihlášen/nepřihlášen. Košík prázdný/plný. Hraje/pauza. Kvíz na otázce 3 z 10. Stav si appka pamatuje v proměnných (kapitola o programování se vrací!).
- **Vstup — co přijde zvenku.** Klepnutí, napsaný text, ale i „přišla zpráva" nebo „vypršel čas". (Na webu jsi jim říkal události.)
- **Akce — co se provede.** Ulož, zobraz, přehraj, odešli… a často taky: **změň stav.**

Chování appky je pak sada pravidel: **„Když jsem ve stavu S a přijde vstup V, provedu akci A a přejdu do stavu S2."** Konkrétně, přehrávač: *(zastaveno) + klepnutí ▶ → začni hrát, přejdi do (hraje)*. *(hraje) + klepnutí ▶ → pauza.* Stejný vstup, jiný stav, jiná akce — přesně to jsi viděl u té hudební appky.

Tohle přemýšlení je univerzální: funguje ve Scratchi, v no-code nástroji, v Pythonu i v zadání pro AI. **Kdo umí popsat stavy a pravidla, umí navrhnout aplikaci — bez ohledu na nástroj.**

A ještě jedna supersíla: **hledání chyb.** Když se appka chová divně, příčina je vždycky v jedné ze tří ingrediencí: špatně si pamatuje stav („po odhlášení pořád ukazuje moje jméno"), špatně čte vstup, nebo dělá špatnou akci. Místo bezradného „nefunguje to" se ptáš: v jakém stavu byla? Co přišlo za vstup? Jaká akce se provedla — a jaká měla? To je ladění (kapitola 3) povýšené na návrhářskou úroveň.

**Zkus to!** Nakresli na papír logiku semaforu pro chodce: stavy (červená / zelená / bliká), vstupy (stisk tlačítka, uplynutí času) a pravidla přechodů. Pak totéž pro svoji vysněnou appku — tři obrazovky, stavy, pravidla. Právě jsi vytvořil návrh, podle kterého se dá stavět.

> **Věděl/a jsi?** Tomu, co sis nakreslil, říkají informatici stavový automat — a navrhují se tak výtahy, pračky, semafory, herní postavy i dialogy chatbotů. Jeden nápad, celý svět použití.

Návrh máš. A teď to nejzajímavější: nech si appku podle svého návrhu napsat od AI — a zjisti, co všechno u toho musíš uhlídat ty.
