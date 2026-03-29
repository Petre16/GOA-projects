import express from "express"

const app = express()

let count = 0

app.use((req, res, next) => {
    count++
    console.log(`Total Requests: ${count}`)

    next()
})

app.get("/count", (req, res) => {
    res.end(`Hello! Request on this server sent ${count} times`)
})

app.listen(3000, () => console.log("Server is running on port 3000"))