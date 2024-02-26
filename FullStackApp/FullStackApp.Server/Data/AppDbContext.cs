using FullStackApp.Server.Models;
using Microsoft.EntityFrameworkCore;
namespace FullStackApp.Server.Data;


public class UserContext : DbContext
{
    public UserContext()
    {

    }
    public UserContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<CarModel> CarModels { get; set; }
    public DbSet<RegisterModel> RegisterModels { get; set; }
    public DbSet<CarReservationModel> CarReservationModels { get; set; }



}


