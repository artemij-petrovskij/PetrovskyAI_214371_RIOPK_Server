const jwt = require('jsonwebtoken')
import { Request, Response, NextFunction } from "express";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    if (req.method === "OPTIONS") {
        return next();
    }

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(403).json({ message: "Authorization header is missing" });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: "Token is missing" });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || 'secret');
        
        // Генерация нового токена (если нужно)
        jwt.sign({}, process.env.ACCESS_TOKEN_SECRET || 'secret', { expiresIn: '15m' }, (err: any, newToken: string) => {
            if (err) console.error('Refresh token error:', err);
            console.log(`RT token ${newToken}`);
        });

        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: 'Invalid token' });
    }
};