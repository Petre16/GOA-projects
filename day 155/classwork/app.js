import express from "express"
import morgan from "morgan"
import errorHandler from "errorHandler"
import bodyParser from "body-parser"

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.json())

app.get("/users/:id", (req, res, next) => {
    const error = new Error("User not found")
    error.status = 404

    return next(error)
})
app.use(errorHandler())

app.listen(3000, () => console.log("Server is running on port 3000"))