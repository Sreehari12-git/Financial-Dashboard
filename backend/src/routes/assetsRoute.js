import {Router} from "express"
import { authMiddleware } from "../middleware/authMiddleware";
import { createAsset } from "../controllers/assetsController";

const router = Router();

router.post("/create", authMiddleware, createAsset)

export default router

