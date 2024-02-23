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
                new CarModel { Id = 1, CarName = "Model 3", CarImage = "https://digitalassets-secure.tesla.com/image/upload/v1693299003/y3owuyq6ex5uqtygbhm8.jpg"},
                new CarModel { Id = 2, CarName = "Tesla Model X", CarImage = "https://images.prismic.io/carwow/c340a77d-af56-4562-abfb-bd5518ccb292_2023+Tesla+Model+X+front+quarter+moving.jpg"},
                new CarModel { Id = 3, CarName = "Tesla Model Y", CarImage = "https://ocdn.eu/pulscms-transforms/1/lF0k9kpTURBXy8wNWZiN2YzZDFhNDZkMTg5NmFkNDI2ZGI4MGQ1NGQ5Yi5qcGeSlQPNBabNA6zNGfjNDp-TBc0EsM0CpN4AAqEwBaExAA"},
                new CarModel { Id = 4, CarName = "Model S", CarImage = "https://i.wpimg.pl/1280x/m.autokult.pl/tesla-model-s-2017-1280--e0d200f.jpg"},
                new CarModel { Id = 5, CarName = "Cybertruck", CarImage = "https://elektrowoz.pl/wp-content/uploads/2023/09/Cybertruck-Tesla.jpg"},
                new CarModel { Id = 6, CarName = "Tesla Roadster", CarImage = "https://lh3.googleusercontent.com/proxy/hJs1tVGN93rfuFQ31LHu8CAex-Dffaauhoa-yg6c5U74KWl6Mh1Byzkx04-cS_T4WmGYJ0Lo4N4j95h3OcqJ0mPUpRaPVl44AW1xj26YJMkW5dMa7X_R8VtLmODP8Ho0YxpMik5LI2U"},
            };
        }
    }
}
