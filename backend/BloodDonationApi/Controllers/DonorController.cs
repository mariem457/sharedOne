using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Authorization;
using BloodDonationApi.Models;
using BloodDonationApi.Data; // <- Import du DbContext
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;

namespace BloodDonationApi.Controllers
{
    [ApiController]
    [Route("api/donors")]
    public class DonorController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly AppDbContext _context;

        public DonorController(IConfiguration config, AppDbContext context)
        {
            _config = config;
            _context = context;
        }

        // ✅ Inscription — enregistre en BDD
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Donor newDonor)
        {
            if (newDonor == null || string.IsNullOrEmpty(newDonor.Name) ||
                string.IsNullOrEmpty(newDonor.Email) || string.IsNullOrEmpty(newDonor.Phone) ||
                string.IsNullOrEmpty(newDonor.Password))
            {
                return BadRequest("Name, Email, Phone and Password are required.");
            }

            if (newDonor.Password != newDonor.ConfirmePassword)
            {
                return BadRequest("Password and Confirm Password must match.");
            }

            if (_context.Donors.Any(d => d.Phone == newDonor.Phone || d.Email == newDonor.Email))
            {
                return Conflict("This phone number or email is already registered.");
            }

            newDonor.Password = HashPassword(newDonor.Password);
            newDonor.Role = newDonor.Role ?? "Donor";

            _context.Donors.Add(newDonor);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "Donor registered successfully." });
        }

        // ✅ Connexion
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            var donor = _context.Donors.FirstOrDefault(d => d.Phone == loginRequest.Phone);
            if (donor == null || !VerifyPassword(loginRequest.Password, donor.Password))
            {
                return Unauthorized("Invalid phone or password.");
            }

            var token = GenerateJwtToken(donor.Phone, donor.Role);
            return Ok(new { Token = token, Message = "Login successful.", Role = donor.Role });
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


