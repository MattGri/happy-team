namespace FullStackApp.Server.Models
{
    public class CarModel
    {
        public int Id { get; set; }

        public required string CarImage { get; set; }

        public required string CarName { get; set; }

        public required int CarPrice { get; set; }

        public required List<string> CarLocation { get; set; }

    }
}
