using System.Collections.Generic;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface ISellerService
    {
        List<Seller> GetAll();
        int Create(SellerCreate reqeuest);
         
    }
}