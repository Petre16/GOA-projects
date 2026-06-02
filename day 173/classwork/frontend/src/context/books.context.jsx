import { createContext } from "react"

const booksContext = createContext()

const booksProvider = () => {
    const getBooks = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api`)

        if(!res.ok) {
            throw new Error("Error")
        }

        setBooks(res)
    }
}