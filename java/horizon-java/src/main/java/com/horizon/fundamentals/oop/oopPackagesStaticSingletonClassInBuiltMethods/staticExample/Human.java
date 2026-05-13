package com.horizon.fundamentals.oop.oopPackagesStaticSingletonClassInBuiltMethods.staticExample;

public class Human{
    String name;
    int age;
    int salary;
    boolean married;
    long population;

    Human(String name, int age, int salary, boolean married) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.married = married;
        this.population += 1;
    }
}