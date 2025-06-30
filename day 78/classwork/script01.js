// html-ის სტრუქტურაში ჩაამატეთ ერთი დაულაგებელი სია.

// js-ში გადაიტანეთ ეს ობიექტი:

// let myObj = {
//     name: "David",
//     surname: "Tezelashvili",
//     academy: "GOA",
//     isMentor: true,
//     num: 100,
//     hobbies: ["programming", "bike", "basketball"],
//     favColor: "Blue"
// }

// შემდეგ, ამ ობიექტს გადაუარეთ for in ციკლით. თითოეულ იტერაციაზე შექმენით ორი სიის ელემენტი. პირველი ელემენტის ტექსტი უნდა იყოს ობიექტის გასაღები. ხოლო მეორე ელემენტის ტექსტი უნდა იყოს მაგ გასაღების მნიშვნელობა. საბოლოოდ, ორივე დაულაგებელი სიის ელემენტი ჩაამატეთ დაულაგებელ სიაში

let myObj = {
    name: "David",
    surname: "Tezelashvili",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "bike", "basketball"],
    favColor: "Blue"
};

const ul = document.getElementById("ul1")

for (let key in myObj) {
    let liKey = document.createElement("li")
    liKey.textContent = key
    ul.appendChild(liKey)

    let liValue = document.createElement("li")
    liValue.textContent = Array.isArray(myObj[key]) ? myObj[key].join(", ") : myObj[key]
    ul.appendChild(liValue)
}