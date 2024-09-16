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
    const {nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct} = req.body;

    console.log( nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct);

    if ( nombreHeladoProduct !== null && productDescription !== null && priceProduct !== null && sizeProduct !== null && availabilityProduct !== null && imageProduct !== null){
        try {
            await pool.query('INSERT INTO products (nombre_helado, descripcion, precio, tamaño, disponibilidad, imagen) values ($1, $2, $3, $4, $5, $6)',
                [ nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct]
            );
            return res.status(201).json({
                message: 'Products created successfully',
                category: {
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
            return res.status(500).json('Internal Server Error' + error);
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
    const {nameHelado, descripcionHelado, precioHelado, tamañoHelado, disponibilidadHelado, imagenHelado} = req.body;

    try {
        await pool.query('UPDATE products SET nombre_helado = $1, descripcion = $2, precio = $3, tamaño = $4, disponibilidad = $5, imagen = $6 WHERE product_id = $7',
            [nameHelado, descripcionHelado, precioHelado, tamañoHelado, disponibilidadHelado, imagenHelado, id],
        );

        return res.json({
            message: 'Category Successfully Updated.',
            product: {
                id,
                nameHelado,
                descripcionHelado, 
                precioHelado,
                tamañoHelado, 
                disponibilidadHelado, 
                imagenHelado,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }

};