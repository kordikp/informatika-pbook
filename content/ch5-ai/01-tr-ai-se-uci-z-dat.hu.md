---
id: ai-se-uci-z-dat-hu
translationOf: ai-se-uci-z-dat
lang: hu
type: spine
title: "Az MI példákból tanul"
readingTime: 1
standalone: true
teaser: "A telefonod felismer az arcodról. Pedig senki sem írt neki szabályt arról, hogy nézel ki. Akkor hogyan csinálja?"
voice: universal
parent: null
diagram: uceni-z-dat-hu
core: true
recallQ: "Egy főleg világos bőrön tanított arcfelismerő modell hibázik a sötét bőrnél. Miért?"
recallA: "Azokból az adatokból tanulta meg a mintázatokat, amelyeket kapott. Sötét bőrt alig látott bennük, ezért rosszabbul ismeri fel. A hiba az adatokban van."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: ai-se-uci-z-dat
conceptTitle: "Az MI példákból tanul"
objective: "A telefonod felismer az arcodról. Pedig senki sem írt neki szabályt arról, hogy nézel ki. Akkor hogyan csinálja?"
state: core
highlights:
  - "MI = olyan szoftver, amely példákból tanul, nem kézzel írt szabályokból"
  - "Tanítás és tesztelés új adatokon"
  - "Torzítás: a hiányzó vagy egyoldalú adatok hibás vagy igazságtalan eredményekhez vezetnek"
carriers: prose|diagram
---

A telefonod felismer az arcodról. Pedig senki sem írt neki szabályt arról, hogy nézel ki. Akkor hogyan csinálja?

Ha szabályokkal akarnád beprogramozni az almák felismerését, a világ összes almáját le kellene írnod. A mai MI másképp csinálja: **rengeteg példát mutatsz neki, és ő maga talál bennük mintázatokat**. Ezt **tanításnak** hívják. Utána olyan példákon **teszteled**, amelyeket még sosem látott.

Egy gyümölcsfelismerőt két fajtán tanítottak: **piros almákon** és **sárgászöld körtéken**. Csak a színt nézi. Aztán kap egy **új zöld almát**, amilyen sosem volt az adatokban. Színre a körtékhez hasonlít a legjobban, ezért azt mondja: „körte”. Ha a tanítóadatokhoz zöld almákat is adsz, helyesen ismeri fel.

A modell nem volt se gonosz, se buta. Pontosan azt tanulta meg, ami az adatokban volt: az alma piros. **Ami hiányzik az adatokból, azt a modell nem tudja.** Ha az adatok kihagynak valakit vagy valamit, a modell éppen náluk hibázik. Ezt **torzításnak** hívják (angolul bias).

**Próbáld ki!** Taníts be egy saját modellt, ingyen és telepítés nélkül, például a Teachable Machine eszközzel. Tanítsd meg a webkamerát, hogy megkülönböztesse két gesztusodat: gyűjts mindegyikről néhány tucat képet, indítsd el a tanítást, próbáld ki. Aztán mutasd a gesztust más fényben vagy más ruhában. Hol hibázik a modell, és mit árul ez el a tanítóadatairól?

> **Vigyázz, gyakori tévedés:** „Az MI objektív, mert gép.” Az MI adatokból tanul, és azok hibáit is átveszi. Ha az adatokból hiányoznak a zöld almák, a modell nem ismeri fel őket.

**Tovább:** A betanított modell is egyszerűsítés. A sok példából csak néhány mintázatot tart meg. Ami hiányzik az adatokból, az a mintázatokban sem lesz benne. → [Modell: hasznos egyszerűsítés](#c/abstrakce-a-model)
