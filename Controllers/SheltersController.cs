using Microsoft.AspNetCore.Mvc;
using System.Data;
using Microsoft.VisualBasic.FileIO;
using Newtonsoft.Json;

namespace ReactHomeless.Controllers;

[ApiController]
[Route("[controller]")]
public class SheltersController : ControllerBase
{

    string filepath = "D:\\Sites\\reactHomeless\\controllers\\Shelterinfo.csv";
    private readonly ILogger<Shelters> _logger;

    public SheltersController(ILogger<Shelters> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Shelters> Get()
    {
        string jsonString = ReadCSVFile(filepath);
        //movieList = (JsonConvert.SerializeObject <(List<MovieCatalogModel>)> (jsonString));
        List<Shelters> shelters = JsonConvert.DeserializeObject<List<Shelters>>(jsonString);

        return shelters;
        // return Enumerable.Range(1, 5).Select(index => new Shelters
        // {
        //     Name = "hi",
        //     Type = "",
        //     Info = "",
        //     TypeOfHousing = "",
        //     Address = "",
        //     LengthOfStay = "",

        //     Phone = ""
        // })
        // .ToArray();
    }
    private static string ReadCSVFile(string csv_file_path)
    {
        DataTable csvData = new DataTable();
        string jsonString = string.Empty;
        try
        {
            using (TextFieldParser csvReader = new TextFieldParser(csv_file_path))
            {
                csvReader.SetDelimiters(new string[] { "," });
                csvReader.HasFieldsEnclosedInQuotes = true;
                string[] colFields;
                bool tableCreated = false;
                while (tableCreated == false)
                {
                    colFields = csvReader.ReadFields();
                    foreach (string column in colFields)
                    {
                        DataColumn datecolumn = new DataColumn(column);
                        datecolumn.AllowDBNull = true;
                        csvData.Columns.Add(datecolumn);
                    }
                    tableCreated = true;
                }
                while (!csvReader.EndOfData)
                {
                    csvData.Rows.Add(csvReader.ReadFields());
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return "Error:Parsing CSV";
        }
        //if everything goes well, serialize csv to json 
        jsonString = JsonConvert.SerializeObject(csvData);

        return jsonString;
    }
}