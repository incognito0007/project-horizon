package com.horizon.fundamentals.oop.oopClassesObjectsConstructors.oopPractise;

class Author {
        String firstName;
        String lastName;
        String nationality;

        Author (String firstName, String lastName, String nationality) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.nationality = nationality;
        }

        public String getFullName() {
            return this.firstName + " " + this.lastName;
        }

        public String Introduce() {
            return "Hello, I am " + getFullName() + " from " + this.nationality;
        }
    } 