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
    public class LoginService
    {
        
        public List<LoginResult> GetAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "User_GetAll";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var loginResults = new List<LoginResult>();

                    while (reader.Read())
                    {
                        var loginResult = new LoginResult
                        {
                            Id = (int)reader["id"],
                            Email = (string)reader["email"],
                            PasswordHash = (string)reader["passwordHash"],
                            DateCreated = (DateTime)reader["DateCreated"],
                            DateModified = (DateTime)reader ["DateModified"],
                            IsAdmin = (bool)reader["isAdmin"]
                        };

                        loginResults.Add(loginResult);
                    }
                    return loginResults;
                }
            }
        }


        public int Create(LoginCreate request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "User_Create";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@email", request.Email);
                cmd.Parameters.AddWithValue("@passwordHash", request.PasswordHash);
                cmd.Parameters.AddWithValue("@isAdmin", request.IsAdmin);
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

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