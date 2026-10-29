---
id: vyzva-aplikace-cloud-a-server-en
translationOf: vyzva-aplikace-cloud-a-server
lang: en
type: challenge
title: "Offline on the bus"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Ema records a payment on the bus with no signal; at the same moment Tomáš records a different one on Wi-Fi."
voice: universal
parent: svet-aplikace-cloud-a-server-en
diagram: null
core: false
status: accepted
concept: cloud-a-server
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

Ema records a payment on the bus with no signal; at the same moment Tomáš records a different one on Wi-Fi. In the evening the cash box is 300 CZK short, and nobody deleted anything.

<!-- task -->

The class app keeps one number on the server: **the cash box balance**. In the morning it is 1,000 CZK.

- **8:00** Ema is sitting on the bus with no signal. Ondra gives her 200 CZK. Her phone works out 1,000 + 200 and saves the message “balance = 1,200” to send later.
- **8:05** Tomáš is online. Jana gives him 300 CZK. His phone sends “balance = 1,300” to the server.
- **8:30** Ema gets a signal and her phone sends “balance = 1,200”. The signal drops, the phone isn’t sure whether the message arrived, and it sends it once more.

1. What balance does the server show in the evening? How much money is really in the cash box?
2. Design what the phone should send and the server should save instead of the balance, so the amount comes out right **in any order** of messages.
3. Your design must also survive the same message arriving twice.

**Success:** your design gives 1,500 CZK for all six orders of the three messages (Ema, Tomáš, Ema again), and you can explain why.

<!-- hint -->

The server simply overwrites the number with whatever arrived last. This is called “last write wins”. Who wrote last?

<!-- hint -->

What if the phone didn’t send the result, but what happened? Adding up has one great property: the order doesn’t matter.

<!-- hint -->

How does the server know that the message “Ondra +200” arrived a second time, and not that Ondra paid again? Give every message something that never repeats.

<!-- solution -->

**1.** The server shows **1,200 CZK**, but there is 1,500 CZK in the cash box. Ema’s late write overwrote Tomáš’s, and Jana’s 300 CZK vanished from the app.

**2.** The phone sends **events**, not the balance: “Ondra +200”, “Jana +300”. The server saves them in a list and always works out the balance as 1,000 + the sum of the events. Adding up doesn’t depend on order: 1,000 + 200 + 300 = 1,000 + 300 + 200 = 1,500.

**3.** Every event gets a unique **ID**, for example “ema-mobil-0017”. The server saves an event with the same ID only once. Without IDs, sending twice would give 1,700 CZK. When repeating the same message changes nothing, it’s called **idempotence**.

Real bill-splitting apps work like this too: they save the individual expenses and work out the balances from them. The total is just a result, not the data.

<!-- more -->

What if Ema **deletes** a payment and Tomáš **edits** it to 250 CZK at the same moment? Adding up won’t help any more. Invent a rule that decides, and find a situation where it gives the wrong result. For these conflicts there are data structures called CRDTs, which shared document editors and apps that also work offline are built on (search term “local-first”, in English).
