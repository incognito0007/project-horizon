using Autofac;
public class ContainerConfiguration
{
    public static IContainer Configure()
    {
        ContainerBuilder builder = new ContainerBuilder();
        builder.RegisterType<Person>().As<IPerson>();
        builder.RegisterType<Home>().As<IHome>();
        builder.RegisterType<Hospital>().As<IHospital>();
        builder.RegisterType<School>().As<ISchool>();
        builder.RegisterType<College>().As<ICollege>();
        return builder.Build();
    }
}
