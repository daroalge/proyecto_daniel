"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProducts = exports.deleteProducts = exports.createProducts = exports.getProductsById = exports.getProducts = void 0;
const db_connect_1 = __importDefault(require("../database/db_connect"));
/**
 * Get All Data of Products Table.
 * @param req
 * @param res
 * @returns Products
 */
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_connect_1.default.query('SELECT * FROM products ORDER BY product_id;');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getProducts = getProducts;
/**
 * Get all data of Products table by id
 * @param req
 * @param res
 * @returns Products by id
 */
const getProductsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield db_connect_1.default.query('SELECT * FROM products WHERE product_id = $1', [id]);
        return res.json(response.rows);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getProductsById = getProductsById;
/**
 * Create a new Products.
 * @param req
 * @param res
 * @returns
 */
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct } = req.body;
    console.log(productId, nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct);
    if (productId !== null && nombreHeladoProduct !== null && productDescription !== null && priceProduct !== null && sizeProduct !== null && availabilityProduct !== null && imageProduct !== null) {
        try {
            yield db_connect_1.default.query('INSERT INTO products (product_id, nombre_helado, descripcion, precio, tamaño, disponibilidad, imagen) values ($1, $2, $3, $4, $5, $6, $7)', [productId, nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct]);
            return res.status(201).json({
                message: 'Products created successfully',
                category: {
                    productId,
                    nombreHeladoProduct,
                    productDescription,
                    priceProduct,
                    sizeProduct,
                    availabilityProduct,
                    imageProduct
                }
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    }
    else {
        return res.status(500).json('Internal Server Error');
    }
});
exports.createProducts = createProducts;
/**
 * Delete Products by id
 * @param req
 * @param res
 * @returns
 */
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield db_connect_1.default.query('DELETE FROM products WHERE product_id = $1', [id]);
        return res.status(200).json(`The product ${id} delete successfully.`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.deleteProducts = deleteProducts;
/**
 * Update Products by Id
 * @param req
 * @param res
 * @returns
 */
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { categoryName, categoryDescription } = req.body;
    try {
        yield db_connect_1.default.query('UPDATE Products SET category_name = $1, description = $2 WHERE category_id = $3', [categoryName, categoryDescription, id]);
        return res.json({
            message: 'Category Successfully Updated.',
            category: {
                id,
                categoryName,
                categoryDescription,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.updateProducts = updateProducts;
