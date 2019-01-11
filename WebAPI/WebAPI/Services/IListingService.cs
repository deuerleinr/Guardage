using System.Collections.Generic;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface IListingService
    {
        int Create(ListingCreate request);
        List<Listing> GetAll();
        Listing GetById(int id);
        void Update(ListingUpdateRequest request);
    }
}