// 2-6

const num1 = [1, 2, 3, 4, 5]
console.log(num1.reverse())


const list1 = ["apple", "banana", "orange"]
console.log(list1.reverse()[0])


const str1 = ["o", "l", "l", "e", "h"]
const str2 = str1.reverse().join("")
console.log(str2)


const num2 = [342, 324, 123, 764, 234]
const num3 = Math.max(num2.reverse())
console.log(num3)


const str3 = ["car", "apple", "orange", "phone", "file"]
console.log(str3.reverse().join(", "))

// 7-11

const str4 = ["banana", "cherry", "grape", "orange"]
console.log(str4.shift())


const num4 = [432, 674, 324, 4, 42]
console.log(num4.shift())
console.log(num4)


const num5 = [1, 2, 3, 4, 5]
console.log(num5.shift())


const list2 = ["apple", "grape", "banana", "orangre", "cherry"]

while (list2.length > 0) {
    const list3 = list2.shift()
    console.log(list3)
}


const mix1 = [1, 2, "JAVASCRIPT", "CSS"]
console.log(mix1.shift())

// ⁡⁣⁣12-16

const str5 = ["apple", "orange", "cherry"]
const str6 = str5.join(",")
console.log(str6)


const num6 = [1, 2, 3, 4, 5]
const num7 = num6.join(" ")
console.log(num7)


const num8 = [7, 5, 9]
const num9 = num8.join("-")
console.log(num9)


const list4 = ["w", "o", "r", "l", "d"]
const list5 = list4.join("")
console.log(list5)


const str7 = ["Petre", "Giorgi", "Daviti"]
const str8 = str7.join(" | ")
console.log(str8)

// 17-21

const num10 = 18
console.log(Math.abs(num10))


const num11 = -20
console.log(Math.abs(num11))


const num12 = [-123, 123, 312, -132]
const num13 = num12.map(num14 => Math.abs(num14))
console.log(num13)


const num15 = Math.abs(23, -123)
console.log(num15)


const num16 = -321
const num17 = Math.abs(num16)
console.log(num17)

// 22-26

const num18 = Math.ceil(32.32)
console.log(num18)


const num19 = Math.ceil(-32.32)
console.log(num19)


const num20 = [12.21, 42.4, 1.1, 99.9, 3.14]
const num21 = num20.map(num22 => Math.ceil(num22))
console.log(num21)


const num23 = Math.ceil(9 / 4)
console.log(num23)


const num24 = 49.99
const num25 = 0.76
const num26 = Math.ceil(num24 * (1 + num25))
console.log(num26)

// 27-31

const num27 = Math.floor(6.6)
console.log(num27)


const num28 = Math.floor(-6.2)
console.log(num28)


const num29 = [2.9, 7.8, 6.56, 432.13]
const num30 = num29.map(num31 => Math.floor(num31))
console.log(num30)


const num32 = Math.floor(10 / 4)
console.log(num32)


const num33 = 99.99
const num34 = 0.2
const num35 = Math.floor(num33 * (1 - num34))
console.log(num35)

// 32-36

const num36 = Math.round(25.4)
console.log(num36)


const num37 = Math.round(-6.9)
console.log(num37)


const num38 = [342.234, 42.3, 432.432, 1.2, 99.9]
const num39 = num38.map(num40 => Math.round(num40))
console.log(num39)


const num41 = Math.round(41 / 6)
console.log(num41)


const num42 = 49.99
const num43 = 0.15
const num44 = Math.round(num42 * (1 + num43))
console.log(num44)

// 37-41

const num45 = Math.max(5342, 13239)
console.log(num45)


const num46 = Math.max(123, 24, 211)
console.log(num46)


const num47 = [321, 324, 86, 135, 64]

const findMax1 = (num48) => {
    let max1 = num48[0]
    for (const num49 of num48) {
        if (num49 > max1) {
            max1 = num49
        }
    }
    return max1
}

const num50 = findMax1(num47)
console.log(num50)



const num51 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let max2 = num51[0]
for (let i = 1; i < num51.length; i++) {
    if (num51[i] > max2) {
        max2 = num51[i]
    }
}

console.log(max2)


const num52 = [312, -12, 432, -314]

let max3 = num52[0]
for (let i = 1; i < num52.length; i++) {
    if (num52[i] > max3) {
        max3 = num52[i]
    }
}

console.log(max3)

// 42-46

const num53 = Math.min(2535, 653)
console.log(num53)


const num54 = Math.min(1, 43, 234)
console.log(num54)


const num55 = [432, 542, 432, 24]

function findMin1(num56) {
    let min1 = num56[0];
    for (let i = 1; i < num56.length; i++) {
        if (num56[i] < min1) {
            min1 = num56[i]
        }
    }
    return min1
}

const num57 = findMin1(num55)
console.log(num57)


const num58 = [-34, 5341, 243, -123]

let min2 = num58[0]
for (let i = 1; i < num58.length; i++) {
    if (num58[i] < min2) {
        min2 = num58[i]
    }
}

console.log(min2)

// 47-51

const num59 = Math.pow(2, 3)
console.log(num59)


const num60 = Math.pow(5, 0.5)
console.log(num60)


const num61 = Math.pow(6, 6)
console.log(num61)


const num62 = 6
const num63 = 12
const num64 = Math.pow(num62, num63)
console.log(num64)


const num65 = [312, 1, 10, 34, 999999]
const num66 = num65.map(num67 => Math.pow(num67, 2))
console.log(num66)