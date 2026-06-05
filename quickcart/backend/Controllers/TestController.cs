using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [HttpGet("public")]
    public IActionResult PublicEndpoint()
    {
        return Ok("This is a public endpoint");
    }

    [Authorize]
    [HttpGet("protected")]
    public IActionResult ProtectedEndpoint()
    {
        var userId =
            User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        var email =
            User.FindFirst(ClaimTypes.Email)?.Value;

        var fullName =
            User.FindFirst(ClaimTypes.Name)?.Value;

        return Ok(new
        {
            Message = "Protected endpoint accessed successfully",
            UserId = userId,
            Email = email,
            FullName = fullName
        });
    }
}