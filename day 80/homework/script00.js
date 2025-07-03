const userName = "Deme";
const userAge = 27;
const greeting = `Hello, ${userName}! You are ${userAge} years old.`;
console.log(greeting);

const poem = `
Roses are red,
Violets are blue,
Code is sweet,
And so are you.
`;
console.log(poem);

const num1 = 7;
const num2 = 3;
const mathMessage = `Numbers: ${num1} and ${num2}
Sum: ${num1 + num2}
Product: ${num1 * num2}`;
console.log(mathMessage);

const trafficLight = "yellow";
switch (trafficLight) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get ready!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid color.");
}

const operation = "multiply";
const a = 8;
const b = 4;
switch (operation) {
    case "add":
        console.log(`${a} + ${b} = ${a + b}`);
        break;
    case "subtract":
        console.log(`${a} - ${b} = ${a - b}`);
        break;
    case "multiply":
        console.log(`${a} * ${b} = ${a * b}`);
        break;
    case "divide":
        console.log(`${a} / ${b} = ${a / b}`);
        break;
    default:
        console.log("Unknown operation.");
}

const month = "April";
let season;
switch (month) {
    case "December":
    case "January":
    case "February":
        season = "Winter";
        break;
    case "March":
    case "April":
    case "May":
        season = "Spring";
        break;
    case "June":
    case "July":
    case "August":
        season = "Summer";
        break;
    case "September":
    case "October":
    case "November":
        season = "Autumn";
        break;
    default:
        season = "Unknown month";
}
console.log(`${month} is in ${season}.`);

const userRole = "editor";
switch (userRole) {
    case "admin":
        console.log("Full access granted.");
        break;
    case "editor":
        console.log("Edit access granted.");
        break;
    case "subscriber":
        console.log("Read-only access granted.");
        break;
    default:
        console.log("No access.");
}