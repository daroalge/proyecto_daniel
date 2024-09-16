"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product_controller");
exports.productRoutes = (0, express_1.Router)();
exports.productRoutes.get('/product/list', product_controller_1.listProducts);
