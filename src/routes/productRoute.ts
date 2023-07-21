import express from "express";
import {getAllProducts} from "../controller/productController";
const productRouter = express.Router();

productRouter.get('/products', getAllProducts);

export default productRouter;