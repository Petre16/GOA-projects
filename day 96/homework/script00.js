const numbers = [2, 4, 6, 8, 10];

const list1 = numbers.every(function(num1) {
    return num1 %2 === 0
})


const students = [
    { name: "Nika", grade: 85 },
    { name: "Ana", grade: 45 },
    { name: "Gio", grade: 70 },
    { name: "Mariam", grade: 30 }
];

const obj1 = students.filter(function(str1) {
    return str1.grade >= 50
})


const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 }
];

const obj2 = products.find(function(str2) {
    return str2.price >= 800
})