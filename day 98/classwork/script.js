// საკლასო დავალება:

// First, create an array with 10 number.

// 1) Find the first number in an array that is greater than 50.

// 2) Find the first element in an array of numbers that is divisible by 7.


const num1 = [234, 356, 7484, 3, 45, 32, 16, 77, 51, 26]

const num2 = num1.find(num3 => num3 > 50)

const num4 = num1.find(num5 => num5 % 7 === 0)

console.log(num2)
console.log(num4)


// საკლასო დავალება:

// Replace the second element of an array with a new value using splice.


const num6 = [32, 45, 19, 932, 43, 123]

num6.splice(1, 1, 18)

console.log(num6.splice(1, 1, 18))


// საკლასო დავალება:

// Use pop to remove the last number from an array and log both the removed value and the updated array.


const num7 = [345, 53, 542, 54, 52, 521]

const num8 = num7.pop()

console.log(num8)
console.log(num7)