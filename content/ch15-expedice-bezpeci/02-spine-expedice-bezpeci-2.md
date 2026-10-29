---
id: expedice-bezpeci-2
type: spine
title: "Kuchyně CyberChef"
readingTime: 1
standalone: false
teaser: "CyberChef je bezplatný nástroj od britské zpravodajské služby GCHQ."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-bezpeci-2
conceptTitle: "Kuchyně CyberChef"
state: edited
carriers: prose
---

**🛠 Dílna** · krok 2 z 5 · [Operace Vlajka](#expedice-bezpeci)

**CyberChef** je bezplatný nástroj od britské zpravodajské služby GCHQ. Běží celý v prohlížeči, nic se neinstaluje a nepotřebuješ účet. Hodí se na všechno, co se dá s textem dělat: převody, kódování, šifry, otisky. Je anglicky, ale ovládá se tahem myši.

**Prvních 30 minut:**

1. Otevři [CyberChef](https://gchq.github.io/CyberChef/). Vlevo jsou **operace** (Operations), uprostřed **recept** (Recipe), vpravo **vstup** (Input) a **výstup** (Output).
2. Do vstupu vlož hex zprávu z kroku 1.
3. Do vyhledávání operací napiš `hex` a přetáhni **From Hex** do receptu. Výstup se změní okamžitě.
4. Přidej **ROT13**. Je to Caesar s nastavitelným posunem (Amount). Nastav posun tak, aby vyšla vlajka. Nápověda: posun o 3 zpět je totéž jako posun o 23 dopředu.
5. Zkus operaci **Magic** s kouzelnou hůlkou. Sama tipuje, jakým kódováním text prošel.
6. Postav recept obráceně: napiš vlastní vlajku, přidej ROT13, **To Base64** a **To Hex**. Výsledek pošli Ondrovi a změř, za jak dlouho ji rozlouskne.

**Bezpečnostní pravidlo:** CyberChef data nikam neposílá. Přesto do něj, ani do žádného jiného webu, nevkládej svoje skutečná hesla. Na zkoušení si vymysli cvičná.

**Máš hotovo**, když umíš recept uložit a znovu otevřít a když tvoje třívrstvá vlajka jde rozluštit.

**Další krok:** [Heslo, které nikdo nevidí](#expedice-bezpeci-3)
