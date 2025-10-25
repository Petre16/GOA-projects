// 3

let num = 7
console.log(num % 2 === 0 ? "Even" : "Odd")

// 4

let a = 10
let b = 20
console.log(a > b ? a : b)

// 5

let age = 17
console.log(age >= 18 ? "Eligible" : "Not Eligible")

// 6

let score = 45
console.log(score >= 50 ? "Pass" : "Fail")

// 7

let number = -3
console.log(number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero")

// 8

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let merged = [...arr1, ...arr2]
console.log(merged)

// 9

let person = { name: "Ali", age: 25 }
let updatedPerson = { ...person, age: 30 }
console.log(person)
console.log(updatedPerson)

// 10

function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0)
}
console.log(sum(1, 2, 3, 4, 5))

// 11

let user = { id: 1, name: "Sara", age: 22, country: "USA" }
let { name, ...others } = user
console.log(name)
console.log(others)

// 12

import { greet } from './test1.js'
console.log(greet("Petre"))

// 13

import { PI, area, circumference } from './test2.js'
console.log(PI)
console.log(area(5))
console.log(circumference(5))