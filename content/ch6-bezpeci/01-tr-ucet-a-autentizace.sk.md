---
id: ucet-a-autentizace-sk
translationOf: ucet-a-autentizace
lang: sk
type: spine
title: "Účet a heslo"
readingTime: 2
standalone: true
teaser: "Zabudneš heslo a mobil ponúkne „Obnoviť cez e-mail“. Kto sa dostane do tvojho e-mailu, dostane sa teda aj do mobilu?"
voice: universal
parent: null
diagram: anim-sila-hesla-sk
core: true
recallQ: "Prečo je nebezpečné mať rovnaké heslo na hru aj na e-mail?"
recallA: "Keď hru hacknú a heslo unikne, útočník ho skúsi aj na e-mail. Cez e-mail potom obnoví heslá ku všetkému ďalšiemu."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: ucet-a-autentizace
conceptTitle: "Účet a heslo"
objective: "Zabudneš heslo a mobil ponúkne „Obnoviť cez e-mail“. Kto sa dostane do tvojho e-mailu, dostane sa teda aj do mobilu?"
mustCover:
  - "Účet = identita v službe; autentifikácia = overenie, že si to ty"
  - "Dĺžka a jedinečnosť hesla; únik z jednej služby ohrozí ostatné"
  - "Správca hesiel a 2FA (niečo poznáš + niečo máš)"
state: core
highlights:
  - "Účet = identita v službe; autentifikácia = overenie, že si to ty"
  - "Dĺžka a jedinečnosť hesla; únik z jednej služby ohrozí ostatné"
  - "Správca hesiel a 2FA (niečo poznáš + niečo máš)"
carriers: prose|table|animation|formula
---

Zabudneš heslo a mobil ponúkne „Obnoviť cez e-mail“. Kto sa dostane do tvojho e-mailu, dostane sa teda aj do mobilu?

**Účet** je tvoja identita v službe. Keď sa prihlásiš, služba overuje, že si to naozaj ty. Tomu sa hovorí **autentifikácia**. Kto pozná tvoje heslo, je pre službu tebou.

Útočník, ktorý ukradol databázu hesiel, skúša 10 miliárd hesiel za sekundu. Najprv známe heslá, potom slová a ich obmeny, nakoniec všetky kombinácie. **heslo123** uhádne okamžite. **P@ss1** tiež. **Tr4ktor!** vyzerá zložito, ale padne za necelú minútu. Veta **žirafa je knedle na Mesiaci** by mu trvala asi milión rokov.

| Heslo | Ako ho útočník háda | Ako dlho mu to trvá |
|---|---|---|
| heslo123 | je v zozname najčastejších hesiel | okamžite |
| P@ss1 | len 5 znakov, skúsi všetky kombinácie | necelú sekundu |
| Tr4ktor! | slovo „traktor“ s obvyklými obmenami | necelú minútu |
| žirafa je knedle na Mesiaci | 5 slov, každé z desiatok tisíc | asi milión rokov |

Silné heslo je hlavne **dlhé**. Veta z niekoľkých slov porazí krátke heslo so znakmi. Obmeny ako P@ss alebo Tr4ktor útočník skúša medzi prvými.

Prečo dĺžka vyhráva, ukáže jednoduchý vzorec:

$$\text{počet hesiel} = (\text{počet znakov})^{\text{dĺžka}}$$

Každý znak navyše vynásobí počet hesiel znova. Osem znakov zo všetkých 95 na klávesnici dá $95^8$, asi 7 biliárd hesiel, a útočník ich prejde zhruba za týždeň. Šestnásť malých písmen dá $26^{16}$ a hádal by viac ako 100 000 rokov.

Ku **každej službe iné heslo**. Keď unikne heslo z hry, útočník ho hneď skúsi na e-mail.

Pamätať si ich nemusíš. **Správca hesiel** je trezor, ktorý ich pamätá za teba. A k tomu **dvojfázové overenie (2FA)**: niečo poznáš (heslo) a niečo máš (mobil).

Čoraz viac služieb ponúka aj **prístupový kľúč** (passkey). Namiesto hesla ťa overí mobil odtlačkom prsta, tvárou alebo PINom. Kľúč zostáva v zariadení a podvodnému webu nič nedá, takže ho podvodník nevyláka.

**Vyskúšaj to!** Dnes večer: 1) zisti, koľko služieb máš na rovnaké heslo (úprimne!), 2) zapni dvojfázové overenie na svojom e-maile, 3) na haveibeenpwned.com si over, či sa tvoj e-mail neobjavil v známom úniku dát.

> **Pozor, častý omyl:** „Krátke heslo so znakmi, napríklad P@ss1, je silné.“ Útočník ho vyskúša za chvíľku. Silnejšia je dlhá fráza zo slov. A dvojfázové overenie chráni, aj keď heslo unikne.

**Ďalej:** Heslo častejšie vyláka podvodník, než ho niekto uhádne. → [Podvod mieri na človeka](#c/podvod-cili-na-cloveka)
