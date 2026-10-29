---
id: vyzva-bezpeci-podvod-cili-na-cloveka-sk
translationOf: vyzva-bezpeci-podvod-cili-na-cloveka
lang: sk
type: challenge
title: "Čítaj adresu ako prehliadač"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Podvodná stránka skopíruje logo, farby aj texty."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: podvod-cili-na-cloveka
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Podvodná stránka skopíruje logo, farby aj texty. Jednu vec skopírovať nevie: doménu. Musíš ju však vedieť prečítať.

<!-- task -->

Prehliadač číta adresu podľa presných pravidiel. Ty ich teraz odvodíš na vlastnú päsť. Ondrovi prišlo v správach šesť odkazov:

1. `https://login.seznam.cz.overeni-uctu.top/prihlaseni`
2. `https://email.seznam.cz/posta`
3. `https://seznam.cz@prihlas-se.top/login`
4. `https://www.seznarn.info/`
5. `https://steamcommunity.com-darky.top/trade`
6. `https://steamcommunity.com/id/ondra`

**Úloha:**

- **a)** Pri každej adrese napíš, komu stránka skutočne patrí. Hľadáš *registrovanú doménu*, teda meno, ktoré si niekto kúpil.
- **b)** Spíš **postup v 3 krokoch**, ktorý z ľubovoľnej adresy vytiahne vlastníka. Musí fungovať na všetkých šiestich adresách bez výnimky. Otestuj ho ako program: krok za krokom, bez „to je predsa vidieť“.
- **c)** Ondra namieta: „Tá stránka mala zámok, takže bola bezpečná.“ Vysvetli v dvoch vetách, čo zámok (HTTPS) dokazuje a čo nie.

**Kritérium úspechu:** všetkých šesť vlastníkov správne a postup, ktorý na žiadnej adrese nezlyhá.

<!-- hint -->

Adresa má tvar `https://` + hostiteľ + `/cesta`. Cesta za prvou samostatnou lomkou o vlastníkovi nerozhoduje.

<!-- hint -->

Zavináč je starý trik: všetko pred ním prehliadač berie ako „používateľské meno“, nie ako adresu.

<!-- hint -->

Hostiteľa čítaj **sprava**: koncovka (.cz, .com, .top) a jedna časť pred ňou, to je vlastník. Pomlčka spája, nerozdeľuje. A čítaj písmeno po písmene.

<!-- solution -->

**a)** 1: **overeni-uctu.top** (podvod). 2: **seznam.cz** (pravá, email je subdoména). 3: **prihlas-se.top** (podvod). 4: **seznarn.info** (podvod, r a n napodobňujú m). 5: **com-darky.top** (podvod). 6: **steamcommunity.com** (pravá).

**b)** **1.** Odrež `https://` a všetko od prvej lomky ďalej. **2.** Ak je vo zvyšku zavináč, zahoď všetko pred ním aj zavináč. **3.** Zo zvyšku vezmi sprava koncovku a jednu časť pred ňou (časti oddeľujú bodky, nie pomlčky) a prečítaj ju písmeno po písmene. Pri koncovkách ako .co.uk sa berú tri časti. Takéto výnimky si prehliadač pamätá zo zoznamu.

**c)** Zámok znamená, že spojenie je **šifrované** a že hovoríš s **majiteľom tej domény**. Nedokazuje, že majiteľ je poctivý. Certifikát si podvodník zaobstará zadarmo za pár minút.

<!-- more -->

Zahraj si hru navyše „Kto vlastní túto adresu?“. Potom vyrob šesť vlastných zradných adries pre spolužiakov (vymyslených, nikde ich neregistruj) a nechaj ich hádať. Kto chce ísť hlbšie, nech zistí, čo je **punycode**: adresa, v ktorej sa latinské „a“ nahradí rovnako vyzerajúcim písmenom z azbuky, a ako sa proti tomu prehliadače bránia.
