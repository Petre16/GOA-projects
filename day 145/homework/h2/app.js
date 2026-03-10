const { createWriteStream } = require("fs")

const create = () => {
    const myWriteStreamer = createWriteStream("text.txt")
    myWriteStreamer.write("Line 1")
    myWriteStreamer.end()
}
create()