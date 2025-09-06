const str1 = ["orange", "Apple", "banana"]
const str2 = str1.find(str3 => str3[0] === "A")
console.log(str2)

const obj1 = [
    {name: "Gio", age: 21},
    {name: "Nika", age: 33}
]
const obj2 = obj1.find(obj3 => obj3.age > 30)
console.log(obj2)


const list1 = ["dog", "cat", "elephant"]
const list2 = list1.find(list3 => list3.length > 5)
console.log(list2)


const obj4 = [
    {name: "Aplle", price: 4},
    {name: "Redmi Note 12", price: 499}
]

const obj5 = obj4.find(obj6 => obj6.price < 20)
console.log(obj5)


const obj7 = [
    {name: "Alex", grade: "A"},
    {name: "Nika", grade: "D"}
]

const obj8 = obj7.find(obj9 => obj9.grade === "A")
console.log(obj8)


const num1 = [324, -21, 635, 0, 31]
const num2 = num1.findIndex(num3 => num3 < 0)
console.log(num2)


const list4 = ["run", "jumping", "play"]
const list5 = list4.findIndex(list6 => list6.slice(-3) === "ing")
console.log(list5)


const obj10 = [
    {isActive: false},
    {isActive: true}
]

const obj11 = obj10.findIndex(obj12 => obj12.isActive)
console.log(obj11)


const num4 = [123, 456, 500, 100]
const num5 = num4.findIndex(num6 => num6 % 10 === 0)
console.log(num5)


const list7 = ["apple", "banana", "grape"]
const list8 = list7.findIndex(list9 => list9.length === 5)
console.log(list8)


const num7 = [332, 759,716, 12]
const num8 = num7.findLast(num9 => num9 > 100)


const str4 = ["banana", "orange", "grape"]
const str5 = str4.findLast(str6 => str6.includes("e"))
console.log(str5)


const obj13 = [
    {age: 32},
    {age: 17},
    {age: 25}
]

const obj14 = obj13.findLast(user => user.age < 25)
console.log(obj14)


const num10 = [2, 6, 7, 22]
const num11 = num10.findLast(num12 => num12 % 2 === 1)
console.log(num11)


const list10 = ["dog", "cat", "apple"]
const list11 = list10.findLast(w => /^[aeiou]/i.test(w))
console.log(list11)


const num13 = [20, 55, 40, 70]
const num14 = num13.findLastIndex(num15 => num15 > 50)
console.log(num14)


const list12 = ["Script", "Orange", "Style"]
const list13 = list12.findLastIndex(str => str.startsWith("S"))
console.log(list13)


const obj15 = [
    {isActive: true},
    {isActive: false},
    {isActive: true}
]

const obj16 = obj15.findLastIndex(obj17 => obj17.isActive)
console.log(obj16)


const num16 = [9, 13, 23, 333]
const num17 = num16.findLastIndex(num18 => num18 % 3 === 0)
console.log(num17)


const list14 = ["tree", "dark", "leaf", "snow"]
const list15 = list14.findLastIndex(list16 => list16.length === 4)
console.log(list15)


const num19 = [23, 42, 43, 25, 432]
const num20 = num19.indexOf(25)
console.log(num20)


const list17 = ["banana", "apple", "grape", "orange"]
const list18 = list17.indexOf("apple")
console.log(list18)


const str7 = ["b", "c", "a", "d"]
const str8 = str7.indexOf("a")
console.log(str8)


const str9 = ["cat", "dog", "lion"]
const str10 = str9.indexOf("cat")
console.log(str10)


const num21 = [1, 2, 3, 4, 5, 6, 7, 8]
const num22 = num21.indexOf(100)
console.log(num22)


const num23 = [10, 2023, 10, 34, 10]
const num24 = num23.lastIndexOf(10)
console.log(num24)


const str11 = ["apple", "banana", "apple", "orange"]
const str12 = str11.lastIndexOf("apple")
console.log(str12)


const str13 = ["a", "c", "b", "a", "d"]
const str14 = str13.lastIndexOf("a")
console.log(str14)


const list19 = ["dog", "lion", "cat", "dog","elephant"]
const list20 = list19.lastIndexOf("dog")
console.log(list20)


const num25 = [132, -23, 0, 3213, 34, -213, 0, -123]
const num26 = num25.lastIndexOf(0)
console.log(num26)


const num27 = [1, 2, 3, 4]
const num28 = num27.pop()
console.log(num28)


const list21 = ["apple", "orange", "banana"]
const list22 = list21.pop()
console.log(list22)


const str15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
while (str15.length) {
    console.log(str15.pop())
}

console.log(str15)


const obj18 = [
    {name: "Nia"},
    {city: "Batumi"}
]

const obj19 = obj18.pop()
console.log(obj19)


const num29 = [5, 6, 7, 3, 432, 4]
const num30 = num29.pop()
console.log(num30)


const num31 = [1, 2, 3, 4, 5]
num31.splice(3, 2)
console.log(num31)


const list23 = ["apple", "banana", "carrot"]
list23.splice(2, 0, "orange", "grape")
console.log(list23)


const str16 = ["grape", "apple", "orange", "banana"]
str16.splice(3, 1, "mango")
console.log(str16)


const num32 = [1, 2, 3, 4, 5, 6]
num32.splice(-3, 3)
console.log(num32)


const num33 = [1, 2]
num33.splice(2, 0, 3)
console.log(num33)