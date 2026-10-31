# Deploying the book

The book is a static site plus a few Vercel serverless functions in `api/`. There is no framework
and no npm install. The only build step generates the content bundles (`vercel.json` → `buildCommand`).

Without any keys the book still works: reading, games, quizzes, missions, the offline mode, and
local recommendations computed in the browser. Keys switch on the AI examiner (boss), the author
studio, Recombee recommendations and the shared server-side features.

## 1. Vercel project

1. Vercel → **Add New → Project** → import `AI-detem/informatika-pbook`. If the repo is private,
   the Vercel GitHub app must be installed for the `AI-detem` organisation.
2. Framework preset: **Other**. Leave the build and output settings empty; `vercel.json` sets them.
3. Add the environment variables below (Settings → Environment Variables). Changes apply only to
   the **next** deployment, so redeploy after every change.
4. Production deploys from `master`. Other branches get preview URLs (behind a Vercel login by
   default).

Check after deploying (one request each; bursts of requests trigger the Vercel bot checkpoint):

```bash
curl -s https://<your-domain>/api/boss        # {"available":true,"provider":"openai-compatible","model":"gpt-5.6-terra"}
curl -s https://<your-domain>/sw.js | head -3 # the service-worker version you just released
```

## 2. OpenAI token (AI examiner and author studio)

| Variable | Value | Notes |
|---|---|---|
| `OPENAI_API_KEY` | `sk-…` | Mark as **Sensitive**; set for Production and Preview |
| `OPENAI_MODEL` | `gpt-5.6-terra` | The examiner's prompt is tuned and tested on this model (`api/boss.js` falls back to `gpt-5-mini`) |
| `OPENAI_BASE_URL` | optional | Any OpenAI-compatible endpoint; default `https://api.openai.com/v1` |
| `ANTHROPIC_API_KEY` | optional | **If set, it wins over OpenAI** for both the examiner and the studio |
| `GEN_MODEL`, `GEN_MODEL_STRONG` | optional | Override the studio models |

Steps:

1. platform.openai.com → create a **project** for the book → API keys → **Create secret key**
   owned by the project. Allow only the models you use.
2. Set a **monthly budget limit** on the project (Limits). One boss check is one model call; the
   Socratic dialogue adds one call per reply (the examiner sees the last 4 replies).
3. Vercel → Settings → Environment Variables → add `OPENAI_API_KEY` and `OPENAI_MODEL` → redeploy.
   From the CLI: `vercel env add OPENAI_API_KEY production`.
4. Check `GET /api/boss` (see above). `"provider":"gateway:…"` means the key is **not** set; see below.

Local development: put the same variables in `.env` in the repo root (git-ignored). `serve-local.js`
loads it.

> **Gateway fallback.** A deployment without its own key forwards `/api/boss` and `/api/generate`
> to the shared gateway `PBOOK_GATEWAY_URL` (default `https://recsys-pbook.vercel.app`), which runs
> on the FIT ČVUT key. That is fine for trying things out. A school or pilot deployment must use
> its own key so costs and logs stay with the project. A deployment with its own key never takes
> requests forwarded from other books, so nobody can use its key while skipping the ⚡ wallet.

## 3. Recombee account (recommendations)

Without Recombee the book recommends locally from what the reader did on the device. Recombee
adds collaborative filtering across readers.

1. Create a database at recombee.com (region **eu-west**). Note the database ID and the **private
   token**. The private token is server-side only; never put it in `js/`.
2. Vercel variables:

   | Variable | Value |
   |---|---|
   | `RECOMBEE_DB` | database ID; always set it, the code has a fallback that points to another book |
   | `RECOMBEE_TOKEN` | private token (Sensitive) |
   | `RECOMBEE_REGION` | `rapi-eu-west` (the host prefix of your region) |
   | `PBOOK_ORIGINS` | comma-separated origins allowed to call the proxy `/api/recombee`, e.g. `https://informatika-pbook.vercel.app` |
   | `SYNC_SECRET` | any long random string; protects the catalogue sync |

3. In `js/config.js` set `recombee.enabled: true` and `recombee.database` to the database ID.
   Commit and deploy. Several books may share one database: the client limits every call to this
   book's chapters and concepts.
4. Fill the catalogue (item and user properties are created by the sync, so it is safe to rerun):

   ```bash
   curl -s -X POST https://<your-domain>/api/sync-recombee \
     -H 'Content-Type: application/json' -d '{"secret":"<SYNC_SECRET>"}'
   # {"ok":true,"imported":1554,"errors":0,"total":1554,...}
   ```

   The sync reads the book from the deployment itself: `book.json` plus one content bundle. Rerun
   it after every content release. Instead of `SYNC_SECRET`, the editor key works too (header
   `X-Pbook-Admin`; `/admin` → Sync Items sends it).
5. Scenarios: the client sends the scenario names from `js/config.js` (`homepage-personal`,
   `next-read`, `context-related`, `search`, …). Tune them later in the Recombee admin.

