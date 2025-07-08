for (let i = 1; i <= 20; i++) {
    if (i === 13) break;
    console.log(i);
}

const colors = ["red", "green", "yellow", "blue", "purple"];
for (let color of colors) {
    if (color === "blue") break;
    console.log(color);
}

for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 && i % 5 === 0) break;
    console.log(i);
}

const word = "javascript";
for (let letter of word) {
    if (letter === "a") break;
    console.log(letter);
}

let sum = 0;
let n = 1;
while (sum < 100) {
    sum += n;
    if (sum >= 100) break;
    n++;
}
console.log("Sum reached:", sum);

for (let i = 1; i <= 20; i++) {
    if (i === 13) continue;
    console.log(i);
}

const fruits = ["apple", "banana", "orange", "grape"];
for (let fruit of fruits) {
    if (fruit === "banana") continue;
    console.log(fruit);
}

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

const word2 = "elephant";
for (let letter of word2) {
    if (letter === "e") continue;
    console.log(letter);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

const add = (a, b) => a + b;

const greet = name => `Hello, ${name}!`;

const doubleArray = arr => arr.map(num => num * 2);

const isEven = num => num % 2 === 0;

const strLength = str => str.length;

function printArgs(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}

function countArgs(...args) {
    console.log("Count:", args.length);
}

function sumNumbers(...args) {
    let total = 0;
    for (let arg of args) {
        if (typeof arg === "number") total += arg;
    }
    console.log("Total:", total);
}

function printUntilZero(...args) {
    for (let arg of args) {
        if (arg === 0) break;
        console.log(arg);
    }
}

function printNumbersOnly(...args) {
    for (let arg of args) {
        if (typeof arg === "string") continue;
        console.log(arg);
    }
}