import { Router } from "express";
import productsfindControllers from "../controllers/productsfind.controllers.js";

const productsFind = Router();

productsFind.get("/productsfind/:id", productsfindControllers)

export default productsFind;