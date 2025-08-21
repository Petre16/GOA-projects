function checkStartsWithHello(str) {
    console.log(str.startsWith("Hello"))
}

function checkImageFilename(filename) {
    if (filename.startsWith("img_")) {
        console.log("Image file")
    } else {
        console.log("Not an image file")
    }
}

function checkOnceUpon(sentence) {
    console.log(sentence.startsWith("Once upon"))
}

function checkSubstringAtPosition(str, substr, pos) {
    console.log(str.startsWith(substr, pos))
}

function countDrNames(names) {
    let count = 0;
    for (let i = 0; i < names.length; i++) {
        if (names[i].startsWith("Dr.")) {
        count++
        }
    }
    console.log(count)
}

function removeExtraSpaces(str) {
    console.log(str.trim())
}

function trimStartOnly(str) {
    console.log(str.trimStart())
}

function trimEndOnly(str) {
    console.log(str.trimEnd())
}

function cleanUsernames(usernames) {
    let cleaned = []
    for (let i = 0; i < usernames.length; i++) {
        cleaned[i] = usernames[i].trim()
    }
    console.log(cleaned)
}

function isTrimmedEmpty(input) {
    console.log(input.trim() === "")
}

function createNumberArray() {
    let arr = []
    arr[0] = 5
    arr[1] = 10
    arr[2] = 15
    arr[3] = 20
    arr[4] = 25
    console.log(arr)
}

function addMoreFruits() {
    let fruits = ["apple", "banana", "cherry"]
    fruits[3] = "orange"
    fruits[4] = "mango"
    console.log(fruits)
}

function collectUserInputs() {
    let inputs = []
    let i = 0
    while (true) {
        let value = prompt("Enter input: ")
        if (value === "stop") break
        inputs[i++] = value
    }
    console.log(inputs)
}

function appendSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    numbers[numbers.length] = sum;
    console.log(numbers)
}

function addFirst10EvenNumbers() {
    let evens = []
    for (let i = 0; i < 10; i++) {
        evens[i] = i * 2
    }
    console.log(evens)
}