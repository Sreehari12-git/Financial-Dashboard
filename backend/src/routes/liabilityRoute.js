import {Router} from "express"
import { authMiddleware } from "../middleware/authMiddleware";
import { createLiability, getAllLiabilities } from "../controllers/liabilityController";

const router = Router();

router.get("/all", authMiddleware,getAllLiabilities)
router.post("/create", authMiddleware, createLiability)

export default router

