using Autofac;

public class DemoApp
{
    public static void Run(string[] args)
    {
        // // creating an instance of the Home class
        // Home home = new Home();
        // // creating an instance of the Person class and injecting the Home class into the constructor of the Person class
        // Person person = new Person(home);
        // person.TakeRefugee();

        // // creating an instance of the School class
        // person.School = new School(); // this is called property injection because we are injecting the School class through the property of the Person class
        // person.Study();
        // person.School = new College(); // this is called property injection because we are injecting the College class through the property of the Person class
        // person.Study();
        
        // person.GetTreatment(new Hospital()); // this is called method injection because we are injecting the Hospital class through the method of the Person class

        var container = ContainerConfiguration.Configure();
        using(var scope = container.BeginLifetimeScope())
        {
            IPerson person = scope.Resolve<IPerson>();
            person.TakeRefugee();
            person.School = scope.Resolve<ISchool>(); // Cooment this line to see the effect of not injecting the School class into the Person class, output will be "The person is not enrolled in any school."
            person.Study();
            person.College = scope.Resolve<ICollege>(); // Cooment this line to see the effect of not injecting the College class into the Person class, output will be "The person is not enrolled in any college."
            person.StudyInCollege();
            person.GetTreatment(scope.Resolve<IHospital>());
        }
    }
}