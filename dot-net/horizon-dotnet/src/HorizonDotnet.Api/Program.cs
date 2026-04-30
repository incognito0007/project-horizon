var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Horizon API is running");

app.MapGet("/health", () => Results.Ok(new { Status = "Healthy", Version = "1.0" }));

app.Run();