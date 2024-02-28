using FullStackApp.Server.Data;
using FullStackApp.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace FullStackApp.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly UserContext _context;

        public RegisterController(UserContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post([FromBody] RegisterModel model)
        {

            var userEmail = model.Email;

            var existingUser = _context.RegisterModels.FirstOrDefault(x => x.Email == userEmail);

            if (existingUser != null)
            {

                return Conflict("User using that email already exists");
            }

            _context.RegisterModels.Add(model);
            _context.SaveChanges();
            return Ok(model);
        }

    }
}
