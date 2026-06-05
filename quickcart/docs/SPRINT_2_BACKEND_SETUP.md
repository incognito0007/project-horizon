# QuickCart — Sprint 2 Authentication Setup Guide

## Overview

This document explains how to implement Sprint 2 of the QuickCart backend.

Sprint 2 focuses on:

- JWT Authentication
- User Registration
- User Login
- Password Hashing
- Protected Endpoints
- Swagger JWT Authorization

---

# Prerequisites

Complete the following first:

- Project setup completed
- Sprint 1 completed
- PostgreSQL configured
- Entity Framework Core configured
- User entity created
- User Secrets configured

Refer:

```text
docs/PROJECT_SETUP.md
docs/SPRINT_1_BACKEND_SETUP.md
```

---

# Sprint Goal

By the end of this sprint:

- Users can register
- Users can login
- Passwords are securely hashed
- JWT tokens are generated
- Protected APIs require authentication
- Swagger supports JWT authorization

---

# Architecture

```text
Client
  ↓
AuthController
  ↓
AuthService
  ↓
ApplicationDbContext
  ↓
PostgreSQL
```

---

# Folder Structure

```text
backend/

├── Auth/
│   └── JwtSettings.cs
│
├── Controllers/
│   └── AuthController.cs
│
├── DTOs/
│   └── Auth/
│       ├── RegisterRequest.cs
│       ├── LoginRequest.cs
│       └── AuthResponse.cs
│
├── Services/
│   ├── IAuthService.cs
│   └── AuthService.cs
```

---

# Step 1 — Install Required Packages

```bash
dotnet add package BCrypt.Net-Next

dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 8.0.7

dotnet add package Swashbuckle.AspNetCore --version 6.6.2
```

---

# Step 2 — Configure JWT Settings

Create:

```text
Auth/JwtSettings.cs
```

```csharp
namespace backend.Auth;

public class JwtSettings
{
    public string SecretKey { get; set; } = string.Empty;

    public string Issuer { get; set; } = string.Empty;

    public string Audience { get; set; } = string.Empty;

    public int ExpiryMinutes { get; set; }
}
```

---

# Step 3 — Add JWT Configuration

Update:

```text
appsettings.json
```

```json
{
  "JwtSettings": {
    "Issuer": "QuickCartAPI",
    "Audience": "QuickCartFrontend",
    "ExpiryMinutes": 60
  }
}
```

---

# Step 4 — Store JWT Secret

Use User Secrets.

```bash
dotnet user-secrets set "JwtSettings:SecretKey" "YOUR_SUPER_SECRET_KEY"
```

Verify:

```bash
dotnet user-secrets list
```

Expected:

```text
JwtSettings:SecretKey = ...
```

---

# Step 5 — Create DTOs

## RegisterRequest

```csharp
using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.Auth;

public class RegisterRequest
{
    [Required]
    public string FullName { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string Password { get; set; } = string.Empty;

    [Required]
    public string PhoneNumber { get; set; } = string.Empty;
}
```

---

## LoginRequest

```csharp
using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.Auth;

public class LoginRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;
}
```

---

## AuthResponse

```csharp
namespace backend.DTOs.Auth;

public class AuthResponse
{
    public bool Success { get; set; }

    public string Message { get; set; } = string.Empty;

    public string? Token { get; set; }
}
```

---

# Step 6 — Create Service Layer

## IAuthService

```csharp
public interface IAuthService
{
    Task<AuthResponse> RegisterAsync(RegisterRequest request);

    Task<AuthResponse> LoginAsync(LoginRequest request);
}
```

---

## AuthService Responsibilities

- Check duplicate users
- Hash passwords using BCrypt
- Save users
- Verify passwords
- Generate JWT tokens

---

# Step 7 — Register User

Process:

```text
Request
 ↓
Validate DTO
 ↓
Check existing email
 ↓
Hash password
 ↓
Save user
 ↓
Return success
```

Password Hashing:

```csharp
var hash =
    BCrypt.Net.BCrypt.HashPassword(
        request.Password
    );
```

Store:

```csharp
PasswordHash = hash;
```

---

# Step 8 — Login User

Process:

```text
Request
 ↓
Find user
 ↓
Verify BCrypt hash
 ↓
Generate JWT
 ↓
Return token
```

Password Verification:

```csharp
BCrypt.Net.BCrypt.Verify(
    request.Password,
    user.PasswordHash
);
```

---

# Step 9 — Configure Authentication

Register JWT authentication inside Program.cs.

```csharp
builder.Services.AddAuthentication(
    JwtBearerDefaults.AuthenticationScheme
)
.AddJwtBearer(...);

builder.Services.AddAuthorization();
```

Enable middleware:

```csharp
app.UseAuthentication();
app.UseAuthorization();
```

---

# Step 10 — Configure Swagger JWT Support

Add:

```csharp
using Microsoft.OpenApi.Models;
```

Configure:

```csharp
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition(
        "Bearer",
        new OpenApiSecurityScheme
        {
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            Scheme = "bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header
        });

    options.AddSecurityRequirement(
        new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference =
                        new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                },
                Array.Empty<string>()
            }
        });
});
```

---

# Step 11 — Create Protected Endpoint

Example:

```csharp
[Authorize]
[HttpGet("protected")]
public IActionResult Protected()
{
    return Ok("Protected endpoint");
}
```

---

# Step 12 — Testing

## Register

```http
POST /api/auth/register
```

Expected:

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

## Login

```http
POST /api/auth/login
```

Expected:

```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJ..."
}
```

---

## Protected Endpoint

Without token:

```text
401 Unauthorized
```

With token:

```text
200 OK
```

---

# Security Practices

Implemented:

- BCrypt password hashing
- JWT authentication
- User Secrets
- No plaintext passwords
- No hardcoded secrets
- Protected API routes

---

# Sprint 2 Completion Checklist

- [ ] JWT configured
- [ ] User Secrets configured
- [ ] Register endpoint working
- [ ] Login endpoint working
- [ ] BCrypt hashing working
- [ ] JWT token generation working
- [ ] Protected endpoints working
- [ ] Swagger authorization working

---

# Deliverable

QuickCart backend authentication system fully implemented and verified.

Ready for Sprint 3 — Product Catalogue APIs.
