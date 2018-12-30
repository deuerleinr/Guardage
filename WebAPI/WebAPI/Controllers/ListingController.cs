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
        readonly IListingService listingService;

        public ListingController(IListingService listingService)
        {
            this.listingService = listingService;

        }

        [HttpGet, Route]
        public List<Listing> GetAll()
        {
            return listingService.GetAll();
        }


        //GET BY ID ---------------------------------------
        //[HttpGet, Route("{id:int}")]
       // public List<Listing> GetById(int id)
         
       // {
        //    return listingService.GetById();
       // }





        [HttpPost, Route]
        public int Create(ListingCreate model)
        {
            return listingService.Create(model);
        }
              
    }
}