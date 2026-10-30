# pbook × Tiny integration: requirements

**State: DRAFT** · owner: Pavel Kordík · 2026-10-30

> Written in the format of `AI-detem/docs/features/<slug>/REQUIREMENTS.md`. It can move there
> once the Tiny maintainers accept it. Verified against `tiny-be` at `c257573` and
> `informatika-pbook` at `master`, 2026-10-30.
> **[V]** verified (source cited) · **[A]** assumption · **[?]** open decision · *Proposal* = not yet accepted.

## 1. Problem and outcome

*Jak funguje digitální svět* (pbook) is a self-study module for ages 11–15 in four languages. Tiny
is the classroom platform that pupils and teachers of AI dětem already use. Today pbook is
anonymous: progress lives on one device, and the teacher sees nothing of it in Tiny.

After this feature:

1. a pupil signs in to pbook with the **Tiny account** they already have (the same Google,
   Microsoft or e-mail login);
2. **mission boss results** (the AI-graded final answers) reach Tiny, where the pupil's teacher
   can read them;
3. the pupil's **Tiny profile is updated** from the work in pbook (concepts read and understood,
   missions passed), so Tiny can build on it.

Reading without an account stays exactly as it is.

## 2. Scope

**Phase 1 (in scope)**

- R1 Sign-in to pbook with a Tiny account.
- R2 pbook → Tiny profile summary.
- R3 Boss results → Tiny, readable by the pupil's teacher.

**Phase 2 (in scope, specified later)**

- R4 A teacher puts a pbook mission into a Tiny lesson and sees the results in the lesson's
  evaluation view.
