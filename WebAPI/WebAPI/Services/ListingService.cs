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
                            Status = (string)reader["status"],
                            History = reader["history"] as string,
                            LiveDead = reader["liveDead"] as string
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
                cmd.Parameters.AddWithValue("@history", request.History);
                cmd.Parameters.AddWithValue("@liveDead",request.LiveDead);

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;
            }
            
        }


        public Listing GetById(int id)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Listing_GetById";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", id);
                Listing listing = new Listing();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (!reader.Read())
                    {
                        return null;
                    }                    
                    listing.Id = (int)reader["id"];
                    listing.ListingUrl = reader["listingUrl"] as string;
                    listing.ImageUrl = reader["imageUrl"] as string;
                    listing.Title = reader["title"] as string;
                    listing.SellerId = (int)reader["sellerId"];
                    listing.Price = (decimal)reader["price"];
                    listing.DateCreated = (DateTime)reader["DateCreated"];
                    listing.DateModified = (DateTime)reader["DateModified"];
                    listing.Status = (string)reader["status"] as string;
                    listing.History = (string)reader["history"] as string;
                    listing.LiveDead = (string)reader["liveDead"] as string;
                }
                return listing;
            }
        }

        public PagedResponse<SearchListingResponse> Search(string searchString, int pageIndex, int pageSize, string status, string liveDead, int listId)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "Listing_Search";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@searchString", searchString);
                cmd.Parameters.AddWithValue("@pageIndex", pageIndex);
                cmd.Parameters.AddWithValue("@pageSize", pageSize);
                cmd.Parameters.AddWithValue("@status", status);
                cmd.Parameters.AddWithValue("@liveDead", liveDead);
                cmd.Parameters.AddWithValue("@listId", listId);

                using (var reader = cmd.ExecuteReader())
                {
                    PagedResponse<SearchListingResponse> pagedResponse = new PagedResponse<SearchListingResponse>();
                    List<SearchListingResponse> searchListingResponses = null;
                    // var listings = new List<Listing>();

                    while (reader.Read())
                    {
                        //this loop will happen once for every row
                        var searchListingResponse = new SearchListingResponse
                        {
                            Id = (int)reader["id"],
                            ListingUrl = (string)reader["listingUrl"],
                            ImageUrl = (string)reader["imageUrl"],
                            Title = (string)reader["title"],
                            SellerId = (int)reader["sellerId"],
                            Price = (decimal)reader["price"],
                            DateCreated = (DateTime)reader["DateCreated"],
                            DateModified = (DateTime)reader["DateModified"],
                            Status = (string)reader["status"],
                            History = reader["history"] as string,
                            LiveDead = reader["liveDead"] as string,
                            Host = reader["liveDead"] as string,
                            DmcaEmail = reader["dmcaEmail"] as string,
                            ListId = (int)reader["listId"]
                        };
                        searchListingResponses.Add(searchListingResponse);
                    }
                    pagedResponse.PagedItems = searchListingResponses;
                    return pagedResponse;
                }
            }  
        }








        public void Update(ListingUpdateRequest request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Listing_Update";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", request.Id);
                cmd.Parameters.AddWithValue("@ListingUrl", request.ListingUrl);
                cmd.Parameters.AddWithValue("@ImageUrl", request.ImageUrl);
                cmd.Parameters.AddWithValue("@Title", request.Title);
                cmd.Parameters.AddWithValue("@SellerId", request.SellerId);
                cmd.Parameters.AddWithValue("@Price", request.Price);
                cmd.Parameters.AddWithValue("@Status", request.Status);
                cmd.Parameters.AddWithValue("@history", request.History);
                cmd.Parameters.AddWithValue("@liveDead", request.LiveDead);

                cmd.ExecuteNonQuery();
            };
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