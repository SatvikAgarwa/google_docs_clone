import { Router } from "express";
import { loginSchema, registerSchema, validateData } from "../middelware/Validation";

const authRouter = Router();

authRouter.post("/login", validateData(loginSchema), login);
authRouter.post("/register", validateData(registerSchema), register);

export default authRouter;