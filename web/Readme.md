# 🌐 horizon-web

> React · Next.js · TypeScript · Storybook — frontend practice, components, and full-stack web experiments.

Part of [Project Horizon](../README.md) — a 5-month structured engineering growth journey.

---

## What lives here

Daily frontend work covering the modern React ecosystem. Everything is written in **strict TypeScript** — no plain JS, no `any`.

```
horizon-web/
├── components/        # Standalone React components
├── hooks/             # Custom React hooks
├── nextjs-apps/       # Next.js app experiments (one folder per project)
├── storybook/         # Component library with stories and docs
├── typescript/        # Isolated TS exercises and patterns
└── playground/        # Quick experiments and throwaway sandboxes
```

---

## Topics covered across the journey

**React**

- Functional components, JSX, props
- useState, useReducer, useEffect, useContext
- useMemo, useCallback, memo — performance patterns
- Custom hooks, compound components
- Suspense, lazy loading, error boundaries
- React Testing Library

**Next.js**

- App Router, layouts, loading & error states
- SSR vs SSG — when and why
- API Routes / Route Handlers
- Middleware, redirects, rewrites
- Image optimisation, metadata API
- Deployment to Vercel

**TypeScript**

- Types, interfaces, generics
- Utility types — Partial, Pick, Omit, Readonly
- Discriminated unions, type guards
- Mapped types, conditional types, infer
- Branded types, module augmentation
- Strict mode — zero any policy

**Storybook**

- Setup with Next.js
- Stories, Args, Controls
- Decorators, global theming
- MDX docs, autodocs
- Addons — a11y, viewport
- Visual regression with Chromatic

---

## Commit style

```
[web/components] Add Card component with variant props
[web/hooks] useFetch with abort controller and error state
[web/nextjs] App Router migration — layouts and loading.tsx
[web/storybook] Button stories with all variants documented
[web/ts] Mapped types exercise — DeepReadonly<T>
```

---

_Part of Project Horizon · Started April 2026_
