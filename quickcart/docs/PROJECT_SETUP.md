# QuickCart - Initial Project Setup Guide

## Overview

This document contains the complete initial project setup instructions for QuickCart.

QuickCart is a full-stack quick commerce platform inspired by modern instant delivery apps.

Tech Stack:

Frontend:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Storybook

Backend:

- ASP.NET Core Web API
- C#
- Entity Framework Core
- PostgreSQL
- JWT Authentication

---

# Task 1 — Create Root Workspace

Create the root project folder.

```bash
mkdir quickcart
cd quickcart
```

## Why?

This acts as the unified workspace for frontend, backend, and documentation.

Final structure:

```text
quickcart/
  frontend/
  backend/
  docs/
```

---

# Task 2 — Create Frontend Application

Generate the frontend using Next.js.

```bash
npx create-next-app@latest frontend
```

Choose:

```text
TypeScript? Yes
ESLint? Yes
Tailwind CSS? Yes
src/ directory? Yes
App Router? Yes
Turbopack? Yes
Import Alias? Yes (@/*)
```

## Why?

TypeScript:
Strong typing and production safety.

Tailwind:
Fast, scalable UI development.

App Router:
Modern Next.js architecture.

Import alias:
Cleaner imports.

---

# Task 3 — Create Backend Application

From root:

```bash
dotnet new webapi -n backend
```

## Why?

Provides:

- API project scaffold
- routing
- dependency injection
- config
- Swagger support

---

# Task 4 — Run Backend

```bash
cd backend
dotnet run
```

Test:

```text
http://localhost:<port>/swagger
```

## Why?

Confirms backend bootstrapping is successful.

---

# Task 5 — Install Backend Packages

Install required dependencies.

Entity Framework PostgreSQL provider:

```bash
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

Entity Framework tooling:

```bash
dotnet add package Microsoft.EntityFrameworkCore.Design
```

JWT authentication:

```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

Swagger:

```bash
dotnet add package Swashbuckle.AspNetCore
```

## Why?

Npgsql:
PostgreSQL integration.

EF Design:
Database migrations.

JWT:
Authentication system.

Swagger:
API documentation/testing.

---

# Task 6 — Install PostgreSQL

Install PostgreSQL locally.

Recommended:

- PostgreSQL 16+
- pgAdmin 4
- Command line tools

Create database:

```text
quickcartdb
```

Default connection:

```text
Host=localhost
Port=5432
```

## Why?

Persistent production-grade relational database.

---

# Task 7 — Clean Backend Template

Delete template files:

```text
WeatherForecast.cs
Controllers/WeatherForecastController.cs
```

## Why?

Removes starter boilerplate.

---

# Task 8 — Backend Folder Structure

Create:

```text
backend/
  Controllers/
  Models/
  DTOs/
  Services/
  Repositories/
  Data/
  Auth/
  Middleware/
```

## Why?

Promotes scalable architecture and separation of concerns.

---

# Task 9 — Frontend Folder Structure

Inside frontend/src:

```text
app/
components/
features/
hooks/
services/
types/
store/
stories/
lib/
```

## Why?

Keeps frontend modular and scalable.

---

# Task 10 — Git Initialization

At root:

```bash
git init
```

Create:

```text
.gitignore
README.md
```

First commit:

```bash
git add .
git commit -m "Initial project setup"
```

## Why?

Version control from day one.

---

# Setup Completion Checklist

- [ ] Root workspace created
- [ ] Frontend bootstrapped
- [ ] Backend bootstrapped
- [ ] Backend running
- [ ] Required packages installed
- [ ] PostgreSQL installed
- [ ] quickcartdb created
- [ ] Template cleaned
- [ ] Folder structures created
- [ ] Git initialized
