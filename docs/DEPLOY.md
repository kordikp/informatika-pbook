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
> its own key so costs and logs stay with the project.

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
   it after every content release.
5. Scenarios: the client sends the scenario names from `js/config.js` (`homepage-personal`,
   `next-read`, `context-related`, `search`, …). Tune them later in the Recombee admin.

Field notes from earlier integrations (status codes, POST-only clusters, batching):
[recsys-pbook/RECOMBEE.md](https://github.com/kordikp/recsys-pbook/blob/main/RECOMBEE.md).

## 4. Supabase (optional: logs, accounts, class galleries)

`SUPABASE_URL`, `SUPABASE_KEY` (Sensitive). Without them, progress stays on the reader's device and
`/api/log` only answers locally. The functions use the tables `interactions`, `user_profiles`,
`proposals` and `wallet`. Only `user_profiles` has a schema file in the repo
(`setup-profiles-table.sql`). **Known gap:** write SQL for the other three before a fresh project
uses them.

Local test servers must never write to the production database:
`SUPABASE_URL=http://127.0.0.1:9 node serve-local.js 8094`.

## 5. Other variables

| Variable | Purpose |
|---|---|
| `PBOOK_ADMIN_KEY` | Unlocks admin actions in `/api/log` and `/api/recombee` (header `x-pbook-admin`) |
| `PBOOK_GATEWAY_URL` | Gateway for deployments without a key (see §2) |
| `PBOOK_SOURCE_HOSTS` | On a gateway: extra book hosts it grades for under their own identity |
| `PBOOK_CONTENT_BASE` | Where `/api/sync-recombee` reads the book; default is the deployment itself |
| `WALLET_*` | Limits of the token wallet in the author studio |

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
