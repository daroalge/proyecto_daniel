"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = require("./routes/users_routes");
const product_routes_1 = require("./routes/product_routes");
const productList_routes_1 = require("./routes/productList_routes");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(users_routes_1.userRoutes);
app.use(product_routes_1.productRoutes);
app.use(productList_routes_1.productListRoutes);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
