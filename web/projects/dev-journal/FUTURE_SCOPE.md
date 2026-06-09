# Future Scope — Personalised Tech Stack Selection

## Feature: User-Defined Tech Stack Preferences

---

## Overview

Currently, the stack tags available when logging an entry are hardcoded:

```ts
export type Stack = 'React' | 'Next.js' | 'TypeScript' | 'Storybook' | 'C#' | 'Java'
```

This feature replaces that with a personalised experience — each user selects the stacks they are actively learning, and only those stacks appear as options when logging entries. Users can change their selection at any time without affecting any previously logged entries.

---

## User Stories

---

### US-09 — First-time user onboarding: select tech stacks

**As a** new user who just signed up
**I want to** select the tech stacks I am learning before I see my journal
**So that** only relevant stacks appear when I log entries

#### Acceptance Criteria

- [ ] After successful signup, user is redirected to `/onboarding` instead of `/`
- [ ] Onboarding page shows all available stacks as selectable cards
- [ ] User must select at least one stack to proceed
- [ ] On confirm, selected stacks are saved to the database against the user's id
- [ ] User is then redirected to `/` (home — empty journal)
- [ ] If a user who already completed onboarding visits `/onboarding`, redirect them to `/`
- [ ] Onboarding is skipped for existing users who already have stack preferences saved

---

### US-10 — Existing user: update tech stack preferences

**As an** existing user
**I want to** change my tech stack selection at any time
**So that** I can add new stacks as I start learning them or remove ones I no longer focus on

#### Acceptance Criteria

- [ ] A **Manage Stacks** option is accessible from the header or a settings page (`/settings`)
- [ ] Settings page shows all available stacks with current selections pre-checked
- [ ] User can add or remove stacks freely
- [ ] Must keep at least one stack selected — cannot save with zero stacks
- [ ] On save, preferences update immediately and reflect in the Add Entry form
- [ ] A success message confirms the update: *"Your stack preferences have been updated"*

---

### US-11 — Add Entry: show only user's selected stacks

**As a** user logging a new entry
**I want to** only see the stacks I have selected in my preferences
**So that** the form is focused and relevant to my learning

#### Acceptance Criteria

- [ ] The stack toggle buttons on `/add` only show the user's saved stack preferences
- [ ] If a user has selected React, TypeScript, and Java — only those three appear
- [ ] Changing preferences on `/settings` immediately reflects on the next `/add` visit
- [ ] Previously logged entries that contain stacks no longer in preferences are **not affected** — old entries retain their original stack tags and display correctly

---

### US-12 — Data integrity: old entries are never modified

**As a** user who changes their stack preferences
**I want** my older journal entries to remain exactly as I logged them
**So that** my history is accurate even if my learning focus changes

#### Acceptance Criteria

- [ ] Removing a stack from preferences does NOT delete or modify any existing entries tagged with that stack
- [ ] Old entries continue to display their original stack badges correctly on the home page and detail page
- [ ] The `stack` column on the `entries` table is never updated when preferences change — only the `user_preferences` table changes
- [ ] Database migration does not touch existing entry rows

---

## Technical Design

---

### New Database Table

```sql
create table user_preferences (
  id uuid default gen_random_uuid() primary key,
  user_id text not null unique,
  selected_stacks text[] not null,
  onboarding_completed boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

- One row per user — `user_id` is unique
- `selected_stacks` stores the user's chosen stack tags as an array
- `onboarding_completed` flag controls whether to show onboarding on first login

---

### Available Stacks List

Move the hardcoded stack list to a shared constants file so it's the single source of truth:

```ts
// lib/constants.ts
export const ALL_STACKS = [
  'React',
  'Next.js',
  'TypeScript',
  'Storybook',
  'C#',
  'Java',
  'Node.js',
  'Python',
  'Go',
  'Rust',
  'Docker',
  'AWS',
] as const

export type Stack = typeof ALL_STACKS[number]
```

This makes it easy to add new stacks in one place.

---

### New API Routes

```
GET  /api/preferences         → fetch current user's stack preferences
POST /api/preferences         → save preferences (onboarding)
PUT  /api/preferences         → update preferences (settings)
```

---

### New Pages and Components

```
app/
├── onboarding/
│   └── page.tsx              → US-09 — first time stack selection
└── settings/
    └── page.tsx              → US-10 — change stack preferences

