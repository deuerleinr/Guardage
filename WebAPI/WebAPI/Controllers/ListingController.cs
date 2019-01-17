using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
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
        readonly EmailService emailService;

        public ListingController(IListingService listingService, EmailService emailService)
        {
            this.listingService = listingService;
            this.emailService = emailService;
        }

          [HttpGet, Route]
           public List<Listing> GetAll()
          {
             return listingService.GetAll();
            }

        


        // [HttpGet, Route("search/{pageIndex:int}/{pageSize:int}")]  
        // public PagedResponse<Listing> Search(int pageIndex, int pageSize, string q)

        [HttpGet, Route("search/")]
        public PagedResponse<Listing> Search (string q, int pageIndex, int pageSize, string nonList, string whiteList, string blackList, string prevNone, string prevTakeDown, string prevNotMyProperty, string prevApproved, string prevIgnore )             
        {
            return listingService.Search(q, pageIndex, pageSize, nonList, whiteList, blackList, prevNone, prevTakeDown, prevNotMyProperty, prevApproved, prevIgnore);
        }








    [HttpGet, Route("{id:int}")]
        public Listing GetById(int id)         
        {
            return listingService.GetById(id);
        }               

        [HttpPost, Route]
        public int Create(ListingCreate model)
        {
            return listingService.Create(model);
        }

        [HttpPut, Route ("{id:int}")]
        public void Update(ListingUpdateRequest model)
        {
            listingService.Update(model);
        }
         
        [HttpPost, Route ("email")]
        public async Task SendEmailDemo(Email model)
        {
            // sends the email                      
            await emailService.Execute(model.InfringingHost, model.InfringingUrl, model.InfringingEmail);
        }
    }
}