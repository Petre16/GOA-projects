let num = Number(prompt("Enter a number:"));
if (num > 0) {
    alert("The number is positive.");
} else if (num < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

let age = Number(prompt("Enter your age:"));
if (age >= 18) {
    alert("You can vote!");
} else {
    alert("You are not eligible to vote.");
}

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
if (num1 > num2) {
    alert(num1 + " is larger than " + num2 + ".");
} else if (num2 > num1) {
    alert(num2 + " is larger than " + num1 + ".");
} else {
    alert("Both numbers are equal.");
}