using FullStackApp.Server.Models;
using Microsoft.EntityFrameworkCore;
namespace FullStackApp.Server.Data;


public class UserContext : DbContext
{
    public DbSet<RegisterModel> RegisterModels { get; set; }

    public UserContext(DbContextOptions options) : base(options)
    {

    }

}


