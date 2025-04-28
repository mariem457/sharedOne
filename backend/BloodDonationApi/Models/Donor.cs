namespace BloodDonationApi.Models
{
    public class Donor
    {
        public int Id { get; set; }

        public required string Name { get; set; }
        public required string Email { get; set; }

        public required string Phone { get; set; }
        public required string Password { get; set; }
        public required string ConfirmePassword { get; set; }  
        public string Role { get; set; } = "donor";  
        public DateTime BirthDate { get; set; }

    }
}


