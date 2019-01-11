using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class ListingCreate
    {
        [Required]
        public string ListingUrl { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        [Required]
        public int SellerId { get; set; }
        public decimal Price { get; set; }     
        public string Status { get; set; }
        public string History { get; set; }
        public string LiveDead { get; set; }

    }
}