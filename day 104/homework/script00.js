// 2)

const I = {
    name: "Petre",
    surname: "Sikmashvili",
    age: 11,
    city: "Tbilisi",
    country: "Georgia"
}
console.log(Object.keys(I))


// 3)

console.log(Object.keys(I).length)


// 4)

function getUppercaseKeys(I1) {
    return Object.keys(I1).map(key => key.toUpperCase())
}

console.log(getUppercaseKeys(I))


// 5)

console.log(Object.keys(I).includes("city"))
console.log(Object.keys(I).includes("car"))


// 6)

const friend = {
    name: "Giorgi",
    surname: "Kalichava",
    age: 11,
    city: "Tbilisi",
    country: "Georgia"
}

console.log(Object.keys(friend))


// 7)

console.log(Object.values(friend))


// 8)

console.log(Object.values(friend).length)


// 9)

function getNumericValues(friend1) {
    return Object.values(friend1).filter(val => typeof val === "number")
}

console.log(getNumericValues(friend))


// 10)

const sum1 = Object.values(friend)
    .filter(val1 => typeof val1 === "number")
    .reduce((acc1, num1) => acc1 + num1, 0)
console.log(sum1)


// 11)

console.log(Object.values(friend).includes("name"))
console.log(Object.values(friend).includes("country"))


// 12)

const friend2 = {
    name: "Luka",
    surname: "Gongadze",
    age: 11,
    city: "Tbilisi",
    country: "Georgia"
}

console.log(Object.entries(friend2))


// 13)

function printKeyValue(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    })
}

printKeyValue(friend2)


// 14)

const keyValueArray = Object.entries(friend2).map(([k, v]) => `${k}=${v}`)
console.log(keyValueArray)


// 15)

function filterGreaterThan10(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([k, v]) => typeof v === "number" && v > 10)
    )
}

console.log(filterGreaterThan10(friend2))


// 16)

function swapKeysAndValues(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]))
}

console.log(swapKeysAndValues(friend2))


// 17)

const car1 = {
    car: "Toyota",
    model: "Prius",
    year: 2010
}


console.log("year" in car1)


// 18)

console.log("price" in car1)


// 19)

console.log(car1.hasOwnProperty("toString"))


// 20)

car1.mileage = 5000
console.log(Object.hasOwn(car1, "mileage"))


// 21)

delete car1.year
console.log("color" in car1)