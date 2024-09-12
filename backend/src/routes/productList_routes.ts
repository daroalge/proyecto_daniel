import { Router } from "express";
import { getProducts, getProductsById, createProducts, deleteProducts, updateProducts } from "../controllers/productList_controller";
import { authenticateToken } from "../middleware/authorization";

export const productListRoutes = Router();

productListRoutes.get('/product/list', getProducts);
productListRoutes.get('/products/list/ :id', getProductsById);
productListRoutes.post('/products/list/createProducts', createProducts);
productListRoutes.delete('/products/list/deleteProducts/:id', deleteProducts);
productListRoutes.put('/products/list/updateProducts/:id', updateProducts);