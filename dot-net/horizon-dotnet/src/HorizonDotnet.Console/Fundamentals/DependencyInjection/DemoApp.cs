public class DemoApp
{
    public static void Run(string[] args)
    {
        // creating an instance of the Home class
        Home home = new Home();
        // creating an instance of the Person class and injecting the Home class into the constructor of the Person class
        Person person = new Person(home);
        person.TakeRefugee();
        person.Study();
        person.GetTreatment();
    }
}