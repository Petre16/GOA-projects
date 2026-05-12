import express from "express"
import { getAllBooks } from "../controllers/books.controller.js"

const booksRouter = express.Router()

booksRouter.route("/")
    .get(getAllBooks)



export default booksRouter;