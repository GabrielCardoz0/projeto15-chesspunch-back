import express from "express"
import productsRoute from "./products.routes.js";
import productsFind from "./productsFind.routes.js";

const router = express();

router.use(productsRoute);
router.use(productsFind);

export default router;