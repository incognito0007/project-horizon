namespace HorizonDotnet.Tests;

public class SampleTests
{
    [Fact]
    public void TrueIsTrue()
    {
        Assert.True(true);
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(5, 5, 10)]
    public void AdditionWorks(int a, int b, int expected)
    {
        Assert.Equal(expected, a + b);
    }
}