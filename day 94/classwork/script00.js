// საკლასო დავალება:

// Ask the user for their first name with extra spaces only at the beginning. Use trimStart() to clean it and display the result.

// Ask the user for their last name with extra spaces only at the end. Use trimEnd() to clean it and display the result.

let str1 = prompt("Enter Name: ");
let str2 = str1.trimStart();
console.log(str2);

let str01 = prompt("Enter Surname: ");
let str02 = str01.trimEnd();
console.log(str02);