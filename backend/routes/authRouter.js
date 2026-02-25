import { Router } from "express";
import { loginSchema, registerSchema, validateData } from "../middelware/Validation.js";
import { loginController, regiterController } from "../controllers/controller.js";

const authRouter = Router();

authRouter.post("/login", validateData(loginSchema), loginController);
authRouter.post("/register", validateData(registerSchema), regiterController);

export default authRouter;