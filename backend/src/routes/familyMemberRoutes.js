import { Router } from "express";
import { getFamilyMembers } from "../controllers/familyMemberController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router()

router.get("/all", authMiddleware, getFamilyMembers);

export default router