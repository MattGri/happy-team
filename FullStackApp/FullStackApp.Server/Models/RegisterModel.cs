namespace FullStackApp.Server.Models
{
    public class RegisterModel
    {
        public int Id { get; set; }
        public required string Name { get; set; }

        public required string Email { get; set; }

        public required string Password { get; set; }

        public bool IsLoggedIn { get; set; }

    }
}
