import nodemailer from "nodemailer";
import dotenv from "dotenv"
import catchAsync from "./catchAsync";

dotenv.config()

const transporer = nodemailer.createTransport({
    host: "sandbox. smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWOORD
    }
})

export const sendEmail = catchAsync(async (options) => {
    await transporter. sendMail({
        from: '"Group 54 bookshop" <no-reply>',
        to: options.to,
        subject: options.subject,
        html: options.html
    })
})