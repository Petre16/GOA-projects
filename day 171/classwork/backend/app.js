import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import booksRouter from "./router/books.route.js";
import authRouter from "./router/auth.route.js";
import globalErrorHandler from "./controllers/error.controllers.js";

dotenv.config()

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/books", booksRouter);
app.use("/api/auth", authRouter)
app.use("/api/status", (req, res, next) => {
    res.status(200).json({status: "Server is running"});
    next()
})

app.use(globalErrorHandler)

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Server is connected to database!");

        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    });