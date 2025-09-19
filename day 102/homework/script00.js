// 2-6

const date1 = new Date()
console.log(date1.getSeconds())

alert(date1.getSeconds())

function getSeconds(date) {
    return date.getSeconds()
}

console.log(getSeconds(date1))

const date2 = new Date()
date2.setSeconds(date2.getSeconds() + 10)

console.log(date1.getSeconds() === date2.getSeconds())

setInterval(() => {
    console.log(new Date().getSeconds())
}, 1000)

// 7-11

const date3 = new Date()
console.log(date3.getMonth() + 1)

alert(date3.getMonth() + 1)

function getMonth(date) {
    return date.getMonth() + 1
}

console.log(getMonth(date3))

const date4 = new Date()
date4.setMonth(date4.getMonth() + 1)

console.log(date3.getMonth() === date4.getMonth())

setInterval(() => {
    console.log(new Date().getMonth() + 1)
}, 5000)