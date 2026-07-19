---
id: ch5-ai-se-uci-z-dat
type: spine
title: "AI se učí z dat"
readingTime: 3
standalone: true
teaser: "Nikdo jí nenapsal pravidla. Dostala miliony příkladů — a vzorce si našla sama."
voice: universal
parent: null
diagram: uceni-z-dat
core: true
recallQ: "Jak se dnešní AI učí a co plyne z pravidla „co do ní vložíš, to z ní vypadne“?"
recallA: "Netrénuje se pravidly, ale na obrovském množství příkladů, ze kterých si sama odvodí vzorce. Když jsou trénovací data zkreslená nebo chybná, je zkreslený i model."
highlights:
  - "Dnešní AI se nenaprogramuje pravidly — natrénuje se na příkladech."
  - "co do modelu vložíš, to z něj vypadne."
  - "otázky „odkud data jsou a co v nich chybí“ jsou přesně ty, které si musíš klást i u AI."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch5-ai-se-uci-z-dat
state: core
carriers: prose|diagram
---

Jak bys naprogramoval poznávání koček na fotkách? Zkus napsat pravidla: „má špičaté uši"… jenže ty má i liška. „Má fousky"… i pes. Programátoři se o tohle desítky let marně pokoušeli — přesná pravidla pro rozpoznání kočky prostě nikdo napsat neumí. A pak to otočili.

**Dnešní AI se nenaprogramuje pravidly — natrénuje se na příkladech.** Ukážeš jí statisíce fotek s popiskem „kočka" a „není kočka" a model si **sám** odvodí vzorce, podle kterých je rozliší. Pamatuješ na rozpoznávání vzorů z druhé kapitoly? Tohle je ono, jen provedené strojem v měřítku, na které člověk nestačí. Říká se tomu **strojové učení** a stojí na něm skoro všechna AI, kterou potkáváš: překladače (učené na milionech přeložených vět), rozpoznávání řeči, feed TikToku i ChatGPT (učený na obrovské části textů internetu).

Z toho plyne pravidlo, které si z téhle kapitoly odnes, i kdybys zapomněl všechno ostatní: **co do modelu vložíš, to z něj vypadne.** Model zná jen svět svých trénovacích dat.

- Trénuješ rozpoznávání koček jen na fotkách za denního světla? V noci bude selhávat.
- V datech skoro chybí řídce zastoupené skupiny lidí? Model je bude rozpoznávat hůř — a tady začíná bias, kterému věnujeme celou sekci.
- Texty z internetu obsahují omyly a předsudky? Model se je naučí stejně poctivě jako fakta.

Proto jsme hned před touhle kapitolou probírali datovou gramotnost: **otázky „odkud data jsou a co v nich chybí" jsou přesně ty, které si musíš klást i u AI.**

**Zkus to!** Natrénuj si vlastní model — zdarma a bez instalace, třeba v nástroji Teachable Machine (learn od Google). Nauč webkameru rozlišovat dvě svoje gesta: nasbírej pár desítek snímků od každého, spusť trénink, vyzkoušej. A pak schválně: ukaž gesto v jiném světle nebo jiném oblečení. Kde model selhává — a co to říká o jeho trénovacích datech?

> **Věděl/a jsi?** Trénování velkých modelů spotřebuje obrovské množství výpočtů a energie — proto se trénují v datových centrech a proto má AI i svou ekologickou stopu. Používání hotového modelu je řádově levnější než jeho trénink.

Teď víš, odkud se bere „chytrost" AI. Další otázka: jak z natrénovaných vzorců vzniká plynulý text, který ti chatbot píše? Připrav se na nejužitečnější demystifikaci v knize.
