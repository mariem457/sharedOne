using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using BloodDonationApi.Models;
using BloodDonationApi.Data;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// 🔐 Lecture de la section JWT du fichier appsettings.json
var jwtSettings = builder.Configuration.GetSection("JwtSettings");
var key = Encoding.UTF8.GetBytes(jwtSettings["Secret"]);

// 🔧 Configuration Entity Framework avec MariaDB
builder.Services.AddDbContext<AppDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

    options.UseMySql(
        connectionString,
        ServerVersion.AutoDetect(connectionString) // ✅ Compatible MariaDB
    );
});

// 🌐 Configuration CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// 🔐 Configuration de l'authentification JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings["Issuer"],
            ValidAudience = jwtSettings["Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(key)
        };
    });

builder.Services.AddAuthorization();
builder.Services.AddControllers();

// 📄 Swagger pour documentation API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ⚙️ Middleware développement uniquement
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 🌐 Activation de CORS (utilise la politique nommée "AllowAll")
app.UseCors("AllowAll");

// 🔐 Activation de l’authentification et autorisation
app.UseAuthentication();
app.UseAuthorization();

// 🚨 Gestion des erreurs globales (optionnel)
app.UseExceptionHandler("/error");

// 📦 Routing des contrôleurs
app.MapControllers();

// ▶️ Démarrage de l'application
app.Run();

