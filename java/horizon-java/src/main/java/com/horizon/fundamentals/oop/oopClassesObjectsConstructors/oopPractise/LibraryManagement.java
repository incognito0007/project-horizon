package com.horizon.fundamentals.oop.oopClassesObjectsConstructors.oopPractise;

public class LibraryManagement {
    public static void main(String[] args) {
        Author author1 = new Author("George", "Orwell", "British");
        Author author2 = new Author("Jane", "Austen", "American");

        System.out.println(author1.Introduce());
        System.out.println(author2.Introduce());

        Book book1 = new Book("1984", "Dystopian", 15.99, author1);
        Book book2 = new Book("Pride and Prejudice", author2);
        Book book3 = new Book("Animal Farm", "Political Satire", 9.99, author1);

        System.out.println(book1.describe());
        System.out.println(book2.describe());
        System.out.println(book3.describe());

        System.out.println("Hurray! There is a sale on " + book1.title + "!");
        System.out.println(book1.applyDiscount(10)); // Apply 10% discount to book1

        Library library = new Library("City Library", "New York");
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);
        library.addBook(new Book("Extra Book", "Fiction", 12.99, new Author("Extra", "Author", "Unknown"))); // This should trigger the "library is full" message
        System.out.println(library.showInfo());
        library.showAllBooks();
    }
}