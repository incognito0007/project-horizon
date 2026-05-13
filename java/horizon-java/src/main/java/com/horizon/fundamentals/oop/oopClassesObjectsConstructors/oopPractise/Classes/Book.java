package com.horizon.fundamentals.oop.oopClassesObjectsConstructors.oopPractise;

class Book{
    String title;
    String genre;
    double price;
    Author author;

    Book(String title, String genre, double price, Author author) {
        this.title = title;
        this.genre = genre;
        this.price = price;
        this.author = author;
    }

    // Overloaded constructor to initialize the book with only title and author, genre will be set to "Unknown" and price will be set to 0.0
    Book(String title, Author author) {
        this.title = title;
        this.genre = "Unknown";
        this.price = 0.0;
        this.author = author;
    }

    public String describe() {
        return this.title + " by " + this.author.getFullName() + " | Genre: " + this.genre + " | Price: $" + this.price;
    }

    public String applyDiscount(double percent) {
        double discountAmount = this.price * (percent / 100);
        this.price -= discountAmount;
        return "Discount applied! New price: $" + this.price;
    }
}