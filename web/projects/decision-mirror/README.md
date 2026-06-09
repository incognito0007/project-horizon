# Decision Mirror

Decision Mirror is a decision-making companion that helps users organize their thoughts by listing pros and cons, assigning importance scores, and receiving recommendations based on their own reasoning.

Instead of relying entirely on emotions or external opinions, Decision Mirror encourages users to think through their decisions in a structured manner.

---

## Problem Statement

People often struggle with everyday decisions such as:

- Should I switch jobs?
- Should I buy this expensive gadget?
- Should I pursue higher studies?
- Should I start this habit?

Most people either:

- Make emotional decisions,
- Ask others to decide for them,
- Or overthink and delay making a decision.

Decision Mirror helps users break down decisions into manageable pieces and understand the trade-offs involved.

---

## Features

### Decision Creation

- Create new decisions.
- Provide a title for the decision.

### Pros and Cons

- Add positive reasons (Pros).
- Add negative reasons (Cons).
- Assign importance scores to each reason.

### Recommendation Engine

- Calculate recommendation percentages.
- Generate recommendation labels.

### Decision Summary

- View recommendation details.
- Review the reasons behind recommendations.

### Decision History

- Revisit previous decisions.

### Decision Management

- Edit existing decisions.
- Delete unwanted decisions.

### Local Persistence

- Automatically save decisions.
- Restore decisions after refreshing the page.

---

## Tech Stack

- Next.js
- React
- TypeScript
- Storybook
- CSS Modules
- Local Storage

---

## Screens

### Dashboard

Displays previously created decisions.

### Create Decision

Allows users to add decisions, pros, and cons.

### Decision Summary

Displays recommendation scores and reasoning.

### Delete Confirmation

Prevents accidental deletion.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

---

## Documentation

- USER_STORIES.md
- ARCHITECTURE.md
- ROADMAP.md

---

## Project Goal

The goal of this project is to demonstrate how a modern frontend application can be designed, documented, and developed using product thinking and engineering best practices.
