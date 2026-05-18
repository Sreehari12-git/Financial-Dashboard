import {Router} from "express"
import { loginUser } from "../controllers/authController"
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/login", loginUser)

export default router