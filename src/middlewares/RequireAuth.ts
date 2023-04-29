import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken';
import dotevn from "dotenv";



dotevn.config();

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    let authHeader = ''
    if (req.headers.authorization) {
        authHeader = req.headers.authorization;
        const [authType, token] = req.headers.authorization.split(' ');

        if (authType === "Bearer") {
            console.log("Bearer", authType);
            console.log("Bearer", token);
            try {
                const decoded = JWT.verify(token, process.env.JWT_SECRET as string)

                console.log("decoded", decoded)
                success = true;

            } catch (err) {
                console.log(err)
            }
        }


        if (token == '') {
            return res.status(401).json({ error: 'Token não fornecido.' });
        }

    };

    if (success) {
        next();
    } else {
        res.status(403); //Not authorized
        res.json({ error: 'Não autorizado' });
    }


}