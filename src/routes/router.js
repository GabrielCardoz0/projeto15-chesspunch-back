import express from "express"
import productsRoute from "./products.routes.js";
import productsFind from "./productsFind.routes.js";
import routerUser from "./auth.routes.js";
import confirmRouter from "./order.routes.js";

const router = express();

router.use(productsRoute);
router.use(productsFind);
router.use(routerUser);
router.use(confirmRouter);

export default router;