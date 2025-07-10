// საკლასო დავალება:

// Build an IIFE that takes a string and returns its reversed version.

const str1 = ((str) => {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
})("Hello World");

console.log(str1);