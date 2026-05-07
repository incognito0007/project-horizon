public class OfficeDataProcessing
{
    public static void Run()
    {
        List<OfficeData> officeData = OfficeDataManager.GetOffices();

        officeData.ForEach(od => Console.WriteLine("ID: {0}, Name: {1}, Location: {2}", od.Id, od.Name, od.Location));

        var officeDataById = officeData.Where(od => od.Id > 3);
        Console.WriteLine("\nOffices with ID greater than 3:");
        officeDataById.ToList().ForEach(od => Console.WriteLine("ID: {0}, Name: {1}, Location: {2}", od.Id, od.Name, od.Location));
    }
}