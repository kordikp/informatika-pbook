---
id: vyzva-bezpeci-podvod-cili-na-cloveka
type: challenge
title: "Čti adresu jako prohlížeč"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Podvodná stránka okopíruje logo, barvy i texty."
voice: universal
parent: null
diagram: null
core: false
lang: cs
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

Podvodná stránka okopíruje logo, barvy i texty. Jednu věc okopírovat neumí: doménu. Musíš ji ale umět přečíst.

<!-- task -->

Prohlížeč čte adresu podle přesných pravidel. Ty je teď odvodíš na vlastní pěst. Ondrovi přišlo ve zprávách šest odkazů:

1. `https://login.seznam.cz.overeni-uctu.top/prihlaseni`
2. `https://email.seznam.cz/posta`
3. `https://seznam.cz@prihlas-se.top/login`
4. `https://www.seznarn.info/`
5. `https://steamcommunity.com-darky.top/trade`
6. `https://steamcommunity.com/id/ondra`

**Úkol:**

- **a)** U každé adresy napiš, komu stránka skutečně patří. Hledáš *registrovanou doménu*, tedy jméno, které si někdo koupil.
- **b)** Sepiš **postup ve 3 krocích**, který z libovolné adresy vytáhne vlastníka. Musí fungovat na všech šesti adresách bez výjimky. Otestuj ho jako program: krok po kroku, bez „to je přece vidět“.
- **c)** Ondra namítá: „Ta stránka měla zámeček, takže byla bezpečná.“ Vysvětli ve dvou větách, co zámeček (HTTPS) dokazuje a co ne.

**Kritérium úspěchu:** všech šest vlastníků správně a postup, který na žádné adrese neselže.

<!-- hint -->

Adresa má tvar `https://` + hostitel + `/cesta`. Cesta za prvním samostatným lomítkem o vlastníkovi nerozhoduje.

<!-- hint -->

Zavináč je starý trik: všechno před ním prohlížeč bere jako „uživatelské jméno“, ne jako adresu.

<!-- hint -->

Hostitele čti **zprava**: koncovka (.cz, .com, .top) a jedna část před ní, to je vlastník. Pomlčka spojuje, nerozděluje. A čti písmeno po písmenu.

<!-- solution -->

**a)** 1: **overeni-uctu.top** (podvod). 2: **seznam.cz** (pravá, email je subdoména). 3: **prihlas-se.top** (podvod). 4: **seznarn.info** (podvod, r a n napodobují m). 5: **com-darky.top** (podvod). 6: **steamcommunity.com** (pravá).

**b)** **1.** Odřízni `https://` a všechno od prvního lomítka dál. **2.** Je-li ve zbytku zavináč, zahoď všechno před ním i zavináč. **3.** Ze zbytku vezmi zprava koncovku a jednu část před ní (části oddělují tečky, ne pomlčky) a přečti ji písmeno po písmenu. U koncovek jako .co.uk se berou tři části. Takové výjimky si prohlížeč pamatuje ze seznamu.

**c)** Zámeček znamená, že spojení je **šifrované** a že mluvíš s **majitelem té domény**. Nedokazuje, že majitel je poctivý. Certifikát si podvodník pořídí zdarma za pár minut.

<!-- more -->

Zahraj si hru navíc „Kdo vlastní tuhle adresu?“. Pak vyrob šest vlastních zrádných adres pro spolužáky (smyšlených, nikam je neregistruj) a nech je hádat. Kdo chce jít hlouběji, ať zjistí, co je **punycode**: adresa, ve které se latinské „a“ nahradí stejně vypadajícím písmenem z azbuky, a jak se proti tomu prohlížeče brání.
