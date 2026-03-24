import express from "express"

const app = express()

app.use(express.json());

const arr = ["apple", "orange", "banana", "grape", "pineapple"]

app.get("/info", (req, res) => {
    res.status(200).json(arr)
})

app.post("/info", (req, res) => {
    arr.push(req.body)
    res.status(200).json(arr)
})

app.listen(3000, () => console.log("Server is running on port 3000"))