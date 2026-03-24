import express from "express"

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    const obj1 = {
        method: req.method,
        url: req.url,
        query: req.query,
        body: req.body
    }

    console.log(obj1)
    next()
})

app.use("/isWorking", (req, res, next) => {
    console.log(req.url, req.query)
    res.status(200).json([req.url, req.query])
    next()
})

app.listen(3000, () => console.log("Server is running on port 3000"))