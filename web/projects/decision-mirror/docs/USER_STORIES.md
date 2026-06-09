# User Stories

This document describes what users can do in Decision Mirror and defines the acceptance criteria for each feature.

---

# Epic 1: Decision Creation

## User Story

As a user,

I want to create a decision,

So that I can organize my thoughts.

## Acceptance Criteria

- User can enter a decision title.
- Title cannot be empty.
- User can save the decision.
- Newly created decisions appear immediately.
- Creation timestamp is stored.

---

# Epic 2: Pros Management

## User Story

As a user,

I want to add positive reasons,

So that I understand the benefits of my decision.

## Acceptance Criteria

- User can add multiple pros.
- Each pro contains:
  - Description
  - Weight (1–5)
- Pros cannot be empty.
- Pros can be edited.
- Pros can be deleted.

---

# Epic 3: Cons Management

## User Story

As a user,

I want to add negative reasons,

So that I understand the risks involved.

## Acceptance Criteria

- User can add multiple cons.
- Each con contains:
  - Description
  - Weight (1–5)
- Cons cannot be empty.
- Cons can be edited.
- Cons can be deleted.

---

# Epic 4: Recommendation Engine

## User Story

As a user,

I want Decision Mirror to summarize my decision,

So that I understand my logical tendency.

## Acceptance Criteria

- Pros score is calculated.
- Cons score is calculated.
- Recommendation percentage is displayed.
- Recommendation label is displayed.
- Labels include:
  - Strong YES
  - Leaning YES
  - Neutral
  - Leaning NO
  - Strong NO

---

# Epic 5: Decision Summary

## User Story

As a user,

I want to review a summary,

So that I understand why the recommendation was generated.

## Acceptance Criteria

- Pros score displayed.
- Cons score displayed.
- Recommendation percentage displayed.
- Recommendation label displayed.
- Pros list displayed.
- Cons list displayed.

---

# Epic 6: Decision History

## User Story

As a user,

I want to revisit previous decisions,

So that I can reflect on them.

## Acceptance Criteria

- Historical decisions displayed.
- Sorted by most recent first.
- Selecting a decision opens its details.
- Recommendation shown in the list.

---

# Epic 7: Persistence

## User Story

As a user,

I want my decisions saved automatically,

So that I do not lose my work.

## Acceptance Criteria

- Decisions saved to Local Storage.
- Decisions restored on page refresh.
- Invalid Local Storage data handled gracefully.

---

# Epic 8: Decision Management

## User Story

As a user,

I want to edit or delete decisions,

So that my workspace remains relevant.

## Acceptance Criteria

- Decisions can be edited.
- Updates are reflected immediately.
- Delete confirmation is shown.
- Deleted decisions are permanently removed.
