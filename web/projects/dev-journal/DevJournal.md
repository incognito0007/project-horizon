# DevJournal

A personal developer learning journal. Log what you learn every day, tag it by tech stack, and track your progress — built to revise React, Next.js, TypeScript, and Storybook concepts from Weeks 1–3.

---

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript (strict mode — zero `any`)
- React Hooks — useState, useReducer, useEffect
- Next.js API Routes
- Storybook (stories + Args + Controls + Decorators)

---

## What You Are Building

A journal app with three screens:

```
/              → Home — list of all journal entries
/add           → Add Entry page — form to log a new entry
/entry/[id]    → Entry Detail page — view a single entry
```

Data is stored in-memory (a JSON array on the API side). No database needed.

---

## Data Shape

```ts
type Stack = "React" | "Next.js" | "TypeScript" | "Storybook" | "C#" | "Java";

type Mood = "great" | "okay" | "struggling";

interface JournalEntry {
  id: string;
  date: string; // ISO string
  title: string;
  summary: string;
  stack: Stack[]; // can tag multiple stacks
  mood: Mood;
  timeSpentMins: number;
}
```

---

## User Stories & Acceptance Criteria

---

### US-01 — View all journal entries

**As a** developer
**I want to** see all my journal entries on the home page
**So that** I can track what I have been learning

#### Acceptance Criteria

- [ ] Home page (`/`) displays a list of all journal entries
- [ ] Each entry card shows: title, date, stack tags, mood, and time spent
- [ ] Entries are sorted by date — newest first
- [ ] If no entries exist, a friendly empty state message is shown: _"No entries yet. Start logging your learning!"_
- [ ] Page has a clearly visible "Add Entry" button that navigates to `/add`
- [ ] A `loading.tsx` file exists and shows a loading state while entries are fetched
- [ ] An `error.tsx` file exists and shows a user-friendly error message if the fetch fails

---

### US-02 — Add a new journal entry

**As a** developer
**I want to** fill in a form and submit a new journal entry
**So that** I can record what I learned today

#### Acceptance Criteria

