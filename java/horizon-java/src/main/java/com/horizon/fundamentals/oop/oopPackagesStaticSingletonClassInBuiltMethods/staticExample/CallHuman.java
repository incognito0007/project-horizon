package com.horizon.fundamentals.oop.oopPackagesStaticSingletonClassInBuiltMethods.staticExample;

public class CallHuman {
    public static void main(String[] args) {
        Human human1 = new Human("Ankit", 24, 10000, true);
        System.out.println("Name: " + human1.name + " Age: " + human1.age + " Salary: " + human1.salary + " Married: " + human1.married);
        System.out.println("Population: " + human1.population);

        Human human2 = new Human("Anand", 26, 12000, false);
        System.out.println("Name: " + human2.name + " Age: " + human2.age + " Salary: " + human2.salary + " Married: " + human2.married);
        System.out.println("Population: " + human2.population);
    }
}
