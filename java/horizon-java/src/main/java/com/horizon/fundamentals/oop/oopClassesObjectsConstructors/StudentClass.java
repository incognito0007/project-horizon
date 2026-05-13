package com.horizon.fundamentals.oop;
import java.util.Arrays;

public class StudentClass {
    public static void main(String[] args) {
        // Students[] students = new Students[5];

        //Just declaring an array of students does not create student objects. We need to create student objects and assign them to the array.
        // Students student1; // This will give a null pointer exception because student1 is not initialized.

        Students student1 = new Students();
        System.out.println(student1); // This will print the reference of the student1 object because it is not initialized. It will print something like com.horizon.fundamentals.oop.Students@15db9742
        System.out.println(student1.rollNo); // This will print 0 because rollNo is an int and it is initialized to 0 by default.
        System.out.println(student1.name); // This will print null because name is a String and it is initialized to null by default.
        System.out.println(student1.marks); // This will print 0 because marks is an int and it is initialized to 0 by default.  --> This will print 70 because marks is now initialized to 70.
        
        Students student2 = new Students();
        student2.rollNo = 2;
        student2.name = "Alice";
        student2.marks = 90;
        System.out.println(student2.rollNo); // This will print 2
        System.out.println(student2.name); // This will print Alice
        System.out.println(student2.marks); // This will print 90

        Students student3 = new Students();
        student3.rollNo = 3;
        student3.name = "Bob";
        System.out.println(student3.rollNo); // This will print 3
        System.out.println(student3.name); // This will print Bob
        System.out.println(student3.marks); // This will print 70 because marks is initialized to 70.

        // System.out.println(Arrays.toString(students)); // This will print null because student1 is not initialized.
    }
}

class Students {
    int rollNo;
    String name;
    int marks = 70; // We can also initialize the marks variable to a default value of 70.
}