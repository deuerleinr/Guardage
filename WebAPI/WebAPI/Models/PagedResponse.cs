using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class PagedResponse<TItem>
    {
        public int TotalCount { get; set; }
        public List<Listing> PagedItems { get; set; }
    }

}