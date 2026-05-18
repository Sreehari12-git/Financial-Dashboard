import { Router } from "express";
import { getFamilyMemberById, getFamilyMembers } from "../controllers/familyMemberController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router()

router.get("/all", authMiddleware, getFamilyMembers);
router.get("/:id", authMiddleware, getFamilyMemberById);

export default router
