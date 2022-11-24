import { Router } from "express";
import productsControllers from "../controllers/products.controllers.js";

const productsRoute = Router();

productsRoute.get("/products", productsControllers);

export default productsRoute;