// const { readFile } = require("fs/promises")

// const asyncFunc = async () => {
//     try {
//         const data = await readFile("./file.txt", "utf-8")
//         console.log(data)
//     }
//     catch (err) {
//         console.log(err)
// }}

// asyncFunc()

const { createWriteStream } = require("fs")

const dataF = createWriteStream("./main.txt")
dataF.write("Hello\n")
dataF.write("Petre\n")
dataF.write("Sikmashvili\n")
dataF.end()