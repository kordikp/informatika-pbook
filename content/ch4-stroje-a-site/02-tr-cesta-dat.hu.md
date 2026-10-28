---
id: cesta-dat-hu
translationOf: cesta-dat
lang: hu
type: spine
title: "Hogyan utaznak az adatok"
readingTime: 2
standalone: true
teaser: "Üzenetet küldesz egy barátodnak, aki melletted ül. Mégis átrepülhet egy másik országon. Miért?"
voice: universal
parent: null
diagram: anim-request-response-hu
core: true
recallQ: "Mi történik a videód csomagjaival, ha útközben kiesik egy router?"
recallA: "A többi router más úton küldi tovább őket. Az internetnek nincs egyetlen központja, így egy rész kiesése nem állítja meg."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: cesta-dat
conceptTitle: "Hogyan utaznak az adatok"
objective: "Üzenetet küldesz egy barátodnak, aki melletted ül. Mégis átrepülhet egy másik országon. Miért?"
mustCover:
  - "Kliens és szerver: kérés és válasz (web, e-mail, streamelés)"
  - "Csomagok, IP-cím, a DNS a neveket címekre fordítja"
  - "Az internetnek nincs egyetlen központja: kerülőutak kiesés esetén"
state: core
highlights:
  - "Kliens és szerver: kérés és válasz (web, e-mail, streamelés)"
  - "Csomagok, IP-cím, a DNS a neveket címekre fordítja"
  - "Az internetnek nincs egyetlen központja: kerülőutak kiesés esetén"
carriers: prose|animation
---

Üzenetet küldesz egy barátodnak, aki melletted ül. Mégis átrepülhet egy másik országon. Miért?

Fotót küldesz egy csetbe. Nem egyenesen a barátod telefonjára repül. A cset **szerverére** megy, útközben **routerek** hálózatán át.

A fotó kis **csomagokra** bomlik. Mindegyik a cél **IP-címét** viszi magával, egy olyan számot, mint a 203.0.113.7. A routerek továbbküldik a csomagokat, mindegyiket talán más úton, a célban pedig újra összeállnak.

A telefon először a **DNS**-t, az internet telefonkönyvét kérdezi meg: mi a chat.example címe? A DNS azt válaszolja: 203.0.113.7, mert a routerek csak a számokat értik. A fotó aztán hat csomagban indul útnak. Az egyik az A és a C routeren át megy, egy másik a B-n és a D-n át. Ha az A router kiesik, a csomagok a B-n és a D-n át mennek, és a fotó így is megérkezik.

Az internet **hálózatok hálózata**, és nincs egyetlen központja. Ha egy router kiesik, a többiek **kerülőúton** küldik a csomagokat. Az elveszett csomagot újra elküldik, nem az egész fotót.

A telefonod a **kliens**: **kérést** küld. A szerver **választ** küld. Így működik a web, az e-mail és a streamelés is.

A **wifi** csak az út utolsó kis darabja: vezeték nélküli kapcsolat a telefonod és az otthoni router között. Az internet minden, ami mögötte van.

**Próbáld ki!** Rajzold le a legutóbbi üzeneted útját egy barátodhoz: a telefonod, a wifi-router vagy a mobiltorony, az internet, az alkalmazás szervere, és újra vissza egészen hozzá. Hány megállója van egy olyan üzenetnek, amelyet a melletted ülőnek küldesz? És merre megy, ha kikapcsolod a wifit?

> **Vigyázz, gyakori tévedés:** „Az üzenet egyenesen telefonról telefonra repül.” Routeren vagy mobiltornyon, az interneten és a szolgáltatás szerverén át repül. A wifi pedig nem az internet. Csak az út vezeték nélküli darabja a routerig.

**Tovább:** Az út végén egy szerver áll. Ez valaki más számítógépe, és éppen ezt hívják felhőnek. → [A felhő valaki más számítógépe](#c/cloud-a-server)
