public class Person: IPerson
{
    private IHome _home;
    private ISchool? _school; // Now we are creating an interface for the School class which is called IEducationalInstitution and we are implementing that interface in the School class and College class because both of them are educational institutions, this will reduce the coupling and increase the flexibility of the code because now we can inject any class that implements the IEducationalInstitution interface into the Person class without changing the Person class which is called dependency inversion principle

    private ICollege? _college; // Now we are creating an interface for the College class which is called ICollege and we are implementing that interface in the College class because it is a college, this will reduce the coupling and increase the flexibility of the code because now we can inject any class that implements the ICollege interface into the Person class without changing the Person class which is called dependency inversion principle

    // private Hospital _hospital; // Now we are not creating an instance of the Hospital class in the constructor of the Person class, instead we are injecting it through the method of the Person class which is called method injection

// this is called property injection because we are injecting the School class through the property of the Person class
    public ISchool School
    {
        set
        {
            _school = value;
        }
    }

    public ICollege College
    {
        set
        {
            _college = value;
        }
    }

    public Person (IHome home)
    {
        // highly coupling the Person class with Home, School and Hospital classes
        //any change in the Home, School or Hospital class will require a change in the Person class as well which increases the maintenance cost and reduces the flexibility of the code
        //Instead of this, we can do dependency injection to inject the Home, School and Hospital classes into the Person class which will reduce the coupling and increase the flexibility of the code

        // _home = new Home(); // this is called tight coupling because the Person class is tightly coupled with the Home class
        _home = home; // this is called loose coupling because the Person class is loosely coupled with the Home class and this is constructor injection because we are injecting the Home class through the constructor of the Person class

        // _school = new School(); // Now we are not creating an instance of the School class in the constructor of the Person class, instead we are injecting it through the property of the Person class which is called property injection

        // _hospital = new Hospital(); // Now we are not creating an instance of the Hospital class in the constructor of the Person class, instead we are injecting it through the method of the Person class which is called method injection
    }

    public void TakeRefugee()
    {
        _home.ProvideShelter(this);
    }

    public void Study()
    {
        if (_school != null)
       {    
        _school.Teach(this);
       }
       else
       {
        Console.WriteLine("The person is not enrolled in any school.");
       }
    }

    public void StudyInCollege()
    {
        if (_college != null)
       {    
        _college.Teach(this);
       }
       else
       {
        Console.WriteLine("The person is not enrolled in any college.");
       }
    }

    public void GetTreatment(IHospital hospital) // this is called method injection because we are injecting the Hospital class through the method of the Person class
    {
        hospital.Cure(this);
    }
}

// In the final commit --> 
// We are now using a dependency injection container called Autofac to manage the dependencies of the Person class and we are registering the dependencies in the ContainerConfiguration class and we are resolving the dependencies in the DemoApp class which will reduce the coupling and increase the flexibility of the code because now we can easily change the implementation of the dependencies without changing the Person class which is called dependency inversion principle