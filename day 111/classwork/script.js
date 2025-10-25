// საკლასო დავალება:

// Create a function that takes an array of 5 numbers and logs each number.

// Use the ternary operator to decide whether to add 10 to each number or subtract 10, and return the new array using the spread syntax.


let numbers = [1, 2, 3, 4, 5]

numbers = numbers.map(n => n % 2 === 0 ? n + 10 : n - 10)

const myFunc = (n1, n2, n3, n4, n5) => {
    const allN = [n1, n2, n3, n4, n5]
    allN.forEach(n => console.log(n))
}

myFunc(...numbers)


// საკლასო დავალება:

// შექმენით js-ის ფაილი და მასში დააექსპორტეთ ერთი ცვლადი. მეორე js-ის ფაილში დააიმპორტეთ ის და დაბეჭდეთ მისი მნიშვნელობა.

import { name1 } from './test.js'

console.log(name1)