using Microsoft.EntityFrameworkCore;
using BloodDonationApi.Models;

namespace BloodDonationApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Donor> Donors { get; set; }
        public DbSet<BloodBank> BloodBanks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuration de l'auto-incrémentation de l'ID Donor
            modelBuilder.Entity<Donor>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id)
                      .ValueGeneratedOnAdd(); 
            });

            
        }
    }
}
