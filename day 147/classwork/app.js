const http = require("http")

const server = http.createServer((req, res) => {
    const response = {
        method: req.method,
        path: req.url
    }

    res.end(JSON.stringify(response))
})

server.listen(3000, () => console.log("Port 3000"))