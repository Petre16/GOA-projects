import express from "express";

const arrPro = [
    { id: 0, name: "red apple", price: 1.00, category: "fruit"},
    { id: 1, name: "green apple", price: 2.00, category: "fruit"},
    { id: 2, name: "yellow apple", price: 1.00, category: "fruit"},
    { id: 3, name: "pineapple", price: 6.30, category: "fruit"},
    { id: 4, name: "orange", price: 3.10, category: "fruit"},
    { id: 5, name: "grape", price: 7.00, category: "fruit"},
    { id: 6, name: "banana", price: 2.60, category: "fruit"},
    { id: 7, name: "carrot", price: 1.50, category: "vegetables"},
    { id: 8, name: "tomato", price: 3.30, category: "vegetables"},
    { id: 9, name: "potato", price: 1.20, category: "vegetables"}
]

const app = express();

