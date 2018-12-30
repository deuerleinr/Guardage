using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class ListingService : IListingService
    {
        public List<Listing> GetAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "Listing_GetAll";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var listings = new List<Listing>();

                    while (reader.Read())
                    {
                        //this loop will happen once for every row
                        var listing = new Listing
                        {
                            Id = (int)reader["id"],
                            ListingUrl = (string)reader["listingUrl"],
                            ImageUrl = (string)reader["imageUrl"],
                            Title = (string)reader["title"],
                            SellerId = (int)reader["sellerId"],
                            Price = (decimal)reader["price"],
                            DateCreated = (DateTime)reader["DateCreated"],
                            DateModified = (DateTime)reader["DateModified"],
                            Status = (string)reader["status"]
                        };
                        listings.Add(listing);
                    }
                    return listings;
                }

            }  // calls con.Dispose()  (because SqlConnection implements IDisposable)
        }

         


        public int Create(ListingCreate request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Listing_Create";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;
                cmd.Parameters.AddWithValue("@listingUrl", request.ListingUrl);
                cmd.Parameters.AddWithValue("@imageUrl", request.ImageUrl);
                cmd.Parameters.AddWithValue("@title", request.Title);
                cmd.Parameters.AddWithValue("@sellerId", request.SellerId);
                cmd.Parameters.AddWithValue("@price", request.Price);
                cmd.Parameters.AddWithValue("@status", request.Status);

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;
            }
            
        }






        // helper method to create and open a database connection
        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString);
            con.Open();
            return con;
        }

    }
}