// 2 - 6)

const num1 = [4, -1, 7, 0]
const str1 = num1.some(num2 => num2 < 0)
console.log(str1)

const str2 = ["hello", "extraordinary", "world"]
const str3 = str2.some(str4 => str4.length > 10)
console.log(str3)

const list1 = [12, 34, 15, 47]
const list2 = list1.some(list3 => list3 < 18)
console.log(list2)

const num3 = [5, 9, 17, 46]
const num4 = num3.some(num5 => num5 % 5 === 0)
console.log(num4)

const user1 = [
    { name: "Petre", isActive: false },
    { name: "Nikolozi", isActive: true },
    { name: "Giorgi", isActive: false }
]
const str5 = user1.some(user2 => user2.isActive)
console.log(str5)


// 7-11)

const num6 = [1, 2, 3, 4]
num6.forEach(num7 => console.log(num7))

const list4 = ["apple", "orange", "banana"]
list4.forEach(str6 => console.log(str6.toUpperCase()))

const num8 = [1, 2, 3, 4, 5]

let total1 = 0
num8.forEach(num9 => total1 += num9)
console.log(total1)

const str7 = ["Gio", "Sam", "Nika"]
str7.forEach(name => console.log(`Hello, ${name}!`))

const num10 = [2, 5, 7, 10, 23]

let oddCount = 0;
num10.forEach(num => {
    if (num % 2 !== 0) oddCount++
})
console.log(oddCount)


// 12-16)

const num11 = [2, 3, 4]
const num12 = num11.map(num13 => num13 ** 3)
console.log(num12)

const list5 = ["hello", "world", "javascript"]
const list6 = list5.map(list7 => list7.split('').reverse().join(''))
console.log(list6)

const list8 = [0, 20, 37]
const list9 = list8.map(c => (c * 9/5) + 32)
console.log(list9)

const num14 = [10, 20, 30]
const num15 = num14.map(num16 => `Value: ${num16}`)
console.log(num15)

const users = [
    { firstName: "Petre", lastName: "Sikmashvili" },
    { firstName: "Giorgi", lastName: "Kalichava" }
]

const names = users.map(p => `${p.firstName} ${p.lastName}`)
console.log(names)