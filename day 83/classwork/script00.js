// Block Scope
// block scope მუშაობს მოლოდ let და const-ის შეცმნილ ცვლადებზე.

if (true) {
    let age = 11;
    console.log(age);
}

// Function Scope
// შეცმნილ ცვლადებზე var, let, const ვცერლდება წესი, რომ ფუნქციის გარეთ ისინი არ იქნებიან ხელმისაწვდომი.

function greet() {
    let name = "Petre";
    console.log("Hello", name);
}

greet();

// Global Scope
// შეცმნილ ცვლადებზე var, let, const ვცერლდება წესი, რომ ისინი ხელმისაწვდომი არიან მთელ ფაილში.

let globalFunc = "Hello World";

console.log(globalFunc);

function sayHello() {
    console.log(globalVar);
}




// Extract Leading Number from a Mixed String
// Given a string like "100px" or "25.5kg", use parseInt to extract the numeric part and ignore the rest.

let str1 = "100px";
let str2 = "25.5kg";

let num1 = parseInt(str1);
let num2 = parseInt(str2);

console.log(num1);
console.log(num2);




// შექმენით ფუნქცია, სადაც მომხმარებელს შემოტანინებთ ორ რიცხვს, ისინი შეინახეთ Number მონაცემთა ტიპში, უბრალოდ მათზე გამოიყენეთ parseFloat ფუნქცია. შემდეგ ჩამოწერეთ ამ რიცხვებს შორის შემდეგი მათემატიკური ოპერაციები და დაბეჭდეთ შედეგეგი: +, -, *, /, **, //, %

function mathOperations() {
    let input1 = prompt("Enter First Number:");
    let input2 = prompt("Enter Second Number:");

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 ** num2);
    console.log(num1 % num2);
}