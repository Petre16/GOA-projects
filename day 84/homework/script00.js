let str1 = "Example";
console.log("First character:", str1.charAt(0));

let userStr = prompt("Enter a string:");
console.log("Third character:", userStr.charAt(2));

let checkStr = "Hello";
let isCapital = checkStr.charAt(0) === checkStr.charAt(0).toUpperCase();
console.log("First character is capital:", isCapital);

let str2 = "HELLO WORLD";
console.log("Lowercase:", str2.toLowerCase());

let userInput = prompt("Enter text to convert to lowercase:");
console.log("Lowercase input:", userInput.toLowerCase());

let a = "JavaScript";
let b = "javascript";
let areEqual = a.toLowerCase() === b.toLowerCase();
console.log("Strings are equal (ignore case):", areEqual);

let str3 = "good morning";
console.log("Uppercase:", str3.toUpperCase());

let userName = prompt("Enter your name:");
alert("Your name in uppercase: " + userName.toUpperCase());

let c = "Hello";
let d = "HELLO";
let areEqualUpper = c.toUpperCase() === d.toUpperCase();
console.log("Strings are equal (ignore case, uppercase):", areEqualUpper);

let str4 = "Good ";
let str5 = "Evening";
console.log("Concatenated:", str4.concat(str5));

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
console.log("Full name:", firstName.concat(" ", lastName));

let part1 = "Learning";
let part2 = "JavaScript";
let part3 = "is fun!";
console.log("Sentence:", part1.concat(" ", part2, " ", part3));

let str6 = "Task is done";
console.log("Ends with 'done':", str6.endsWith("done"));

let userSentence = prompt("Enter a sentence:");
console.log("Ends with '!':", userSentence.endsWith("!"));

let filename = "picture.jpg";
if (filename.endsWith(".jpg")) {
    console.log("This is a JPG image.");
} else {
    console.log("This is not a JPG image.");
}

let str7 = "Say hello to everyone";
console.log("Contains 'hello':", str7.includes("hello"));

let sentence = prompt("Enter a sentence:");
let name = prompt("Enter your name:");
console.log("Sentence includes your name:", sentence.includes(name));

let email = "user@example.com";
console.log("Email contains '@':", email.includes("@"));

let str8 = "Elephant";
console.log("First 'e' at index:", str8.indexOf("e"));

let userSentence2 = prompt("Enter a sentence:");
console.log("First space at index:", userSentence2.indexOf(" "));

let str9 = "apple, banana, cherry";
console.log("First comma at index:", str9.indexOf(","));

let str10 = "Banana";
console.log("Last 'a' at index:", str10.lastIndexOf("a"));

let userSentence3 = prompt("Enter a sentence:");
console.log("Last space at index:", userSentence3.lastIndexOf(" "));

let paragraph = "It is good to be good and do good.";
console.log("Last 'good' at index:", paragraph.lastIndexOf("good"));