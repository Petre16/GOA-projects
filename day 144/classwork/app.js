const process = require("process")
const { Buffer } = require("buffer")

// process.stdin.on("data", favColor => {
//     console.log(favColor.toString())
//     process.stdout.write("Enter your favourite color: ")
// })

// process.stdout.write("Enter your favourite color: ")


const myBuffer1 = Buffer.alloc(5, "Petre")
const myBuffer2 = Buffer.from("Petre")
const myBuffer3 = Buffer.concat([myBuffer1, myBuffer2]).toString()
process.stdout.write(myBuffer3)