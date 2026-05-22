# QuickCart — Sprint 1 Backend Setup Guide

## Overview

This document explains how to complete Sprint 1 of the QuickCart backend.

Sprint 1 focuses on:

- Domain modelling
- PostgreSQL integration
- Entity Framework Core setup
- DbContext configuration
- Database migrations
- Secure connection management

---

## Prerequisites

Complete the initial project setup first.

Refer:

```text
docs/PROJECT_SETUP.md
```

Required:

- ASP.NET Core backend created
- PostgreSQL installed
- quickcartdb database created
- EF Core packages installed
- Swagger working

---

# Sprint 1 Goal

By the end of this sprint:

- PostgreSQL connected
- EF Core configured
- Core domain models created
- Database migration created
- Tables generated in PostgreSQL
- Secure secret handling configured

---

# Domain Architecture

QuickCart backend domain model:

```text
User
 ├── Addresses
 ├── Cart
 └── Orders

Category
 └── Products

Cart
 └── CartItems

Order
 └── OrderItems
```

---

# Step 1 — Secure Database Configuration

## Initialize User Secrets

Inside backend:

```bash
dotnet user-secrets init
```

---

## Add Connection String Secret

```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=localhost;Port=5432;Database=quickcartdb;Username=postgres;Password=YOUR_PASSWORD"
```

Replace:

```text
YOUR_PASSWORD
```

with your PostgreSQL password.

---

## Verify

```bash
dotnet user-secrets list
```

Expected:

```text
ConnectionStrings:DefaultConnection = Host=localhost...
```

---

## Why?

Avoid storing secrets inside source-controlled config files.

---

# Step 2 — Create Models Folder

Create:

```text
backend/Models
```

---

# Step 3 — Create Domain Models

---

## User.cs

```csharp
namespace backend.Models;

public class User
{
    public Guid Id { get; set; }

    public string FullName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string PasswordHash { get; set; } = string.Empty;

    public string PhoneNumber { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public List<Address> Addresses { get; set; } = [];

    public List<Order> Orders { get; set; } = [];

    public Cart? Cart { get; set; }
}
```

---

## Category.cs

```csharp
namespace backend.Models;

public class Category
{
    public Guid Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string IconUrl { get; set; } = string.Empty;

    public List<Product> Products { get; set; } = [];
}
```

---

## Product.cs

```csharp
namespace backend.Models;

public class Product
{
    public Guid Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public decimal Price { get; set; }

    public decimal DiscountPrice { get; set; }

    public int StockQuantity { get; set; }

    public string ImageUrl { get; set; } = string.Empty;

    public string Brand { get; set; } = string.Empty;

    public string Unit { get; set; } = string.Empty;

    public Guid CategoryId { get; set; }

    public Category? Category { get; set; }
}
```

---

## Cart.cs

```csharp
namespace backend.Models;

public class Cart
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    public User? User { get; set; }

    public List<CartItem> CartItems { get; set; } = [];
}
```

---

## CartItem.cs

```csharp
namespace backend.Models;

public class CartItem
{
    public Guid Id { get; set; }

    public Guid CartId { get; set; }

    public Cart? Cart { get; set; }

    public Guid ProductId { get; set; }

    public Product? Product { get; set; }

    public int Quantity { get; set; }
}
```

---

## Address.cs

```csharp
namespace backend.Models;

public class Address
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    public User? User { get; set; }

    public string Line1 { get; set; } = string.Empty;

    public string City { get; set; } = string.Empty;

    public string State { get; set; } = string.Empty;

    public string PostalCode { get; set; } = string.Empty;
}
```

---

## Order.cs

```csharp
namespace backend.Models;

public class Order
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    public User? User { get; set; }

    public decimal TotalAmount { get; set; }

    public string Status { get; set; } = "Pending";

    public Guid AddressId { get; set; }

    public Address? Address { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public List<OrderItem> OrderItems { get; set; } = [];
}
```

---

## OrderItem.cs

```csharp
namespace backend.Models;

public class OrderItem
{
    public Guid Id { get; set; }

    public Guid OrderId { get; set; }

    public Order? Order { get; set; }

    public Guid ProductId { get; set; }

    public Product? Product { get; set; }

    public int Quantity { get; set; }

    public decimal Price { get; set; }
}
```

---

# Step 4 — Create DbContext

Create:

```text
backend/Data/ApplicationDbContext.cs
```

```csharp
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options
    ) : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Cart> Carts => Set<Cart>();
    public DbSet<CartItem> CartItems => Set<CartItem>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();
    public DbSet<Address> Addresses => Set<Address>();
}
```

---

# Step 5 — Register DbContext

Update:

```text
backend/Program.cs
```

```csharp
using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
```

---

# Step 6 — Build Project

```bash
dotnet build
```

Expected:

```text
Build succeeded
```

---

# Step 7 — Create Migration

```bash
dotnet ef migrations add InitialCreate
```

---

# Step 8 — Apply Migration

```bash
dotnet ef database update
```

Expected:

```text
Applying migration 'InitialCreate'
Done.
```

---

# Step 9 — Verify Tables

In pgAdmin:

```text
quickcartdb
 → Schemas
   → public
     → Tables
```

Expected tables:

- Users
- Products
- Categories
- Carts
- CartItems
- Orders
- OrderItems
- Addresses
- \_\_EFMigrationsHistory

---

# Sprint 1 Completion Checklist

- [ ] User secrets configured
- [ ] Models created
- [ ] DbContext created
- [ ] DbContext registered
- [ ] Migration created
- [ ] Migration applied
- [ ] Tables visible in PostgreSQL

---

# Deliverable

QuickCart backend persistence layer ready for authentication sprint.