Field notes from earlier integrations (status codes, POST-only clusters, batching):
[recsys-pbook/RECOMBEE.md](https://github.com/kordikp/recsys-pbook/blob/main/RECOMBEE.md).

## 4. Supabase (optional: logs, accounts, wallet, class galleries)

`SUPABASE_URL` and `SUPABASE_KEY`. Without them, progress stays on the reader's device and
`/api/log` only answers locally.

The functions use two tables:

| Table | Schema | What is in it |
|---|---|---|
| `interactions` | `setup-interactions-table.sql` | every reader event, plus the server's own rows: the ⚡ wallet, class galleries (decks, drafts), proposals, failed logins, profile summaries |
| `user_profiles` | `setup-profiles-table.sql` | accounts: e-mail, scrypt password hash, session token, synced progress |

Security setup:

1. Use the project's **service_role** key as `SUPABASE_KEY` and mark it **Sensitive** in Vercel.
2. Keep RLS on and add **no policies**. Only the functions can then read the tables. If an old
   project has the policy `"Allow all via anon key"` on `user_profiles`, drop it after step 1.

Local test servers must never write to the production database:
`SUPABASE_URL=http://127.0.0.1:9 node serve-local.js 8094`.

## 5. Other variables

| Variable | Purpose |
|---|---|
| `PBOOK_ADMIN_KEY` | The editor key (header `X-Pbook-Admin`; `/admin` → 🔑 Editor key). Needed for: full log rows with readers' texts, contacts, recomputing reader statistics, changing proposals, promoting tellings in Recombee, and the catalogue sync |
| `PBOOK_GATEWAY_URL` | Gateway for deployments without a key (see §2) |
| `PBOOK_GATEWAY_SECRET` | The same long random value on the gateway and on every book that forwards to it. A forwarded request skips the wallet only with this secret (engine `SECURITY.md`) |
| `PBOOK_SOURCE_HOSTS` | On a gateway: extra book hosts it grades for under their own identity |
| `PBOOK_CONTENT_BASE` | Where `/api/sync-recombee` reads the book; default is the deployment itself |
| `WALLET_TRIALS` | Free basic AI tries per anonymous device (default 3) |
| `WALLET_TRIALS_NET` | Free tries per network and day, across devices (default 120; a school shares one address) |

## 6. Releasing a change

- The engine (reader, boss, studio, recommendations) lives upstream in
  [kordikp/recsys-pbook](https://github.com/kordikp/recsys-pbook). Fix it there, then copy it with
  `scripts/core-sync.sh <path to this repo>` (run from the engine repo). The book owns `index.html`,
  `sw.js`, `js/config.js`, `css/` and `content/`.
- Every release: raise the cache name in `sw.js` (`pbook-informatika-vNN`) and the `?v=` of each
  changed script in `index.html`. Otherwise returning readers keep the old version offline.
- Before you merge, test on localhost: a returning reader moves to the new service worker, offline
  mode works in every language, and every view works in every language. Never point e2e tests at
  production.

## 7. Security

The engine's [SECURITY.md](https://github.com/kordikp/recsys-pbook/blob/main/SECURITY.md) lists
what each endpoint trusts and what needs the editor key or a session. In short:

- `/api/log` takes readers' events but never a row that another function trusts (wallet, gallery,
  proposal, login). The public list hides e-mails, readers' own words, wallet rows (open gift
  codes) and profile summaries.
- `/api/generate` charges the ⚡ wallet. Anonymous devices get a few basic tries, capped per
  network and day as well.
- A login locks for 15 minutes after 10 wrong passwords for that account.
- Proposals, statistics, contacts and the Recombee sync need the editor key.

## 8. Readers' data: interactions and the profile for Tiny

- **Interactions.** Every view, rating, game, mission, boss grading and steering choice goes to
  `interactions` under the reader's device id (`reader-…`). The row also carries the book, the
  language and the class code when a teacher's link brought one. After a login, the id becomes
  the account's (`acct-…`). With Recombee enabled (§3), views, ratings and bookmarks are also sent
  there. Informatika has Recombee off today (`recombee.enabled: false`), so Supabase is the record.
- **The profile for Tiny** (`js/tiny-profile.js`, docs/tiny-integration AC7–AC8) is a summary in
  a fixed shape: core concepts read, understood or kept, missions passed with date and score,
  level, XP and interest worlds. It holds ids and numbers only, no free text, and stays under
  16 kB. Readers see it in Profile → 📤 Profile for Tiny and can download it. "Download all data"
  includes it.
- The summary is kept on the server in two places:
  - as a `profile_summary` row under the reader's id, sent when it changes (at most once a
    minute, and once more when the page is hidden);
  - in a logged-in account's synced data (`user_profiles.profile_data["pbook-summary"]`).
- Once readers sign in with Tiny (REQUIREMENTS R1), the same object goes to Tiny as
  `PATCH /users/me {pbook: …}`.
- The latest summary per reader for an export, in the Supabase SQL editor:

  ```sql
  SELECT DISTINCT ON (user_id) user_id, created_at, data->'summary' AS pbook
  FROM interactions WHERE event = 'profile_summary' AND data->>'book' = 'informatika'
  ORDER BY user_id, created_at DESC;
  ```

  The schema test is `node scripts/check-tiny-profile.mjs`.
