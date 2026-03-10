const { createServer } = require("http")
const querystring = require("querystring")

const server = createServer((req,res) => {
    const url = req.url
    const classObj = new URL(url)
    const pathname = classObj.pathname
    const splittePathname = pathname.split("?")[1]
    const jsonFormat = querystring.parse(splittePathname)
    res.end(JSON.stringify(jsonFormat))
})

server.listen(3000, () => console.log("server is running on port 3000"))