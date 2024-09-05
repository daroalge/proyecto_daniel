import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import pool from "../database/db_connect";

require('dotenv').config();

export const generateToken = async (req: Request, response:Response): Promise<Response> => {
    const userName = req.body.username;
    const password = req.body.password;
    const query = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [userName, password]);
    const user = query.rows[0];
    if (query.rowCount !== null  && query.rowCount > 0){
        const accessToken = jwt.sign(user, `${process.env.CLAVE_JWT}`, {expiresIn: '1h'});
        return response.status(200).json({accessToken});
    } else {
        return response.status(400).json('User Not found');
    }
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const {firstName, lastName, userName, email, phone, password} = req.body;
    if (firstName !== null && lastName !== null && userName !== null && email !== null && phone !== null && password !==null){
        try {
            await pool.query('INSERT INTO users (firstname, lastname, username, email, telefono, password) values ($1, $2, $3, $4, $5, $6)',
                [firstName, lastName, userName, email, phone, password]
            );
            return res.status(201).json({
                message: 'User created successfully',
                category: {
                    firstName,
                    lastName,
                    userName, 
                    email,
                    phone,
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