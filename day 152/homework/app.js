import express from "express"
import ReadFile from "./utils/ReadFile.js"

const DB = "./Database/data.json"

const app = express()

app.use(express.json())

app.get("/books", async (req, res) => {
    const books = await ReadFile(DB)
    let updated = books

    const { price, category, limit, sort } = req.query

    if (price) {
        updated = books.filter(book => Number(book.price) === Number(price))
    }

    if (category) {
        updated = books.filter(book => book.category === category)
    } else {
        updated = books
    }

    if (limit) {
        if (Number(limit) <= 0) {
            updated = []
        } else {
            updated = books.slice(0, Number(limit))
        }
    }

    if (sort) {
        if (["desc","descending"].includes(sort)) {
            updated = books.sort((a,b) => b.price - a.price)
        } else if (["asc","ascending"].includes(sort)) {
            updated = books.sort((a,b) => a.price - b.price)
        } else {
            updated = []
        }
    }

    if (updated.length === 0) {
        res.status(400).send("Your query has no matching book")
    }

    res.status(200).json(updated)
})

app.get("/books/:id", async (req, res) => {
    const id = Number(req.params.id)

    const books = await ReadFile(DB)
    
    const foundBook = books.filter(obj => obj.id === id)

    if (foundBook[0].length === 0) {
        res.status(404).send("Wrong ID!")
    }
    res.status(200).json(foundBook[0])
})

app.post("/books", async (req,res) => {
    const books = await ReadFile(DB)

    const newBook = req.body

    if (!newBook.name || !newBook.Author || !newBook.category || !newBook.price) {
        res.status(400).send("Not enough info to add product")
    }

    if (books.map((book) => book.name === newBook.name && book.Author === newBook.Author && book.category === newBook.category && book.price === newBook.price).some(el => el)) {
        res.status(400).send("Book with that id already exists.")
    }

    newBook.id = books.length
    books.push(newBook)
    res.status(200).json(books)
})

app.listen(3000, () => console.log("Server is running on port 3000"))