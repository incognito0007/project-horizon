public class DemoApp
{
    public static void Run(string[] args)
    {
        // creating an instance of the Home class
        Home home = new Home();
        // creating an instance of the Person class and injecting the Home class into the constructor of the Person class
        Person person = new Person(home);
        person.TakeRefugee();

        // creating an instance of the School class
        person.School = new School(); // this is called property injection because we are injecting the School class through the property of the Person class
        person.Study();
        
        person.GetTreatment(new Hospital()); // this is called method injection because we are injecting the Hospital class through the method of the Person class
    }
}