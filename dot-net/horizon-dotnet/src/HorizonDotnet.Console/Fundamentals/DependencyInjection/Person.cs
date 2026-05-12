public class Person
{
    private Home _home;
    private School _school;
    private Hospital _hospital;

    public Person (Home home)
    {
        // highly coupling the Person class with Home, School and Hospital classes
        //any change in the Home, School or Hospital class will require a change in the Person class as well which increases the maintenance cost and reduces the flexibility of the code
        //Instead of this, we can do dependency injection to inject the Home, School and Hospital classes into the Person class which will reduce the coupling and increase the flexibility of the code
        // _home = new Home(); // this is called tight coupling because the Person class is tightly coupled with the Home class
        _home = home; // this is called loose coupling because the Person class is loosely coupled with the Home class and this is constructor injection because we are injecting the Home class through the constructor of the Person class
        _school = new School();
        _hospital = new Hospital();
    }

    public void TakeRefugee()
    {
        _home.ProvideShelter(this);
    }

    public void Study()
    {
        _school.Teach(this);
    }

    public void GetTreatment()
    {
        _hospital.Cure(this);
    }
}