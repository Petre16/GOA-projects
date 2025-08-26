// საკლასო დავალება:

// Check Palindrome

// Write a function that checks if a string is a palindrome (reads the same forward and backward).
// Example: "madam" → true

function palindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(palindrome("madam"))
console.log(palindrome("racecar"))
console.log(palindrome("hello"))