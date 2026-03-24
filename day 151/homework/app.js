import express from "express"
import ReadFile from "./utils/readFile.js"

const DB = "./Database/data.json"

const app = express()

app.use(express.json())

app.get("/books", async (req, res) => {
    res.status(200).json(await ReadFile(DB))
})

app.get("/books/:id", async (req, res) => {
    const id = Number(req.params.id)

    const users = await ReadFile(DB)
    
    const foundBook = users.filter(obj => obj.id === id)

    if (foundBook[0].length === 0) {
        res.status(404).send("Wrong ID!")
    }
    res.status(200).json(foundBook[0])
})

app.listen(3000, () => console.log("Server is running on port 3000"))