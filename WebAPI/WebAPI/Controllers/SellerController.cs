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
    [RoutePrefix("api/sellers")] 
    public class SellerController: ApiController
    {
        readonly ISellerService sellerService;

        public SellerController(ISellerService sellerService)
        {
            this.sellerService = sellerService;
        }
               
        [HttpPost, Route]
        public int Create(SellerCreate model)   
        {  
           return sellerService.Create(model);  
        }  

        [HttpGet, Route]
        public List<Seller> GetAll()
        {
            return sellerService.GetAll();
        }

    }
}

 
