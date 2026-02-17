const { error } = require('console')
const os = require('os')
const process = require('process')

// 2-10)

console.log(os.type())


console.log(process.argv[0])
console.log(process.argv[1])

console.log(os.hostname())
console.log(os.type())

console.log(process.memoryUsage())

console.log(os.homedir())

console.log(os.uptime())

console.log("hello")
console.table("hello")
console.assert("hello" === "hello")

// console.log(name)
// console.table(name)
// console.assert(name = name)

console.log(error)
console.table(error)
console.assert(error !== error)

const obj = {
    "name": "Petre",
    "age": 12
}

console.table(obj)