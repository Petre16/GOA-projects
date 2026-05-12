import express from "express"
import { getAllBooks, getSingleBook } from "../controllers/books.controller.js"

const booksRouter = express.Router()

booksRouter.route("/")
    .get(getAllBooks)

booksRouter.route("/:id")
    .get(getSingleBook)

export default booksRouter;