components/
├── StackSelector.tsx         → reusable grid of selectable stack cards
│                               used on both onboarding and settings pages
└── OnboardingGuard.tsx       → redirects new users to /onboarding
                                if onboarding_completed is false
```

---

### Middleware Update

Add onboarding check to `middleware.ts`:

```
User logs in
    ↓
Middleware checks onboarding_completed flag
    ↓
false → redirect to /onboarding
true  → allow through to /
```

---

### Updated Add Entry Flow

```ts
// hooks/useJournalForm.ts — fetch user's stacks instead of hardcoded list
const { preferences } = usePreferences()
const availableStacks = preferences?.selectedStacks ?? ALL_STACKS
```

---

## What Does NOT Change

| Thing | Status |
|-------|--------|
| `entries` table schema | Unchanged |
| Existing entry data | Unchanged |
| Stack badges on old entries | Display correctly — no change |
| Auth flow | Unchanged |
| All existing user stories (US-01 to US-08) | Unchanged |

The only additions are a new `user_preferences` table, three new API routes, two new pages, and one reusable component.

---

## How to Contribute

If you have cloned this repo and want to implement this feature, follow the steps below.

### 1 — Fork or clone the repo

```bash
git clone https://github.com/original-owner/project-horizon.git
cd project-horizon/web/projects/dev-journal
```

### 2 — Create a new branch

Branch naming convention:

```bash
git checkout -b feature/us-09-onboarding-stack-selection
```

Use the US number that matches what you are implementing:
- `feature/us-09-onboarding-stack-selection`
- `feature/us-10-settings-stack-preferences`
- `feature/us-11-dynamic-stack-in-add-entry`
- `feature/us-12-data-integrity-verification`

### 3 — Implement the feature

Follow the acceptance criteria for each user story exactly. Every checkbox must be ticked before raising a PR.

Run these before pushing:

```bash
npm run typecheck   # must pass with zero errors
npm run lint        # must pass with zero warnings
npm run build       # must build successfully
```

### 4 — Commit with clear messages

```bash
git add .
git commit -m "[dev-journal] US-09 — Onboarding page with stack selection"
git commit -m "[dev-journal] US-10 — Settings page to update stack preferences"
```

### 5 — Push your branch

```bash
git push origin feature/us-09-onboarding-stack-selection
```

### 6 — Raise a Pull Request

Go to GitHub → your fork or the repo → **Pull Requests** → **New Pull Request**

Set:
- **Base branch:** `main`
- **Compare branch:** your feature branch

---

### PR Description Template

Use this template for every PR. Fill in every section — empty PRs will not be reviewed.

```markdown
## Summary
Brief description of what this PR implements.

## User Stories Implemented
- [ ] US-09 — First-time user onboarding: select tech stacks
- [ ] US-10 — Existing user: update tech stack preferences
- [ ] US-11 — Add Entry: show only user's selected stacks
- [ ] US-12 — Data integrity: old entries are never modified

## Acceptance Criteria Checklist
<!-- Copy the AC from this document and check each one -->
- [ ] After successful signup, user is redirected to /onboarding
- [ ] ...

## Database Changes
<!-- List any new tables, columns, or migrations -->
- Added `user_preferences` table (migration script in /supabase/migrations)

## Screenshots / Screen Recording
<!-- Required — attach screenshots or a short screen recording showing: -->
<!-- 1. New user signup → onboarding flow -->
<!-- 2. Stack selection and save -->
<!-- 3. Add Entry page showing only selected stacks -->
<!-- 4. Old entries still showing original stacks correctly -->

## How to Test
1. Sign up as a new user
2. ...

## TypeScript
- [ ] `npm run typecheck` passes with zero errors

## Lint
- [ ] `npm run lint` passes with zero warnings

## Build
- [ ] `npm run build` succeeds

## Breaking Changes
<!-- Does this PR break anything for existing users? -->
None — existing entries and auth flow are unchanged.

## Notes for Reviewer
<!-- Anything the reviewer should pay special attention to -->
```

---

## Definition of Done for This Feature

The feature is complete when:

- All four user stories (US-09 to US-12) are implemented
- All acceptance criteria are checked off
- A new user sees onboarding on first login
- An existing user can update stacks from settings
- Add Entry form shows only the user's selected stacks
- Old entries are visually verified to still show their original stack tags
- Zero TypeScript errors
- Zero lint warnings
- Deployed to a preview environment (Vercel preview URL from the PR)
- PR description filled in completely with screenshots

---

*Part of Project Horizon · Feature planned post Week 3 · Open for contribution*
