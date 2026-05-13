package com.horizon.fundamentals.oop.oopClassesObjectsConstructors.oopPractise;

class Library {
    String name;
    String city;
    Book book1;
    Book book2;
    Book book3;

    // A constructor that takes name and city only — books start as null
    Library(String name, String city) {
        this.name = name;
        this.city = city;
        this.book1 = null;
        this.book2 = null;
        this.book3 = null;
    }

    // A method addBook(Book book) — assigns books to book1, book2, book3 in order. Print "[library name] is full!" if all three are taken
    public void addBook(Book book) {
        if (this.book1 == null) {
            this.book1 = book;
        } else if (this.book2 == null) {
            this.book2 = book;
        } else if (this.book3 == null) {
            this.book3 = book;
        } else {
            System.out.println(this.name + " is full!");
        }
    }

    //A method showAllBooks() that prints all non-null books using describe()
    public void showAllBooks() {
        System.out.println("Books in " + this.name + ":");
        if (this.book1 != null) {
            System.out.println(this.book1.describe());
        }
        if (this.book2 != null) {
            System.out.println(this.book2.describe());
        }
        if (this.book3 != null) {
            System.out.println(this.book3.describe());
        }
    }

    public String showInfo() {
        return "Library: " + this.name + " | City: " + this.city;
    }
}