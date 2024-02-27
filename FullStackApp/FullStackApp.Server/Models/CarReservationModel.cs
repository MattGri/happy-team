namespace FullStackApp.Server.Models
{
    public class CarReservationModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public required string CarPlace { get; set; }
        public required string StartDate { get; set; }
        public required string EndDate { get; set; }
        public int CarPrices { get; set; }
        public int CarDay { get; set; }
        public required string CarNames { get; set; }
        public required string CarImages { get; set; }
    }
}
