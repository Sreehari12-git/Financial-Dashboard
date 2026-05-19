import {Router} from "express"
import { authMiddleware } from "../middleware/authMiddleware";
import { getAllLiabilities } from "../controllers/liabilityController";

const router = Router();

router.get("/all", authMiddleware,getAllLiabilities)

export default router

