---
id: svet-weby-sifrovani-hu
translationOf: svet-weby-sifrovani
lang: hu
type: spine
title: "Lakat a címsorban"
readingTime: 1
standalone: true
teaser: "Az iskolai wifin beírod a jelszavadat egy űrlapba. Ki mindenki olvashatja el útban a szerver felé? Egyetlen betűn múlik: az s-en."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Egy weboldalon van lakat és https. Ez azt jelenti, hogy megbízható?"
recallA: "Nem. A lakat csak azt mondja, hogy a közted és a weboldal közötti út titkosított. Egy csaló oldalnak is lehet https-e."
lens: weby
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: sifrovani
state: edited
highlights:
  - "Nyílt szöveg, kulcs, titkosított szöveg"
  - "A kódolás nyilvános szabály, a titkosításhoz titkos kulcs kell"
  - "https és lakat = titkosított út, nem a becsületesség igazolása; nyilvános wifi"
carriers: prose|image
---

Az iskolai wifin beírod a jelszavadat egy űrlapba. Ki mindenki olvashatja el útban a szerver felé? Egyetlen betűn múlik: az s-en.

Titkosítás nélkül az űrlap úgy utazik a hálózaton, mint egy **képeslap**: elolvashatja minden router az úton, és bárki, aki ugyanazon a **nyilvános wifin** ül. A **http** képeslap. A **https** **boríték**: a böngésző és a szerver az elején megegyezik egy **kulcsban**, és minden, amit egymásnak küldenek, ezzel titkosítódik. A **nyílt szövegből**, például *jelszo123*, **titkosított szöveg** lesz, például *x9Qf…*, olvashatatlan zagyvaság mindenkinek, akinek nincs meg a kulcs.

![Ugyanaz az űrlap http-n és https-en elküldve](images/svet-weby-zamek.hu.svg)

A titkosítás nem **kódolás**. A kódolás, például az UTF-8, **nyilvános szabály**: aki ismeri, elolvassa a szöveget. A **titkosításhoz** **titkos kulcs** kell. Ezért a „kódolt jelszó” nem rejtett jelszó.

És ami a legfontosabb: a **lakat** nem azt mondja, hogy a weboldal **becsületes**. Csak azt, hogy az **út** közted és a címsorban lévő weboldal között titkosított. A csaló *iskolai-belepes.net* oldalnak is van https-e, titkosítási tanúsítványt ma bárki ingyen kaphat. A lakat garantálja, hogy útközben senki sem olvassa el a jelszavadat. Azt nem mondja meg, hogy nem éppen egy csalónak küldöd-e.

A weboldaladra ebből egy egyszerű szabály következik. A GitHub Pages és a Netlify magától és ingyen bekapcsolja a https-t. Hagyd bekapcsolva akkor is, ha az oldalon nincs űrlap: a böngészők a https nélküli oldalakat nem biztonságosnak jelölik.

**Próbáld ki!** Kattints a böngészőben a kedvenc oldalad címe melletti lakatra, és nézd meg a tanúsítványt. Melyik domainre állították ki? Miről ismernél fel egy csaló oldalt, amelyen szintén van lakat?

**Tovább a weboldalak világában:** → [Szivárgás egy fórumról](#svet-weby-ucet-a-autentizace-hu)
