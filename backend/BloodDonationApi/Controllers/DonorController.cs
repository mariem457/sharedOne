using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;
using System.Linq;
using System.Threading.Tasks;
using BloodDonationApi.Models;
using BloodDonationApi.Data;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;

namespace BloodDonationApi.Controllers
{
    [ApiController]
    [Route("api/donors")]
    public class DonorController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly AppDbContext _context;
        private readonly ILogger<DonorController> _logger;

        public DonorController(IConfiguration config, AppDbContext context, ILogger<DonorController> logger)
        {
            _config = config;
            _context = context;
            _logger = logger;
        }
[HttpPost("register")]
public async Task<IActionResult> Register([FromBody] Donor newDonor)
{
    if (newDonor == null || string.IsNullOrEmpty(newDonor.Name) ||
        string.IsNullOrEmpty(newDonor.Email) || string.IsNullOrEmpty(newDonor.Phone) ||
        string.IsNullOrEmpty(newDonor.Password) || string.IsNullOrEmpty(newDonor.ConfirmePassword))
    {
        return BadRequest("Tous les champs sont requis.");
    }

    if (!Regex.IsMatch(newDonor.Phone, "^\\d+$"))
    {
        return BadRequest("Le numéro de téléphone ne doit contenir que des chiffres.");
    }

    if (!Regex.IsMatch(newDonor.Password, "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};':\"\\\\|,.<>/?]).{8,}$"))
    {
        return BadRequest("Le mot de passe doit contenir au moins 8 caractères, une lettre, un chiffre et un symbole.");
    }

    if (newDonor.Password != newDonor.ConfirmePassword)
    {
        return BadRequest("Les mots de passe ne correspondent pas.");
    }

    if (_context.Donors.Any(d => d.Phone == newDonor.Phone || d.Email == newDonor.Email))
    {
        return Conflict("Ce numéro de téléphone ou email est déjà utilisé.");
    }

    if (newDonor.Role != "Admin" && newDonor.Role != "Donor" && newDonor.Role != "Center")
    {
        return BadRequest("Le rôle doit être 'Admin', 'Donor' ou 'Center'.");
    }

    if (newDonor.BirthDate > DateTime.UtcNow.AddYears(-18))
    {
        return BadRequest("Vous devez avoir au moins 18 ans.");
    }

    newDonor.Password = HashPassword(newDonor.Password);
    _context.Donors.Add(newDonor);
    await _context.SaveChangesAsync();

    return Ok(new { Message = "Donor registered successfully." });
}


        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            var donor = _context.Donors.FirstOrDefault(d => d.Phone == loginRequest.Phone);
            if (donor == null || !VerifyPassword(loginRequest.Password, donor.Password))
            {
                return Unauthorized("Invalid phone or password.");
            }

           
            var token = GenerateJwtToken(donor.Phone, donor.Role);

            
            return Ok(new 
            { 
                Token = token, 
                Message = "Login successful.", 
                Role = donor.Role 
            });
        }

        private string HashPassword(string password)
        {
            byte[] salt = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            byte[] hash = KeyDerivation.Pbkdf2(password, salt, KeyDerivationPrf.HMACSHA256, 10000, 32);
            return Convert.ToBase64String(salt) + "." + Convert.ToBase64String(hash);
        }

        private bool VerifyPassword(string enteredPassword, string storedHash)
        {
            var parts = storedHash.Split('.');
            if (parts.Length != 2) return false;

            byte[] salt = Convert.FromBase64String(parts[0]);
            byte[] storedHashBytes = Convert.FromBase64String(parts[1]);
            byte[] enteredHashBytes = KeyDerivation.Pbkdf2(enteredPassword, salt, KeyDerivationPrf.HMACSHA256, 10000, 32);

            return storedHashBytes.SequenceEqual(enteredHashBytes);
        }

        private string GenerateJwtToken(string phone, string role)
        {
            var jwtSettings = _config.GetSection("JwtSettings");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Secret"]));

            var claims = new[] 
            {
                new Claim(ClaimTypes.Name, phone),
                new Claim(ClaimTypes.Role, role)
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(3),
                Issuer = jwtSettings["Issuer"],
                Audience = jwtSettings["Audience"],
                SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
        }
    }
}





