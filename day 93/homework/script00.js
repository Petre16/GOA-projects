console.log("Hello".repeat(3))
console.log("*".repeat(20))
console.log("abc".repeat(4))

function repeatWord(word, times) {
    return word.repeat(times)
}
console.log(repeatWord("hello", 3))

console.log("█".repeat(10))

console.log("The cat chased another cat.".replace("cat", "dog"))
console.log("banana".replace("a", "o"))
console.log("Hello World from JS".replace(" ", "-"))
console.log("12345abc678".replace(/\d/, "#"))
console.log("Monday is a good day".replace("day", "night"))

console.log("Hello World from JS".replace(/ /g, "_"))
console.log("cat and cat are friends".replace(/cat/g, "dog"))
console.log("My number is 12345".replace(/\d/g, "#"))
console.log("Javascript is fun".replace(/[aeiou]/gi, "*"))
console.log("www.example.com".replace(/\./g, "-"))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers.slice(0, 4))

let fruits = ["apple", "banana", "cherry", "orange"]
console.log(fruits.slice(-2))

let cities = ["London", "Paris", "Berlin", "Tbilisi", "Batumi", "Kobuleti"]
console.log(cities.slice(2, -1))

let students = ["Giorgi", "Petre", "Luka", "David", "Nika", "Ann", "Tom", "Natia"]
console.log(students.slice(-5))

let letters = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(letters.slice(2, 5))

console.log("2025-08-17".split("-"))
console.log("one two three four five".split(" "))
console.log("Gio,Doe,22,Developer".split(","))
console.log("abc".split(""))

let sentence = "JavaScript is fun".split(" ");
console.log(sentence[1])