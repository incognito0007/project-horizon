# ☕ horizon-java

> Java · Spring Boot · Spring Data JPA — learning Java from strong OOP foundations to a production-ready REST API.

Part of [Project Horizon](../README.md) — a 5-month structured engineering growth journey.

---

## What lives here

Java from first principles, progressing steadily into the Spring ecosystem. One Friday session per week throughout the journey, building up to a fully functional Spring Boot application by month 4.

```
horizon-java/
├── fundamentals/      # Core Java — OOP, collections, generics, exceptions
├── streams-lambdas/   # Stream API, lambda expressions, functional interfaces
├── spring-boot/       # REST controllers, beans, DI, configuration
├── spring-data/       # JPA entities, repositories, JPQL queries
├── spring-security/   # Basic auth, JWT integration
├── docker/            # Containerising the Spring app
└── dsa/               # Data structures and algorithms in Java
```

---

## Topics covered across the journey

**Core Java**

- Classes, objects, constructors, this keyword
- Interfaces, abstract classes, polymorphism
- ArrayList, HashMap, HashSet, iterators
- Generics — bounded wildcards, type parameters
- Exception handling, custom exceptions, try-with-resources
- Lambda expressions, functional interfaces

**Stream API**

- filter, map, reduce, collect
- Collectors — groupingBy, joining, toMap
- Optional — safe null handling
- Parallel streams

**Spring Boot**

- Project setup with Spring Initializr
- REST controllers — GET, POST, PUT, DELETE
- Dependency injection, bean scopes
- Configuration, profiles, application.yml
- Swagger / OpenAPI documentation

**Spring Data JPA**

- Entities, relationships, cascades
- Repository interfaces — JpaRepository
- JPQL and native queries
- H2 for dev, PostgreSQL for production

**Spring Security**

- Basic authentication setup
- JWT — issuing and validating tokens
- Securing endpoints with roles

**Containerisation**

- Dockerfile for a Spring Boot app
- docker-compose with app + database

---

## Commit style

```
[java/fundamentals] BankAccount class with deposit/withdraw methods
[java/streams] Rewrite ArrayList loops using Stream API
[java/spring] Products REST API — GET and POST endpoints
[java/jpa] JPA entities and repository for products domain
[java/docker] Dockerfile and docker-compose for Spring + PostgreSQL
```

---

_Part of Project Horizon · Started April 2026_
