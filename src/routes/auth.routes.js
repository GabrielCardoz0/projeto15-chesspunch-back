import { Router } from "express";
import { singIn, singUp } from "../controllers/auth.controllers.js";
import { singInBodyValidation, userSchemaValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/auth/sing-in", singInBodyValidation, singIn);
router.post("/sing-up", userSchemaValidation, singUp);

export default router;