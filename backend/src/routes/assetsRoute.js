import {Router} from "express"
import { authMiddleware } from "../middleware/authMiddleware";
import { createAsset, getAsset } from "../controllers/assetsController";

const router = Router();

router.post("/create", authMiddleware, createAsset);
router.get("/all", authMiddleware, getAsset);

export default router

