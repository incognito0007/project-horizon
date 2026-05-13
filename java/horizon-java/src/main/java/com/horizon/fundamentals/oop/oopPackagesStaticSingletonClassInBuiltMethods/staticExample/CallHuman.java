package com.horizon.fundamentals.oop.oopPackagesStaticSingletonClassInBuiltMethods.staticExample;

public class CallHuman {
    public static void main(String[] args) {
        Human human1 = new Human("Ankit", 24, 10000, true);
        System.out.println("Name: " + human1.name + " Age: " + human1.age + " Salary: " + human1.salary + " Married: " + human1.married);
        System.out.println("Population: " + Human.population); // Static variable is shared by all objects thats why we can access it directly using class

        Human human2 = new Human("Anand", 26, 12000, false);
        System.out.println("Name: " + human2.name + " Age: " + human2.age + " Salary: " + human2.salary + " Married: " + human2.married);
        System.out.println("Population: " + Human.population); // Static variable is shared by all objects thats why we can access it directly using class
    }
}
