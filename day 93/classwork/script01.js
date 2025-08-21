// საკლასო დავალება:

// Given an array of numbers from 1 to 20, use slice to extract every number from the 5th element up to (but not including) the 15th element.

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let slice1 = num1.slice(4, 14);
console.log(slice1)

// საკლასო დავალება:

// Split the string "apple,banana,orange" into an array of fruits.

// Split the string "Hello World" into an array of words.

// Split the string "a-b-c-d-e" into individual letters using "-" as the separator.

let fruits1 = "apple, banana, orange";
let fruits2 = fruits1.split(",");
console.log(fruits2);


let str1 = "Hello World";
let str2 = str1.split(" ");
console.log(str2);


let str3 = "a-b-c-d-e";
let str4 = str3.split("-");
console.log(str4);