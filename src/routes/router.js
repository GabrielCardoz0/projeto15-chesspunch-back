import express from "express"
import productsRoute from "./products.routes.js";

const router = express();

router.use(productsRoute);

export default router;