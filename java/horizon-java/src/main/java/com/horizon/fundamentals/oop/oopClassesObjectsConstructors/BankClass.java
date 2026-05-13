package com.horizon.fundamentals.oop;

public class BankClass {
    public static void main(String[] args) {
        Bank bank1 = new Bank("Horizon Bank", "Main Branch", "HZN0001", "123 Main St");
        UserAccount user1 = new UserAccount("Alice", "1234567890", bank1, 1000.0);

        System.out.println("User Name: " + user1.userName + ", Account Number: " + user1.accountNumber + ", Bank Info: " + user1.bank.bankName + ", " + user1.bank.branch + ", " + user1.bank.IFSC + ", " + user1.bank.address + ", Balance: " + user1.balance + ", Balance after interest: " + user1.interest());
    }
}

class Bank {
    String bankName;
    String branch;
    String IFSC;
    String address;

    Bank(String bankName, String branch, String IFSC, String address) {
        this.bankName = bankName;
        this.branch = branch;
        this.IFSC = IFSC;
        this.address = address;
    }
}

class UserAccount {
    String userName;
    String accountNumber;
    Bank bank; // This is an example of composition. The UserAccount class has a reference to the Bank class, which means that a user account is associated with a bank.
    double balance;

    double interest() {
        return this.balance + (this.balance * 0.05); // Assuming a 5% interest rate
    }

    UserAccount(String userName, String accountNumber, Bank bank, double balance) {
        this.userName = userName;
        this.accountNumber = accountNumber;
        this.bank = bank;
        this.balance = balance;
    }
}