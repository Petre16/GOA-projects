import ReadFile from "../Utils/ReadFile.js"

const DB = "./Database/data.json"

export const getData = async (req, res) => {
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
}

export const getSingleData = async (req, res) => {
    const id = Number(req.params.id)

    const books = await ReadFile(DB)
    
    const foundBook = books.filter(obj => obj.id === id)

    if (foundBook[0].length === 0) {
        res.status(404).send("Wrong ID!")
    }
    res.status(200).json(foundBook[0])
}

export const addBook = async (req,res) => {
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
}

export const editBook = async (req, res) => {
    const id = Number(req.params.id)

    const books = await ReadFile(DB)

    const newBook = req.body
    
    const foundBook = books.filter(obj => obj.id === id)

    if (foundBook.length === 0) {
        res.status(404).send("Not found!")
    }

    if (Object.keys(newBook).length === 0) {
        res.status(400).send("No Info to edit user!")
    }

    if (foundBook[0].name === newBook.name && foundBook[0].Author === newBook.Author && foundBook[0].category === newBook.category && foundBook[0].price === newBook.price) {
        res.status(400).send("No new info to edit user!")
    }

    if (newBook.name) foundBook[0].name = newBook.name
    if (newBook.Author) foundBook[0].Author = newBook.Author
    if (newBook.category) foundBook[0].category = newBook.category
    if (newBook.price) foundBook[0].price = newBook.price

    res.status(200).json(foundBook[0])
}

export const deleteBook = async (req, res) => {
    const id = Number(req.params.id)

    const books = await ReadFile(DB)

    if (books.find(obj => obj.id).length === 0) {
        return res.status(404).send("Not Found!")
    }

    books = books.filter(obj => obj.id !== id)

    res.status(200).json(books)
}