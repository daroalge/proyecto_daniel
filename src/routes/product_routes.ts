import { Router } from "express";
import { listProducts } from "../controllers/product_controller";

export const productRoutes = Router();
productRoutes.get('/product/list', listProducts);