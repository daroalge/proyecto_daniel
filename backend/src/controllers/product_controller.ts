import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import pool from "../database/db_connect";

require('dotenv').config();

export const listProducts = async (req: Request, res: Response): Promise<Response> => {
        try {
            const response = await pool.query('select * from products');
            return res.status(201).json(
                response.rows
            );
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    
};

