public class School: ISchool // Now we are creating an interface for the School class which is called IEducationalInstitution and we are implementing that interface in the School class and College class because both of them are educational institutions, this will reduce the coupling and increase the flexibility of the code because now we can inject any class that implements the IEducationalInstitution interface into the Person class without changing the Person class which is called dependency inversion principle
{
    public void Teach(Person person)
    {
        Console.WriteLine("Teaching the person in school.");
    }
}