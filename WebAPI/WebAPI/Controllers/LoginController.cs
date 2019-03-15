using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using WebAPI.Models;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        readonly LoginService loginService = new LoginService();

        [HttpGet, Route]
        public List<LoginResult> GetAll()
        {
            return loginService.GetAll();
        }

        [HttpPost, Route]
        public int Create(LoginCreate model)
        {
            return loginService.Create(model);
        }


    }
}