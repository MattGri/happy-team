using FullStackApp.Server.Data;
using FullStackApp.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackApp.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UserContext _context;

        public LoginController(UserContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post([FromBody] LoginModel model)
        {

            var user = _context.RegisterModels.FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);

            if (user == null)
            {
                return NotFound("User not found");
            }

            user.IsLoggedIn = true;

            _context.SaveChanges();

            //return Ok();

            return Ok(new { UserId = user.Id });
        }
    }
}
