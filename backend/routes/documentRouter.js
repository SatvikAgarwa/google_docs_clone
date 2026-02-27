import { Router } from "express";
import { authMiddleware } from "../middelware/authMiddleware.js";
import { createDocument } from "../controllers/controller.js";

const documentRouter = Router();

documentRouter.post('/create', authMiddleware, createDocument)

export default documentRouter;