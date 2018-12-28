using System.Collections.Generic;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface IListingService
    {
        int Create(ListingCreate request);
        List<Listing> GetAll();
    }
}