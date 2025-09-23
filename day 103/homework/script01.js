// 3)

class Teacher {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
    }

    introduce() {
        console.log(`Hello, I am ${this.name} and I teach ${this.subject}.`)
    }
}

const teacher1 = new Teacher("Tamuna", "Math")
teacher1.introduce()


// 4)

class Phone {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    ring() {
        console.log(`The ${this.brand} ${this.model} is ringing!`)
    }
}

const phone1 = new Phone("Xiaomi", "Redmi Note 8 Pro")
phone1.ring()


// 5)

class Movie {
    constructor(title, year) {
        this.title = title
        this.year = year
    }

    play() {
        console.log(`Now playing: ${this.title} (${this.year})`)
    }
}

const movie1 = new Movie("Inception", 2012)
movie1.play()


// 6)

class Cat {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    meow() {
        console.log(`${this.name} the ${this.color} cat says Meow!`)
    }
}

const cat1 = new Cat("Laki", "black-white")
cat1.meow()


// 7)

class BankCard {
    constructor(cardNumber, balance) {
        this.cardNumber = cardNumber
        this.balance = balance
    }

    withdraw(amount) {
        this.balance -= amount
        console.log(`New balance: ${this.balance}`)
    }
}

const card1 = new BankCard("1234-5678-9012-3456", 777)
card1.withdraw(111)