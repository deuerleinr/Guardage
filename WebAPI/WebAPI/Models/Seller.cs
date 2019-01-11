using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Seller
    {
        public int Id { get; set; }
        public string Host { get; set; }
        public string DmcaEmail { get; set; }        
        public int ListId { get; set; }
        public string OtherEmail { get; set; }
        public string Phone { get; set; }
        public string Street { get; set; }
        public string Street2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }  
    }
}