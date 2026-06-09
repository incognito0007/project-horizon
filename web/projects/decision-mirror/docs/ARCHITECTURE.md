# Architecture

Decision Mirror uses a Feature-Based Architecture.

The goal is to keep related functionality together and make the project easy to scale and understand.

---

# Folder Structure

src/
├── app/
├── components/
├── features/
│ └── decisions/
│ ├── components/
│ ├── hooks/
│ ├── services/
│ ├── stories/
│ ├── types/
│ └── utils/
├── lib/
├── stories/
├── types/
└── utils/

---

# Folder Responsibilities

## app/

Contains application routes and layouts.

Responsibilities:

- Routing
- Loading states
- Error handling

---

## components/

Contains reusable UI components.

Examples:

- Button
- Input
- Badge
- Modal

---

## features/

Contains business logic grouped by feature.

Decision-related functionality lives inside:

features/decisions/

Examples:

- DecisionForm
- DecisionSummary
- DecisionCard

---

## lib/

Contains integrations and browser APIs.

Examples:

- Local Storage helpers

---

## utils/

Contains generic helper functions.

Examples:

- Date formatting
- Percentage calculations

---

# Data Flow

User Interaction

↓

UI Components

↓

Reducer / State Management

↓

Recommendation Engine

↓

Local Storage

↓

Updated UI

---

# Core Models

## Decision

Represents a user decision.

Fields:

- id
- title
- reasons
- createdAt
- updatedAt

---

## Reason

Represents a pro or con.

Fields:

- id
- text
- weight
- type

Types:

- PRO
- CON

---

# Recommendation Logic

YES Score = Sum of Pro Weights

NO Score = Sum of Con Weights

Recommendation Percentage:

YES / (YES + NO) × 100
