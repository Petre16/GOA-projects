import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import globalErrorHandler from "./controllers/error.controller.js";

import booksRouter from "./router/books.route.js";

dotenv.config()

const app = express();

app.use(express.json())
app.use("/api/books", booksRouter)

app.use(globalErrorHandler)

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Server is connected to database!")

        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    })