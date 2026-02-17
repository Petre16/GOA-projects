const events = require("events")
// 1)

const myEmitter = new events.EventEmitter()
    const events2 = new events()
    myEmitter.on('register', username => {
    console.log(username)
})

myEmitter.emit("register", "petre")
myEmitter.on('output', smth => {
    console.log(smth)
})

myEmitter.emit('output', "group 54")

// 2)

myEmitter.on('group 54', lesson => {
    console.log(`Lesson: ${lesson}`)
})
myEmitter.emit('group 54', '144')
myEmitter.on('hello', hello => {
    console.log(hello)
})
myEmitter.emit('hello', 'hello')
myEmitter.on('greet', (message,number) => {
    console.log(message);
    console.log(number)
})

myEmitter.emit('greet', 'Hello, world!', 5)
myEmitter.on('calculate', (number) => {
    const result = number * 2
    console.log(`Received: ${number}`)
    console.log(`Doubled value: ${result}`)
})
myEmitter.emit('calculate', 10)
// 3)

process.stdin.on("data", input => {
    console.log(input.toString())
})

process.stdin.on("data", (standard) => {
    console.log(standard.toString().trim() || "default text")
})

process.stdin.on("data", username => {
    console.log(username.toString())
})

process.stdin.on("data", username => {
    console.log(username.toString())
})

// 4)

process.stdin.on("data", username => {
    console.log(`Username: ${username.toString().trim()}`)
})

process.stdin.on("data", username => {
    console.log(username.toString())
})

process.stdin.on("data", username => {
    console.log(`Username: ${username.toString().trim()}`)
})

process.stdin.on("data", username => {
    console.log(`Username: ${username.toString().trim().toUpperCase()}`)
})

// 5)

const { Buffer } = require("buffer")
const myBuffer = Buffer.alloc(4, "data")

console.log(myBuffer)

// 6)

const string = "hello"
const buffer = Buffer.from(string)
console.log(buffer)

// 7)

const textBuffer = Buffer.from("data")
const bufferToString = textBuffer.toString()
console.log(bufferToString)

// 8)

const buffer1 = Buffer.alloc(4,"data")
const buffer2 = buffer1.toString()
buffer2[3] = "o"
console.log(buffer2)