let person = { name: "David", age: 37 };
let keys = [];

for (let key in person) {
    keys.push(key);
}

console.log(keys);

let data = { a: 10, b: "hi", c: 20 }
let total = 0;

for (let key in data) {
    if (typeof data[key] === "number") {
        total += data[key]
    }
}

console.log(total)

let info = { name: "Nikoloz", age: 23, city: "Batumi" }
let result = '';

for (let key in info) {
    result += `${key}=${info[key]}, `
}

result = result.slice(0, -2)
console.log(result)

let obj = { name: "Gio", age: 21, isStudent: true }

for (let key in obj) {
    console.log(`${key}: ${typeof obj[key]}`)
}

let data2 = {
    id: 1,
    name: "Petre",
    details: {
        age: 11,
        city: "Tbilisi"
    },
    active: true
};

for (let key in data2) {
    if (typeof data2[key] === "object" && data2[key] !== null && !Array.isArray(data2[key])) {
        console.log(`Nested object found at key: ${key}`)
    }
}

let words = ["apple", "banana", "grape", "pineapple", "kiwi"]

for (let word of words) {
    if (word.length > 5) {
        console.log(word)
    }
}

let chars = ["H", "e", "l", "l", "o"]
let word = "";

for (let ch of chars) {
    word += ch
}

console.log(word)

let num = 1

do {
    console.log(num)
    num *= 2;
} while (num <= 1000)

let inputs = []
let value

do {
    value = prompt("Enter a number (or type stop): ")
    if (value !== "stop") {
        inputs.push(value)
    }
} while (value !== "stop")

console.log(inputs)

let count = 30

do {
    console.log(count)
    count -= 3;
} while (count >= 0)