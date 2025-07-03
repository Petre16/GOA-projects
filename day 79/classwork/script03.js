// 2. Find first multiple of 7 over 50
// Use a do...while loop to find and print the first number greater than 50 that is divisible by 7.

let num1 = 51;
do {
    if (num1 % 7 === 0) {
        console.log(num1);
        break;
    }
    num1++;
} while (true);