using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Listing
    {
        public int Id { get; set; }
        public string ListingUrl { get; set; }
        public string ImageUrl  { get; set; }
        public string Title { get; set; }
        public int SellerId { get; set; }
        public decimal Price { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public string Status { get; set; }
    }

}