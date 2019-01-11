using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Email
    {
        public string InfringingHost { get; set; }
        public string InfringingUrl { get; set; }
        public string InfringingEmail { get; set; }
    }
}