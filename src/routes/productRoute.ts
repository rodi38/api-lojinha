import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controller/productController";
const productRouter = express.Router();

productRouter.get("/products", getAllProducts);
productRouter.post("/products/create", createProduct);
productRouter.get("/products/:id", getProductById);
productRouter.put("/products/:id", updateProduct);
productRouter.delete("/products/:id", deleteProduct);

export default productRouter;
