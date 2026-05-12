import ReadFile from "../utils/ReadFile.js"
import WriteFile from "../utils/WriteFile.js"
import AppError from "../utils/AppError.js"
import catchAsync from "../utils/catchAsync.js"

export const getAllBooks = catchAsync(async (req, res, next) => {
    const allBooks = await ReadFile(process.env.DB)

    if (allBooks.length === 0) {
        return next(new AppError("No books are available", 400))
    }

    res.status(200).json(allBooks)
})