// საკლასო დავალება:

// Given an array - ['apple', 'banana', 'cherry'], pick a random element and log it in console

const str1 = ['apple', 'banana', 'cherry']
const randomIndex = Math.floor(Math.random() * str1.length)
const randomFruit = str1[randomIndex]

console.log(randomFruit)