public class Person
{
    private Home _home;
    private School _school;
    private Hospital _hospital;

    public Person ()
    {
        // highly coupling the Person class with Home, School and Hospital classes
        //any change in the Home, School or Hospital class will require a change in the Person class as well which increases the maintenance cost and reduces the flexibility of the code
        _home = new Home();
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