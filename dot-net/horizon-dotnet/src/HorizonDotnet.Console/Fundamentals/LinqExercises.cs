internal class Employee
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Department { get; set; }
    public int Age { get; set; }
    public int Salary { get; set; }
}

internal static class DataManager
{
    public static List<Employee> GetEmployees()
    {
        return new List<Employee>
        {
            new Employee { Id = 1, FirstName = "John", LastName = "Doe", Department = "IT", Age = 30, Salary = 60000 },
            new Employee { Id = 2, FirstName = "Jane", LastName = "Smith", Department = "HR", Age = 25, Salary = 50000 },
            new Employee { Id = 3, FirstName = "Michael", LastName = "Johnson", Department = "IT", Age = 35, Salary = 70000 },
            new Employee { Id = 4, FirstName = "Emily", LastName = "Davis", Department = "Finance", Age = 28, Salary = 55000 },
            new Employee { Id = 5, FirstName = "David", LastName = "Wilson", Department = "HR", Age = 32, Salary = 52000 }
        };
    }
}

public class LinqExercises
{
    public static void Run()
    {
        List<Employee> employees = DataManager.GetEmployees();

        // Exercise 1: Get all employees using linq
        employees.ForEach(e => Console.WriteLine("ID: {0}, Name: {1} {2}, Department: {3}, Age: {4}, Salary: {5}", e.Id, e.FirstName, e.LastName, e.Department, e.Age, e.Salary));

        // Exercise 2: Get all employees from the IT department
        var itEmployees = employees.Where(e => e.Department == "IT");
        Console.WriteLine("\nEmployees in IT Department:");
        itEmployees.ToList().ForEach(e => Console.WriteLine("ID: {0}, Name: {1} {2}, Age: {3}, Salary: {4}", e.Id, e.FirstName, e.LastName, e.Age, e.Salary));

        // Exercise 3: Get all employees First Names
        var employeeFirstnames = employees.Select(e => e.FirstName);
        Console.WriteLine("\nEmployee First Names:");
        employeeFirstnames.ToList().ForEach(name => Console.WriteLine(name));

        // Exercise 4: Group By Department
        var groupedByDepartment = employees.GroupBy(e => e.Department);
        Console.WriteLine("\nEmployees Grouped by Department:");
        foreach (var group in groupedByDepartment)        {
            Console.WriteLine("Department: {0}", group.Key);
            foreach (var employee in group)
            {
                Console.WriteLine("ID: {0}, Name: {1} {2}, Age: {3}, Salary: {4}", employee.Id, employee.FirstName, employee.LastName, employee.Age, employee.Salary);
            }
        }

        // Exercise 5: Refresh the list of employees by adding a new employee to the list
        employees.Add(new Employee { Id = 6, FirstName = "Sarah", LastName = "Miller", Department = "Finance", Age = 29, Salary = 58000 });
        Console.WriteLine("\nUpdated Employee List:");
        employees.ForEach(e => Console.WriteLine("ID: {0}, Name: {1} {2}, Department: {3}, Age: {4}, Salary: {5}", e.Id, e.FirstName, e.LastName, e.Department, e.Age, e.Salary));
    }
}