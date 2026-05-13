package com.horizon.fundamentals.oop.oopPackagesStaticSingletonClassInBuiltMethods.staticExample;

public class Human{
    String name;
    int age;
    int salary;
    boolean married;
    static long population; // static variable --> Independent of objects

    Human(String name, int age, int salary, boolean married) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.married = married;
        Human.population += 1; //No need to use this keyword here as it is a static variable, we will call this directly using class
    }
}