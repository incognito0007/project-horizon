public class SynchronousProgram
{
    public static void RunSynchronousTasks(string[] args)
    {
        Console.WriteLine("Running synchronous tasks...");
        Task1();
        Task2();
        Task3();
    }

    public static void Task1()
    {
        Console.WriteLine("Task 1 started.");
        Thread.Sleep(4000); // Simulate work
        Console.WriteLine("Task 1 completed.");
    }

    public static void Task2()
    {
        Console.WriteLine("Task 2 started.");
        Thread.Sleep(2000); // Simulate work
        Console.WriteLine("Task 2 completed.");
    }

    public static void Task3()
    {
        Console.WriteLine("Task 3 started.");
        Thread.Sleep(3000); // Simulate work
        Console.WriteLine("Task 3 completed.");
    }
}