package com.horizon.fundamentals.oop;

public class UnderstandingConstructor{
    public static void main(String[] args) {
        StudentConstructor student1 = new StudentConstructor(); // When we create an object of the StudentConstructor class, the constructor is called and the object is initialized with the values defined in the constructor.
        System.out.println("Roll No: " + student1.rollNo + ", Name: " + student1.name + ", Marks: " + student1.marks); // This will print Roll No: 12, Name: Ankit, Marks: 70 because the constructor initializes the object with these values.

        // We can also create an object of the StudentConstructor class using the parameterized constructor to initialize the object with different values.
        StudentConstructor student2 = new StudentConstructor(2, "Alice", 90);
        System.out.println("Roll No: " + student2.rollNo + ", Name: " + student2.name + ", Marks: " + student2.marks); // This will print Roll No: 2, Name: Alice, Marks: 90 because the parameterized constructor initializes the object with these values.
    }
}

class StudentConstructor{
    int rollNo;
    String name;
    int marks;

    // Constructor
    // A constructor is a special method that is called when an object is created. It is used to initialize the object. The name of the constructor is the same as the name of the class and it does not have a return type.
    StudentConstructor() { // this constructor will initialized when we create an object of the StudentConstructor class without passing any parameters.
        this.rollNo = 12;
        this.name = "Ankit";
        this.marks = 70;
    }

    // We can also use parameterized constructor to initialize the object with different values.
    StudentConstructor(int rollNo, String name, int marks) { // this constructor will initialized when we create an object of the StudentConstructor class by passing parameters.
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
    }
}