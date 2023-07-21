import { NextFunction, Request, Response } from "express";

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
    res.send('oxentee');
    console.log('alooo');
    next();
}
