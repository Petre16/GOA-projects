function case_choice() {
    let userInput = prompt("Enter String:");
    let caseType = prompt("lower/l or upper/u ?:");

    if (caseType === "lower" || caseType === "l") {
        console.log(userInput.toLowerCase());
    } else if (caseType === "upper" || caseType === "u") {
        console.log(userInput.toUpperCase());
    } else {
        console.log("error");
    }
}

case_choice();


const str1 = [
    "This is a new car",
    "This old house is beautiful",
    "It is a new day",
    "It is a sunny day",
    "This new phone is good",
];

str1.forEach(str => {
    if (str.includes("new")) {
        console.log(str);
    }
});