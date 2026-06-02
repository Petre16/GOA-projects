import express from "express";

import { login, logOut, signUp, verify } from "../controllers/auth.contollers.js";
import { protect } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signUp", signUp);
authRouter.get("/verify/:code", verify);
authRouter.post("/logIn", login);
authRouter.get("/logOut", logOut)

authRouter.post("/autoLogin", protect, async (req, res, next) => {
    res.status(200).json(req.user);
})

export default authRouter;