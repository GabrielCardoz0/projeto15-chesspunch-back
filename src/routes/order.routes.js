import { Router } from "express";
import { creditCardOrder } from "../controllers/order.controllers.js";
import { orderSchemaValidation } from "../middlewares/oderSchemaValidation.middleware.js";

const confirmRouter = Router();

confirmRouter.post("/confirm/order", orderSchemaValidation, creditCardOrder);

export default confirmRouter;