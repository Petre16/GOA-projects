import { getData, getSingleData, addBook, editBook, deleteBook} from "../Controllers/books.controllers.js";
import express from "express"

export const booksRouter = express.Router()

booksRouter.get("/", getData)
booksRouter.get("/:id", getSingleData)
booksRouter.post("/", addBook)
booksRouter.put("/:id", editBook)
booksRouter.delete("/:id", deleteBook)