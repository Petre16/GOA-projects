import express from "express";
import dotenv from "dotenv";

const app = express()

let arr = [
    {
        name: "Petre",
        surname: "Sikmashvili",
        age: 12
    },
    {
        name: "Giorgi",
        surname: "IakobiSvili",
        age: 12
    }
]

app.get("/products", (req, res) => {
    res.status(200).json(arr)
})

app.get("/products/:id", (req, res) => {
    const param = Number(req.params.id)
    const product = arr.filter(product => product.id === param)
    res.status(200).json(product[0])
})

dotenv.config()

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))