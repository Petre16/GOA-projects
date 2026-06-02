import express from "express";
import { signUp, verify } from "../controllers/auth.contollers.js"

const authRouter = express.Router()

authRouter.post("/signUp", signUp)

authRouter.get("/verify/:code", verify)

authRouter.post("/login", login)

export default authRouter;