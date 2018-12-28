using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using WebAPI.Models;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/listings")]
    public class ListingController: ApiController
    {
        readonly ListingService listingService = new ListingService();

        [HttpGet, Route]
        public List<Listing> GetAll()
        {
            return listingService.GetAll();
        }

        [HttpPost, Route]
        public int Create(ListingCreate model)
        {
            return listingService.Create(model);
        }
              
    }
}