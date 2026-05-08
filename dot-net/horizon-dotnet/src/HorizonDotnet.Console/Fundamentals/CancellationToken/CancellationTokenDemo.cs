
public static class CancellationTokenDemo
{
    public static async Task Run()
    {
        // Step 1 — Create the source (the "cancel button")
        var cancellationTokenSource = new CancellationTokenSource();

        // Step 2 — Get the token from it (the "message")
        var cancellationToken = cancellationTokenSource.Token;

        // Step 3 — Start a long running task and pass the token to it
        var task = DoHeavyWorkAsync(cancellationToken);

        // Step 4 — Cancel after 3 seconds
        await Task.Delay(3000);
        Console.WriteLine("Requesting cancellation...");
        cancellationTokenSource.Cancel();

        // Step 5 — Wait and handle the cancellation gracefully
        try
        {
            await task;
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine(">>> Task was cancelled cleanly.");
        }
    }

    private static async Task DoHeavyWorkAsync(CancellationToken token)
    {
        Console.WriteLine("Work started...");

        for (int i = 1; i <= 10; i++)
        {
            // Check — "has anyone asked me to stop?"
            token.ThrowIfCancellationRequested();

            Console.WriteLine($"  Processing step {i} of 10...");

            // Simulate work — also pass token here so the delay
            // itself can be cancelled mid-wait
            await Task.Delay(1000, token);
        }

        Console.WriteLine("Work completed fully!");
    }
}