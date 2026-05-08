internal class Employee
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Department { get; set; }
    public int Age { get; set; }
    public int Salary { get; set; }
}

internal class Student
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int Age { get; set; }
    public double Grade { get; set; }
}

internal static class EmployeeDataManager
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

internal static class StudentDataManager
{
    static public List<Student> GetStudents()
    {
        return new List<Student>
        {
            new Student { Id = 1, FirstName = "Alice", LastName = "Brown", Age = 20, Grade = 3.5 },
            new Student { Id = 2, FirstName = "Bob", LastName = "Green", Age = 22, Grade = 3.8 },
            new Student { Id = 3, FirstName = "Charlie", LastName = "White", Age = 19, Grade = 3.2 },
            new Student { Id = 4, FirstName = "Diana", LastName = "Black", Age = 21, Grade = 3.9 },
            new Student { Id = 5, FirstName = "Ethan", LastName = "Gray", Age = 23, Grade = 3.4 },
            new Student { Id = 6, FirstName = "Fiona", LastName = "Blue", Age = 20, Grade = 3.7 },
            new Student { Id = 7, FirstName = "George", LastName = "Yellow", Age = 22, Grade = 3.6 },
            new Student { Id = 8, FirstName = "Hannah", LastName = "Purple", Age = 19, Grade = 3.3 },
            new Student { Id = 9, FirstName = "Ian", LastName = "Orange", Age = 21, Grade = 3.8 },
            new Student { Id = 10, FirstName = "Julia", LastName = "Pink", Age = 23, Grade = 3.5 },
            new Student { Id = 11, FirstName = "Kevin", LastName = "Red", Age = 20, Grade = 3.4 },
            new Student { Id = 12, FirstName = "Laura", LastName = "Cyan", Age = 22, Grade = 3.9 }
        };
    }
}

public class LinqExercises
{
    public static void Run()
    {
        List<Employee> employees = EmployeeDataManager.GetEmployees();

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

        List<Student> students = StudentDataManager.GetStudents();

        // Exercise 6: Get all students using linq
        Console.WriteLine("\nAll Students:");
        students.ForEach(s => Console.WriteLine("ID: {0}, Name: {1} {2}, Age: {3}, Grade: {4}", s.Id, s.FirstName, s.LastName, s.Age, s.Grade));

        // Exercise 7: Get all students with grade above 3.5
        var highGradeStudents = students.Where(s => s.Grade > 3.5);
        Console.WriteLine("\nStudents with Grade above 3.5:");
        highGradeStudents.ToList().ForEach(s => Console.WriteLine("ID: {0}, Name: {1} {2}, Age: {3}, Grade: {4}", s.Id, s.FirstName, s.LastName, s.Age, s.Grade));

        // Exercise 8: Get all students Last Names
        var studentLastNames = students.Select(s => s.LastName);
        Console.WriteLine("\nStudent Last Names:");
        studentLastNames.ToList().ForEach(name => Console.WriteLine(name));

        // Exercise 9: Group By Grade with a range of 3.0 to 3.3, 3.3 to 3.6 and 3.6 to 4.0
        var groupedByGrade = students.GroupBy(s => 
        {
            if (s.Grade >= 3.0 && s.Grade < 3.3) return "3.0 - 3.3";
            else if (s.Grade >= 3.3 && s.Grade < 3.6) return "3.3 - 3.6";
            else if (s.Grade >= 3.6 && s.Grade <= 4.0) return "3.6 - 4.0";
            else return "Other";
        });
        Console.WriteLine("\nStudents Grouped by Grade:");
        foreach (var group in groupedByGrade)
        {
            Console.WriteLine("Grade Range: {0}", group.Key);
            foreach (var student in group)
            {
                Console.WriteLine("ID: {0}, Name: {1} {2}, Age: {3}, Grade: {4}", student.Id, student.FirstName, student.LastName, student.Age, student.Grade);
            }
        }
    }
}