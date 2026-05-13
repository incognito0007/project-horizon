package com.horizon.fundamentals.oop;

public class UnderstandingClass{
    public static void main(String[] args) {
        // Store 5 roll nos
        int[] rollNos = new int[5];

        // Store 5 names
        String[] names = new String[5];

        // data of 5 students: {roll no, name, marks}
        int[] marks = new int[5];

        // This is not a good way to store data of students. We can create a class to represent a student and store the data in an object of that class.

        Student student1 = new Student();
        student1.rollNos = 1;
        student1.names = "John";
        student1.marks = 85;

        System.out.println("Roll No: " + student1.rollNos);
        System.out.println("Name: " + student1.names);
        System.out.println("Marks: " + student1.marks);
    }
}

//creating a class to represent a student
class Student{
    int rollNos;
    String names;
    int marks;
}