let i = 1;
do {
    console.log(i)
    i++;
} while (i <= 5)

let j = 2;
do {
    console.log(j)
    j += 2;
} while (j <= 10)

let k = 10;
do {
    console.log(k)
    k--;
} while (k >= 1)

let number;
do {
    number = prompt("Enter a number greater than 100: ")
} while (number <= 100 && number !== null)

let total = 0;
let n = 1;
do {
    total += n
    n++;
} while (n <= 10)
console.log("Sum from 1 to 10 is:", total)

const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
    console.log(num)
}

const str = "Hello"
for (const char of str) {
    console.log(char)
}

let sum = 0
for (const num of numbers) {
    sum += num
}
console.log("Sum of array:", sum)

for (const num of numbers) {
    if (num % 2 === 0) {
        console.log("Even:", num)
    }
}

const names = ["Petre", "David", "Giotgi"]
for (const name of names) {
    console.log(name)
}

const person = {
    name: "Petre",
    age: 11,
    job: "programmer",
};

for (const key in person) {
    console.log("Key:", key)
}

for (const key in person) {
    console.log("Value:", person[key])
}

let count = 0;
for (const key in person) {
    count++;
}
console.log("Number of properties:", count);

const keyToCheck = "age"
let exists = false
for (const key in person) {
    if (key === keyToCheck) {
        exists = true
        break;
    }
}
console.log(`${keyToCheck} exists:`, exists)

let keyList = ""
for (const key in person) {
    keyList += key + ", "
}
keyList = keyList.slice(0, -2)
console.log("All keys:", keyList)