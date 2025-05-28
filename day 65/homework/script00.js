// 1.
let hobby = prompt("What is your favorite hobby?");
alert("Your favorite hobby is: " + hobby);

// 2.
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Your full name is: " + fullName);

// 3.
let userMessage = prompt("Enter a message to display on the page:");
document.getElementById("message").textContent = userMessage;

// 4.
let emoji = prompt("What is your favorite emoji?");
alert("Thank you! Your favorite emoji is: " + emoji);

// 5.
let titleWord = prompt("Enter a word to set as the page title:");
document.title = titleWord;