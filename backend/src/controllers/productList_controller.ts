import { QueryResult } from "pg";
import pool from "../database/db_connect";
import { Request, Response } from "express";

/**
 * Get All Data of Products Table.
 * @param req 
 * @param res 
 * @returns Products
 */
export const getProducts = async (req: Request, res:Response): Promise<Response> =>{
    try {
        const response: QueryResult = await pool.query('SELECT * FROM products ORDER BY product_id;');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
};

/**
 * Get all data of Products table by id
 * @param req 
 * @param res 
 * @returns Products by id
 */
export const getProductsById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM products WHERE product_id = $1', [id]);
        return res.json(response.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
};

/**
 * Create a new Products.
 * @param req 
 * @param res 
 * @returns 
 */
export const createProducts = async (req: Request, res: Response): Promise<Response> => {
    const {productId, nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct} = req.body;

    console.log(productId, nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct);

    if (productId !== null && nombreHeladoProduct !== null && productDescription !== null && priceProduct !== null && sizeProduct !== null && availabilityProduct !== null && imageProduct !== null){
        try {
            await pool.query('INSERT INTO products (product_id, nombre_helado, descripcion, precio, tamaño, disponibilidad, imagen) values ($1, $2, $3, $4, $5, $6, $7)',
                [productId, nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct]
            );
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
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    } else {
        return res.status(500).json('Internal Server Error');
    }
};

/**
 * Delete Products by id
 * @param req 
 * @param res 
 * @returns 
 */
export const deleteProducts = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);

    try {
        await pool.query('DELETE FROM products WHERE product_id = $1', [id]);
        return res.status(200).json(`The product ${id} delete successfully.`);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
};

/**
 * Update Products by Id
 * @param req 
 * @param res 
 * @returns 
 */
export const updateProducts = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const {categoryName, categoryDescription} = req.body;

    try {
        await pool.query('UPDATE Products SET category_name = $1, description = $2 WHERE category_id = $3',
            [categoryName,categoryDescription,id]
        );

        return res.json({
            message: 'Category Successfully Updated.',
            category: {
                id,
                categoryName,
                categoryDescription,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }

};