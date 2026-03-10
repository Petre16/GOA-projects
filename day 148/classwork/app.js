const http = require("http")

const server = http.createServer((req, res) => {
    const arr = [
        {
            id: 0,
            name: "Petre",
            surname: "Sikmashvili",
            age: 12,
            country: "Georgia"
        },
        {
            id: 1,
            name: "Davit",
            surname: "Stepniashvili",
            age: 12,
            country: "Georgia"
        },
        {
            id: 2,
            name: "Nikoloz",
            surname: "Iobidze",
            age: 12,
            country: "Georgia"
        }
    ]

    switch (req.method) {
        case "GET":
            res.statusCode = 200
            res.end(JSON.stringify(arr))
        case "POST":
            res.statusCode = 200
            res.end(req.body)
        case "PUT":
            res.statusCode = 200
            res.end("Sikmashvili Petre")
        case "DELETE":
            res.statusCode = 200
            res.end([])
    }
})

server.listen(3000, () => console.log("Server is running on port 3000"))