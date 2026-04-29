package com.horizon.basics;

public class PrimitiveDatatype {
    public static void main(String[] args) {

        // Primitive data types in Java include:
        // byte, short, int, long, float, double, char, boolean
        int num = 10;
        double price = 19.99;
        char grade = 'A';
        boolean isAvailable = true;
        long population = 7800000000L; // Using 'L' to denote a long literal
        float pi = 3.14f; // Using 'f' to denote a float literal
        short shortNum = 100;
        byte byteNum = 127; // Maximum value for byte

        System.out.println("Integer: " + num);
        System.out.println("Double: " + price); 
        System.out.println("Character: " + grade);
        System.out.println("Boolean: " + isAvailable);
        System.out.println("Long: " + population);
        System.out.println("Float: " + pi);
        System.out.println("Short: " + shortNum);
        System.out.println("Byte: " + byteNum);

        // Size of primitive data types in bits
        System.out.println("Size of int: " + Integer.SIZE + " bits");
        System.out.println("Size of double: " + Double.SIZE + " bits");
        System.out.println("Size of char: " + Character.SIZE + " bits");
        System.out.println("Size of long: " + Long.SIZE + " bits");
        System.out.println("Size of float: " + Float.SIZE + " bits");
        System.out.println("Size of short: " + Short.SIZE + " bits");
        System.out.println("Size of byte: " + Byte.SIZE + " bits");

        //type of data types
        System.out.println("Type of num: " + ((Object)num).getClass().getSimpleName());
        System.out.println("Type of price: " + ((Object)price).getClass().getSimpleName());
        System.out.println("Type of grade: " + ((Object)grade).getClass().getSimpleName());
        System.out.println("Type of isAvailable: " + ((Object)isAvailable).getClass().getSimpleName());
        System.out.println("Type of population: " + ((Object)population).getClass().getSimpleName());
        System.out.println("Type of pi: " + ((Object)pi).getClass().getSimpleName());
        System.out.println("Type of shortNum: " + ((Object)shortNum).getClass().getSimpleName());
        System.out.println("Type of byteNum: " + ((Object)byteNum).getClass().getSimpleName());
    }
}