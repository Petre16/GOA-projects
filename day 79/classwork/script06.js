// Given an array of numbers, use a for...of loop to create a new array with each number multiplied by 2. Print the result.

const numbers = [1, 2, 3, 4, 5];
const result = [];
for (const num of numbers) {
    result.push(num * 2);
}
console.log(result);