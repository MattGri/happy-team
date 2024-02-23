using FullStackApp.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace FullStackApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class CarController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<CarModel> Get()
        {
            return new List<CarModel>
            {
                new CarModel { Id = 1, CarName = "Model 3", CarTitle = "Corolla" },
                new CarModel { Id = 2, CarName = "Tesla Model X", CarTitle = "Camry" },
                new CarModel { Id = 3, CarName = "Tesla Model Y", CarTitle = "Prius" },
                new CarModel { Id = 4, CarName = "Model S", CarTitle = "Highlander" },
                new CarModel { Id = 5, CarName = "Cybertruck", CarTitle = "4Runner" },
                new CarModel { Id = 6, CarName = "Tesla Roadster", CarTitle = "Tacoma" },
                new CarModel { Id = 7, CarName = "Supercharger network", CarTitle = "Tundra" },
                new CarModel { Id = 8, CarName = "Tesla Semi", CarTitle = "Sienna" },
            };
        }
    }
}
