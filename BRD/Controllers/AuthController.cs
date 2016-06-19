using BRD.Entities;
using BRD.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Security;


namespace BRD.Controllers
{
     [RoutePrefix("api/Account")]
    public class AuthController : ApiController
    {
         private BRDEntities brdcontext = new BRDEntities();
        [AllowAnonymous]
        [Route("Login")]
         public IHttpActionResult Login(Login login)
         {
            var IsAuth = brdcontext.Auth.Where(w => w.AuthName == login.username && w.AuthPassword == login.password).ToList();
            if(IsAuth.Count >0)
            {
                return Ok();
            }
            return BadRequest("Password ผิด");
         }
    }
}
