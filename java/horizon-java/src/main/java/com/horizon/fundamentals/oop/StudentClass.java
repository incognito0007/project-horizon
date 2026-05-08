package com.horizon.fundamentals.oop;
import java.util.Arrays;

public class StudentClass {
    public static void main(String[] args) {
        Students[] students = new Students[5];

        //Just declaring an array of students does not create student objects. We need to create student objects and assign them to the array.
        // Students student1; // This will give a null pointer exception because student1 is not initialized.

        System.out.println(Arrays.toString(students)); // This will print null because student1 is not initialized.
    }
}

class Students {
    int rollNo;
    String name;
    int marks;
}