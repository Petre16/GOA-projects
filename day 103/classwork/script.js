// საკლასო დავალება:

// Create a Class for a Car Make a class named Car. Add a constructor that takes brand and model. Add a method drive() that prints: "The BRAND MODEL is driving.".

class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    drive() {
        console.log(`"The ${brand} ${model} is driving.".`)
    }
}

const car1 = new Car("Toyota", "Prius")

console.log(car1)
console.log(car1.drive)



// საკლასო დავალება:

// Create a Class for a Bank Account

// Make a class named BankAccount.

// Add a constructor that takes owner and balance.

// Add a method deposit(amount) that increases the balance and prints the new balance.

class BankAccount {
    constructor(owner1, balance1) {
        this.owner1 = owner1
        this.balance1 = balance1
    }

    deposit(amount) {
        this.balance1 += amount
        console.log(this.balance1)
    }
}

const ac1 = new BankAccount("Petre", 15000)
ac1.deposit(1000)

console.log(ac1)

// საკლასო დავალება:

// Create a Class for a Book

// Make a class named Book.

// Add a constructor that takes title and author.

// Add a method describe() that prints: "The book TITLE is written by AUTHOR.".

class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }

    describe() {
        console.log(this.author)
    }
}

const book1 = new Book("Vefkhistkaosani", "Shota Rustaveli")
book1.describe()

console.log(book1)