import express from "express"

export const productController = express.Router()

let products = [
    {
        id: 0, name: "Phone 1", price: 500
    },
    {
        id: 1, name: "Phone 2", price: 700
    },
    {
        id: 2, name: "Phone 3", price: 850
    }
]


productController.get("/", (req, res) => {
    res.status(200).json(products)
})

const addProduct = (req, res) => {
    const newProduct = req.body
    products.push(newProduct)
    res.status(200).json(products)
}

export default addProduct