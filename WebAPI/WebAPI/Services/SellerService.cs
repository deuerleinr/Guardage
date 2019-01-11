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
    public class SellerService : ISellerService
    {
        public List<Seller> GetAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Seller_GetAll";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var sellers = new List<Seller>();

                    while (reader.Read())
                    {
                        //this loop will happen once for every row
                        var seller = new Seller
                        {
                            Id = (int)reader["id"],
                            Host = reader["host"] as string,
                            DmcaEmail = reader["dmcaEmail"] as string,
                            ListId =(int)reader["listId"],
                            OtherEmail = reader["otherEmail"] as string,
                            Phone = reader["phone"] as string,
                            Street = reader["street"] as string,
                            Street2 = reader["street2"] as string,
                            City = reader["city"] as string,
                            State = reader["state"] as string,
                            PostalCode = reader["postalCode"] as string,
                            Country = reader["country"] as string,
                            DateCreated = (DateTime) reader ["DateCreated"],
                            DateModified = (DateTime) reader ["DateModified"],                                                       
                        };
                        sellers.Add(seller);
                    }
                    return sellers;
                }
            }
        }



        public int Create(SellerCreate request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                
                cmd.CommandText = "Seller_Create";                
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;
                cmd.Parameters.AddWithValue("@host", request.Host);
                cmd.Parameters.AddWithValue("@dmcaEmail", request.DmcaEmail);
                cmd.Parameters.AddWithValue("@listId", request.ListId);
                cmd.Parameters.AddWithValue("@otherEmail", request.OtherEmail);
                cmd.Parameters.AddWithValue("@phone", request.Phone);
                cmd.Parameters.AddWithValue("@street", request.Street);
                cmd.Parameters.AddWithValue("@street2", request.Street2);
                cmd.Parameters.AddWithValue("@city", request.City);
                cmd.Parameters.AddWithValue("@state", request.State);
                cmd.Parameters.AddWithValue("@postalCode", request.PostalCode);
                cmd.Parameters.AddWithValue("@country", request.Country);

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;
            }

        }

         





















        //helper method to create and open a database connection
        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString);
            con.Open();
            return con;
        }


    }
}