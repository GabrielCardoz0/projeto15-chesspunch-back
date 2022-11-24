import { Router } from "express";

const router = Router();

router.post("/auth/sing-in", singIn);
router.post("/sing-up", singUp);

export default router;