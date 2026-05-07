using System.Runtime.CompilerServices;

public class AsynchronousProgram
{
    public static async Task RunAsynchronousTasks(string[] args)
    {
        Console.WriteLine("Running asynchronous tasks...");
        await Task.WhenAll(Task1(), Task2(), Task3());
        Console.WriteLine("All tasks completed.");
    }

    public static async Task Task1()
    {
        await Task.Run(() =>
        {
            Console.WriteLine("Task 1 started.");
            Thread.Sleep(4000); // Simulate work
            Console.WriteLine("Task 1 completed.");
        });
        
    }

    public static async Task Task2()
    {
        await Task.Run(() =>
        {
            Console.WriteLine("Task 2 started.");
            Thread.Sleep(2000); // Simulate work
            Console.WriteLine("Task 2 completed.");
        });
    }

    public static async Task Task3()
    {
        await Task.Run(() =>
        {
            Console.WriteLine("Task 3 started.");
            Thread.Sleep(3000); // Simulate work
            Console.WriteLine("Task 3 completed.");
        });
    }
}