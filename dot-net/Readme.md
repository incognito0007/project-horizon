# ⚙️ horizon-dotnet

> C# · ASP.NET Core · Entity Framework · xUnit — sharpening .NET skills with modern patterns and real API work.

Part of [Project Horizon](../README.md) — a 5-month structured engineering growth journey.

---

## What lives here

Backend and language-level C# work. Builds on existing production experience — this section goes deeper into architecture, testing, and performance rather than starting from scratch.

```
horizon-dotnet/
├── csharp-fundamentals/   # Language features — LINQ, async, generics, spans
├── design-patterns/       # Repository, Factory, Strategy, SOLID exercises
├── aspnet-api/            # REST APIs with ASP.NET Core minimal API
├── entity-framework/      # EF Core — models, migrations, queries
├── testing/               # xUnit tests, mocking, integration tests
├── architecture/          # Clean architecture, DDD experiments
└── playground/            # Quick scripts and throwaway experiments
```

---

## Topics covered across the journey

**C# Language**

- LINQ — Where, Select, GroupBy, joins
- Async/await, Task, CancellationToken
- Generics, Span\<T\>, Memory\<T\>
- Records, pattern matching, switch expressions
- Dependency injection — lifetimes and patterns

**ASP.NET Core**

- Minimal API and controller-based APIs
- Middleware pipeline
- Authentication — JWT, refresh tokens
- SignalR — real-time hubs
- Caching — IMemoryCache, IDistributedCache

**Entity Framework Core**

- Code-first models and migrations
- Querying — tracked vs no-tracking
- Repository pattern over EF
- Integration testing with TestContainers

**Architecture & Patterns**

- SOLID principles — real refactoring exercises
- Repository, Factory, Strategy patterns
- Clean / Onion architecture
- Unit testing with xUnit — AAA pattern, mocking with Moq

---

## Commit style

```
[dotnet/linq] GroupBy and projection exercises on mock data
[dotnet/aspnet] Products CRUD API with minimal API
[dotnet/ef] Repository pattern implementation with SQLite
[dotnet/testing] xUnit tests for service layer with Moq
[dotnet/architecture] Refactor to clean architecture layers
```

---

_Part of Project Horizon · Started April 2026_
