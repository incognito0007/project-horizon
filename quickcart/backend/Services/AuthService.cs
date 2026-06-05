using backend.Data;
using backend.DTOs.Auth;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using backend.Auth;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Services;

public class AuthService : IAuthService
{
    private readonly ApplicationDbContext _dbContext;
    private readonly JwtSettings _jwtSettings;

    public AuthService(
        ApplicationDbContext dbContext,
        IOptions<JwtSettings> jwtOptions
    )
    {
        _dbContext = dbContext;
        _jwtSettings = jwtOptions.Value;
    }

    public async Task<AuthResponse> RegisterAsync(
        RegisterRequest request
    )
    {
        var existingUser = await _dbContext.Users
            .FirstOrDefaultAsync(
                user => user.Email == request.Email
            );

        if (existingUser is not null)
        {
            return new AuthResponse
            {
                Success = false,
                Message = "Email already registered"
            };
        }

        var hashedPassword =
            BCrypt.Net.BCrypt.HashPassword(request.Password);

        var user = new User
        {
            FullName = request.FullName,
            Email = request.Email,
            PasswordHash = hashedPassword,
            PhoneNumber = request.PhoneNumber
        };

        _dbContext.Users.Add(user);

        await _dbContext.SaveChangesAsync();

        return new AuthResponse
        {
            Success = true,
            Message = "User registered successfully"
        };
    }

    public async Task<AuthResponse> LoginAsync(
    LoginRequest request
    )
    {
        var user = await _dbContext.Users
            .FirstOrDefaultAsync(
                user => user.Email == request.Email
            );

        if (user is null)
        {
            return new AuthResponse
            {
                Success = false,
                Message = "Invalid credentials"
            };
        }

        var passwordValid =
            BCrypt.Net.BCrypt.Verify(
                request.Password,
                user.PasswordHash
            );

        if (!passwordValid)
        {
            return new AuthResponse
            {
                Success = false,
                Message = "Invalid credentials"
            };
        }

        var token = GenerateJwtToken(user);

        return new AuthResponse
        {
            Success = true,
            Message = "Login successful",
            Token = token
        };
    }

    private string GenerateJwtToken(Models.User user)
    {
        var claims = new[]
        {
            new Claim(
                ClaimTypes.NameIdentifier,
                user.Id.ToString()
            ),
            new Claim(
                ClaimTypes.Email,
                user.Email
            ),
            new Claim(
                ClaimTypes.Name,
                user.FullName
            )
        };

        var key =
            new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(
                    _jwtSettings.SecretKey
                )
            );

        var credentials =
            new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha256
            );

        var token =
            new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(
                    _jwtSettings.ExpiryMinutes
                ),
                signingCredentials: credentials
            );

        return new JwtSecurityTokenHandler()
            .WriteToken(token);
    }
}