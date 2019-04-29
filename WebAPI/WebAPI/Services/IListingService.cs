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
        void Delete(int id);
        PagedResponse <Listing> Search(string searchString, int pageIndex, int pageSize, string nonList, string whiteList, string blackList, string prevNone, string prevTakeDown, string prevNotMyProperty, string prevApproved, string prevIgnore, string liveUrl, string deadUrl);
    }
}