// საკლასო დავალება:

// Take an array of 5 names and join them with " | " between each name.

const str1 = ["Petre", "Giorgi", "Nikolozi", "Daviti", "Natia"]
const str2 = str1.join(" | ")
console.log(str2)


// საკლასო დავალება:

// შექმენით Math.abs მეთოდის manual ფუნქცია.

const manualAbs = num => {
    if (num => 0) return num
    else return num*-1
}

console.log(manualAbs(-32))
console.log(manualAbs(32))
console.log(manualAbs(-43))

// საკლასო დავალება:

// Use Math.max() with negative numbers to see which is largest.

const num1 = Math.max(-423, -453, -23, -18, -3)
console.log(num1)