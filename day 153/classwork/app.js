import express from "express"
import { productRouter } from "./Routers/products.route.js"
import { productController } from "./controllers/products.controllers.js"

const app = express()

app.use("/products", productRouter)
app.use("/products", productController)

app.listen(3000, () => console.log("Server is running on port 3000"))