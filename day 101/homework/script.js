// 2-4)

const date1 = new Date()
const date2 = date1.getDate()
console.log(date2)


const date3 = new Date(date1.getFullYear(), 11, 16)
const date4 = date3.getDate()
console.log(date4)


const date5 = date2 === 1
console.log(date5)


// 5-7)

const date6 = new Date()
const date7 = date6.getDay()
console.log(date7)


const date8 = new Date(date6.getFullYear(), 11, 16)
const date9 = date8.getDay()
console.log(date9)


const date10 = date7 === 0
console.log(date10)


// 8-10)

const date11 = new Date()
const date12 = date11.getFullYear()
console.log(date12)


const date13 = new Date(date11.getFullYear(), 11, 16)
const date14 = date13.getFullYear()
console.log(date14)


const date15 = date12 === 2025
console.log(date15)


// 11-13)

const date16 = new Date()
const date17 = date16.getHours()
console.log(date17)


const date18 = new Date(date16.getFullYear(), 11, 16, 24, 7)
const date19 = date18.getHours()
console.log(date19)


const date20 = date17 < 12
console.log(date20)


// 14-16)

const date21 = new Date()
const date22 = date21.getMinutes()
console.log(date22)


const date23 = new Date(date21.getFullYear(), 11, 16, 24, 7)
const date24 = date23.getMinutes()
console.log(date24)


const date25 = date22 === 0
console.log(date25)