// 9. Count vowels in a string
// Use a for...of loop to go through each character of a string and count how many vowels (a, e, i, o, u) it has.

let str = "javascript";
let count = 0;
let vowels = "aeiou";

for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log(count);