- R5 Tiny → pbook: course context (language, the teacher's chosen chapters, groups for group tasks).

**Non-goals**

- Moving pbook content into Tiny.
- Replacing pbook's examiner with the Evaluation API (D5).
- Accounts for readers outside schools: they keep the anonymous book.

## 3. Verified existing behaviour  **[V]**

**Tiny**

- Identity is Firebase Auth. PostgreSQL via TypeORM is the source of truth
  (`docs/architecture/data-storage.md`).
- `POST /auth/login-google` `{idToken}`, `/auth/login-microsoft` `{accessToken}` and
  `/auth/login-password` `{email, password}` return `{ firebaseToken }`
  (`src/auth/auth.controller.ts:83-140`).
  - The token is a Firebase **custom token** (`src/auth/services/firebase-user.service.ts:328`).
  - A client exchanges it for an ID token with `signInWithCustomToken`.
- Google ID tokens pass only if their `aud` is in `GOOGLE_OAUTH_CLIENT_IDS`
  (`src/auth/services/token-validation.service.ts:414-425`).
- The Microsoft login checks `MICROSOFT_CLIENT_ID` (same file, `:127`).
- `FirebaseAuthGuard` verifies the bearer ID token
  (`src/common/guards/firebase-auth/firebase-auth.guard.ts:66`). It authenticates but does not
  authorize.
- `GET /users/me` creates the user if missing. `PATCH /users/me` takes an arbitrary map
  (`src/users/users.controller.ts:34-65`).
  - Protected fields are rejected with 403 (`src/users/users.service.ts:52`, `:119-135`):
    `isTeacher`, `isSuperAdmin`, `isOperations`, `schoolId`, `email`, `password` and others.
  - Keys that are not columns land in `metadata` JSONB with a **shallow** merge: a top-level key
    is replaced whole (`src/users/repositories/typeorm-user.repository.ts:313`).
- Users: `firebase_uid`, `is_teacher`, `school_id`, `language_code`, `metadata` jsonb
  (`src/users/entities/User.entity.ts:27-88`).
- Classes are courses: `courses` (with `course_code`, `school_id`), `course_pupils` and
  `course_teachers` (`src/course/entities/`).
- Activity mechanisms are `poll`, `scale`, `wordCloud`, `openEnded`, `ranking`, `matchPairs`,
  `categorise`, `slide` and `chat`, each with an award table
  (`src/activity-platform/activity-contract.ts:4-14`, `:37-60`).

**pbook**

- A static PWA on Vercel with serverless functions in `api/`.
- Progress is kept in the browser (`js/recombee.js` → `save()`): read sections, completed missions,
  XP, level, recall cards and facet preferences.
- "Understood" is derived from that data: a recall card answered Hard or better, or a game scored
  70 % or more. "Kept" means a recall answered again two or more days later (`js/completion.js:11-13`).
- `POST /api/boss` returns `{score, verdict: pass|almost|fail, feedback, followUp}`.
  - When the answer does not pass yet, `followUp` is one guiding (Socratic) question.
  - The examiner grades the answer together with the last 4 replies (`api/boss.js:193`).
- Existing optional accounts use e-mail and password in Supabase `user_profiles` (`api/auth.js:1-2`).
  This feature would replace them for schools.
- The content model is 6 chapters with 24 core concepts (`content/concept-map.json`), 25 missions
  with bosses, and 12 expeditions.

## 4. Acceptance criteria

| # | Criterion |
|---|---|
| **R1 Sign-in** | |
| AC1 | pbook shows **"Sign in with Tiny"** in the profile and on the first screen, offering the same three methods as Tiny (Google, Microsoft, e-mail and password). |
| AC2 | Signed in, pbook shows the Tiny nickname or first name. Without signing in, the whole book works as today (regression suite green). |
| AC3 | On the first sign-in, the progress already on the device merges into the account and nothing is lost. A second device signed in to the same account gets that progress. |
| AC4 | pbook never sees or stores the Tiny password beyond the one login call. Every pbook server write verifies the Firebase ID token (project `tiny-2d65c`) and takes the uid from it, never from the body. |
| AC5 | Signing out removes the identity and the account's progress from the device. On a shared school computer the session ends when the browser closes (D4). |
| **R2 Profile** | |
| AC6 | After a finished section, a passed boss or a recall review, pbook writes **one** top-level key, `pbook`, through `PATCH /users/me`, sending the whole object because of the shallow merge. It writes at most once a minute and once more when the page is hidden. |
| AC7 | `metadata.pbook` v1 holds no free text and stays under 16 kB: `{v:1, book:"informatika", lang, updatedAt, cores:{<conceptId>:"read"\|"understood"\|"kept"}, missions:{<id>:{passedAt, score}}, level, xp, worlds:[…]}`. |
| AC8 | A protected field in the payload is impossible by construction: the payload is built from a fixed schema. A test proves it. |
| **R3 Boss results** | |
| AC9 | Every boss grading, passed or not, is stored with the Tiny uid: `missionId`, `round`, `verdict`, `score`, `answer`, `dialogue`, `model` and `gradedAt`. |
| AC10 | A teacher in `course_teachers` of a course gets the results of that course's `course_pupils`. Anyone else gets 403, including other pupils and teachers of other courses. This is proven with real HTTP requests, like the other Tiny authorization specs. |
| AC11 | `POST /users/:uid/anonymize` and account deletion also remove the pupil's pbook data. |
| AC12 | Offline: a grading made without a connection is queued on the device and sent once, when the pupil is next online and signed in. |

## 5. Proposed design  *Proposal*

- **Auth (option A).** pbook calls Tiny's `/auth/login-*`, then `signInWithCustomToken` through
  the Firebase JS SDK with Tiny's public web config.
  - The config goes in `js/config.js` → `tiny: {apiBase, firebase: {apiKey, authDomain:
    "tiny-2d65c.firebaseapp.com", projectId}}`.
  - pbook's serverless functions verify ID tokens with `firebase-admin`. Verification needs only
    the project ID, not a service account.
- **R2 needs no Tiny change.** It is `PATCH /users/me`.
- **R3 needs a small tiny-be module `pbook`.**
  - `POST /pbook/boss-results` (FirebaseAuthGuard; the uid comes from the token).
  - `GET /pbook/courses/:courseId/boss-results` (teacher of that course, or super-admin).
  - The SQL table `pbook_boss_results`.
  - pbook's `/api/boss` stays the examiner. After grading, the pbook client posts the result to
    Tiny with the pupil's ID token.
- **Rejected (option B):** pbook keeps the results in its own Supabase under the Tiny uid. That
  means two stores of pupil data, harder GDPR handling, and it contradicts "SQL is the source of
  truth".
- **Domains** [A]: the pbook origin must be in the Firebase authorized domains, and in the
  authorized JavaScript origins of the Google OAuth client that pbook uses (D1).

## 6. Privacy and safety

- Pupils are minors. pbook data become Tiny pupil data and fall under Tiny's existing agreements
  with schools [A: the Tiny owner confirms].
- The profile summary (R2) holds no free text.
- Boss answers (free text) are stored only in `pbook_boss_results` and are visible only to the
  pupil and their teacher (D3).
- Boss answers already go to the model provider for grading today. The privacy notice must say
  so, and the provider is a processor under the DPA.
- Vercel Web Analytics is cookie-free. There are no third-party trackers.

## 7. Decisions

| Decision | Answer | Who / when |
|---|---|---|
| **D1** Google client: add pbook's origin to Tiny's web client, or a new client ID in `GOOGLE_OAUTH_CLIENT_IDS` | **[?]** | Tiny owner |
| **D2** Where boss results live: tiny-be module (A) or pbook Supabase (B) | *Proposal:* A | Tiny owner + Pavel |
| **D3** Does the teacher see the pupil's full answer, or only the verdict and score? | **[?]** *Proposal:* full answer (it is formative work) | product owner |
| **D4** Session on shared school computers: session-only or "remember me" | **[?]** *Proposal:* session-only by default | product owner |
| **D5** Grade bosses with the Tiny Evaluation API instead of `/api/boss` | *Proposal:* keep `/api/boss` (Socratic dialogue tuned and tested in 4 languages); revisit after the pilot | Pavel |
| **D6** pbook domain: `informatika-pbook.vercel.app` or a subdomain such as `kniha.aidetem.cz` | **[?]** | AI dětem |

## 8. Open questions for the Tiny team

1. Are pupils in a school always in a course, or can a pupil be outside every course? (AC10)
2. Is there a teacher view where an external result can be shown, or does R3 need a new screen in
   the teacher app?
3. Rate limits on `PATCH /users/me` for one pupil writing every minute during a lesson.
4. Which Firebase authorized domains are configured today?
