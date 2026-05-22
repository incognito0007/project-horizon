# QuickCart

A production-grade full-stack quick commerce platform inspired by modern instant delivery applications.

---

## Project Vision

QuickCart is being built as a real-world engineering project to simulate production application architecture and workflows.

The goal is not just UI cloning, but building a scalable full-stack product with:

- real backend APIs
- relational database design
- authentication
- reusable frontend components
- design system architecture
- product-grade engineering practices

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Storybook
- Zustand
- React Hook Form
- Zod
- TanStack Query
- Axios

---

### Backend

- ASP.NET Core Web API
- C#
- Entity Framework Core
- PostgreSQL
- JWT Authentication

---

### Future Infrastructure

- Redis
- Docker
- WebSockets
- CI/CD
- Azure / Railway deployment

---

## Core Features

### Customer Features

- User registration
- User login
- JWT authentication
- Product browsing
- Product search
- Product filtering
- Category browsing
- Product details
- Cart management
- Quantity updates
- Address management
- Checkout
- Order placement
- Order tracking
- Wishlist
- Notifications

---

### Admin Features

- Product CRUD
- Inventory management
- Category management
- Order management
- User management
- Dashboard analytics

---

## Architecture

```text
Next.js Frontend
      |
      | HTTP / REST
      v
ASP.NET Core Web API
      |
      +--> PostgreSQL
      |
      +--> Redis (future)
```

---

## Engineering Principles

This project follows:

- modular architecture
- separation of concerns
- reusable component design
- API-first backend development
- domain-driven modelling
- scalable folder organization

---

## Project Structure

```text
quickcart/
  frontend/
  backend/
  docs/
```

---

## Initial Setup

Refer to:

```text
docs/PROJECT_SETUP.md
```

for complete environment setup instructions.

---

## Development Roadmap

Phase 1:
Project setup + architecture + domain modelling

Phase 2:
Authentication system

Phase 3:
Product catalogue APIs + frontend integration

Phase 4:
Cart + checkout flows

Phase 5:
Orders + tracking

Phase 6:
Admin panel

Phase 7:
Performance optimization + production polish

---

## Learning Goals

This project is intentionally designed to strengthen:

Frontend:

- React architecture
- Next.js App Router
- TypeScript mastery
- Storybook workflows

Backend:

- ASP.NET Core API design
- Entity Framework Core
- Authentication flows
- PostgreSQL integration

System Design:

- API contracts
- layered architecture
- caching
- scalability

---

## Status

Currently in active development.
