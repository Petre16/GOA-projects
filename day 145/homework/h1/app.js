const { createReadStream } = require("fs")
const { createInterface } = require("readline")

const create = () => {
    const myInterface = createInterface({
        input: createReadStream("text.txt")
    })
    const readLines = (data) => {
        console.log(data)
    }
    myInterface.on("line", readLines)
}

create()