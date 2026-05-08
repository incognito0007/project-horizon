internal static class OfficeDataManager
{
    public static List<OfficeData> GetOffices()
    {
        return new List<OfficeData>
        {
            new OfficeData { Id = 1, Name = "Headquarters", Location = "New York" },
            new OfficeData { Id = 2, Name = "Branch Office", Location = "Los Angeles" },
            new OfficeData { Id = 3, Name = "Regional Office", Location = "Chicago" },
            new OfficeData { Id = 4, Name = "International Office", Location = "London" },
            new OfficeData { Id = 5, Name = "Remote Office", Location = "Remote" }
        };
    }
}