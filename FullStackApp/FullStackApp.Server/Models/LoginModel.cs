using System.ComponentModel.DataAnnotations;

namespace FullStackApp.Server.Models
{
    public class LoginModel
    {
        public required string Email { get; set; }

        public required string Password { get; set; }
    }
}
