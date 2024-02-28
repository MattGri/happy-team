using FullStackApp.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using FullStackApp.Server.Data;

namespace FullStackApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarController : ControllerBase

    {
        private readonly UserContext _context;

        public CarController(UserContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IEnumerable<CarModel> Get()
        {

            return _context.CarModels.ToList();
        }


    }
}
