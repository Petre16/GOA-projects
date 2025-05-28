let num1 = 15;
let num2 = 12;

let bothGreaterThan10 = num1 > 10 && num2 > 10;
console.log("Both numbers greater than 10:", bothGreaterThan10);

let atLeastOneTrue = num1 > 10 || num2 < 5;
console.log("At least one condition is true:", atLeastOneTrue);

let isAdult = true;
let isNotAdult = !isAdult;
console.log("Is not adult:", isNotAdult);

let complexCheck = (num1 > 10 && num2 > 10) || !(num2 < 5);
console.log("Complex logical expression result:", complexCheck);