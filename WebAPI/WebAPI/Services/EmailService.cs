using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Configuration;
using Newtonsoft.Json.Linq;
using System.Net;
using System.Reflection;
using System.IO;
using System.Web;

namespace WebAPI.Services
{
    public class EmailService
    {
        string LoadTemplate(string name)
        {
            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("WebAPI.Services." + name))
            using (var sr = new StreamReader(stream))
                return sr.ReadToEnd();
        }

        public async Task Execute(string infringingHost, string infringingUrl, string infringingEmail)
        {

            var apiKey = ConfigurationManager.AppSettings["SENDGRID_API_KEY"];
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("Rodger.Deuerlein@gmail.com", "Rodger Deuerlein");
            // var to = new EmailAddress(infringingEmail);
            // hardcoding recipient email addresss to r deuerlein during app construction
            var to = new EmailAddress("rodger.deuerlein@gmail.com", "Rodger Deuerlein");
            var cc = new EmailAddress("Rodger.Deuerlein@gmail.com", "Rodger Deuerlein");
            var domainUrl = ConfigurationManager.AppSettings["SiteUrlOrigin"];
            var subject = "DMCA Infringement Notice";

            // This loads the template and does the substitutions:
            string template = LoadTemplate("TakeDownEmailTemplate.html");
            template = template.Replace("$$INFRINGINGHOST$$", HttpUtility.HtmlEncode(infringingHost));
            template = template.Replace("$$INFRINGINGURL$$", HttpUtility.HtmlEncode(infringingUrl));
            //template = template.Replace("$$DOMAINURL$$", HttpUtility.HtmlEncode(domainUrl));
            var plainTextcontent = template;
            var htmlContent = template;

            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextcontent, htmlContent);

            Response response = await client.SendEmailAsync(msg).ConfigureAwait(false);
            bool success = (int)response.StatusCode >= 200 && (int)response.StatusCode < 300;
            if (!success)
                throw new ApplicationException("Error sending email");
        }
    }
}