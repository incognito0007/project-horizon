package com.horizon.fundamentals.oop.oopPackagesStaticSingletonClassInBuiltMethods;
import static com.horizon.fundamentals.oop.oopPackagesStaticSingletonClassInBuiltMethods.Message.message;

// Package - Package is just a folder which contains the classes. The only thing that you need to know here is you cannot create two classes with same name in one package

public class Greeting {
    public static void main(String[] args) {
        System.out.println("Lets understand packages");
        message(); // Calling static method from different class in same package
    }
}
