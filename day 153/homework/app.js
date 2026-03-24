import express from "express"
import { booksRouter } from "./Routers/books.route.js"

const app = express()

app.use(express.json())

app.use("/books", booksRouter)

app.listen(3000, () => console.log("Server is running on port 3000"))