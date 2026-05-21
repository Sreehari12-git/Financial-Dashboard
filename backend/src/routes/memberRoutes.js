import { Router } from "express";
import { getMemberDetails } from "../controllers/memberController";

const router = Router();

router.get("/:id", getMemberDetails);

export default router

