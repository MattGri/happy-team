using FullStackApp.Server.Data;
using FullStackApp.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FullStackApp.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CarReservationController : ControllerBase
    {
        private readonly UserContext _context;

        public CarReservationController(UserContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post([FromBody] CarReservationModel model)
        {
            _context.CarReservationModels.Add(model);
            _context.SaveChanges();
            return Ok(model);
        }

        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {
            var userReservations = _context.CarReservationModels.Where(r => r.UserId == userId).ToList();
            return Ok(userReservations);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var reservation = _context.CarReservationModels.FirstOrDefault(r => r.Id == id);
            if (reservation == null)
            {
                return NotFound();
            }
            _context.CarReservationModels.Remove(reservation);
            _context.SaveChanges();
            return NoContent();
        }

    }
}