- [ ] Add Entry page (`/add`) has a form with these fields:
  - Title (text input, required)
  - Summary (textarea, required, min 20 characters)
  - Stack tags (multi-select or checkboxes — React, Next.js, TypeScript, Storybook, C#, Java)
  - Mood (three options — great / okay / struggling)
  - Time Spent in minutes (number input, required, min 1)
- [ ] All fields are fully typed — no `any`, form state uses a proper TypeScript interface
- [ ] Form state is managed with `useReducer` (not multiple `useState` calls)
- [ ] Submit button is disabled if required fields are empty
- [ ] On successful submit, user is redirected back to `/`
- [ ] On submit, the entry is sent to the API Route via a `POST /api/entries` call
- [ ] A custom `useJournalForm` hook encapsulates the form reducer logic — the page component only calls the hook

---

### US-03 — View a single entry

**As a** developer
**I want to** click on an entry and see its full details
**So that** I can review what I wrote

#### Acceptance Criteria

- [ ] Clicking an entry card on the home page navigates to `/entry/[id]`
- [ ] The detail page shows all fields: title, date, summary, stack tags, mood, time spent
- [ ] If the entry ID does not exist, a clear "Entry not found" message is shown
- [ ] A "Back to Journal" link navigates back to `/`
- [ ] The page uses a typed `params` prop — `{ params: { id: string } }`

---

### US-04 — API Routes

**As a** developer
**I want** the app to read and write entries through API Routes
**So that** I practise Next.js backend capabilities

#### Acceptance Criteria

- [ ] `GET /api/entries` returns all entries as a JSON array
- [ ] `POST /api/entries` accepts a new entry, assigns it a unique `id`, and adds it to the list
- [ ] Both routes return proper HTTP status codes (200, 201, 400)
- [ ] All request and response types are fully typed — a shared `ApiResponse<T>` generic type is used
- [ ] In-memory store is used (a module-level array) — no database needed

---

### US-05 — Reusable components

**As a** developer
**I want** the UI to be built from small typed reusable components
**So that** I practise component composition and TypeScript props

#### Acceptance Criteria

- [ ] `EntryCard` component — accepts a `JournalEntry` prop and renders the card
- [ ] `StackBadge` component — accepts a `Stack` type and renders a coloured badge
- [ ] `MoodIndicator` component — accepts a `Mood` type and renders an emoji + label (😊 great / 😐 okay / 😤 struggling)
- [ ] `Button` component — accepts `label`, `variant` (primary / secondary), `disabled`, `onClick`
- [ ] All component props are defined with TypeScript interfaces — no inline type literals
- [ ] No component uses `any` anywhere

---

### US-06 — Custom hooks

**As a** developer
**I want** data fetching logic extracted into custom hooks
**So that** I practise separating concerns

#### Acceptance Criteria

- [ ] `useEntries` hook — fetches all entries from `GET /api/entries`, returns `{ entries, loading, error }`
- [ ] `useEntry(id)` hook — fetches a single entry by id, returns `{ entry, loading, error }`
- [ ] Both hooks handle loading and error states
- [ ] Both hooks use `useEffect` with proper cleanup (abort controller)
- [ ] The return types of both hooks are fully typed with TypeScript interfaces

---

### US-07 — TypeScript utility types

**As a** developer
**I want** to use TypeScript utility types meaningfully
**So that** I practise Partial, Pick, Omit, and Readonly

#### Acceptance Criteria

- [ ] `NewEntryInput` type is defined using `Omit<JournalEntry, 'id' | 'date'>` — used as the POST request body type
- [ ] `EntryCardProps` uses `Pick<JournalEntry, 'id' | 'title' | 'date' | 'stack' | 'mood' | 'timeSpentMins'>`
- [ ] `DraftEntry` type uses `Partial<NewEntryInput>` — used for the form's in-progress state
- [ ] The in-memory entries array is typed as `Readonly<JournalEntry[]>` in the API route

---

### US-08 — Storybook stories

**As a** developer
**I want** every component documented in Storybook
**So that** I practise writing stories, Args, Controls, and Decorators

#### Acceptance Criteria

- [ ] `Button.stories.tsx` — stories for all variants (primary, secondary, disabled)
- [ ] `StackBadge.stories.tsx` — one story per stack tag, Args used for the label
- [ ] `MoodIndicator.stories.tsx` — one story per mood value
- [ ] `EntryCard.stories.tsx` — a Default story with a realistic mock entry, a decorator wraps it in a max-width container
- [ ] All stories use `Meta` and `StoryObj` types from `@storybook/react`
- [ ] Controls tab works on all stories — changing Args updates the component live
- [ ] At least one story file uses a **Decorator** to wrap the component in padding/layout

---

## Folder Structure

```
dev-journal/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # US-01
│   ├── loading.tsx               # US-01
│   ├── error.tsx                 # US-01
│   ├── add/
│   │   └── page.tsx              # US-02
│   ├── entry/
│   │   └── [id]/
│   │       └── page.tsx          # US-03
│   └── api/
│       └── entries/
│           └── route.ts          # US-04
├── components/
│   ├── Button.tsx                # US-05
│   ├── EntryCard.tsx             # US-05
│   ├── StackBadge.tsx            # US-05
│   └── MoodIndicator.tsx         # US-05
├── hooks/
│   ├── useEntries.ts             # US-06
│   ├── useEntry.ts               # US-06
│   └── useJournalForm.ts         # US-02
├── types/
│   └── journal.ts                # all types and interfaces live here
├── utils/
│   └── formatDate.ts             # helper — format ISO date to readable string
└── stories/
    ├── Button.stories.tsx         # US-08
    ├── StackBadge.stories.tsx     # US-08
    ├── MoodIndicator.stories.tsx  # US-08
    └── EntryCard.stories.tsx      # US-08
```

---

## Definition of Done

A user story is complete when:

- All its acceptance criteria are checked off
- `npm run typecheck` passes with zero errors
- `npm run lint` passes with zero warnings
- The story renders correctly in Storybook
- Code is committed with a meaningful commit message

---

## Commit Convention

```
[dev-journal] Add EntryCard component with StackBadge
[dev-journal] Add useEntries hook with abort controller
[dev-journal] Add GET and POST api/entries route
[dev-journal] Add Button stories with all variants
```

---

## Suggested Order of Work

```
1. types/journal.ts          → define all types first, everything depends on this
2. app/api/entries/route.ts  → GET + POST endpoints
3. components/               → build all four components
4. hooks/                    → useEntries, useEntry, useJournalForm
5. app/page.tsx              → home page
6. app/add/page.tsx          → add entry page
7. app/entry/[id]/page.tsx   → detail page
8. stories/                  → Storybook last, after components are solid
```

---

_Part of Project Horizon · Revision project for Weeks 1–3_
