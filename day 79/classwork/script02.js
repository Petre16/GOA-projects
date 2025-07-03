// 1. Repeat until correct password
// Create a do...while loop that asks the user to enter the password "js123". Keep asking until the correct password is entered.

let password

do {
    password = prompt("Enter the password:")
} while (password !== "js123")

alert("Correct password entered!")