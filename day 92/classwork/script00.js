// 2)

// From an array of numbers, find the position of the last occurrence of the number 42.

// In a long string containing repeated characters, find the index of the last occurrence of the letter "a".


let arr1 = [3, 42, 7, 42, 9, 42];
let arr2 = 42;

let lastIndex = arr1.lastIndexOf(arr2);
console.log(lastIndex);



let str1 = "this car is good";
let lastIndex1 = -1;

for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "a") {
        lastIndex = i;
    }
}

console.log(lastIndex1);