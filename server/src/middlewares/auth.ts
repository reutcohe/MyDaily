import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/secret';

interface TokenData {
    _id: string;
    role: string;
    // Add any other fields you have in your JWT payload
}

declare global {
    namespace Express {
        interface Request {
            tokenData: TokenData; 
        }
    }
}


export const auth = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.header("x-api-key");
    if (!token) {
        return res.status(400).json({ msg: "you must send a token" });
    }
    try {
        let decodeToken = jwt.verify(token, config.tokenSecret) as TokenData;
        req.tokenData = decodeToken;
        next();
    } catch (err) {
        return res.status(401).json({ msg: "Token not valid or expired" });
    }
};

export const authAdmin = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.header("x-api-key");
    if (!token) {
        return res.status(400).json({ msg: "you must send a token" });
    }
    try {
        let decodeToken = jwt.verify(token, config.tokenSecret) as TokenData;
        if (decodeToken.role !== "admin") {
            return res.status(401).json({ msg: "Token invalid or expired" });
        }
        req.tokenData = decodeToken;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ msg: "Token invalid or expired, log in again or you are a hacker" });
    }
};