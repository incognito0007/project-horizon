# DevJournal

A full-stack personal learning journal built with Next.js, TypeScript, Supabase, and NextAuth.js. Log what you learn every day, tag it by tech stack, and track your progress — with per-user authentication and persistent storage.

🔗 **Live Demo:** [https://dev-journal-app.vercel.app](https://dev-journal-app.vercel.app)

**Note:** You can take a look on FutureScope.md, if you want to add something from your side into this project.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Concepts Used](#concepts-used)
  - [React](#react)
  - [Next.js](#nextjs)
  - [TypeScript](#typescript)
  - [Storybook](#storybook)
  - [Supabase](#supabase)
  - [NextAuth.js](#nextauthjs)
- [Features](#features)
- [Interview Q&A](#interview-qa)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A Supabase account (free)

### 1 — Clone the repo

```bash
git clone https://github.com/your-username/project-horizon.git
cd project-horizon/web/projects/dev-journal
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Set up environment variables

Create a `.env.local` file in the root of `dev-journal/`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```

To generate `NEXTAUTH_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4 — Set up Supabase table

In your Supabase dashboard → SQL Editor → run:

```sql
create table entries (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  title text not null,
  summary text not null,
  stack text[] not null,
  mood text not null,
  time_spent_mins integer not null,
  created_at timestamptz default now()
);
```

### 5 — Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6 — Run Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint
npm run storybook    # Start Storybook
```

---

## Project Structure

```
dev-journal/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts   # NextAuth handler
│   │   └── entries/route.ts              # GET + POST entries API
│   ├── auth/
│   │   ├── login/page.tsx                # Login page
│   │   └── signup/page.tsx               # Signup page
│   ├── entry/[id]/page.tsx               # Dynamic entry detail page
│   ├── add/page.tsx                      # Add entry form
│   ├── page.tsx                          # Home — entry list
│   ├── loading.tsx                       # Loading UI
│   └── error.tsx                         # Error UI
├── components/
│   ├── Button.tsx                        # Reusable button
│   ├── EntryCard.tsx                     # Journal entry card
│   ├── Header.tsx                        # Shared sticky header
│   ├── MoodIndicator.tsx                 # Mood emoji + label
│   └── StackBadge.tsx                    # Tech stack badge
├── hooks/
│   ├── useEntries.ts                     # Fetch all entries
│   ├── useEntry.ts                       # Fetch single entry
│   └── useJournalForm.ts                 # Form state with useReducer
├── lib/
│   ├── actions.ts                        # Server actions (signOut)
│   ├── supabase.ts                       # Supabase client (anon)
│   ├── supabase-server.ts                # Supabase client (service role)
│   └── db/
│       └── entries.ts                    # DB query functions
├── stories/
│   ├── Button.stories.tsx
│   ├── EntryCard.stories.tsx
│   ├── MoodIndicator.stories.tsx
│   └── StackBadge.stories.tsx
├── types/
│   ├── journal.ts                        # All domain types
│   └── next-auth.d.ts                    # NextAuth type extensions
├── utils/
│   └── formatDate.ts                     # Date formatter
├── auth.ts                               # NextAuth v5 config
└── middleware.ts                         # Route protection
```

---

## Tech Stack

| Layer          | Technology                    |
| -------------- | ----------------------------- |
| Framework      | Next.js 15 (App Router)       |
| Language       | TypeScript (strict mode)      |
| Auth           | NextAuth.js v5                |
| Database       | Supabase (PostgreSQL)         |
| UI Components  | Custom — no component library |
| Component Docs | Storybook 8                   |
| Deployment     | Vercel                        |

---

## Concepts Used

---

### React

#### JSX and Functional Components

Every UI element in this project is a functional component. JSX is not HTML — it compiles to `React.createElement()` calls under the hood. Components are functions that accept props and return JSX.

```tsx
// EntryCard is a pure functional component
// It receives typed props and returns JSX
export function EntryCard({ entry }: EntryCardProps) {
  return (
    <div>
      <h3>{entry.title}</h3>
    </div>
  );
}
```

**Interview angle:** _"I understand that JSX is syntactic sugar over React.createElement. Every component in the project is a typed functional component with explicit prop interfaces — no class components, no any types."_

---

#### useState

Used for local UI state — form field values, loading states, error messages on client components like the login and signup pages.

```tsx
const [email, setEmail] = useState("");
const [error, setError] = useState<string | null>(null);
```

**Interview angle:** _"I use useState for simple, isolated state. When state has multiple related fields or complex transitions, I reach for useReducer instead — which I did for the journal entry form."_

---

#### useReducer

Used in `useJournalForm` hook to manage the entire form state as a single object with explicit action types. This is better than multiple `useState` calls when state transitions are related.

```tsx
type FormAction =
  | { type: "SET_TITLE"; payload: string }
  | { type: "TOGGLE_STACK"; payload: Stack }
  | { type: "SET_MOOD"; payload: Mood }
  | { type: "RESET" };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, draft: { ...state.draft, title: action.payload } };
    case "TOGGLE_STACK": {
      const current = state.draft.stack ?? [];
      const exists = current.includes(action.payload);
      return {
        ...state,
        draft: {
          ...state.draft,
          stack: exists
            ? current.filter((s) => s !== action.payload)
            : [...current, action.payload],
        },
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
```

**Interview angle:** _"useReducer gives you a predictable state machine. Every state transition is explicit and testable. I used discriminated union types for the action — TypeScript then ensures every case is handled correctly."_

---

#### useEffect and Cleanup

Used in `useEntries` and `useEntry` hooks to fetch data on mount. Includes an `AbortController` for cleanup — if the component unmounts before the fetch completes, the request is cancelled to prevent memory leaks.

```tsx
useEffect(() => {
  const controller = new AbortController();

  async function fetchEntries() {
    const res = await fetch("/api/entries", { signal: controller.signal });
    // ...
  }

  void fetchEntries();

  // Cleanup — cancel in-flight request on unmount
  return () => controller.abort();
}, []);
```

**Interview angle:** _"useEffect cleanup is important for preventing memory leaks and stale state updates. If a user navigates away before a fetch completes, the abort controller cancels the request and the state setter never fires on an unmounted component."_

---

#### Custom Hooks

Three custom hooks encapsulate logic that would otherwise bloat the component:

- `useEntries` — fetches all entries, returns `{ entries, loading, error }`
- `useEntry(id)` — fetches a single entry by id
- `useJournalForm` — manages form state with useReducer, validates, submits

```tsx
// Component stays clean — all logic is in the hook
const { draft, isValid, setTitle, toggleStack, submit } = useJournalForm();
```

**Interview angle:** _"Custom hooks are the React way of sharing stateful logic without duplicating code. They're just functions that call other hooks — nothing magic. The key is they make components thin and logic testable in isolation."_

---

### Next.js

#### App Router

This project uses the App Router introduced in Next.js 13. Every folder inside `app/` with a `page.tsx` becomes a route. Layouts wrap pages without remounting. Loading and error states are file-based.

```
app/
├── page.tsx          → /
├── add/page.tsx      → /add
├── entry/[id]/       → /entry/:id  (dynamic)
├── loading.tsx       → shown while page data loads
└── error.tsx         → shown if page throws
```

**Interview angle:** _"The App Router uses React Server Components by default. Server Components run on the server, can directly call databases, and send zero JavaScript to the client. I used this on the home page — it fetches from Supabase directly without an API call."_

---

#### Server Components vs Client Components

Server Components run on the server — they can fetch data directly, access environment variables, and don't ship JavaScript to the browser. Client Components run in the browser and can use hooks and event handlers.

```tsx
// Server Component — no 'use client', runs on server
// Can call Supabase directly
export default async function HomePage() {
  const session = await auth();
  const entries = await getEntriesByUser(session.user.id);
  return <EntryList entries={entries} />;
}

// Client Component — needs 'use client', runs in browser
// Can use useState, useEffect, event handlers
("use client");
export default function AddEntryPage() {
  const { draft, submit } = useJournalForm();
  return <form>...</form>;
}
```

**Interview angle:** _"I made a conscious choice about which components are Server vs Client. The home page is a Server Component — it fetches data at request time with no client JS. The form page is a Client Component because it needs hooks and user interaction."_

---

#### API Routes

Next.js API routes let you write backend endpoints inside the same project. `app/api/entries/route.ts` handles `GET` and `POST` for journal entries.

```tsx
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const entries = await getEntriesByUser(session.user.id);
  return NextResponse.json(entries, { status: 200 });
}
```

**Interview angle:** _"API routes in Next.js run as serverless functions on Vercel. Each route handler is isolated — they can access server-only secrets and databases without exposing anything to the client."_

---

#### Dynamic Routes

`app/entry/[id]/page.tsx` uses a dynamic segment — `[id]` matches any value and makes it available via `params`.

```tsx
interface EntryPageProps {
  params: Promise<{ id: string }>;
}

export default function EntryPage({ params }: EntryPageProps) {
  const { id } = use(params);
  const { entry } = useEntry(id);
}
```

**Interview angle:** _"In Next.js 15, params is a Promise — you unwrap it with React's use() hook in Client Components or await it in Server Components. This was a breaking change from v14."_

---

#### Middleware

`middleware.ts` runs before every request and checks authentication. Unauthenticated users are redirected to `/auth/login` before the page even renders.

```tsx
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  if (!isLoggedIn && !req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }
});
```

**Interview angle:** _"Middleware is the right place for auth guards in Next.js. It runs on the Edge — before the request hits your page — so unauthorised users never see a flash of protected content."_

---

#### Server Actions

Used for sign out. Server Actions are async functions that run on the server but can be called from the client — like a form submission that triggers server-side logic.

```ts
// lib/actions.ts
'use server'
export async function handleSignOut() {
  await signOut({ redirectTo: '/auth/login' })
}

// Used in Header component
<form action={handleSignOut}>
  <button type="submit">Sign out</button>
</form>
```

**Interview angle:** _"Server Actions must be defined in files with 'use server' at the top, or as inline functions inside Server Components. You can't define them inline in Client Components — that's a Next.js constraint I hit during development and solved by extracting to a separate file."_

---

### TypeScript

#### Interfaces and Type Aliases

All domain types live in `types/journal.ts`. Interfaces describe object shapes, type aliases describe unions and primitives.

```ts
// Union type — constrains to known values only
export type Stack =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "Storybook"
  | "C#"
  | "Java";
export type Mood = "great" | "okay" | "struggling";

// Interface — describes the shape of a journal entry
export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  summary: string;
  stack: Stack[];
  mood: Mood;
  timeSpentMins: number;
}
```

**Interview angle:** _"I keep all domain types in one file and import them everywhere. This single source of truth means if the shape of a JournalEntry changes, TypeScript immediately flags every place that's affected."_

---

#### Utility Types

Four built-in TypeScript utility types used meaningfully in this project:

```ts
// Omit — POST body doesn't need id or date, API sets those
export type NewEntryInput = Omit<JournalEntry, "id" | "date">;

// Partial — form draft starts empty, fields fill in one by one
export type DraftEntry = Partial<NewEntryInput>;

// Pick — EntryCard only needs 6 of 7 fields, summary not shown on card
export interface EntryCardProps {
  entry: Pick<
    JournalEntry,
    "id" | "title" | "date" | "stack" | "mood" | "timeSpentMins"
  >;
}

// Readonly — GET handler should never mutate the entries array
const readonlyEntries: Readonly<JournalEntry[]> = entries;
```

**Interview angle:** _"Utility types let you derive types from existing ones instead of duplicating them. If JournalEntry changes, NewEntryInput and DraftEntry update automatically — no manual sync needed."_

---

#### Generics

Used for the API response wrapper — a single type that works for any data shape.

```ts
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

// Usage
const response: ApiResponse<JournalEntry[]> = { data: entries, status: 200 };
const response: ApiResponse<JournalEntry> = { data: newEntry, status: 201 };
const response: ApiResponse<never> = { error: "Bad request", status: 400 };
```

**Interview angle:** _"Generics let you write type-safe code that works across multiple types. ApiResponse<T> is a classic example — the wrapper shape is always the same, only the data payload type changes."_

---

#### Discriminated Unions

Used for form actions — TypeScript narrows the type inside each case block, preventing invalid payloads.

```ts
type FormAction =
  | { type: "SET_TITLE"; payload: string }
  | { type: "TOGGLE_STACK"; payload: Stack } // payload must be Stack
  | { type: "SET_MOOD"; payload: Mood } // payload must be Mood
  | { type: "RESET" }; // no payload

// TypeScript knows exactly what payload is in each case
switch (action.type) {
  case "TOGGLE_STACK":
    action.payload; // TypeScript knows this is Stack here
}
```

**Interview angle:** _"Discriminated unions make illegal states unrepresentable. TypeScript narrows the type in each switch case — you can't accidentally pass a string where a Stack is expected."_

---

#### Strict Mode

`tsconfig.json` has `"strict": true` — this enables all strict checks including `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`. Zero `any` types used in this project.

**Interview angle:** _"Strict mode is non-negotiable for production TypeScript. strictNullChecks alone catches an entire class of runtime errors at compile time. If something can be null, you have to handle it — TypeScript won't let you ignore it."_

---

### Storybook

#### Stories and Args

Every component has a `.stories.tsx` file. Each named export is a story — a single rendered state of the component. Args are the props passed to the component.

```tsx
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Click me", // default args for all stories
    variant: "primary",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true, // overrides just for this story
    label: "Cannot Submit",
  },
};
```

**Interview angle:** _"Storybook lets you develop and test components in isolation — completely separate from the app. I used it to build every component before wiring it into pages. The Controls tab lets you live-edit props, which is great for design review."_

---

#### Decorators

Used to wrap stories in layout context — padding, max-width containers — without modifying the component itself.

```tsx
const meta: Meta<typeof EntryCard> = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};
```

**Interview angle:** _"Decorators are Storybook's way of providing context to stories — like wrapping in a ThemeProvider or a layout container. They're applied per-story or globally in preview.ts."_

---

### Supabase

#### PostgreSQL Database

Supabase provides a hosted PostgreSQL database. The `entries` table stores journal entries with a `user_id` column to scope entries to each user.

```sql
create table entries (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  title text not null,
  summary text not null,
  stack text[] not null,      -- PostgreSQL native array type
  mood text not null,
  time_spent_mins integer not null,
  created_at timestamptz default now()
);
```

**Interview angle:** _"I chose Supabase because it gives you a real PostgreSQL database with a JavaScript client, free tier, and dashboard. The data model is simple — one table, one row per journal entry, scoped by user_id."_

---

#### Service Role Client

The anon key respects Row Level Security. The service role key bypasses it — used server-side only for trusted operations.

```ts
// lib/supabase-server.ts — never imported in client components
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // server only
);
```

**Interview angle:** _"Never expose the service role key to the client. I keep it in a server-only file and only import it in API routes and Server Components. The anon key is safe for the browser — the service role key is not."_

---

### NextAuth.js

#### Credentials Provider

Users sign in with email and password. NextAuth delegates the verification to Supabase Auth — if Supabase confirms the credentials, NextAuth issues a JWT session.

```ts
CredentialsProvider({
  async authorize(credentials) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email as string,
      password: credentials.password as string,
    });
    if (error || !data.user) return null;
    return { id: data.user.id, email: data.user.email ?? "" };
  },
});
```

**Interview angle:** _"I used Credentials provider because I wanted to integrate with Supabase Auth for user management. NextAuth handles the session and JWT — Supabase handles the actual password verification. Two concerns, two tools."_

---

#### JWT Session Strategy

Sessions are stored in a JWT cookie — no database session table needed. The user id is stored in the JWT and forwarded to the session object via callbacks.

```ts
callbacks: {
  async jwt({ token, user }) {
    if (user) token.id = user.id   // store id in JWT on sign in
    return token
  },
  async session({ session, token }) {
    session.user.id = token.id     // forward id to session object
    return session
  },
}
```

**Interview angle:** _"JWT strategy means the session is stateless — no session table in the database. The trade-off is you can't instantly revoke sessions without a blocklist. For a personal learning journal, that trade-off is fine."_

---

## Features

- 🔐 Email / password authentication with NextAuth.js
- 👤 Per-user entries — each user only sees their own data
- 📝 Add journal entries with title, summary, stack tags, mood, and time spent
- 🗂 Filter by mood and stack visually on cards
- 🌙 Automatic dark / light mode based on OS preference
- 💾 Persistent storage with Supabase PostgreSQL
- 📖 Component library documented in Storybook
- 🚀 Deployed on Vercel with automatic deploys on push

---

## Interview Q&A

**Q: Why Next.js over plain React?**
A: Next.js gives you Server Components, file-based routing, API routes, middleware, and image optimisation out of the box. For this project specifically, Server Components let the home page fetch from Supabase directly on the server — no client-side loading state, no API round trip for the initial render.

**Q: What's the difference between Server and Client Components?**
A: Server Components run on the server — zero JavaScript sent to the browser. They can be async, access databases, and read environment variables. Client Components run in the browser and can use hooks, event listeners, and browser APIs. You opt into Client Components with `'use client'` — everything is a Server Component by default.

**Q: Why useReducer instead of useState for the form?**
A: The form has 5 related fields and complex transitions — toggling a stack tag from an array, validating as a whole unit, resetting on submit. Multiple `useState` calls would mean multiple separate state updates and inconsistent intermediate states. `useReducer` gives one state object, explicit actions, and predictable transitions.

**Q: How does auth work end to end?**
A: User submits email and password → NextAuth Credentials provider calls Supabase `signInWithPassword` → if valid, NextAuth creates a JWT with the user id → JWT stored in an httpOnly cookie → middleware reads the JWT on every request → if no valid JWT, redirect to login → API routes call `auth()` to get the session and scope queries to `session.user.id`.

**Q: What would you add if this were a real production app?**
A: Database-backed sessions for instant revocation, email verification on signup, refresh token rotation, rate limiting on the API routes, a proper ORM like Prisma instead of raw Supabase queries, and end-to-end tests with Playwright.

---

_Part of Project Horizon · Built during Weeks 1–3 revision · Deployed June 2026_
