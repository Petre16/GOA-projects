import Books from "../models/books.model.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js"

export const getAllBooks = catchAsync(async (req, res, next) => {
    const allBooks = await Books.find();
    
    if (allBooks.length === 0) {
        return next(new AppError("No books are available!", 400))
    };

    return res.status(200).json(allBooks)
});

export const getSingleBook = catchAsync(async (req,res,next) => {
    const id = req.params.id

    const foundBook = await Books.findById(id)

    if (foundBook.length === 0) {
        return next(new AppError("You entered id wrong!", 404))
    }

    return res.status(200).json(foundBook)
})

export const addBook = catchAsync(async (req,res,next) => {
    const newBook = await Books.create(req.body)

    return res.status(201).json(newBook)
})

export const editBook = catchAsync(async (req,res,next) => {
    const id = req.params.id

    const bookToEdit = await Books.findByIdAndUpdate(id, req.body, {new: true})

    return res.status(200).json(bookToEdit)
})

export const deleteBook = catchAsync(async (req,res,next) => {
    const id = req.params.id

    const bookToDelete = await Books.findByIdAndDelete(id)

    if (deleteBook === null) {
        return next(new AppError(`Book not found to be deleted with id: ${id}`))
    }

    return res.status(204).json()
})