import express from "express";
import dotenv from "dotenv";
import booksRouter from "./routes/books.js"
import errorHandler from "./controllers/error.controllers.js"

const app = express()

dotenv.config()

app.use(express.json())
app.use("/api/books", booksRouter)
app.use("/api/status", (req, res, next) => {
    res.status(200).json({status: "Server is running"})
    next()
})

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))